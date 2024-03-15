
import PropTypes from 'prop-types';

const Sidebar = ({sidebar}) => {
  return (
    <div className=' w-[40%] bg-slate-300'>
      <h1>hello from side bar</h1>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar:PropTypes.object.isRequired
};

export default Sidebar;