import Head from "next/head";
import RootLayout from '../components/Layouts/RootLayout';

const OthersHomePage = () => {
  return (
    <div>
        <>
     <Head>
       <title>Others PC_Builder</title>
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

export default OthersHomePage;
OthersHomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching
export const getStaticProps = async () =>{
  const res = await fetch("https://pc-builder-iota.vercel.app/api/others")
  const data = await res.json();

  return{
  props :{
    others: data.data,
  },
   revalidate: 10,
  };
};
