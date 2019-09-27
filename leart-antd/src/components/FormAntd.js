<<<<<<< HEAD
import React from "react";
import { Form, Select, Input, Button } from "antd";

const { Option } = Select;

class FormAntd extends React.Component {
=======
import React from 'react';
import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;

export default class FormAntd extends React.Component {
>>>>>>> 87925dba331b3b9e7bda37f0218739bf0b7018f4
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
<<<<<<< HEAD
        console.log("Received values of form: ", values);
=======
        console.log('Received values of form: ', values);
>>>>>>> 87925dba331b3b9e7bda37f0218739bf0b7018f4
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
<<<<<<< HEAD
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
=======
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
>>>>>>> 87925dba331b3b9e7bda37f0218739bf0b7018f4
    });
  };

  render() {
<<<<<<< HEAD
    // console.log(this.props.form);
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="Note">
          {getFieldDecorator("note", {
            rules: [{ required: true, message: "Please input your note!" }]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "Please select your gender!" }]
=======
    const { getFieldDecorator } = this.props.form;
    return (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="Note">
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
>>>>>>> 87925dba331b3b9e7bda37f0218739bf0b7018f4
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
<<<<<<< HEAD
            </Select>
=======
            </Select>,
>>>>>>> 87925dba331b3b9e7bda37f0218739bf0b7018f4
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

<<<<<<< HEAD
const FormAntd2 = Form.create({ name: "Form-antd" })(FormAntd);
export default FormAntd2;
=======
const WrappedApp = Form.create({ name: 'coordinated' })(FormAntd);

// ReactDOM.render(<WrappedApp />, mountNode);
>>>>>>> 87925dba331b3b9e7bda37f0218739bf0b7018f4
