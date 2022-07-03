import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './views/Home';
import TicTacToe from './views/TicTacToe';
import GameHeader from './views/GameHeader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GameHeader />}>
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
