import React, {useState, useEffect} from 'react'
import meta from '../../assets/meta.jfif'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {loginUser} from '../../redux/slice/authSlice';
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {user, guestId} = useSelector((state)=> state.auth)
    const {cart} = useSelector((state)=> state.cart)

    //GET REDIRECT PARAMETER AND CHECK IF ITS CHECKOUT OR NOT
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");

    useEffect(() =>{
        if(user){
            if(cart.products.length > 0 && guestId){
                dispatch(mergeCart({guestId, user}))
                .then(()=>{
                    navigate(isCheckoutRedirect ? "/checkout" : "/");
                })
            }else{
                navigate(isCheckoutRedirect ? "/checkout" : "/");
            }
        }
    }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch])

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginUser({email, password}));
    }

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-2">
                        <h2 className="text-2xl font-bold">Buildana Account Login</h2>
                    </div>
                    <p className="text-center mb-6">
                    Enter Your username and Password to login</p>

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

                    <button type="submit" className="mt-2 w-full bg-black text-white px-2 py-3 rounded-lg text-semibold hover:bg-gray-800 transition">Login</button>
                    <p className="mt-6 text-center text-sm">
                        Dont have an account? {" "}
                        <Link to={`register?redirect=${encodeURIComponent(redirect)}`}
                        className="text-blue-500">Register</Link>
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

export default Login
