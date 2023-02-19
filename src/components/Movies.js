import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { loading, movies } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {movies.map((movie) => {
        const { Title: title, imdbID: id, Poster: img, Year: year } = movie;
        return (
          <Link to={`movie/${id}`} key={id}>
            <div className="img-con">
              <img src={img === 'N/A' ? defaultImg : img} alt={title} />
            </div>
            <footer>
              <h2>{title}</h2>
              <h4>{year}</h4>
            </footer>
          </Link>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  a {
    position: relative;
    width: 300px;
    height: 425px;
    overflow-y: hidden;
    color: #000;
    &:hover footer {
      bottom: 0px;
    }
    .img-con {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    footer {
      position: absolute;
      bottom: -100px;
      width: 100%;
      text-align: center;
      background: rgba(255, 255, 255, 0.75);
      padding: 10px;
      transition: 0.3s ease-out;
      z-index: 10;
      h2 {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export default Movies;
