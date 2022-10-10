import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="yo mista white" />
        <p className="description">
          we need to cook
        </p>
    
      </main>

      <Footer />
    </div>
  )
}
