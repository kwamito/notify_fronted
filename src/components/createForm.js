import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import SendIcon from '@material-ui/icons/Send';
const mdx = require('@mdx-js/mdx')

function CreateForm(props) {
    const [body, setBody] = useState('')
    const textArea = document.getElementById('bodyIn');

    return (
        <div>

            <div class='w-full h-auto fixed bottom-0'>
                <form onSubmit={props.handleSubmit}>
                    <button onClick={props.handleSubmit} class='{name} bg-green-500 float-right p-2 rounded-lg shadow-lg font-sans font-bold mr-1 mb-2'>Submit <span><SendIcon /></span> </button>
                    <label class="">
                        <input type="text" placeholder='Title' class='bottom-0 p-2 rounded-lg shadow-lg border-2 border-red-300 w-full' onChange={props.handleChange} name="title" />
                        <textarea id='bodyIn' onChange={props.handleChange} class='bottom-0 shadow-2xl h-24 w-full rounded-t-lg border-gray-500 border-2 relative' type="text" placeholder="Mardown field ...." name="body" />
                    </label>

                    <span></span>
                </form>
            </div>
        </div>
    )

}

export default CreateForm;