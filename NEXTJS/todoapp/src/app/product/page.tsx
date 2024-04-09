import React from 'react';
import ProductView from './ProductView';

interface Product {
  id: number;
  title: string;
  price:number;
}

async function fetchdata(): Promise<Product[]> {
  const data = await fetch("https://dummyjson.com/products");
  const data2: { products: Product[] } = await data.json();
  return data2.products;
}

const ProductFetch = async () => {
  const AllData = await fetchdata();

  return (
    <div>
      <h1>All Product You Can See At Here</h1>
     <ProductView AllData={AllData}/>
    </div>
  );
};

export default ProductFetch;
