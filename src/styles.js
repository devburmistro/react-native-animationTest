import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constant';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	blackAnimationContainer: {
		position: 'absolute',
		top: -WINDOW_HEIGHT,
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		backgroundColor: 'black',
		borderBottomRightRadius: WINDOW_WIDTH / 2,
		borderBottomLeftRadius: WINDOW_WIDTH / 2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	startBtnContainer: {
		marginTop: WINDOW_HEIGHT / 2 - 20,
		backgroundColor: 'black',
		marginLeft: WINDOW_WIDTH / 2 - 50,
		height: 40,
		width: 100,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	whiteText: {
		color: 'white',
		fontSize: 20
	}
});
