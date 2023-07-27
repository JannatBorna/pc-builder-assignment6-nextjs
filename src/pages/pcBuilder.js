import RootLayout from './components/Layouts/RootLayout';

const PcBuilderPage = () => {
    return (
        <div>
            <h2>PC Builder page</h2>
        </div>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page){
    return(
        <RootLayout> 
          {page}
        </RootLayout>
    )
}