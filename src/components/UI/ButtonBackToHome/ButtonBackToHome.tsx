import { Link } from 'react-router-dom';

import { ButtonBack } from '../../../styles/Buttons.styled';

const ButtonBackToHome = () => {
  return (
    <ButtonBack to="/" as={Link}>
      <span>Go Back</span>
    </ButtonBack>
  );
};

export default ButtonBackToHome;
