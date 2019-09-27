import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormAntd2 from "./components/FormAntd";
import ButtonAntd from "./components/ButtonAntd";
import SelectAntd from "./components/SelectAntd";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;

export default class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>
                  <Link to="/button">Button</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="form" />
                <span>
                  <Link to="/form">Form Antd</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="select" />
                <span>
                  <Link to="/select">Select Antd</Link>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              CRM / Leads
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route exact path="/button" component={ButtonAntd} />
              <Route path="/form" component={FormAntd2} />
              <Route path="/select" component={SelectAntd} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
