import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchItem } from "../store/slices/itemSlice";
import FullItemCard from "../components/FullItemCard/FullItemCard";
import { useAppDispatch } from "../hooks/reduxHooks";

const FullItemComp = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchItem(id));
    }
  }, [dispatch, id]);

  return <FullItemCard />;
};
export default FullItemComp;
