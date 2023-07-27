import RootLayout from './components/Layouts/RootLayout';

const StorageDevicePage = () => {
    return (
        <div>
            <h2>Storage Device page</h2>
        </div>
    );
};

export default StorageDevicePage;

StorageDevicePage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}