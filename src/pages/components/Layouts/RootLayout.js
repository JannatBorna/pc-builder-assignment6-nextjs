import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { FacebookFilled, GoogleSquareFilled,  LinkedinFilled, LoginOutlined,  PoweroffOutlined,   TwitterSquareFilled, } from '@ant-design/icons';
import styles from '@/styles/Home.module.css';
import { Col, Dropdown, Layout, Row, Space } from 'antd';
const { Header, Content, Footer } = Layout;
import { useSession, signOut } from "next-auth/react"
import Router from 'next/router';


const RootLayout = ({ children }) => {
  
     const { data: session } = useSession(); // github


  const items = [
  {
    label: <button  className={styles.itemBtn} onClick={() => Router.push('/cpus')} 
            >CPU / Processor</button>,
    key: '0',
  },
  {
  label: <button className={styles.itemBtn} onClick={() => Router.push('/motherboards')} 
          >Motherboard</button>,
  key: '1',
},
{
  label: <button className={styles.itemBtn} onClick={() => Router.push('/rams')} 
         >RAM</button>, 
  key: '2',
},
{
  label:<button className={styles.itemBtn} onClick={() => Router.push('/powers')} 
        >Power Supply Unit</button>,  
  key: '3',
},
{
  label: <button className={styles.itemBtn} onClick={() => Router.push('/storages')} 
        >Storage Device</button>,  
  key: '4',
},
{
  label:<button className={styles.itemBtn} onClick={() => Router.push('/monitors')} 
       >Monitor</button>,  
  key: '5',
},
  {
    label: <button className={styles.itemBtn} onClick={() => Router.push('/others')} 
           >Others</button>,  
    key: '6',
  },
];

  return (
    <Layout>

      <Header className={styles.layout} >
        <Row>
        <Col xs={8} sm={8} md={12} lg={8} >
        <div> 
        <p onClick={() => Router.push('/')}>
          <Image
            src={logo}
            alt='logo'
            width={200}
            style={{marginTop: "-70px", cursor:"pointer"}}
            />
        </p>
        </div>
        </Col>
    <Col  xs={16} sm={16} md={12} lg={16}>
            <div className={styles.loginSetion}>
        <items mode="vertical" style={{ backgroundColor: "#1f1f1f"}} className={styles.manu_item} >

             <Dropdown 
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
              <a onClick={(e) => e.preventDefault()}>
              <Space style={{ margin: "0px 30px" }}>
                Categories
              </Space>
              </a>
               </Dropdown>

        <button onClick={() => Router.push('/pcBuilder')}  className={styles.pcbuilderBtn}> 
           <items style={{ padding: "10px" }}>      
           PC Builder
           </items>
        </button>  

          
         { session?.user?.email? (
 
               <items style={{ margin: "0px 30px" }}>
               <button 
               onClick={() => signOut()}
               className={styles.logout}
                 >
                 <PoweroffOutlined  style={{margin: "5px"}}/>
                 Logout
                 </button>
              </items>
           ) :
           <button onClick={() => Router.push('/login')} className={styles.loginBtn}> 
              <items style={{padding: "10px"}}>
                <LoginOutlined style={{margin: "5px"}}/>
                Login
              </items>
            </button>
        }     
        </items>
        </div>
        </Col>
          </Row> 
        </Header>
 
      <Content
        style={{
          padding: '0 24px',
          minHeight: '100vh'
        }}
      >
        { children }

      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#1f1f1f",
          color: "#ffff"
        }}
      >
        <div className={styles.line}></div>
        <Row>
            <Col xs={24} sm={24} md={8} lg={8}>
                <h2 style={{fontSize: "28px", marginTop: "20px"}} > PC Builder </h2>

        <p className={styles.social_icons} style={{marginTop: "20px"}}>
         <span className={styles.socialIcons}>
           <FacebookFilled />
         </span>
         <span className={styles.socialIcons}>
           <TwitterSquareFilled />
         </span>
         <span className={styles.socialIcons}>
           <GoogleSquareFilled />
         </span>
         <span className={styles.socialIcons}>
           <LinkedinFilled />
         </span>
       </p>
        </Col>
    <Col xs={24} sm={24} md={8} lg={8}>
       <form style={{marginTop: "30px", }}>
        <input  type="email" placeholder="Enter Your Email" style={{marginBottom: "10px",  width: "50%", height: "5vh"}}/>
        <button style={{marginLeft: "10px", height: "5vh", backgroundColor: "red", color: "white", border: "none", width: "15%",}}>Subscribe</button>
      </form>
      </Col>
     <Col xs={24} sm={24} md={8} lg={8}>
      <p
      style={{marginTop: "20px"}}
      >
        If you are on a budget and looking to save some money, building your own PC can be a huge advantage. By choosing your own parts, you can shop around to find the best prices and avoid the added cost of paying for expensive parts that you do not need.</p>
    <p
    style={{
        display: "flex",
        justifyContent:"space-around",
        width: "100%",
        color:"white",
        margin:"10px 0px"
    }}>
        <span>About Us</span> 
        <span>Home</span>
        <span>PC Buy</span>
        <span>Contact Us</span>
        <span>Our Website</span>
    </p>
    </Col>
    </Row>
        <p style={{fontSize: "10px"}}>PC Builder &copy;2023 Created by Jannat Borna</p>
      </Footer>
    </Layout>
  );
};
export default RootLayout;