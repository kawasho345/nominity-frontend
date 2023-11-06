"use client"
import React from 'react'
import styles from "./AddRestaurantList.module.css";
import OnClick from '@/components/onClick/OnClick';
import { useToggle } from 'react-use';
import RegisterRestaurant from '../registerRestaurant/RegisterRestaurant';
import Text from '@/components/text/Text';
import { fetchRequest } from '@/lib/fetch';

const AddRestaurantList = (props) => {
    const {
        groupId,
        userId,
    } = props;
    const [hasRegisterForm, setHasRegisterForm] = useToggle(false);

    const onSubmit = async(data) => {
        console.log(data)
        let fileUrl
        if(data.hotpepperImage){
            fileUrl = data.hotpepperImage
        }
        if(data.restaurantImage.length){
            const file = data.restaurantImage[0]
            const storageRef = ref(storage, "image/restaurantImage/" + file.name)
            fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
                return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
            }).then((gsReference) => getDownloadURL(gsReference))
        }
        const response = await fetchRequest({
            url: "/api/restaurant/register",
            method: "POST",
            body:{
                restaurantName: data.restaurantName,
                restaurantAddress: data.restaurantAddress,
                restaurantUrl: data.restaurantUrl,
                restaurantImage: fileUrl,
                restaurantRemarks: data.restaurantRemarks,
                groupId,
                userId,
            }
        })
        setHasRegisterForm(false)
    }

    return (
        <div className={ styles.frame }>
            <Text style="title">
                リスト登録
            </Text>
            <div className={`${ styles.button } ${ "green_button" }`}>
                <OnClick link="/restaurantList/search" style="center">
                    <Text style="default_button">
                        ホットペッパーグルメから探す
                    </Text>
                </OnClick>
            </div>
            <div className={`${ styles.button } ${ "green_button" }`}>
                <OnClick func={ () => setHasRegisterForm(true) } style="center">
                    <Text style="default_button">
                        記入して登録する
                    </Text>
                </OnClick>
            </div>
            { hasRegisterForm?
                <RegisterRestaurant
                    setHasRegisterForm={ () => setHasRegisterForm(false) }
                    groupId={ groupId }
                    userId={ userId }
                />
            :""}

        </div>
    )
}

export default AddRestaurantList