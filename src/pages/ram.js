import RootLayout from './components/Layouts/RootLayout';

const RamPage = () => {
    return (
        <div>
            <h2>RAM page</h2>
        </div>
    );
};

export default RamPage;

RamPage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}