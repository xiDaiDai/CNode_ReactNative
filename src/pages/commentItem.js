'use strict';

import React, {
  Component,
  PropTypes
} from 'react'
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  ToastAndroid,
  View,
  WebView,
  NativeModules
} from 'react-native';
import * as device from '../constants/device';
import Markdown from 'react-markdown-native';
import HtmlRender from '../components/htmlModule';

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      textString: '',
    }
  }

  componentDidMount() {
    const {
      item
    } = this.props;

    HtmlRender.renderHtml(item.content).then((textString) => {
      this.setState({
        isLoading: false,
        textString: textString
      });
    }, (err) => {

    });

  }

  render() {
    const {
      item
    } = this.props;

    if (this.state.isLoading) {
      return <View/>
    }

    return (
      <View style={{backgroundColor:'white',flexDirection:'column'}}>
          <View style={{justifyContent:'center',alignItems:'center', flexDirection :'row',padding:10}}>
            <TouchableHighlight
              underlayColor='white'
               >
              <Image
                 style = {styles.thumbnail}
                 source={{uri:item.author.avatar_url}}/>
            </TouchableHighlight>

            <View style= {styles.leftContainer}>
               <View style = {{flex:1,justifyContent:'flex-start',flexDirection:'column'}} >
                  <Text style={{marginLeft:5,flex:1,color:'#444'}}>{item.author.loginname}</Text>
                  <Text style={{marginLeft:5,flex:1}}>{item.create_at.substring(0,10)}</Text>
               </View>
            </View>
          </View>
          <Text style = {{marginLeft:10,marginRight:10,color:'#444'}}>{this.state.textString}</Text>
          <View style={{backgroundColor:'#d8d8d8',height:1,flexDirection: 'row'}}/>
        </View>
    );


  }


}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
});

export default CommentItem;
