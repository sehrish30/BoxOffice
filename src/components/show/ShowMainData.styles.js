import styled from 'styled-components';
export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  color: #411f1f;
  background-color: #f3f3f3;

  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #411f1f;
    border-radius: 40px;
  }

  .text-side {
    margin-left: 20px;
    .summary {
      color: #411f1f;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

export const TagList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;

  span {
    margin: 6px;
    margin-bottom: 0;
    color: #411f1f;
    background-color: #86c4ba;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;
