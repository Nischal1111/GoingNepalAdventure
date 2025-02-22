"use client";
import React, { useState } from 'react';
import { useSearchParams} from 'next/navigation';
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FiUser } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';

interface BookingDetails {
  name: string;
  price: number;
  quantity: number;
  bookingDate: string;
  extraServices: {
    guide: boolean;
    potter: boolean;
    fullboard: boolean;
  };
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export default function CheckoutPage() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const detailsParam = searchParams.get('details');
  const trekDetails: BookingDetails = detailsParam ? JSON.parse(detailsParam) : null;

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  if (!trekDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <CardBody>
            No booking details found. Please return to the trek page and try booking again.
          </CardBody>
        </Card>
      </div>
    );
  }

  const calculateTotal = () => {
    const basePrice = trekDetails.price * trekDetails.quantity;
    const guidePrice = trekDetails.extraServices.guide ? 100 * trekDetails.quantity : 0;
    const potterPrice = trekDetails.extraServices.potter ? 150 * trekDetails.quantity : 0;
    const fullboardPrice = trekDetails.extraServices.fullboard ? 200 * trekDetails.quantity : 0;
    return basePrice + guidePrice + potterPrice + fullboardPrice;
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

    // Form is valid, proceed to submit to HBL Payment Gateway
    const form = document.getElementById('hbl-payment-form') as HTMLFormElement;
    form.submit();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form
          id="hbl-payment-form"
          onSubmit={handleSubmit}
          action="http://localhost/hbldemo/payment_request.php" // Replace with your live backend URL
          method="post"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <Card>
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
            <Card className="sticky top-8">
              <CardHeader className="flex flex-col gap-1">
                <h4 className="text-xl font-bold">Order Summary</h4>
                <p className="text-sm text-gray-500">Review your booking details</p>
              </CardHeader>
              <CardBody className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{trekDetails.name}</h3>
                  <p className="text-gray-600">Booking Date: {new Date(trekDetails.bookingDate).toLocaleDateString()}</p>
                  <p className="text-gray-600">Number of Persons: {trekDetails.quantity}</p>
                </div>

                <Divider />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Price ({trekDetails.quantity} x ${trekDetails.price})</span>
                    <span>${trekDetails.price * trekDetails.quantity}</span>
                  </div>

                  {trekDetails.extraServices.guide && (
                    <div className="flex justify-between text-gray-600">
                      <span>Solo Private Tour</span>
                      <span>+$100</span>
                    </div>
                  )}

                  {trekDetails.extraServices.potter && (
                    <div className="flex justify-between text-gray-600">
                      <span>4 Star Accommodation</span>
                      <span>+${150 * trekDetails.quantity}</span>
                    </div>
                  )}

                  {trekDetails.extraServices.fullboard && (
                    <div className="flex justify-between text-gray-600">
                      <span>5 Star Accommodation</span>
                      <span>+${200 * trekDetails.quantity}</span>
                    </div>
                  )}
                </div>

                <Divider />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>

                {/* Hidden fields for HBL Payment Gateway */}
                <input type="hidden" name="api_key" value="YOUR_LIVE_API_KEY" />
                <input type="hidden" name="merchant_id" value="YOUR_LIVE_MERCHANT_ID" />
                <input type="hidden" name="input_currency" value="NPR" />
                <input type="hidden" name="input_amount" value={calculateTotal()} />
                <input type="hidden" name="input_3d" value="N" />
                <input type="hidden" name="success_url" value="http://localhost/hbldemo/?payment=success" />
                <input type="hidden" name="fail_url" value="http://localhost/hbldemo/?payment=failed" />
                <input type="hidden" name="cancel_url" value="http://localhost/hbldemo/?payment=cancel" />
                <input type="hidden" name="backend_url" value="http://localhost/hbldemo/?payment=backend" />

                <Button 
                  color="primary"
                  size="lg"
                  className="w-full"
                  type="submit"
                >
                  Pay ${calculateTotal()}
                </Button>

                <Card>
                  <CardBody className="text-sm text-gray-600">
                    Your booking will be confirmed after successful payment processing.
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}