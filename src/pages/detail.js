/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View,
  ToastAndroid,
  ToolbarAndroid
} from 'react-native';

import {
  getNewsDetail
} from '../actions/detail';

import NavigationBar from '../components/navigationBar';
import Loading from '../components/loadingMore';

class NewsDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      route,
      dispatch
    } = this.props;
    console.log(route.item.id)
    dispatch(getNewsDetail(route.item.id));

  }

  render() {

    const {
      detail,
      route
    } = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          title='detail'
          backFunc={()=>this.backAndroid()}
          backHidden = {false}
          backIcon = {require('../images/ic_arrow_back_white_18dp.png')}
          />

        {detail.isLoading?<Loading/>:
          <WebView
            javaScriptEnabled={true}
            automaticallyAdjustContentInsets={true}
            source={{html: detail.data.data.content}}
            style={{margin:5}}
        />}
      </View>
    );
  }

  backAndroid() {
    this.props.navigator.pop();
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  toolBar: {
    backgroundColor: '#232320',
    height: 50,
  },

});

export default NewsDetail;
