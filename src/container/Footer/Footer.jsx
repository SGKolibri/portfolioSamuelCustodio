// import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
    // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    // const [loading, setLoading] = useState(false);

    // const { username, email, message } = formData;

    // const handleChangeInput = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = () => {
    //     setLoading(true);

    //     const contact = {
    //         _type: 'contact',
    //         name: formData.username,
    //         email: formData.email,
    //         message: formData.message,
    //     };

    //     client.create(contact)
    //         .then(() => {
    //             setLoading(false);
    //             setIsFormSubmitted(true);
    //         })
    //         .catch((err) => console.log(err));
    // };

    return (
        <>
            <div className='flex flex-col items-center'>
                <h2 className="head-text text-white">Converse comigo</h2>
                <div className="w-3/5 flex justify-center items-center m-4 mt-16 mx-8 mb-8">
                    <div className="min-w-[290px] items-center flex flex-row justify-center m-4 my-4 py-4 rounded-lg cursor-pointer bg-[#ffffff] transition-all duration-300 ease-in-out sm:w-full">
                        <img src={images.email} className="w-10 h-10 m-0 mr-2.5" alt="email" />
                        <a href="mailto:samuelcustodioes@gmail.com" className="font-semibold no-underline mr-3">samuelcustodioes@gmail.com</a>
                    </div>
                    <div className="min-w-[290px] items-center flex flex-row justify-center m-4 my-4 py-4 rounded-lg cursor-pointer bg-[#ffffff] transition-all duration-300 ease-in-out sm:w-full">
                        <img src={images.mobile} className="w-10 h-10 m-0 mr-2.5" alt="phone" />
                        <a href="tel:+55 (62) 995047887" className="font-semibold no-underline">+55 (62) 995047887</a>
                    </div>
                </div>

            </div >
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__blackbg',
);