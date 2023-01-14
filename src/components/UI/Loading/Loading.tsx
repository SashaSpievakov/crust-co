import { Wrapper, Loader, Circle } from './Loading.styled';

const Loading = () => {
  return (
    <Wrapper>
      <Loader viewBox="0 0 50 50">
        <Circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </Loader>
    </Wrapper>
  );
};

export default Loading;
