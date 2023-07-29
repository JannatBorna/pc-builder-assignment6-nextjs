import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Link from "next/link";
import RootLayout from "../components/Layouts/RootLayout";
import { Card, Col, Row } from "antd";


const MonitorPage = ({others}) => {
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
   # Others
</h1>
        <Row>
          {
          others?.map((other) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={other?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={other?.img}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >
                <Meta title={other?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{other?.status}</h2>
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
                    Price: {other?.price}&#2547; 
                </span>
                <span>
                     Rating : {other?.rating} 
                </span>
                <span>
                    Category: {other?.category}
                </span>
                </p>
                <Link href={`/other/${other?._id}`}>
                    <p
                      style={{
                          fontSize:"15px",
                          marginTop:"20px",
                          backgroundColor:"#da8d8d",
                          color:"white",
                          width: "100%",
                          padding: "2px 5px",
                          fontWeight: "300",
                          letterSpacing: "5px",
                          textAlign: "center",
                      }}
                      >
                          SEE DETAIL
                      </p>
                </Link>
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getStaticProps = async () => {
    const res = await fetch ("http://localhost:3000/api/others");
    const data = await res.json();
    console.log(data);
    return{
        props: {
            others: data.data,
        }
    }
}
