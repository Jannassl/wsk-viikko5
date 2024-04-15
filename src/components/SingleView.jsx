import PropTypes from 'prop-types';

const SingleView = (props) => {
  const {setSelectedItem} = props;
  return (
    <>
      {setSelectedItem && (
      <img src={setSelectedItem.filename} alt={setSelectedItem.title} />
      )}
    </>
  );
};

SingleView.propTypes = {
  setSelectedItem: PropTypes.func.isRequired
};


export default SingleView;
