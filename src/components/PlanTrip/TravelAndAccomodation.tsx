import { Checkbox, Input } from "@nextui-org/react";
import React, { useContext } from "react";
import { PlanContext } from "./PlanContext";
import Image from "next/image";

const TravelAndAccommodation = () => {
  const { adult, setAdult, small, setSmall, accommodation, setAccommodation , meal, setMeal} =
    useContext(PlanContext)!;

  const handleAccommodationChange = (type: string) => {
    setAccommodation(accommodation === type ? "" : type);
  };

  const handleMealChange=(mealType:string)=>{
    setMeal(meal===mealType?"" : mealType)
    }

  return (
    <div className="flex w-full flex-col items-center justify-center px-16">
      <h1 className="text-2xl text-primary font-semibold py-16 tracking-wide">
        Travellers and Accommodations
      </h1>
      <div className="flex w-full items-center justify-between">
        <Input
          type="number"
          min={0}
          radius="none"
          className="w-2/5 shadow-sm"
          label="Adult"
          labelPlacement="outside"
          placeholder="No. of adults"
          value={adult || ""}
          onChange={(e) => setAdult(e.target.value)}
          classNames={{
            inputWrapper: "text-black font-medium bg-white",
            label: "text-black text-lg font-medium",
          }}
        />
        <Input
          type="number"
          min={0}
          radius="none"
          className="w-2/5 shadow-sm"
          label="Children"
          labelPlacement="outside"
          placeholder="No. of children"
          value={small || ""}
          onChange={(e) => setSmall(e.target.value)}
          classNames={{
            inputWrapper: "text-black font-medium bg-white",
            label: "text-black text-lg font-medium",
          }}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-lg text-primary font-semibold pt-16 pb-4 tracking-wide">
          Preferred Accommodation
        </h1>
        <div className="grid grid-cols-4 gap-10 my-4">
          {[
            { type: "3star", label: "3 Star Standard Hotels", image: "https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MyUyMHN0YXIlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D" },
            { type: "4star", label: "4 Star Standard Hotels", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDQlMjBzdGFyJTIwaG90ZWx8ZW58MHx8MHx8fDI%3D" },
            { type: "5star", label: "5 Star Standard Hotels", image: "https://images.unsplash.com/photo-1658394182922-fae0590632d6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NSUyMHN0YXIlMjBob3RlbHxlbnwwfHwwfHx8Mg%3D%3D" },
            { type: "luxury", label: "Luxury Hotels", image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDI%3D" },
          ].map(({ type, label, image }) => (
            <div key={type} className="flex flex-col gap-2">
              <div className="h-[160px] w-full">
                <Image
                  src={image}
                  alt={label}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover rounded-sm shadow-sm"
                />
              </div>
              <Checkbox
                isSelected={accommodation === type}
                onChange={() => handleAccommodationChange(type)}
                className="w-fit"
              >
                {label}
              </Checkbox>
            </div>
          ))}
        </div>
        
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-lg text-primary font-semibold pt-16 pb-4 tracking-wide">
          Meal Plan
        </h1>
        <div className="flex items-center justify-center gap-2 my-4 w-4/5">
          {[
            { type: "bb", label: "B&B (Bread & Breakfast)" },
            { type: "map", label: "MAP (Half Board / Breakfast and Lunch or Dinner)" },
            { type: "ap", label: "AP (Full Board / Breakfast, Lunch, & Dinner)"},
          ].map(({ type, label }) => (
            <div key={type} className="flex flex-col gap-2">
              <Checkbox
                isSelected={meal === type}
                onChange={() => handleMealChange(type)}
              >
                {label}
              </Checkbox>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TravelAndAccommodation;
