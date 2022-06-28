import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #F73808;      
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px; 
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #9c4e16;
      font: 16px 'Rye';
      font-weight: normal;
      color: #fff;
      border: 0;
      border-radius: 4px;      
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#9c4e16')};
      }
    }
  }

  > button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: #8B0000;
      font: 16px 'Rye';
      font-weight: normal;
      color: #fff;
      border: 0;
      border-radius: 4px;      
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#8B0000')};
      }
    }
`;
