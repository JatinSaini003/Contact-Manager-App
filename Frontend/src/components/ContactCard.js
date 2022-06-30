import React from "react";
import user from '../Images/user.png';
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
                    <div className="header">{name}</div>
                    <div style={{ marginTop: "10px" }}>{email}</div>
                </Link>
                <i className="trash alternate outline icon" style={{ color: "red", textAlign: "center" }} onClick={() => props.clickHandler(id)} />
                <Link to="/edit" state={{ contact: props.contact }}>
                    <i className="edit alternate outline icon" style={{ color: "blue", marginLeft: "20px" }} />
                </Link>
            </div>
        </div>
    );
};

export default ContactCard;