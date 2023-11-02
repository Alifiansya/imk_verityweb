import FootballImage from '../assets/images/login_img.png'
import GoogleIcon from '../assets/images/google.png'
import AppleIcon from '../assets/images/apple.png'
import {NameForm, EmailForm, PasswordForm} from '../components/forms'

function Login() {
    return (
        <div class="Login w-screen flex">
            <div class="grow flex justify-center items-center">
                <div class="w-112">
                    <h1 class='mb-14 font-medium text-4xl'>Get Started Now</h1> 
                    <NameForm />
                    <EmailForm />
                    <PasswordForm />
                    <div class="flex items-star">
                        <div class="flex items-center h-5 my-4">
                            <input id="tos" type="checkbox" value="" class="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            <label for="tos" class="ml-2 text-xs font-medium text-gray-900">I agree to the <a href='#'><u>terms & policy</u></a></label>
                        </div>
                    </div>
                    <button type='submit' class="text-white text-sm font-bold bg-green-secondary border-2 border-green-tertiary rounded-xl w-full py-1.5">Signup</button>
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
                    <p class="mt-4 text-sm text-center">Have an account? <a href='#' class="text-blue-link">Sign In</a></p>
                    
                </div>
            </div>
            <div>
                <img src={FootballImage} class="inline-flex grow justify-end h-screen "/>
            </div>
        </div>
    )
}

export default Login;