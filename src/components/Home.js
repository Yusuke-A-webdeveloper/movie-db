import styled from 'styled-components';
import Search from './Search';
import Movies from './Movies';
import { DefaultTitle } from './Title';

const Home = () => {
  return (
    <Wrapper>
      <DefaultTitle>
        <h1>search movies</h1>
      </DefaultTitle>
      <Search />
      <Movies />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 100px auto 50px;
  max-width: 1000px;
`;

export default Home;
