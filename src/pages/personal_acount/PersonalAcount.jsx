import React, { useState } from 'react';
import styles from './PersonalAcount.module.css';
import MainAccount from './Composition/MainAccount/MainAccount'

import Chats from './Composition/Chats/Chats'
import Music from './Composition/Music/Music'
import Settings from './Composition/Settings/Settings'
import Shorts from './Composition/Shorts/Shorts'
import Communities from './Composition/Communities/Communities'
import VidioCalls from './Composition/VidioCalls/VidioCalls'


const allCompposition = [

    <MainAccount />,
    <VidioCalls />,
    <Communities />,
    <Shorts />,
    <Settings />,
    <Chats />,
    <Music />,

]

const PersonalAcount = () => {
    const [activiteComposition, setActiviteComposition] = useState(0);

    const selectComposition = (namberComposition) => {

        setActiviteComposition(namberComposition)

    }

    return (
        <div className={styles.wrapper}>
            <nav>
                <a onClick={ ()=> selectComposition(0)}>Главная строница</a>
                <a onClick={ ()=> selectComposition(1)}>Видиозвонки</a>
                <a onClick={ ()=> selectComposition(2)}>Чаты</a>
                <a onClick={ ()=> selectComposition(3)}>Группы</a>
                <a onClick={ ()=> selectComposition(4)}>Shorts</a>
                <a onClick={ ()=> selectComposition(5)}>Музыка</a>
                <a onClick={ ()=> selectComposition(6)}>НАСТРОЙКИ</a>
            </nav>
            <div className={styles.bacgraundstarsky}></div>

            {allCompposition[activiteComposition]}


        </div >
    )
}

export default PersonalAcount
