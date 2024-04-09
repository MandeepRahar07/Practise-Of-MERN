import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

const ProductView = ({ AllData }: { AllData: Product[] }) => {
  return (
    <div>
      <div>
        {AllData.map((e) => (
          <div key={e.id}>
            <h1>{e.title}</h1>
            <h1>{e.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;