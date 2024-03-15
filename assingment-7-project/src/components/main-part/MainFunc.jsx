import PropTypes from 'prop-types';

const MainFunc = ({ cards }) => {
  console.log(cards);
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 w-[65%] '>
      {
        cards.map(card => {
           return (
            <div key={card.recipe_id} className="card  bg-base-200 shadow-xl p-4 border border-gray-400">
              <figure><img className=' h-[252px]' src={card.recipe_image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{card.recipe_name}</h2>
                <p>{card.short_description}</p>
                <div className="divider"></div>
                <div className=''>
                <h2 className="card-title font-bold">Ingredients: 6</h2>
                <ul className=' list-disc'>
                  <li>{card.ingredients[0]}</li>
                  <li>{card.ingredients[1]}</li>
                  <li>{card.ingredients[2]}</li>
                  <li>{card.ingredients[3]}</li>
                  <li>{card.ingredients[4]}</li>
                  <li>{card.ingredients[5]}</li>
                </ul>
                </div>
                <div className=" divider"></div>
                <div>
                  
                </div>
                <div className="card-actions justify-start">
                  <button className=" rounded-full btn bg-[#0BE58A]">Want To Cook</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

MainFunc.propTypes = {
  cards: PropTypes.object
};

export default MainFunc;