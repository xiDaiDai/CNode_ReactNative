import React, {
	Component
} from 'react';
import {
	Text,
	StyleSheet,
	Dimensions,
	Image,
	View,
	Animated,
	StatusBar
} from 'react-native'

import Home from './home';

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0)
		};
	}

	componentDidMount() {
		const {
			navigator
		} = this.props;

		Animated.timing(
			this.state.fadeAnim, {
				toValue: 1,
				duration: 2500,
			}
		).start(() => {
			navigator.resetTo({
				component: Home,
			});
		});
	}

	render() {
		return (<Animated.View style = {[styles.container, {opacity: this.state.fadeAnim}]}>
					<StatusBar
			           backgroundColor="#444444"
			           barStyle="light-content"
			           hidden ={true}/>
					<View style={styles.content}>
						<Image style = {styles.centerImage} source={require('../images/cnodejs.png')}></Image>
					 	<Text style={styles.centerText}>CNode</Text>
					</View>
				</Animated.View>);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#444444'
	},



	centerText: {
		fontSize: 50,
		color: '#80BD01',
		fontFamily: 'Cochin',
		fontWeight: 'bold',
	},

	centerImage: {
		width: 90,
		height: 30
	}

});

export default Splash;