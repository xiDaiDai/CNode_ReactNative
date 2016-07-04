import React, {
	Component,
	PropTypes
} from 'react';

import {
	Text,
	View,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
const STATUS_BAR_HEIGHT = 20;
const NAV_BAR_HEIGHT = 44;

export default class NavigationBar extends Component {

	static defaultProps = {
		title: 'title',
		backFunc() {},
		actionIcon: false,
		actionName: 'action',
		actionFunc() {},
		backHidden: false,
		backIcon: true,
		backName: 'back',
		barOpacity: 1,
	}
	static propTypes = {
		title: PropTypes.string,
		backFunc: PropTypes.func,
		actionIcon: PropTypes.bool,
		actionName: PropTypes.string,
		actionFunc: PropTypes.func,
		backHidden: PropTypes.bool,
		backIcon: PropTypes.bool,
		backName: PropTypes.string,
		barOpacity: PropTypes.number,
	}

	render() {
			return (
					<View style = {styles.navBar}>
			{!this.props.backHidden ? <TouchableOpacity style={styles.backWrapper}
              			onPress={()=>this.props.backFunc}>
              {
				this.props.backIcon
                ? <View style={styles.icon} />
                : <Text style={styles.actionName}>{this.props.backName}</Text>
              }
              </TouchableOpacity> : null
			}

			<Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>

			{
			this.props.actionName ? <TouchableOpacity style={styles.actionBtn} onPress={()=>this.props.actionFunc}>
              <Text style={styles.actionName}>{this.props.actionName}</Text>
              </TouchableOpacity> : null
			}

			{
				this.props.actionIcon ? <TouchableOpacity style={styles.actionIcon} onPress={()=>this.props.actionFunc}>
	          <Image source={require()}/></TouchableOpacity> : null
			} < /View>)
		}
	}


	const styles = StyleSheet.create({
		navBar: {
			justifyContent: 'center',
			backgroundColor: '#333',
			height: NAV_BAR_HEIGHT,
			opacity: 1
		},

		backWrapper: {
			height: 20,
			width: 70,
			justifyContent: 'center',
			position: 'absolute',
			left: 12
		},

		icon: {
			width: 14,
			height: 14,
			marginLeft: 2.5,
			borderLeftWidth: 2,
			borderBottomWidth: 2,
		},

		title: {
			marginLeft: 90,
			marginRight: 90,
			fontSize: 18,
			textAlign: 'center',
			alignSelf: 'center'
		},

		actionBtn: {
			height: 20,
			flex: 1,
			position: 'absolute',
			right: 12
		},

		actionIcon: {
			height: 35,
			width: 35,
			position: 'absolute',
			right: 3
		},

		backBtn: {
			position: 'absolute',
			left: 12
		},

		actionName: {
			fontSize: 18
		}
	});