import { useEffect, useState } from "react";
import "./App.css";
import Product from "./componets/product";

function App() {
  const [products, setProducts] = useState([]);
  const increaseQuantity = (id) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  };
  const decreaseQuantity = (id) => {
      setProducts((prev) => 
        prev.map((item) => {
        if(id === item.id & item.quantity > 0){
          return {...item, quantity: item.quantity - 1}
        }else{
          return item;
        }
      }));
  };
  const removeProduct = (id) => {
   const filteredList = products.filter((item) => 
    item.id !== id)
   setProducts(filteredList);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/5");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex min-h-screen justify-center items-center">
      <main className="flex flex-wrap h-auto flex-row gap-3 max-w-[900px]">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            quantity={product.quantity}
            image={product.thumbnail}
            increase={() => increaseQuantity(product.id)}
            decrease={() => decreaseQuantity(product.id)}
            remove={() => removeProduct(product.id)}
          />
        ))}
      </main>
    </section>
  );
}

export default App;
