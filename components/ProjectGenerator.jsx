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
import { technologies, technologyNouns, technologyIdeas } from "../db/hackathon-outputs";

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
      
      const techNouns = technologyNouns[randomTech] || ["Project"];
      const randomNoun =
        techNouns[Math.floor(Math.random() * techNouns.length)];

      setCurrentProject({
        technology: randomTech,
        noun: randomNoun,
      });
      setIsGenerating(false);
    }, 500);
  };

  const generateIdea = () => {
    if (!currentProject) return "Generate your first project!";

    const techIdeas = technologyIdeas[currentProject.technology] || [
      `A ${currentProject.technology} app that helps people discover and share ${currentProject.noun}`,
      `Build a ${currentProject.technology} platform for ${currentProject.noun} enthusiasts to connect`,
    ];
    
    const randomIdeaTemplate = techIdeas[Math.floor(Math.random() * techIdeas.length)];
    
    // Replace ${noun} placeholder with the actual noun
    return randomIdeaTemplate.replace(/\${noun}/g, currentProject.noun);
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
          {technologies.length} technologies × specialized topics = hundreds of possible combinations
        </p>
      </div>
    </div>
  );
}