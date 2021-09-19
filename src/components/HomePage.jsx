import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";

const HomePage = () => {
  const { Title } = Typography;

  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);
  return (
    <>
      <Title level={1} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="Total crypto currencies" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total exchanges" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total market cap" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total 24hour volume" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Markets" value="5" />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
