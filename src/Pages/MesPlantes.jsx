import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import NioCartes from "../components/design/NioCartes";

const MesPlantes = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);
    const [loading, setLoading] = useState(true);
    const [plantes, setPlantes] = useState([]);

    //FONCTION FETCH
    const fetchPlantes = async () => {
        const url = "http://127.0.0.1:8003/user/mesplantesapi";
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        fetchPlantes().then((data) => {
            setPlantes(data);
            setLoading(false);
        });
    }, [])

    return (
        <>
            <h1>Mes Plantes</h1>
            <br />

            <Link to="/">Home</Link>
            
            <div className="flexGrow">
                <button onClick={async () => {setAuth({}); navigate('/login');}}>Déconnexion</button>
            </div>

            <br></br>
            <div className="NioQuadriage">
                {items.map((item) => (
                    <div key={item.id}>
                        <NioCartes
                            img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                            title="The Everyday Salad"
                            description="Take your boring salads up a knotch. This recipe is perfect for lunch
                            and only contains 5 ingredients!"
                        />
                    </div>
                    
                ))}
            </div>

        </>
    )
}

export default MesPlantes