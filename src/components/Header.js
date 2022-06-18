import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui fixed">
            <div className="ui container center">
                <h1 style={{ textAlign: "center" }}>Contact Manager</h1>
            </div>

            <Link to="/">
                <button className="ui button blue" style={{ float: "right", marginTop: "20px" }}>List</button>
            </Link>
            <Link to="/add">
                <button className="ui button blue" style={{ float: "right", marginTop: "20px" }}>Add Contact</button>
            </Link>
        </div>
    )
}

export default Header;