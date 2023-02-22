import Loader from './Skeleton.styled';

const Skeleton = () => {
  return (
    <Loader
      speed={2}
      width={250}
      height={470}
      viewBox="0 0 250 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="5" y="335" rx="5" ry="5" width="240" height="68" />
      <rect x="27" y="425" rx="5" ry="5" width="60" height="40" />
      <rect x="134" y="423" rx="20" ry="20" width="95" height="45" />
      <rect x="40" y="275" rx="10" ry="10" width="170" height="35" />
      <circle cx="123" cy="135" r="120" />
    </Loader>
  );
};

export default Skeleton;
