import { Col, Row } from 'antd';
import RootLayout from './components/Layouts/RootLayout';
import Link from 'next/link';
import builder1 from '../assets/images/cpu-2.png'
import builder2 from '../assets/images/ram-3.png'
import styles  from '@/styles/Home.module.css';
import Image from 'next/image';


const PcBuilderPage = () => {
    return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                 
                                     
                  <hr style={{margin:"30px"}}/>
                
                     <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                        <div>
                            <Image  
                            src={builder2}
                            width={100}
                            height={100}
                            responsive
                            alt="image"/>

                            <h2>Asustor DRIVESTOR 4 Pro AS3304T 4-Bay NAS</h2> 
                            <h2>8777 &#2547;</h2>
                        </div>

                     <Link href="/cpus/builderCpus">
                       X
                    </Link>
                    </div>
                   <hr style={{margin:"30px"}}/>
                     <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                        <div>
                            <Image  
                            src={builder1}
                            width={100}
                            height={100}
                            responsive
                            alt="image"/>

                            <h2>Revenger VP 350 Watt Power Supply</h2> 
                            <h2>4242 &#2547;</h2>
                        </div>

                     <Link href="/rams/builderRams">
                       X
                    </Link>
                    </div>


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