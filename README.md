# ノミニティ

## 概要

飲み会の幹事をサポートすることを目的としたWebアプリケーションです。

* 飲み会開催の告知
* 掲示板を通したやり取り
* オススメのお店の登録
* 日程調整
* 好きな食べ物、嫌いな食べ物、アレルギーの確認

招待コードを通して参加したグループのメンバーにこれらのサービスを提供します。

## 開発背景

私の所属する研究室では月に一度必ず飲み会があります。その飲み会に参加したり、幹事を担ったりするなかで以下のような煩わしさを感じました。

* 研究に関する連絡と飲み会の連絡が混同しており見にくい。
* お店に詳しくない人は店探しから苦労する上に、初見のお店を提示した際の満足度が保証されない。
* メンバーの好みやアレルギーを考慮しにくい。

これらの問題を解決しつつ、実際に利用してみて便利と感じた「日程調整機能」を内包するようなWebアプリケーションが欲しいと感じたのが今回の開発を行うきっかけでした。

## 機能一覧

* お知らせ  
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/cbb5c42a-c992-47dd-ba65-1f5e97016157)
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/de4f3519-086a-43c2-97d9-c6b95b507ec4)
飲み会の開催を告知することができます。  
告知する場所を明確にすることで、日頃の連絡の中で埋もれがちな開催告知にアクセスしやすくすることを目的としています。  
お店の名前や住所、URLはそれぞれ記入する必要はなく、後述するお店リストに先に登録しておくことですぐにそのお店の情報を引き出すことができます。

* 掲示板  
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/4f1b6959-c004-4b0b-becd-2c3e35b9db8f)
掲示板としてグループのメンバーとチャットでのやり取りができます。  
研究や仕事などの本来の目的での連絡と、飲み会の連絡を隔離することで連絡の齟齬が生じるのを防ぐことを目的としています。  
また、その会限りのゲストなど共通の連絡先を持たない場合の連絡手段として機能することを目的としています。

* 日程調整  
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/aec48bb2-0392-4d18-b57a-c490a06bff12)
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/8e98639b-e2f3-431f-a66e-5c4384c7a043)
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/c82e03bb-097b-4bda-9dd2-f4be14652561)
次回の飲み会の日程を調整することができます。  
日程はカレンダー、記入のそれぞれで追加が可能になっており、追加後の再編集やドラッグアンドドロップによる順番変更(現在pcのみ対応)が可能になっています。  
まだまだ機能として至らない点も多く、今後の課題が大きく残る部分でもあります。

* お店リスト  
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/5d3c254b-5bde-445d-85fc-0e2580578430)
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/7a06ef66-f1ee-4d6d-a5d3-1b7218959a36)
オススメのお店を登録しておくことができます。  
お店は知ってる人が提案するほうが良い、という考えのもと開発しました。  
ホットペッパーグルメと連携することでより簡単に登録できるようになっており、登録されたお店は先述のお知らせにてすぐに呼び出せるようになっています。

* 好き嫌いアレルギーリスト  
![image](https://github.com/kawasho345/nominity-frontend/assets/142466984/89cb57b6-757c-47be-bb78-7ef50c2c3530)
グループのメンバーの料理やお酒の好み、アレルギーについて集計し表示します。  
ユーザー登録が必要なWebアプリケーションということを逆手に、普段の飲み会だと集計が難しく軽視されがちな食の好みを、プロフィールとして登録してもらうことでお店選びの指標へ繋げたいという目的で開発しました。  
ユーザビリティを考慮した結果、表示推奨アレルギー品目だけをcheckboxにて集計。食の好みは自由記入にしてもらったうえで、ChatGPTと組み合わせることで実現しています。  
新たな取り組みであり、精度やシステムとして至らない点が多いのが現状です。私はこれを研究課題として取り上げており、１年かけてより良いシステムへと改良していきます。

## 製作期間

1ヶ月半

## 今後の改善予定

* 掲示板にてbotによるログ表示の追加(ユーザーの行った編集、削除等を逐一表示)
* 掲示板のUI改善
* 日程調整に集計結果表示の実装
* 日程調整と好き嫌いアレルギーリストをリンクさせて日程ごとに好き嫌いアレルギーリストを表示
* 好き嫌いアレルギーリストの精度向上
* グループ管理にグループ削除の追加
* グループ管理にユーザーを退会させる項目の追加

## 所感

今年の8月の終わりに初めてjsについて触れて、Web系の楽しさを知って兼ねてより構想だけ立っていたこのプログラムの製作を決めました。慣れない言語とベストプラクティスに悩む日々に疲弊しながらもなんとか完成させられたのは、「何事にもチャレンジしてみる」という信念のもと、多くのことにチャレンジしてきた経験があったからこそだったと思います。
完成、と一言に言ってもまだまだ改善しなければならない部分はたくさんあります。今回の経験を糧にさらにより良いアプリケーションへと変えていきたいと思います。