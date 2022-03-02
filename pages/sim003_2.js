import {useState, useEffect} from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from './../styles/Home.module.scss'

export default function Home() {
  const url = 'http://localhost/wordpress/wp-json/wp/v2/posts'
  const [data, setData] = useState({data:[]})
  const [message, setMessage] = useState('テスト出力')

  useEffect(() => {
    fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))
  }, []);

  const test = () => {
    console.log(data);
  }

  return (
    <>
      {/* <Layout header="Next.js" title="Top page."> */}
        {/* ここからsim響 */}

        <header className={styles.header}>
          <img src="./images/ttl.png" className={styles.head_logo} />
        </header>

        <main className={styles.main_content} role="main">
          <div className={styles._container}>
            <img src="/images/head.png" className={styles.head_img} />
          </div>
          <div className={styles.inner_contents}>

            <form id="myform" action="/sim003_2/[para]" method="post" className={styles.simform_page}>
              <input type="hidden" name="borrowing_amount" value="[post name=borrowing_amount]" />
              <div className={styles.lead_sub}>いただいた情報は無料診断・相談以外の用途には一切使用しません。</div>

              <div className={styles.q1} data-q_num="1">
                <div className={styles.indicator}>
                  <div className={styles.q_num}>Q1</div>
                  <div className={`${styles.q_num} ${styles.active}`}>Q2</div>
                  <div className={styles.q_num}>Q3</div>
                  <div className={styles.q_num}>完了</div>
                </div>

                <div className={styles.lead}>返済期間についてお聞かせください</div>
                <div className={styles.lead_sub}>※覚えている範囲で大丈夫です</div>

                <ul className={styles.Form__radioButtonList} data-test-el="radioButtonList">
                  <li><label><input type="radio" name="borrowing_amount" value="0～3ヶ月未満" required="" data-fo-validated="true" /><span>0～3ヶ月未満</span></label></li>
                  <li><label><input type="radio" name="borrowing_amount" value="3ヶ月～1年未満" required="" data-fo-validated="true" /><span>3ヶ月～1年未満</span></label></li>
                  <li><label><input type="radio" name="borrowing_amount" value="1～6年未満" required="" data-fo-validated="true" /><span>1～6年未満</span></label></li>
                  <li><label><input type="radio" name="borrowing_amount" value="6年以上" required="" data-fo-validated="true" /><span>6年以上</span></label></li>
                </ul>

                <div className={styles.btn_back}>戻る</div>
              </div>
            </form>
          </div>
        </main>

      <footer className={styles.footer}>
        <div className={styles.fotter_link_container}><a href="https://saimu-omakase.com/company/">運営者情報</a>　｜　<a href="https://saimu-omakase.com/privacypolicy/">プライバシーポリシー</a></div>
        <div className={styles.fotter_copy}>Copyright (C) 2019　弁護士法人・響 All Rights Reserved.</div>
      </footer>

        {/* ここまでsim響 */}
    </>
  )
}