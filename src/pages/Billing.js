
import React from "react";
import Table from "../components/table/Table"
import MiniTable from './../components/table/MiniTable';
import { Col, Row } from 'antd';


function Billing() {
  return (
    <div style={{ borderRadius: 8, opacity: 0.8 }}>
      <Row style={{ boxShadow: ' 0px 10px 0 0 #F8F8F8' }}>
        <Col span={15}><Table /></Col>
        <Col span={1} style={{ background: '#FAFAFA', height: window.outerHeight / 2 }} ></Col>
        <Col span={8}><MiniTable /></Col>



      </Row>

    </div>
  );
}

export default Billing;
