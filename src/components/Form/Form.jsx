

import React, { useState, useEffect } from 'react';
import getdata from '../../js/main.js';
import ViewData from '../ViewData/ViewData.jsx';
import { v4 as uuidv4 } from 'uuid';

const FormStorage = () => {
    const [FormInput, setFormInput] = useState({
        Name: '',
        Contact: '',
        Email: '',
        Pass: '',
        Address: '',
    });

    const [Storage, setStorage] = useState(getdata());

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormInput({ ...FormInput, [name]: value });
    };


    
    const handleEdit = (id) => {
        const singlerec = Storage.find(item => item.id === id);
        console.log("itemToEdit", singlerec);
       
        setFormInput(singlerec); 
        
    }
    
    // Remove data 
    const handleRemove = (id) => {
        const removeStorage = Storage.filter(item => item.id !== id); 
        setStorage(removeStorage); 
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // const newFormInput = { ...FormInput, id: Math.floor(Math.random() * 10000) };

        const newFormInput = { ...FormInput, id: uuidv4() };


        setStorage([...Storage, newFormInput]);
    
        setFormInput({
            Name: '',
            Contact: '',
            Email: '',
            Pass: '',
            Address: '',
        });
    };
    

    useEffect(() => {
        localStorage.setItem('Storage', JSON.stringify(Storage));
    }, [Storage]);

    return (
        <div style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="row">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control border-primary" id="name" name="Name" value={FormInput.Name} onChange={handleForm} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input type="number" className="form-control border-primary" id="contact" name="Contact" value={FormInput.Contact} onChange={handleForm} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control border-primary" id="inputEmail4" name="Email" value={FormInput.Email} onChange={handleForm} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control border-primary" id="inputPassword4" name="Pass" value={FormInput.Pass} onChange={handleForm} />
                        </div>

                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control border-primary" id="inputAddress" placeholder="1234 Main St" name="Address" value={FormInput.Address} onChange={handleForm} />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <ViewData data={Storage} handleEdit = {handleEdit} handleRemove = {handleRemove} />
            </div>
        </div>
    );
};

export default FormStorage;
