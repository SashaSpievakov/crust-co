import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorRequest from 'src/components/ErrorRequest/ErrorRequest';

import FullItemBlock from '../../components/FullItemBlock/FullItemBlock';
import { Loading } from '../../components/UI';
import itemAPI from '../../services/ItemService';

export const Pizza = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess } = itemAPI.useFetchItemQuery(
    id as string,
    {
      refetchOnFocus: true,
    },
  );

  useEffect(() => {
    document.title = `Crust & Co. | Item`;
  }, []);

  return isLoading ? (
    <Loading />
  ) : isSuccess ? (
    <FullItemBlock item={data} />
  ) : (
    <ErrorRequest />
  );
};
