import React, {useState} from 'react';
import './App.css';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
//import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img7 from './images/img7.jpeg';

import { Button,Modal } from 'react-bootstrap';




function App() {
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  return (
    <div className="gallery min-vh-100">
        <div className="container-lg">
           <div className="row  gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                
                <div className="col">
                   <img src={img1} alt="img1" className="gallery-item"/>
                </div>
                <div className="col">
                   <img src={img2} alt="img2" className="gallery-item"/>
                </div>
               
                <div className="col">
                   <img src={img4} alt="img4" className="gallery-item"/>
                </div>
                <div className="col">
                   <img src={img5} alt="img5" className="gallery-item"/>
                </div>
               
                <div className="col">
                   <img src={img7} alt="img7" className="gallery-item"/>
                </div>
             </div>
        </div>
        <center>
        <Button variant="primary" onClick={handleShow} >
        Launch demo modal
        </Button>
        </center>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img1} alt="img1" className="modal-img"/>
          
        </Modal.Body>
        
        
      </Modal>
      
     
    

    </div>
  );
}

export default App;
