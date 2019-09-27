import React from "react";
import { Select, Form } from "antd";

const { Option } = Select;

export default class SelectAntd extends React.Component {
  handleChange(value) {
    console.log(`${value}`);
  }
  render() {
    return (
      <div>
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 5 }}
          onSubmit={this.handleSubmit}
        >
          <Form.Item label="Gender">
            <Select
              defaultValue="0"
              //   style={{ width: 300 }}
              onChange={this.handleChange}
            >
              <Option value="1">Admin</Option>
              <Option value="2">Sales</Option>
              <Option value="0">Please choose</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
