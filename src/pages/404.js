import Image from "next/image";
import error from '@/assets/images/404_error.png'
import Head from 'next/head';
import styles from "@/styles/error.module.css";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import  Router  from "next/router";

const NotFoundPage = () => {

    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 4000)

    return (
        <div style={{textAlign: "center"}}>
            <Head>
                <title>pc-builder-page-404 not found</title>
                <meta name="description" content="This is nextJS  work" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image 
            src={error}
            alt='error_image'
            style={{display:'flex', margin: '50px auto'}}
            width={500}
            />
            
            <button className={styles.btn}
            onClick={() => Router.push('/')}
            ><ArrowLeftOutlined /> Back To Home</button>
        </div>
    );
};

export default NotFoundPage;