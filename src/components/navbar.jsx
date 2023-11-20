import SearchBar from "./searchbar";
import {useState} from "react";
import {Link} from "react-router-dom"

function NavBar() {
    const [accDrop, setAccDrop] = useState(false);
    return (
    <div className="max-w-screen max-h-screen bg-[#FCFFEE] top-0 fixed w-full z-10" style={{"border-radius": "0rem 0rem 1.875rem 1.875rem"}}>
        <nav style={{"border-radius": "0rem 0rem 1.875rem 1.875rem", "background": "linear-gradient(147deg, rgba(137, 170, 40, 0.75) 33.76%, rgba(221, 255, 0, 0.75) 74.59%)"}}>
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto px-[2.06rem] py-[2.69rem]">
                <SearchBar />
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <button type="button" className="relative inline-flex items-center p-0.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4.71 17.29C4.08 17.92 4.52 19 5.41 19H18.58C19.47 19 19.92 17.92 19.29 17.29L18 16Z" fill="#969696"/>
                        </svg> 
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[0.625rem] font-medium text-white bg-[#FF6464] rounded-full -top-0.5 -end-0.5 dark:border-gray-900">20</div>
                    </button>

                    <button type="button" class="inline-flex items-center text-base font-medium text-center text-[#7D7D7D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6667 3.33325H3.33333C2.41666 3.33325 1.66666 4.08325 1.66666 4.99992V14.9999C1.66666 15.9166 2.41666 16.6666 3.33333 16.6666H16.6667C17.5833 16.6666 18.3333 15.9166 18.3333 14.9999V4.99992C18.3333 4.08325 17.5833 3.33325 16.6667 3.33325ZM16.3333 6.87492L10.8833 10.2833C10.3417 10.6249 9.65833 10.6249 9.11666 10.2833L3.66666 6.87492C3.45833 6.74159 3.33333 6.51659 3.33333 6.27492C3.33333 5.71659 3.94166 5.38325 4.41666 5.67492L10 9.16659L15.5833 5.67492C16.0583 5.38325 16.6667 5.71659 16.6667 6.27492C16.6667 6.51659 16.5417 6.74159 16.3333 6.87492Z" fill="#969696"/> </svg>
                        <span className="ms-2">Responses</span><span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs text-white font-medium bg-[#FF6464] rounded-full">2</span>
                    </button>
                    <div>
                        <button type="button" className="flex items-center gap-2" onClick={() => {setAccDrop(!accDrop); console.log(accDrop)}}>
                            <div className="h-10 w-10 bg-[#b7d7f5] rounded-full flex items-center justify-center text-[#101010]">RB</div>
                            <span>RealBarca FC</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 14.975C11.8667 14.975 11.7377 14.95 11.613 14.9C11.4877 14.85 11.3833 14.7834 11.3 14.7L6.69999 10.1C6.51665 9.91672 6.42499 9.68338 6.42499 9.40005C6.42499 9.11671 6.51665 8.88338 6.69999 8.70005C6.88332 8.51672 7.11665 8.42505 7.39999 8.42505C7.68332 8.42505 7.91665 8.51672 8.09999 8.70005L12 12.6L15.9 8.70005C16.0833 8.51672 16.3167 8.42505 16.6 8.42505C16.8833 8.42505 17.1167 8.51672 17.3 8.70005C17.4833 8.88338 17.575 9.11671 17.575 9.40005C17.575 9.68338 17.4833 9.91672 17.3 10.1L12.7 14.7C12.6 14.8 12.4917 14.8707 12.375 14.912C12.2583 14.954 12.1333 14.975 12 14.975Z" fill="black"/>
                            </svg>
                        </button>
                        <div id="dropdown" className={`${accDrop ? "visible" : "invisible"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2`}>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Account Settings</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Player Lineups</a>
                            </li>
                            <li>
                                <Link class="block px-4 py-2 hover:bg-gray-100" to="/">Sign out</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                    

                    
                </div>

            </div>
        </nav>
    </div>
    )
}

export default NavBar;