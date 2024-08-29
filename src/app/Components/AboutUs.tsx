import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center p-14 bg-gray-50">
      <div className="max-w-md mb-8 md:mb-0">
        <h2 className="text-md font-semibold text-gray-600">Who we are</h2>
        <h1 className="text-6xl font-bold text-gray-800">CARROLL FULMER</h1>
        <p className="text-sm font-medium text-gray-600">
          LOGISTICS CORPORATION
        </p>
        <p className="mt-4 text-gray-700">
          Carroll Fulmer Logistics Corporation is a full-service transportation
          and logistics company. We serve clients throughout the United States,
          as well as manage logistics and brokerage operations.
        </p>
        <p className="mt-4 text-gray-700">
          Carroll Fulmer Logistics Corporation serves some of the leading
          Fortune 500 companies with online payment, document imaging, and
          Internet-based shipment tracking services. Additionally, the company
          handles LTL (less-than-truckload) shipment services.
        </p>
        <div className="mt-6 space-x-4">
          <Button variant="outline">Drive with us</Button>
          <Button variant="outline">Our history</Button>
        </div>
      </div>
      <div className="md:ml-10 flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/62e3fc9fe0b5d9617e0c85e0/632dee28f1208cf96c013909_Entrance%20%202023International_%20%20Corporate%20Office.png"
          alt="Truck Image"
          className="rounded-lg shadow-lg w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
}
