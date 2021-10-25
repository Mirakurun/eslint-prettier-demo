# eslint-prettier-demo

## Requirements

1. https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
2. https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## ESLint Rules

https://eslint.org/docs/rules/

## Prettier Options

https://prettier.io/docs/en/options.html

## Auto format on save

Add this to vscode `settings.json` file
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

## How to format
`Shift + Alt + F`