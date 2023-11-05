import { useState } from 'react'
import EyeOff from '../assets/images/EyeOff.svg'
import EyeOn from '../assets/images/EyeOn.svg'

function NameForm() {
    return (
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" class="bg-white border border-weak-grey rounded-[0.625rem] text-xs placeholder-weak-grey block w-full p-2.5" placeholder="Enter your name" required />
        </div>
    )
}

function EmailForm() {
    return (
        <div class="my-4">
            <label for="email" class="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" id="email" class="bg-white border border-weak-grey rounded-[0.625rem] text-xs placeholder-weak-grey block w-full p-2.5" placeholder="Enter your email" required />
        </div>
    )
}

function PasswordForm(){
    const [isVisible, setVisibility] = useState(false);
    const handleVisibility = () => {
        setVisibility(!isVisible);
    };
    return (
        <div class="mt-4">
            <label for="password" class="block text-sm font-medium mb-1">Your password</label>
            <div className="border border-weak-grey rounded-[0.625rem] flex">
                <input type={isVisible ? "text" : "password"} id="password" class="bg-transparent rounded-[0.625rem] text-xs placeholder-weak-grey block w-full p-2.5 relative" placeholder="Enter Password" required></input>
                <button class="z-10 relative m-2 opacity-30" onClick={handleVisibility}><img src={isVisible ? EyeOn : EyeOff}/></button>
            </div>
        </div>
    )
}

export {NameForm, EmailForm, PasswordForm}