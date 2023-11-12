import Font from '@/components/Font/Font';
import React from 'react'
import styles from "./styles/EditDateSchedules.module.css";
import Heading from '@/components/Heading/Heading';
import { useForm } from 'react-hook-form';
import { ChangeHistory, Close, RadioButtonUnchecked } from '@mui/icons-material';
import OnClick from '@/components/OnClick/OnClick';

const EditDateSchedules = (props) => {
    const {
        questionnaireDates,
        submitFunc,
        userSchedule,
    } = props;
    const { 
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => submitFunc(data);

    return (
        <>
            <Heading>予定を記入</Heading>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <ul>
                    {questionnaireDates.map((date, index) => (
                        <li className={ styles.element } key={ index }>
                            <div className={ styles.date }>
                                <Font style="middle_text">{ date[1] }</Font>
                            </div>
                            <div className={ styles.radio }>
                                <div>
                                    <input 
                                        type="radio" 
                                        className={ styles.radio_button }
                                        { ...register(date[0]) }
                                        id={ date[0] + "1" } 
                                        value="1"
                                        defaultChecked={ userSchedule[index+2] === "1" }
                                    />
                                    <label
                                        className={ styles.mark }
                                        htmlFor={ date[0] + "1" }>
                                        <RadioButtonUnchecked sx={{typography:{ fontSize: '3rem' }}}/>
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        className={ styles.radio_button }
                                        { ...register(date[0]) }
                                        id={ date[0] + "2" }
                                        value="2"
                                        defaultChecked={ userSchedule[index+2] === "2" }
                                    />
                                    <label
                                        className={ styles.mark }
                                        htmlFor={ date[0] + "2" }>
                                        <ChangeHistory sx={{typography:{ fontSize: '3rem' }}}/>
                                    </label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        className={ styles.radio_button }
                                        { ...register(date[0]) }
                                        id={ date[0] + "3" } 
                                        value="3"
                                        defaultChecked={ userSchedule[index+2] === "3" || userSchedule[index+2] === "0" }
                                    />
                                    <label
                                        className={ styles.mark }
                                        htmlFor={ date[0] + "3" }>
                                        <Close sx={{typography:{ fontSize: '3rem' }}}/>
                                    </label>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={`${ styles.button } ${ "green_button" }`}>
                    <OnClick type="submit">
                        <Font style="default_button">登録</Font>
                    </OnClick>
                </div>
            </form>
        </>
    )
}

export default EditDateSchedules