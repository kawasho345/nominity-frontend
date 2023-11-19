import React, { useEffect } from 'react';
import styles from "./styles/ScheduleForm.module.css";
import { FormProvider, useForm } from 'react-hook-form';
import EditText from '@/components/EditText/EditText';
import EditTextArea from '@/components/EditTextArea/EditTextArea';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import EditImage from '@/components/EditImage/EditImage';

//お知らせ編集フォーム
const ScheduleForm = (props) => {
    const {
        submitFunc,
        scheduleName,
        scheduleDate,
        restaurantId,
        restaurantName,
        restaurantAddress,
        restaurantUrl,
        restaurantImage,
        schedulePrice,
        scheduleNumberPeople,
        scheduleRemarks,
    } = props;
    const methods = useForm();
    const onSubmit = (data) => submitFunc(data);
    //お知らせリストから登録時一度フォームを初期化
    useEffect(() => {
        methods.reset();
    },[restaurantId])
    
    return (        
        <FormProvider { ...methods }>
            <form onSubmit={ methods.handleSubmit(onSubmit) }>
                <ul>
                    <li className={ styles.element }>
                        <EditText
                            name="scheduleName"
                            title="お知らせタイトル"
                            value={ scheduleName }
                            required={ true }
                            maxLength="25"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditText
                            name="scheduleDate"
                            title="日程"
                            value={ scheduleDate }
                            maxLength="100"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditText
                            name="restaurantName"
                            title="お店の名前"
                            value={ restaurantName }
                            maxLength="100"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditText
                            name="restaurantAddress"
                            title="お店の住所"
                            value={ restaurantAddress }
                            maxLength="100"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditText
                            name="restaurantUrl"
                            title="お店のURL"
                            value={ restaurantUrl }
                            maxLength="500"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditImage
                            name="restaurantImage"
                            title="お店の写真"
                            image={ restaurantImage }
                            width="80"
                            height="80"
                            noImage="/images/group_icon.png"
                        />
                    </li>
                    <li className={ styles.image_url }>
                        <EditText
                            name="imageUrl"
                            value={ restaurantImage }
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditText
                            name="schedulePrice"
                            title="お値段"
                            value={ schedulePrice }
                            maxLength="100"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditText
                            name="scheduleNumberPeople"
                            title="参加人数"
                            value={ scheduleNumberPeople }
                            maxLength="50"
                        />
                    </li>
                    <li className={ styles.element }>
                        <EditTextArea
                            name="scheduleRemarks"
                            title="備考"
                            value={ scheduleRemarks }
                            maxLength="200"
                        />
                    </li>
                </ul>
                {/* <div className={ styles.buttons }> */}
                    <div className={`${ styles.button } ${ "button" }`}>
                        <OnClick type="submit">
                            <Font style="button">登録</Font>
                        </OnClick>
                    </div>
                {/* </div> */}
            </form>
        </FormProvider>
    )
}

export default ScheduleForm