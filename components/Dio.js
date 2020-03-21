import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native'

const Dio = () => {

	return (
		<View style={styles.screen}>
			<Image style={styles.img} source={require('../assets/kawai.jpg')} />
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		height: Dimensions.get('window').height - 10,
		width: Dimensions.get('window').width - 10,
	},
	close: {
		position: 'absolute',
		height: 50,
		width: 100,
		borderRadius: 10,
		backgroundColor: 'white',
		bottom: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	txt: {
		fontSize: 22,
		color: 'blue',
	},
})

export default Dio
