import Image from "next/image";
import styles from '@/styles/cart.module.css';
import RootLayout from "./components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { Card, Col, Row } from "antd";



const RamsPage = ({rams}) => {
 
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
  <span style={{color: "#da8d8d"}}>#</span> RAM
</h1>
        <Row>
          {
          rams?.map((ram) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={ram?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={ram?.img}
                    width={500}
                    height={200}
                    alt="image"
                  />
                  }
              >
                <Meta title={ram?.name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{ram?.status}</h2>
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
                    Price: {ram?.price}&#2547; 
                </span>
                <span>
                     Rating : {ram?.rating} 
                </span>
                <span>
                    Category: {ram?.category}
                </span>
                </p>

               <button 
               onClick={() => router.push(`/ram/${ram?._id}`)}
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

export default RamsPage;

RamsPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getStaticProps = async () => {
    const res = await fetch ("https://pc-builder-iota.vercel.app/api/rams");
    const data = await res.json();

    return{
        props: {
            rams: data.data,
        }
    }
}
