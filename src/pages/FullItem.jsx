import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItem, selectItem } from "../redux/slices/itemSlice";
import { useEffect } from "react";
import FullItemCard from "../components/FullItemCard";

const FullItem = () => {
  const { status } = useSelector(selectItem);
  const {id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem(id))
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
export default FullItem