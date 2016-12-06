import React from 'react';
import ReactDom from 'react-dom';

export default class Form extends React.Component{
  submitAction(e){
    console.log(this);
    this.props.changeMethod(ReactDom.findDOMNode(this.refs.inputValue).value.trim());
  }

  render(){
    return(
      <div id='form-area'>
        <input type='text' ref="inputValue" />
        <input type='button' value='送信' onClick={this.submitAction.bind(this)} />
      </div>
    );
  }
}
