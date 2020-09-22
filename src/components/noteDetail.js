import React, { useState, useEffect } from 'react';
import '../assets/main.css'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { Link, useHistory } from 'react-router-dom'
const HtmlMarkdown = require('react-markdown/with-html')
const htmlParser = require('react-markdown/plugins/html-parser')


const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */]
})

function Detail({ match }) {
    const [note, setNote] = useState({
        "title": '',
        "body": ''
    })
    const history = useHistory()
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    useEffect(() => {
        let api = `http://127.0.0.1:8000/notes/crud/${match.params.id}`;
        const token = window.localStorage.getItem('token')
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(api).then((response) => {
            //setNote(response.data)
            console.log(response)
            setNote(response.data)
        })
    }, [])
    if (isLoggedIn == undefined || isLoggedIn == 'false' || isLoggedIn == false) {
        history.push('/login')
    } else {
        return (
            <div className="grid grid-cols-12">
                <div class='p-24'>{note.body}</div>
                {note.title}
            </div>
        )
    }
}

export default Detail;