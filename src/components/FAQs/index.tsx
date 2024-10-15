"use client"
import SharedSection from '@/shared/SharedSection'
import SharedTitle from '@/shared/SharedTitle'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import React from 'react'
import { FaCircleQuestion, FaPlus } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'
import { FaRegDotCircle } from "react-icons/fa";
import Link from 'next/link'


const FAQs = () => {
    const FAQs = [
      {
        question: "What are the best trekking seasons in Nepal?",
        answer: "The best seasons for trekking in Nepal are spring (March to May) and autumn (September to November). During these times, the weather is generally stable, with clear skies and moderate temperatures, ideal for trekking and viewing the Himalayan peaks. Spring also brings blooming rhododendrons and lush landscapes, while autumn offers crisp air and perfect trekking conditions. Winter (December to February) is colder, especially at higher altitudes, but is still suitable for lower-altitude treks. Monsoon season (June to August) brings heavy rainfall, which makes trails muddy and visibility lower, though rain-shadow areas like Mustang and Dolpo are still good options during this time."
      },
      {
        question: "Do I need a visa to visit Nepal, Bhutan, or Tibet?",
        answer: "Yes, a visa is required for Nepal, Bhutan, and Tibet. For Nepal, you can obtain a visa on arrival at the airport or at land borders. Tourist visas are available for 15, 30, or 90 days. In Bhutan, tourists must book a tour through a registered travel agency, and the visa will be arranged as part of the package. Tibet requires both a Chinese visa and a special Tibet Travel Permit, which is handled by your tour operator. We assist with all necessary visa arrangements to ensure a smooth travel experience."
      },
      {
        question: "What kind of accommodation can I expect during trekking?",
        answer: "During trekking in Nepal, you will mostly stay in tea houses, which are simple lodges offering basic amenities such as a bed, blanket, and shared bathroom facilities. Some tea houses have electricity, hot showers (for an additional cost), and charging ports for devices. On popular trekking routes like Everest Base Camp and Annapurna Circuit, the quality of tea houses is better, offering more comfort. In more remote regions, accommodations can be very basic or involve camping with support from a guide and porters. In Bhutan and Tibet, accommodations range from basic guesthouses to more comfortable hotels, depending on the region and tour package."
      },
      {
        question: "How difficult are the treks in Nepal?",
        answer: "Treks in Nepal vary in difficulty. Easy treks like the Ghorepani Poon Hill Trek are suitable for beginners and families, offering great views without too much strain. Moderate treks like Annapurna Base Camp and the Everest Base Camp trek require some physical fitness and preparation due to higher altitudes and longer durations. Challenging treks, such as those in the Upper Mustang or Kanchenjunga regions, are best suited for experienced trekkers with good endurance and the ability to handle rugged terrain and altitude. It’s important to choose a trek that matches your fitness level and experience."
      },
      {
        question: "What should I pack for a trek?",
        answer: "Packing the right gear is essential for a comfortable and safe trek. Key items include: Clothing: Layered clothing for different temperatures, a down jacket for warmth, a waterproof jacket, trekking pants, thermal underwear, and gloves. Footwear: Sturdy trekking boots that are well broken in, along with moisture-wicking socks. Gear: A backpack (40-50 liters for longer treks), trekking poles, a good-quality sleeping bag (especially for high-altitude treks), and a headlamp with extra batteries. Miscellaneous: Sunscreen, sunglasses, a reusable water bottle, water purification tablets, a personal first-aid kit, altitude sickness medication (like Diamox), and personal hygiene items. We provide a more detailed packing list for each trek to ensure you are fully prepared."
      },
      {
        question: "Do I need travel insurance for trekking in Nepal?",
        answer: "Yes, travel insurance is strongly recommended for all trekkers in Nepal, particularly for those trekking at high altitudes. Your insurance should cover medical expenses, helicopter evacuation, and emergency rescue in case of altitude sickness or injury. Be sure that your policy covers trekking up to the altitude you will reach. Most insurance companies offer adventure travel policies specifically designed for trekking and high-altitude activities."
      },
      {
        question: "Are permits required for trekking?",
        answer: "Yes, permits are required for most treks in Nepal. For example, popular treks like Everest Base Camp and Annapurna Circuit require TIMS (Trekkers' Information Management System) permits and national park or conservation area permits such as the Annapurna Conservation Area Permit (ACAP) or the Sagarmatha National Park permit for Everest. In restricted areas like Upper Mustang and Manaslu, a special restricted area permit is necessary. We arrange all necessary permits as part of our trekking packages, ensuring you are fully prepared for your journey."
      },
      {
        question: "What kind of food is available during the trek?",
        answer: "Most tea houses offer a variety of local and basic Western dishes. Dal Bhat (rice, lentil soup, and vegetables) is the staple meal and provides a balanced source of energy. Other common options include noodles, fried rice, pasta, pancakes, and soups. Breakfast often includes bread, eggs, porridge, and tea or coffee. At higher altitudes, the selection may become more limited, so we recommend carrying snacks like energy bars or trail mix to supplement meals. Vegetarian food is widely available, and tea houses accommodate most dietary needs, though options may be limited in remote areas."
      },
      {
        question: "Can I trek alone, or do I need a guide?",
        answer: "While some treks in Nepal can be done independently, hiring a guide is highly recommended, especially for safety and convenience. Guides provide valuable local knowledge, help with navigation, and ensure that you are properly acclimatizing. For certain areas, such as Upper Mustang or Manaslu, a guide is mandatory as these regions are restricted. Even on popular treks like the Annapurna Circuit or Everest Base Camp, having a guide and porter can enhance your experience by taking care of logistics, carrying your heavy gear, and helping in case of any emergencies."
      },
      {
        question: "What is altitude sickness, and how can I prevent it?",
        answer: "Altitude sickness, also known as acute mountain sickness (AMS), occurs when you ascend to high altitudes too quickly and your body struggles to adjust to the lower levels of oxygen. Symptoms include headaches, nausea, dizziness, and shortness of breath. To prevent AMS, it’s important to ascend gradually, take acclimatization days, and stay hydrated. Some trekkers also use Diamox to help with acclimatization. If symptoms worsen, the only effective treatment is to descend to a lower altitude. We carefully plan our itineraries to allow for proper acclimatization and monitor trekkers for any signs of altitude sickness."
      },
      {
        question: "What is the minimum age for trekking in Nepal?",
        answer: "There is no strict age limit for trekking in Nepal, but trekkers should be in good physical condition. For children, we recommend easy treks such as Ghorepani Poon Hill or the Annapurna Foothills, which are shorter and at lower altitudes. For seniors, fitness level and acclimatization are key factors. We’ve had trekkers aged 10 to 70+ complete both easy and moderate treks. Families often enjoy group treks with guides and porters to support younger and older participants."
      },
      {
        question: "What adventure activities can I do besides trekking?",
        answer: "Nepal offers a wide range of adventure activities beyond trekking. These include: White-water rafting on rivers like the Trishuli and Seti, Paragliding over the scenic Pokhara valley, Bungee jumping near the Tibetan border, Mountain biking on rugged Himalayan trails, and Jungle safaris in Chitwan or Bardia National Parks, where you can spot wildlife like rhinos, tigers, and elephants. Adventure lovers can easily combine these activities with their trekking itinerary to experience more of Nepal’s diverse landscapes."
      },
      {
        question: "Can I customize a tour or trek?",
        answer: "Yes, all our treks and tours can be customized to suit your preferences. Whether you want to modify the duration of a trek, combine multiple destinations, or include adventure activities, we can tailor the itinerary to match your travel goals. We also offer private, family-friendly, and small-group treks. Just let us know your interests, fitness level, and schedule, and we’ll create a personalized adventure just for you."
      },
      {
        question: "What is the level of fitness required for trekking?",
        answer: "The level of fitness required depends on the trek you choose. Easy treks, like the Ghorepani Poon Hill or short treks around Pokhara, are suitable for beginners and require a basic level of fitness. Moderate treks, such as the Annapurna Base Camp or Everest Base Camp, require more stamina and endurance as they involve longer days of walking and higher altitudes. For challenging treks, like the Three Passes Trek or treks in remote areas, trekkers need to be in excellent physical condition. We recommend preparing with regular cardio, strength training, and hiking practice before your trip."
      },
      {
        question: "How do I get to Nepal, Bhutan, and Tibet?",
        answer: "Nepal is accessible via Tribhuvan International Airport in Kathmandu, with regular flights from major cities around the world. For Bhutan, travelers must fly into Paro International Airport, and flights are limited to specific cities, including Kathmandu. For Tibet, you can enter either via a flight from Kathmandu to Lhasa or by train from mainland China. We handle all internal transportation logistics as part of our tour packages."
      },
      {
        question: "How safe is trekking in Nepal?",
        answer: "Trekking in Nepal is generally safe when following proper guidelines and precautions. With an experienced guide, you’re well taken care of in terms of navigation, accommodation, and safety. However, it’s important to be mindful of potential risks, such as altitude sickness, unpredictable weather, and remote trail conditions. We provide all the necessary information to ensure trekkers are prepared and follow safety protocols."
      },
      {
        question: "How do I stay connected during the trek?",
        answer: "While trekking in remote areas, access to Wi-Fi and mobile networks can be limited. Most tea houses on popular routes like Everest and Annapurna offer Wi-Fi for a small fee, though the connection may be slow. We recommend purchasing a local SIM card (such as Ncell or Nepal Telecom) for mobile data coverage, which works in most trekking areas but can become unreliable at higher altitudes. It’s a good idea to inform your family of limited connectivity in advance."
      },
      {
        question: "Do I need any vaccinations before coming to Nepal?",
        answer: "It is recommended to consult with your healthcare provider at least six weeks before your trip to ensure you are up to date on routine vaccinations. Common vaccines for Nepal include: Hepatitis A and B, Typhoid, Tetanus, and Rabies (if you plan to travel to more remote areas or interact with animals). For those traveling to rural or jungle regions, consider vaccination against Japanese Encephalitis. Although Nepal is not a malaria-endemic country, mosquito repellent is recommended for protection against other insect-borne diseases."
      }
    ]
    const itemClasses = {
        title: "font-semibold text-xl",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-base px-8",
      };


  return (
    <main>
        <SharedSection title='FAQs' link='/faqs' img='/assets/faqBG.jpeg'/>
        <SharedTitle title='Get Info' subTitle='Frequently Asked Questions'/>
        <div className='my-16 px-52'>
          
          <Accordion>
            {FAQs.map((item,index)=>{
              return(
                <AccordionItem 
                      key={index} 
                      aria-label={item.question} 
                      title={item.question}
                      startContent={<FaRegDotCircle className='text-primary'/>}
                      indicator={({ isOpen }) => (isOpen ? <RxCross1 className='text-primary'/> : <FaPlus className='text-primary'/>)}
                      classNames={itemClasses}
                      className='py-4'
                >
                      
                  {item.answer}
                </AccordionItem>
              )
            })}
            
          </Accordion>
        <div className='bg-primary/30 px-12 py-8 rounded-md flex items-center justify-between my-16'>
          <section className='flex flex-col items-start h-full text-white'>
                <div className='flex items-center gap-4 mb-2'>
                  <FaCircleQuestion size={22} className='text-primary'/>
                  <h1 className='font-semibold text-xl tracking-wide'>Still have questions?</h1>
                </div>
          </section>
          <Link href='/contact-us'>
            <Button  className='bg-primary rounded-md px-12 text-white'>Contact Us</Button>
          </Link>
        </div>
        </div>
    </main>
  )
}

export default FAQs
