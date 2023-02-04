import Loader from './Skeleton.styled';

const Skeleton = () => {
  return (
    <Loader
      speed={2}
      width={265}
      height={490}
      viewBox="0 0 280 490"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="134" cy="136" r="125" />
      <rect x="0" y="279" rx="10" ry="10" width="280" height="25" />
      <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
      <rect x="34" y="436" rx="10" ry="10" width="60" height="40" />
      <rect x="144" y="433" rx="20" ry="20" width="106" height="45" />
    </Loader>
  );
};

export default Skeleton;
