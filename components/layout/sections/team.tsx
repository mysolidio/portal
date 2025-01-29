import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://robohash.org/d66db7380b93c13b9ffcbd6c9c350d00?set=set4&bgset=&size=400x400",
      firstName: "Archie",
      lastName: "Ravishankar",
      positions: ["Founder & CEO"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Github",
          url: "#",
        },
        {
          name: "X",
          url: "#",
        },
      ],
    },
    {
      imageUrl:
        "https://robohash.org/74a2d5b46f44a4d2501dbb615e642d9d?set=set4&bgset=&size=400x400",
      firstName: "Albert",
      lastName: "Do",
      positions: ["Founding Advisor"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "X",
          url: "#",
        },
      ],
    },
    {
      imageUrl:
        "https://robohash.org/41113aed0f575de4e97826f0d66c41d8?set=set4&bgset=&size=400x400",
      firstName: "Dhina",
      lastName: "",
      positions: ["Project manager"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Github",
          url: "#",
        },
      ],
    },
    {
      imageUrl:
        "https://robohash.org/261d9fd92a70d84435cbdddf7686c8bf?set=set4&bgset=&size=400x400",
      firstName: "Ali",
      lastName: "",
      positions: ["Senior Developer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "#",
        },
        {
          name: "Github",
          url: "#",
        },
      ],
    }
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Our core team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-content-center">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
