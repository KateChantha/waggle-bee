## WaggleBe App


### [Set up custom server](https://nextjs.org/docs/advanced-features/custom-server)

A custom Next.js server allows you to start a server 100% programmatically in order to use custom server patterns. Most of the time, you will not need this – but it's available for complete customization.

### [Custom App](https://nextjs.org/docs/advanced-features/custom-app)

Next.js uses the App component to initialize pages. You can override it and control the page initialization. We want to use custom app for

- Persisting layout between page changes
- Keeping state when navigating pages
- Add global CSS

To override the default App, create the file ./pages/_app.js

### Build UIs with Semantic UI React
- [Container](https://react.semantic-ui.com/elements/container/) - A container limits content to a maximum width.