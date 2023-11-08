"use client"
import { registerGroup } from '@/lib/management';
import React from 'react'

const RegisterGroup = (props) => {
    const { userId } = props;

    const onSubmit = async(data) => {
        const groupId = await registerGroup(data, userId);
        router.push("/management?groupId=" + groupId)
    }

    return (
        <RegisterGroup
            submitText="作成"
            submitFunc={ (data) => onSubmit(data) } />
    )
}

export default RegisterGroup