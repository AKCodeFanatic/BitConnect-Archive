import React from 'react'
import Navbar from '../components/Navbar'
import Language from '../components/Language'
import Testing from '../components/Testing'
import FixedNavbar from '../components/FixedNavbar'
import background from '../images/bitconnect.png'

const Homepage = () => {
    return (
        <div className='bg-blue-500'>
            <div className='flex flex-col' style={{
                    position: "fixed",
                    width: "100% ",
                    zIndex:"1"
                }}>
                <Navbar />
                <div className='ml-auto bg-white p-1 rounded' style={{
                        boxShadow: "0px 3px 8px 2px white"
                }}>
                <Language />
                </div>
            </div>

           
            
            {/* <div style={{
                position : "absolute",
                zIndex : "0",
                marginTop : "5rem",
                textAlign : "center"
            }}>
                Hello
            </div> */}

            <div>
                Hello
            </div>
            <div>
                Hello
            </div>
            <div>
                Hello
            </div>

            <div style={{
                background : "red",
                height : "100vh",
                backgroundImage : `url(${background})`,
                padding : "18rem"
            }}>
                    This is another test
                    <img src="../images/bitconnect.png" alt="" />
            </div>
 
            
        </div>
    )
}

export default Homepage