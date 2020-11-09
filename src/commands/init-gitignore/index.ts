import { Command } from 'commander'
import { writeFileSync } from 'fs'
import chalk from 'chalk'
import * as Template from './template'
const currentDir = process.cwd()

export default function (program: Command): void {
    program
        .command('init-gitignore')
        .alias('gitignore')
        .description('add `.gitignore` file in current directory')
        .action(() => {
            const path = `${currentDir}/.gitignore`
            writeFileSync(path, Template.Nodejs)
            console.log(chalk.green(`Wrote to ${path} successfully.`))
        })
}
