import React from 'react'

export default class OrganizeButton extends React.Component {

    // constructor(props){
    //     super(props)

    //     // console.log(props)
    // }

    render() {
        return (
          <button onClick={this.props.clickAction}>{this.props.name}</button>
        )
    }

}