/**
 * Custom App
 * https://nextjs.org/docs/advanced-features/custom-app
 */

 import App from "next/app";
 import Layout from "../components/Layout/Layout";
 import "semantic-ui-css/semantic.min.css";

 // We use class component because right now we can not have a dedication in the app without class component

 class MyApp extends App {
  render() {
    // Component is whichever current page we are on
    const { Component } = this.props;

    return (
      <Layout>
        <Component />
      </Layout>
    );
  }
}

export default MyApp;