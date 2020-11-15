# Snail-Tools
Snail is collection of some tools to generate some common files，such as `package.json`、`LICENSE` and so on.

## Quickstart
Install globally:
```bash
yarn add -g snail-tools
# 或者 npm i -g snail-tools

cd <your-repo-location>
# 然后可以直接使用其中的命令
snail init-pkg
```

## Files that can be generated

- `package.json`
- `LICENSE`
- `.gitignore` 
- A repo with specified template

## Publish package
First commit all changes in git:
```bash
git add .
git commit -m "type(scope): some message"
```

Then you should add an annotation tag with the name of new version:
```bash
git tag -a v0.0.4 -m "add a new feature"
```

Finally, run publish script:
```bash
yarn publish-pkg
```

