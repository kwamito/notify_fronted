import React, {useEffect, useState} from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SwitchLabels from './secondary_components/Switch'

function Settings(){

    const [lit, setLit] = useState(false); 

    useEffect(() => {
        window.localStorage.setItem('isDark',true)
        const dark = window.localStorage.getItem('isDark')
        console.log(dark)
    })

    const handleClick = e => {
        const isDark = window.localStorage.getItem('isDark')
        if(isDark == false){
            window.localStorage.setItem('isDark', true)
            setLit(true)
        }
        else{
            window.localStorage.setItem('isDark',false)
            setLit(false)
        }
        console.log(isDark)
    }

    return(
        <div>
            <div className="shadow-lg p-2 pb-6">
                <h4 className="font-bold text-center"><SettingsIcon /> Settings</h4>
            </div>
    
            <div className="grid grid-cols-12 mt-10">  
            <div className="col-start-2 col-end-12 bg-gray-300 p-10">
                <p className="font-bold">Dark mode</p>
                <span onClick={handleClick} className="float-right"><SwitchLabels onClick={handleClick} dec={lit} label={'On'} /></span>
            </div>     
                
            </div>

        </div>
    )
}

export default Settings 