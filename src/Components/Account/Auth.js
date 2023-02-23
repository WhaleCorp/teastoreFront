import { Link } from 'react-router-dom'

export default function Auth() {
    return (
        <div>
            <Link to="/create">
                <button>Create Account</button>
            </Link>
            <Link to="login">
                <button>Log In</button>
            </Link>
        </div>
    )
}