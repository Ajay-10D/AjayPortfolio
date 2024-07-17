// app/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className='dark'>
            <Head>
                {/* Add any additional head elements here, such as React Bricks meta tags */}
                <link rel="stylesheet" href="https://unpkg.com/react-bricks-ui/dist/react-bricks-ui.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
