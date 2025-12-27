import { useEffect } from 'react';
import './App.css'
import Product from './componets/product';

function App() {
  let products = [];
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts/5");
      const data = await response.json();
      products = data.products;
    } catch (error) {
      console.log("error");
    }
  }
  fetchData();
  }, [])
  

  return (
    <main>
      {products.map((item) => {
        return (
          <Product
          key={item.id}
          title={item.title}
          quantity={item.quantity}/>
        )
      })}
    </main>
  )
}

export default App
