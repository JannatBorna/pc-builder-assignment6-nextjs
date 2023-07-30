import RootLayout from '../components/Layouts/RootLayout';
import Image from "next/image";
import { Col, Row } from 'antd';

const StorageDetailPage = ({storages}) => {
    return (
    <>
        <Row>
              <Col xs={24} sm={24} md={12} lg={12}> 
              <div style={{margin: "40px"}}>
                <Image
                src={storages?.img}
                width={500}
                height={400}
                alt="image"
              />
              </div>
                  <h2 style={{color:"gray",}}>{storages?.status}</h2>
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
                  <p  style={{marginTop: "20px"}}>&#8226; {storages?.reviews}</p>
               </div>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12}> 

               <div style={{margin: "40px"}}>
                 <h1>Product Name: {storages?.name}</h1>
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
                    <h3  style={{fontWeight: "200"}}>&#8226; Price: {storages?.price}&#2547; </h3>
                    <h3  style={{fontWeight: "200"}}> &#8226;  Rating : {storages?.rating}  </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226;  Category: {storages?.category} </h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {storages?.key_features1}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {storages?.key_features2}</h3>
                    <h3  style={{fontWeight: "200"}}>&#8226; {storages?.key_features3}</h3>
                </div>
                <div>
                    <h3>Description: {storages?.description}</h3>
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
                 Individual Rating: {storages?.individual_rating}; 
             </span>
             <span>
                  Average Rating : {storages?.average_rating} 
             </span>
             </p>

    </Col>
  </Row>
        </>
    );
};

export default StorageDetailPage;

StorageDetailPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
     const res = await fetch("http://localhost:3000/api/storages");
     const storagees = await res.json();
     const paths = storagees?.data.map((storages) => ({
     params: { storageId: storages._id },
     }))
     return{
     paths, fallback:false
     };
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:3000/api/singleStorage/singleStorage?storageId=${params.storageId}`);
    const data = await res.json();

    return{
        props: {
           storages: data.data,
        }
    }
}