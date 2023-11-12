"use client"
import Heading from '@/components/Heading/Heading'
import React from 'react'
import GroupForm from './GroupForm'
import { useRouter } from 'next/navigation'
import { updateGroup } from '@/lib/management'

const UpdateGroup = (props) => {
    const { 
        userId,
        groupId,
        groupName,
        groupIcon,
    } = props
    const router = useRouter();
    const onSubmit = async(data) => {
        const rsponse = await updateGroup(data, userId, groupId) 
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
        </>
    )
}

export default UpdateGroup