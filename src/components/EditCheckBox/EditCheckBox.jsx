import React from 'react';
import styles from "./EditCheckBox.module.css";
import Font from '../Font/Font';
import { useFormContext } from 'react-hook-form';

//チェックボックスform
const EditCheckBox = (props) => {
    const {
        title,
        name,
        value,
        elements,
    } = props;
    const { register } = useFormContext();

    return (
        <>
            <Font style="weak_button">{ title }</Font>
            <div className={ styles.frmae }>
                <Font style="large" tag="div">
                    {elements.map((element, index) => (
                        <div className={ styles.middle_frame } key={ index }>
                            <input
                                id={ element }
                                className={ styles.check_box }
                                { ...register(name) }
                                type="checkbox"
                                value={ element }
                                defaultChecked={ value.includes(element) }
                                />
                            <label 
                                className={ styles.element } 
                                htmlFor={ element }
                                >
                                { element }
                            </label>
                        </div>
                    ))}
                </Font>
            </div>
        </>
    )
}

export default EditCheckBox