 import React, {
 	Component
 } from 'react';

 import {
 	Navigator,
 	View,
 	StatusBar,
 	StyleSheet,
 	ToastAndroid,
 	Platform,
 	BackAndroid
 } from 'react-native';

 import Splash from './pages/splash';
 let nav;
 let last = 0;
 class App extends Component {
 	constructor(props) {
 		super(props);
 	}
 	render() {
 		return (
 			<Navigator
	              style={styles.container}
	              initialRoute={{component: Splash}}
	              configureScene={() => Navigator.SceneConfigs.PushFromRight}
	              renderScene={(route,navigator)=>this.renderScene(route,navigator)}/>
 		);
 	}


 	renderScene(route, navigator) {
 		this.nav = navigator;
 		return (<route.component navigator={navigator} route={route} />);
 	}


 	componentDidMount() {
 		if (Platform.OS === 'android') {
 			BackAndroid.addEventListener('hardwareBackPress', () => this.onBackAndroid());
 		};
 	}


 	onBackAndroid() {

 		let routers = this.nav.getCurrentRoutes();
 		if (this.nav && routers.length > 1) {
 			this.nav.pop();
 			return true;
 		}

 		let current = new Date().getTime();
 		if (current - last > 2000) {
 			last = new Date().getTime();
 			ToastAndroid.show('再次点击退出', 1000);
 			return true;
 		} else {
 			return false;
 		}
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		flex: 1,
 		justifyContent: 'center',
 	},
 });

 export default App;