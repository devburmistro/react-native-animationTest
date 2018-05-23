import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constant';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	whiteContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'white'
	},
	blackContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'black',
		opacity: 0
	},
	blackAnimationContainer: {
		top: -WINDOW_HEIGHT,
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		backgroundColor: 'black',
		borderBottomRightRadius: WINDOW_WIDTH / 2,
		borderBottomLeftRadius: WINDOW_WIDTH / 2
	}
});
