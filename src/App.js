
import './App.css';
import MiniDrawer from './components/Main/Main';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/login';
// import CenteredGrid from './components/Gird'

function App() {
  return (
    <div
    // className="App"
    >



      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MiniDrawer />} />
        </Routes>
      </Router> */}


      {/*<Login></Login>*/}
      <MiniDrawer />

    </div>
  );
}

export default App;
