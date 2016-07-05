import React, {
  Component
} from "react"
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
} from '../actions/job';

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
      job
    } = this.props;
    let dataSource = this.state.dataSource.cloneWithRows(job.news)
    return (
      <View style={styles.container}>
        <NavigationBar
          title='招聘'
          />
        <ListView ref = "listview"
          dataSource = {dataSource}
          renderRow = {(item) => this.renderRow(item)}
          onEndReached = {()=>this.onEndReach(job.isLoading)}
          renderFooter = {() => this.renderFooter(job.isLoadingMore)}
          enableEmptySections = {true}
          automaticallyAdjustContentInsets = {false}
          keyboardDismissMode = "on-drag"
          onEndReachedThreshold={30}
          keyboardShouldPersistTaps = {true}
          refreshControl = {
            <RefreshControl
                    refreshing={job.isLoading}
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
