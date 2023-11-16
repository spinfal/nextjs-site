import Document, { Html, Head, Main, NextScript } from 'next/document';

class ArcCdn extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script async src="https://arc.io/widget.min.js#J9eN1XUc"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default ArcCdn;