import React, { useState } from 'react'
import List from './List'
import Dropdown from './Dropdown'


const Language = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <>
            <div className='flex g-2 gap-x-1'>
                <div>
                    <svg style={{
                        marginTop: "0.12rem"
                    }} className="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                </div>
                <div>
                    Select Language
                </div>
                <div className='cursor-pointer' onClick={() => {
                    setIsClicked(!isClicked)
                }} style={{
                    marginTop : "0.2rem"
                }}>
                   

                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            {
                isClicked ? <div><List /></div> : <div></div>
            }

        </>
    )
}

export default Language