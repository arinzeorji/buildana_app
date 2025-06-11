import React, { useState } from 'react'
import UsersList from './UsersList';
import PageTitle from './Common/PageTitle';

const UserManagement = () => {

    const users = [
        {
            name: "John Doe",
            email: "johndoe@gmail.com",
            role: "admin"
        }
    ]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer"
    })

    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleUserRegistration = (e) =>{
        e.preventDefault();

        console.log(formData);
        // reset form field after submission
        setFormData({
            name: "",
            email: "",
            password: "",
            role:"customer"
        })


    }
    return (
        <div className="max-w-7xl mx-auto p-6">
            
            <PageTitle text={"ADD A NEW USER"} />

            <div className="p-6 rounded-lg mb-6 max-w-3xl mx-auto">
                <h3 className="text-lg font-bold mb-4">Enter User Details</h3>

                <form onSubmit={handleUserRegistration}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input 
                        value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            name="name" 
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input 
                        value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            name="email" 
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input 
                        value={formData.password}
                            onChange={handleChange}
                            type="password" 
                            name="password" 
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Role</label>
                        <select 
                            value={formData.role}
                            onChange={handleChange}
                            name="role" 
                            className="w-full p-2 border rounded"                            
                        >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button className="mt-6 w-full bg-green-500 text-whie py-2 px-4 rounded hover:bg-green-700" type="submit">Add New User</button>
                </form>
            </div>
        </div>
    )
}

export default UserManagement
