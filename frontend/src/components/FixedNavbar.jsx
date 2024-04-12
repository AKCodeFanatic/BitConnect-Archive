import React from 'react'

const FixedNavbar = () => {
    return (
        <div>       <navbar className="fixed top-0 z-10 bg-gray-50 w-full">
            <div className="md:hidden py-4 px-8 flex justify-between">
                <div className="text-xl">Logo</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
            </div>

            <div className="hidden md:grid grid-cols-4 gap-2 py-3 shadow-md">
                <div className="invisible"></div>
                <div>
                   
                    <ul className="inline-grid grid-cols-3 gap-x-2">
                        <li>Home</li>
                        <li>Popular Posts</li>
                        <li>Latest Posts</li>
                    </ul>
                </div>
                
                <div>

                    <ul className="inline-grid grid-cols-3 gap-x-2">
                        <li>Account</li>
                        <li>Messages</li>
                        <li>Log out</li>
                    </ul>
                </div>
            </div>

        </navbar></div>
    )
}

export default FixedNavbar