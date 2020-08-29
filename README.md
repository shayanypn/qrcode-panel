# QR Code Panel

[![Build Status](https://travis-ci.com/shayanypn/qrcode-panel.svg?branch=master)](https://travis-ci.com/shayanypn/qrcode-panel)

Simple UI implemented in Vue.js to present a user account page for the QR Code App!

Implemented Features:
 - Tests with `Jest` 
 - CI/CD using Travis and gh-pages

[Live demo](https://shayanypn.github.io/qrcode-panel/)

## Available Scripts


    git clone https://github.com/shayanypn/qrcode-panel.git
    cd qrcode-panel
    yarn install
    yarn serve

    //test
    yarn run test:unit
    yarn run test:unit:coverage

    //build
    yarn run build
    


## Interesting Code

To help guide you through the interesting pieces of this implementation note the following.

-   The code also includes **unit test**  to provide a safety net and allow future work to refactor confidently.

### Component Structure
All code in this application should follow the below structure to be consistent with other parts of the application. The name of component or service ... consists of a folder/directory name and the entry point is the `index.ts` file. For other additional files like tests, you should add them under this folder with a suffix name, like `index.test.ts` or `index.stories.ts`.

    /[component name]
        /index.ts
        /template.html
        /index.test.ts
        /index.stories.ts

