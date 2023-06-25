import React, {useState} from 'react';
import {Link} from "react-router-dom";

const AddProduct = ({addProduct}) => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")

    function inputChange(){
        let newProduct = {
            title,
            image,
            price,
        };
        addProduct(newProduct)
        setTitle("")
        setImage("")
        setPrice("")
    }

    return (
        <div>
         <center>
             <h3 style={{
                 fontSize: "30px"
             }}>AddProduct</h3>
             <div style={{
                 margin: "15px"
             }}><input style={{
                 border: "2px solid yellow",
                 padding: "10px 20px",
                 background: "black",
                 borderRadius: "10px",
                 color: "white"
             }} placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
             </div>
             <div style={{
                 margin: "15px"
             }}><input style={{
                 border: "2px solid yellow",
                 padding: "10px 20px",
                 background: "black",
                 borderRadius: "10px",
                 color: "white"
             }} placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)}/>
             </div>
             <div style={{
                 margin: "15px"
             }}><input style={{
                 border: "2px solid yellow",
                 padding: "10px 20px",
                 background: "black",
                 borderRadius: "10px",
                 color: "white"
             }} placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
             </div>
             <div>
                 <Link to={`/list`}>
                     <button style={{
                         cursor: "pointer",
                         border: "2px solid blue",
                         padding: "10px 35px",
                         background: "black",
                         borderRadius: "10px",
                         color: "white"
                     }} onClick={inputChange}>create</button>
                 </Link>

             </div></center>
        </div>
    );
};

export default AddProduct;