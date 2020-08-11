import styled from 'styled-components';
import { SearchCard } from '../styled';

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #411f1f;
      color: #411f1f;
      &:hover {
        text-decoration-color: #86c4ba;
        color: #86c4ba;
      }
    }
    button {
      outline: none;
      border: 1px solid #411f1f;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #cedebd;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #411f1f;
      font-family: Helvetica, sans-serif;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
