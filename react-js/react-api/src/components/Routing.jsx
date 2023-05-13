import { useParams } from "react-router-dom";
function Routing(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export default Routing;
