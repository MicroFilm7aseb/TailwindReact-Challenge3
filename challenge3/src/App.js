import './App.css';
import image from './image-equilibrium.jpg';
import Eth from './Eth';
import Clock from './Clock';
import guy from './image-avatar.png';

function App() {
  return (
    <div className='bg-background h-screen'>
      <div className='container  mx-auto '>
        <div className='grid place-items-center h-screen'>
          <div className='p-6 bg-[#15273F] rounded-xl drop-shadow-md shadow-lg'>
            <div className=' hover:cursor-pointer hover:opacity'>
              <img
                src={image}
                alt='ss'
                className='h-[300px] w-[300px] rounded-xl  z-0'
              />
           

              
            </div>

            <div className='font-Outfit text-white text-xl pt-6 hover:text-[#18DDDF] hover:cursor-pointer '>
              Equilibrium #3429
            </div>
            <p className='text-lg opacity-30 pt-4 text-white font-Outfit break-words w-[290px]'>
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div className='flex pt-4 flex-row justify-between  border-b-[1px] border-b-gray-400 '>
              <div className='text-[#00FDFA] font-Outfit font-semibold flex  mb-5'>
                <Eth />
                <p className='ml-2 '>0.041 ETH</p>
              </div>

              <div className='opacity-50 text-white flex font-Outfit '>
                <Clock />
                <p>3 Days Left</p>
              </div>
            </div>
            <div className='mt-3 flex relative'>
              <div>
                <img
                  src={guy}
                  alt=''
                  className='h-10 w-10 rounded-full border'
                />
              </div>

              <div>
                <p className='text-white ml-2 p-2 flex'>
                  <p className='opacity-50 '>Creation of </p>
                  <p className='ml-1 hover:cursor-pointer hover:text-[#18DDDF]'>
                    {' '}
                    Jules Wyvren
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
