
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello nextjs</h1>
      <Link  href="/login">GO to login page</Link>
     <Link href="/productlistbyserver">Product Page</Link>
    </main>
  );
}
