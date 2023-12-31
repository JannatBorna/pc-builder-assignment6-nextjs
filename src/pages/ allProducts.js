import Image from "next/image";
import styles from '@/styles/cart.module.css';
import RootLayout from "./components/Layouts/RootLayout";
import { useRouter } from "next/router";
import { Card, Col, Row } from "antd";


const AllProductsPage = ({allProducts}) => {

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
    ALL PRODUCTS
</h1>
        <Row>
          {
          allProducts?.map((products) =>(
              <Col 
              xs={24} sm={24} md={12} lg={8} 
              key={products?._id}

              >

              <Card 
              className={styles.card}
              hoverable
                  cover={
                  <Image
                    src={products?.image}
                    width={500}
                    height={200}
                    alt="image"
                  />
                  }
              >
                <Meta title={products?.product_name}/>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#da8d8d",
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


                <button 
                onClick={() => router.push(`/product/${products?._id}`)}
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
    const res = await fetch ("https://pc-builder-iota.vercel.app/api/products");
    const data = await res.json();

    return{
        props: {
            allProducts: data.data,
        }
    }
}
