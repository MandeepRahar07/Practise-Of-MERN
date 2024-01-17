import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Authcontent } from '../ContextApi/ContextProvider';
import { Link } from 'react-router-dom';



function NewProduct() {
    const {data,setData} = useContext(Authcontent)
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    const [search , setSearch] = useState('');
    console.log(category);
    
    const fetchdata = async ()=>{
      const sorting = sort ? `&_sort=price&_order=${sort}` : "";
      const filterbycategry = category ? `&category=${category}` : "";
      const serchbyname = search ? `&name_like=${search}` : "";

        const res = await axios.get(` http://localhost:3000/mandeep?${sorting}${filterbycategry}${serchbyname}`);
        setData(res.data);
        console.log(data);
    }

    useEffect(()=>{

       const debounceTimer = ((setTimeout(() => {
        fetchdata();
       }, 1000 )))

       return () => clearTimeout(debounceTimer);
       
    },[sort,category,search]);

    const deletedata = async (id)=>{
      const res = await axios.delete(` http://localhost:3000/mandeep/${id}`);
      fetchdata();

  }

  const handledelete = (id)=>{
    deletedata(id);
  }


  return (
    <div>NewProduct
   
   <div>
    <label htmlFor=""> Search by Name</label>
    <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
   </div>

   <div>
    <label htmlFor="">Slect by category</label>
    <select name="" id="" onChange={(e)=> setCategory(e.target.value)}>
      <option value="">ALL</option>
      <option value="phone">PHONE</option>
<option value="watch">WATCH</option>
<option value="airpods">AIRPODS</option>
    </select>
   </div>

    <div>
      <label htmlFor="">Sort by price</label>
      <select onChange={(e)=> setSort(e.target.value)}>
        <option value="">All</option>
        <option value="asc">Accending</option>
        <option value="desc">Deccending</option>
      </select>
    </div>

        <div>
            {
                data.map((e,i)=>{
                   return <div key={i}>
                    <img src={e.imagelink} alt={e.name} width={"100px"} />
                    <p>{e.price}</p>
                    <h1>{e.category}</h1>
                    <Link to={`/product/${e.id}`}>
                     <button >More Details</button>
                    </Link>
                    <Link to={`/editproduct/${e.id}`}>
                    <button>Edit</button>
                    </Link>
                    
                    <button onClick={()=> handledelete(e.id)}>Delete</button>
                   </div>
                 })
            }
        </div>
    </div>
  )
}

export default NewProduct