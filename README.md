## About The Project...

This library is a work in progress and is not production ready. It is currently best viewed through Chrome since it has not been thoroughly QA'd yet in other browsers.

Styling is pretty broken at the moment as I try to figure out an alternative to using typings-for-css-modules so not all settings are going to be functional at the moment.

Also keep in mind I am still experimenting with different implementations. For example, right now I have higher order component called Patternize that I'm still debating whether or not to use or naybe reduce the amount of things it does.

This library was built with Create-React-App and was built with Atomic Design in mind.


### To Start the Project
To start this application run the two commands below. If you do not have yarn installed please follow this link for instructions on how to install it.

https://yarnpkg.com/en/docs/install

```
yarn
npm start
```

### Notes
- I call the props bindings because if you were to reference them they would sometimes be this.props.props which I think looks silly and bindings helps resolve that.

### Issues to be Resolved
- Documentation needs to be implemented to explain the file structure.
- Warnings need to be implemented
- Review performance of rendering times and implement more performant options.
- All remaining "any" types need to be set to defined types.
- Currently working through whether or not to use typings-for-css-modules just because it prevents me from being update to be on the most recent style-loader and doesn't appear to be maintained well. So styles won't be fully operational.
- Figuring out a better way to merge passed and default bindings. I currently am testing out a recursive funciton that should replace the need for having to use a deep clone. This should improve performance; however, it appears rendering time isn't improving and I need to dig in further.
- Responsive components aren't fully supported yet and I am currently working on a good way to implement that.
- Testing is barely implemented and still needs to be configured.
- Rules need to be established for presets (e.g. how many and what properties should be allowed to be overwritten?).
- All javascript classes need to be converted to pure functions to follow the functional paradigm.

### Helpful Resources

- Functional Component HOC in Typescript
https://github.com/microsoft/TypeScript/issues/28938#issuecomment-445932102

- Hooks API as a way to replace redux...
https://itnext.io/an-alternative-to-react-redux-by-react-hooks-api-for-both-javascript-and-typescript-c5e9a351ba0b

- Helpful React + Typescript Information
https://fettblog.eu/typescript-react/

- Component to Component Communication
https://www.javascriptstuff.com/component-communication/

- Typescript React Tidbits
https://www.pluralsight.com/guides/composing-react-components-with-typescript

- Typescript Cheatsheet
https://basarat.gitbooks.io/typescript/docs/testing/jest.html

- React + Typescript Cheatsheet
https://github.com/sw-yx/react-typescript-cheatsheet .

- React + Redux Cheatsheet
https://github.com/piotrwitek/react-redux-typescript-guide .

- React + Typescript Example Components
https://github.com/piotrwitek/react-redux-typescript-guide/tree/master/playground/src

- Optional Data Attributes
https://stackoverflow.com/a/47425958/7141930

- Best Practice To Import Lodash Modules
https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark

- React Hooks
https://www.robinwieruch.de/react-hooks-fetch-data/

- React Hooks Explanations
https://usehooks.com/

- React Hooks More Info
https://blog.bitsrc.io/understanding-hooks-in-react-a-deep-dive-d5d5dc88ecd9

- React Hooks Morer Info
https://medium.com/@vcarl/everything-you-need-to-know-about-react-hooks-8f680dfd4349

- React Children
https://mxstbr.blog/2017/02/react-children-deepdive/#child-components

## Typescript Info

- Typescript hype .
https://www.reddit.com/r/typescript/comments/abw0l5/typescript_is_awesome/

- Typescript hype 2.0 .
https://www.reddit.com/r/reactjs/comments/abtrxy/everything_i_write_in_2019_will_be_in_typescript/

