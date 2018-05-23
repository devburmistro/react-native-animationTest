import React, { Component } from 'react';
import {View, Animated} from 'react-native';
import { styles } from './styles';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constant';

export class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blackAnimateView: new Animated.Value(-WINDOW_HEIGHT),
			borderRadius: new Animated.Value(WINDOW_WIDTH / 2),
			blackViewOpacity: new Animated.Value(0)
		}
	}

	componentDidMount() {
		const { blackAnimateView, borderRadius, blackViewOpacity } = this.state;
		
		Animated.parallel([
			Animated.timing(blackAnimateView, {
				toValue: 0,
				duration: 1500
			}),
			Animated.timing(borderRadius, {
				toValue: 0,
				duration: 1500
			}),
			Animated.timing(blackViewOpacity, {
				toValue: 1,
				duration: 1500
			})
		]).start(this.onNextAction);
	}
	
	onNextAction = () => {
		alert('end!');
	};

	render() {
		const { blackAnimateView, borderRadius, blackViewOpacity } = this.state;
		
		return (
			<View style={styles.container}>
				<View style={styles.whiteContainer}>
					<Animated.View
						style={[styles.blackAnimationContainer,
							{ top: blackAnimateView, borderBottomRightRadius: borderRadius, borderBottomLeftRadius: borderRadius }]
						}
					/>
				</View>
        <Animated.View style={[styles.blackContainer, { opacity: blackViewOpacity }]}>
        
        </Animated.View>
			</View>
		)
	}
}