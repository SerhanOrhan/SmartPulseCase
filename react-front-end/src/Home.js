import React from 'react'
import axios from 'axios'
import { Table, DatePicker, Space,Label } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
    const [data, setData] = useState([]);

    const getReport = () => {
        axios.get('http://localhost:8090/transparency/service/market/intra-day-trade-history?endDate=2022-01-26&startDate=2022-01-26')
            .then(response => setData(response))
    }

    useEffect(() => {
       console.log(data);
    }, [data])

    useEffect(() => {
        getReport();
    }, [])


    let columns = [
        {
            title: 'Conract',
            dataIndex:'conract'
        },
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity'
        },
        {
            title: 'Tarih',
            dataIndex:'date'
        }
    ]
    function onChange(date, dateString) {
        console.log(date, dateString);
      }

    return (
        <div>
            <Space direction="horzintal">
                <div>Başlangıc Tarihi</div>
                <DatePicker onChange={onChange}/>
                <div>Bitiş Tarihi</div>
                <DatePicker onChange={onChange}/>
            </Space>,
            <Table dataSource={data.data} columns={columns} />
        </div>
    )
}

export default Home;