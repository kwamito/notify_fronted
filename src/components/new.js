import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SendIcon from '@material-ui/icons/Send';
import CreateForm from './createForm'
import ReactMarkdown from 'react-markdown'
const HtmlMarkdown = require('react-markdown/with-html')
const mdx = require('@mdx-js/mdx')

function NewNoteForm() {
    const [note, setNote] = useState({
        title: '',
        body: '',
        colour: '#F1C40F',
        is_private: false
    });
    const history = useHistory()
    const [loggedIn, setLogged] = useState('false');
    const [body, setBody] = useState('')

    const handleChange = e => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        })

    }



    useEffect(() => {
        const islogged = window.localStorage.getItem('isLoggedIn')
        setLogged(islogged);
    })

    const handleSubmit = e => {
        e.preventDefault()
        let api = 'http://127.0.0.1:8000/notes/list/'
        const token = window.localStorage.getItem('token')
        console.log(token)
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        const body = JSON.stringify(note);
        console.log(body)
        axios.post(api, body).then(response => {
            console.log(response)
        })
    }
    const handleCheck = e => {
        console.log(e.currentTarget.value)
        if (e.checked) {
            console.log('yes')
        }
        else {
            console.log('no')
        }
    }


    const logged = window.localStorage.getItem('isLoggedIn')
    if (logged == "true") {

        return (
            <div>
                <div class='w-full flex flex-col items-center justify-center object-center mb-10'>
                    {/* <form class='p-32 bg-gray-400 rounded-lg shadow-2xl' onSubmit={handleSubmit}>
                    <div class='mb-10'>
                        <div>
                            <label for='title' class='uppercase text-xl'>Title</label>
                        </div>
                        <input class='rounded-md w-64 shadow-xl h-8 text-xl p-4' onChange={handleChange} type="text" name="title" />
                    </div>

                    <div>
                        <div>
                            <label for='body' class='uppercase text-xl'>Body</label>
                        </div>
                        <textarea class='rounded-md w-64 h-64 shadow-xl p-32 px-8 py-8' onChange={handleChange} type="text" name="body" />
                    </div>
                    <button type="submit" onClick={handleSubmit} class="p-4 w-64 mt-8 rounded-lg shadow-xl bg-gray-300">Submit</button>
                </form> */}
                    <h3 class='font-sans font-bold text-lg'>Preview</h3>
                    <div>
                        <ReactMarkdown source={note.title} escapeHtml={false} />
                    </div>
                    <div>
                        <ReactMarkdown source={note.body} escapeHtml={false} />
                    </div>
                </div>

                <CreateForm handleChange={handleChange} handleSubmit={handleSubmit} />
                <div>
                    <form>
                        <input type="checkbox" handleChange={handleCheck} value={false} />
                    </form>
                </div>

            </div>


        )

    } else {
        history.push('/login')
        return (

            <div>

            </div>
        )
    }


}

export default NewNoteForm;