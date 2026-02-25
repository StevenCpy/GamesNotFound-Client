import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form>
            <div style={{
                display:"flex",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
                width: "15rem",
                height: "20rem"
            }}>
                <span style={{ marginLeft: "auto", marginRight: "auto" }}>SIGN UP</span>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* show this text only if username, email or password is blank */}
                {!(username && email && password) && <div style={{ color:"red" }} >Fill in all fields!</div>}
                <button disabled={!(username && email && password)}>Sign up</button>
                <span>
                    Already have an account?{" "}
                    <Link to="/Login">Login</Link>
                </span>

            </div>

        </form>
    )
}

export default Signup