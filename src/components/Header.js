import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            color: "black",
            padding: "10px 0",
            background: "#181818",
            margin: "0 0 10px 0"
        }}>
            <Link to="/add"><h2 style={{
                 color: "white"
            }}>AddProduct</h2></Link>
            <Link to="/list"><h2 style={{
                 color: "white"
            }}>ListProduct</h2></Link>
        </div>
    );
};

export default Header;