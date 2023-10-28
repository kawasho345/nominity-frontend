import React from 'react';
import styles from "./NoGroup.module.css";
import Link from "next/link";

const No_group = () => {
  return (
    <div className = { styles.frame }>
        <h3 className={ styles.header }>グループがありません</h3>
        <p>グループを作ってノミニティを始めましょう</p>
        <div className = { styles.create_group }>
            <Link href = "/createGroup" className='link'>
                <span className={ styles.create_group_text }>新しいグループを作る</span>
            </Link>
        </div>
        <span className = { styles.footer }>
            招待リンクを受け取ると<br/>他のグループに参加することもできます
        </span>
    </div>
  )
}

export default No_group