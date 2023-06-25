import React, {useEffect} from 'react';
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";

const ListProduct = ({readProduct, product, deleteProduct}) => {

    useEffect(() => {
        readProduct()
    }, [])
    const navigate = useNavigate()
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "0 20px",

        }}>
            {
                product.map((el) => (
                    <div style={{
                        borderRadius: "10px",
                        border: '2px solid blue',

                    }}>

                        <div style={{
                            background: "#181818",
                            width: "250px",
                            height: "400px",
                            textAlign: "center"
                        }}>
                            <img src={el.image} style={{
                                marginTop: "15px",
                                width: "150px"
                            }}  alt="img"/>
                            <h4 style={{
                                fontSize: "25px"
                            }}>{el.title}</h4>
                            <h4 style={{
                                fontSize: "25px"
                            }}>{el.price}</h4>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-around"
                            }}>
                                <Link to={`/edit/${el.id}`}>
                                    <button style={{
                                        fontSize: "20px"
                                    }} onClick={()=> navigate(`/edit/${el.id}`)}><AiFillEdit/></button>
                                </Link>
                                <button style={{
                                    fontSize: "20px"
                                }} onClick={()=>{ deleteProduct(el.id)}}><AiFillDelete /></button>
                            </div>

                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default ListProduct;