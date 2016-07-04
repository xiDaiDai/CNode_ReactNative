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
import PopItem from './popItem';
import {
  getNews,
  getNextPageNews
} from '../actions/pop';

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
    console.log('getnews function');
    const {
      dispatch,
    } = this.props;
    dispatch(getNews());
  }

  render() {
    const {
      pop
    } = this.props;
    let dataSource = this.state.dataSource.cloneWithRows(pop.news)
    return (
      <View style={styles.container}>
        <NavigationBar
          title='精华'
          />
        <ListView ref = "listview"
          dataSource = {dataSource}
          renderRow = {(item) => this.renderRow(item)}
          onEndReached = {()=>this.onEndReach(pop.isLoading)}
          renderFooter = {() => this.renderFooter(pop.isLoadingMore)}
          enableEmptySections = {true}
          automaticallyAdjustContentInsets = {false}
          keyboardDismissMode = "on-drag"
          onEndReachedThreshold={30}
          keyboardShouldPersistTaps = {true}
          refreshControl = {
            <RefreshControl
                    refreshing={pop.isLoading}
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
    console.log('onendReached function');
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
