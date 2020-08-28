import path from 'path'
import { Question } from 'inquirer'
export interface InitQuestionAnswer {
    private: boolean,
    name: string,
    version: string,
    description: string,
    keywords: string,
    license: string,
}
export const InitQuestions: Question[] = [
    {
        type: 'confirm',
        name: 'private',
        message: 'Is this package a private package?',
        default: false,
    },
    {
        type: 'input',
        name: 'name',
        message: 'package name',
        default (): string {
            return path.parse(process.cwd()).name
        },
    },
    {
        type: 'input',
        name: 'version',
        message: 'version',
        default: '0.0.1',
        validate (input: string): boolean {
            return /^\d+\.\d+\.\d+$/.test(input)
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'description',
    },
    {
        type: 'input',
        name: 'keywords',
        message: 'keywords',
    },
    {
        type: 'input',
        name: 'license',
        message: 'license',
        default: 'MIT',
    },
]
