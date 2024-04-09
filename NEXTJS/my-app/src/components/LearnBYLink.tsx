import Link from "next/link"


function LearnBYLink() {
    const id:number = 2;
  return (
    <>
    <Link href="/admin">GO to admin Dashboard</Link>
    <Link href={`/user/settings/profile/${id}`}>GO to admin Dashboard</Link>
    
    </>
  )
}

export default LearnBYLink