"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter();
  const navigate = (name)=>{
    router.push(name)
  }
    return (


    <div>Login

        <Link href="/about" >go to About Page</Link>
        <button onClick={()=> navigate("/about")}>go to about</button>
    </div>
  )
}

export default Login