import { Link } from 'react-router-dom'

function Login() {
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
                <span style={{ marginLeft: "auto", marginRight: "auto" }}>LOGIN</span>
                <label>Username:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="text" />
                <button disabled>Login</button>
                <span>
                    Don't have an account?{" "}
                    <Link to="/Signup">Sign up</Link>
                </span>

            </div>
            

        </form>
    )
}

export default Login