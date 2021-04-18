import React, { Component } from 'react'
import { Card,Tabs, Icon, Button } from 'antd';

const { TabPane } = Tabs;

    
  
export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: '叫龙哥 1', key: '1' },
          { title: 'Tab 2', content: '叫龙哥 2', key: '2' },
          { title: 'Tab 3',content: '叫龙哥 3',key: '3'},
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
        };
      }
    
      onChange = activeKey => {
        this.setState({ activeKey });
      };
    
      onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
    render() {
        return (
            <div>
                <Card title="tab标签" className="card-wrap">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">
                            叫龙哥
                        </TabPane>
                        <TabPane tab="Tab 2" disabled key="2">
                            Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            喜欢听民谣的詹密
                        </TabPane>
                    </Tabs>,
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs defaultActiveKey="2">
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="plus" />
                                        Tab 1
                                    </span>
                            }
                            key="1"
                        >
                            喜欢听民谣的詹密 1
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="edit" />
                                    Tab 2
                                </span>
                            }
                            key="2"
                        >
                            喜欢听民谣的詹密 2
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="delete" />
                                    Tab 3
                                </span>
                            }
                            key="3"
                        >
                            喜欢听民谣的詹密 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-wrap">
                    
                    <Tabs
                        hideAdd
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key}>
                                {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        )
    }
}
