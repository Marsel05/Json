import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";
import axios from "axios";
import {useState} from "react";
import EditProduct from "./components/EditProduct";

function App() {
    const API = "http://localhost:3000/products";
    const [product, setProduct] = useState([])
    const [oneProduct, setOneProduct] = useState([])



    // ADD PRODUCT
    async function addProduct(newProduct){
        await axios.post(API, newProduct);
    }
    // GET PRODUCT

    async function readProduct(){
        let {data} = await axios(API)
        setProduct(data)
    }
    // DELETE PRODUCT

    async function deleteProduct(id){
        await  axios.delete(`${API}/${id}`)
        readProduct()
    }
    // GET ONE PRODUCT
    async function getOneProduct(id){
        let {data} = await axios(`${API}/${id}`)
        setOneProduct(data)
    }
    // EDIT PRODUCT
    async function editProduct(id, editedProduct){
        await axios.patch(`${API}/${id}`, editedProduct)
        readProduct()
    }


  return (
    <div className="App">
<Header/>
        <Routes>
            <Route path="/add" element={<AddProduct addProduct={addProduct}/>}/>
            <Route path="/list" element={<ListProduct readProduct={readProduct} product={product} deleteProduct={deleteProduct}/>} />
            <Route path={`/edit/:id`} element={<EditProduct oneProduct={oneProduct} getOneProduct={getOneProduct} editProduct={editProduct}/>}/>
        </Routes>
    </div>
  );
}

export default App;
