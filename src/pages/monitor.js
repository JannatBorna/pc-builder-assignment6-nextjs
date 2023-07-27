import RootLayout from './components/Layouts/RootLayout';


const MonitorPage = () => {
    return (
        <div>
            <h2>Monitor Page</h2>
        </div>
    );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page){
    return(
        <RootLayout > 
          {page}
        </RootLayout>
    )
}