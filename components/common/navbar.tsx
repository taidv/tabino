import styled from 'styled-components';

const Link = styled.a`
  margin: 0;
  padding: 1rem;
  text-align: left;
  max-width: 300px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
const Title = styled.h4`
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const NavBarItem = ({ title, isActive }: { title: string; isActive: boolean }) => {
  const StatedLink = styled(Link)`
    color: ${isActive ? '#0070f3' : 'black'};
  `;

  return (
    <StatedLink href={`/${title.toLowerCase()}`}>
      <Title>{title}</Title>
    </StatedLink>
  );
};

const NavBar = ({ current, destinations }: { current: string; destinations: string[] }) => {
  const isActive = (dest: string) => dest.toLowerCase() === current.toLowerCase();
  const Container = styled.div`
    display: flex;
    align-items: left;

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  `;

  return (
    <Container>
      <Link href="/" style={{ background: 'black', color: 'white' }}>
        <Title>Tabino</Title>
      </Link>
      <div>
        {destinations?.map((destination: string) => (
          <NavBarItem key={destination} title={destination} isActive={isActive(destination)}></NavBarItem>
        ))}
      </div>
    </Container>
  );
};

export default NavBar;
