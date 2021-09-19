import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

import millify from "millify";

const CryptoCurrencies = ({ simplified }) => {
  // count
  const count = simplified ? 20 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState([]);
  // search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  console.log(cryptos);
  if (isFetching) return "Loading....";

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col key={crypto.id} className="crypto-card" lg={6} sm={12} xs={24}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} />}
                hoverable
              >
                <p>Symbol: {crypto.symbol}</p>
                <p>Price: $ {millify(crypto.price)}</p>
                <p>Market Cap: $ {millify(crypto.marketCap)}</p>
                <p>DailyChange: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
