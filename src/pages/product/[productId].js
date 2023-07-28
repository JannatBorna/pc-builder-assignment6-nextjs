import React from 'react';
import RootLayout from '../components/Layouts/RootLayout';
import { Card, Col, Row } from 'antd';
import Image from 'next/image';

const ProductDetailPage = ({products}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={products?.image}
                width={500}
                height={400}
                responsive
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{products?.status}</h2>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {products?.product_name}</h1>
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
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {products?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {products?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {products?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {products?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {products?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {products?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {products?.description}</h3>
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
                 Individual Rating: {products?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {products?.average_rating} 
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
            <p>&#8226; {products?.reviews}</p>
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
     const res = await fetch("http://localhost:3000/api/products");
     const productses = await res.json();
     const paths = productses?.map((products) => ({
     params: { productId: products._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/singleProduct/singleProduct?productId=${params.productId}`);
    const data = await res.json();
    console.log(data)

    return{
        props: {
           products: data.data,
        }
    }
}