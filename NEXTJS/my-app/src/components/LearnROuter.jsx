"use client"

import {useRouter} from 'next/navigation'

function LearnRouter() {
    const router = useRouter();
    console.log(router);
  return (
    <>
    <h1>ye hai apna router</h1>
    <button onClick={()=> router.push("/users/homepage")}>go to admindash</button>
    </>
  )
}

export default LearnRouter