import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorRequest from 'src/components/ErrorRequest/ErrorRequest';

import FullItemBlock from '../../components/FullItemBlock/FullItemBlock';
import { Loading } from '../../components/UI';
import { pizzaAPI } from '../../services';

export const PizzaPage: FC = () => {
  const { name } = useParams();

  const { data, isLoading, isSuccess } = pizzaAPI.useFetchItemQuery(
    name || '',
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
