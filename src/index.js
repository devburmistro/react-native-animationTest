import React, { Component } from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constant';

export class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			borderRadius: new Animated.Value(WINDOW_HEIGHT / 2),
			radius: new Animated.Value(WINDOW_HEIGHT),
			left: new Animated.Value((WINDOW_WIDTH - WINDOW_HEIGHT) / 2)
		}
	}
	
	onNextAction = () => {
		// alert('end!');
	};
	
	onStartAnimation = () => {
		const { blackAnimateView, borderRadius, radius, left } = this.state;

		Animated.parallel([
			Animated.timing(borderRadius, {
				toValue: (WINDOW_HEIGHT * 2.25) / 2,
				duration: 1000
			}),
			Animated.timing(left, {
				toValue: (WINDOW_WIDTH - WINDOW_HEIGHT * 2.25) / 2,
				duration: 1000
			}),
			Animated.timing(radius, {
				toValue: WINDOW_HEIGHT * 2.25,
				duration: 1000
			}),
		]).start(this.onNextAction);
	};

	render() {
		const { blackAnimateView, borderRadius, radius, left } = this.state;
		
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.onStartAnimation} style={styles.startBtnContainer}>
					<Text style={styles.whiteText}>Start!</Text>
				</TouchableOpacity>
				<Animated.View
					style={[styles.blackAnimationContainer, {
						height: radius,
						width: radius,
						borderBottomRightRadius: borderRadius,
						borderBottomLeftRadius: borderRadius,
						left: left
						}]
					}
				>
					<Text style={styles.whiteText}>BLACK VIEW(SECOND)</Text>
				</Animated.View>
			</View>
		)
	}
}