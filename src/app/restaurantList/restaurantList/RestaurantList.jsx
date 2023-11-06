import React from 'react'
import styles from "./RestaurantList.module.css";
import Restaurant from '../restaurant/Restaurant';
import { fetchRequest } from '@/lib/fetch';
import Text from '@/components/text/Text';

const RestaurantList = async(props) => {
    const { 
        groupId,
        userId,
    } = props
    const restaurants = await fetchRequest({
        url: "/api/restaurant/" + groupId + "/getRestaurants",
        method: "GET",
        element: "restaurants"
    })
    console.log(restaurants)

    return (
        <div className={ styles.frame }>
            <h2 className={ styles.title }>お店リスト</h2>
            {restaurants.length?
                <ul>
                    {restaurants.map((restaurant, index) => (
                        <li key={ index } className={ styles.list }>
                            <Restaurant
                                restaurantId={ restaurant.restaurantId }
                                restaurantName={ restaurant.restaurantName }
                                restaurantAddress={ restaurant.restaurantAddress }
                                restaurantUrl={ restaurant.restaurantUrl }
                                restaurantImage={ restaurant.restaurantImage }
                                restaurantRemarks={ restaurant.restaurantRemarks }
                                groupId={ groupId }
                                userId={ userId }
                            />
                        </li>
                    ))
                    }
                </ul>
            :
                <Text style="default_text">リストに登録がありません</Text>
            }
        </div>
    )
}

export default RestaurantList