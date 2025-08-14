import Dribbble from "../assets/utils/dribbble.svg";
import Linkedin from "../assets/utils/linkedin.svg";
import Github from "../assets/utils/github.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  currentMembers,
  formerMembers,
} from "@/data/teamData";

const Member  = () => {
  return (
    <section className="py-10 w-[80%] lg:w-[60%] mx-auto">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 font-bold text-pretty mb-10">
          TEAM MEMBERS
        </h2>
        </div>
          <div className="container mx-auto grid gap-x-20 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {currentMembers.map((person) => (
              <div key={person.id} className="flex flex-col items-start ">
                <Avatar className="mb-4 size-44 md:mb-5 lg:size-52">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback/>
                </Avatar>
                <p className="font-medium">{person.name}</p>
                <p className="py-1 text-sm text-muted-foreground">
                  {person.focus}
                </p>
                <p className="py-1 text-sm text-muted-foreground">{person.term}</p>
                <div className="mt-2 flex gap-4">
                  {person.linkedin && (
                    <a href={person.linkedin}>
                      <img src={Linkedin} className="size-5 text-muted-foreground"></img>
                    </a>
                  )}
                  {person.github && (
                    <a href={person.github}>
                      <img src={Github} className="size-5 text-muted-foreground"></img>
                    </a>
                  )}
                  {person.dribbble && (
                    <a href={person.dribbble}>
                      <img src={Dribbble} className="size-5 text-muted-foreground"></img>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="my-6 font-bold text-pretty mb-10">
            FORMER MEMBERS
          </h2>
        </div>
          <div className="container mt-16 grid gap-x-20 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {formerMembers.map((person) => (
              <div key={person.id} className="flex flex-col items-start">
                <Avatar className="mb-4 size-44 md:mb-5 lg:size-52">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name}</AvatarFallback>
                </Avatar>
                <p className="font-medium">{person.name}</p>
                {person.company && (
                  <p className="py-1 text-sm font-bold text-muted-foreground opacity-50">{person.company}</p>
                )}
                <p className="py-1 text-sm text-muted-foreground">
                  {person.focus}
                </p>
                <p className="py-1 text-sm text-muted-foreground">{person.term}</p>
                <div className="mt-2 flex gap-4">
                  {person.linkedin && (
                    <a href={person.linkedin}>
                      <img src={Linkedin} className="size-5 text-muted-foreground"></img>
                    </a>
                  )}
                  {person.github && (
                    <a href={person.github}>
                      <img src={Github} className="size-5 text-muted-foreground"></img>
                    </a>
                  )}
                  {person.dribbble && (
                    <a href={person.dribbble}>
                      <img src={Dribbble} className="size-5 text-muted-foreground"></img>
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
    </section>
  )
}

export default Member 