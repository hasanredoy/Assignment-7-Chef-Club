
import PropTypes from 'prop-types';

const Cooking = ({cooking}) => {
  console.log(cooking);
  return (
    <div>
      {
        cooking.map((coking ,index) =>{
          return(
            <div key={coking.recipe_id} className=''>
            
            <div className=' flex justify-evenly bg-white rounded-xl px-2 py-4  mb-2 pr-20'>
               <h2 >{index+1}.</h2>
               
                <h2 className='pr-10'>{coking.recipe_name}</h2>
                <h2  className='pr-16'>{coking.preparing_time}</h2>
                <h2 className=' lg:pl-12'>{coking.calories} </h2>
               
              </div>
              </div>
          )
        })
            
      }
    </div>
  );
};

Cooking.propTypes = {
  cooking:PropTypes.array
};

export default Cooking;