import React, { useEffect, useState } from 'react'
import styles from "./EditImage.module.css";
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

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
    const changeFile = (e) => {
        const { files } = e.target;
        setPreview(window.URL.createObjectURL(files[0]))
    }
    const [preview, setPreview] = useState(image)
    const { register } = useFormContext();
    useEffect(() => {
        setPreview(image)
    },[image])

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