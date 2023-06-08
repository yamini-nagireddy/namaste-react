import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);

  getAllRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      setListOfAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  //not render component(Early return)
  if (!listOfAllRestaurants) return null;

  return listOfAllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-conatiner">
      
      <div className="filter">
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
              const newData = searchVal==="" ? listOfAllRestaurants : listOfAllRestaurants.filter((resObj) =>
                resObj.data.name.toLowerCase().includes(searchVal.toLowerCase())
              );
              setFilteredRestaurants(newData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfAllRestaurants.filter(
              (resObj) => resObj.data.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants match your filter!</h1>
        ) : (
          filteredRestaurants.map((resObj) => {
            return <RestaurantCard key={resObj.data.id} resData={resObj} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
