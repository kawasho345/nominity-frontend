"use client"
import React, { useRef, useState } from 'react'
import styles from "./styles/SearchBody.module.css";
import BodyFrame from '@/components/BodyFrame/BodyFrame';
import { FormProvider, useForm } from 'react-hook-form';
import EditText from '@/components/EditText/EditText';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import Restaurant from '../Restaurant';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useToggle, useUpdateEffect } from 'react-use';
import RegisterRestaurant from '../RegisterRestaurant';
import Image from 'next/image';
import Heading from '@/components/Heading/Heading';
import { searchRestaurants } from '@/lib/restaurants';

const SearchForm = (props) => {
    const {
        userId,
        groupId,
    } = props;
    const methods = useForm();
    const [start, setStart] = useState(1);
    const [keyword, setKeyword] = useState("");
    const [restaurants, setRestaurants] = useState("");
    const countRender = useRef(0);
    const [hasRegisterForm, setHasRegisterForm] = useToggle(false);
    const setRestaurant = useRef();

    const onSubmit = (data) => {
        setStart(1)
        setKeyword(data.keyword)
    }

    const setValue = (restaurant) => {
        setRestaurant.current = restaurant;
        setHasRegisterForm(true)
    }

    const changePage = (state) => {
        {state === "back"?
            setStart(start-10)
        :
            setStart(start+10)
        }
    } 

    useUpdateEffect(() => {
        const search = async() => {    
            const restaurantsArray = await searchRestaurants(keyword, start)
            setRestaurants(restaurantsArray)
        }
        //初回レンダリングでの実行と空欄での検索を防ぐ
        if(countRender.current<2 || !keyword){
            countRender.current+=1;
            return;
        }
        search()
        window.scrollTo(0, 0)
    },[keyword, start])

    return (
        <BodyFrame>
            <FormProvider { ...methods }>
                <Heading>ホットペッパーグルメから探す</Heading>
                <form onSubmit={ methods.handleSubmit(onSubmit) }>
                    <div className={ styles.search_frame }>
                        <EditText
                            name="keyword"
                            style="search"
                            // required={ true }
                        />
                        <div className={`${ styles.search_button } ${ "green_button" }`}>
                            <OnClick type="submit">
                                <Font style="default_button">検索</Font>
                            </OnClick>
                        </div>
                    </div>
                </form>
            </FormProvider>
            {restaurants?
                <>
                    <ul>
                        {restaurants.map((restaurant, index) => (
                            <li className={ styles.element } key={ index }>
                            <Restaurant
                                restaurantName={ restaurant.name }
                                restaurantAddress={ restaurant.address }
                                restaurantUrl={ restaurant.url }
                                restaurantImage= { restaurant.image }
                            />
                            <div className={`${ styles.add_button } ${ "green_button" }`}>
                                <OnClick func={ () => setValue(restaurant) }>
                                    <Font style="default_button">リストに登録する</Font>
                                </OnClick>
                            </div>
                            </li>
                        ))}
                    </ul>
                    <div className={ styles.footer }>
                        {start > 10?
                            <div className={ styles.footer_button }>
                                <OnClick func={ () => changePage("back")}>
                                    <div className={ styles.back }>
                                        <ArrowBackIos className={ styles.arrow } />
                                        <Font style="default_text">前のページ</Font>
                                    </div>
                                </OnClick>
                            </div>
                        :""}
                        {restaurants.length === 10?
                            <div className={ styles.footer_button }>
                                <OnClick func={ () => changePage("next")}>
                                    <div className={ styles.next }>
                                        <Font style="default_text">次のページ</Font>
                                        <ArrowForwardIos className={ styles.arrow } />
                                    </div>
                                </OnClick>
                            </div>
                        :""}
                    </div>
                </>
            :""}
            {hasRegisterForm?
                <RegisterRestaurant
                    setHasRegisterForm={ () => setHasRegisterForm(false) }
                    restaurantName={ setRestaurant.current.name }
                    restaurantAddress={ setRestaurant.current.address }
                    restaurantImage={ setRestaurant.current.image }
                    restaurantUrl={ setRestaurant.current.url }
                    groupId={ groupId }
                    userId={ userId }
                />
            :""}
            <a href="http://webservice.recruit.co.jp/">
                <Image src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパーグルメ Webサービス" width="135" height="17" border="0" title="ホットペッパーグルメ Webサービス" />
            </a>
        </BodyFrame>
    )
}

export default SearchForm