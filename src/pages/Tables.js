
import React from "react";
import Table from "../components/table/Table"
import MiniTable from './../components/table/MiniTable';


function Tables() {
  return (
    <div style={{ borderRadius: 8, opacity: 0.8 }}>
      <div style={{ boxShadow: ' 0px 10px 0 0 #F8F8F8' }}>
        <Table />
      </div>
      <div style={{ paddingTop: 30, boxShadow: ' 0px 0px 0px 5px #F8F8F8' }}>
        <MiniTable />
      </div>
    </div>

  );
}

export default Tables;
