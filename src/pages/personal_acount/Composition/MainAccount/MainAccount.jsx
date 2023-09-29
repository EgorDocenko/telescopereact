import React from 'react';
import PostPanel from '../../../../components/UI/PostPanel/PostPanel';
import styles from '../../PersonalAcount.module.css'

const MainAccount = () => {
    return <section className={styles.main_content}>

        <div className={styles.title}>
            <span className={styles.logo_properties}>
                TELESKOP
            </span>
        </div>

        <div className={styles.user_info}>
            <div className={styles.avatar_block}>
                <span className={styles.lso}>
                    Была в сети...
                </span>
                <img
                    src="img/afa.jpg"
                    className={styles.avatar}
                    alt="Аватар"
                />
            </div>
            <div className={styles.info_block}>

                <div className={styles.info_block_main_content}>
                    <div className={styles.info_left_block}>
                        <div className={styles.info_city}>Город: Волоколамск</div>
                        <div className={styles.info_age}>Возраст: 14 лет</div>
                    </div>

                    <div className={styles.info_right_block}>
                        <div className={styles.info_gender}>Пол: мужкой</div>
                        <div className={styles.info_hobbies}> Увлечения: IT</div>
                    </div>

                </div>

            </div>
        </div>
        <div className={styles.posts}>

            <PostPanel startPus={0} endPos={5} />

        </div>
    </section>
}

export default MainAccount;