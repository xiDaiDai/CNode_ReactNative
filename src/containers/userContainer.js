/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  connect
} from 'react-redux'
import React, {
  Component,
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

import UserPage from '../pages/userPage';

class UserContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <UserPage {...this.props} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {
    user
  } = state
  return {
    user
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

});

export default connect(mapStateToProps)(UserContainer);
