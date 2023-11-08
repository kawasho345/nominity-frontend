"use client"
import React from 'react'
import styles from "./styles/ProfileForm.module.css";
import EditText from '@/components/EditText/EditText';
import EditImage from '@/components/EditImage/EditImage';
import { FormProvider, useForm } from 'react-hook-form';
import EditTextArea from '@/components/EditTextArea/EditTextArea';
import EditCheckBox from '@/components/EditCheckBox/EditCheckBox';

const ProfileForm = (props) => {
    const {
        username, 
        userIcon 
    } = props
    const methods = useForm();
    const onSubmit = (data) => console.log(data)
    const allergies=["えび", "かに", "たまご", "そば", "乳", "落花生", "あわび", "いか", "いくら", 
                    "オレンジ", "カシューナッツ", "キュウイフルーツ", "牛肉", "くるみ", "ごま", "さけ", 
                    "さば", "大豆", "豚肉", "バナナ", "鶏肉", "まつたけ", "もも", "やまいも", "りんご", "ゼラチン", "アーモンド"]

    return (
        <FormProvider { ...methods }>
            <form onSubmit={ methods.handleSubmit(onSubmit) }>
                <ul>
                    <li className={ styles.element }>
                        <EditText
                            name="username"
                            value={ username }
                            title="名前"
                            required={ true }
                            maxLength="25"
                    />
                    </li>
                    <li className={ styles.element }>
                        <EditImage
                            name="userIcon"
                            title="ユーザーアイコン"
                            image={ userIcon }
                            style="icon"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="favoriteFood"
                            title="好きな料理"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="hatedFood"
                            title="好きなお酒"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="favoriteAlcohol"
                            title="苦手な料理"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="hatedAlcohol"
                            title="苦手なお酒"
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditCheckBox
                            name="allergy"
                            title="アレルギー"
                            elements={ allergies }
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="allergyText"
                            title="その他アレルギー"
                            maxLength="200"
                        />
                    </li>
                </ul>
                <div className={ styles.submit_button }>
                    <div className="button_frame">
                        <button type="submit" className="button">
                            <span className="button_text">更新</span>
                        </button>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default ProfileForm