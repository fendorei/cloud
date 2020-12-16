import Head from 'next/head'
import React from "react";

class MyApp extends React.Component {
    constructor(props) {
      super(props)
      this.Component = props.Component
      this.pageProps = props.pageProps
    }

    render() {
      return <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>
        {this.Component(this.pageProps)}
      </>
    }
}

export default MyApp