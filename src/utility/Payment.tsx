"use client"
import React from 'react';

const HBLPaymentGateway = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">HBL Payment Gateway</h2>
        </div>

        {/* Payment Details Form */}
        <form action="payment_request.php" method="post" encType="multipart/form-data" name="form_payment" className="mb-8">
          <input type="hidden" name="formID" value="92921030145569" />
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">API Key</label>
                <input type="tel" id="api_key" name="api_key" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="9f1911beb0af433e8b05b9e8ca4d48ca" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Merchant Id</label>
                <input type="tel" id="merchant_id" name="merchant_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="**********" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Currency</label>
                <select name="input_currency" id="input_currency" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
                  <option value="NPR">NPR</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input type="tel" id="input_amount" name="input_amount" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="1" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">3D Secure</label>
                <select name="input_3d" id="input_3d" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
                  <option value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Success URL</label>
                <input type="tel" id="success_url" name="success_url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="http://localhost/hblgateway/" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Failed URL</label>
                <input type="tel" id="fail_url" name="fail_url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="http://localhost/hblgateway/" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cancel URL</label>
                <input type="tel" id="cancel_url" name="cancel_url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="http://localhost/hblgateway/" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Backend URL</label>
                <input type="tel" id="backend_url" name="backend_url" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="http://localhost/hblgateway/" />
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Checkout</button>
              </div>
            </div>
          </div>
        </form>

        {/* Void Payment Form */}
        <form action="void_request.php" method="post" encType="multipart/form-data" name="form_void" className="mb-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Void Payment</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">API Key</label>
                <input type="tel" id="api_key2" name="api_key2" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="9f1911beb0af433e8b05b9e8ca4d48ca" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">MerchantId</label>
                <input type="tel" id="merchant_id2" name="merchant_id2" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" defaultValue="**********" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">OrderID</label>
                <input type="tel" id="order_id" name="order_id" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Auth_num</label>
                <input type="tel" id="authNum" name="authNum" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <button type="submit" className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600">Void</button>
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="text-center">
            <strong>Himalayan Bank Limited</strong><br />
            Kamaladi, Kathmandu<br />
            G.P.O. Box: 20590<br />
            Phone: +977-1- 4227749<br />
            Fax: +977-1-4222800<br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HBLPaymentGateway;