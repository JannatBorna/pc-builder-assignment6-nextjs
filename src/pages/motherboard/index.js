import Head from "next/head";
import RootLayout from '../components/Layouts/RootLayout';

const MotherboardsHomePage = () => {
  return (
    <div>
        <>
     <Head>
       <title>Motherboards PC_Builder</title>
       <meta
         name="description"
         content="This is PC_Builder website made by next-js"
       />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="/favicon.ico" />
     </Head>
     
   </>
    </div>
  );
};

export default MotherboardsHomePage;
MotherboardsHomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching
export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/api/motherboards")
  const data = await res.json();

  return{
  props :{
    motherboards: data.data,
  },
   revalidate: 10,
  };
};
