import React, { useState, useEffect } from 'react';
import '../assets/main.css'
import svg from '../assets/images/auth.svg'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';


function Search() {
    const items = ['Michael', 'Justin', 'Frederon', 'Jeffery', 'Jessie']
    const [note, setNote] = useState([])
    const [search, setSearch] = useState('');
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    console.log(isLoggedIn)
    // useEffect(() => {
    //     let api = 'http://127.0.0.1:8000/notes/list/';
    //     const token = window.localStorage.getItem('token')
    //     axios.defaults.headers = {
    //         'Content-Type': 'application/json',
    //         Authorization: `Token ${token}`
    //     }
    //     axios.get(api).then((response) => {
    //         setNotes(response.data)
    //     })
    // }, [])

    const handleSubmit = e => {
        e.preventDefault()
        let api = `http://127.0.0.1:8000/notes/search/${search}`
        const token = window.localStorage.getItem('token')
        console.log(token)
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }

        axios.get(api).then(response => {
            console.log(response)
            setNote(response.data)
            console.log(note)
        })
    }

    const handleChange = e => {
        setSearch(e.target.value)
    }

    if (isLoggedIn == 'true') {
        return (
            <div>
                <div className="grid grid-cols-12">
                    <div class='col-start-5 col-end-9'>
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleChange} class='p-2 shadow-lg rounded-lg w-full' type="text" name="note" />
                            <button type='submit' class='p-3 bg-green-400 font-sans outline-none focus:outline-none font-bold text-lg rounded-lg shadow-lg w-full mt-5 mx-auto'>Search<span class='ml-5 font-bold text-lg'><SearchIcon /></span>  </button>
                        </form>
                    </div>

                </div>
                <div>
                    {
                        note.map(note => (
                            <h1>{note.title}</h1>
                        ))
                    }
                </div>
            </div>


        )
    } else {
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

export default Search;