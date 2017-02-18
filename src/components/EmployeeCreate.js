import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { Card, CardSection, Button } from './common';
import { employeeCreate, employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}
	
	render() {
		const { name, phone, shift } = this.props;
		console.log(name, phone, shift);
		
		return (
			<ScrollView>
				<Card>
					<EmployeeForm {...this.props} />	

					<CardSection>
						<Button
							onPress={this.onButtonPress.bind(this)}
						>
							Create
						</Button>	
					</CardSection>
				</Card>	
			</ScrollView>	
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps,
{
	employeeCreate,
	employeeUpdate
})(EmployeeCreate);
