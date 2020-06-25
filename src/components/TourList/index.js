import React, { Component } from 'react'
import "./TourList.css"
import Tour from "../Tour"
import { tourData } from "../../tourData"
export default class TourList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tours: tourData
    }
  }
  removeTour = (id) => {
    const { tours } = this.state;
    const filteredTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: filteredTours
    })
  }
  render() {
    return (
      <section className="tourList" >
        {this.state.tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />)}
      </section>
    )
  }
}
