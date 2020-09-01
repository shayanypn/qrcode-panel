
# QR Code Panel

[![Build Status](https://travis-ci.com/shayanypn/qrcode-panel.svg?branch=master)](https://travis-ci.com/shayanypn/qrcode-panel)

Simple UI implemented in Vue.js to present a user account page for the QR Code App!

Implemented Features:
 - Unit Tests handled by `Jest` 
 - Form validation handled by [Vue Formulate](https://vueformulate.com/)
 - internationalization handled by [Vue i18n](https://kazupon.github.io/vue-i18n/)
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

    //build and deploy
    yarn run build
    yarn run deploy
    


## Interesting Code

To help guide you through the interesting pieces of this implementation note the following.

-   The code also includes **unit test**  to provide a safety net and allow future work to refactor confidently.
- Regards of building reusable code,`Box` component build in a way so that it used in different part of application.

### Project Structure
As a project follow, some keywords explain how the application works. Page elements such as a menu, header,  custom styled boxes, and such staff are placed under the `components` directory. Pages contain multiple components and are located under the `containers` directory. To make all fetching request in one place so that we can easily maintain them later, we define an API service, which it's responsibility is to just provide us API calls. As a result, the project structure would be as follow:

    /public/ <- place 3rd parties resources like images, icons, ... 
    /src/ <- the main application
       /components/ <- re-usable element we have in a page
       /containers/ <- our pages
       /services/ <- services like API, Authentication and ...
       /translations/ <- internationalization files are here
       /App.vue <- main page, which also located styles
       /i18n.ts <- internationalization configuration
       /types.ts <- inerfaces and types
       ...

**Developer talk:** 
 - I used `bootstrap`, `font awesome` and `Google font` as tools to build the project, but as these are already in CDN and adding these all to the application, cause the production build size increased, I prefer to reference them in `index.html` file besides of adding them to the project. 
 - Also as we only have one page, and we don't have implementation of other pages or even a dropdown, I just added bootstrap CSS file, so tab  does not work. 
 - Internationalization work properly but there is an issue with `Vue Formulate` when combine it with `vue i18n`, as the builder mentioned [here](https://vueformulate.com/guide/internationalization/#registering-a-locale) is should work correctly, but issue is that when you change the language, form validation language does not change(I have tested to have validation and internationalization with other libraries that work fine, but due to lack of time I didn't use them).
 - For Internationalization I prefered to use  [the own word as key](https://github.com/shayanypn/qrcode-panel/blob/4e47cb83f454f6b1249f5443c556a1c1799543f0/src/translations/de.json#L2), so that later we can build an script to extract all new words and place in translations file automatically on any git merge, then we can easily some platform like [Crowding](https://crowdin.com/) to update the translation files.
 - It would be better to use some toastr libraries to interact on title or form submit.




### Component Structure
All code in this application should follow the below structure to be consistent with other parts of the application. The name of component or service ... consists of a folder/directory name and the entry point is the `index.ts` file. For other additional files like tests, you should add them under this folder with a suffix name, like `index.test.ts` or `index.stories.ts`.

    /[component name]
        /index.ts
        /template.html
        /index.test.ts
        /index.stories.ts

