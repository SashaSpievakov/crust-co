import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Loader = styled(ContentLoader)`
  width: 250px;
  text-align: center;
  margin-bottom: 65px;

  @media screen and (max-width: 400px) {
    width: 200px;
  }
`;

export default Loader;
