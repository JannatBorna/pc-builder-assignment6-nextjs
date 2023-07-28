import Head from 'next/head';
import RootLayout from "./components/Layouts/RootLayout";
import Banner from './components/UI/Banner';
import AllProductsPage from './ allProducts';

const HomePage = ({allProducts}) => {
  return (
    <div>
        <>
     <Head>
       <title>PC_Builder</title>
       <meta
         name="description"
         content="This is PC_Builder website made by next-js"
       />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <Banner />
     <AllProductsPage allProducts = {allProducts}/>
     
   </>
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching
export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:5000/products")
  const data = await res.json();
  console.log(data);
  return{
  props :{
    allProducts: data,
  }
  }
}
