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
import {BsCpu, BsMotherboard, BsMemory, BsFuelPumpDieselFill, BsUsbDrive } from 'react-icons/bs';
import { MdMonitor } from 'react-icons/md';
import  Router  from 'next/router';


const PcBuilderPage = () => {
    const handlar = () => {
        return (
           swal("Good job!", "successfull !", "success") 
        )
    }
    return (
        <div className={styles.builderPage}>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                 <div style={{padding:"20px"}}>
                    <button 
                    onClick={(handlar)}
                    className={styles.builderBtn}
                    >
                        Complete Build
                    </button>
                 </div>
                                     
                  <hr style={{margin:"30px"}}/>
                
                     <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <div>
                            <Image  
                            src={builder1}
                            width={50}
                            height={50}
                            responsive
                            alt="image"/>
                  
                            <h4>Asustor DRIVESTOR 4 Pro AS3304T 4-Bay NAS</h4> 
                            <h5>8777 &#2547;</h5>
                        </div>
                        
                        <div>  
                         <button className={styles.xbtn}
                         onClick={() => Router.push('/cpus/builderCpus')}
                         > X </button> 
                         </div>
                    </div>
              <hr style={{margin:"30px"}}/>
            
                 <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                    <div>
                        <Image  
                        src={builder2}
                        width={50}
                        height={50}
                        responsive
                        alt="image"/>
                        <h4>Asustor DRIVESTOR 4 Pro AS3304T 4-Bay NAS</h4> 
                        <h5>8777 &#2547;</h5>
                    </div>

                    <div>  
                         <button className={styles.xbtn}
                         onClick={() => Router.push('/cpus/builderCpus')}
                         > X </button> 
                    </div>
                </div>
              <hr style={{margin:"30px"}}/>
            
                 <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                    <div>
                        <Image  
                        src={builder3}
                        width={50}
                        height={50}
                        responsive
                        alt="image"/>
                        <h4>Gigabyte X299 AORUS Gaming 3 Motherboard</h4> 
                        <h5>2000 &#2547;</h5>
                    </div>
                    <div>  
                        <button className={styles.xbtn}
                        onClick={() => Router.push('/cpus/builderCpus')}
                        > X </button> 
                    </div>
                </div>
              <hr style={{margin:"30px"}}/>
            
                 <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                    <div>
                        <Image  
                        src={builder4}
                        width={50}
                        height={50}
                        responsive
                        alt="image"/>
                        <h4>Cooler Master MWE 450W V2 Non-Modular 80 Plus Bronze Power Supply</h4> 
                        <h5>2555 &#2547;</h5>
                    </div>
                    <div>  
                        <button className={styles.xbtn}
                        onClick={() => Router.push('/cpus/builderCpus')}
                        > X </button> 
                    </div>
                </div>
                   <hr style={{margin:"30px"}}/>
                     <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <div>
                            <Image  
                            src={builder5}
                            width={50}
                            height={50}
                            responsive
                            alt="image"/>

                            <h4>Asustor AS6602T NAS Storage</h4> 
                            <h5>888 &#2547;</h5>
                        </div>
                    <div>  
                        <button className={styles.xbtn}
                        onClick={() => Router.push('/cpus/builderCpus')}
                        > X </button> 
                    </div>
                    </div>


                     <hr style={{margin:"30px"}}/>
                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                        <div>
                            <p style={{fontSize:"20px"}}>    
                            <span style={{fontSize:"20px", margin:"20px"}}> <BsCpu/></span>
                               CPU / Processor
                            </p>
                        </div> 

                        <div>
                           <button className={styles.builderBtn}
                           onClick={() => Router.push('/cpus/builderCpus')}
                           >Choose</button>
                        </div>
                    </div>

                    <hr style={{margin:"20px"}}/>

                   <div style={{display:"flex", justifyContent:"space-between"}}>
                       <div>
                           <p style={{fontSize:"20px"}}>    
                           <span style={{fontSize:"20px", margin:"20px"}}> <BsMotherboard/></span>
                              Motherboard
                           </p>
                       </div> 

                       <div>
                          <button className={styles.builderBtn}
                          onClick={() => Router.push('/motherboards/builderMotherboards')}
                          >Choose</button>                        
                       </div>
                   </div>

                   <hr style={{margin:"30px"}} />

                   <div style={{display:"flex", justifyContent:"space-between",}}>

                       <div>
                           <p style={{fontSize:"20px"}}>    
                           <span style={{fontSize:"20px", margin:"20px"}}> <BsMemory/></span>
                              RAM
                           </p>
                       </div>     
                       <div>
                            <button className={styles.builderBtn}
                           onClick={() => Router.push('/rams/builderRams')}        
                           >Choose</button>
                       </div>                    
                   </div>

                   <hr style={{margin:"30px"}}/>

                   <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                           <p style={{fontSize:"20px"}}>    
                           <span style={{fontSize:"20px", margin:"20px"}}> <BsFuelPumpDieselFill/></span>
                              Power Supply Unit
                           </p>
                       </div>     
                       <div>
                           <button className={styles.builderBtn}
                          onClick={() => Router.push('/powers/builderPowers')}
                          >Choose</button>                       
                       </div>
                   </div>

                   <hr style={{margin:"30px"}}/>

                   <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                           <p style={{fontSize:"20px"}}>    
                           <span style={{fontSize:"20px", margin:"20px"}}> <BsUsbDrive/></span>
                              Storages Device
                           </p>
                       </div>   
                       <div>
                           <button className={styles.builderBtn}
                           onClick={() => Router.push('/storages/builderStorages')}
                           >Choose</button>                        
                       </div>                              
                   </div>

                   <hr style={{margin:"30px"}}/>

                   <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div>
                           <p style={{fontSize:"20px"}}>    
                           <span style={{fontSize:"20px", margin:"20px"}}> <MdMonitor/></span>
                              Monitor
                           </p>
                       </div>                     
                       <div>
                           <button className={styles.builderBtn}
                           onClick={() => Router.push('/monitors/builderMonitors')}           
                           >Choose</button>
                       </div>
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