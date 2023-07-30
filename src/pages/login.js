import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import RootLayout from './components/Layouts/RootLayout';
import { Col, Row, } from 'antd';



const LoginPage = () => {


  return (
    <div>
      <Head>
        <title>pc builder Login</title>
      </Head>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
      <div className={styles.login}>
        <h3 style={{borderBottom: "1px solid white"}}>LOGIN NOW</h3>
        <button 
            className={styles.social_icons}
           onClick={() => signIn("github", {
           callbackUrl: "https://pc-builder-iota.vercel.app/"
           })
           }>
          <GithubOutlined
          /> Github   
        </button>
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}