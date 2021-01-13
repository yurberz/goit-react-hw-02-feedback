import styled from "styled-components";

const StatsList = styled.ul`
  display: flex;

  .statsList__item {
    color: honeydew;
    font-weight: 700;
    font-size: 18px;

    &:nth-child(1) {
      color: springgreen;
    }
    :nth-child(3) {
      color: salmon;
    }
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .light {
    font-style: italic;
    color: orange;
  }
`;

export default StatsList;
