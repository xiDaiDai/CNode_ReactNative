import {
  connect
} from 'react-redux';
import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import PopList from '../pages/askList';

class AskContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <PopList {...this.props} ></PopList>
            </View>
    );
  }
}

function mapStateToProps(state) {
  const {
    ask
  } = state
  return {
    ask
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps)(AskContainer);
