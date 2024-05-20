Created for portfolio.

GID.Group - an interior design website for apartments.

To view the site: https://olha-maievska.github.io/gid-group-react/

To start the server, clone the repository, install the dependencies and run the command: `npm run server`

Technologies Used:

- React
- Redux Toolkit
- React Router Dom
- React Hook Form
- JSON Server
- SCSS

Commands:

`npm run dev` - runs the application in development mode;
`npm run server` - runs server on port 8000;
`npm run build` - builds the application in production mode;
`npm run deploy` - deploy the application;

Project Structure:

- `public`
  - `404.html` - redirect to 404 page
  - `favicon.ico` - favicon;
  - `index.html`
- `src` - project's source code;
  - `components` - React components;
  - `core` - project services;
  - `layouts` - project layouts;
  - `pages` - React components tied to router routes;
  - `routes` - project routing settings;
  - `store` - slice modules;
  - `utils` - helper reusable functions;
- `App.js` - main component;
- `index.js` - root component of the React application;
- `index.scss` - root stylesheet file;
- `.gitignore` - Git ignore configuration;
- `config-overrides.js` - alias support configuration;
- `db.json` - file with API responses;
- `package-lock.json` - hidden lock file;
- `package.json` - version management file;
- `README.md`
