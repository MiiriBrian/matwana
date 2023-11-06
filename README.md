
### My Notes
 This here is my design for a social media app ive iconically called Matwana
 
 Ill just list here the things ive used to set it up 

 All css is taken care of by tailwind template under globals.css file

 
 ### Tailwindcss 
 - for easy referencing of my css
 
 ### Appwrite 
 
 - Backend Auth, database, Storage and relationships
 - .env.local created for storing backend codes
 
 ### Shadcn 
 
 - Forms, toasts and buttons
 - coz its only adds whaat u need
 
 ### Vite
Vite is a new frontend build tool that aims to improve the developer experience for development with the local machine, and for the build of optimized assets for production.

### TanStack Query
The new react query
autocaching, pagination, mutations API, infinite scroll etc
https://tanstack.com/query/latest

https://codesandbox.io/s/react-query-debounce-ted8o 


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

