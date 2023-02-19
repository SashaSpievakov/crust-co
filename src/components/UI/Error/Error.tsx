import { Container } from 'src/styles/Base.styled';
import { ErrorMessage } from './Error.styled';

const Error = () => {
  return (
    <Container data-testid="itemPage">
      <ErrorMessage>Error: failed request, try again</ErrorMessage>
    </Container>
  );
};

export default Error;
