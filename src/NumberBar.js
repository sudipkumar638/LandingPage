import React from 'react'
import "./numberbar.css"
const NumberBar = () => {
    return (
        <div className='container-fluid text-center justify-content-between my-4'>
            <div className='row '>
                <div className='col-xl-3 col-md-6 col-12 numbar'>
                    <h1>8,500</h1>
                    <p>Completed project</p>
                </div>
                <div className='col-xl-3 col-md-6 col-12 numbar'>
                    <h1>9,400</h1>
                    <p>Happy clients</p>
                </div>
                <div className='col-xl-3 col-md-6 col-12 numbar'>
                    <h1>1,200</h1>
                    <p>Ongoing project</p>
                </div>
                <div className='col-xl-3 col-md-6 col-12 numbar'>
                    <h1>152</h1>
                    <p>Award won</p>
                </div>

            </div>
        </div>
    )
}

export default NumberBar