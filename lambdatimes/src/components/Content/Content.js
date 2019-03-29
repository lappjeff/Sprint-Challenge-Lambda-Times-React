import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
    console.log(this.state.selected)
    return this.state.selected
    // this function should take in the tab and update the state with the new tab.
  };

  //filters data based off of the changeSelected function changing the selected state
  filterCards = () => {

    const filteredCards = this.state.cards.filter(card => {
      return (this.state.selected === 'all' ? this.state.cards : card.tab === this.state.selected)
    })

    return filteredCards



  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.filterCards}
          selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
