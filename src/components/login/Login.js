// import React, { useState } from 'react';
import styled from 'styled-components';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

const Section = styled.div`
    width:100%;
    height:100vh;
    background-color:#F2EFE8;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Container = styled.div`
    min-width:400px;
    padding:30px;
    box-sizing:border-box;
    margin:auto;
    background-color:#fff;
    border:1px solid #EBEBEB;
    box-shadow:0 0 10px #E2E2E2;
`;
const Title = styled.h1`
    color:#D3D3D3;
    text-align:center;
`;
const MainForm = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const LoginInput = styled.label`
    width:70%;
    margin:20px;
    input{
        margin-left:10px;
    }
`;
const Button =styled.input`
    width:70%;
    margin-top:20px;
    padding:10px;
    background-color:#0A878B;
    color:#fff;
    font-weight:bold;
    font-size:1rem;
    border-radius:5px;
    border:none;
    cursor: pointer;
`;




const LoginPage= ()=>{
    
    const handleClick = ()=>{

        console.log('begin');
        
        // 取得graphql API 內容(帳號 + 密碼) 
        const url ='https://numet-gaming-mgmt.herokuapp.com/graphql';
        const login =`
            query login{
                login(input:{username:"admin",password:"password"}){
                    user{
                    accountName
                    password
                    }
                token
                }
            }
        `;
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: login })
        };
        
        fetch(url,options)
            .then((response)=> {
                console.log("response success");
                return(
                    response.json())
                })
            .then((data)=> console.log('data', data))
            .catch((error)=> console.log('fetch error'))
            
        console.log('end');

        // 確認帳號密碼是否正確 >>>這個只能由後端依據token做確認
        // 正確 >>> 進入下一頁
        // 錯誤 >>> 顯示 "帳號或密碼錯誤"
    }

    return(

        <Section>
            <Container>
                <Title>登入介面</Title>
                <MainForm>
                    <LoginInput>帳號 :
                        <input type="text" placeholder="請輸入帳號" />
                    </LoginInput>
                    <LoginInput>密碼 :
                        <input type="password" placeholder="請輸入密碼" />
                    </LoginInput>
                    <Button type="submit" value="登入會員" onClick={handleClick} />
                </MainForm>
            </Container>
        </Section>

    );
}

export default LoginPage;