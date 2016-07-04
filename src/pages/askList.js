import React, {
  Component
} from "react"
import {
  connect
} from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Platform,
  ProgressBarAndroid,
  ToastAndroid,
  RefreshControl,
  ToolbarAndroid
} from "react-native";
import PopItem from './askItem';
import {
  getNews,
  getNextPageNews
} from '../actions/ask';

import LoadingMore from '../components/loadingMore';
import NavigationBar from '../components/navigationBar';

class NewsList extends Component {

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
      dispatch,
    } = this.props;
    dispatch(getNews());
  }

  render() {
    const {
      ask
    } = this.props;
    let dataSource = this.state.dataSource.cloneWithRows(ask.news)
    return (
      <View style={styles.container}>
        <NavigationBar
          title='问答'
          />
        <ListView ref = "listview"
          dataSource = {dataSource}
          renderRow = {(item) => this.renderRow(item)}
          onEndReached = {()=>this.onEndReach(ask.isLoading)}
          renderFooter = {() => this.renderFooter(ask.isLoadingMore)}
          enableEmptySections = {true}
          automaticallyAdjustContentInsets = {false}
          keyboardDismissMode = "on-drag"
          onEndReachedThreshold={30}
          keyboardShouldPersistTaps = {true}
          refreshControl = {
            <RefreshControl
                    refreshing={ask.isLoading}
                    onRefresh={()=>this.onRefresh()}
                    colors={['#272822']}/>
              }
            />
        </View>);
  }

  renderRow(item) {
    return (
      <PopItem  {...this.props} item={item}/>
    );
  }

  renderFooter(isLoadingMore) {

    return (isLoadingMore ? <LoadingMore /> : null);
  }

  onEndReach(isLoading) {
    if (isLoading) return;
    const {
      dispatch
    } = this.props;
    dispatch(getNextPageNews());
  }

  onRefresh() {
    const {
      dispatch
    } = this.props;

    dispatch(getNews());
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


export default NewsList;
