import React, { useEffect } from 'react'
import { FaEdit, FaRegTrashAlt, FaAddressBook } from 'react-icons/fa';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import PageTitle from './Common/PageTitle';

const UsersList = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const {users, loading, error} = useSelector((state)=> state.auth);


useEffect(() =>{
    if(user && user.role !== "admin"){
        navigate("/")
    }
},[user, navigate])


useEffect(() =>{
    if(user && user.role === "admin"){
        dispatch(fetchUsers());
    }
},[user, dispatch])


const handleEditUser = (id) =>{
    navigate(`/admin/edituser/${id}`)
}


const handleDeleteUser = (id) =>{   
if(window.confirm("Are you sure you want to Delete this User?")){
    dispatch(deleteUser(id))

    }
}

if (loading){
    return <p>Loading ...</p>
}

if (error){
    return <p>Error {error}</p>
}
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="mt-6">

                    <div className="flex justify-between items-center">
                        <PageTitle text={"Registered Users"}/>
                        <Link to="/admin/addusers" className="py-2 px-3 bg-green-500 text-white flex gap-3 mr-9 mb-6">
                            <FaAddressBook className="mt-1"/> Add New User
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-gray-500">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                                <tr>
                                    <th className="py-2 px-4">User ID</th>
                                    <th className="py-2 px-4">Name</th>
                                    <th className="py-2 px-4">Email</th>
                                    <th className="py-2 px-4">Role</th>
                                    <th className="py-2 px-4"> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user._id} className="border-b hover:bg-gray-50 cursor-pointer">
                                            <td className="p-3">{user._id}</td>
                                            <td className="p-3">{user.name}</td>
                                            <td className="p-3">{user.email}</td>
                                            <td className="p-3">
                                                    {user.role ==="admin" ? "Admin" : "Customer"}
                                            </td>
                                            <td className="p-3 flex gap-8">                                                 
                                                <button onClick={() => handleEditUser(user._id)} className="text-yellow-500 hover:text-yellow-800"><FaEdit className="" /></button>
                                               
                                                <button onClick={() => handleDeleteUser(user._id)} className="text-red-500 hover:text-red-800"><FaRegTrashAlt className=""/></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="p-4 text-center text-gray-500" colSpan={4}>No Orders Found</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>

    )
}

export default UsersList
