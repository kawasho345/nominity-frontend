"use client"
import React, { useState } from 'react'
import styles from "./RegisterScheduleBody.module.css";
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import Text from '@/components/text/Text';
import { useRouter } from 'next/navigation';
import { registerSchedule } from '@/lib/schedule';
import OnClick from '@/components/onClick/OnClick';
import { useToggle } from 'react-use';
import Restaurant from '@/app/restaurantList/restaurant/Restaurant';
import PopUp from '@/components/popUp/PopUp';

const RegisterScheduleBody = (props) => {
    const {
        userId,
        groupId,
        restaurants
    } = props
    const router = useRouter();
    const [hasPopUp, setHasPopUp] = useToggle(false);
    const cancel = () => router.push("/");
    const [currentRestaurant, setCurrentRestaurant] = useState("");
    const onSubmit = async(data) => {
        const response = await registerSchedule(data, userId, groupId);
        console.log(response);
        router.refresh();
        router.push("/")
    }
    const selectRestaurant = (restaurant) => {
        setCurrentRestaurant(restaurant)
        setHasPopUp(false);
    }

    return (
        <>
            <div className={ styles.header }>
                <Text style="title">お知らせ作成</Text>
                <div className={`${"green_button"} ${styles.button}`}>
                    <OnClick func={ () => setHasPopUp(true)}>
                        <Text style="default_button">お店リストから作成</Text>
                    </OnClick>
                </div>
            </div>
            <ScheduleForm
                cancelFunc={ () => cancel() }
                submitFunc={ (data) => onSubmit(data) }
                restaurantId={ currentRestaurant.restaurantId }
                restaurantName={ currentRestaurant.restaurantName }
                restaurantAddress={ currentRestaurant.restaurantAddress }
                restaurantUrl={ currentRestaurant.restaurantUrl }
                restaurantImage={ currentRestaurant.restaurantImage }
                restaurantRemarks={ currentRestaurant.restaurantRemarks }
            />
            {hasPopUp?
                <PopUp func={ () => setHasPopUp(false) }>
                    {restaurants.length?
                        <ul>
                            {restaurants.map((restaurant, index) => (
                                <li key={ index } className={ styles.list }>
                                    <Restaurant
                                        restaurantName={ restaurant.restaurantName }
                                        restaurantAddress={ restaurant.restaurantAddress }
                                        restaurantUrl={ restaurant.restaurantUrl }
                                        restaurantImage={ restaurant.restaurantImage }
                                        restaurantRemarks={ restaurant.restaurantRemarks }
                                        groupId={ groupId }
                                        userId={ userId }
                                    />
                                    <div className={`${ "green_button" } ${ styles.restaurant_button }`}>
                                        <OnClick func={ () => selectRestaurant(restaurant)}>
                                            <Text style="default_button">このお店でお知らせを作る</Text>
                                        </OnClick>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                    :
                        <Text style="default_text">リストに登録がありません</Text>
                    }
                </PopUp>
            :""}
        </>
    )
}

export default RegisterScheduleBody