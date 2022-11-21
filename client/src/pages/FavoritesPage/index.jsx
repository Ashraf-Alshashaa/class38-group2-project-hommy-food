import React from "react";
import FavoriteChefCard from "../../components/FavoriteChefCard";
import "./style.css";
//import { AuthContext } from "../../contexts/authentication";

const FavoritesPage = () => {
  //const { user } = useContext(AuthContext);
  const favorites = ["636e794a4e9c038d2cb41bbc", "636e796d4e9c038d2cb41bc0"];

  return (
    <div className="favorites-page-container">
      <div className="favorites-info-title">
        <h2>Your Favorite Chefs</h2>
      </div>
      <div className="favorite-chef-cards-container">
        {favorites.map((chefId) => (
          <FavoriteChefCard key={chefId} id={chefId} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
