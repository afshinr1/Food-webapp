import { Avatar, Card, CardHeader, IconButton } from '@material-ui/core'
import React from 'react'
//import {Link, useHistory} from 'react-router-dom'
const RestaurantCard = (props) => {
    return (
        <div>
            {props.restaurantInfo.name}
            <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="">
                      
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="">
                    </IconButton>
                  }
                  title=""
                  subheader=""
                  
                />
            </Card>
        </div>
    )
}

export default RestaurantCard
