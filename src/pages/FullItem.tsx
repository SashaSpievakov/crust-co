import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../redux/store";
import { fetchItem, selectItem } from "../redux/slices/itemSlice";
import FullItemCard from "../components/FullItemCard/FullItemCard";
import { Container } from "../styles/Base.styled";

const FullItem: React.FC = () => {
  const { status } = useSelector(selectItem);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchItem(id));
    }

  }, [dispatch, id])

  return (
    <>
      {status === "loading" ? (
        <Container>Loading...</Container>
      ) : (
        <FullItemCard />
      )}
    </>
  )
}
export default FullItem;