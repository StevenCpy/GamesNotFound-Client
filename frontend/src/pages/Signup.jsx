import { Link } from 'react-router-dom'

function Signup() {
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
                <input type="text" />
                <label>Email:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="text" />
                <button disabled>Sign up</button>
                <span>
                    Already have an account?{" "}
                    <Link to="/Login">Login</Link>
                </span>

            </div>

        </form>
    )
}

export default Signup