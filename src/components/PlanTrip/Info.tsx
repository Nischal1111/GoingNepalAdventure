"use client"
import Loader from '@/shared/Loader'
import { Autocomplete, AutocompleteItem, Checkbox, Input, Textarea } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { div } from 'framer-motion/client'
import React from 'react'

const Info = () => {

  const { data: countries,isLoading } = useQuery({
  queryKey: ["countries"],
  queryFn: async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data.map((country:any) => country.name.common);
  },
});


  console.log(countries)
  return (
    <div className="flex w-full flex-col items-center justify-center px-16">
      <h1 className="text-2xl text-primary font-semibold py-16 tracking-wide">
        Personal Information
      </h1>
      <div className='w-full grid grid-cols-2 gap-x-20 gap-y-12'>
        <Input
          radius="none"
          className="w-full shadow-sm"
          label="Fullname"
          labelPlacement="outside"
          placeholder="Enter your fullname"
          // value={adult || ""}
          // onChange={(e) => setAdult(e.target.value)}
          classNames={{
            inputWrapper: "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-lg font-medium",
          }}
        />
        <Input
          radius="none"
          className="w-full shadow-sm"
          label="Address"
          labelPlacement="outside"
          placeholder="Enter your current address"
          // value={adult || ""}
          // onChange={(e) => setAdult(e.target.value)}
          classNames={{
            inputWrapper: "text-black font-medium bg-white  group-data-[focus=true]:bg-white",
            label: "text-black text-lg font-medium",
          }}
        />
        <Input
          radius="none"
          className="w-full shadow-sm"
          label="E-mail"
          type="email"
          labelPlacement="outside"
          placeholder="Enter your email address"
          // value={adult || ""}
          // onChange={(e) => setAdult(e.target.value)}
          classNames={{
            inputWrapper: "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-lg font-medium",
          }}
        />
        <Input
          type='number'
          radius="none"
          className="w-full shadow-sm"
          label="Phone Number"
          labelPlacement="outside"
          placeholder="Enter your contact number"
          // value={adult || ""}
          // onChange={(e) => setAdult(e.target.value)}
          classNames={{
            inputWrapper: "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-lg font-medium",
          }}
        />
        <div className="flex flex-col gap-2">
          <h1 className='text-black text-lg font-medium'>Select your country</h1>
          <Autocomplete 
            label="Select a country" 
            radius='none'
            color='primary'
            isClearable={false}
            classNames={{
            }}
        >
            {!isLoading &&
            countries?.map((country:string) => (
                <AutocompleteItem key={country+"1"} value={country}>
                    {country}
                </AutocompleteItem>
            ))}
        </Autocomplete>
        </div>
      </div>
        <Textarea
            label="Leave a Note"
            labelPlacement='outside'
            placeholder="Enter your message"
            className="h-[300px] mt-8 w-full shadow-sm"
            classNames={{
            inputWrapper: "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-lg font-medium ",
            input:" min-h-[200px]"
          }}
          />

          <div className='flex items-center justify-start w-full'>
            <Checkbox>I agree to the terms and conditions</Checkbox>
          </div>
    </div>
  )
}

export default Info
