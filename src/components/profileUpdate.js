import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import '../assets/main.css'
import { useHistory } from 'react-router-dom'
import PublishIcon from '@material-ui/icons/Publish';


function ProfileUpdate() {
    const [profile, setProfile] = useState({
        'fist_name': '',
        'last_name': '',
        'email': '',
        'image_url': '',
        'bio': '',
    })
    // const [loggedIn, setLoggedIn] = useState();
    const history = useHistory()



    useEffect(() => {

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

    const handleSubmit = e => {
        e.preventDefault()
        let api = 'http://127.0.0.1:8000/users/profile/';
        const token = window.localStorage.getItem('token');
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        const profile_json = JSON.stringify(profile)
        axios.patch(api, profile_json).then((response) => {

        })
    }

    const handleChange = e => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })

    }

    const loggedIn = window.localStorage.getItem('isLoggedIn')
    if (loggedIn == "true") {
        return (
            <div class='grid grid-cols-12 gap-2'>
                <div class='col-start-2 col-end-12 sm:col-start-3 sm:col-end-11 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10 xl:col-start-4 xl:col-end-10'>
                    <div class=''>
                        <form onSubmit={handleSubmit} class='bg-gray-200 p-8 pt-16 pb-8 h-full mt-20 sm:pt-0 md:p-20 lg:p-30 sm:p-24 xl:p-24 rounded-lg shadow-lg w-full mb-16'>
                            <div class='mb-4 mt-5 pt-6'>
                                <img src={profile.image_url} style={{ borderRadius: '50%' }} class='w-6/12 h-auto max-w-sm rounded-full flex items-center justify-center ml-auto mr-auto' alt='' />
                            </div>
                            <div>
                                <h4 class='text-center font-bold text-gray-900 no-underline hover:underline text-lg p-3 mb-4'>{profile.email}</h4>
                            </div>

                            <div class='w-full'>
                                <input type="text" class='border-0 flex-no-wrap shadow-xl outline-none rounded-lg mb-6 w-full min-w-full sm:w-full lg:w-full md:w-full xl:w-full p-4' onChange={handleChange} name='first_name' placeholder='First name' value={profile.first_name} />
                            </div>
                            <div>
                                <input type='text' class='border-0 flex-no-wrap shadow-xl outline-none rounded-lg mb-6 w-full min-w-full sm:w-full lg:w-full md:w-full xl:w-full m-auto align-middle p-4' onChange={handleChange} name='last_name' placeholder='Last name' value={profile.last_name || ''} />
                            </div>
                            <div>
                                <input type='text' class='border-0 flex-no-wrap shadow-xl outline-none rounded-lg mb-6 w-full min-w-full sm:w-full lg:w-full md:w-full xl:w-full m-auto align-middle p-4' onChange={handleChange} name='image_url' placeholder='Profile image url' value={profile.image_url} />
                            </div>
                            <div>
                                <textarea class='w-full shadow-xl rounded-lg mb-6 p-10 outline-none' value={profile.bio} onChange={handleChange} placeholder='Bio **markdown field **' name='bio' />
                            </div>
                            <div>
                                <button type="submit" class='p-4 bg-green-500 w-full rounded-lg hover:bg-green-600 shadow-xl text-lg font-bold font-sans'> Save Changes  </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    } else {

        return (

            <div>
                {history.push('/login')}
            </div>
        )

    }
}

export default ProfileUpdate;