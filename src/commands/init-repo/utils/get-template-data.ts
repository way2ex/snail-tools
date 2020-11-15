import { prompt, Question } from 'inquirer'

const questionList: Question[] = [
    {
        type: 'input',
        name: 'pkgName',
        message: 'the name of your package',
    },
    {
        type: 'input',
        name: 'description',
        message: 'the description of your package',
    },
    {
        type: 'input',
        name: 'keywords',
        message: 'the keywords of your package splited by comma (,)',
    },
]
export default function (): Promise<Record<string, any>> {
    return prompt(questionList).then(anwsers => {
        const { keywords } = anwsers
        return {
            ...anwsers,
            keywords: keywords.split(','),
        }
    })
}
