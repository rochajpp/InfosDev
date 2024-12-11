import {useState} from 'react'

import './PopUp.css'

function PopUp({state, children}){
    if(state){
        return (
            <div className="pop-up">
                {children}
            </div>
        )
    }
}

export default PopUp;