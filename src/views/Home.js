import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>React Tutorial Home</h1>
            <ul>
                <li>
                    <Link to="tic-tac-toe">tic-tac-toe game</Link>
                </li>
            </ul>
        </div>
    );
}