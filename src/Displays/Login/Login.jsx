import '../../Styles/App.css'
import {useState} from "react";
import { Link , useNavigate} from 'react-router-dom';
import { useAuth } from "../../services/authContext.jsx";
import createAxiosInstance from "../../services/axiosInstance";
import logoCE from "../../assets/logo-CE.jpg"
function Login() {
    const { isAuthenticated, login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8888/api/v1/auth/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Received Token:', data.token);
                login(data.token);
                const axiosInstance = createAxiosInstance(isAuthenticated);

                // Use the Axios instance with the authentication token

                // Example: Make a GET request
                axiosInstance.get('/auth')
                    .then((response) => {
                        // Handle success
                        console.log('Authenticated request successful:', response.data);
                        navigate('/home')
                    })
                    .catch((error) => {
                        // Handle failure
                        console.error('Authenticated request failed:', error);
                    });
            } else {
                // Authentication failed, handle the error
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return(
        <>

            <header className="bg-orange-300 text-white p-4 w-full h-16 flex"></header>
        <div id="terluar" >

            <div id="bg-login" className=" justify-center flex w-full h-full">
                <div id="login-box"
                     className="flex flex-col justify-center items-center w-1/4 mt-32 mb-16 h-fit bg-orange-300 rounded-l relative">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-16 rounded-full w-auto"
                                src={logoCE}
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="home" method="POST">
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={email}
                                            autoComplete="email"
                                            onChange={handleEmailChange}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Link to="/home">
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={handleLogin}
                                        >
                                            Sign in
                                        </button>
                                    </Link>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
            <footer id="footer" className="bg-orange-300 h-16 w-full static bottom-0"></footer>
        </>
    )

}

export default Login;