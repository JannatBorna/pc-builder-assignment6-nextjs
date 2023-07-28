import React from 'react';
import RootLayout from '../components/Layouts/RootLayout';
import {  Col, Row } from 'antd';
import Image from 'next/image';

const RamDetailPage = ({rams}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={rams?.img}
                width={500}
                height={400}
                responsive
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{rams?.status}</h2>
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
                  <p  style={{marginTop: "20px"}}>&#8226; {rams?.reviews}</p>
               </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {rams?.name}</h1>
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
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {rams?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {rams?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {rams?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {rams?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {rams?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {rams?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {rams?.description}</h3>
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
                 Individual Rating: {rams?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {rams?.average_rating} 
             </span>
             </p>

    </Col>
  </Row>
        </>
    );
};

export default RamDetailPage;

RamDetailPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
     const res = await fetch("http://localhost:3000/api/rams");
     const rames = await res.json();
     const paths = rames?.data.map((rams) => ({
     params: { ramId: rams._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/singleRam/singleRam?ramId=${params.ramId}`);
    const data = await res.json();
    console.log(data)

    return{
        props: {
           rams: data.data,
        }
    }
}