import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 100vh;
  width: 100%;
  background:#E1E1E1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImgBox = styled.div`
  width: 394px;
  height: 393px;
  border-radius: 50%;
  background: #d9d9d9;
  margin-left: 50px;
  margin-top:0px;
  
`;

const TextBox = styled.div`
  width: 800px;
  height: 400px;
  background: #eeeeee;
  display:felx;
  flex-direction: column;
  gap: 40px;
  & h2 {
  color: #4F4949;
  }
`;

function Home() {
  return (
    <>
      <Box>
        <h1>Resume</h1>
        <div>
          <h1>허민경</h1>
        </div>

        <Top>
          <ImgBox />
          <TextBox>
            <h2>
              나이: 2001.11.26(25세)<br/>
              학교 <br/>
              -2020.03~2025.02<br/>
              경동대학교 4년제 소프트웨어학과 학사 졸업<br/>
              부전공 빅데이터 이수<br/>
              - 학점<br/>
              3.88/4.5
            </h2>
          </TextBox>
        </Top>
      </Box>
    </>
  );
}

export default Home;
