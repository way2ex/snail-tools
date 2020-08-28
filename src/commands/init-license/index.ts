import { Command } from 'commander'
import { writeFileSync } from 'fs'
import { LICENSE } from '../init-package/index.template'

const currentDir = process.cwd()

export default function (program: Command): void {
    program
        .command('init-license')
        .description('create `LICENSE` file in current directory')
        .action(() => {
            const path = `${currentDir}/LICENSE`
            writeFileSync(path, LICENSE.MIT)
            console.log(`Wrote to ${path}.`)
        })
}
