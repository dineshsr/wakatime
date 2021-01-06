import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "../styles/general.css";

const layout = {
	labelCol: {
		span: 8
	},
	wrapperCol: {
		span: 16
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16
	}
};

function SignUp() {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="Signup">
			<Form
				{...layout}
				name="horizontal"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<h2>Signup</h2>
				<Form.Item
					label="Full Name"
					name="fullname"
					rules={[
						{
							required: false,
							message: "Please enter your Full Name!"
						}
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Email ID"
					name="emailid"
					rules={[
						{
							required: true,
							message: "Please enter your Email ID!"
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please enter your password!"
						}
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					label="Confirm Password"
					name="cpassword"
					rules={[
						{
							required: true,
							message: "Please enter your confirm password!"
						}
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default SignUp;
