import React, { useState } from 'react';
import '../Section2ContactPage/Section2Contact.css';

const Section2Contact = () => {
    
    const [formData, setFormData] = useState({
        firstline: '',
        secondline: '',
        thirdline: '',
        fourdline: '',
    });

    // Att the values of formData
    const attInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Att the keys and value
        });
    };

    // Função para enviar os dados do formulário
    const attSubmit = async (e) => {
        e.preventDefault(); // No reload

        try {
            // Send datas to the backend
            const response = await fetch('http://localhost:3002', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // datas to json
            });

            if (response.ok) {
                 await response.json(); // Process the response of backend
                alert(`Your message was receive in my DB and send to my personal e-mail inbox! ${formData.firstline}, I will respond as soon as I can! `);
                setFormData({
                    firstline: '',
                    secondline: '',
                    thirdline: '',
                    fourdline: '',
                });
                window.location.reload();
            } else {
                alert('Error to send the message. Please, try again!');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div className='all-section2-Contact'>
            <div className='form-container'>
                <form onSubmit={attSubmit} className='form'>
                    <input
                        type="text"
                        name="firstline"
                        placeholder="Name and Surname"
                        className='firstline'
                        value={formData.firstline}
                        onChange={attInputChange} // Att the state 
                        required
                    />
                    <input
                        type="text"
                        name="secondline"
                        placeholder="Number or @SocialMedia Profile"
                        className='secondline'
                        value={formData.secondline}
                        onChange={attInputChange} 
                        required
                    />
                    <input
                        type="text"
                        name="thirdline"
                        placeholder="Reason for Contact"
                        className='thirdline'
                        value={formData.thirdline}
                        onChange={attInputChange} 
                        required
                    />
                    <textarea
                        name="fourdline"
                        placeholder="Description"
                        className='fourdline'
                        value={formData.fourdline}
                        onChange={attInputChange} 
                        required
                    />
                    <button type="submit" className='btn'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Section2Contact;