import { Command, program } from 'commander'
import initPackage from './commands/init-package/index'
import initLicense from './commands/init-license'
import initGitignore from './commands/init-gitignore'

initPackage(program as Command)
initLicense(program as Command)
initGitignore(program as Command)

program.parse(process.argv)
