import axios from "axios";
import { v4 } from "uuid";
const temp = [
  { id: v4(), name: "Caesars", rating: 8.8, Description: "Get the best pizza" },
  { id: v4(), name: "Dominos", rating: 6.8, Description: "Get the worst chicken in town" },
  {id : v4(), name : 'Fritou', rating : 2.8, Description : "Get the best Chicken"},
  {id : v4(), name : 'Bill jims jaja', rating : 8.9, Description : "Selling a variety of stuff from ice cream to pizza to chicken!"}
];
export const SET_RESTAURANTS = "set_restaurants";

export const getRestaurants = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((data) => {
        dispatch(setRestaurants(temp));
      });
  };
};

const setRestaurants = (data) => {
  return { type: SET_RESTAURANTS, payload: data };
};
