import { useState } from 'react';
import './Register.css';
import M from 'materialize-css';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const saveJWTinCookie = (token) => {
    document.cookie = 'Bearer ' + token;
  };

  const uploadFields = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailOrPhone
      )
    )
      return;
    axios
      .post('http://localhost:8080/api/v1/auth/register', {
        firstName,
        lastName,
        username,
        password,
        email: emailOrPhone,
      })
      .then((res) => {
        console.log('thisis res:', res.data);
        if (res) {
          // M.toast({ html: res.data, classes: 'grey' });
          console.log('reg sucessful');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <div className="page">
        <div className="header">
          <button>
            <i className="logInWithGoogle"></i> Log in with your Google account
          </button>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className="container">
          <form action="">
            <input
              type="text"
              value={emailOrPhone}
              placeholder="Mobile Number or Email"
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(event) => {
                uploadFields();
                event.preventDefault();
              }}
            >
              Sign up
            </button>
          </form>

          <ul>
            <li>By signing up, you agree to our&nbsp;</li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">&nbsp;Data Policy&nbsp;</a>
            </li>
            <li>and</li>
            <li>
              <a href="">&nbsp;Cookies Policy</a>.
            </li>
          </ul>
        </div>
      </div>
      <div className="option">
        <p>
          Have an account? <a href="/login">Log in</a>
        </p>
      </div>
      <div className="otherapps">
        <p>Get the app, maybe</p>
        <button type="button">
          <i className="fab fa-apple"></i> App Store
        </button>
        <button type="button">
          <i className="fab fa-google-play"></i> Google Play
        </button>
      </div>
    </main>
  );
}

export default Register;
