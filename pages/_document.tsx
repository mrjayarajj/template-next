import Document, { Html, Head , Main, NextScript } from 'next/document'


export default class CustomDocument extends Document{

    render() {

        console.log('hello from _document.tsx  (this log only execute only in server)');

        return (
            <Html>
                <Head>
                    <meta property="custom" content="yolo" />
                </Head>
            <body>
                <Main/>
            </body>
            <NextScript/>
            </Html>
        )
    }
}