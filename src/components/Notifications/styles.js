import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { lighten } from 'polished';


export const Container = styled.div`
  position: relative;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
`;

export const Badge = styled.div`
  background: none;
  border: 0;
  position: relative;

  ${props => props.hasUnread && css`
    &::after {
      position: absolute;
      right: 0;
      top: 0;
      width: 7px;
      height: 8px;
      background: #ff892e;
      content: '';
      border-radius: 50%;
    }
  `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    height: 0;
    width: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.5);
  }
`;

export const Scrollbar = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);

  }

  p {
    font-size: 13px;
    line-height: 18px;    
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    font-family: 'Trebuchet MS', sans-serif;
    border: 0;
    background: none;
    color: ${lighten(0.3, '#254e6b')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }

  ${props => props.unread && css`
    &::after {
      content: '';
      display: inline-block;      
      width: 7px;
      height: 7px;
      background: #ff892e;
      border-radius: 50%;

    }
  `}
`;
