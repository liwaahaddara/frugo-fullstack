// import hardcoded product images (fruits/veg)
// import Apples from "../images/apples.jpg";
// import Cherries from "../images/cherries.jpg";
// import Carrots from "../images/carrots.jpg";
// import Potatoes from "../images/potatoes.jpg";
// import Oranges from "../images/oranges.jpg";
// import Tomatoes from "../images/tomatoes.jpg";

import styled from "styled-components";

//importing default exports - name can be different
import Product from "./Product";

// import styled UI components
import GridBox from "../styled/GridBox";
import { useEffect, useState } from "react";
import axios from "axios";

export const CustomGrid = styled(GridBox)`
  padding: 30px;
`;

export default function NotLoggedInProductList(props) {
  const { products } = props;
  return (
    <div id="products">
      <CustomGrid>
        {products &&
          products.map((product) => {
            return (
              <Product
                key={product._id}
                productInfo={product}
                setProduct={props.setProduct}
              />
            );
          })}
      </CustomGrid>
    </div>
  );
}
