import Head from 'next/head'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gym Pal 101 | Excercise Library</title>
        <meta name="description" content="Find excerises divided by muscles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Card />
    </div>
  )
}
