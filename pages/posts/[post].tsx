import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

const EDGE_ENDPOINT = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''

interface Props {
  title: string
}

export default function Post({ title }: Props) {
  const og = {
    title,
    description: '만나서 반가워요',
    image: `${EDGE_ENDPOINT}/api/og?title=${encodeURIComponent(title)}`,
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
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
          <h1>{title.toUpperCase()}</h1>
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

export async function getServerSideProps(context: any) {
  const title = context.params.post ?? 'OG Generator Playground'

  return {
    props: {
      title: title.replaceAll('-', ' '),
    },
  }
}
