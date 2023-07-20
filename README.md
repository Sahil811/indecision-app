# Indecision App

This is a simple app to help make decisions by randomly choosing from user provided options. Built with React.

## Features

- Add options/choices to be randomly selected
- Click button to pick a random option
- All selected options get added to history
- Ability to remove options
- All data persists in localStorage
- Responsive design

## Usage

```
npm install
npm run dev-server
```

App will be running on http://localhost:8080

## Customizing

The main React components are located in `/src`.

Stylesheets are in `/src/styles` and use Sass.

The dev server uses webpack for transpiling and bundling code. Configs are in `webpack.config.dev.js`.

## Building for Production

```
npm run build
```

This will generate minimized css/js files in the `/dist` folder.

## License

This project is open source and available under the [MIT License](LICENSE).
