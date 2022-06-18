import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from '../api/contacts';
// import data from '../api/db.json';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchResult, setSearchResult] = useState([]);

  //ADD CONTACT HANDLER
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
    // setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };


  // UPDATE CONTACT HANDLER
  const UpdateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;

    setContacts(contacts.map((contact) => {
      return (contact.id === id) ? { ...response.data } : contact;
    }));
  }


  // REMOVE CONTACT HANDLER
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }


  // SEARCH CONTACT HANDLER
  const SearchHandler = (SearchTerm) => {
    setSearchTerm(SearchTerm);
    if (SearchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(SearchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    }

    else {
      setSearchResult(contacts);
    }
  }


  useEffect(() => {
    const getContact = async () => {
      const allContacts = await retrieveContacts();
      setContacts(allContacts);
    }

    getContact();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ContactList contacts={SearchTerm.length < 1 ? contacts : SearchResult} Term={SearchTerm} SearchWord={SearchHandler} getContactId={removeContactHandler} />} />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/edit' element={<EditContact UpdateContactHandler={UpdateContactHandler} />} />
          <Route path='/contact/:id' element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
