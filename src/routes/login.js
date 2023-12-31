import PlayerImage from '../assets/images/login_brasil.png'
import { UsernameForm, PasswordForm } from '../components/login_forms';
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
    const screenStyle = {
        "background": "linear-gradient(147deg, rgba(137, 170, 40, 0.75) 33.76%, rgba(221, 255, 0, 0.75) 74.59%)",
    };
    const handleLogin = () => {
        const uname = document.getElementById("uname").value;
        const password = document.getElementById("password").value;
        console.log(uname);
        console.log(password);
        if(uname == "RealBarca" && password == "password123"){
            alert("Login Success! Welcome RealBarca FC");
            navigate("/home"); 
        }
        else {
            alert("Username or Password incorrect!");
        }
    }
    return (
        <div class="flex h-screen" style={screenStyle}>
            <div class="flex w-full justify-end items-center">
                <div class="bg-white rounded-[2.5rem] m-20 py-28 px-20 w-[46rem] h-[56rem] shadow-inner scale-[67%] mx-[-10rem]">
                    <h1 class="font-medium text-[2.5rem] pb-6">Log in</h1>
                    <h2 class="text-[1.5rem]">Enter your account details</h2>
                    <div className="my-24">
                        <UsernameForm className="mb-10"/>
                        <PasswordForm className="my-10"/>
                        <label><a href='#'><u>forgot password?</u></a></label>
                    </div>
                    <div className="hover:brightness-75 relative z-0" style={{"border-radius": "0.625rem", "background": "#4CAF50"}}>
                        <button className="w-full h-auto p-[0.625rem] text-[1.3125rem] text-white font-bold py-3 relative z-10" onClick={handleLogin} >Login</button>
                    </div>
                    <label className='block text-center my-4'>Don't have an account? <Link className="text-[#0F3DDE]" to='/signup'>Sign Up</Link></label>
                    <Link to="/home">Tes</Link>
                
                </div>
            </div>
            <div class="flex w-full justify-start items-center">
                <img class="scale-[67%]" src={PlayerImage}/>
            </div>

        </div>
    )
}

export default Login;