import React,{ useState, useEffect } from 'react';
import {  Table, Button, Spin } from 'antd';
import '../../App.css';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Website',
    dataIndex: 'website',
  },
  {
    title: 'Company',
    // dataIndex: 'company.name', >>>測試無效(無法顯示於網頁上)
    // 使用antd預設屬性render做自定義函式(The return value should be a ReactNode.)
      //  先使用console.log(三個參數)確定回傳值哪個是我需要的
    render: function(text, record, index) {
      // console.log('text :',text);
      // console.log('record :',record);
      // console.log('index :',index);
      return(
        <>
         {record.company.name} 
        </>
      );
    }
  },
];

const Reuser = ()=>{
    console.log('First in Reuser useEffect!');

    //定義useState >>重整icon(Spinning)出現時機
    //>>畫面一載入出現，收到資料更新畫面完成消失。
    //>>點擊重新整理按鈕出現，收到資料更新畫面完成消失。
    const [spinning, setSpinning] = useState(true);

    //定義資料useState >>監聽資料與修改方法
    const [data, setData] = useState([]);


    // 定義處理器handleRefresh
    const handleRefresh = () => {
      // (1)向web api送出請求
      fetch('http://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      // (2)成功拿到回傳資料，執行setData()方法:取得回傳所有的資料，由dataIndex去辨認要顯示哪些內容，更新內容。
      // (2-1)更新完畫面後，執行setSpinning()方法:spinning消失
      .then(
        (printData)=> {
          console.log(printData);
          setData(printData);
          setSpinning(false);
        }
      )
      .catch((error) => console.log('fetch error'))
    };

    // 定義useEffect >>載入頁面後，向web api送請求，並更新畫面。
      //參數一: 執行函式 >> 執行handleRefresh()
      //參數二: 執行參數一函式的預設條件 >> 參數二[]內容有改變才執行參數一函式。
    useEffect(()=> {
      console.log('I am in useEffect!');
      handleRefresh()}
      ,[]
      )


    return (

        <div style={{ marginBottom: 16 , padding: 16}}>
            {console.log('Final in return useEffect!')}
            
            <Link to="/login">
              <Button type="primary" style={{ marginLeft: 16, marginTop:16 }}>
                  回上一頁
              </Button>
            </Link>

            <Button type="danger" style={{ marginLeft: 16, marginTop:16 }} onClick={handleRefresh} >
                重新整理
            </Button>

            <Spin size="large" spinning= {spinning} >
              <Table columns={columns} dataSource={data} />
            </Spin>
        </div>

    );

};

export default Reuser;
