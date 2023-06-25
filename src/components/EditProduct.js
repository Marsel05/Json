import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const AddProduct = ({oneProduct, getOneProduct, editProduct}) => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const {id} = useParams();
    useEffect(()=>{
        getOneProduct(id)
    }, [])
    useEffect(() => {
        if (oneProduct) {
            setTitle(oneProduct.title);
            setImage(oneProduct.image);
            setPrice(oneProduct.price);
        }
    }, [oneProduct]);

    function saveOneProduct() {
        let editedProduct = {
            title,
            image,
            price,

        };
        editProduct(id, editedProduct)
    }

    return (
        <div>
            <center>
                <h3 style={{
                    fontSize: "30px"
                }}>EditProduct</h3>
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
                            background: "black",
                            borderRadius: "10px",
                            border: "2px solid blue",
                            padding: "10px 40px",
                            color: "white"
                        }} onClick={saveOneProduct}>save</button>
                    </Link>

                </div>
            </center>
        </div>
    );
};

export default AddProduct;