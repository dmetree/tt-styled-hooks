import styled, { css } from 'styled-components';

export const SPost = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  background-color: ivory;
  margin: 10px 0px;
  padding: 10px;
`


export const Title = styled.h1`
  font-size: 16px;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
  margin: 10px auto;
`;


export const Button = styled.button`
  font-family: ${(props) => props.theme.font};
  background-color: ivory;
  width: 150px;
  border: 1px solid transparent;
  height: 50px;
  border-radius: 10px;
  text-transform: uppercase;
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    border: 1px solid transparent;
    background-color: grey;
    color: white;
  }
`;


export const Input = styled.input`
  width: 350px;
  height: 40px;
  border: none;
  background-color: ivory;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
`;

export const SearchField = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;
`;


export const ArticlesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 20px;
  align-items: flex-start;
`;