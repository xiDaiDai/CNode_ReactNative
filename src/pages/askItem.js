'use strict';

import React, {
  Component,
} from 'react'

import NewsDetailContainer from '../containers/detailContainer';
import UserContainer from '../containers/userContainer';
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
      <CommontItem
        onItemSelected = {()=>this.selectItem(item)}
        item = {item}
        onUserSelected = {()=>this.selectUser(item)}
        />

    );
  }

  selectItem(item) {
    this.props.navigator.push({
      item: item,
      component: NewsDetailContainer,
    });
  }


  selectUser(item) {
    this.props.navigator.push({
      item: item,
      component: UserContainer,
    });
  }
}

export default PopItem;
