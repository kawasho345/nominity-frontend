import React from 'react';
import styles from "./styles/RestaurantForm.module.css";
import EditText from '@/components/EditText/EditText';
import { FormProvider, useForm } from 'react-hook-form';
import EditImage from '@/components/EditImage/EditImage';
import EditTextArea from '@/components/EditTextArea/EditTextArea';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';

//お店情報更新フォーム
const RestaurantForm = (props) => {
    const { 
        submitFunc,
        restaurantName,
        restaurantAddress,
        restaurantImage,
        restaurantUrl,
        restaurantRemarks,
    } = props
    const methods = useForm();
    const onSubmit = (data) => submitFunc(data); 

    return (
        <>
            <FormProvider { ...methods }>
                <form onSubmit={ methods.handleSubmit(onSubmit) }>
                    <ul>
                        <li className={ styles.element }>
                            <EditText
                                name="restaurantName"
                                title="名前"
                                value={ restaurantName }
                                required={ true }
                                maxLength="100"
                            />
                        </li>
                        <li className={ styles.element }>
                            <EditImage
                                name="restaurantImage"
                                title="画像"
                                image={ restaurantImage }
                                width="80"
                                height="80"
                                noImage="/images/group_icon.png"
                            />
                        </li>
                        <li className={ styles.hotpepper_image }>
                            <EditText
                                name="hotpepperImage"
                                value={ restaurantImage }
                            />
                        </li>
                        <li className={ styles.element }>
                            <EditText
                                name="restaurantAddress"
                                title="住所"
                                value={ restaurantAddress }
                                maxLength="100"
                            /> 
                        </li>
                        <li className={ styles.element }>
                            <EditText
                                name="restaurantUrl"
                                title="URL"
                                value={ restaurantUrl }
                                maxLength="500"
                            />
                        </li>
                        <li className={ styles.element }>
                            <EditTextArea
                                name="restaurantRemarks"
                                title="備考"
                                value={ restaurantRemarks }
                                maxLength="200"
                            />
                        </li>
                    </ul>
                    <div className={`${ styles.button } ${ "button" }`}>
                        <OnClick type="submit">
                            <Font style="button">登録</Font>
                        </OnClick>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default RestaurantForm