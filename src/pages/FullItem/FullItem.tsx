import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import FullItemBlock from '../../components/FullItemBlock/FullItemBlock';
import Loading from '../../components/UI/Loading/Loading';
import itemAPI from '../../services/ItemService';
import Error from './FullItem.styled';

const FullItem = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const { id } = useParams();

  const { data, isLoading, isSuccess } = itemAPI.useFetchItemQuery(
    id as string,
    {
      refetchOnFocus: true,
    },
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, []);

  return (
    <section ref={scrollRef}>
      {isSuccess ? (
        <FullItemBlock item={data} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Error>Eroor: failed request, try again</Error>
      )}
    </section>
  );
};
export default FullItem;
