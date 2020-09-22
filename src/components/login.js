import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function LoginForm() {
  const [login, setLogin] = useState(false);
  const [cred, setCred] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value
    })
  }

  const history = useHistory();


  const handleSubmit = e => {
    e.preventDefault();

    let api = 'http://127.0.0.1:8000/users/login/';
    const body = JSON.stringify(cred);
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.headers = {
      'Content-Type': 'application/json'
    }
    console.log(body);
    axios.post(api, body).then(response => {

      document.getElementById('password').value = ''
      window.localStorage.setItem('token', response.data)
      window.localStorage.setItem('email', cred.email)
      window.localStorage.setItem('isLoggedIn', true)
      // window.localStorage.setItem('profile')
      history.push('/')
    }).catch(error => {
      alert(error)
    })
  }

  return (
    <div class="w-full flex flex-col items-center justify-center object-center">

      <form action="" method="POST" onsubmit={handleSubmit} class="p-8 md:p-20 lg:p-30 sm:p-24 xl:p-24 pb-40 mt-20 bg-gray-400 cl rounded-lg h-auto shadow-xl mb-24">
        <div>
          {/* <img class="mt-0 mb-12" src="../assets/images/finger.svg" alt="" /> */}

          <div class="uppercase font-extrabold text-center mt-0 flex-no-wrap text-2xl mb-10" style={{ fontFamily: 'Noto Sans' }}>
            Login<ExitToAppIcon style={{ marginBottom: '3px', marginLeft: '5px' }} />
          </div>
        </div>


        <div class="w-64">
          <div class="pb-3">
            <label for="email" class="uppercase">Email</label>
          </div>
          <input id="email" onChange={handleChange} class="border-0 outline-none w-full shadow-lg border-black rounded p-2 mb-6" type="email" placeholder="example@email.com" name="email" />
        </div>

        <div>
          <div className="pb-3">
            <label for="password" class="uppercase">Password</label>
          </div>
          <input id="password" onChange={handleChange} class="border-0 outline-none shadow-lg border-black w-full rounded p-2 mb-6" type="password" placeholder="password" name="password" />
        </div>
        <div class="w-full flex flex-col outline-none items-center justify-center mt-12">
          <button type="button" onClick={handleSubmit} class="bg-gray-900 outline-none transition ease-linear delay-500 focus:bg-green-500 p-2 rounded-full shadow-xl text-white w-64 h-10 font-bold hover:bg-black -my-32">Submit</button>
        </div>

      </form>

    </div>
  )
}

export default LoginForm