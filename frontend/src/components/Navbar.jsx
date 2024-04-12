import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-around flex-wrap bg-white py-2 px-16">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="font-semibold text-orange-500 cursor-pointer text-2xl tracking-tight">BitConnect Logo</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:justify-end lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex" >
                        <a href="#responsive-header" className="block p-3 rounded text-base mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 mr-4 hover:bg-orange-100">
                                HOME
                        </a>
                       
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar