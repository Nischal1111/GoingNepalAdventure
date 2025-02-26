"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Checkbox,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { PlanContext } from "./PlanContext";
import Link from "next/link";

const Info = () => {
  const {
    fullname,
    setFullname,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    country,
    setCountry,
    message,
    setMessage,
    setAlertMessage,
    agree,
    setAgree,
  } = useContext(PlanContext)!;

  const { data: countries, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data.map((country: any) => country.name.common);
    },
  });

  // Unified change handler
  const handleChange = (field: string, value: string) => {
    setAlertMessage(null);
    switch (field) {
      case "fullname":
        setFullname(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const onSelectionChange = (key: React.Key | null) => {
    setCountry(String(key));
    setAlertMessage(null);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4  md:px-12 lg:px-16">
      <h1 className="text-xl md:text-2xl text-primary font-semibold py-6 md:py-10 lg:py-16 tracking-wide text-center">
        Personal Information
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 gap-y-6 sm:gap-y-8 md:gap-y-12">
        <Input
          radius="none"
          className="w-full shadow-sm"
          label="Fullname"
          labelPlacement="outside"
          placeholder="Enter your fullname"
          value={fullname || ""}
          onChange={(e) => handleChange("fullname", e.target.value)}
          classNames={{
            inputWrapper:
              "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-base md:text-lg font-medium",
          }}
        />
        <Input
          radius="none"
          className="w-full shadow-sm"
          label="Address"
          labelPlacement="outside"
          placeholder="Enter your current address"
          value={address || ""}
          onChange={(e) => handleChange("address", e.target.value)}
          classNames={{
            inputWrapper:
              "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-base md:text-lg font-medium",
          }}
        />
        <Input
          radius="none"
          className="w-full shadow-sm"
          label="E-mail"
          type="email"
          labelPlacement="outside"
          placeholder="Enter your email address"
          value={email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          classNames={{
            inputWrapper:
              "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-base md:text-lg font-medium",
          }}
        />
        <Input
          type="number"
          radius="none"
          className="w-full shadow-sm"
          label="Phone Number"
          labelPlacement="outside"
          placeholder="Enter your contact number"
          value={phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
          classNames={{
            inputWrapper:
              "text-black font-medium bg-white group-data-[focus=true]:bg-white",
            label: "text-black text-base md:text-lg font-medium",
          }}
        />
        <div className="flex flex-col gap-2 sm:col-span-2">
          <h1 className="text-black text-base md:text-lg font-medium">Select your country</h1>
          <Autocomplete
            label="Select a country"
            radius="none"
            color="primary"
            isClearable={false}
            selectedKey={country || undefined}
            onSelectionChange={onSelectionChange}
            classNames={{}}
          >
            {!isLoading &&
              countries?.map((country: string) => (
                <AutocompleteItem key={country + ""} value={country}>
                  {country}
                </AutocompleteItem>
              ))}
          </Autocomplete>
        </div>
      </div>
      <Textarea
        label="Leave a Note"
        labelPlacement="outside"
        placeholder="Enter your message"
        value={message || ""}
        onChange={(e) => handleChange("message", e.target.value)}
        className="h-[200px] md:h-[250px] lg:h-[300px] mt-6 md:mt-8 w-full shadow-sm"
        classNames={{
          inputWrapper:
            "text-black font-medium bg-white group-data-[focus=true]:bg-white",
          label: "text-black text-base md:text-lg font-medium",
          input: "min-h-[150px] md:min-h-[200px]",
        }}
      />

      <div className="flex items-center justify-start w-full mt-4 md:mt-6">
        <Checkbox isSelected={agree} onChange={(e) => setAgree(e.target.checked)}>
          <span className="text-sm sm:text-base">
            I agree to the{" "}
            <Link
              href={"/terms-and-conditions"}
              target="_blank"
              className={"text-primary underline underline-offset-2"}
            >
              terms and conditions
            </Link>{" "}
            and understand the{" "}
            <Link
              target="_blank"
              href={"/privacy-policy"}
              className={"text-primary underline underline-offset-2"}
            >
              privacy policy
            </Link>
            .
          </span>
        </Checkbox>
      </div>
    </div>
  );
};

export default Info;