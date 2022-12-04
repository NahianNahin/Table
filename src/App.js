
import { useEffect, useState } from 'react';
import './App.css';
import DataTable from './DataTable';

function App() {
  const [tableData, setTableData] = useState(null);
  const [tableConfig, setTableConfig] = useState(null);
  useEffect(() => {
    fetch('table-data.json')
      .then(res => res.json())
      .then(data => setTableData(data))
  }, [])
  useEffect(() => {
    fetch('table-config.json')
      .then(res => res.json())
      .then(data => setTableConfig(data))
  }, [])

  return (
    <div className="App">
      {
        tableConfig
        &&
        tableData
        &&
        <>
          <DataTable
            tableData={tableData}
            tableConfig={tableConfig}
            index={0}
            
          ></DataTable>
          <DataTable
            tableData={tableData}
            tableConfig={tableConfig}
            index={1}
            
          ></DataTable>
          <DataTable
            tableData={tableData}
            tableConfig={tableConfig}
            index={2}
           
          ></DataTable>
          <DataTable
            tableData={tableData}
            tableConfig={tableConfig}
            index={3}
            
          ></DataTable>
        </>
      }
    </div>
  );
}

export default App;
