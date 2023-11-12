import React, { useState } from 'react'
import styles from "./styles/QuestionnaireForm.module.css";
import { FormProvider, useForm } from 'react-hook-form';
import EditText from '@/components/EditText/EditText';
import EditTextArea from '@/components/EditTextArea/EditTextArea';
import EditDates from './EditDates';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';

const QuestionnaireForm = (props) => {
    const {
        questionnaireName,
        questionnaireOverview,
        questionnaireDates,
        submitFunc,
        submitText,
    } = props;
    const methods = useForm();
    const [dates, setDates] = useState(questionnaireDates);
    const onSubmit = (data) => submitFunc(data, dates);

    return (
        <>
            <FormProvider { ...methods }>
                <form onSubmit={ methods.handleSubmit(onSubmit) } id="dateForm">
                    <ul>
                        <li className={ styles.element }>
                            <EditText
                                name="questionnaireName"
                                title="名前"
                                required={ true }
                                maxLength="25"
                                value={ questionnaireName }
                            />
                        </li>
                        <li className={ styles.element }>
                            <EditTextArea
                                name="questionnaireOverview"
                                title="概要"
                                maxLength="200"
                                value={ questionnaireOverview }
                            />
                        </li>
                    </ul>
                </form>
            </FormProvider>
            <EditDates
                dates={ dates }
                setDates={ setDates }
            />
            <div className={`${ "green_button" } ${ styles.submit }`}>
                <OnClick type="submit" form="dateForm">
                    <Font style="default_button">
                        { submitText }
                    </Font>
                </OnClick>
            </div>
        </>
    )
}

export default QuestionnaireForm