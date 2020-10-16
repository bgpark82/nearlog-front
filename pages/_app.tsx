import '../css/reset.css'
import '../css/global.css'

import Head from 'next/head'
import React from 'react'

const App = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>여행고파</title>
            </Head>
            <Component/>
        </>
    )
}

export default App
