import Head from "next/head";
import RootLayout from '../components/Layouts/RootLayout';

const PowerHomePage = () => {
  return (
    <div>
        <>
     <Head>
       <title>Powers PC_Builder</title>
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

export default PowerHomePage;
PowerHomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching
export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/api/powers")
  const data = await res.json();

  return{
  props :{
    powers: data.data,
  },
   revalidate: 10,
  };
};
