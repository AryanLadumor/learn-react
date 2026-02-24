//useEffect is prenet in react Library to use oit we have to import It
import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {


  // let [restaurantsList, setRestaurantsList] = useState(realTimeRestarantData);
  let [restaurantsList, setRestaurantsList] = useState([]); // initialy list sholuld be empty

  //This is also a normal JS Funtion
  // 2 parameter  1=> callback  2=> dependenci array
  useEffect(() => {
    //our second approach to fect data after render
    fectchData();
    console.log("useEffect called");
  }, []); // as soon as render cycle is finished this callback is called
  //when react sees use effect it save the callback and fire it when rendered done

  const fectchData = async () => {
    // this is the swiggy api for  all restaurent
    //since swiigy don't allow us to use their api but we have fetch it from node server
    const data = await fetch("http://localhost:5000/api/restaurants");

    const json = await data.json();

    console.log(json);

    //Now putting Our New Data Which is Live
    //optinal chaining is mandontory
    setRestaurantsList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    //from here we no need of hardcoded data
  };

  //If the Data is not loaded then we will show this just to improve user expirence
  // But this is not a good way this looks weird
  // for much good experience we will use the shimmer UI  which can anticipate user by showing fake cards
  if (restaurantsList.length === 0) {
    // return <h1>Loading...</h1>;
  } //this is know as conditional rendering

  //let's do it int the final return only

  return (
    <div className="body">
      <div className="filter">
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

      {/* Here we also how can we load it . this is also conditional rendering  */}
      {restaurantsList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {restaurantsList.map((obj) => (
            <RestaurentCard resData={obj} key={obj.info.id} />
          ))}
        </div>
      )}


    </div>
  );
};

export default Body;
