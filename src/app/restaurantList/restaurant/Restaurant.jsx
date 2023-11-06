import React from 'react'
import styles from "./Restaurant.module.css";
import Link from 'next/link';
import Image from 'next/image';
import EditRestaurant from '../EditRestaurant.jsx/EditRestaurant';

const Restaurant = (props) => {
    const {
        restaurantId,
        restaurantName,
        restaurantAddress,
        restaurantUrl,
        restaurantImage,
        restaurantRemarks,
        userId,
    } = props

    return (
        <div className={ styles.frame }>
            <div className={ styles.header }>
                <h3 className={ styles.name }>{ restaurantName }</h3>
                {restaurantId?
                    <EditRestaurant
                        restaurantId={ restaurantId }
                        restaurantName={ restaurantName }
                        restaurantAddress={ restaurantAddress }
                        restaurantUrl={ restaurantUrl }
                        restaurantImage={ restaurantImage }
                        restaurantRemarks={ restaurantRemarks }
                        userId={ userId }
                    />
                :""}
            </div>
            <div className={ styles.main }>
                <ul className={ styles.details }>
                    <li className={ styles.element }>
                        <p className={ styles.key }>住所: </p>
                        <p className={ styles.value }>{ restaurantAddress }</p>
                    </li>
                    <li className={ styles.element }>
                        <p className={ styles.key }>URL: </p>
                        <Link href={ restaurantUrl } 
                            className={ styles.link }
                            rel="noopener noreferrer" 
                            target="_blank">
                            <p className={ styles.value }>{ restaurantUrl }</p>
                        </Link>
                    </li>
                    {restaurantRemarks?
                        <li className={ styles.element }>
                            <p className={ styles.key }>備考: </p>
                            <p className={ styles.value }>{restaurantRemarks}</p>
                        </li>
                    :""}
                </ul>
                <Image 
                    src={ restaurantImage || "/images/group_icon.png" } 
                    width="120" height="120" 
                    alt=""
                    className={ styles.image } 
                />
            </div>
        </div>
    )
}

export default Restaurant