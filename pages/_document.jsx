import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => App,
            enhanceComponent: (Component) => Component,
          })
    
        const initialProps = await Document.getInitialProps(ctx)
    
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles]),
        }
    }
    render() {
        return (
            <Html lang='es'>
                <Head>
                    {CssBaseline.flush()}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument