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
  ToolbarAndroid,
  Image,
  InteractionManager
} from 'react-native';

import {
  getNewsDetail,
  setUserdefault
} from '../actions/user';

import NavigationBar from '../components/navigationBar';
import Loading from '../components/loadingMore';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import RecentTopic from './recentTopic';
import RecentReply from './recentReply';


class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      route,
      dispatch
    } = this.props;

    InteractionManager.runAfterInteractions(() => {
      dispatch(getNewsDetail(route.item.author.loginname));
    });
  }

  render() {

    const {
      user,
      route,
      dispatch
    } = this.props;

    return (
      <View style={styles.container}>
        <NavigationBar
          title=''
          backFunc={()=>this.backAndroid(dispatch)}
          backHidden = {false}
          backIcon = {require('../images/ic_arrow_back_white_18dp.png')}
          />
        {user.isLoading?<Loading />:
        <View style={{flex: 1,}}>
          <View style={styles.headContainer}>
            <Image style={{width:90,height:90,borderRadius:45}} source={{uri:user.data.data.avatar_url}}></Image>
            <Text style={{fontSize:17,color:'white',paddingTop:10,textAlign:'center'}}>{user.data.data.loginname}</Text>
            <View style={{flexDirection:'row',flex:1,padding:10}}>
              <Text style={{flex:1,textAlign:'left',marginLeft:20,color:'white'}}>注册时间：{user.data.data.create_at.substring(0,10)}</Text>
              <Text style={{flex:1,textAlign:'right',marginRight:20,color:'white'}}>积分：{user.data.data.score}</Text>
            </View>
          </View>
          <ScrollableTabView
            tabBarBackgroundColor='#444444'
            tabBarUnderlineColor='transparent'
            tabBarActiveTextColor='#80BD01'
            tabBarInactiveTextColor='#fff'
            scrollWithoutAnimation={true}
            tabBarPosition='top'>
              <RecentTopic tabLabel="最近发布"  navigator={this.props.navigator} recentTopics={user.data.data.recent_topics}/>
              <RecentReply tabLabel="最新回复" navigator={this.props.navigator}  recentReplies={user.data.data.recent_replies}/>
          </ScrollableTabView>
        </View>
        }
      </View>
    );
  }

  backAndroid(dispatch) {
    this.props.navigator.pop();
    InteractionManager.runAfterInteractions(() => {
      dispatch(setUserdefault());
    });

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headContainer: {
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

export default UserPage;
