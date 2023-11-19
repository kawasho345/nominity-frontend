"use client";
import React, { useState } from 'react';
import styles from "./styles/ProfileForm.module.css";
import EditText from '@/components/EditText/EditText';
import EditImage from '@/components/EditImage/EditImage';
import { FormProvider, useForm } from 'react-hook-form';
import EditTextArea from '@/components/EditTextArea/EditTextArea';
import EditCheckBox from '@/components/EditCheckBox/EditCheckBox';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { updateUser } from '@/lib/management';
import PopUp from '@/components/PopUp/PopUp';

//プロフィール更新フォーム
const ProfileForm = (props) => {
    const {
        userId,
        username, 
        userIcon,
        favoriteFood,
        hatedFood,
        favoriteAlcohol,
        hatedAlcohol,
        allergy,
        allergyText, 
    } = props;
    const methods = useForm();
    const [popUp, setPopUp] = useState([]);
    //プロフィール更新
    const onSubmit = async(data) => {
        const response = await updateUser(data, userId);
        if(response.status === 200){
            setPopUp([true, "success", "更新完了"]);
            setTimeout(() => {
                setPopUp([false,,]);
            }, 3000)
        }else{
            setPopUp([true, "failed", "更新失敗"]);
            setTimeout(() => {
                setPopUp([false,,]);
            }, 3000)
        }
    }
    //表示推奨アレルギー一覧
    const allergies=["えび", "かに", "たまご", "そば", "乳", "落花生", "あわび", "いか", "いくら", 
                    "オレンジ", "カシューナッツ", "キュウイフルーツ", "牛肉", "くるみ", "ごま", "さけ", 
                    "さば", "大豆", "豚肉", "バナナ", "鶏肉", "まつたけ", "もも", "やまいも", "りんご", "ゼラチン", "アーモンド"];

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
                            image={ userIcon || "/images/group_icon.png" }
                            style="icon"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="favoriteFood"
                            title="好きな料理"
                            value={ favoriteFood }
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="hatedFood"
                            title="苦手な料理"
                            value={ hatedFood }
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="favoriteAlcohol"
                            title="好きなお酒"
                            value={ favoriteAlcohol }
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="hatedAlcohol"
                            title="苦手なお酒"
                            value={ hatedAlcohol }
                            maxLength="200"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditCheckBox
                            name="allergy"
                            title="アレルギー"
                            value={ allergy }
                            elements={ allergies }
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="allergyText"
                            title="その他アレルギー"
                            value={ allergyText }
                            maxLength="200"
                        />
                    </li>
                </ul>
                <div className={`${ styles.button } ${ "button"}`}>
                    <OnClick type="submit">
                        <Font style="button">更新</Font>
                    </OnClick>
                </div>
            </form>
            {(popUp[0] === true)?
                <PopUp style={ popUp[1] }>{ popUp[2] }</PopUp>
            :""}
        </FormProvider>
    )
}

export default ProfileForm