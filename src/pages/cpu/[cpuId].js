import RootLayout from '../components/Layouts/RootLayout';
import Image from "next/image";
import { Col, Row } from 'antd';

const CputDetailPage = ({cpus}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={cpus?.img}
                width={500}
                height={400}
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{cpus?.status}</h2>
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
                  <p  style={{marginTop: "20px"}}>&#8226; {cpus?.reviews}</p>
               </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {cpus?.name}</h1>
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
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {cpus?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {cpus?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {cpus?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {cpus?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {cpus?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {cpus?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {cpus?.description}</h3>
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
                 Individual Rating: {cpus?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {cpus?.average_rating} 
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
     const res = await fetch("https://pc-builder-iota.vercel.app/api/cpus");
     const cpues = await res.json();
     const paths = cpues?.data.map((cpus) => ({
     params: { cpuId: cpus._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://pc-builder-iota.vercel.app/api/singleCpu/singleCpu?cpuId=${params.cpuId}`);
    const data = await res.json();


    return{
        props: {
           cpus: data.data,
        }
    }
}