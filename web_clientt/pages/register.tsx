import { useRef, useState } from "react";
import styles from "../styles/Register.module.css";
import Head from "next/head";
import { useRegisterMutation } from "features/auth/authApiSlice";
import { useRouter } from "next/router";
import { setCredentials } from "features/auth/authSlice";
import { useDispatch } from "react-redux";
import { cookies } from "./_app";

function Register() {
  const errRef = useRef();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailOrPhone
      )
    )
      return;
    try {
      cookies.remove("Authorization");
      const jwtToken = await register({
        username,
        password,
        name,
        email: emailOrPhone,
      }).unwrap();
      dispatch(setCredentials({ ...jwtToken }));
      if (typeof window !== "undefined") {
        localStorage.setItem("username", username);
      }
      router.push("/concepts");
    } catch (err) {
      if (!err?.originalStatus) {
        // isloading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef?.current?.focus();
    }
  };

  return (
    <>
      <Head>
        <title>Stuf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.page}>
          <div className={styles.pageHeader}>
            <button>
              <i className="logInWithGoogle"></i> Log in with your Google
              account
            </button>
            <div>
              <hr />
              <p>OR</p>
              <hr />
            </div>
          </div>
          <div className={styles.container}>
            {errMsg && (
              <p ref={errRef} className={styles.errMsg} aria-live="assertive">
                {errMsg}
              </p>
            )}
            <form className={styles.form} action="" onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                value={emailOrPhone}
                placeholder="Mobile Number or Email"
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <input
                className={styles.input}
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={styles.input}
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={styles.input}
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={styles.formButton}>Sign Up</button>
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
        <div className={styles.option}>
          <p>
            Have an account? <a href="/login">Log in</a>
          </p>
        </div>
        <div className={styles.otherapps}>
          <p>Get the app, maybe</p>
          <button type="button">
            <i className="fab fa-apple"></i> App Store
          </button>
          <button type="button">
            <i className="fab fa-google-play"></i> Google Play
          </button>
        </div>
      </main>
    </>
  );
}

export default Register;
