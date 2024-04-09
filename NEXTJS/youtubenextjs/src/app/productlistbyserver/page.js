import Product from './product'

async function Productlist1() {
    let data = await fetch('https://dummyjson.com/products')
    let jsondata = await data.json();
    return jsondata.products;
}

const Productlist = async () => {
    let product1 = await Productlist1();
    //  console.log(product);
    return (
        <div>Productlist

            {
                product1.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>
                                {item.title}
                            </h1>
                            <Product price={item.price}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Productlist