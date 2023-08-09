# error-with-cause

`ErrorWithCause` extends `Error` with a cause.

Deprecated. This package is useless since Nodejs 16.9. and for recent browsers. Use code like this instead:

```js
new Error("my message", { cause: "whatever" })
```

```js
try {
  // Try something
} catch (cause) {
  throw new Error("While trying something, this happened", {cause})
}
```
  

