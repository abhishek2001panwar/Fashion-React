# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Fashion

This project was bootstrapped with [Vite](https://vitejs.dev/).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:5173 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://vitejs.dev/guide/testing.html) for more information.

### npm run build

Builds a production version of the app in the `dist` folder.

## Learn More

To learn more about Vite, take a look at the [Vite documentation](https://vitejs.dev/).

You can check out [Vite's default template](https://github.com/vitejs/vite/tree/main/create-vite-app) for a more detailed example.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).

## External Examples

- [Create React App](https://github.com/facebook/create-react-app)
- [Next.js](https://github.com/vercel/next.js)
- [Nuxt.js](https://github.com/nuxt/nuxt.js)
- [Svelte](https://github.com/sveltejs/template)
- [Vite](https://github.com/vitejs/vite/tree/main/create-vite-app)
- [Egg.js](https://github.com/eggjs/egg-init)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Nest.js](https://github.com/nestjs/nest-cli)
- [Quasar](https://github.com/quasarframework/quasar-template-default)
- [Gatsby](https://github.com/gatsbyjs/gatsby-starter-default)
- [NextAuth.js](https://github.com/nextauthjs/next-auth-example)
- [Strapi](https://github.com/strapi/strapi-starter-gatsby-blog)
- [Remix](https://github.com/remix-run/remix/tree/main/examples/with-vite)
- [Vite Starter App](https://github.com/antfu/vite-template)

## Using external APIs

This project uses external APIs to provide realistic product data. You can replace these with mock data for a simpler example.

To use mock data, replace the `fetch` calls in `src/api/products.js` with the following code:

```js
export const getProducts = async () => {
  return [
    {
      id: 1,
      name: 'T-shirt',
      price: 20,
      image: 'https://via.placeholder.com/350x150',
    },
    {
      id: 2,
      name: 'Hoodie',
      price: 40,
      image: 'https://via.placeholder.com/350x150',
    },
    {
      id: 3,
      name: 'Jeans',
      price: 60,
      image: 'https://via.placeholder.com/350x150',
    },
  ];
};
```

This will return an array of mock products instead of making real API requests.

## Technologies used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): The standard markup language for creating web pages and web applications.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): A stylesheet language used to describe the presentation of a document written in HTML.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): A high-level, dynamic, weakly typed language that supports object-oriented, imperative, and functional programming.
- [Vite](https://vitejs.dev/): A next generation frontend tooling that aims to provide the fastest development experience for modern web projects.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Query](https://react-query.tanstack.com/): A powerful, flexible, and easy-to-use data fetching library for React.
- [Axios](https://github.com/axios/axios): A promise based HTTP client for the browser and node.js.

These technologies are used to create a modern, performant, and scalable web application.

## Developer Information

This project was created by [Abhishek Panwar](https://github.com/abhishek2001panwar). Feel free to reach out if you have any questions or feedback!
## Explore Fashion
- [Explore](https://fashion-react-97m8ovvt4-abhishek2001panwars-projects.vercel.app/)
