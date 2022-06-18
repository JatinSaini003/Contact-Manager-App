import React from "react";
import ContactCard from './ContactCard';
import { useRef } from 'react';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const inputref = useRef("");

    const getSearchTerm = () => {
        props.SearchWord(inputref.current.value);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    });

    return (
        <div className="ui celled list">
            <h2 style={{ marginTop: "50px" }}>
                Contact List
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputref} type="text" placeholder="Search Contact" className="prompt" style={{ marginBottom: '20px', width: "300px" }} value={props.term} onChange={getSearchTerm} />
                    <i className="search icon" style={{ position: "relative", top: "20px", right: "40px" }}></i>
                </div>
            </div>
            {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
        </div>
    )
}

export default ContactList;