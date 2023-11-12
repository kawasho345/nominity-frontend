"use client"
import React from 'react'
import styles from "./styles/AddToList.module.css";
import OnClick from '@/components/OnClick/OnClick';
import { useToggle } from 'react-use';
import RegisterRestaurant from './RegisterRestaurant';
import Font from '@/components/Font/Font';
import Heading from '@/components/Heading/Heading';

const AddToList = (props) => {
    const {
        groupId,
        userId,
    } = props;
    const [hasRegisterForm, setHasRegisterForm] = useToggle(false);

    return (
        <div className={ styles.frame }>
            <Heading>リスト登録</Heading>
            <div className={`${ styles.button } ${ "green_button" }`}>
                <OnClick link="/restaurants/search" style="center">
                    <Font style="default_button">
                        ホットペッパーグルメから探す
                    </Font>
                </OnClick>
            </div>
            <div className={`${ styles.button } ${ "green_button" }`}>
                <OnClick func={ () => setHasRegisterForm(true) } style="center">
                    <Font style="default_button">
                        記入して登録する
                    </Font>
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

export default AddToList