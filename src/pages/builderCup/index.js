import Head from "next/head";
import RootLayout from '../components/Layouts/RootLayout';

const BuilderCupsHome = () => {
  return (
    <div>
        <>
     <Head>
       <title>Builder Cpus home</title>
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

export default BuilderCupsHome;
BuilderCupsHome.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-iota.vercel.app/api/cpus"); // mongobd
  const data = await res.json();
  console.log(data);

  return {
    props:{
      cpus: data.data, 
    },
  };
};