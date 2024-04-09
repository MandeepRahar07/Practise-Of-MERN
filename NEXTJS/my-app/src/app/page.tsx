import LearnBYLink from "@/components/LearnBYLink";
import Image from "next/image";
import LearnRouter from '../components/LearnROuter'
import MyGlobleCSS from '../components/MyGlobleCSS'
import LearnImage from '../components/LearnImage'

import LearnDataFetching from '../components/LearnDataFetching';
export default function Home() {
 
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* <LearnBYLink/> */}
     {/* <LearnRouter/> */}
     {/* <MyGlobleCSS/> */}
     {/* <LearnImage/> */}
     <LearnDataFetching/>
    </main>
  );


}
