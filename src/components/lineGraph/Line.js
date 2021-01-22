import React from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import styled from 'styled-components'

const Section = styled.section`
    width: 70%; 
    margin: 50px auto 0px;  
    outline: 1px solid red;
`;
const Title = styled.h1`
    text-align: center;
    padding: 20px; 
`;


const data = {
  labels: ['1', '2', '3', '4', '5', '6'], //輸入篩選日期
  datasets: [
    {
      label: '一般會員',
      data: [12, 19, 3, 5, 2, 3], //輸入一般會員統計數量
      fill: false,
      backgroundColor: 'rgb(47, 113, 115)',
      borderColor: 'rgba(62, 149, 205)',
    },
    {
        label: 'VIP會員',
        data: [1, 2, 1, 1, 2, 2], //輸入VIP會員統計數量
        fill: false,
        backgroundColor: 'rgb(142, 94, 162)',
        borderColor: 'rgba(115, 78, 130)',
      },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const LineChart = () => (
    <Section>
            <Title>玩家帳號統計圖表</Title>
            <Line data={data} options={options} />
    </Section>
)

export default LineChart