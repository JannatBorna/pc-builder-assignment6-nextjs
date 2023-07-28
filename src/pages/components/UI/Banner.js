import { Col, Row, Carousel } from "antd";
import Image from "next/image";
import banner1 from "../../../assets/banner/banner-1.png";
import banner2 from "../../../assets/banner/banner-2.png";
import banner3 from "../../../assets/banner/banner-3.png";

const contentStyle = {
  height: "425px",
  color: "#000",
}

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12}>
          <h1 style={{ fontSize: "50px" }}>
            IdeaPad Gaming &apos; Core i5
            <br />
            15.6&rdquo; FHD Laptop
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>


          <p style={{ fontSize: "20px" }}>
            The latest price of Lenovo IdeaPad Gaming 3i Core i5 11th Gen RTX 3050 4GB Graphics 15.6&quot; FHD Laptop in Bangladesh is 110,000৳. You can buy the Lenovo IdeaPad Gaming 3i Core i5 11th Gen RTX 3050 4GB Graphics 15.6&rdquo; FHD Laptop at best price from our website or visit any of our showrooms...
          </p>
        </Col>

        <Col
        xs={24} sm={24} md={12} lg={12}
          style={contentStyle}
        >
          <Image src={banner1} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
        xs={24} sm={24} md={12} lg={12}
        >
          <h1 style={{ fontSize: "50px" }}>
            Lenovo 300 Wired 
            <br />
            USB Mouse
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>


          <p style={{ fontSize: "20px" }}>
            The Lenovo 300 Wired USB Mouse is the best option for individuals looking for a mouse that simply does its job. The mouse is ergonomic in the hand and has a straightforward,  your full-size ergonomic form for all-day comfort. The Lenovo 300 Wired USB Mouse comes with a 03-year warranty...
          </p>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}
          style={contentStyle}
        >
          <Image
            src={banner2}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>

       {/* slider-3 */}
   <div>
     <Row>
       <Col
       xs={24} sm={24} md={12} lg={12}
       >
         <h1 style={{ fontSize: "50px" }}>
           Motorola Pulse 120 
           <br />
          Wired Headphone
         </h1>
         <div
           className="line"
           style={{
             height: "5px",
             margin: "20px 0",
             background: "#000",
             width: "95%",
           }}
         ></div>
         <p style={{ fontSize: "20px" }}>
            The Motorola Pulse 120 Wired Headphone helps you to your music wherever you go. Uninterrupted listening has never been hassle-free before with Pulse 120. Equipped with a 40 mm driver to deliver impressive sound quality and enhanced bass, Pulse 120 takes away making it your ideal travel buddy...
         </p>
       </Col>
       <Col
       xs={24} sm={24} md={12} lg={12}
         style={contentStyle}
       >
         <Image
           src={banner3}
           fill
           alt="eagle_image"
           style={{ grayScale: "-1" }}
         />
       </Col>
     </Row>
   </div>
  </Carousel>
);
export default Banner;
