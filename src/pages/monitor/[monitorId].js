import RootLayout from '../components/Layouts/RootLayout';
import { Col, Row } from 'antd';
import Image from 'next/image';

const CputDetailPage = ({monitors}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={monitors?.img}
                width={500}
                height={400}
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{monitors?.status}</h2>
                <div
                style={{
                     height:"5px",
                     margin:"20px 0",
                     background:"#da8d8d",
                     width:"90%",
                }}
                ></div>
               <div style={{marginTop: "20px"}}>
                  <h2 style={{textAlign: "center"}}>REVIEW</h2>
                  <p  style={{marginTop: "20px"}}>&#8226; {monitors?.reviews}</p>
               </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {monitors?.name}</h1>
               </div>
        <div
         style={{
              height:"5px",
              margin:"20px 0",
              background:"#da8d8d",
              width:"100%",
         }}
         ></div>
                <div style={{margin: "40px"}}>
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {monitors?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {monitors?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {monitors?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {monitors?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {monitors?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {monitors?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {monitors?.description}</h3>
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
                 Individual Rating: {monitors?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {monitors?.average_rating} 
             </span>
             </p>
    </Col>
  </Row>
        </>
    );
};

export default CputDetailPage;

CputDetailPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
     const res = await fetch("http://localhost:3000/api/monitors");
     const monitores = await res.json();
     const paths = monitores?.data.map((monitors) => ({
     params: { monitorId: monitors._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/singleMonitor/singleMonitor?monitorId=${params.monitorId}`);
    const data = await res.json();


    return{
        props: {
           monitors: data.data,
        }
    }
}