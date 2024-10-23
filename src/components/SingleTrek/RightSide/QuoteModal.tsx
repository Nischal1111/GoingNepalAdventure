"use client"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input, Textarea } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    text: string;
    trekTitle: string | undefined;
}

const QuoteModal: React.FC<modalProps> = ({ isOpen, onClose, text,trekTitle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState(text);

    useEffect(() => {
        if (isOpen) {
            setMessage(text);
        }
    }, [isOpen, text]);

    const handleSubmit = () => {
        const formData = {
            name,
            email,
            number,
            message
        };
        console.log("Form Data Submitted:", formData);
        onClose(); 
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} size='2xl'>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {text.includes('customize') ? 'Customize Trek Form' : 'Get Quote Form'}: {trekTitle}
                        </ModalHeader>
                        <ModalBody>
                            <p>Please fill out the form below:</p>
                            <Input 
                                label="Name" 
                                placeholder="Enter your name" 
                                fullWidth 
                                radius='sm'
                                isRequired
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input 
                                label="Email" 
                                placeholder="Enter your email" 
                                fullWidth 
                                radius='sm'
                                isRequired
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input 
                                label="Number" 
                                placeholder="Enter your phone number" 
                                fullWidth 
                                radius='sm'
                                isRequired
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            <Textarea
                                label="Message"
                                placeholder="Enter your message"
                                fullWidth
                                radius='sm'
                                isRequired
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                minRows={4}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose} className='rounded-sm'>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleSubmit} className='rounded-md'>
                                Submit
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default QuoteModal;
