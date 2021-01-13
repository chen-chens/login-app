import React,{useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import { Table, Button, Spin } from 'antd';
import 'antd/dist/antd.css'; 


// 定義元件
const Users = ()=>{
  // console.log('First useEffect check!');

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
      // dataIndex: 'company.name', //not working
      
      render: (text, record, index)=>{
        // console.log('text :',text);
        // console.log('record :',record);
        // console.log('index :',index);
        return(
          <>{record.company.name}</>
        );
      }, 
    },
  ];

  // 定義資料列初始值
  const [data, setData] = useState(
  [
    {
        id: 1,
        name: `Leanne Graham`,
        email: `Sincere@april.biz`,
        website: `hildegard.org`,
        company: {name: `Romaguera-Crona`},
    },
  ]

  );

  const[spinning, setSpinning]=useState(true);


  // 定義事件處理器
  const handleRefresh =()=>{

    // 點擊後取得資料
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then(
      (redata)=> {
        setData(redata);
        setSpinning(false);
      }
    )
    .catch((error)=> console.log('fetch error'))
  };

  useEffect(()=>{
    // console.log('We are in useEffect');
    handleRefresh()
    },[]
  );

    return (

        <div style={{ padding: 30 }}>
          <div style={{ marginBottom: 16 }}>
            {/* {console.log('Final useEffect check!')} */}
            {console.log('render isLoading:', data.spinning)}
            <Button>
              返回登入頁
            </Button>
            <Button style={{marginLeft:20, backgroundColor:'#ff0',}} onClick={handleRefresh}>
              重新整理
            </Button>
          </div> 

            <Spin tip="Loading..." size="large" spinning={spinning}>

              <Table columns={columns} dataSource={data} />
            </Spin>

        </div>

    );
};



export default Users;