import { useParams } from 'react-router-dom';

import FullItemBlock from '../../components/FullItemBlock/FullItemBlock';
import Loading from '../../components/UI/Loading/Loading';
import itemAPI from '../../services/ItemService';
import Error from './Item.styled';

const Item = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = itemAPI.useFetchItemQuery(
    id as string,
    {
      refetchOnFocus: true,
    },
  );

  return (
    <section>
      {isSuccess ? (
        <FullItemBlock item={data} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Error>Error: failed request, try again</Error>
      )}
    </section>
  );
};

export default Item;
