"use client"
import { postQuotes } from '@/services/quote';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input, Textarea } from '@nextui-org/react'
import { useMutation } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner';

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    text: string;
    trekTitle: string | undefined;
    slug:string|undefined
    type:string|undefined
}

const QuoteModal: React.FC<modalProps> = ({ isOpen, onClose, text,trekTitle,slug,type }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState(text);

    useEffect(() => {
        if (isOpen) {
            setMessage(text);
        }
    }, [isOpen, text]);

    const {mutate:postQuotesMutation}=useMutation({
        mutationFn:(data:any)=>postQuotes(data), //eslint-disable-line @typescript-eslint/no-explicit-any   
        onSuccess:()=>{
            toast.success('Your quote has been sent successfully.')
            setName('')
            setEmail('')
            setNumber('')
            onClose(); 
        },
        onError:()=>{
            toast.error('Failed to send your quote.')
        }
    })

    const handleSubmit = () => {
        const formData = {
            name,
            email,
            number,
            message,
            requestType:text.includes('customize') ? 'customize' : 'quote',
            itemSlug:slug,
            itemName:trekTitle,
            itemType:type
        };
        postQuotesMutation(formData);
        
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
                            <form action="" className='flex flex-col gap-4'>
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
                            </form>
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
