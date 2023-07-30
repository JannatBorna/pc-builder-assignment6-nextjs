import Image from "next/image";
import styles from '@/styles/cart.module.css';
import RootLayout from "./components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { Card, Col, Row } from "antd";


const BuilderCpus = ({cpus}) => {

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
   <span style={{color: "#da8d8d"}}>#</span> CPU
</h1>
        <Row>
          {
          cpus?.map((cpu) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={cpu?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={cpu?.img}
                    width={500}
                    height={200}
                    alt="image"
                  />
                  }
              >
                <Meta title={cpu?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{cpu?.status}</h2>
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
                    Price: {cpu?.price}&#2547; 
                </span>
                <span>
                     Rating : {cpu?.rating} 
                </span>
                <span>
                    Category: {cpu?.category}
                </span>
                </p>

               <button 
               onClick={() => router.push('/pcBuilder')}
               className={styles.cartBtn}
               >ADD TO BUILDER
               </button>                

              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default BuilderCpus;

BuilderCpus.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getServerSideProps = async () => {
    const res = await fetch("https://pc-builder-iota.vercel.app/api/cpus");
    const data = await res.json();

    return{
        props: {
            cpus: data.data,
        }
    }
}
