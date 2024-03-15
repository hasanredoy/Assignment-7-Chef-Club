
import PropTypes from 'prop-types';

const Main = ({mainPart}) => {
  console.log(mainPart);
  return (
    <div>
      <h1>from main</h1>
    </div>
  );
};

Main.propTypes = {
  mainPart:PropTypes.object
};

export default Main;