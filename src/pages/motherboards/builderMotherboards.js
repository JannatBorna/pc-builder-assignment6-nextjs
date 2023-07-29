import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Link from "next/link";
import RootLayout from "../components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";


const BuilderMotherboards = ({motherboards}) => {
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
   <span style={{color: "#da8d8d"}}>#</span> Motherboard
</h1>
        <Row>
          {
          motherboards?.map((motherboard) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={motherboard?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={motherboard?.img}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >
                <Meta title={motherboard?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{motherboard?.status}</h2>
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
                    Price: {motherboard?.price}&#2547; 
                </span>
                <span>
                     Rating : {motherboard?.rating} 
                </span>
                <span>
                    Category: {motherboard?.category}
                </span>
                </p>
                <Link href="/pcBuilder">
                  <p
                  style={{
                  fontSize:"15px",
                  marginTop:"20px",
                  backgroundColor:"#da8d8d",
                  color:"white",
                  width: "100%",
                  padding: "2px 5px",
                  fontWeight: "300",
                  letterSpacing: "3px",
                  textAlign: "center",
                    }}
              >ADD TO BUILDER</p>
                </Link>
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default BuilderMotherboards;

BuilderMotherboards.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getStaticProps = async () => {
    const res = await fetch ("http://localhost:3000/api/motherboards");
    const data = await res.json();
    console.log(data);
    return{
        props: {
            motherboards: data.data,
        }
    }
}
