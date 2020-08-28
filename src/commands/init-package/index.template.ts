import { parse } from 'path'
export const packageJson = {
    name: parse(process.cwd()).name,
    version: '0.0.1',
    private: false,
    description: '',
    keywords: [],
    license: 'MIT',
    files: [],
    bin: {},
    main: 'index.js',
    scripts: {
        test: 'echo "Error: no test specified" && exit 1',
    },
    homepage: '',
    bugs: '',
    repository: {
        type: 'git',
        url: '',
    },
    author: {
        name: 'Knissing',
        email: 'vac872089248@gmail.com',
    },
}

export const LICENSE: { [key: string]: string } = {
    MIT: `MIT License

Copyright (c) Knissing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
}
