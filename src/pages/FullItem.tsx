import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useAppDispatch } from "../redux/store";
import { fetchItem, selectItem } from "../redux/slices/itemSlice";
import React, { useEffect } from "react";
import FullItemCard from "../components/FullItemCard";

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
        <div className="container">Loading...</div>
      ) : (
        <FullItemCard />
      )}
    </>
  )
}
export default FullItem;