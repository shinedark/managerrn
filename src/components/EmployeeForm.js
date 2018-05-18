import React, { Component } from 'react';
import { connect } from  'react-redux';
import { View , Text , ScrollView, TextInput } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Input} from './common';

class EmployeeForm extends Component {
	render (){
		return (
			<View>
				<CardSection>
					<Input 
						label="Club"
						placeholder="6 iron"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
					/>
				</CardSection>

				<CardSection>
					<Input
						label="Distance"
						placeholder="150 To 160"
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
					/>
				</CardSection>

				<CardSection style={{ flexDirection:'column'}}>
					<ScrollView>
						<TextInput
							style={{ flexDirection:'column', flex: 1 , height: 90, fontSize: 16}}
							multiline = {true}
							numberOfLines = {6}
							label="Notes"
							placeholder="Ball closer to the left foot"
							value={this.props.shift}
							onChangeText={value => this.props.employeeUpdate({prop: 'shift', value})}
						/>
					</ScrollView>
					
				</CardSection>
			</View>
		);

	}
}



const mapStateToProps = ( state ) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift};
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);

