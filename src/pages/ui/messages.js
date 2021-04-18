import React, { Component } from 'react'
import { Card, message, Button } from 'antd';
const info = () => {
    message.info('This is a normal message');
  };
  const success = () => {
    message.success('This is a success message');
  };
  
  const error = () => {
    message.error('This is an error message');
  };
  
  const warning = () => {
    message.warning('This is a warning message');
  };
  const indicator = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  }
export default class Messages extends Component {
    render() {
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={success}>Success</Button>
                    <Button type="primary" onClick={info}>
                       Info
                    </Button>
                    <Button type="primary" onClick={error}>Error</Button>
                    <Button type="primary" onClick={warning}>Warning</Button>
                    <Button type="primary" onClick={indicator}>loading indicator</Button>
                </Card>
            </div>
        )
    }
}
