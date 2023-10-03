/*
NAME: index
DESCRIPTION:
*/
import DataTable from '../components/DataTable'
import Image from 'next/image'
import Link from 'next/link'

import city from '../assets/A-Bustling-City.jpg'
import temple from '../assets/A-Quiet-Temple.jpg'
import spa from '../assets/A-Relaxing-Facial-at-a-Spa.jpg'

export default function Home() {
  return (
    <main className="home">
      <DataTable page='home' />
      <Image 
        src={city}
        width={300}
        height={300}
        priority
        alt=""
      />
      <Image 
        src={temple}
        width={300}
        height={300}
        priority
        alt=""
      />
      <Image 
        src={spa}
        width={300}
        height={300}
        priority
        alt=""
      />
      <Link href="/new">Other Page</Link>
    </main>
  )
}
