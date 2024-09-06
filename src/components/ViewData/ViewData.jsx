

import React from 'react';

const ViewData = ({ data, handleEdit  , handleRemove}) => {
    return (
        <div className="mt-5">
            <h1 className="text-center bg-danger py-2 mt-5 text-white rounded-3
            ">View</h1>
            <h2 className="text-primary">Submitted Data</h2>
            <table className="table table-bordered table-hover mt-4">

                <thead className="table-primary">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Email</th>
                        <th scope="col">Pass</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((rec, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{rec.Name}</td>
                            <td>{rec.Contact}</td>
                            <td>{rec.Email}</td>
                            <td>{rec.Pass}</td>
                            <td>{rec.Address}</td>
                     
                                <td>
                                <button className="btn btn-primary" onClick={() => handleEdit(rec.id)}>
                                    <i className="bi bi-pencil"></i> 
                                </button>
                                <button className="btn btn-danger ms-3" onClick={() => handleRemove(rec.id)}>
                                    <i className="bi bi-trash"></i> 
                                    </button>
                                </td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewData;
