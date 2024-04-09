"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathname = usePathname();
    
    return (
        <>
            <div>
                <h1>Common layout for the about page</h1>
                {pathname !== "/about/aboutstudent" && (
                    <ul>
                        <li>
                            <Link href="/about">About Main</Link>
                        </li>
                        <li>
                            <Link href="/about/studentlist">Student List</Link>
                        </li>
                        <li>
                            <Link href="/about/aboutcollage">About College</Link>
                        </li>
                        <li>
                            <Link href="/about/aboutstudent">About Student</Link>
                        </li>
                    </ul>
                )}
                {children}
            </div>
        </>
    );
}
