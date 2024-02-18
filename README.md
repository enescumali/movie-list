# TV shows

This is an application that allows users 
to see all the TV shows on air on the current day 
by selected country.

## Tech stack decisions

- Vue3
- Typescript
    - With ts it's easier to ensure type safety. 
    In addition, it's more efficient as it supports auto completion. 
- TailwindCSS
    - TailwindCSS is very useful in terms of trying things out and makes responsive design very easy.
- Vite
    - Vite is a build tool that's faster and easy to setup.
- Vitest
    - Vitest is the default testing library of Vue3 and it's pretty close to jest with better selectors and ease of use.
- Eslint
    - Eslint is a good way to ensure defined code standards.
- Prettier
    - Prettier is used to format the code automatically (with the help if IDE). So that different code styles are avoided.

## What's next? (What would I do if I had more time)

- MSW for mocking/intercepting API calls, so that when it's needed FE can work without backend.
    On top of that, it can be used in unit tests too. 
- Cypress for E2E testing. Currently most of the reusable components are already tested but 
    E2E testing is better to cover some critical flows end to end.
- Listing TV shows by selected date feature.
- Additional information in show detail such as character information.
- Carousel for show lists.
- List pages shows per genres.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### See code coverage with [Istanbul](https://istanbul.js.org/)

```sh
npm run coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```
