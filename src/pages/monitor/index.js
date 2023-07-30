import Head from 'next/head';
import RootLayout from '../components/Layouts/RootLayout';

const MonitorHomePage = () => {
  return (
    <div>
        <>
     <Head>
       <title>Monitor PC_Builder</title>
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

export default MonitorHomePage;
MonitorHomePage.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

// data fetching
export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:3000/api/monitors")
  const data = await res.json();

  return{
  props :{
    monitors: data.data,
  },
   revalidate: 10,
  };
};
