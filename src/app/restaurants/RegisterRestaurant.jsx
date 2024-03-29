import React, { useState } from 'react';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import RestaurantForm from './RestaurantForm';
import { useRouter } from 'next/navigation';
import Heading from '@/components/Heading/Heading';
import { registerRestaurant } from '@/lib/restaurants';
import styles from "./styles/RegisterRestaurant.module.css";
import Cancel from '@/components/Cancel/Cancel';

//お店リスト登録
const RegisterRestaurant = (props) => {
    const {
        setHasRegisterForm,
        restaurantName,
        restaurantAddress,
        restaurantImage,
        restaurantUrl,
        restaurantRemarks,
        groupId,
        userId,
    } = props;
    const router = useRouter();
    //お店リスト登録関数
    const onSubmit = async(data) => {
        const response = await registerRestaurant(data, groupId, userId);
        router.refresh();
        setHasRegisterForm(false);
    }

    return (
        <>
            <EmphasisFrame>
                <div className={ styles.header }>
                    <Heading>リスト登録</Heading>
                    <Cancel cancelFunc={ () => setHasRegisterForm(false) } />
                </div>
                <RestaurantForm
                    submitFunc={ (data) => onSubmit(data) }
                    cancelFucn={ () => setHasRegisterForm(false) }
                    restaurantName={ restaurantName }
                    restaurantAddress={ restaurantAddress }
                    restaurantImage={ restaurantImage }
                    restaurantUrl={ restaurantUrl }
                    restaurantRemarks={ restaurantRemarks }
                />
            </EmphasisFrame>
        </>
    )
}

export default RegisterRestaurant