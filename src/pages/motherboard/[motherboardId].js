import RootLayout from '../components/Layouts/RootLayout';
import { Col, Row } from 'antd';
import Image from 'next/image';

const MotherboardDetailPage = ({motherboards}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={motherboards?.img}
                width={500}
                height={400}
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{motherboards?.status}</h2>
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
                  <p  style={{marginTop: "20px"}}>&#8226; {motherboards?.reviews}</p>
               </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {motherboards?.name}</h1>
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
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {motherboards?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {motherboards?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {motherboards?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {motherboards?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {motherboards?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {motherboards?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {motherboards?.description}</h3>
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
                 Individual Rating: {motherboards?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {motherboards?.average_rating} 
             </span>
             </p>

    </Col>
  </Row>
        </>
    );
};

export default MotherboardDetailPage;

MotherboardDetailPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
     const res = await fetch("http://localhost:3000/api/motherboards");
     const motherboardes = await res.json();
     const paths = motherboardes?.data.map((motherboards) => ({
     params: { motherboardId: motherboards._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/singleMotherboard/singleMotherboard?motherboardId=${params.motherboardId}`);
    const data = await res.json();


    return{
        props: {
           motherboards: data.data,
        }
    }
}