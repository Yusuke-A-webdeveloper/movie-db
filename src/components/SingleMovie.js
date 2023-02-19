import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { fetchSingleMovie, singleMovie, loading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleMovie(id);
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const {
    Title: title,
    Released: date,
    Runtime: duration,
    Genre: genre,
    Actors: actors,
    Poster: img,
    Plot: info,
  } = singleMovie;

  return (
    <Wrapper>
      <div className="img-con">
        <img src={img === 'N/A' ? defaultImg : img} alt={title} />
      </div>
      <article>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <h2>
          <span>featuring</span>
          {actors}
        </h2>
        <h3>
          <span>duration</span>
          {duration}
        </h3>
        <h3>
          <span>genre</span>
          {genre}
        </h3>
        <p>{info}</p>
        <Link to="/">back to home</Link>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  max-width: 800px;
  margin: 100px auto 50px;
  display: flex;
  justify-content: center;
  .img-con {
    position: relative;
  }
  article {
    position: relative;
    padding: 20px;
    h1 {
      color: var(--header);
      font-size: 45px;
    }
    h4 {
      color: var(--header2);
      font-size: 15px;
    }
    h2,
    h3 {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: var(--header);
    }
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 20px;
    }
    span {
      margin-right: 10px;
      font-size: 14px;
      background: #000;
      color: #fff;
      padding: 5px;
    }
    p {
      color: var(--header2);
      margin-top: 20px;
      margin-bottom: 20px;
    }
    a {
      display: inline-block;
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 5px 10px;
      color: var(--header2);
      border: 1px solid;
      transition: 0.3s ease-out;
      &:hover {
        color: #fff;
        background: var(--header2);
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleMovie;
