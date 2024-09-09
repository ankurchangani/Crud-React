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
        
        setFormInput(singlerec); 
    };
    
    
    const handleRemove = (id) => {
        const removeStorage = Storage.filter(item => item.id !== id); 
        setStorage(removeStorage); 
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(FormInput.id){
            let rec  = Storage ;
            let newRecord = rec.map((rec)=> {
                if(rec.id === FormInput.id){
                    return FormInput;
                } else {
                    return rec;
                }
            });
            setStorage(newRecord);
        } else {
            const newFormInput = { ...FormInput, id: uuidv4() };
            setStorage([...Storage, newFormInput]);
        }
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
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-10">
                <div className="bg-white p-8 shadow-xl rounded-lg">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-teal-700">Name</label>
                                <input type="text" className="form-control border border-teal-500 w-full p-2 rounded-md focus:ring-2 focus:ring-teal-500" id="name" name="Name" value={FormInput.Name} onChange={handleForm} />
                            </div>
                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium text-teal-700">Contact</label>
                                <input type="number" className="form-control border border-teal-500 w-full p-2 rounded-md focus:ring-2 focus:ring-teal-500" id="contact" name="Contact" value={FormInput.Contact} onChange={handleForm} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="inputEmail4" className="block text-sm font-medium text-teal-700">Email</label>
                                <input type="email" className="form-control border border-teal-500 w-full p-2 rounded-md focus:ring-2 focus:ring-teal-500" id="inputEmail4" name="Email" value={FormInput.Email} onChange={handleForm} />
                            </div>
                            <div>
                                <label htmlFor="inputPassword4" className="block text-sm font-medium text-teal-700">Password</label>
                                <input type="password" className="form-control border border-teal-500 w-full p-2 rounded-md focus:ring-2 focus:ring-teal-500" id="inputPassword4" name="Pass" value={FormInput.Pass} onChange={handleForm} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="inputAddress" className="block text-sm font-medium text-teal-700">Address</label>
                            <input type="text" className="form-control border border-teal-500 w-full p-2 rounded-md focus:ring-2 focus:ring-teal-500" id="inputAddress" placeholder="1234 Main St" name="Address" value={FormInput.Address} onChange={handleForm} />
                        </div>

                        <div>
                            <button type="submit" className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Submit</button>
                        </div>
                    </form>
                </div>

                <ViewData data={Storage} handleEdit={handleEdit} handleRemove={handleRemove} />
            </div>
        </div>
    );
};

export default FormStorage;
