import React from 'react'
import './essay.less'
import Img from '../../img/add_diary.png'
import { Card } from 'antd';
export default function Essay() {
    return (
        <div className="essay">
            <div className='add'>
                <div></div>
                <button><i className='iconfont icon-xinzeng1' style={{ fontSize: 26, marginRight: 6 }}></i>新增</button>
            </div>
            <hr></hr>
            <Card
                size="small"
                style={{
                    width: 450,
                    height:300
                }}
            >
                <div className='card'>
                <div className='card_header'>
                    <div className='card_title'>这是我的第一个日志</div>
                    <div>2023/09/01</div>
                </div>
                <div className='card_body'>
                    
                </div>

                </div>
               
            </Card>
        </div>
    )
}
