import React from 'react'
import s from './ReviewsWrap.module.scss'

const ReviewsWrap = () => {
  return (
    <>
    <section className={s.reviewwswrap}>
        <div className="container">
            <div className={s.wrap}>
                <div className={s.card}>
                    <div>
                        <p>⭐⭐⭐⭐</p>
                        <img src="/public/tochka.svg" alt="" />
                    </div>

                    <h3>Samantha D.✅</h3>
                    <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so <br /> comfortable. As a fellow designer, I appreciate the attention to detail. It's <br /> become my favorite go-to shirt."</p>
                    <b>Posted on August 14, 2023</b>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ReviewsWrap