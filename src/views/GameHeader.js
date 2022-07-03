import { Outlet, useNavigate } from 'react-router-dom';

export default function GameHeader() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: 8}}>
            <button onClick={() => navigate('/')}>Back</button>
            <Outlet />
        </div>
    );
}