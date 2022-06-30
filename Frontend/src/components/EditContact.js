import React from "react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditContact(props) {
    const location = useLocation();
    const { id, name, email } = location.state.contact;


    const [Data, setData] = useState({ id: id, name: name, email: email });


    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All The fields are mandatory to fill!");
            return;
        };
        props.UpdateContactHandler(Data);
        setData({ name: "", email: "" });
    };


    return (
        <div className="ui main">
            <h2 style={{ marginTop: "30px" }}>Edit contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={Data.name} onChange={(e) => setData({ id: id, name: e.target.value, email: Data.email })} />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email" value={Data.email} onChange={(e) => setData({ id: id, name: Data.name, email: e.target.value })} />
                </div>

                <button className="ui button blue" type="submit">Update</button>
            </form>
        </div >
    )
}

export default EditContact;