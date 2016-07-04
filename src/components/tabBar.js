import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image
} from 'react-native';

const FacebookTabBar = React.createClass({
	tabIcons: ['精华', '问答', '分享', '招聘'],
	iconNames: ['n.png', 'ask.png', 'd.png', 'rec.png'],

	propTypes: {
		goToPage: React.PropTypes.func,
		activeTab: React.PropTypes.number,
		tabs: React.PropTypes.array,
	},

	render() {
		return (<View style={styles.tabs}>
		      	<TouchableOpacity  activeOpacity ={1}  onPress={() => this.props.goToPage(0)} style={styles.tab}>
		            <Image style={{width:25,height:25}} source={require('../images/ask.png')}></Image>
		        	<Text style={{color:this.props.activeTab === 0 ? '#80BD01' : '#fff',fontSize:12}}>{this.tabIcons[0]}</Text>
		        </TouchableOpacity>
		        <TouchableOpacity  activeOpacity ={1} onPress={() => this.props.goToPage(1)} style={styles.tab}>
		            <Image style={{width:25,height:25}} source={require('../images/esse.png')}></Image>
		        	<Text style={{color:this.props.activeTab === 1 ? '#80BD01' : '#fff',fontSize:12}}>{this.tabIcons[1]}</Text>
		        </TouchableOpacity>
		        <TouchableOpacity  activeOpacity ={1}  onPress={() => this.props.goToPage(2)} style={styles.tab}>
		            <Image style={{width:25,height:25}} source={require('../images/share.png')}></Image>
		        	<Text style={{color:this.props.activeTab === 2 ? '#80BD01' : '#fff',fontSize:12}}>{this.tabIcons[2]}</Text>
		        </TouchableOpacity>
		        <TouchableOpacity   activeOpacity ={1} onPress={() => this.props.goToPage(3)} style={styles.tab}>
		            <Image style={{width:25,height:25}} source={require('../images/rec.png')}></Image>
		        	<Text style={{color:this.props.activeTab === 3 ? '#80BD01' : '#fff',fontSize:12}}>{this.tabIcons[3]}</Text>
		        </TouchableOpacity>
    		</View>)
	}
});

const styles = StyleSheet.create({
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 5,

	},
	tabs: {
		height: 50,
		flexDirection: 'row',
		paddingTop: 5,
		backgroundColor: '#444'

	},
});

export default FacebookTabBar;
