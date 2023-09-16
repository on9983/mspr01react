import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <section>
            <h1>Home</h1>
            <br />
            <p>Connexion reussie</p>
            <br />
            <Link to="/listDesPlantes">Liste des plantes</Link>
            
            <div className="flexGrow">
                <button onClick={async () => {setAuth({});navigate('/login');}}>Déconnexion</button>
            </div>
        </section>
    )
}

export default Home