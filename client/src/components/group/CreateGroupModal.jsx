import React from 'react';
import Modal from '../common/Modal.jsx';
import CreateGroupForm from './CreateGroupForm.jsx';
import Loader from '../loaders/Loader.jsx';


const CreateGroupModal = ({
  group, onChange, onSubmit, groupIsLoading
}) => {
  const modalButtonClass = 'btn waves-effect waves-light purple darken-4 white-text modal-trigger';
  const modalButtonText = 'New Group';


  return (
    <div>
      <div>
          <Modal
            modalButtonClass={ modalButtonClass }
            modalButtonText={ modalButtonText }>

            { groupIsLoading ? <Loader/> : '' }


            <div className="row">
              <div className="col s10 offset-s1">
                  <h3>New Group</h3><br/>
                  <CreateGroupForm
                    group = { group }
                    onChange = { onChange }
                    onSubmit = { onSubmit }/>
              </div>
            </div>


          </Modal>
      </div>
    </div>

  );
};

export default CreateGroupModal;
