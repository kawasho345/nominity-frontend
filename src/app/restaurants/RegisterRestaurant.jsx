import React from 'react'
import PopUp from '@/components/PopUp/PopUp';
import RestaurantForm from './RestaurantForm';
import { useRouter } from 'next/navigation';
import Heading from '@/components/Heading/Heading';
import { registerRestaurant } from '@/lib/restaurants';
import styles from "./styles/RegisterRestaurant.module.css";
import Cancel from '@/components/Cancel/Cancel';

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
    } = props
    const router = useRouter();

    const onSubmit = async(data) => {
        await registerRestaurant(data, groupId, userId)
        router.refresh();
        setHasRegisterForm(false);
    }

    return (
        <PopUp>
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
        </PopUp>
    )
}

export default RegisterRestaurant