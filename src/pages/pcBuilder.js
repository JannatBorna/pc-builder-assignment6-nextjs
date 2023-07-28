import { Col, Row } from 'antd';
import RootLayout from './components/Layouts/RootLayout';
import Link from 'next/link';
import styles  from '@/styles/Home.module.css';

const PcBuilderPage = () => {
    return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                     <hr style={{margin:"30px"}}/>
                    <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                        <h4>CPU / Processor</h4>
                         <Link href="/cpus/builderCpus">
                            <button className={styles.builderBtn}>Choose</button>
                        </Link>
                    </div>
                    <hr style={{margin:"30px"}}/>

                   <div style={{display:"flex", justifyContent:"space-around",}}>
                       <h4>Motherboard</h4>
                        <Link href="/motherboards/builderMotherboards">
                           <button className={styles.builderBtn}>Choose</button>
                       </Link>
                   </div>
                   <hr style={{margin:"30px"}} />
                   <div style={{display:"flex", justifyContent:"space-around",}}>
                       <h4>RAM</h4>
                        <Link href="/rams/builderRams">
                           <button className={styles.builderBtn}>Choose</button>
                       </Link>
                   </div>
                   <hr style={{margin:"30px"}}/>
                   <div style={{display:"flex", justifyContent:"space-around",}}>
                       <h4>Power Supply Unit</h4>
                        <Link href="/powers/builderPowers">
                           <button className={styles.builderBtn}>Choose</button>
                       </Link>
                   </div>
                   <hr style={{margin:"30px"}}/>
                   <div style={{display:"flex", justifyContent:"space-around",}}>
                       <h4>Storage Device</h4>
                        <Link href="/storages/builderStorages">
                           <button className={styles.builderBtn}>Choose</button>
                       </Link>
                   </div>
                   <hr style={{margin:"30px"}}/>
                   <div style={{display:"flex", justifyContent:"space-around",}}>
                       <h4>Monitor</h4>
                        <Link href="/monitors/builderMonitors">
                           <button className={styles.builderBtn}>Choose</button>
                       </Link>
                   </div>
                   <hr style={{margin:"30px"}}/>
                </Col>
            </Row>
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