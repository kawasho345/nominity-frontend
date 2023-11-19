import React from 'react';
import styles from "./Leftbar.module.css";
import { Chat, EditCalendar, Home, People, Restaurant, ThumbsUpDown } from "@mui/icons-material";
import OnClick from '../OnClick/OnClick';
import Font from '../Font/Font';

//メニューバー
const Leftbar = (props) => {
    const { query } = props;

    return (
        <div className = { styles.content }>
            <ul className = { styles.list }>
                <li className = { styles.leftbar }>
                    <OnClick link={ "/schedules" + query }>
                        <div className={ styles.element }>
                            <div className={ styles.icon }>
                                <Home sx={{typography:{ fontSize: '1.8rem' }}} />
                            </div>
                            <div className={ styles.text }>
                                <Font>お知らせ</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
                <li className = { styles.leftbar }>
                    <OnClick link={ "/groupChat" + query }>
                        <div className={ styles.element }>
                            <div className={ styles.icon }>
                                <Chat sx={{typography:{ fontSize: '1.8rem' }}} />
                            </div>
                            <div className={ styles.text}>
                                <Font>掲示板</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
                <li className = { styles.leftbar }>
                    <OnClick link={ "/questionnaire" + query }>
                        <div className={ styles.element }>
                            <div className={ styles.icon }>
                                <EditCalendar sx={{typography:{ fontSize: '1.8rem' }}} />
                            </div>
                            <div className={ styles.text }>
                                <Font>日程調整</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
                <li className = { styles.leftbar }>
                    <OnClick link={ "/restaurants" + query }>
                        <div className={ styles.element }>
                            <div className={ styles.icon }>
                                <Restaurant sx={{typography:{ fontSize: '1.8rem' }}} />
                            </div>
                            <div className={ styles.text }>
                                <Font>お店リスト</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
                <li className = { styles.leftbar }>
                    <OnClick link={ "/preference" + query }>
                        <div className={ styles.element }>
                            <div className={ styles.icon }>
                                <ThumbsUpDown sx={{typography:{ fontSize: '1.8rem' }}} />
                            </div>
                            <div className={ styles.text }>
                                <Font>好き / 嫌い<br />アレルギーリスト</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
                <li className = { styles.leftbar }>
                    <OnClick link={ "/management" + query }>
                        <div className={ styles.element }>
                            <div className={ styles.icon }>
                                <People sx={{typography:{ fontSize: '1.8rem' }}} />
                            </div>
                            <div className={ styles.text }>
                                <Font>グループ管理</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
            </ul>
        </div>
    )
}

export default Leftbar