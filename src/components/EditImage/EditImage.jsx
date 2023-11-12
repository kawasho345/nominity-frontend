import React, { useEffect, useState } from 'react'
import styles from "./EditImage.module.css";
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import Font from '../Font/Font';

const EditImage = (props) => {
    const { 
        name,
        title, 
        image,
        noImage,
        width = 50,
        height = 50,
        style,
    } = props
    const [preview, setPreview] = useState(image)
    const { register } = useFormContext();

    const changeFile = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]))
    }

    useEffect(() => {
        setPreview(image)
    },[image])

     return (
        <>
            <label>
                <Font type="weak_text">{ title }</Font>
                <div className={ styles.middle_frame }>
                    <input 
                        accept=".jpg, .jpeg, .png, .gif" 
                        className={ styles.input }
                        {...register(name, {
                            onChange: (e) => { changeFile(e) }
                        })}
                        type="file" 
                    />
                    <p className={ styles.text }>クリックで画像を選ぶ</p>
                    <div className={ styles.image }>
                        <Image 
                            src={ preview || noImage } 
                            width={ width } 
                            height={ height }
                            alt=""
                            className={ styles[style] }
                        />
                    </div>
                </div>
            </label>
        </>
    )
}

export default EditImage