import React from 'react';
import Header from './Header';
import Form from './Form';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {headerValue: 'HeaderValue'};
  }

  changeHeaderValue(text){
    this.setState({headerValue: text});
  }

  render(){
    return(
        <div className='content'>
          <Header value={this.state.headerValue}/>
          <Form changeMethod={this.changeHeaderValue.bind(this)}/>
        </div>
    )
  }
}
