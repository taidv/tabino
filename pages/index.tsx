import Head from 'next/head';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getDestinations } from '../services/destinations/static';
import { serverCacheTime } from '../config';

const Home: NextPage = ({ destinations }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Main = styled.main`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
      margin: 0;
      line-height: 1.15;
      font-size: 4rem;
    }
    & p {
      margin: 4rem 0;
      line-height: 1.5;
      font-size: 1.5rem;
    }
  `;

  const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  `;
  const Card = styled.a`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;

    &:hover,
    &:focus,
    &:active {
      color: #0070f3;
      border-color: #0070f3;
    }

    & h2 {
      margin: 0;
      font-size: 1.5rem;
    }
  `;
  return (
    <Container>
      <Head>
        <title>Tabino</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Main>
        <h1>Welcome to Tabino!</h1>
        <p>Where is your next trip?</p>
        <Grid>
          {destinations?.map((destination: string) => (
            <Card key={destination} href={`/${destination.toLowerCase()}`}>
              <h2>{destination} &rarr;</h2>
            </Card>
          ))}
        </Grid>
      </Main>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const destinations = await getDestinations();
  return {
    revalidate: serverCacheTime,
    props: { destinations },
  };
};

export default Home;
