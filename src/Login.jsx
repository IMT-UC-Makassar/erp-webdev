import './App.css'

function Login() {
    return(
        <>

            <header className="bg-orange-300 text-white p-4 w-full h-16 flex"></header>
        <div id="terluar" >

            <div id="bg-login" className=" justify-center flex w-full h-full">
                <div id="img-login" className="w-full h-full absolute">
                    <div id="logo" className="flex flex-row justify-start absolute">
                        <img src="./assets/react.svg" alt="" className="w-16 bg-orange-300  h-9 ml-8 mt-5"/>
                        <img src="./assets/react.svg" alt="" className="w-full bg-orange-300  h-9 mt-5"/>
                    </div>
                </div>
                <div id="login-box" className="flex flex-col justify-center items-center w-2/6 mt-32 mb-16 h-fit bg-orange-300 rounded-l bg-opacity-80 ">
                    <div className="flex justify-center items-center p-5 text-amber-50 text-2xl">Welcome!</div>
                    <div id="username" className="flex w-2/3 mb-5 h-12 items-center justify-start pl-2 bg-amber-50">Username</div>
                    <div id="password" className="flex w-2/3 mb-20 h-12 items-center justify-start pl-2 bg-amber-50">Password</div>
                    <button id="sign-btn" className="w-2/3 h-fit mb-20 p-2 bg-sky-200 rounded-xl">Sign</button>
                </div>
            </div>
        </div>
            <footer id="footer" className="bg-orange-300 h-16 w-full"></footer>
        </>
        )

}

export default Login;