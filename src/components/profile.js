import React, { useState, useEffect } from 'react';
import '../assets/main.css'
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useHistory } from 'react-router-dom'
const HtmlMarkdown = require('react-markdown/with-html')


function ProfileDetail() {
    const [profile, setProfile] = useState({
        'email': '',
        'first_name': '',
        'last_name': '',
        'image_url': '',
        'bio': '',
        'notes_count': ''
    })
    const history = useHistory()
    const [loggedIn, setLoggedIn] = useState(false);
    const [note, setNote] = useState([])
    useEffect(() => {
        const loggedIn = window.localStorage.getItem('isLoggedIn')
        setLoggedIn(loggedIn)

        let api = 'http://127.0.0.1:8000/users/profile/';
        const token = window.localStorage.getItem('token')
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(api).then((response) => {
            setProfile(response.data)
        })
    }, [])

    const logged = window.localStorage.getItem('isLoggedIn')
    if (logged == 'true') {
        return (
            <div class=''>
                <div class='text-left font-bold text-2xl p-2 ml-3 font-sans'>
                    My Profile
            </div>

                <div class='text-center mt-12'>
                    {
                        profile.image_url == '' ?
                            <div class="rounded-full h-16 w-16 flex ml-auto mr-auto items-center justify-center bg-red-500">
                                {profile.first_name.slice(0, 1)}
                            </div>
                            :
                            <div class='mb-4'>
                                <img src={profile.image_url} style={{ borderRadius: '50%' }} class=' h-auto max-w-xs w-32 rounded-full flex items-center justify-center ml-auto mr-auto' alt='' />
                            </div>
                    }
                    <div class='font-bold text-lg font-sans'>
                        {profile.email}
                    </div>
                    <div class='text-teal-600' >
                        <ReactMarkdown source={profile.bio} />
                    </div>


                </div>

                <div class='grid grid-cols-12 gap-2 text-center mt-12'>
                    <div class='font-bold p-4 col-start-2 col-end-4'>
                        Followers
                </div>
                    <div class='font-bold p-2 ml-3 text-gray-600 row-start-2 row-end-2 col-start-2 col-end-4'>
                        233
                </div>

                    <div class='font-bold p-4 col-start-6 col-end-8'>
                        Notes
                </div>
                    <div class='font-bold p-2 ml-3 text-gray-600 row-start-2 row-end-2 col-start-6 col-end-8 transform hover:rotate-45'>
                        {profile.notes_count}
                    </div>

                    <div class='font-bold p-4 col-start-9 col-end-12'>
                        Votes
                </div>
                    <div class='font-bold p-2 ml-3 text-gray-600 row-start-2 row-end-2 col-start-9 col-end-12'>
                        233
                </div>

                </div>
                <hr class='w-full font-bold text-3xl mt-4' />

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

export default ProfileDetail;