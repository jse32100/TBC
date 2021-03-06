import React, { Component } from 'react';

import { Button, Container, Row } from 'react-bootstrap';
import CustomInput from './CustomInput';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

class FundingGoalAmount extends Component {
	state = {
		goal: this.props.value,
	};

	componentDidMount() {
		this.setState({
			goal: this.props.value,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value)
			this.setState({
				goal: this.props.value,
			});
	}

	handleChange = goal => {
		this.setState({
			goal: goal,
		});
	};

	handleSave = () => this.props.handleProject('fundingGoalAmount', this.state.goal);

	render() {
		return (
			<Container>
				<Row>
					<CustomInput
						header=''
						width='25%'
						desc={`이번 프로젝트를 통해 모으고자 하는 펀딩 목표 금액이 얼마인가요? (최소 금액은 ${Number(this.props.minGoal).toLocaleString()}원 입니다.)`}
						title='목표 금액'
						placeholder='0'
						handleText={this.handleChange}
						value={this.state.goal}
					/>
				</Row>
				<Row style={{ justifyContent: 'flex-end' }}>
					<Button variant='secondary mr-1' size='sm' onClick={this.props.handleClose}>
						<CloseIcon fontSize='small' onClick={this.props.handleClose}/>취소하기</Button>
					<Button variant='primary' size='sm' disabled={this.state.goal < this.props.minGoal} onClick={this.handleSave}>
						<CheckIcon fontSize='small' />저장하기</Button>
				</Row>
			</Container>
		);
	}
}

FundingGoalAmount.defaultProps = {
	value: '',
};

export default FundingGoalAmount;
