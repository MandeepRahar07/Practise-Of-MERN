import React from 'react'
import Image from 'next/image'
import MyImage from '../../public/next.svg'
const LearnImage = () => {
  return (
  <>
   <Image src = {MyImage} alt="my" width={200} height={300} />
  </>
  )
}

export default LearnImage