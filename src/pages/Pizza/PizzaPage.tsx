import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorRequest } from '@src/components';
import { Loading } from '@src/components/UI';
import { pizzaAPI } from '@src/services';

import { FullProduct } from './FullProduct';

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
    <FullProduct item={data} />
  ) : (
    <ErrorRequest />
  );
};
