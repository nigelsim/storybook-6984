# Storybook error example

## Usage

Run:

```
npm install
npm run storybook
```

Observer the errors such as:

```
ERROR in ./node_modules/@storybook/angular/dist/client/preview/angular-polyfills.js
Module not found: Error: Cannot find module '/home/nigel/flyfreely-workspace/outsourcing/updated/skeleton-flyfreely/node_modules/source-map-loader/index.js!/home/nigel/flyfreely-workspace/outsourcing/updated/skeleton-flyfreely/node_modules/core-js/proposals/reflect-metadata.js'
 @ ./node_modules/@storybook/angular/dist/client/preview/angular-polyfills.js 5:0-45
 @ ./node_modules/@storybook/angular/dist/client/preview/globals.js
 @ ./node_modules/@storybook/angular/dist/client/preview/index.js
 @ ./node_modules/@storybook/angular/dist/client/index.js
 @ ./.storybook/config.js
 @ multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/config.js (webpack)-hot-middleware/client.js?reload=true

```

## Other Details

Works on 5.0.11 and 5.2.0-alpha.23 but not 5.1.x.
