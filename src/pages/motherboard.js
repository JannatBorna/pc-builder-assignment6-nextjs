import RootLayout from './components/Layouts/RootLayout';


const MotherboardPage = () => {
    return (
        <div>
            <h2>Motherboard page</h2>
        </div>
    );
};

export default MotherboardPage;

MotherboardPage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}