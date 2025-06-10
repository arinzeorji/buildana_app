import React, {useState} from 'react'
import meta from '../../assets/meta.jfif'
import {Link} from 'react-router-dom'



const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(`
            Account Registered \n
            Name: ${name} \n
            Email: ${email} \n
            Password: ${password} \n
        `)
        
    }
    return (
        <div className="flex">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-2">
                        <h2 className="text-2xl font-bold">Register New Account</h2>
                    </div>
                    <p className="text-center mb-6">
                    Enter Your Credentials here</p>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Name</label>
                        <input type="text" 
                               value={name} 
                               onChange={(e) => setName(e.target.value)}
                               className="w-full p-2 border rounded"
                               placeholder="Enter Email Address"
                        />

                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input type="email" 
                               value={email} 
                               onChange={(e) => setEmail(e.target.value)}
                               className="w-full p-2 border rounded"
                               placeholder="Enter Email Address"
                        />

                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Password</label>
                        <input type="password" 
                               value={password} 
                               onChange={(e) => setPassword(e.target.value)}
                               className="w-full p-2 border rounded"
                               placeholder="Enter Password"
                        />

                    </div>

                    <button type="submit" className="mt-2 w-full bg-black text-white px-2 py-3 rounded-lg text-semibold hover:bg-gray-800 transition">Register</button>
                    <p className="mt-6 text-center text-sm">
                        I have an account already? {" "}
                        <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                </form>
            
            </div>

            <div className="hidden md:block w-1/2 bg-gray-800">
                <div className="h-full flex flex-col justify-center items-center">
                    <img src={meta} 
                         alt="login image"
                         className="w-full h-[750px] object-center"
                         />
                </div>
            </div>
            
        </div>
    )
}

export default Register
