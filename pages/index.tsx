import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

const EDGE_ENDPOINT = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
const TITLE = 'OG Generator Playground'

export default function Home() {
  const og = {
    title: TITLE,
    description: '만나서 반가워요',
    image: `${EDGE_ENDPOINT}/api/og?title=${encodeURIComponent(TITLE)}`,
  }

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="satori-og-playground.vercel.app" />
        <meta name="twitter:title" content={og.title} />
        <meta name="twitter:description" content={og.description} />
        <meta name="twitter:image" content={og.image} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heading}>
          <p>Hello World</p>
        </div>

        <div className={styles.center}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>
      </main>
    </>
  )
}
