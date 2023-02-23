import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Components/MainPage/MainPage.js'
import Store from './Components/Store/Store';
import Auth from './Components/Account/Auth';
import Create from './Components/Account/Create';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
