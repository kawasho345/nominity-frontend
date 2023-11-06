import React from 'react'
import styles from "./Schdule.module.css";
import EditSchedule from '../EditSchedule/EditSchedule';
import Text from '@/components/text/Text';
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

    return (
        <div className={ styles.frame }>
            <div className={ styles.header }>
                <Text style="name">{ scheduleName }</Text>
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
                    scheduleRemarks={ scheduleUpdatedAt }
                    userId={ userId }
                />
            </div>
            <div className={ styles.main }>
                <ul className={ styles.details }>
                    <li className={ styles.element}>
                        <Text style="force_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>日付：</span>
                                <span className={ styles.value }>{ scheduleDate || "未定"}</span>
                            </span>
                        </Text>
                    </li>
                    <li>
                        <Text style="force_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>お店：</span>
                                <span className={ styles.value }>{ restaurantName || "未定"}</span>
                            </span>
                        </Text>
                    </li>
                    <li>
                        <Text style="default_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>住所：</span>
                                <span className={ styles.value }>{ restaurantAddress || "未定"}</span>
                            </span>
                        </Text>
                    </li>
                    <li>
                        <Text style="default_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>URL：</span>
                                <Link href={ restaurantUrl } className={ styles.link }>
                                    <span className={ styles.value }>{ restaurantUrl || "不明"}</span>
                                </Link>
                            </span>
                        </Text>
                    </li>
                    <li>
                        <Text style="default_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>料金：</span>
                                <span className={ styles.value }>{ schedulePrice || "未定"}</span>
                            </span>
                        </Text>
                    </li>
                    <li>
                        <Text style="default_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>人数：</span>
                                <span className={ styles.value }>{ scheduleNumberPeople || "未定"}</span>
                            </span>
                        </Text>
                    </li>
                    <li>
                        <Text style="default_text">
                            <span className={ styles.element }>
                                <span className={ styles.key }>備考：</span>
                                <span className={ styles.value }>{ scheduleRemarks }</span>
                            </span>
                        </Text>
                    </li>
                </ul>
                <Image 
                    src={ restaurantImage || "/images/group_icon.png" } 
                    width="120" height="120" 
                    alt=""
                    className={ styles.image } 
                />
            </div>
        </div>
    )
}

export default Schdule