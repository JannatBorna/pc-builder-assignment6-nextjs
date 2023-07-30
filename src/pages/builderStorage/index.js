import Head from "next/head";
import RootLayout from '../components/Layouts/RootLayout';

const BuilderStorageHome = () => {
  return (
    <div>
        <>
     <Head>
       <title>Builder Ram Home</title>
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

export default BuilderStorageHome;
BuilderStorageHome.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching

export const getServerSideProps = async () => {
    const res = await fetch ("https://pc-builder-iota.vercel.app/api/rams");
    const data = await res.json();

    return{
        props: {
            rams: data.data,
        }
    }
};