"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <div>
            Navbar
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
            </ul>
            <button onClick={() => router.push("/product")}>
                Products
            </button>
            <button onClick={()=> router.push("/todolist")}>Todolist</button>
        </div>
    );
};

export default Navbar;
