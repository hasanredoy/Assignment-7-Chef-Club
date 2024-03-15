import PropTypes from 'prop-types';

const MainFunc = ({mainPart}) => {
  console.log(mainPart);
  return (
    <div className=' w-[60%] bg-black'>
      <h1>from main</h1>
    </div>
  );
};

MainFunc.propTypes = {
  mainPart:PropTypes.object
};

export default MainFunc;