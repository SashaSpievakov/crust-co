import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "../redux/store";
import { fetchItem } from "../redux/slices/itemSlice";
import FullItemCard from "../components/FullItemCard/FullItemCard";

function FullItemComp() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchItem(id));
    }
  }, [dispatch, id]);

  return <FullItemCard />;
}
export default FullItemComp;
