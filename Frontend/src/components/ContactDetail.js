import React from "react";
import { useLocation } from "react-router-dom";
import user from '../Images/user.png';

const ContactDetail = () => {
    const location = useLocation();
    const { name, email } = location.state.contact;
    return (
        <div className="main" style={{ marginTop: "30px", textAlign: "center" }}>
            <div className="ui card centered" style={{ left: "87px" }}>
                <div className="image">
                    <img src={user} alt="user" />
                </div>

                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;