import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      count: 0,
      currentImage: '',

    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData,
      currentImage: carouselData[0],

    })
  }

  leftClick = () => {
    if (this.state.count === 0 ) {
      this.setState({
        count: this.state.data.length - 1
      })
    }

    this.setState((prevState, { count }) => ({
      currentImage: this.state.data[prevState.count - 1],
      count: prevState.count - 1
    }))
  }

  rightClick = () => {
    if (this.state.count === this.state.data.length - 1) {
      this.setState({
        count: 0
      })
    }

    this.setState((prevState, { count }) => ({
      currentImage: this.state.data[prevState.count + 1],
      count: prevState.count + 1
    }))
  }

  selectedImage = () => {
    return <img src={`${this.state.currentImage}`} style={{display: 'block'}} />
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className='image-div'>
          {this.selectedImage()}
        </div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
