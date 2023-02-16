import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function HelloWorld() {
  return (
    <>
      <Head>
        <title>OG Generator Playground</title>
        <meta name="description" content="OG Generator playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://satori-og.vercel.app/api/og" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hello World!</h1>
          <div>
            <p>만나서 반가워요! satory 테스트 해봅시다~</p>
          </div>
        </div>
      </main>
    </>
  )
}
