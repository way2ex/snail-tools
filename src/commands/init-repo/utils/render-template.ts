import fs from 'fs'
import glob from 'globby'
import { join } from 'path'
import { render } from 'ejs'

export default async function renderTemplate (templateName: string, data: Record<string, any>): Promise<Record<string, string>> {
    const tempateDir = join(__dirname, '../../../../repo-templates', templateName)
    if (!fs.existsSync(tempateDir)) {
        return {}
    }
    const files: Record<string, string> = {}
    const _files = await glob('**/*', { cwd: tempateDir })

    for (const file of _files) {
        const sourcePath = join(tempateDir, file)
        const template = fs.readFileSync(sourcePath, 'utf-8')
        files[file] = await render(template, data)
    }
    return files
}
