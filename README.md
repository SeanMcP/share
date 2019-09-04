# share

> 🎁 Share your code with the world

## Install

```sh
npm i @seanmcp/share
```

```html
<script src="https://unpkg.com/@seanmcp/share"></script>
```

## Use

```js
const share = require('@seanmcp/share')

function affirmation(name) {
    return `Hello ${name}; I'm glad you're here!`
}

share('affirmation', affirmation)
```