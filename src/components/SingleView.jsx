import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const SingleView = (props) => {
  const { setSelectedItem,selectedItem} = props;
  const modal = useRef(null);
  const handleClick = () => {
    setSelectedItem(null);
  }

  useEffect(() => {
    if(selectedItem){
      modal.current.showModal();
    }else{
      modal.current.close();
    }
  }, [selectedItem]);
  return (
    <>
      <dialog ref={modal}>
        <p>
          <button onClick={handleClick}>Close</button>
        </p>
        {selectedItem && (
          <>
          {selectedItem.media_type.includes('video') ? (
          <video controls>
          <source src={selectedItem.filename} type= {selectedItem.media_type} />
          </video>

          ):(
          <img src={selectedItem.filename} alt={selectedItem.title} />
          )}
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.desription}</p>
          <p>{new Date(selectedItem.created_at).toLocaleString('fi-FI')}</p>
          <p>{selectedItem.filesize}</p>
          <p>{selectedItem.media_type}</p>
        </>
        )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  useRef: PropTypes.func
};


export default SingleView;
