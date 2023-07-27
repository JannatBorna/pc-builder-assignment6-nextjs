import RootLayout from "./components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h2>Home page</h2>
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
