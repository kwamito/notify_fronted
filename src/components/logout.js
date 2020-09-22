import React, { useState, useEffect } from 'react';
import '../assets/main.css'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

function Logout() {
    const history = useHistory()
    const handleLogout = e => {
        window.localStorage.removeItem('token')
        window.localStorage.setItem('isLoggedIn', false)
        console.log('Token removed')
        history.push('/login')
    }
    return (
        <div>
            <div class='text-center text-lg font-bold font-sans'>
                <h3>Logout</h3>
            </div>
            <div class='flex flex-col items-center justify-center font-sans font-bold mt-12'>
                <button onClick={handleLogout} type='button' class='p-5 rounded-lg w-48 shadow-2xl hover:shadow-lg outline-none bg-red-600 hover:bg-red-600'>Logout<ExitToAppSharpIcon /> </button>
            </div>
        </div>
    )
}

export default Logout;