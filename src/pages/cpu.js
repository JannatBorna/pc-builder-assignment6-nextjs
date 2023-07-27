import RootLayout from './components/Layouts/RootLayout';

const CpuPage = () => {
    return (
        <div>
            <h2>Cpu Page</h2>
        </div>
    );
};

export default CpuPage;

CpuPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}