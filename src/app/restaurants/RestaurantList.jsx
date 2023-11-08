import React from 'react'
import styles from "./styles/RestaurantList.module.css";
import Restaurant from './Restaurant';
import { getRestaurants } from '@/lib/restaurants';
import Font from '@/components/Font/Font';
import Heading from '@/components/Heading/Heading';

const RestaurantList = async(props) => {
    const { 
        groupId,
        userId,
    } = props
    const restaurants = await getRestaurants(groupId)

    return (
        <div className={ styles.frame }>
            <Heading>お店リスト</Heading>
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
                <Font style="default_text">リストに登録がありません</Font>
            }
        </div>
    )
}

export default RestaurantList