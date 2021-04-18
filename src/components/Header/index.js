import React from 'react'
import { Row,Col } from 'antd'
import './index.less'
import axios from 'axios'
import Util from '../../utils/utils'
import { connect } from 'react-redux';

 class Header extends React.Component {
    state={}
    componentWillMount(){
        this.setState({
            userName:"喜欢听民谣的詹密"
        })
        setInterval(()=>{
          let sysTime =  Util.formateDate(new Date().getTime());
          this.setState({
              sysTime
          })
        },1000)
        this.getWeatherAPIData()
    }
    componentWillUnmount() {
        this.setState = ()=>false;
    }
    getWeatherAPIData(){
        axios.get( "http://api.k780.com/?app=weather.today&weaid=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json")
        .then((res)=>{
          
            if(res.status == '200'){
                let data = res.data.result.weather;
                let img1 = res.data.result.weather_icon;
                this.setState({
                    weather:data,
                    img1,
                })
            }
        })
    }
    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?
                            <Col span={6} className="logo">
                                <img src="/assets/logo-ant.svg" alt=""/>
                                <span>IMooc 通用管理系统</span>
                            </Col>:''
                    }
                    
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                        <Row className="breadcrumb">
                            <Col span={4}className="breadcrumb-title">
                                {this.props.menuName}
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime} </span>
                                <span className="weather-detail">
                                    {/* 俺不知道 */}
                                    <img src={this.state.img1}  alt=''/>
                                    {this.state.weather}
                                </span>
                            </Col>
                        </Row>
                }
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        menuName:state.menuName
    }
}
export default connect(mapStateToProps)(Header)