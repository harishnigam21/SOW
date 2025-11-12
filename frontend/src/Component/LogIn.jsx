import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
export default function LogIn() {
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
      errorRef.current.textContent = "Please Enter Password";
    } else {
      errorRef.current.textContent = "Invalid Email ID";
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
      <h1>Log in</h1>
      <article className="loginemail">
        <label htmlFor="email">Enter your email address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          autoFocus
        />
      </article>
      <article className="loginpassword">
        <label htmlFor="password">Enter your password</label>
        <div className="passworddiv">
          <input
            type={passwordHidden ? "password" : "text"}
            name="password"
            id="password"
            placeholder="Password"
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
        <span>Log in</span>
        <span ref={loaderRef} className="loader"></span>
      </button>
      <article className="loginextras">
        <Link to={"/register"}>Register</Link>
        <Link to={"/frgpwd"}>Forgotten password?</Link>
      </article>
    </section>
  );
}
