import React from "react";

import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";

const HomePage = () => {
  const { Title } = Typography;

  const { data, isFetching } = useGetCryptosQuery();

  // global stats
  const globalStats = data?.data?.stats;

  console.log(data);
  if (isFetching) return "Loading ...";
  return (
    <>
      <Title level={1} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total crypto currencies"
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total market cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24hour volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
