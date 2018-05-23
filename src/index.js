import React, { Component } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constant';

export class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blackAnimateView: new Animated.Value(-WINDOW_HEIGHT),
			borderRadius: new Animated.Value(WINDOW_WIDTH / 2),
		}
	}
	
	onNextAction = () => {
		alert('end!');
	};
	
	onStartAnimation = () => {
		const { blackAnimateView, borderRadius } = this.state;

		Animated.parallel([
			Animated.timing(blackAnimateView, {
				toValue: 0,
				duration: 1500
			}),
			Animated.timing(borderRadius, {
				toValue: 0,
				duration: 1500
			}),
		]).start(this.onNextAction);
	};

	render() {
		const { blackAnimateView, borderRadius } = this.state;
		
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.onStartAnimation} style={styles.startBtnContainer}>
					<Text style={styles.whiteText}>Start!</Text>
				</TouchableOpacity>
				<Animated.View
					style={[styles.blackAnimationContainer,
						{ top: blackAnimateView, borderBottomRightRadius: borderRadius, borderBottomLeftRadius: borderRadius }]
					}
				>
					<Text style={styles.whiteText}>BLACK VIEW(SECOND)</Text>
				</Animated.View>
			</View>
		)
	}
}