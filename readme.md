# Unit Test in Jest

We need this in our jason package, so that jest accepts modules.

```
"scripts": {
"test": "NODE_OPTIONS=--experimental-vm-modules jest"
},

```

[All about EXPECT in Jest](https://jestjs.io/docs/expect#expectstringcontainingstring)

Scripts:

```
npm run test

npm test -- --coverage

```

(In GitHUb ACTIONS-> We can define, that the test is run first before commit)
