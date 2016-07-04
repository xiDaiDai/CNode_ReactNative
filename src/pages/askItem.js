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
  View
} from 'react-native';

class PopItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
            underlayColor='white'
            onPress={() => {this.selectItem(this.props.item)}} >
        <View style={{backgroundColor:'white',flexDirection:'column'}}>
          <View style={{justifyContent:'center', flexDirection :'row',padding:10}}>
               <View style= {styles.leftContainer}>
                  <Text style = {{fontSize:15,color:'#272822'}}>{this.props.item.title}</Text>
                  <View style = {{flex:1,justifyContent:'flex-end'}} >
                    <Text >{this.props.item.create_at}</Text>
                  </View>
               </View>
               <Image
                  style = {styles.thumbnail}
                  source={{uri:this.props.item.author.avatar_url}}/>
          </View>
          <View style={{backgroundColor:'#d8d8d8',height:0.5,flexDirection: 'row'}}/>
        </View>
      </TouchableHighlight>

    );
  }


  selectItem(item) {
    // this.props.navigator.push({
    //  name: 'news',
    //  item: item,
    //  component: NewsDetailContainer,
    // });
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftContainer: {
    height: 60,
    flexDirection: 'column',
    flex: 1,
    marginRight: 5,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: 90,
    height: 60,
  },
});

export default PopItem;
