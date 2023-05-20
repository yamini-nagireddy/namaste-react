import RestaurantCard from "./RestaurantCard";
import { resList } from "./utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body-conatiner">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (resObj) => resObj.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resObj) => {
          return <RestaurantCard key={resObj.data.id} resData={resObj} />;
        })}
      </div>
    </div>
  );
};

export default Body;
