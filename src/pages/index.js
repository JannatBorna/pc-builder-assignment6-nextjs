import Head from 'next/head';
import RootLayout from "./components/Layouts/RootLayout";

const HomePage = () => {
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
