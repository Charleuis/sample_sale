import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "./Table";

function App() {
  const [tableData, setTableData] = useState([]);
  const [newRow, setNewRow] = useState({
    sr_no: "",
    item_code: "",
    item_name: "",
    qty: "",
    rate: "",
  });

  useEffect(() => {
    // Fetch data on component mount
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://5.189.180.8:8010/item");
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClearTable = () => {
    setTableData([]);
  };

  const handleInsertRow = () => {
    setTableData((prevData) => [...prevData, newRow]);
    // Clear the input values for the next row
    setNewRow({
      sr_no: "",
      item_code: "",
      item_name: "",
      qty: "",
      rate: "",
    });
  };

  const handlePushDataToApi = async () => {
    try {
      const response = await fetch("http://5.189.180.8:8010/header/multiple", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tableData),
      });
      // Handle the response as needed
    } catch (error) {
      console.error("Error pushing data to API:", error);
    }
  };

  const handlePrint = () => {
    // Implement printing logic as needed
    console.log("Printing...");
  };

  return (
    <div>
      <Header />
      <Table
        sr_no={tableData.sr_no}
        item_code={tableData.item_code}
        item_name={tableData.item_name}
        qty={tableData.qty}
        rate={tableData.rate}
      />
      <button onClick={handleClearTable}>New</button>
      <button onClick={handleInsertRow}>Insert</button>
      <button onClick={handlePushDataToApi}>Save</button>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default App;
