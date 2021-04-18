import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html'
export default class RichText extends Component {
  state = {
    showRichText:false,
    editorState:''
  }
  handleClearContent = ()=>{
    this.setState({
      editorState:'',
    });
  }
  handleGetext = () =>{
    this.setState({
      showRichText:true
    });
  }
  onContentStateChange = (contentState)=>{
    this.setState({
      contentState,
    });
  }
  onEditorStateChange= (editorState) => {
    this.setState({
      editorState,
    });
  };
  render() {
    const {editorState} = this.state;
    return (
      <div>
          <Card>
            <Button onClick={this.handleClearContent}>清空内容</Button>
            <Button onClick={this.handleGetext} style={{marginLeft:10}}>获取HTML文本</Button>
          </Card>
          <Card title="富文本编辑器">
            <Editor
              editorState={editorState}
              onContentStateChange={this.onContentStateChange}
              onEditorStateChange={this.onEditorStateChange}
            />
          </Card>
          <Modal
            title="富文本"
            visible={this.state.showRichText}
            onCancel={()=>{
              this.setState({
                
                  showRichText:false
              })
            }}
            footer = {null}
          >
            {draftjs(this.state.contentState)}
          </Modal>
      </div>
    )
  } 
}