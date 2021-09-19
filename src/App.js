import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  CryptoCurrencies,
  News,
  HomePage,
  CryptoDetails,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/exchanges" exact component={Exchanges} />
              <Route
                path="/cryptocurrencies"
                exact
                component={CryptoCurrencies}
              />
              <Route path="/crypto/:coinId" exact component={CryptoDetails} />
              <Route path="/news" exact component={News} />
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CRYP7O
            <br />
            {new Date().getFullYear()}
            <br />
            &copy; All Rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
