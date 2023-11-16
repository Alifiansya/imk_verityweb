function SearchBar() {
    return (
        <div className='max-w-md'>
            <div className="relative flex items-center w-full h-10 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden pl-4 pr-2">

                <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search activities" /> 
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;