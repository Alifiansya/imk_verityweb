function NameForm() {
    return (
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium mb-1">Name</label>
            <input type="text" id="name" class="bg-white border border-weak-grey rounded-xl text-xs placeholder-weak-grey block w-full p-2.5" placeholder="Enter your name" required />
        </div>
    )
}

function EmailForm() {
    return (
        <div class="my-4">
            <label for="email" class="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" id="email" class="bg-white border border-weak-grey rounded-xl text-xs placeholder-weak-grey block w-full p-2.5" placeholder="Enter your email" required />
        </div>
    )
}

function PasswordForm(){
    return (
        <div class="mt-4">
            <label for="password" class="block text-sm font-medium mb-1">Your password</label>
            <input type="password" id="password" class="bg-white border border-weak-grey rounded-xl text-xs placeholder-weak-grey block w-full p-2.5" placeholder="Enter Password" required></input>
        </div>
    )
}

export {NameForm, EmailForm, PasswordForm}