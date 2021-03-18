import React, { Component } from "react";
import Hogs from "../porkers_data";
import HogCard from './HogCard'

export default class HogContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hogs: Hogs 
    }

    // console.log(this.state.hogs)

  }

  render() {
    return (
      <div>
        {this.state.hogs.map(hog => <HogCard hog={hog}/>)}
      </div>
    );
  }
}

