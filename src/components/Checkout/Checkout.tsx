"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FiUser } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { BookingDetails, clearBookingDetails, getBookingDetails } from '@/utility/BookingStorageHandler';
import { useMutation } from '@tanstack/react-query';
import { checkout } from '@/services/checkout';
import Loader from '@/shared/Loader';
import { toast } from 'sonner';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const {mutate:checkoutMutation}=useMutation({
    mutationFn:(data:any)=>checkout(data),
    onSuccess:()=>{
      toast.success('Your booking has been submitted successfully.')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',       
      })
      clearBookingDetails();
      router.push('/')
    },
    onError:(error:any)=>{
      console.log(error)
    } 
    })

  useEffect(() => {
    // Get booking details from localStorage on client-side
    // Using setTimeout to ensure this runs after component mounts
    const loadBookingDetails = () => {
      const details = getBookingDetails();
      setBookingDetails(details);
      setLoading(false);
    };
    
    // Use setTimeout to ensure this runs client-side
    setTimeout(loadBookingDetails, 0);
  }, []);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (!bookingDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <CardBody>
            <p className="mb-4">No booking details found. Please return to the trek or tour page and try booking again.</p>
            <Button color="primary" onPress={() => router.push('/')}>Return to Home</Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (error) {
      return 'Invalid date';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    checkoutMutation({
      ...formData,
      ...bookingDetails
    })
  };

  const renderExtraServices = () => {
    const { soloStandard, extraServices, adventureType, quantity } = bookingDetails;
    
    if (adventureType === 'Tour') {
      return (
        <>
          {extraServices === 'private_tour' && (
            <div className="flex justify-between text-gray-600">
              <span>Solo Private Tour</span>
              <span>+$100</span>
            </div>
          )}

          {extraServices === 'four_star' && (
            <div className="flex justify-between text-gray-600">
              <span>4 Star Accommodation (9 Nights)</span>
              <span>+${150 * (quantity || 1)}</span>
            </div>
          )}

          {extraServices === 'five_star' && (
            <div className="flex justify-between text-gray-600">
              <span>5 Star Accommodation (9 Nights)</span>
              <span>+${200 * (quantity || 1)}</span>
            </div>
          )}
          
          {soloStandard === 'four_star' && (
            <div className="flex justify-between text-gray-600">
              <span>4 Star Solo Stay</span>
              <span>+$400</span>
            </div>
          )}
          
          {soloStandard === 'five_star' && (
            <div className="flex justify-between text-gray-600">
              <span>5 Star Solo Stay</span>
              <span>+$500</span>
            </div>
          )}
        </>
      );
    } else if (adventureType === 'Trek') {
      if (soloStandard) {
        const hotelPrice = soloStandard === '4-star' ? 450 : 550;
        return (
          <div className="flex justify-between text-gray-600">
            <span>{soloStandard === '4-star' ? '4 Star' : '5 Star'} Hotel</span>
            <span>+${hotelPrice}</span>
          </div>
        );
      }
      return (
        <div className="text-gray-600 italic text-sm">
          Trek includes guide service, porter service, and full board service.
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <Card className='px-4 py-4'>
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Customer Information</h4>
                <p className="text-sm text-gray-500">Please enter your details</p>
              </CardHeader>
              <CardBody className="space-y-4">
                <Input
                  label="Full Name"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  errorMessage={errors.fullName}
                  isInvalid={!!errors.fullName}
                  startContent={<FiUser className="text-gray-400" size={16} />}
                />
                
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  errorMessage={errors.email}
                  isInvalid={!!errors.email}
                  startContent={<MdMail className="text-gray-400" size={16} />}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                  errorMessage={errors.phone}
                  isInvalid={!!errors.phone}
                  startContent={<FaPhone className="text-gray-400" size={16} />}
                />

                <Input
                  label="Address"
                  name="address"
                  placeholder="123 Trek Street"
                  value={formData.address}
                  onChange={handleInputChange}
                  errorMessage={errors.address}
                  isInvalid={!!errors.address}
                  startContent={<CiLocationOn className="text-gray-400" size={16} />}
                />
              </CardBody>
            </Card>
          </div>

          <div>
            <Card className="sticky top-8 px-4 py-4">
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Order Summary</h4>
                <p className="text-sm text-gray-500">Review your booking details</p>
              </CardHeader>
              <CardBody className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{bookingDetails.adventureName}</h3>
                  <p className="text-gray-600">Booking Type: {bookingDetails.adventureType === 'Trek' ? 'Trek' : 'Tour'}</p>
                  <p className="text-gray-600">Booking Date: {formatDate(bookingDetails.bookingDate)}</p>
                  <p className="text-gray-600">Number of Persons: {bookingDetails.quantity}</p>
                </div>

                <Divider />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price ({bookingDetails.quantity} x ${bookingDetails.price})</span>
                    <span>${bookingDetails.totalPrice}</span>
                  </div>

                  {renderExtraServices()}
                </div>

                <Divider />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${bookingDetails.totalPrice}</span>
                </div>

                <Button 
                  color="primary"
                  size="lg"
                  className="w-full rounded-sm"
                  type="submit"
                >
                  Pay ${bookingDetails.totalPrice}
                </Button>
              </CardBody>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}