import PlayerImage from '../assets/images/login_brasil.png'
import { UsernameForm, PasswordForm } from '../components/login_forms';

function Login() {
    const screenStyle = {
        "background": "linear-gradient(147deg, rgba(137, 170, 40, 0.75) 33.76%, rgba(221, 255, 0, 0.75) 74.59%)"
    };
    return (
        <div class="flex h-screen bg-gradient-to-br from-[#89AA28] from-25% to-[#DDFF00] to-75% w-full p-12" style={screenStyle}>
            <div class="flex w-full justify-end items-center">
                <div class="bg-white rounded-[2.5rem] m-20 py-28 px-20 w-[46rem] h-[56rem] shadow-inner">
                    <h1 class="font-medium text-[2.5rem] pb-6">Log in</h1>
                    <h2 class="text-[1.5rem]">Enter your account details</h2>
                    <div className="my-24">
                        <UsernameForm className="mb-10"/>
                        <PasswordForm className="my-10"/>
                        <label><a href='#'><u>forgot password?</u></a></label>
                    </div>
                    <button className="w-full h-auto p-[0.625rem] text-[1.3125rem] text-white font-bold my-4" style={{"border-radius": "0.625rem", "background": "linear-gradient(180deg, #98A039 0.75%, #DF0 143.27%)"}}>Login</button>
                    <label className='block text-center my-4'>Don't have an account? <a className="text-[#0F3DDE]" href='#'>Sign Up</a></label>
                
                </div>
            </div>
            <div class="flex w-full justify-start items-center">
                <img class="h-[64rem] ml-20 flex-shrink-0" src={PlayerImage}/>
            </div>

        </div>
    )
}

export default Login;