import React from 'react'
import styles from "./RestaurantForm.module.css"
import EditText from '@/components/editText/EditText';
import { FormProvider, useForm } from 'react-hook-form';
import EditImage from '@/components/editImage/EditImage';
import EditTextArea from '@/components/editTextArea/EditTextArea';
import OnClick from '@/components/onClick/OnClick';
import Text from '@/components/text/Text';

const RestaurantForm = (props) => {
    const { 
        submitFunc,
        cancelFucn,
        restaurantName,
        restaurantAddress,
        restaurantImage,
        restaurantUrl,
        restaurantRemarks,
    } = props
    const methods = useForm();
    const onSubmit = (data) => submitFunc(data) 

    return (
        <>
            <Text style="title">リスト登録</Text>
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
                    <div className={ styles.buttons }>
                        <div className={`${ styles.cancel_button } ${ "cancel_button" }`}>
                            <OnClick func={ () => cancelFucn() }>
                                <Text style="default_button">キャンセル</Text>
                            </OnClick>
                        </div>
                        <div className={`${ styles.decide_button } ${ "decide_button" }`}>
                            <OnClick type="submit">
                                <Text style="default_button">登録</Text>
                            </OnClick>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default RestaurantForm