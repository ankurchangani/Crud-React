


import React from 'react';

const ViewData = ({ data, handleEdit, handleRemove }) => {
    return (
        <div className="mt-10">
            <h1 className="text-center bg-red-600 py-2 mt-5 text-white rounded-lg">View</h1>
            <h2 className="text-primary text-lg font-semibold mb-4">Submitted Data</h2>
            <table className="table-auto w-full mt-6">
                <thead className="bg-blue-200">
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Contact</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Pass</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((rec, index) => (
                        <tr key={index} className="bg-gray-100">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{rec.Name}</td>
                            <td className="border px-4 py-2">{rec.Contact}</td>
                            <td className="border px-4 py-2">{rec.Email}</td>
                            <td className="border px-4 py-2">{rec.Pass}</td>
                            <td className="border px-4 py-2">{rec.Address}</td>
                            <td className="border px-4 py-2">
                                <button className="btn btn-primary" onClick={() => handleEdit(rec.id)}>
                                    <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-danger ml-3" onClick={() => handleRemove(rec.id)}>
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
