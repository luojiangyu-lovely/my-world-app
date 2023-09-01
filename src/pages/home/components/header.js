import React from 'react'

import Styles from './header.module.less'
export default function Header() {

    return (
        <div className={Styles['font']}>
            <span className={Styles['color_b']}>姜</span>
            <span className={Styles['color_y']}>姜</span>
            <span className={Styles['color_b']}>好</span>
            <span className={Styles['color_y']}>の</span>
            <span className={Styles['color_b']}>World</span>
        </div>
    )
}