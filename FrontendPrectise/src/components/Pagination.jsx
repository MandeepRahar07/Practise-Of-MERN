import React from 'react'

function Pagination({dicreasepage,page,increasepage,totalpage}) {
  return (
    <div>
  <button onClick={dicreasepage} disabled = {page==1}>Previos</button>
  <button >{page}</button>
  <button onClick={increasepage} disabled ={page==totalpage}>Previos</button>
    </div>
  )
}
export default Pagination