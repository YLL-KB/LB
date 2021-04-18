import React from 'react'
import { Card, Button, Icon, Spin, Alert, Switch } from 'antd'
import './ui.less'

  
export default class Loadings extends React.Component {
     
        state = { loading: false };
      
        toggle = value => {
          this.setState({ loading: value });
        };
    render() {
        
        const icon = <Icon type="loading" style={{ fontSize:24 }}/>
        return (
            <div>
                <Card title="Spin用法" className="card-wrap ">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{marginLeft:10}}/>
                </Card>
                <Card>
                
                        <Spin spinning={false}>
                            <Alert
                                message="React"
                                description="欢迎来到React高级实战课程"
                                type="info"
                            />
                        </Spin>
                        <Spin spinning={true} >
                            <Alert
                                message="React"
                                description="欢迎来到React高级实战课程"
                                type="warning"
                            />
                        </Spin>
                        <Spin spinning={true} tip="加载中……" >
                            <Alert 
                                message="React"
                                description="欢迎来到React高级实战课程"
                                type="warning"
                            />
                        </Spin>
                        <Spin spinning={true} indicator={icon}>
                            <Alert
                                message="React"
                                description="欢迎来到React高级实战课程"
                                type="warning"
                            />
                        </Spin>
                </Card>
            </div>
        )
    }
}
