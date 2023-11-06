import React from 'react'
import styles from "./RestaurantListBody.module.css";
import AddRestaurantList from '../addRestaurantList/AddRestaurantList';
import RestaurantList from '../restaurantList/RestaurantList';
import BodyFrame from '@/components/bodyFrame/BodyFrame';

const RestaurantListBody = (props) => {
    const {
        groupId,
        userId,
    } = props

    return (
        <BodyFrame>
            <AddRestaurantList 
                groupId={ groupId }
                userId={ userId }
            />
            <RestaurantList
                groupId={ groupId }
                userId={ userId }
            />
        </BodyFrame>
    )
}

export default RestaurantListBody