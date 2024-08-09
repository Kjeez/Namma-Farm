import React from 'react'

const SearchBar = () => {
  return (
    <>
    
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium  sr-only text-white">Search</label>
    <div class="relative">
        
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Products..." required />
        <div class="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </div>
</form>

    </>
  )
}

export default SearchBar