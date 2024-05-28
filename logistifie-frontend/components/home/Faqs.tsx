import Accordion from "../Accordian";
import { Tab, Tabs } from "../Tabs";

const allFaqs = [
  {
    id: "booking",
    name: "Booking",
    faqs: [
      {
        title: "How to book a RolDrive chauffeur?",
        content:
          "You can easily book a RolDrive chauffeur using our website or our app. If you're still having trouble, give us a call or send us an email at booking@roldrive.com"
      },
      {
        title: "When will I receive my chauffeur and vehicle details?",
        content:
          "Yes, you receive my chauffeur and vehicle details after 24 hours of booking. If you don't receive it, please contact us at booking@roldrive.com"
      }
    ]
  },
  {
    id: "cancellation",
    name: "Cancellation",
    faqs: [
      {
        title: "What is the cancellation policy?",
        content:
          "Cancellations made 24 hours before the scheduled pickup time are fully refundable. Cancellations made within 24 hours may incur a cancellation fee."
      },
      {
        title: "How do I cancel my booking?",
        content:
          "To cancel your booking, log into your account on our website or app, go to 'My Bookings', and select the booking you wish to cancel. Alternatively, you can contact our customer service."
      }
    ]
  },
  {
    id: "vehicles",
    name: "Vehicles",
    faqs: [
      {
        title: "What types of vehicles are available?",
        content:
          "We offer a wide range of vehicles including sedans, SUVs, luxury cars, and minibuses to meet your specific needs."
      },
      {
        title: "Are the vehicles insured?",
        content:
          "Yes, all our vehicles are fully insured to ensure your safety and peace of mind during your journey."
      }
    ]
  },
  {
    id: "payment",
    name: "Payment",
    faqs: [
      {
        title: "What payment methods are accepted?",
        content:
          "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Please check our website for the full list of accepted payment options."
      },
      {
        title: "Is there a deposit required?",
        content:
          "In some cases, a deposit may be required to secure your booking. The deposit amount and conditions will be clearly stated during the booking process."
      }
    ]
  },
  {
    id: "chauffeur",
    name: "Chauffeur",
    faqs: [
      {
        title: "Are the chauffeurs professionally trained?",
        content:
          "Yes, all our chauffeurs are professionally trained, licensed, and undergo regular background checks to ensure your safety and comfort."
      },
      {
        title: "Can I request a specific chauffeur?",
        content:
          "While we cannot guarantee specific chauffeur requests, we will do our best to accommodate your preferences. Please contact our customer service for such requests."
      }
    ]
  },
  {
    id: "airport",
    name: "Airport Related",
    faqs: [
      {
        title: "Do you offer airport meet and greet services?",
        content:
          "Yes, we offer meet and greet services at the airport. Our chauffeur will meet you at the arrivals hall with a name board and assist you with your luggage."
      },
      {
        title: "What happens if my flight is delayed?",
        content:
          "We monitor flight statuses in real-time. If your flight is delayed, our chauffeur will adjust the pickup time accordingly, at no extra cost."
      }
    ]
  }
];

export const Faqs = () => {
  return (
    <section className="bg-lf-600 p-12">
      <div className="container p-4 mx-auto">
        <div className="flex  items-center flex-col mt-4 text-lf-25">
          <p className="text-sm ">Have queries?</p>
          <p className="text-2xl">Frequent Asked Questions</p>
          <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
        </div>
        <div className="my-4">
          <Tabs>
            {allFaqs.map((item) => (
              <Tab label={item.name} key={item.id}>
                <div className="py-4 w-full">
                  <Accordion items={item.faqs} />
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
        <p className="text-center text-lf-25 text-sm cursor-pointer">
          View All
        </p>
      </div>
    </section>
  );
};
