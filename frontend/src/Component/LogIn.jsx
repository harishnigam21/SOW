import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
export default function LogIn({ switchLanguage }) {
  const loginPageContain = {
    english: {
      heading: "Log in",
      email_label: "Enter your email address",
      email_placeholder: "Email address",
      email_error: "Invalid Email ID",
      password_label: "Enter your password",
      password_placeholder: "Password",
      password_error: "Please enter password",
      btn_label: "Log in",
      register_label: "Register",
      frgpwd_label: "Forgotten password ?",
    },
    svenska: {
      heading: "Logga in",
      email_label: "Ange din e-postadress",
      email_placeholder: "E-postadress",
      email_error: "Ogiltig e-postadress",
      password_label: "Ange ditt lösenord",
      password_placeholder: "Lösenord",
      password_error: "Vänligen ange lösenord",
      btn_label: "Logga in",
      register_label: "Registrera dig",
      frgpwd_label: "Glömt lösenord?",
    },
  };
  const [contain, setContain] = useState(loginPageContain);
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
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        }
        errorRef.current.textContent = data.message;
      } catch (error) {
        errorRef.current.textContent = error.message;
      }
    } else if (user.password.length < 2) {
      errorRef.current.textContent = contain[switchLanguage].password_error;
    } else {
      errorRef.current.textContent = contain[switchLanguage].email_error;
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
      <h1>{contain[switchLanguage].heading}</h1>
      <article className="loginemail">
        <label htmlFor="email">{contain[switchLanguage].email_label}</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={contain[switchLanguage].email_placeholder}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          autoFocus
        />
      </article>
      <article className="loginpassword">
        <label htmlFor="password">
          {contain[switchLanguage].password_label}
        </label>
        <div className="passworddiv">
          <input
            type={passwordHidden ? "password" : "text"}
            name="password"
            id="password"
            placeholder={contain[switchLanguage].password_placeholder}
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
        <span>{contain[switchLanguage].btn_label}</span>
        <span ref={loaderRef} className="loader"></span>
      </button>
      <article className="loginextras">
        <Link to={"/register"}>{contain[switchLanguage].register_label}</Link>
        <Link to={"/frgpwd"}>{contain[switchLanguage].frgpwd_label}</Link>
      </article>
    </section>
  );
}
