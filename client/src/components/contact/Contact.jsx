import React, {useState, useEffect} from 'react'
import { sendContact } from '../../api/Contact';
import './Contact.css'

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (messageSent && !e.target.closest('.success-message')) {
        setMessageSent(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [messageSent]);
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await sendContact(formData);
        console.log('Message sent sucessfully:', response.data)

        setMessageSent(true);

        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setErrors({});
      } catch (error) {
        console.error('error seding message:', error);
      }
    }
  };
  const handleOkClick = () => {
    setMessageSent(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className='contact'>
        <div className='contact-container'>
        {messageSent && (
              <div className='success-message'>
                <p>Message sent sucessfully</p>
                <button className='btn-ok' onClick={handleOkClick}>Ok</button>
              </div>  
            )}
          <div>
            <p className='contact-header'>Contact!!!</p>
            <p>If you have any questions,
              feedback, or just want to chat, feel free to use the messaging feature on this contact page. I look forward to hear from you!</p>
          </div>
          <div className='contact-box'>
            <form onSubmit={handleSubmit}>
              <div className='inputBox'>
                <label>Name:</label>
                {errors.name && <span className="error">{errors.name}</span>}
                <input type='text' name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className='inputBox'>
                <label>Email address:</label>
                {errors.email && <span className="error">{errors.email}</span>}
                <input type='email' name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className='inputBox'>
                <label>Message:</label>
                {errors.message && <span className="error">{errors.message}</span>}
                <textarea name="message" value={formData.message} onChange={handleChange} />
              </div>
              <div>
                <button type='submit' className='send-btn'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
