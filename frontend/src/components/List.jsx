import React, { useState } from 'react'

const List = () => {
    const [firstTable, setFirstTable] = useState(["Arabic", "Chinese", "Czech", "Dutch", "Filipino", "French" , "German" , "Indonesian" , "Italian" , "Japanese"])

    const [secondTable , setSecondTable] = useState(["Korean" , "Polish" , "Portugese" , "Russian" , "Slovenian" , "Spanish" , "Thai" , "Turkish" , "Ukrainian" , "Vietnamese"])
    return (
        <div className='flex gap-6'>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div style={{
                        marginTop: "0.4rem",
                        marginRight: "0.2rem"
                    }}>
                        <svg class="h-3 w-3 text-slate-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="9 6 15 12 9 18" /></svg>
                    </div>
                    <h5 className='font-bold'>Select Languages</h5>
                </div>

                <div>
                    {
                        firstTable.map((first)=>{
                            return (
                                <div className='text-sm pl-1 text-left text-blue-700 hover:bg-blue-400 hover:text-white'>
                                    <a href="">{first}</a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='flex flex-col' style={{
                marginTop : "0.2rem"
            }}>
            {
                        secondTable.map((first)=>{
                            return (
                                <div className='text-sm pl-1 text-left text-blue-700 hover:bg-blue-400 hover:text-white'>
                                    <a href="">{first}</a>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default List