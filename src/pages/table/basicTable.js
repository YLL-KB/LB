import React, { Component } from 'react'
import { Card, Table, Modal, Button, message} from 'antd';
import axios from '../../axios/index';
import utils from '../../utils/utils';


export default class BasicTable extends Component {
    state={
         dataSource2:[]
        
    }
    params = {
        page:1
    }
    componentDidMount(){
        const dataSource = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-09',
                address:'北京市海淀区奥利匹克公园',
                time:'09:00'
            },
            {
                id:'1',
                userName:'Tom',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'1998-03-07',
                address:'河北省安新县',
                time:'06:00'
            },
            {
                id:'2',
                userName:'张飞',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'1999-11-17',
                address:'河北省保定景秀区',
                time:'07:00'
            }
        ]
        dataSource.map((item,index)=>{
            item.key = index;
        })
        this.setState({
            dataSource
        })
        this.request();
    }
    request = () =>{
        let _this = this;
       axios.ajax({
           url:'/table/list',
           data:{
               params:{
                   page:this.params.page
               }
           }
       }).then((res)=>{
           if(res.code == 0){
               res.result.list.map((item,index)=>{
                   item.key = index;
               })
               this.setState({ 
                    dataSource2:res.result.list,
                      selectedRowKeys:[],
                    selectedRows:null,
                    pagination:utils.pagination(res,(current )=>{
                        _this.params.page = current;
                        this.request();
                    })
               })
           }
       })
    }
    onRowClick = (record,index)=>{
        let selectKey = [index];
        Modal.info({
            title:'信息',
            content:`用户名:${record.userName},用户爱好:${record.interest}`
        })
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }
    handleDelete = (()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除这些数据嘛？${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })
    render() {
        const columns= [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config ={
                        '1':'勒布朗',
                        '2':'利拉德',
                        '3':'库里',
                        '4':'哈登',
                        '5':'欧文'
                    }
                    return config[state];
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(abc){
                    let config ={
                        '1':'打篮球',
                        '2':'跑步',
                        '3':'打羽毛球',
                        '4':'下象棋',
                        '5':'唱歌',
                        '6':'画画',
                        '7':'踢足球',
                        '8':'桌球',
                        '9':'爬山',
                        '10':'看书'
                    }
                    return config[abc];
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },{
                title:'地址',
                dataIndex:'address'
            },
            {
                title:'早起时间',
                dataIndex:'time'
            }
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        rowSelection = {rowSelection}
                        onRow={(record,index) => {
                            return {
                              onClick: () => {
                                  this.onRowClick(record,index);
                              }, // 点击行
                              
                            };
                          }}
                         columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-多选" style={{margin:'10px 0'}}>
                    <div style={{marginBottom:10} }>
                        <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection = {rowCheckSelection}
                        
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{margin:'10px 0'}}>
                    
                    <Table
                        bordered
                        rowSelection = {rowCheckSelection}
                        
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}
