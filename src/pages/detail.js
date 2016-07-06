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
import Comments from './comments';

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
      route,
      dispatch
    } = this.props;
    console.log(detail);

    return (
      <View style={styles.container}>
        <NavigationBar
          title={route.item.title}
          backFunc={()=>this.backAndroid()}
          backHidden = {false}
          backIcon = {require('../images/ic_arrow_back_white_18dp.png')}
          actionHidden={false}
          actionIcon={require('../images/ic_comment_white_36dp.png')}
          actionFunc={()=>this.showComments(detail.data.data.replies,dispatch)}
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

  showComments(replies, dispatch) {
    this.props.navigator.push({
      replies: replies,
      dispatch: dispatch,
      component: Comments,
    });
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
