import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

export default function ProjectCard(props: {
  title: string;
  tags: string[];
  image?: string;
}) {
  const { title, tags, image } = props;
  return (
    <Card className="p-4">
      {image ? (
        <div className="aspect-video rounded-md">
          <Image src={image} alt={title} fill />
        </div>
      ) : (
        <div className="bg-black aspect-video rounded-md" />
      )}
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      <div className="flex justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-card text-sm text-card-foreground-hover border font-bold border-card-border px-4 py-1 rounded-md flex justify-center items-center hover:ring-1 hover:bg-card-hover hover:ring-card-border transition-colors cursor-default"
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <Button variant="default" className="capitalize font-bold">
          <ChevronRight />
        </Button>
      </div>
    </Card>
  );
}
