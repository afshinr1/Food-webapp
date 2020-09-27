import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { getRestaurants } from "../../redux/actions/restaurantActions";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(2),
  },
}));

function RestaurantList() {
  const dispatch = useDispatch();
  const restaurantList = useSelector(
    (state) => state.restaurantReducer.restaurants
  );
  console.log(restaurantList);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const classes = useStyles();

  const cards = restaurantList.map((restaurant) => (
    <RestaurantCard key={restaurant.id} restaurantInfo={restaurant} />
  ));

  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Grid item container justify="center">
          <Carousel />
        </Grid>
        <Typography
          className={classes.text}
          variant="h6"
          align="left"
          gutterBottom
        >
          Local Restaurants nearby
        </Typography>

        {cards}
      </Grid>
    </Container>
  );
}

export default RestaurantList;
