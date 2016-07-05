'use strict';

import React, {
  Component,
} from 'react'

import NewsDetailContainer from '../containers/detailContainer';
import CommontItem from '../components/commonItem';

class PopItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      item
    } = this.props;

    return (
      <CommontItem onItemSelected = {()=>this.selectItem(item)} item = {item} />

    );
  }

  selectItem(item) {
    this.props.navigator.push({
      item: item,
      component: NewsDetailContainer,
    });
  }
}

export default PopItem;
