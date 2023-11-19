"use client"
import Heading from '@/components/Heading/Heading'
import React, { useState } from 'react'
import GroupForm from './GroupForm'
import { useRouter } from 'next/navigation'
import { updateGroup } from '@/lib/management'
import PopUp from '@/components/PopUp/PopUp'

//グループ情報編集
const UpdateGroup = (props) => {
    const { 
        userId,
        groupId,
        groupName,
        groupIcon,
    } = props
    const router = useRouter();
    const [popUp, setPopUp] = useState([]);
    //グループ更新
    const onSubmit = async(data) => {
        const response = await updateGroup(data, userId, groupId);
        if(response.status === 200){
            setPopUp([true, "success", "更新完了"]);
            setTimeout(() => {
                setPopUp([false,,]);
            }, 3000)
        }else{
            setPopUp([true, "failed", "更新失敗"]);
            setTimeout(() => {
                setPopUp([false,,]);
            }, 3000)
        }
        router.refresh()
    }

    return (
        <>
            <Heading>グループ情報更新</Heading>
            <GroupForm 
                submitFunc={ (data) => onSubmit(data) }
                submitText="更新"
                groupName={ groupName }
                groupIcon={ groupIcon }
            />
            {(popUp[0] === true)?
                <PopUp style={ popUp[1] }>{ popUp[2] }</PopUp>
            :""}
        </>
    )
}

export default UpdateGroup