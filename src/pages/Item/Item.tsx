import { useParams } from 'react-router-dom';

import ErrorRequest from 'src/components/ErrorRequest/ErrorRequest';
import Loading from '../../components/UI/Loading/Loading';
import FullItemBlock from '../../components/FullItemBlock/FullItemBlock';
import itemAPI from '../../services/ItemService';

const Item = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = itemAPI.useFetchItemQuery(
    id as string,
    {
      refetchOnFocus: true,
    },
  );

  return isLoading ? (
    <Loading />
  ) : isSuccess ? (
    <FullItemBlock item={data} />
  ) : (
    <ErrorRequest />
  );
};

export default Item;
