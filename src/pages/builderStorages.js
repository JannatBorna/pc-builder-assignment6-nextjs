import Image from "next/image";
import styles from '@/styles/cart.module.css';
import RootLayout from "./components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { Card, Col, Row } from "antd";



const BuilderStorages = ({storages}) => {

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
   <span style={{color: "#da8d8d"}}>#</span> Storages Device
</h1>
        <Row>
          {
          storages?.map((storage) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={storage?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={storage?.img}
                    width={500}
                    height={200}
                    alt="image"
                  />
                  }
              >
                <Meta title={storage?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{storage?.status}</h2>
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
                    Price: {storage?.price}&#2547; 
                </span>
                <span>
                     Rating : {storage?.rating} 
                </span>
                <span>
                    Category: {storage?.category}
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

export default BuilderStorages;

BuilderStorages.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getServerSideProps = async () => {
    const res = await fetch ("https://pc-builder-iota.vercel.app/api/storages");
    const data = await res.json();

    return{
        props: {
            storages: data.data,
        }
    }
}
