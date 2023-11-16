"use client"
import React, { useState } from 'react'
import styles from "./styles/RegisterScheduleBody.module.css";
import ScheduleForm from '../ScheduleForm';
import Font from '@/components/Font/Font';
import { useRouter } from 'next/navigation';
import { registerSchedule } from '@/lib/schedules';
import OnClick from '@/components/OnClick/OnClick';
import { useToggle } from 'react-use';
import Restaurant from '@/app/restaurants/Restaurant';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import Heading from '@/components/Heading/Heading';

const RegisterScheduleBody = (props) => {
    const {
        userId,
        groupId,
        restaurants
    } = props
    const router = useRouter();
    const [hasEmphasisFrame, setHasEmphasisFrame] = useToggle(false);
    const cancel = () => router.push("/");
    const [currentRestaurant, setCurrentRestaurant] = useState("");
    const onSubmit = async(data) => {
        const response = await registerSchedule(data, userId, groupId);
        router.refresh();
        router.push("/")
    }
    const selectRestaurant = (restaurant) => {
        setCurrentRestaurant(restaurant)
        setHasEmphasisFrame(false);
    }

    return (
        <>
            <div className={ styles.header }>
                <Heading>お知らせ作成</Heading>
                <div className={`${"button"} ${styles.button}`}>
                    <OnClick func={ () => setHasEmphasisFrame(true)}>
                        <Font style="button">お店リストから作成</Font>
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
            {hasEmphasisFrame?
                <EmphasisFrame func={ () => setHasEmphasisFrame(false) }>
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
                                    <div className={`${ "button" } ${ styles.restaurant_button }`}>
                                        <OnClick func={ () => selectRestaurant(restaurant)}>
                                            <Font style="button">このお店でお知らせを作る</Font>
                                        </OnClick>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                    :
                        <Font style="default_text">リストに登録がありません</Font>
                    }
                </EmphasisFrame>
            :""}
        </>
    )
}

export default RegisterScheduleBody