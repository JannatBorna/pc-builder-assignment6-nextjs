import React from 'react';
import RootLayout from '../components/Layouts/RootLayout';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';

const ProductDetailPage = ({product}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={product?.image}
                width={500}
                height={400}
                responsive
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{product?.status}</h2>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {product?.product_name}</h1>
               </div>
        <div
         style={{
              height:"5px",
              margin:"20px 0",
              background:"#000",
              width:"100%",
         }}
         ></div>
                <div style={{margin: "40px"}}>
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {product?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {product?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {product?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {product?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {product?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {product?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {product?.description}</h3>
                </div>

             <p
             style={{
               display: "flex",
               justifyContent:"space-around",
               width: "100%",
               color:"black",
               margin:"30px 0px"
             }}
             >
             <span>
                 Individual Rating: {product?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {product?.average_rating} 
             </span>
             </p>

        <div
         style={{
              height:"5px",
              margin:"20px 0",
              background:"#000",
              width:"100%",
         }}
         ></div>
         <div>
            <h2 style={{textAlign: "center"}}>REVIEW</h2>
            <p>&#8226; {product?.reviews}</p>
         </div>
    </Col>
  </Row>
        </>
    );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
      const res = await fetch("http://localhost:5000/products");
      const products = await res.json();

      const paths = products.map((product) => ({
       params: { productId: product.id },
       }));

      return{ paths,  fallback:false };
}

export const getStaticProps = async (context) => {
   const { params } = context;
   const res = await fetch(`http://localhost:5000/products/${params.productId}`);
   const data = await res.json();



    return{
        props: {
           product: data,
        }
    }
}