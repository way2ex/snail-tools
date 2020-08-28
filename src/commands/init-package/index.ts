import { Command } from 'commander'
import { writeFileSync } from 'fs'
import { prompt } from 'inquirer'
import { packageJson, LICENSE } from './index.template'
import { InitQuestionAnswer, InitQuestions } from './Questions'

const currentDir = process.cwd()
export default function (program: Command): void {
    program
        .command('init-package')
        .alias('init-pkg')
        .description('create `package.json` in current directory')
        .option('-y, --yes', 'use default value for all configs')
        .action(({ yes }) => {
            if (yes) {
                initDefault()
            } else {
                init()
            }
        })
}
function initDefault () {
    writeFiles(packageJson)
    console.log(`Wrote to ${currentDir}/package.json:\n`)
    console.log(JSON.stringify(packageJson, null, 4))
    console.log('\n')
}
function init () {
    prompt<InitQuestionAnswer>(InitQuestions).then((answers: InitQuestionAnswer) => {
        const { name, version, description, keywords, license = '' } = answers
        const newPackageJson = {
            ...packageJson,
            name,
            version,
            description,
            keywords: (keywords && keywords.split(/,|\s/)) || [],
            license,
        }
        console.log(`About to write to ${currentDir}/package.json:\n`)
        console.log(JSON.stringify(newPackageJson, null, 4))
        console.log('\n')
        prompt({
            type: 'confirm',
            name: 'confirm',
            message: 'Is this OK?',
            default: true,
        }).then(({ confirm }) => {
            if (confirm) {
                writeFiles(newPackageJson, LICENSE[license])
            } else {
                console.log('Aborted.\n')
            }
        })
    })
}
function writeFiles (packageJson: any, license = '') {
    writeFileSync(`${currentDir}/package.json`, JSON.stringify(packageJson, null, 4))
    if (license) {
        writeFileSync(`${currentDir}/LICENSE`, license)
    }
}
