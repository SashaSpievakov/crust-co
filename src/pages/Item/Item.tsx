import { useParams } from 'react-router-dom';

import FullItemBlock from '../../components/FullItemBlock/FullItemBlock';
import Loading from '../../components/UI/Loading/Loading';
import itemAPI from '../../services/ItemService';
import { Error } from './Item.styled';

const Item = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = itemAPI.useFetchItemQuery(
    id as string,
    {
      refetchOnFocus: true,
    },
  );

  return (
    <article data-testid="itemPage">
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <FullItemBlock item={data} />
      ) : (
        <Error>Error: failed request, try again</Error>
      )}
    </article>
  );
};

export default Item;
