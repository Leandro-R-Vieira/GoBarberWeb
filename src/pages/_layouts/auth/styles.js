import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #254e6b, teal);
  display: flex;  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

    }
  }
`;
