
import PropTypes from 'prop-types';

const Sidebar = ({sidebar}) => {
  return (
    <div className=' w-[90%] mt-10 lg:mt-0 mx-auto lg:w-[40%] bg-gray-100 rounded-xl border border-gray-600 h-full'>
      <h1 className=' text-center pt-2 lg:pt-5 font-bold text-2xl lg:text-4xl'>Want To Cook: <span>0</span></h1>
      <div className="divider"></div>
      <div className=' pr-12 flex justify-evenly'>
        <h3>Name </h3> 
        <h3>Time </h3> 
        <h3>Calories </h3> 
      </div>
      <div>

      </div>
      <h1 className=' text-center pt-2 lg:pt-10 font-bold text-2xl lg:text-4xl'>Currently Cooking: <span>0</span></h1>
      <div className="divider"></div>
      <div className=' flex justify-evenly'>
        <h3>Name </h3> 
        <h3>Time </h3> 
        <h3>Calories </h3> 
      </div>
      <div className="divider"></div>
      <div className=' flex justify-evenly'>
        <h3>Total Time=  </h3>  
        <h3>Total Calories= </h3> 
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar:PropTypes.object.isRequired
};

export default Sidebar;