import { Component } from "react";
import Routing from "./Routing";

// appel/1
// appel/2
// appel/:id
class Product extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.params.id;
  }
}

export default Routing(Product);
