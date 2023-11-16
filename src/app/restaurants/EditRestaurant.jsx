"use client"
import React from 'react'
import styles from "./styles/EditRestaurant.module.css"
import { fetchRequest } from '@/lib/fetch';
import PutDelete from '@/components/PutDelete/PutDelete';
import { useToggle } from 'react-use';
import EmphasisFrame from '@/components/EmphasisFrame/EmphasisFrame';
import RestaurantForm from './RestaurantForm';
import { useRouter } from 'next/navigation';
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Heading from '@/components/Heading/Heading';
import Dialog from '@/components/Dialog/Dialog';
import Font from '@/components/Font/Font';
import Cancel from '@/components/Cancel/Cancel';

const EditRestaurant = (props) => {
    const {
        restaurantId,
        restaurantName,
        restaurantAddress,
        restaurantUrl,
        restaurantImage,
        restaurantRemarks,
        userId,
    } = props
    const [hasForm, setHasForm] = useToggle(false);
    const [hasDialog, setHasDialog] = useToggle(false);
    const router = useRouter()

    const deleteFunc = async() => {
        const response = await fetchRequest({
            url: "/api/restaurant/" + restaurantId + "/delete",
            method: "DELETE",
            body: { userId, }
        })
        router.refresh();
    }

    const updateRestaurant = async(data) => {
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
            url: "/api/restaurant/" + restaurantId + "/put",
            method: "PUT",
            body: {
                userId,
                restaurantName: data.restaurantName,
                restaurantAddress: data.restaurantAddress,
                restaurantUrl: data.restaurantUrl,
                restaurantImage: fileUrl,
                restaurantRemarks: data.restaurantRemarks,
            }
        })
        setHasForm(false);
        router.refresh();
    }

    return (
        <>
            <PutDelete
                putFunc={ () => setHasForm(true) }
                deleteFunc={ () => setHasDialog(true) }
            />
            {hasForm?
                <EmphasisFrame>
                    <div className={ styles.header }>
                        <Heading>お店情報更新</Heading>
                        <Cancel cancelFunc={ () => setHasForm(false)} />
                    </div>
                    <RestaurantForm
                        submitFunc={ (data) => updateRestaurant(data) }
                        cancelFucn={ () => setHasForm(false) }
                        restaurantName={ restaurantName }
                        restaurantAddress={ restaurantAddress }
                        restaurantImage={ restaurantImage }
                        restaurantUrl={ restaurantUrl }
                        restaurantRemarks={ restaurantRemarks }
                    />
                </EmphasisFrame>
            :""}
            {hasDialog?
                <EmphasisFrame>
                    <Dialog
                        yesFunc={ () => deleteFunc() }
                        noFunc={ () => setHasDialog(false) }>
                        <Font style="large" tag="div">
                            <p>お店リスト：{ restaurantName }</p>
                            <p>を削除します。本当によろしいですか</p>
                        </Font>
                    </Dialog>
                </EmphasisFrame>  
            :""}
        </>
    )
}

export default EditRestaurant