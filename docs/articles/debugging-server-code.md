# Debugging server code

alt:V allows you to debug your server-side code just like you would do in [NodeJS](https://nodejs.org/en/learn/getting-started/debugging).

## How?

1. Enable inspector in `resource.toml`.

```toml
type = 'js'
main = 'main.js'

[inspector]
# You can also specify host and port if needed
# (127.0.0.1:9229 by default)
# host = '127.0.0.1'
# port = '9999'
```

2. Add NodeJS interval with 0 delay.

```js
setInterval(() => {}, 0)
```

3. Now you should be able to connect to inspector via Chrome DevTools for example:

    1. Open any webpage in Chrome
    2. Press f12 to open console
    3. Click on NodeJS icon

Video tutorial:

<iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/F7mzNho5un8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
