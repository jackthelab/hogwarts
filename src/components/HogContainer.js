import React, { Component } from "react";
import Hogs from "../porkers_data";
import HogCard from './HogCard'
import OrganizeButton from './OrganizeButton'
import HogDetails from './HogDetails'

export default class HogContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hogs: Hogs,
      selectedHog: null 
    }

  }

    allHogs = () => {
      this.setState({
        hogs: Hogs
      })
    }

    greasedHogs = () => {
      const greasedHogs = Hogs.filter(hog => hog.greased === true)
      this.setState({
        hogs: greasedHogs
      })
    }

    hogsByWeight = () => {
      const newHogs = Hogs.sort((a, b) => a.weight - b.weight)
      this.setState({
        hogs: newHogs
      })
    }

    hogsByName = () => {
      const otherHogs = Hogs.sort((a, b) => a.name > b.name ? 1 : -1)
      this.setState({
        hogs: otherHogs
      })
    }

    selectingHog = (hog) => {
      this.setState({
        selectedHog: hog
      })
    }
    

  render() {
    return (
      <div>
        <div>
          <OrganizeButton name="All Hogs" clickAction={this.allHogs} />
          <OrganizeButton name="Greased Pigs Only" clickAction={this.greasedHogs}/>
          <OrganizeButton name="Sort By Weight" clickAction={this.hogsByWeight}/>
          <OrganizeButton name="Sort By Name"clickAction={this.hogsByName}/>
        </div>
        <div>
        {this.state.selectedHog ? <HogDetails selectedHog={this.state.selectedHog}/> : null }        </div>
        <div>{this.state.hogs.map(hog => <HogCard hog={hog} clickingAction={ () => {this.selectingHog(hog)} }/>)}</div>
      </div>
    );
  }
}

