import React from 'react'
import styles from "./styles/Schdule.module.css";
import EditSchedule from './EditSchedule';
import Font from '@/components/Font/Font';
import Image from 'next/image';
import Link from 'next/link';

const Schdule = (props) => {
    const {
        scheduleId,
        scheduleName,
        scheduleDate,
        restaurantName,
        restaurantAddress,
        restaurantUrl,
        restaurantImage,
        schedulePrice,
        scheduleNumberPeople,
        scheduleRemarks,
        scheduleUpdatedAt,
        userId,
    } = props
    const updateDate = new Date(scheduleUpdatedAt)

    return (
        <div className={ styles.frame }>
            <div className={ styles.header }>
                <Font style="large">{ scheduleName }</Font>
                <EditSchedule
                    scheduleId={ scheduleId }
                    scheduleName={ scheduleName }
                    scheduleDate={ scheduleDate }
                    restaurantName={ restaurantName }
                    restaurantAddress={ restaurantAddress }
                    restaurantUrl={ restaurantUrl }
                    restaurantImage={ restaurantImage }
                    schedulePrice={ schedulePrice }
                    scheduleNumberPeople={ scheduleNumberPeople }
                    scheduleRemarks={ scheduleRemarks }
                    userId={ userId }
                />
            </div>
            <div className={ styles.main }>
                <Font style="default_text" tag="div">
                    <ul className={ styles.details }>
                        <li>
                            <Font style="force" tag="div">
                                <div className={ styles.date }>
                                    <p className={ styles.key }>日付：</p>
                                    <p className={ styles.value }>{ scheduleDate || "未定"}</p>
                                </div>
                            </Font>
                        </li>
                        <li>
                            <Font style="force" tag="div">
                                <div className={ styles.restaurant }>
                                    <span className={ styles.key }>お店：</span>
                                    <span className={ styles.value }>{ restaurantName || "未定"}</span>
                                </div>
                            </Font>
                        </li>
                        <li className={ styles.element }> 
                                <span className={ styles.key }>住所：</span>
                                <span className={ styles.value }>{ restaurantAddress || "未定"}</span>
                        </li>
                        <li className={ styles.element }>
                                <span className={ styles.key }>URL：</span>
                                <Link href={ restaurantUrl } className={ styles.link }>
                                    <span className={ styles.value }>{ restaurantUrl || "不明"}</span>
                                </Link>
                        </li>
                        <li className={ styles.element }>
                            <span className={ styles.key }>料金：</span>
                            <span className={ styles.value }>{ schedulePrice || "未定"}</span>
                        </li>
                        <li className={ styles.element }>
                            <span className={ styles.key }>人数：</span>
                            <span className={ styles.value }>{ scheduleNumberPeople || "未定"}</span>
                        </li>
                        <li className={ styles.element }>
                            <span className={ styles.key }>備考：</span>
                            <span className={ styles.value }>{ scheduleRemarks }</span>
                        </li>
                    </ul>
                </Font>
                <Image 
                    src={ restaurantImage || "/images/group_icon.png" } 
                    width="120" height="120" 
                    alt=""
                    className={ styles.image } 
                />
            </div>
            <div className={ styles.updateDate }>
                <Font style="weak_text">最終更新日：{ updateDate.toLocaleString() }</Font>
            </div>
        </div>
    )
}

export default Schdule