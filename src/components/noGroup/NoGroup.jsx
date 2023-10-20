import React from 'react';
import styles from "./NoGroup.module.css";
import Link from "next/link";

const No_group = () => {
  return (
    <div className = { styles.frame }>
        <div className = { styles.content }>
            <div className = { styles.header }>
                <h3>グループがありません</h3>
                <p>グループを作ってノミニティを始めましょう</p>
            </div>
            <div className = { styles.body }>
                <Link href = "/creategroup" className = { styles.link }>
                    <span>新しいグループを作る</span>
                </Link>
            </div>
            <div className = { styles.footer }>
                <span>招待リンクを受け取ると他のグループに参加することもできます。</span>
            </div>
        </div>
    </div>
  )
}

export default No_group