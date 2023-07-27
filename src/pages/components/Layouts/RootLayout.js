import { Col, Dropdown, Layout, Menu, Row, Space } from 'antd';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { DashboardOutlined, DeploymentUnitOutlined,  DownOutlined,  FacebookFilled, GoogleSquareFilled,  LinkedinFilled, LoginOutlined, MobileOutlined, PoweroffOutlined,  RobotOutlined,   TwitterSquareFilled, UserOutlined, } from '@ant-design/icons';
import styles  from '@/styles/Home.module.css';
const { Header, Content, Footer } = Layout;



const RootLayout = ({ children }) => {


  const items = [
  {
    label: <a href="/cpu">CPU / Processor</a>,
    key: '0',
  },
  {
  label: <a href="/motherboar">Motherboard</a>,
  key: '1',
},
{
  label: <a href="/ram">RAM</a>,
  key: '2',
},
{
  label: <a href="/powerSupply">Power Supply Unit</a>,
  key: '3',
},
{
  label: <a href="/storageDevice">Storage Device</a>,
  key: '4',
},
{
  label: <a href="/monitor">Monitor</a>,
  key: '5',
},
  {
    label: <a href="/others">Others</a>,
    key: '6',
  },
];

  return (
    <Layout>

      <Header  className={styles.layout} >
        <Row>
        <Col xs={8} sm={8} md={12} lg={8} >
        <div className="brand-logo"> 
        <Link href="/">
          <Image
            src={logo}
            alt='logo'
            width={200}
            style={{marginTop: "-70px"}}
            />
        </Link>
        </div>
        </Col>
    <Col  xs={16} sm={16} md={12} lg={16}>
        <Menu mode="vertical" style={{ backgroundColor: "#1f1f1f",textAlign: "end"}} className={styles.manu_item} >

             <Dropdown 
                  menu={{
                    items,
                  }}
                  trigger={['click']}
                >
              <a onClick={(e) => e.preventDefault()}>
              <Space>
              Categories
              </Space>
              </a>
               </Dropdown>

        <Link href="/" className={styles.manu}> 
           <items style={{ margin: "0px 30px", padding: "10px" }} className={styles.list}>      
           PC Builder
           </items>
        </Link>   
      

            <Link href="/login"  className={styles.manu}>
              <items style={{padding: "10px"}}>
                <LoginOutlined style={{margin: "5px"}}/>
                Login
              </items>
            </Link>  

               <items style={{ margin: "0px 30px" }}>
               <button 
               onClick={() => signOut()}
               style={{
                 margin: "5px",
                background:"#1f1f1f", 
                 border:"none", 
                 color: "red",
                 fontSize: "20px",
                cursor: "pointer"
                 }}
                 >
                 <PoweroffOutlined  style={{margin: "5px"}}/>
                 Logout
                 </button>
              </items>



        </Menu>
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
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          BLOGS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        Blogs Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;