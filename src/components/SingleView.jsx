import PropTypes from 'prop-types';

const SingleView = (props) => {
  const { setSelectedItem,selectedItem} = props;
  const handleClick = () => {
    setSelectedItem(null);
  }
  return (
    <>
      <dialog open = {selectedItem ? true : false}>
        <p>
          <button onClick={handleClick}>Close</button>
        </p>
        {selectedItem && (
          <img src={selectedItem.filename} alt={selectedItem.title} />
          )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired
};


export default SingleView;
