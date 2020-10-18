import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SendIcon from '@material-ui/icons/Send';
import CreateForm from './createForm'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import Search from './search';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Alert from './secondary_components/alert'
import transitions from '@material-ui/core/styles/transitions';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));


function UserSearch() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')

    const handleSubmit = e => {
        e.preventDefault()
        let api = `http://127.0.0.1:8000/users/search/${search}`
        const token = window.localStorage.getItem('token')
        console.log(token)
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }

        axios.get(api).then(response => {
            console.log(response)
            setUsers(response.data)
            console.log(users)
        })
    }
    function hideAlert() {
        const alert = document.getElementById('alerto');
        alert.style.display = 'none'
    }

    function showAlert() {
        const alert = document.getElementById('alerto');
        alert.style.display = 'block'
        setTimeout(hideAlert, 3000)
    }


    const handleClick = e => {
        let api = `http://127.0.0.1:8000/users/search/${search}`
        const token = window.localStorage.getItem('token')
        console.log(token)
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        let id = e.currentTarget.id
        let data = { 'id': id }
        let body = JSON.stringify(data)

        console.log(id)
        axios.post(api, body
        ).then(response => {
            console.log(response)
        }).catch(error => {
            showAlert()
        })
    }

    const handleChange = e => {
        setSearch(e.target.value)
    }
    const classes = useStyles();
    const transStyle = {
        transition: '0.5s',
        marginLeft: '20px',
        marginRight: ''

    }

    return (
        <div>
            <Alert style={transStyle} severity='error'>You can't follow yourself!</Alert>
            <div className="grid grid-cols-12">
                <div class='col-start-5 col-end-9'>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} class='p-2 shadow-lg rounded-lg bg-gray-300 w-full' type="text" name="note" />
                        <button onClick={handleSubmit} type='submit' class='p-3 bg-green-400 font-sans outline-none focus:outline-none font-bold text-lg rounded-lg shadow-lg w-full mt-5 mx-auto'>Search<span class='ml-5 font-bold text-lg'><SearchIcon /></span>  </button>
                    </form>
                </div>

            </div>

            <div>
                <div class='grid gap-2 grid-cols-12 mb-6'>
                    {
                        users.map(user => (

                            <div class='col-start-2 mt-5 p-4 col-end-12 rounded shadow-lg bg-gray-300'>
                                {user.avatar ?

                                    <Avatar src={user.avatar} />
                                    :

                                    <Avatar className={classes.orange}>{user.email.slice(0, 1)}</Avatar>

                                }
                                <span className="font-bold font-sans mt-5">
                                    {user.email}
                                </span>

                                <span className="float-right" onClick={handleClick} key={user.id} id={user.id}>
                                    <AddIcon />
                                </span>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UserSearch;