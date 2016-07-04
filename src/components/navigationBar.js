import React, {
  Component,
  PropTypes
} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid
} from 'react-native';
const NAV_BAR_HEIGHT = 50;

export default class NavigationBar extends Component {

  static defaultProps = {
    title: 'title',
    backHidden: true,
    actionHidden: true,

  }
  static propTypes = {
    title: PropTypes.string,
    backFunc: PropTypes.func,
    actionFunc: PropTypes.func,
    backHidden: PropTypes.bool,
    actionHidden: PropTypes.bool,
    backIcon: PropTypes.number,
    actionIcon: PropTypes.number,
  }

  render() {
    return (
      <View style = {styles.navBar}>
        {this.props.backHidden?<View style={styles.buttonWrapper}/>:
        <TouchableOpacity style={styles.buttonWrapper} onPress={this.props.backFunc}>
          <Image style={styles.icon} source={this.props.backIcon}></Image>
        </TouchableOpacity>}
        <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
    {
      this.props.actionHidden ? <View style={styles.buttonWrapper}/> : <TouchableOpacity style={styles.buttonWrapper} onPress={this.props.actionFunc}>
          <Image style={styles.icon} source={this.props.actionIcon}></Image>
        </TouchableOpacity>}
      </View>)
  }
}

const styles = StyleSheet.create({
  navBar: {
    justifyContent: 'center',
    backgroundColor: '#444',
    height: NAV_BAR_HEIGHT,
    opacity: 1,
    flexDirection: 'row'
  },

  buttonWrapper: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    width: 25,
    height: 25,
    marginLeft: 2.5,
  },

  title: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1
  },


});
