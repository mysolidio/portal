"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/banner-lg.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "This digital identity solution has been a breakthrough! It enables users to take full control of their data, ensuring privacy in a decentralized ecosystem. Web3 integration is seamless and secure.",
    rating: 5.0,
  },
  {
    image: "/banner-lg.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "The security and encryption behind this service are top-notch. It ensures users retain full ownership of their identity and personal data while maintaining strong privacy in a decentralized setup.",
    rating: 4.8,
  },
  {
    image: "/banner-lg.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "This service has made the transition to decentralized identity management easy. It ensures full control over personal data while integrating seamlessly into any web3-powered solution.",
    rating: 4.9,
  },
  {
    image: "/banner-lg.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "The ability to control personal data through this platform is revolutionary. Users now have true ownership of their digital identity, making it a key component of the web3 future.",
    rating: 5.0,
  },
  {
    image: "/banner-lg.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "This platform simplifies digital identity management while prioritizing privacy. Users have full control over their data, which is crucial for today’s decentralized digital world.",
    rating: 5.0,
  },
  {
    image: "/banner-lg.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "With this service, data sovereignty is no longer a concept, it’s a reality. Users control their identity securely, and organizations benefit from seamless web3 integration.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Customers Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/solid-lg-dark.png"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
