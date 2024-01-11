# Unit Test in Jest

We need this in our jason package, so that jest accepts modules.

```
"scripts": {
"test": "NODE_OPTIONS=--experimental-vm-modules jest --verbose"
},

```

[All about EXPECT in Jest](https://jestjs.io/docs/expect#expectstringcontainingstring)

Scripts:

```
npm run test

npm test -- --coverage

```

Add
{
"transform": {}
}
as jest.config.json

for the mock

(In GitHUb ACTIONS-> We can define, that the test is run first before commit)

TEST befehle vor commit

1. Folderoptions - workspace

- remove /\*\*.git

2. in the .git folder - hooks - copy the hook you want to change

3. in the hook to use, remove sample and change waht you want

---

try test
change
