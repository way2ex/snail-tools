import { Command } from 'commander'
import { prompt } from 'inquirer'
import { TEMPLATE_QUESTION_LIST } from './const'
import renderTemplate from './utils/render-template'
import getTemplateData from './utils/get-template-data'
import { writeFileSync, ensureFile, accessSync } from 'fs-extra'
import chalk from 'chalk'
import { execSync } from 'child_process'
import { join } from 'path'

export default function (program: Command): void {
    program
        .command('init-repo [destDir]')
        .description('Init a repo with specific template')
        .action(async (destDir) => {
            if (!destDir) {
                const { confirm } = await prompt([
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: 'Initializing a repo will generate files in current directory(this may override exsited files), continue to init ?',
                    },
                ])
                if (!confirm) { return }
                destDir = './'
            } else {
                try {
                    accessSync(destDir)
                    const { confirm } = await prompt([
                        {
                            type: 'confirm',
                            name: 'confirm',
                            message: `Directory '${destDir} is already exsits, continue to init ?'`,
                        },
                    ])
                    if (!confirm) { return }
                } catch {
                    /* ignore */
                }
            }

            const anwsers: Record<string, any> = await prompt([
                {
                    type: 'list',
                    name: 'template',
                    message: 'Select a template',
                    choices: TEMPLATE_QUESTION_LIST,
                },
            ])
            // generateRepo(anwsers.template)
            const templateData = await getTemplateData()
            const renderedFiles = await renderTemplate(anwsers.template, templateData)

            try {
                Object.keys(renderedFiles).forEach(async filename => {
                    // const dest = join(targetDir, filename)
                    const realFilename = filename.split('/').map(filename => {
                        // dotfiles are ignored when published to npm, therefore in templates
                        // we need to use underscore instead (e.g. "_gitignore")
                        if (filename.charAt(0) === '_' && filename.charAt(1) !== '_') {
                            return `.${filename.slice(1)}`
                        }
                        if (filename.charAt(0) === '_' && filename.charAt(1) === '_') {
                            return `${filename.slice(1)}`
                        }
                        return filename
                    }).join('/')
                    const targetPath = join(destDir, realFilename)
                    await ensureFile(targetPath)
                    writeFileSync(targetPath, renderedFiles[filename])
                })
                console.log(chalk.greenBright('All files are generated'))

                console.log(chalk.cyan('Install dependencys: '))
                execSync(`cd ${destDir} && yarn install`)
            } catch (e) {
                console.log(chalk.red(e))
                // chalk.greenBright('All generated file are removed')
            }
        })
}
