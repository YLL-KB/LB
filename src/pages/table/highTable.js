import React, { Component } from 'react'
import { Card, Table, Modal, Button, message, Badge} from 'antd';
import axios from '../../axios/index';
import utils from '../../utils/utils';
export default class HighTable extends Component {
    state = {

    }
    params = {
        page: 1
    }
    componentDidMount(){
        this.request();
    }
    request = () =>{
        let _this = this;
       axios.ajax({
           url:'/table/high/list',
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
                    dataSource:res.result.list,
               })
           }
       })
    }
    handleChange = (pagination,filters,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'你确认要删除此条数据么？',
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns= [
            {
                title:'id',
                dataIndex:'id',
                width:80,

            },
            {
                title:'用户名',
                width:80,
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:'birthday'
            },{
                title:'地址',
                width:120,
                dataIndex:'address'
            },
            {
                title:'早起时间',
                width:80,
                dataIndex:'time'
            }
        ]
        const columns2= [
            {
                title:'id',
                fixed:'left',
                dataIndex:'id',
                width:80,
            },
            {
                title:'用户名',
                width:80,
                fixed:'left',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex == 1 ?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                width:80,
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
                width:80,
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
                width:120,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:120,
                dataIndex:'birthday'
            },{
                title:'地址',
                fixed:'right',
                width:120,
                dataIndex:'address'
            },
            {
                title:'早起时间',
                width:80,
                fixed:'right',
                dataIndex:'time'
            },
           
        ]
        const columns3= [
            {
                title:'id',
                dataIndex:'id',

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
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder
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
        const columns4= [
            {
                title:'id',
                dataIndex:'id',
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
                title:'年龄',
                dataIndex:'age',
                
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
                       
                        '1':<Badge status="success" text="打篮球"/>,
                        '2':<Badge status="success" text="跑步"/>,
                        '3':<Badge status="success" text="打羽毛球"/>,
                        '4':<Badge status="error" text="下象棋"/>,
                        '5':<Badge status="error" text="唱歌"/>,
                        '6':<Badge status="default" text="画画"/>,
                        '7':<Badge status="warning" text="踢足球"/>,
                        '8':<Badge status="processing" text="桌球"/>,
                        '9':<Badge status="error" text="桌球"/>,
                        '10':<Badge status="success" text="看书"/>
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
                title:'操作',
                render:(text,item)=>{
                    return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns2}  
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x:1300}}
                    />
                </Card>
                <Card title="表格排序" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns3}  
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns={columns4}  
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
