
import React, { useEffect, useState } from 'react'
import Mappriduct from './Mappriduct';
import Pagination from './Pagination';

function ProductAll() {
const [data, setData] = useState([]);
const [page, setPage ] = useState(1);
const [totalpage , settotalpage] = useState()
const [search, setSearch] = useState("");
const [sort , setSort ] = useState("");
const [category, setCategory] = useState("");
const [stockavilable, setstockavilable] = useState("");
const length = data.length;
console.log(search);


const fetchdata = async () => {
  try {
    const sorting = sort ? `&_sort=price&_order=${sort}` : "";
    const filtercategory = category ? `&category=${category}` : "";
    const stockavilableorNot = stockavilable ? `&stockavilable=${stockavilable}`: "";

      const response = await fetch(`http://localhost:3000/mandeep?_page=${page}&_limit=3&name_like=${search}${sorting}${filtercategory}${stockavilableorNot}`);
      console.log(response);
      if (response.ok) {
          const data = await response.json();
          setData(data);
      
var totalCount = response.headers.get('X-Total-Count');

settotalpage( parseInt(totalCount/3));
      } else {
          console.log('Failed to fetch data.');
      }
  } catch (err) {
      console.log(err);
  }
}


// const fetchdata = async()=>{
//  await fetch(`http://localhost:3000/mandeep?_page=${page}&_limit=3`).then((res)=>
//    res.json()
//   ).then((res2)=>{
//     setData(res2)
//     console.log(res2)
//   }).catch((err)=>{
//     console.log(err)
//   })
// }


console.log(totalpage);
useEffect(()=>{
  const debouncing = (setTimeout(() => {
    fetchdata();
  }, 1000))
  return () => {
    // Clean up the timeout on unmount or when dependencies change
    clearTimeout(debouncing);
  };
 
},[page,search,sort,category,stockavilable])

 const dicrease = ()=>{
  setPage(page - 1)
 }

 const increase = ()=>{
  setPage(page + 1)
 }

  return (
    <div>Product
      <div>
        <label htmlFor="">Search by Name</label>
        <input type="text" onChange={(e)=> setSearch(e.target.value)} />
      </div>

      <div>
        <select onChange={(e)=> setSort(e.target.value)}>
          <option value="">Default</option>
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </div>
      <div>

        <select onChange={(e)=> setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="iphone">phone</option>
          <option value="watch">watch</option>
          <option value="airpods">airpods</option>
        </select>

      </div>

      <div>
      <select onChange={(e)=> setstockavilable(e.target.value)}>
          <option value="">Stock avialablebility</option>
          <option value="true">Avilable</option>
          <option value="false">Not Avilable</option>
          
        </select>
      </div>
      {
        data.map((ele)=>{
           return  <div>
            <Mappriduct ele = {ele}></Mappriduct>
           </div>
        })
      }
      
      <div>
      <Pagination page={page} increasepage ={increase} dicreasepage={dicrease} totalpage={totalpage} ></Pagination>
      </div>
    </div>
  )
}

export default ProductAll