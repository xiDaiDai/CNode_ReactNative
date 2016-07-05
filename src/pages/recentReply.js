import React, {
  Component
} from "react"
import {
  StyleSheet,
  View,
  Text,
  ListView,
} from "react-native";
import RecentItem from './recentItem';

class RecentReply extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {

  }

  render() {
    const {
      recentReplies,
    } = this.props;
    let dataSource = this.state.dataSource.cloneWithRows(recentReplies)
    return (
      <View style={styles.container}>
        <ListView ref = "listview"
          dataSource = {dataSource}
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
      <RecentItem  {...this.props} item={item}/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolBar: {
    backgroundColor: '#232320',
    height: 50,
  },
});


export default RecentReply;
