import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex bg-blue-200">
            <p>StoryTale</p>
            <Link to="../Login">Login</Link>
        </div>
    )
}

export default Header;