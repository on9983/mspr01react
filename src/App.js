import logo from './logo.svg';
import './App.css';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import Home from './Pages/Home';
import Connector from './components/Connector';
import Missing from './Pages/Missing';
import Unauthorized from './Pages/Unauthorized';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import MesPlantes from './Pages/MesPlantes';

const ROLES = {
  'User': 'ROLE_USER',
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  // const project = () => {
  //   switch(page) {

  //     case "connexion":   return <Connexion />;
  //     case "inscription":   return <Inscription />;
  //     case "three": return <Register />;
  //     case "four":  return <Register />;

  //     default:      return <h1>No project match</h1>
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Connector />}>
            {/* public routes */}
            <Route path="/login" element={<Connexion />}></Route>
            <Route path="inscription" element={<Inscription />} />
            <Route path="unauthorized" element={<Unauthorized />} />

            {/* we want to protect these routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="/" element={<Home />} />
              <Route path="/listDesPlantes" element={<MesPlantes />} />
            </Route>

            {/* catch all */}
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
        {/* <div>{ project() }</div> */}
      </header>
    </div>
  )
}

export default App;
