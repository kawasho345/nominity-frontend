"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./SearchBody.module.css";
import BodyFrame from '@/components/bodyFrame/BodyFrame';
import { FormProvider, useForm } from 'react-hook-form';
import EditText from '@/components/editText/EditText';
import OnClick from '@/components/onClick/OnClick';
import Text from '@/components/text/Text';
import { fetchRequest } from '@/lib/fetch';
import Restaurant from '../../restaurant/Restaurant';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useToggle, useUpdateEffect } from 'react-use';
import RegisterRestaurant from '../../registerRestaurant/RegisterRestaurant';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    const router = useRouter();

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
            const query = "?keyword=" + keyword + "&start=" + start;
            const results = await fetchRequest({
                url: "/api/others/hotpepper" + query,
                method: "GET",
                element: "restaurants"
            })
            const restaurantsArray = results.map((result) => {
                return {
                    name: result.name,
                    address: result.address,
                    url: result.url.pc,
                    image: result.image.mobile.l
                }
            })
            setRestaurants(restaurantsArray)
        }
        if(countRender.current<2){
            countRender.current+=1;
            return;
        }
        search()
        window.scrollTo(0, 0)
    },[keyword, start])

    return (
        <BodyFrame>
            <FormProvider { ...methods }>
                <Text style="title">ホットペッパーグルメから探す</Text>
                <form onSubmit={ methods.handleSubmit(onSubmit) }>
                    <div className={ styles.search_frame }>
                        <EditText
                            name="keyword"
                            style="search"
                            required={ true }
                        />
                        <div className={`${ styles.search_button } ${ "green_button" }`}>
                            <OnClick type="submit">
                                <Text style="default_button">検索</Text>
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
                                    <Text style="default_button">リストに登録する</Text>
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
                                        <Text style="default_text">前のページ</Text>
                                    </div>
                                </OnClick>
                            </div>
                        :""}
                        {restaurants.length === 10?
                            <div className={ styles.footer_button }>
                                <OnClick func={ () => changePage("next")}>
                                    <div className={ styles.next }>
                                        <Text style="default_text">次のページ</Text>
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