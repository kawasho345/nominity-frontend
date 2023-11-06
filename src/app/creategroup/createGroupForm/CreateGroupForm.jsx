"use client"
import React, { useState } from 'react'
import styles from "./CreateGroupForm.module.css";
import EditText from '@/components/editText/EditText';
import { FormProvider, useForm } from 'react-hook-form';
import CustomDialog from '@/components/customDialog/CustomDialog';
import { useToggle } from 'react-use';
import { useRouter } from 'next/navigation';
import { fetchRequest } from '@/lib/fetch';
import storage from '@/providers/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import EditImage from '@/components/editImage/EditImage';

const CreateGroupForm = (props) => {
    const { userId } = props
    const router = useRouter()
    const methods = useForm();
    const [groupId, setGroupId] = useState(null)

    const onSubmit = async(data) => {
        let fileUrl;
        if(data.groupIcon.length){
            const file = data.groupIcon[0]
            const storageRef = ref(storage, "image/userIcon/" + file.name)
            fileUrl = await uploadBytes(storageRef, file).then((snapshot) => {
                return ref(storage, process.env.NEXT_PUBLIC_FIREBASE_URL + snapshot.metadata.fullPath);
            }).then((gsReference) => getDownloadURL(gsReference))
        }
        setGroupId(await fetchRequest({
            url: "/api/group/register",
            method: "POST",
            body: {
                userId: userId,
                groupName: data.groupName,
                groupIcon: fileUrl,
            },
            element: "groupId",
        }))
        setHasDialog(true)
    }
    const [hasDialog, setHasDialog] = useToggle(false)
    const dialogFunction = () => {
        setHasDialog(false);
        router.push("/management?groupId=" + groupId)
    }

    return (
        <>
            <FormProvider { ...methods }>
                <form onSubmit={ methods.handleSubmit(onSubmit) }>
                    <ul>
                        <li className={ styles.element }>
                            <EditText
                                name="groupName"
                                title="グループ名"
                                required={ true }
                                maxLength="25"
                            />
                        </li>
                        <li className={ styles.element }>
                            <EditImage
                                name="groupIcon"
                                title="グループアイコン"
                                image=""
                                width="50"
                                height="50"
                                noImage="/images/group_icon.png"
                                style="icon"
                            />
                        </li>
                    </ul>
                    <div className={ styles.button }>
                        <button type="submit" className="green_button">
                            <p className="green_button_text">作成</p>
                        </button>                   
                    </div>
                </form>
            </FormProvider>
            <CustomDialog
                hasDialog={ hasDialog }
                dialogFunction={ () => dialogFunction() }
                message="グループを作成しました"
            />
        </>
    )
}

export default CreateGroupForm