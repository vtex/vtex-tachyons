# vtex-tachyons

This project is an **extension** of [tachyons](https://github.com/tachyons-css/tachyons).
Files in `src/` add or redefine classes in `tachyons`, and the final built files bundle the original `tachyons`.

## How to use

Install

```sh
npm i vtex-tachyons --save
```

You can find the built CSS file in `vtex-tachyons/css/vtex-tachyons.min.css`.

Link in your application:
```html
<link rel="stylesheet" href="vtex-tachyons.min.css">
<link rel="stylesheet" href="theme.min.css">
```

or

```js
//React Webpack import
import 'vtex-tachyons'
import 'theme'
```

**IMPORTANT!**: You should **not** import `tachyons` in your project. It is already built as part of `vtex-tachyons`.

## How to develop

### Local Setup

Clone the repo from github and install dependencies through npm.

```
git clone https://github.com/vtex/vtex-tachyons
cd vtex-tachyons
npm install
```

#### Dev

If you want to just use everything in tachyons/src as a jumping off point and
edit all the code yourself, you can compile all of your wonderful changes by
running

```npm start```

This will output both minified and unminified versions of the css to the css directory and watch the src directory for changes.
It's aliased to the command:

```npm run build:watch```

If you'd like to just build the css once without watching the src directory run

```npm run build```

If you want to check that a class hasn't been redefined or 'mutated' there is a linter to check that all of the classes have only been defined once. This can be useful if you are using another library or have written some of your own css and want to make sure there are no naming collisions. To do this run the command

```npm run mutations```
