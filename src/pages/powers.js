import Image from "next/image";
import styles from '@/styles/cart.module.css';
import RootLayout from "./components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";
import Router from "next/router";


const PowersPage = ({powers}) => {
    const {Meta} = Card;
    return (
      <>
      <h1
        style={{
            textAlign: "center",
            fontSize: "50px",
            margin:"30px 0px",
        }}
        >
   <span style={{color: "#da8d8d"}}>#</span> Power Supply Unit
</h1>
        <Row>
          {
          powers?.map((power) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={power?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={power?.img}
                    width={500}
                    height={200}
                    alt="image"
                  />
                  }
              >
                <Meta title={power?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{power?.status}</h2>
                <p
                style={{
                  display: "flex",
                  justifyContent:"space-around",
                  width: "100%",
                  color:"black",
                  margin:"10px 0px"
                }}
                >
                <span>
                    Price: {power?.price}&#2547; 
                </span>
                <span>
                     Rating : {power?.rating} 
                </span>
                <span>
                    Category: {power?.category}
                </span>
                </p>
               <button 
               onClick={() => Router.push(`/power/${power?._id}`)}
               className={styles.cartBtn}
               >SEE DETAIL
               </button>                
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default PowersPage;

PowersPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getStaticProps = async () => {
    const res = await fetch ("http://localhost:3000/api/powers");
    const data = await res.json();

    return{
        props: {
            powers: data.data,
        }
    }
}
