function NameForm() {
    return (
        <div class="mb-6">
            <label for="name" class="block text-sm font-medium">Name</label>
            <input type="text" id="name" class="bg-green-primary border-2 border-weak-grey rounded-xl text-xs placeholder-weak-grey block w-full p-2" placeholder="Enter your name" required />
        </div>
    )
}

function EmailForm() {
    return (
        <div class="mb-6">
            <label for="email" class="block text-sm font-medium">Email Address</label>
            <input type="email" id="email" class="bg-green-primary border-2 border-weak-grey rounded-xl text-xs placeholder-weak-grey block w-full p-2" placeholder="Enter your email" required />
        </div>
    )
}

function PasswordForm(){
    return (
        <div class="">
            <label for="password" class="block text-sm font-medium">Your password</label>
            <input type="password" id="password" class="bg-green-primary border-2 border-weak-grey rounded-xl text-xs placeholder-weak-grey block w-full p-2" placeholder="Enter Password" required></input>
        </div>
    )
}

export {NameForm, EmailForm, PasswordForm}