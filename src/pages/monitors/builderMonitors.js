import { Card, Col, Row } from "antd";
import Image from "next/image";
import styles  from '@/styles/Home.module.css';
import Link from "next/link";
import RootLayout from "../components/Layouts/RootLayout";


const BuilderMonitors = ({monitors}) => {
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
   # Monitor
</h1>
        <Row>
          {
          monitors?.map((monitor) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={monitor?.id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={monitor?.img}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >
                <Meta title={monitor?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{monitor?.status}</h2>
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
                    Price: {monitor?.price}&#2547; 
                </span>
                <span>
                     Rating : {monitor?.rating} 
                </span>
                <span>
                    Category: {monitor?.category}
                </span>
                </p>
                <Link href={`/monitor/${monitor?._id}`}>
                    <p
                      style={{
                          fontSize:"15px",
                          marginTop:"20px",
                          backgroundColor:"black",
                          color:"white",
                          width: "100%",
                          padding: "2px 5px",
                          fontWeight: "300",
                          letterSpacing: "3px",
                          textAlign: "center",
                      }}
                      >
                          Add To Builder
                      </p>
                </Link>
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default BuilderMonitors;

BuilderMonitors.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getStaticProps = async () => {
    const res = await fetch ("http://localhost:3000/api/monitors");
    const data = await res.json();
    console.log(data);
    return{
        props: {
            monitors: data.data,
        }
    }
}
