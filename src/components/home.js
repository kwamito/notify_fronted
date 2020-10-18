import React, { useState, useEffect } from 'react';
import '../assets/main.css'
import svg from '../assets/images/auth.svg'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

function Div() {
    const items = ['Michael', 'Justin', 'Frederon', 'Jeffery', 'Jessie']
    const [notes, setNotes] = useState([])
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    console.log(isLoggedIn)
    useEffect(() => {
        let api = 'http://127.0.0.1:8000/notes/list/';
        const token = window.localStorage.getItem('token')
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(api).then((response) => {
            setNotes(response.data)
        })
    }, [])
    const history = useHistory();

    const handleClick = e => {
        console.log(e.currentTarget.id)
        let api = `http://127.0.0.1:8000/notes/crud/${e.currentTarget.id}`;
        const token = window.localStorage.getItem('token')
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.delete(api).then((response) => {
            setNotes(response.data)
            console.log(response.data)
            //notes.pop();
            console.log('Deleted')
            history.push('/')
        })
    }

    if (isLoggedIn == 'true') {
        return (
            <div className="grid grid-cols-12">
                {notes.map(note => (
                    <div className="w-full rounded p-4 bg-gray-300 col-start-2 col-end-12 mb-4 shadow-lg" key={note.id}>
                        <div className="font-bold"><Link to={`note/${note.id}`}>{note.title}</Link> </div>

                        <div><span className="float-right" id={note.id} name={note.title} onClick={handleClick} key={note.id}><DeleteIcon /> </span></div>
                        <span className="mt-6">{note.time}</span>
                    </div>
                ))}
            </div>)

    }
    else {
        // document.getElementById('body').style.backgroundColor = 'pink'
        // document.body.style.backgroundImage = `url(${svg})`
        // document.body.style.backgroundRepeat = 'no-repeat';
        // document.body.style.backgroundAttachment = 'fixed'
        // document.body.style.backgroundPosition = 'center'
        return (
            <div>
                <div class='text-center font-bold text-xl mt-8 p-5'>
                    Login <Link to={'/login'} class='text-blue-600 hover:text-blue-700 underline hover:no-underline'> here </Link> or register <Link to={'/signup'} class='text-blue-600 hover:text-blue-700 underline hover:no-underline' > here</Link>
                </div>
            </div>
        )

    }



}

export default Div