import React from "react";

function Table(props) {
  return (
    <div>
      <h3>Detail</h3>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.sr_no}</td>
            <td>{props.item_code}</td>
            <td>{props.item_name}</td>
            <td>{props.qty}</td>
            <td>{props.rate}</td>
            <td>{props.rate * props.qty}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="total-row">
            <td colSpan="4"></td>
            <td>Total</td>
            <td colSpan="1">{props.rate * props.qty}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
