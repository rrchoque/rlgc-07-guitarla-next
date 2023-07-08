import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({children, title = '', descripction = ''}) {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="descripction" content={descripction} />
        </Head>
        
        <Header />
        {children}
        <Footer />
    </>
  )
}
