import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <h2>loading...</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  h2 {
    color: var(--header);
    text-transform: capitalize;
    font-size: 30px;
  }
`;

export default Loading;
