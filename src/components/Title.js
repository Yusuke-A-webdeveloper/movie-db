import styled from 'styled-components';

export const DefaultTitle = styled.div`
  text-align: center;
  h1 {
    color: var(--header);
    text-transform: uppercase;
    font-size: 50px;
    letter-spacing: 2px;
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 30px;
    }
  }
`;
