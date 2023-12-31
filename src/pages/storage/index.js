import Head from "next/head";
import RootLayout from '../components/Layouts/RootLayout';

const StoragesHomePage = () => {
  return (
    <div>
        <>
     <Head>
       <title>Storages PC_Builder</title>
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

export default StoragesHomePage;
StoragesHomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching
export const getStaticProps = async () =>{
  const res = await fetch("https://pc-builder-iota.vercel.app/api/storages")
  const data = await res.json();

  return{
  props :{
    storages: data.data,
  },
   revalidate: 10,
  };
};
