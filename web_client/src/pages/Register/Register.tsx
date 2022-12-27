import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [fullName, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const uploadFields = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailOrPhone
      )
    )
      return;

    fetch('/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        username,
        password,
        emailOrPhone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: 'red' });
        } else {
          M.toast({ html: data.message, classes: 'grey' });
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
              value={fullName}
              placeholder="Full Name"
              onChange={(e) => setFullname(e.target.value)}
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
              onClick={() => {
                uploadFields();
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
        <p>Get the app</p>
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
