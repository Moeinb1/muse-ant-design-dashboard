
import React from "react";
import Table from "../components/table/Table"
import MiniTable from './../components/table/MiniTable';


function Billing() {
  return (
    <div style={{ background: '#F5F5F5', borderRadius: 16, opacity: 0.8 }}>
      <div style={{ marginBottom: 1, paddingTop: 50, paddingRight: 50, paddingLeft: 50 }}>
        <Table />
      </div>
      <div style={{ padding: 50 }}>
        <MiniTable />
      </div>
    </div>

  );
}

export default Billing;
