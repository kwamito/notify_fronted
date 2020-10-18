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
import CloseIcon from '@material-ui/icons/Close';

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


function Followers() {
    const [followers, setFollowers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        let api = 'http://127.0.0.1:8000/users/followers';
        const token = window.localStorage.getItem('token')
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
        axios.get(api).then((response) => {
            setFollowers(response.data)
        })
    }, [])
    const styles = {
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);'
    }

    return (
        <div class='flex flex-col justify-evenly'>
            { followers.map(follower => (
                /*<div class='flex flex-row shadow-lg mb-6 rounded-lg w-full p-5 m-auto bg-gray-400'>*/
                <div class='flex flex-row justify-between ml-6 mr-6 xl:ml-12 xl:mr-12 lg:ml-8 lg:mr-8 mb-5 p-4 bg-orange-300 rounded-lg shadow-lg'>
                    <div class="flex justify-start">
                        {follower.follower_image ?

                            <Avatar src={follower.follower_image} style={styles} />
                            :

                            <Avatar className={classes.orange}>N</Avatar>

                        }
                    </div>

                    <div class="align-middle ml-5">
                        <Tooltip title={`Followed you on ${follower.created}`} arrow>
                            <div class="pl-16">
                                {follower.follower}
                            </div>

                        </Tooltip>


                    </div>

                    <div>
                        <span className='flex justify-end float-right m-auto ml-auto'>
                            <Tooltip title={'Remove as follower'} arrow>
                                <CloseIcon style={{ 'float': 'right' }} />
                            </Tooltip>

                        </span>
                    </div>


                </div>
            ))
            }
        </div>

    )
}

export default Followers;