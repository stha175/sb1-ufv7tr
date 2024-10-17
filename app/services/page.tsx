import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Day Hikes",
    description: "Perfect for beginners or those short on time. Explore beautiful trails and return before sunset.",
    duration: "4-8 hours",
    difficulty: "Easy to Moderate",
    price: "$50 - $100",
  },
  {
    title: "Weekend Treks",
    description: "Immerse yourself in nature with our overnight treks. Includes camping and stargazing.",
    duration: "2-3 days",
    difficulty: "Moderate",
    price: "$200 - $350",
  },
  {
    title: "Summit Expeditions",
    description: "Challenge yourself with our advanced treks to reach breathtaking mountain peaks.",
    duration: "5-7 days",
    difficulty: "Challenging",
    price: "$500 - $800",
  },
  {
    title: "Custom Adventures",
    description: "Tailor-made treks designed to meet your specific goals and preferences.",
    duration: "Flexible",
    difficulty: "Varies",
    price: "Custom quote",
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Our Services</h1>
      <p className="text-muted-foreground mb-8">
        Discover our range of trekking services designed to cater to all levels of experience and adventure preferences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">Duration: {service.duration}</Badge>
                <Badge variant="secondary">Difficulty: {service.difficulty}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Starting from {service.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">Additional Information</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>All treks include professional guides, safety equipment, and first aid kits.</li>
          <li>Group discounts available for parties of 5 or more.</li>
          <li>Custom treks can be arranged for special occasions or team-building events.</li>
          <li>We offer seasonal promotions and early bird discounts. Contact us for current offers.</li>
        </ul>
      </div>
    </div>
  );
}