import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Search = () => {
  const { error, query, changeQuery } = useGlobalContext();

  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="e.g. batman"
          value={query}
          onChange={(e) => changeQuery(e)}
        />
      </form>
      {error.display && (
        <div className="error">
          <h2>{error.msg}</h2>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  margin: 30px auto 50px;
  input {
    width: 100%;
    padding: 5px 10px;
    font-size: 20px;
  }
  .error {
    margin-top: 20px;
    text-align: center;
    h2 {
      color: var(--danger);
    }
  }
`;

export default Search;
