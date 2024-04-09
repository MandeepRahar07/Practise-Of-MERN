
import Link from 'next/link'
const studentlist = () => {
  return (
    <div>studentlist
     <ul>
        <Link href="/studentlist/1">
        <li >
            ANil
        </li>
        </Link>

        <Link href="/studentlist/2">
        <li >
            sunil
        </li>
        </Link>
        
     </ul>
    </div>
  )
}

export default studentlist