import styled from "styled-components";

export    const   Den = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
export  const  Bar = styled.div`
  border-style: inset;
  width: 30%;
  height: 50%;
  margin-left: 35%;
  position: absolute;
  box-shadow: 2px 2px 2px 2px lightcyan;
`;
export  const  Ques = styled.div`
  /* background-color:green; */
  position: relative;
  width: 100%;
  height: 15%;
`;
export  const  Aws = styled.div`
  /* background-color:red; */
  width: 100%;
  height: 45%;

  Button {
    padding: 2%;
    width: 70%;
    height: 30%;
    border-style: increment;

    &:hover {
      background-color: lightblue;
    }
  }
`;
export  const  Next = styled.div`
  position: relative;
  margin-top: 10%;
  width: 100%;
  height: 15%;
  BUTTON {
    border-radius: 5%;
    padding: 2%;
    padding-left: 10%;
    padding-right: 10%;
    border-style: none;
    &:hover {
      background-color: lightgreen;
    }
  }
`;
export  const  Res = styled.div`
  width: 20%;
  height: 30%;
  background-color: lightcyan;
  margin-left: 40%;
  margin-top: 10%;
  border-style: inset;
  box-shadow: 2px 2px 2px 2px black;
  Button {
    margin-top: -5%;
    padding: 2%;
    border-style: none;
    background-color: lightpink;
    &:hover {
      background-color: lightblue;
    }
  }
`;
export  const  Crt = styled.h4`
  color: green;
`;
export  const  Wng = styled.h4`
  color: red;
`;