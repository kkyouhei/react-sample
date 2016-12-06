import React from 'react';

export default class Header extends React.Component{
  render(){
    return(
        <div>
          <h1> Hello am Header. {this.props.value}</h1>
        </div>
    );
  }
}
