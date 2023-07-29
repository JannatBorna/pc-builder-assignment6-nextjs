import { Card, Col, Row } from "antd";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Link from "next/link";
import RootLayout from "./components/Layouts/RootLayout";


const AllProductsPage = ({allProducts}) => {
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
    ALL PRODUCTS
</h1>
        <Row>
          {
          allProducts?.map((products) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={products?.id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={products?.image}
                    width={500}
                    height={200}
                    responsive
                    alt="image"
                  />
                  }
              >
                <Meta title={products?.product_name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "100%"
                  }}
                ></div>
               <h2 style={{color:"gray",}}>{products?.status}</h2>
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
                    Price: {products?.price}&#2547; 
                </span>
                <span>
                     Rating : {products?.rating} 
                </span>
                <span>
                    Category: {products?.category}
                </span>
                </p>
                <Link href={`/product/${products?._id}`}>
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
                          See Detail
                      </p>
                </Link>
              </Card>

    </Col>
    ))}
  </Row>
        </>
    );
};

export default AllProductsPage;

AllProductsPage.getLayout = function getLayout (page){
    return(
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// data fetching
export const getStaticProps = async () => {
    const res = await fetch ("http://localhost:3000/api/products");
    const data = await res.json();
    console.log(data);
    return{
        props: {
            allProducts: data.data,
        }
    }
}
