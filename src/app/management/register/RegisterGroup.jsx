"use client"
import { registerGroup } from '@/lib/management';
import React from 'react'
import GroupForm from '../GroupForm';
import { useRouter } from 'next/navigation';

const RegisterGroup = (props) => {
    const { userId } = props;
    const router = useRouter();

    const onSubmit = async(data) => {
        const groupId = await registerGroup(data, userId);
        router.push("/management?groupId=" + groupId)
    }

    return (
        <GroupForm
            submitText="作成"
            submitFunc={ (data) => onSubmit(data) } />
    )
}

export default RegisterGroup