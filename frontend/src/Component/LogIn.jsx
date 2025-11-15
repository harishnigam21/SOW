/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
export default function LogIn({ switchLanguage, Contain }) {
  const [contain, setContain] = useState(Contain);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [passwordHidden, setPasswordHidden] = useState(true);
  const errorRef = useRef(null);
  const loaderRef = useRef(null);
  const handleSubmit = async () => {
    const loginUrl = `${import.meta.env.VITE_BACKEND_HOST}/login`;
    loaderRef.current.style.display = "flex";
    errorRef.current.style.display = "flex";
    if (isValidEmail(user.email)) {
      try {
        const response = await fetch(loginUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          errorRef.current.style.color = "green";
          errorRef.current.textContent = data.message;
          window.sessionStorage.setItem(
            "accTk",
            JSON.stringify(data.accessToken)
          );
          window.localStorage.setItem("user", JSON.stringify(data.user));
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
        errorRef.current.textContent = data.message;
      } catch (error) {
        errorRef.current.textContent = error.message;
      }
    } else if (user.password.length < 2) {
      errorRef.current.textContent =
        contain[switchLanguage].login.password_error;
    } else {
      errorRef.current.textContent = contain[switchLanguage].login.email_error;
    }
    setTimeout(() => {
      errorRef.current.textContent = "";
      errorRef.current.style.display = "none";
      loaderRef.current.style.display = "none";
    }, 3000);
  };
  const isValidEmail = (email) => {
    const emailRegex = new RegExp(
      // ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$
      /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/i
    );
    return emailRegex.test(email);
  };
  return (
    <section className="login">
      <h1>{contain[switchLanguage].login.heading}</h1>
      <article className="loginemail">
        <label htmlFor="email">
          {contain[switchLanguage].login.email_label}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={contain[switchLanguage].login.email_placeholder}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          autoFocus
        />
      </article>
      <article className="loginpassword">
        <label htmlFor="password">
          {contain[switchLanguage].login.password_label}
        </label>
        <div className="passworddiv">
          <input
            type={passwordHidden ? "password" : "text"}
            name="password"
            id="password"
            placeholder={contain[switchLanguage].login.password_placeholder}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <div className="password_hidden_icon">
            {passwordHidden ? (
              <IoIosEyeOff
                className="icon"
                onClick={() => setPasswordHidden(!passwordHidden)}
              />
            ) : (
              <IoIosEye
                className="icon"
                onClick={() => setPasswordHidden(!passwordHidden)}
              />
            )}
          </div>
        </div>
      </article>
      <strong ref={errorRef} className="error"></strong>
      <button className="loginbutton flex" onClick={handleSubmit}>
        <span>{contain[switchLanguage].login.btn_label}</span>
        <span ref={loaderRef} className="loader"></span>
      </button>
      <article className="loginextras">
        <Link to={"/register"}>
          {contain[switchLanguage].login.register_label}
        </Link>
        <Link to={"/frgpwd"}>{contain[switchLanguage].login.frgpwd_label}</Link>
      </article>
    </section>
  );
}
