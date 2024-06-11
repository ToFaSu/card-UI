import { useState } from "react"
import Navbar from './components/Navbar'
import Card from './components/Card'
import  products  from './Data/data'
import AddProduct from "./pages/AddProducts"

export default function App() {
  const [prods, setProds] = useState(products)
  return (

    <> <Navbar />
      <div className="row mt-4 ">
        {  prods.map((product, id) => <Card key={id} product={product} />)  }
      </div> 

      
       </>
  )
}

