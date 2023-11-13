import React from 'react';
import styles from "./Leftbar.module.css";
import { Chat, EditCalendar, Home, People, Restaurant, ThumbsUpDown } from "@mui/icons-material";
import OnClick from '../OnClick/OnClick';
import Font from '../Font/Font';

const Leftbar = (props) => {
    const { groupId } = props;
    let query = "";
    if(groupId){
        query = "?groupId=" + groupId;
    }

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
                            <div className={ styles.text}>
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
                            <div className={ styles.text}>
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
                            <div className={ styles.text}>
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
                            <div className={ styles.text}>
                                <Font>グループ管理</Font>
                            </div>
                        </div>
                    </OnClick>
                </li>
                {/* <li className = { styles.leftbar }>
                    <Link href = "/schedules" className = "link">
                        <span className = { styles.icon }>
                            <Home />
                        </span>
                        <span className = { styles.text }>お知らせ</span>
                    </Link>
                </li>
                <li className = { styles.leftbar }>
                    <Link href = "/groupChat" className = "link">
                        <span className = { styles.icon }>
                            <Chat />
                        </span>
                        <span className = { styles.text }>掲示板</span>
                    </Link>
                </li>
                <li className = { styles.leftbar }>
                    <Link href = "/questionnaire" className = "link">
                        <span className = { styles.icon }>
                            <EditCalendar />
                        </span>
                        <span className = { styles.text }>日程調整</span>
                    </Link>
                </li>
                <li className = { styles.leftbar }>
                    <Link href = "/restaurants" className = "link">
                        <span className = { styles.icon }>
                            <Restaurant />
                        </span>
                        <span className = { styles.text }>お店リスト</span>
                    </Link>
                </li>
                <li className = { styles.leftbar }>
                    <Link href = "/preference" className = "link">
                        <span className = { styles.preference_icon }>
                            <ThumbsUpDown />
                        </span>
                        <span className = { styles.text }>
                                好き/嫌い<br />アレルギーリスト
                        </span>    
                    </Link>
                </li>
                <li className = { styles.leftbar }>
                    <Link href = "/management" className = "link">
                        <span className = { styles.icon }>
                            <People />
                        </span>
                        <span className = { styles.text }>グループ管理</span>
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Leftbar