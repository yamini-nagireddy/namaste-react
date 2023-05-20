import RestaurantCard from "./RestaurantCard";
import { resList } from "./utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="body-conatiner">
      <div className="search">
        <input
          className="search-ip"
          type="text"
          placeholder="Enter Restaurant name..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const newData = listOfRestaurants.filter((resObj) =>
              resObj.data.name.toLowerCase().includes(searchVal.toLowerCase())
            );
            setListOfRestaurants(newData);
          }}
          disabled={searchVal == ""}
        >
          Search
        </button>
      </div>
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
