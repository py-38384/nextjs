import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main>
      <h2>Hallo from next js</h2>
    </main>
      <Link href='/users'>Go to the users</Link>
    </>
  )
}
