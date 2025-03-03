import React, { useState } from 'react';
import '../Section2ContactPage/Section2Contact.css';

const Section2Contact = () => {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        firstline: '',
        secondline: '',
        thirdline: '',
        fourdline: '',
    });

    // Função para atualizar o estado quando o usuário digita
    const attInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Atualiza o campo correspondente
        });
    };

    // Função para enviar os dados do formulário
    const attSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        try {
            // Envia os dados para o backend
            const response = await fetch('http://localhost:3002', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData), // Converte os dados para JSON
            });

            if (response.ok) {
                const result = await response.json(); // Processa a resposta do backend
                alert(result.message); // Exibe a mensagem de sucesso
            } else {
                alert('Erro ao enviar dados.');
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
                        onChange={attInputChange} // Atualiza o estado
                    />
                    <input
                        type="text"
                        name="secondline"
                        placeholder="Number or @SocialMedia Profile"
                        className='secondline'
                        value={formData.secondline}
                        onChange={attInputChange} // Atualiza o estado
                    />
                    <input
                        type="text"
                        name="thirdline"
                        placeholder="Reason for Contact"
                        className='thirdline'
                        value={formData.thirdline}
                        onChange={attInputChange} // Atualiza o estado
                    />
                    <textarea
                        name="fourdline"
                        placeholder="Description"
                        className='fourdline'
                        value={formData.fourdline}
                        onChange={attInputChange} // Atualiza o estado
                    />
                    <button type="submit" className='btn'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Section2Contact;