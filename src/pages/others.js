import Image from "next/image";
import styles from '@/styles/cart.module.css';
import RootLayout from "./components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { Card, Col, Row } from "antd";


const MonitorPage = ({others}) => {
 
  const router = useRouter()

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
 
               <button 
               onClick={() => router.push(`/other/${other?._id}`)}
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

    return{
        props: {
            others: data.data,
        }
    }
}
