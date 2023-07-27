import RootLayout from './components/Layouts/RootLayout';

const PowerSupplyPage = () => {
    return (
        <div>
            <h2>Power Supply page</h2>
        </div>
    );
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}