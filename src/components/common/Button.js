import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		height: 40,
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		backgroundColor: '#0000',
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600'
	}
};

export { Button };
