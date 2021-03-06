import Document, { Html, Head, Main } from "next/document";
import DeferNextScript from "@/utils/lib/DeferNextScript";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const result = await Document.getInitialProps(ctx);
    return result;
  }

  render() {
    return (
      <Html lang='id'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            rel='icon'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/favicon-16x16.png'
          />
          <meta
            name='msapplication-TileImage'
            content='https://raw.githubusercontent.com/navetacandra/bellshade-website/main/public/icon/ms-icon-144x144.png'
          />
          <link rel='canonical' href='https://bellshade-website.vercel.app/' />
        </Head>
        <body className='bg-slate-100 dark:bg-slate-900 relative transition-all ease-out duration-75'>
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}
