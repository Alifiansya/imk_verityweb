function UsernameForm({className}){
    return (
        <div class={className}>
            <input type="text" id="uname" class="border-b-[0.065rem] border-weak-grey w-full placeholder-weak-grey py-[1.12rem] text-[1.25rem]" placeholder="Username"></input>
        </div>
    )
}

function PasswordForm({className}){
    return (
        <div class={className}>
            <input type="password" id="password" class="border-b-[0.065rem] border-weak-grey w-full placeholder-weak-grey py-[1.12rem] text-[1.25rem]" placeholder="Password"></input>
        </div>
    )
}

export {UsernameForm, PasswordForm}