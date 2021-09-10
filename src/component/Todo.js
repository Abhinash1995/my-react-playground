import { useState } from 'react'
import Backdrop from './BackDrop';
import Modal from './Modal';


function Todo(props){

    const [showModal, setShowModal] = useState(false);

    function showModalHandler() {
        setShowModal(true);
      }

    function closeModalHandler() {
        setShowModal(false);
      }

    return (
        <div className='card'>
          <h2>{props.name}</h2>
          <div className='actions'>
            <button className='btn' onClick = {showModalHandler}>
              Delete
            </button>
          </div>
          {/* conditional render */}
          {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
          {showModal && <Backdrop onClick={closeModalHandler} />}
        </div>
      );
}
export default Todo;