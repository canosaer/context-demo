/*
NAME: new
DESCRIPTION:
*/
import DataTable from '../components/DataTable'
import Image from 'next/image'
import Link from 'next/link'

import safari from '../assets/A-Safari-Expedition.jpg'
import cruise from '../assets/A-Traditional-Dhow-Cruise.jpg'
import forest from '../assets/A-Verdant-Forest.jpeg'

export default function Home() {
  return (
    <main className="home">
      <DataTable page='new'/>
      <Image 
        src={safari}
        width={300}
        height={300}
        priority
        alt=""
      />
      <Image 
        src={cruise}
        width={300}
        height={300}
        priority
        alt=""
      />
      <Image 
        src={forest}
        width={300}
        height={300}
        priority
        alt=""
      />
      <Link href="/">First Page</Link>
    </main>
  )
}
