import { useState } from 'react'
import EyeOff from '../assets/images/EyeOff.svg'
import EyeOn from '../assets/images/EyeOn.svg'

function UsernameForm({className}){
    return (
        <div class={className}>
            <input type="text" id="uname" class="border-b-[0.065rem] border-weak-grey w-full placeholder-weak-grey py-[1.12rem] text-[1.25rem]" placeholder="Username"></input>
        </div>
    )
}

function PasswordForm({className}){
    const [isVisible, setVisibility] = useState(false);
    const handleVisibility = () => {
        setVisibility(!isVisible);
    };
    return (
        <div class={className}>
            <div className="border-b-[0.065rem] border-weak-grey flex">
                <input type={isVisible ? "text" : "password"} id="password" class="w-full placeholder-weak-grey py-[1.12rem] text-[1.25rem]" placeholder="Password"></input>
                <button class="z-10 relative opacity-30" onClick={handleVisibility}><img src={isVisible ? EyeOn : EyeOff} class="w-8"/></button>
            </div>
        </div>
    )
}

export {UsernameForm, PasswordForm}