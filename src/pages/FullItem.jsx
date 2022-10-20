import { useParams } from "react-router-dom"

const FullItem = () => {
  const {id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <img src="" alt="" />
      <h2>Pizza</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit voluptates aliquid cupiditate reiciendis et mollitia minima aliquam a beatae, neque tempore necessitatibus commodi sunt minus. Expedita, voluptatum, dignissimos fugiat, neque maxime eaque modi eum officiis illo molestiae fugit? Inventore quod cumque laboriosam reprehenderit, odit quis error eius consequatur itaque totam nobis corporis incidunt amet placeat consectetur magnam aspernatur modi?</p>
      <h4>Price</h4>
    </div>
  )
}
export default FullItem