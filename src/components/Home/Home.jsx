import React from 'react'
import '../Home/Home.css'
import Form from '../Form/Form';
import Tables from '../Table/Table';
import { useState } from "react";
const Home = () => {
  const [data, setData] = useState([])
  const [selectedRowData, setSelectedRowData] = useState([])
  console.log(selectedRowData)
  return (
    <>
      <div className='m-4 flex justify-evenly'>
        <Form setData={setData} data={data} selectedRowData={selectedRowData} />
        {
          data.length !== 0 && (
            < Tables data={data} setData={setData} setSelectedRowData={setSelectedRowData} />
          )
        }
      </div>
    </>
  )
}

export default Home




