import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //! part 2==> useState
  //? do not make state variable outside the function ==> it is use to crate local state variable inside our component 
  //call the useState in the top    ==> create inconsistency
  //no creating of stVar in conditional statment,inner funtion and in loops  ==> ==> create inconsistency
  let [restaurantsList, setRestaurantsList] = useState([]); 
  let [filterredRestaurent, setFilterredRestaurent] = useState([]);

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async () => {
    const data = await fetch("http://localhost:5000/api/restaurants");

    const json = await data.json();

    // console.log(json);

    setRestaurantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (restaurantsList.length === 0) {
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              let filterredRes = restaurantsList.filter((o) =>
                o.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilterredRestaurent(filterredRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurent = restaurantsList.filter(
              (o) => o.info.avgRating > 4.5,
            );
            setRestaurantsList(filteredRestaurent);
          }}
        >
          Top rated restaurent
        </button>
      </div>

      {restaurantsList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filterredRestaurent.length === 0 ? (
            <div>No Such Restaurent Found</div>
          ) : (
            filterredRestaurent.map((obj) => (
              <RestaurentCard resData={obj} key={obj.info.id} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
