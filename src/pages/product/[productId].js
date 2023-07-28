import { CalendarOutlined, CommentOutlined, ProfileOutlined, } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import styles  from '@/styles/Home.module.css';
import RootLayout from "../components/Layouts/RootLayout";


const ProductDetailPage = ({products}) => {
    return (
      <div>
        <Row>
            <Col xs={24} sm={24} md={12} lg={12} >
            <div className={styles.card} style={{margin: "20px"}}>
            <Image
           src={products?.image}
           width={500}
           height={300}
           responsive
           alt='news-image'
           />
            </div>
            </Col>
                
            <Col xs={24} sm={24} md={12} lg={12} >
                <div style={{margin: "20px"}}>                    
                   <h1>Product Name: {products?.product_name}</h1>
                <div
                  style={{
                    height:"5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "100%"
                  }}
                ></div>

                <p
                style={{
                  display: "flex",
                  justifyContent:"space-around",
                  width: "100%",
                  color:"gray",
                  margin:"10px 0px"
                }}
                >
                <span>
                    <CalendarOutlined /> {products?.category}
                </span>
                <span>
                    <CommentOutlined /> {products?.price} comment
                </span>
                <span>
                    <ProfileOutlined /> {products?.rating}
                </span>
                </p>

                <p style={{fontSize: "15px"}}>
                    {products?.description}
                </p>

                <p style={{fontSize: "15px", fontWeight: "200", marginTop: "10px"}}>
                    {products?.key_features1}
                </p>
                <p> {products?.key_features2}</p>
                <p> {products?.key_features3}</p>

                  <p
                    style={{
                        fontSize:"15px",
                        fontWeight: "300",
                    }}>

                    <span> Author: {products?.individual_ratingr}</span>
                  </p>
                  <p>{products?.average_rating}</p>
                </div>
            </Col>

        </Row>
    </div>
    );
};
//   }
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
