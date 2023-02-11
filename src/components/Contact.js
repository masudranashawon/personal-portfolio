import { useRef } from "react";
import { useFormControlReveal } from "../hooks/gsap";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const formRef = useRef(null);
  const formCtrl1Ref = useRef(null);
  const formCtrl2Ref = useRef(null);
  const formCtrl3Ref = useRef(null);
  const formCtrl4Ref = useRef(null);

  const formCtrlsRef = [formCtrl1Ref, formCtrl2Ref, formCtrl3Ref, formCtrl4Ref];

  useFormControlReveal(formCtrlsRef);

  const sendMail = (e) => {
    e.preventDefault();

    //Email JS integration
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          toast("Message send successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        () => {
          toast.error("Message failed! Try again letter", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );

    //Rest
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".massage").value = "";
  };

  return (
    <div className='contact container mx-auto mt-40' id='contact'>
      <SectionTitle title={"Let's Talk"} />

      <form
        onSubmit={sendMail}
        className='mt-40 grid grid-cols-2 gap-20'
        ref={formRef}
      >
        <div className='form-control overflow-hidden' ref={formCtrl1Ref}>
          <input
            type='text'
            name='fullname'
            placeholder='Write your name'
            required
            className='fullname bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden' ref={formCtrl2Ref}>
          <input
            type='email'
            name='email'
            placeholder='Write your email'
            required
            className='email bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden' ref={formCtrl3Ref}>
          <textarea
            name='message'
            placeholder='Write your message'
            required
            rows='1'
            cols='30'
            className='massage bg-transparent border border-white/20 py-16 px-28 rounded-full tracking-widest outline-none w-full resize-none focus:border-cyan-400 duration-500'
          />
        </div>
        <div className='form-control overflow-hidden' ref={formCtrl4Ref}>
          <input
            type='submit'
            value='Send message'
            className='submit uppercase bg-transparent border border-white/20 py-16 px-28 rounded-full outline-none tracking-widest w-full hover:bg-cyan-400/20 hover:border-cyan-400/20  duration-500'
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
