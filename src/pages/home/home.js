
import { Layout, Space, Menu } from 'antd';
import { useState } from 'react';
import ContentPage from '../content/index.js'
import MyHeader from './components/header'
import { Link } from 'react-router-dom'
import './home.less'
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 84,
    lineHeight: '84px',
    backgroundColor: '#aa4344',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    height: 1200,
    color: '#fff',
    padding:40,
    backgroundColor: '#e7d2cf',
};
const siderStyle = {
    textAlign: 'center',
    height: 1200,
    color: '#fff',
    backgroundColor: '#aa4344',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#aa4344',
};
function Home(props) {
    const [activeKey,setActiveKey] = useState('/home/essay')
   const onClick = (item)=>{
   setActiveKey(item.key)
    props.history.push(item.key)
   }
    const items = [
        { "label": '随想随记', key: '/home/essay',icon:<i className="iconfont icon-icon_riji"></i> }, 
        { "label": '突发奇想plan', key: '/home/whimplan' ,icon:<i className="iconfont icon-jihua"></i>},
        { "label": '减肥record', key: '/home/figuremanage' ,icon:<i className="iconfont icon-simi"></i>},
        { "label": '今日todo', key: '/home/todo' ,icon:<i className="iconfont icon-wj-jh"></i>},
        { "label": '月账单', key: '/home/monthlyaccount' ,icon:<i className="iconfont icon-jizhangben"></i>},
        { "label": '照片墙', key: '/home/photo' ,icon:<i className="iconfont icon-xiangce"></i>}]

    return (
        <div className="App">
            <Layout>
                <Header style={headerStyle}>
                    <MyHeader></MyHeader>
                </Header>
                <Layout hasSider>
                    <Sider style={siderStyle}>
                        <ul className='menu'>
                        {
                            items.map(item=>(
                                <li key={item.key} onClick={()=>onClick(item)} className={activeKey===item.key?'active':''}>
                                    <div  >
                                        {item.icon} {item.label}
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                       
                    </Sider>
                    <Content style={contentStyle}>
                        <ContentPage></ContentPage>
                    </Content>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </div>
    );
}

export default Home;
