import React, {
  Component
} from "react"
import {
  StyleSheet,
  View,
  Text,
  ListView,
  InteractionManager
} from "react-native";
import Comment from './commentItem';
import NavigationBar from '../components/navigationBar';


class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    const {
      route,
    } = this.props;

    let dataSource = this.state.dataSource.cloneWithRows(route.replies)
    this.setState({
      dataSource: dataSource
    });

  }

  render() {

    return (
      <View style={styles.container}>
        <NavigationBar
            title='评论'
            backFunc={()=>this.backAndroid()}
            backHidden = {false}
            backIcon = {require('../images/ic_arrow_back_white_18dp.png')}
            />
        <ListView ref = "listview"
            dataSource = {this.state.dataSource}
            renderRow = {(item) => this.renderRow(item)}
            enableEmptySections = {true}
            automaticallyAdjustContentInsets = {false}
            keyboardDismissMode = "on-drag"
            keyboardShouldPersistTaps = {true}
              />
      </View>);
  }

  renderRow(item) {
    return (
      <Comment  {...this.props} item={item}/>
    );
  }


  backAndroid(dispatch) {
    this.props.navigator.pop();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});


export default Comments;
