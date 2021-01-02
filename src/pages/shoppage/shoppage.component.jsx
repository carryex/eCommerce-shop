import React, { Component } from "react";
import CoolectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return <div className="shop-page">
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CoolectionPreview key={id} {...otherCollectionProps}/>
        ))
      }
    </div>;
  }
}
