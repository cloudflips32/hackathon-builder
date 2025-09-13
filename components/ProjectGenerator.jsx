"use client";

import { useState } from "react";
import { Shuffle, Lightbulb, Code, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const technologies = [
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
  "Python",
  "Flutter",
  "SwiftUI",
  "Kotlin",
  "TypeScript",
  "Next.js",
  "Express.js",
  "FastAPI",
  "Django",
  "Ruby on Rails",
  "Go",
  "Rust",
  "WebAssembly",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Firebase",
  "Supabase",
  "Vercel",
  "TensorFlow",
  "PyTorch",
  "OpenAI",
  "Stripe",
  "Twilio",
  "Socket.io",
  "Three.js",
  "D3.js",
  "Chart.js",
  "Tailwind CSS",
  "Material-UI",
  "Chakra UI",
  "Framer Motion",
  "GSAP",
];

const nouns = [
  "Cats",
  "Dogs",
  "Coffee",
  "Pizza",
  "Books",
  "Music",
  "Weather",
  "Travel",
  "Photos",
  "Movies",
  "Games",
  "Fitness",
  "Health",
  "Food",
  "Plants",
  "Cars",
  "Bikes",
  "Art",
  "Fashion",
  "News",
  "Sports",
  "Shopping",
  "Education",
  "Productivity",
  "Social",
  "Dating",
  "Finance",
  "Crypto",
  "NFTs",
  "Podcasts",
  "Meditation",
  "Sleep",
  "Recipes",
  "Gardening",
  "Pets",
  "Space",
  "Ocean",
  "Mountains",
  "Cities",
  "Architecture",
  "Interior Design",
  "Photography",
  "Dancing",
  "Cooking",
  "Baking",
  "Wine",
  "Beer",
  "Cocktails",
  "Startups",
  "Remote Work",
  "Freelancing",
  "Languages",
  "Translation",
  "Culture",
  "History",
  "Geography",
  "Science",
  "Shoes,",
  "Burgers",
  "Ice Cream",
];

export default function ProjectGenerator() {
  const [currentProject, setCurrentProject] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateProject = () => {
    setIsGenerating(true);

    // Add a small delay for better UX
    setTimeout(() => {
      const randomTech =
        technologies[
          Math.floor(Math.random() * technologies.length)
        ];
      const randomNoun =
        nouns[Math.floor(Math.random() * nouns.length)];

      setCurrentProject({
        technology: randomTech,
        noun: randomNoun,
      });
      setIsGenerating(false);
    }, 500);
  };

  const generateIdea = () => {
    if (!currentProject) return "Generate your first project!";

    const ideas = [
      `A ${currentProject.technology} app that helps people discover and share ${currentProject.noun.toLowerCase()}`,
      `Build a ${currentProject.technology} platform for ${currentProject.noun.toLowerCase()} enthusiasts to connect`,
      `Create a ${currentProject.technology} tool that gamifies ${currentProject.noun.toLowerCase()}`,
      `Develop a ${currentProject.technology} marketplace for ${currentProject.noun.toLowerCase()}`,
      `Design a ${currentProject.technology} dashboard to track and analyze ${currentProject.noun.toLowerCase()}`,
      `A ${currentProject.technology} social network focused on ${currentProject.noun.toLowerCase()}`,
      `Build a ${currentProject.technology} recommendation engine for ${currentProject.noun.toLowerCase()}`,
      `Create a ${currentProject.technology} automation tool for ${currentProject.noun.toLowerCase()} management`,
    ];

    return ideas[Math.floor(Math.random() * ideas.length)];
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Lightbulb className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-semibold">
            Hackathon Generator
          </h1>
        </div>
        <p className="text-muted-foreground">
          Generate random project ideas by combining
          technologies with interesting topics
        </p>
      </div>

      {/* Generator Button */}
      <Button
        onClick={generateProject}
        disabled={isGenerating}
        size="lg"
        className="w-full max-w-sm"
      >
        {isGenerating ? (
          <>
            <Shuffle className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Shuffle className="mr-2 h-5 w-5" />
            Generate Project
          </>
        )}
      </Button>

      {/* Results */}
      {currentProject && (
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Your Project</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="text-sm">
                {currentProject.technology}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {currentProject.noun}
              </Badge>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Rocket className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm leading-relaxed">
                  {generateIdea()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="text-center text-sm text-muted-foreground">
        <p>
          {technologies.length} technologies × {nouns.length}{" "}
          topics = {technologies.length * nouns.length} possible
          combinations
        </p>
      </div>
    </div>
  );
}