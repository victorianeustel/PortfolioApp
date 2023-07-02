import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <h1>Page Not Found</h1>
                <hr />
                <div className="help-section">
                    <div>Here are some helpful links:</div>

                    <div className="link-list">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='mailto:victoria.neustel@outlook.com'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}