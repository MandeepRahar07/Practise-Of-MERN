import React from 'react'

function layout({children,right,left}) {
  return (
<>
{children}
{left}
{right} //slots
</>
  )
}

export default layout