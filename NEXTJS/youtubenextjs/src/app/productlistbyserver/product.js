"use client"

const Product = ({price}) => {
  return (
    <div>
        <button onClick={()=> alert(price)}>Click Price</button>
    </div>
  )
}

export default Product