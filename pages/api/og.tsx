import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')?.slice(0, 100) ?? '만나서 반가워요!'

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 100,
            color: 'white',
            background: 'black',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div>👋, 🌎</div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji',
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)

    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
