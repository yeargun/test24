import { useState } from "react";
import styles from "@/styles/Login.module.css";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [emailPhoneUsername, setEmailPhoneUsername] = useState("");

  const uploadFields = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailPhoneUsername
      )
    )
      return;

    fetch("/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        emailPhoneUsername,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "red" });
        } else {
          M.toast({ html: data.message, classes: "grey" });
          console.log("reg sucessful");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <div className={styles.header}>
          <button>
            <i className={styles.logInWithGoogle}></i> Log in with your Google
            account
          </button>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className={styles.container}>
          <form action="" className={styles.form}>
            <input
              type="text"
              value={emailPhoneUsername}
              placeholder="Username, Mobile Number or Email"
              onChange={(e) => setEmailPhoneUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={styles.formButton}
              onClick={() => {
                uploadFields();
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className={styles.option}>
        <p>
          Don't have an account? <a href="/register">Sign up</a>
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
  );
}

export default Login;
