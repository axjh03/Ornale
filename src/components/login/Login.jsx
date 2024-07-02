import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./login.css";

const Login=()=>{

    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar =e =>{

        if(e.target.files[0])

        setAvatar({
            file:e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }


    const handleLogin = e => {
        e.preventDefault()
    }

    return(
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
            <h2>Create an account</h2>
                <form >
                    <label htmlFor="file">
                        <img src={avatar.url || "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c9f4a40760693.578c9a4699778.gif"} alt="" />
                        Upload an image
                        </label>
                    <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login