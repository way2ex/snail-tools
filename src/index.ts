import { Command, program } from 'commander'
import initPackage from './commands/init-package/index'
import initLicense from './commands/init-license'

initPackage(program as Command)
initLicense(program as Command)

program.parse(process.argv)
