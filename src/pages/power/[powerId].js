import React from 'react';
import RootLayout from '../components/Layouts/RootLayout';
import {  Col, Row } from 'antd';
import Image from 'next/image';

const PowerDetailPage = ({powers}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={powers?.img}
                width={500}
                height={400}
                responsive
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{powers?.status}</h2>
                <div
                style={{
                     height:"5px",
                     margin:"20px 0",
                     background:"#000",
                     width:"90%",
                }}
                ></div>
               <div style={{marginTop: "20px"}}>
                  <h2 style={{textAlign: "center"}}>REVIEW</h2>
                  <p  style={{marginTop: "20px"}}>&#8226; {powers?.reviews}</p>
               </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {powers?.name}</h1>
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
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {powers?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {powers?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {powers?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {powers?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {powers?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {powers?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {powers?.description}</h3>
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
                 Individual Rating: {powers?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {powers?.average_rating} 
             </span>
             </p>

    </Col>
  </Row>
        </>
    );
};

export default PowerDetailPage;

PowerDetailPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
     const res = await fetch("http://localhost:3000/api/powers");
     const poweres = await res.json();
     const paths = poweres?.data.map((powers) => ({
     params: { powerId: powers._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/singlePower/singlePower?powerId=${params.powerId}`);
    const data = await res.json();
    console.log(data)

    return{
        props: {
           powers: data.data,
        }
    }
}