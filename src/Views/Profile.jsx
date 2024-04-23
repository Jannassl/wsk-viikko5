import { Link } from "react-router-dom"
import { useUser } from "../hooks/apiHooks"
import { useEffect, useState } from "react";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  const getUser = async () => {
    const token = localStorage.getItem('item');
    const userData = await getUserByToken();
    setUser[userData.user];
  };
  useEffect(()=> {
    getUser();
  },[])

}


  return <div>
    <h2 className="text-2xl font-bold">Tämä on minun profiilisivu</h2>
    <p>
      <Link to="/">Navigoi takaisin etusivulle</Link>
    </p>
    <div>
      <p>Käyttäjätunnus: </p>
    </div>
  </div>
