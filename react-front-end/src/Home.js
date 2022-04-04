import React from 'react'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
import { Table, DatePicker, Space } from 'antd'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState("2022-01-26");
    const [endDate, setEndDate] = useState("2022-01-26");
    const [btn, setBtn] = useState(null);


    const getReport = () => {
        const endDatee = `?endDate=${endDate}&startDate=${startDate}`;
        console.log(endDatee)
        axios.get('http://localhost:8090/transparency/service/market/intra-day-trade-history' + endDatee)
            .then(response => setData(response))
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    useEffect(() => {
        getReport();
    }, [btn])

    let columns = [
        {
            title: 'Conract',
            dataIndex: 'conract'
        },
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity'
        },
        {
            title: 'Tarih',
            dataIndex: 'date'
        }
    ]
    function onChangeStart(date, dateString) {
        setStartDate(dateString);
        // console.log(startDate);
    }
    function onChangeEnd(date, dateString) {
        setEndDate(dateString);
        //console.log(endDate);
    }

    return (
        <div>
            <Space direction="horzintal" locale={locale}>
                <div>
                    <div>Başlangıc  Tarihi</div>
                    <DatePicker onChange={onChangeStart} defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
                </div>
                <div>
                    <div>Bitiş Tarihi</div>
                    <DatePicker onChange={onChangeEnd} defaultValue={moment('2015-01-02', 'YYYY-MM-DD')} />
                </div>
                <div>
                    <button onClick={() => { setBtn(btn + 1) }}>Listele</button>
                </div>
            </Space>
            <Table dataSource={data.data} columns={columns} />
        </div>
    )
}

export default Home;