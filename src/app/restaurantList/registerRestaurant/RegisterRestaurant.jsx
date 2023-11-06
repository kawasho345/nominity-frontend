import React from 'react'
import PopUp from '@/components/popUp/PopUp';
import { fetchRequest } from '@/lib/fetch';
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import EditRestaurant from '../RestaurantForm/RestaurantForm';
import { useRouter } from 'next/navigation';

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
        router.refresh();
        setHasRegisterForm(false);
    }

    return (
        <PopUp>
            <EditRestaurant
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