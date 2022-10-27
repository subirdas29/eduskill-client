import React from 'react';




const Home = () => {
    return (
     
  <div className='min-h-screen  min-w-full bg-cover ' style={{backgroundImage: "url('https://i.ibb.co/DGPFDwH/bg-01.png')" }}>
<div className='flex sm:flex-col md:flex-col lg:flex-row md:mx-auto p-10'>
<div className='w-1/2 sm:w-full md:w-full  my-auto mx-auto '>
<p className='text-white font-extrabold text-6xl my-6 '>Discover 4500+ Courses from top <span className='text-[#00FF84] text-7xl'>Instructor</span> Around the World</p>
<p className='text-white my-6'>Take your learning organization to the next level. to the next level. Who'll share their knowledge to people around the world.</p>
<div>
<button className='px-5 py-4 bg-[#6440FB] hover:bg-[#00FF84] hover:text-black rounded text-white mr-3' >Join Now</button>
<button className='px-5 py-4 bg-[#00FF84] hover:bg-[#6440FB] text-black hover:text-white rounded'>View All Course</button>
</div>
</div>
<div className='w-1/2 mt-6 mx-auto'>
  <img src="https://i.ibb.co/Qv2fF5f/Untitled-1.png" alt="" />
</div>
</div>
</div>
 
     
    );
};

export default Home;