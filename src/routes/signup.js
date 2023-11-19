import PialaImage from '../assets/images/signup_piala.png'
import GoogleIcon from '../assets/images/google.png'
import AppleIcon from '../assets/images/apple.png'
import {NameForm, EmailForm, PasswordForm} from '../components/forms'
import { Link, useNavigate } from 'react-router-dom'

function CheckUnameDupe(uname) {
    let foundId = -1;
    let isFound = false;
    const UserData = JSON.parse(localStorage.getItem("userData"));
    if (UserData != null) {
        UserData.forEach((userObj, idx) => {
            console.log(uname)
            console.log(userObj);
            console.log(userObj["uname"]);
            if(userObj["uname"] == uname) {
                isFound = true;
                foundId = idx; 
            }
        });
    }
   return [isFound, foundId];
}

function Signup() {
    let navigate = useNavigate();
    const submitHandler = () => {
        const uname = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        if (CheckUnameDupe(uname)[0]) {
            alert("Username is not available!");
        }
        else if (uname == "" || email == "" || password == "") {
            alert(uname == "" ? "Insert your username!" : email == "" ? "Insert your email address!" : "Insert your account password!")
        }
        else if (!document.getElementById("tos").checked) {
            alert("Read and agree with the terms of services!");
        }
        else {
            const newDataObj = {
                "uname": uname,
                "password": password,
                "email": email
            }
            alert("Sign Up success!");
            if(localStorage.getItem("userData") == null) {
                localStorage.setItem("userData", JSON.stringify([]));
            }
            let dataPayload = JSON.parse(localStorage.getItem("userData"));
            dataPayload.push(newDataObj);
            localStorage.setItem("userData", JSON.stringify(dataPayload));
            console.log(localStorage.getItem("userData"));
            navigate("/");
        }
    }
    return (
        <div class="Login w-screen flex">
            <div class="grow flex justify-center items-center w-full">
                <div class="w-112">
                    <h1 class='mb-14 font-medium text-4xl'>Get Started Now</h1> 
                    <NameForm />
                    <EmailForm />
                    <PasswordForm />
                    <div class="flex items-start">
                        <div class="flex items-center h-5 my-3">
                            <input id="tos" type="checkbox" value="" class="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            <label for="tos" class="ml-2 text-xs font-medium text-gray-900">I agree to the <a href='#'><u>terms & policy</u></a></label>
                        </div>
                    </div>
                    <button type='submit' onClick={submitHandler} class="text-white text-base font-bold w-full py-2.5 hover:brightness-75" style={{"border-radius": "0.625rem", "background": "#4CAF50"}}>Signup</button>
                    <div class="flex justify-center my-12 items-center">
                        <hr class="bg-weak-grey h-0.5 border-none rounded-sm opacity-20 w-full z-0"/>
                        <label class="px-1 text-xs z-0">Or</label>
                        <hr class="bg-weak-grey h-0.5 border-none opacity-20 w-full z-0"/>
                    </div>
                    <div class="flex justify-around">
                        <button type="button" class="border-2 border-weak-grey flex items-center px-4 rounded-xl z-10">
                            <img src={GoogleIcon} class="w-6 my-1 mr-2"/>
                            <label class="text-xs mr-2">Sign in with Google</label>
                        </button>
                        <button type="button" class="border-2 border-weak-grey flex items-center px-4 rounded-xl">
                            <img src={AppleIcon} class="w-6 my-1 mr-2"/>
                            <label class="text-xs mr-2">Sign in with Google</label>
                        </button>
                    </div>
                    <p class="mt-4 text-sm text-center">Have an account? <Link class="text-blue-link" to="/">Sign In</Link></p>
                </div>
            </div>
            <div class="flex flex-col w-full h-screen justify-center items-center" style={{"border-radius": "2.8125rem 0rem 0rem 2.8125rem", "background": "linear-gradient(147deg, rgba(137, 170, 40, 0.75) 33.76%, rgba(221, 255, 0, 0.75) 74.59%)"}}>
                <h1 className="font-bold text-white text-3xl w-[32rem] text-center font-[Roboto] m-2">Be a champion with a strong body, healthy mind and maximum stamina</h1>
                <img className="w-[32rem]" src={PialaImage} />
            </div>
        </div>
    )
}

export default Signup;