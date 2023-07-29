import { Col, Row } from 'antd';
import RootLayout from './components/Layouts/RootLayout';
import Link from 'next/link';
import builder1 from '../assets/images/cpu-2.png';
import builder2 from '../assets/images/ram-3.png';
import builder3 from '../assets/images/board-3.png'
import builder4 from '../assets/images/power-3.png'
import builder5 from '../assets/images/storage-2.png'
import styles  from '@/styles/Home.module.css';
import Image from 'next/image';
import swal from 'sweetalert';


const PcBuilderPage = () => {
    const handlar = () => {
        return (
           swal("Good job!", "successfull !", "success") 
        )
    }
    return (
        <div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                 <div style={{padding:"20px"}}>
                    <button 
                    onClick={(handlar)} 
                    style={{padding:"13px", 
                    background:"#09258c", 
                    color:"white"}}>
                        Complete Build
                    </button>
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

                            <h4>Asustor DRIVESTOR 4 Pro AS3304T 4-Bay NAS</h4> 
                            <h5>8777 &#2547;</h5>
                        </div>

                     <Link href="/cpus/builderCpus">
                       X
                    </Link>
                    </div>
              <hr style={{margin:"30px"}}/>
            
                 <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                    <div>
                        <Image  
                        src={builder2}
                        width={100}
                        height={100}
                        responsive
                        alt="image"/>
                        <h4>Asustor DRIVESTOR 4 Pro AS3304T 4-Bay NAS</h4> 
                        <h5>8777 &#2547;</h5>
                    </div>
                 <Link href="/cpus/builderCpus">
                   X
                </Link>
                </div>
              <hr style={{margin:"30px"}}/>
            
                 <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                    <div>
                        <Image  
                        src={builder3}
                        width={100}
                        height={100}
                        responsive
                        alt="image"/>
                        <h4>Gigabyte X299 AORUS Gaming 3 Motherboard</h4> 
                        <h5>2000 &#2547;</h5>
                    </div>
                 <Link href="/motherboards/builderMotherboard">
                   X
                </Link>
                </div>
              <hr style={{margin:"30px"}}/>
            
                 <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                    <div>
                        <Image  
                        src={builder4}
                        width={100}
                        height={100}
                        responsive
                        alt="image"/>
                        <h4>Cooler Master MWE 450W V2 Non-Modular 80 Plus Bronze Power Supply</h4> 
                        <h5>2555 &#2547;</h5>
                    </div>
                 <Link href="/powers/builderPowers">
                   X
                </Link>
                </div>
                   <hr style={{margin:"30px"}}/>
                     <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                        <div>
                            <Image  
                            src={builder5}
                            width={100}
                            height={100}
                            responsive
                            alt="image"/>

                            <h4>Asustor AS6602T NAS Storage</h4> 
                            <h5>888 &#2547;</h5>
                        </div>

                     <Link href="/storages/builderStorages">
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