import React from "react";
import "./index.css";
import axios from "axios"; //"axios" ctrl+클릭하면?
//ctrl+j 터미널 플러스 버튼 npm install axios
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://13ca5a39-8368-4a11-9679-6f615d8d8450.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="b0dy">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
