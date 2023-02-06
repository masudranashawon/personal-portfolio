import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendMail = (e) => {
    e.preventDefault();

    //Email JS integration

    //Rest
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".massage").value = "";
  };

  return (
    <div className='contact container mx-auto mt-40' id='contact'>
      <SectionTitle title={"Contact"} />

      <form onSubmit={sendMail} className='mt-40 grid grid-cols-2 gap-20'>
        <div className='form-control overflow-hidden'>
          <input
            type='text'
            name='fullname'
            placeholder='Write your name'
            required
            className='fullname bg-transparent border border-white/20 py-16 px-28 rounded-full outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden'>
          <input
            type='email'
            name='email'
            placeholder='Write your email'
            required
            className='email bg-transparent border border-white/20 py-16 px-28 rounded-full outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden'>
          <textarea
            name='massage'
            placeholder='Write your massage'
            required
            rows='1'
            cols='30'
            className='massage bg-transparent border border-white/20 py-16 px-28 rounded-full outline-none w-full resize-none focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden'>
          <input
            type='submit'
            value='Send massage'
            className='submit uppercase bg-transparent border border-white/20 py-16 px-28 rounded-full outline-none w-full hover:bg-cyan-400/20 hover:border-cyan-400/20  duration-500'
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
