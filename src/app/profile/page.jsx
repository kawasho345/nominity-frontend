import React from 'react';
import styles from "./styles/page.module.css";
import Header from "@/components/Header/Header";
import ProfileForm from './ProfileForm';
import { setup } from '@/lib/setup';
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import Heading from '@/components/Heading/Heading';

const page = async({ searchParams }) => {
    const searchParamsGroupId = searchParams.groupId;
    const {
        userId,
        username,
        userIcon,
        groupName,
        groupIcon,
        groupId,
        userFavoriteFood,
        userHatedFood,
        userFavoriteAlcohol,
        userHatedAlcohol,
        userAllergy,
        userAllergyText,
    } = await setup(searchParamsGroupId)

    return (
        <>
            <header>
                <Header
                    userId={ userId }
                    username={ username }
                    userIcon={ userIcon } 
                    groupId={ groupId } 
                    groupName={ groupName }
                    groupIcon={ groupIcon }
                />
            </header>
            <main className={ styles.main }>
                <BodyFrame>
                    <Heading>プロフィール変更</Heading>
                    <ProfileForm
                        userId={ userId }
                        username={ username }
                        userIcon={ userIcon }
                        favoriteFood={ userFavoriteFood }
                        hatedFood={ userHatedFood }
                        favoriteAlcohol={ userFavoriteAlcohol }
                        hatedAlcohol={ userHatedAlcohol }
                        allergy={ userAllergy }
                        allergyText={ userAllergyText }
                    />
                </BodyFrame>
            </main>
        </>
    )
}

export default page