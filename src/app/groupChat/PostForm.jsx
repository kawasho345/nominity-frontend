import React from 'react';
import styles from "./styles/PostForm.module.css";
import { FormProvider, useForm } from 'react-hook-form';
import EditTextArea from '@/components/EditTextArea/EditTextArea';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';

//投稿フォーム
const PostForm = (props) => {
    const { 
        postContent,
        submitFunc,
        submitText,
    } = props;
    const methods = useForm();
    //投稿時フォームをリセット
    const onSubmit = (data) => {
        submitFunc(data);
        methods.reset();
    } 

    return (
        <FormProvider { ...methods }>
            <form onSubmit={ methods.handleSubmit(onSubmit) } className={ styles.frame }>
                <div className={ styles.text_area }>
                    <EditTextArea
                        style="post"
                        name="postContent"
                        value={ postContent }
                        maxLength="400"
                    />
                </div>
                <div className={`${ styles.button } ${ "button" }`}>
                    <OnClick type="submit">
                        <Font style="button">{ submitText }</Font>
                    </OnClick>
                </div>
            </form>
        </FormProvider>
    )
}

export default PostForm