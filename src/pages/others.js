import RootLayout from './components/Layouts/RootLayout';

const OthersPage = () => {
    return (
        <div>
            <h2>Others Page</h2>
        </div>
    );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}