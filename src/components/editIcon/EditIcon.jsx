import React, { useState } from 'react'
import styles from "./EditIcon.module.css";
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

const EditIcon = (props) => {
    const { 
        name,
        title, 
        icon,
    } = props
    const changeFile = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]))
    }
    const [preview, setPreview] = useState(icon)
    const { register } = useFormContext();

     return (
        <>
            <label>
                <p className={ styles.title }>{ title }</p>
                <div className={ styles.middle_frame }>
                    <input 
                        accept=".jpg, .jpeg, .png, .gif" 
                        className={ styles.input } 
                        {...register(name, {
                            onChange: (e) => { changeFile(e) }
                        })}
                        // onChange={ changeFile } 
                        type="file" 
                    />
                    <p className={ styles.text }>クリックで画像を選ぶ</p>
                    <div className={ styles.icon }>
                        <Image 
                            src={ preview || "/images/group_icon.png" } 
                            width="50" 
                            height="50" 
                            alt=""
                            className="icon"
                        />
                    </div>
                </div>
            </label>
        </>
    )
}

export default EditIcon