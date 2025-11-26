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
  // Top 5 Programming Languages
  "JavaScript",
  "Python",
  "Java",
  "TypeScript",
  "C++",
  // Top 5 Databases
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Firebase",
  // Top 10 APIs
  "PokeAPI",
  "OpenWeatherMap",
  "NASA APOD",
  "REST Countries",
  "Random User Generator",
  "The Dog API",
  "Cat Facts",
  "JSONPlaceholder",
  "TMDB",
  "CoinGecko",
];

const technologyNouns = {
  "JavaScript": ["Interactive Dashboard", "Browser Game", "Real-time Chat", "Data Visualization", "Task Manager", "Weather Widget", "Form Validator", "Calculator"],
  "Python": ["Data Analysis Tool", "Web Scraper", "Automation Script", "Machine Learning Model", "Flask API", "Discord Bot", "Image Processor", "File Organizer"],
  "Java": ["Android App", "Enterprise System", "Inventory Manager", "Banking System", "Student Record System", "Library Management", "Game Engine", "Desktop Application"],
  "TypeScript": ["Strictly Typed API", "Large Scale App", "React Component Library", "Next.js Dashboard", "Node.js Backend", "Type-Safe Form", "Refactoring Tool", "CLI Tool"],
  "C++": ["Game Engine", "System Monitor", "Embedded System", "High-Performance Solver", "Graphics Renderer", "Audio Processor", "Physics Engine", "Operating System Kernel"],
  "PostgreSQL": ["User Database", "Financial Ledger", "Inventory Catalog", "Employee Directory", "Analytics Store", "Geospatial Data", "Relational Schema", "Transaction Log"],
  "MongoDB": ["Content Management System", "Social Media Feed", "Product Catalog", "User Profiles", "IoT Data Store", "Real-time Analytics", "Mobile App Backend", "Logging System"],
  "MySQL": ["eCommerce Platform", "WordPress Plugin", "Forum Database", "Customer CRM", "Booking System", "School Management", "Blog Backend", "Ticket System"],
  "SQLite": ["Local Cache", "Mobile App Storage", "Embedded Device DB", "Configuration Store", "Browser Extension Data", "Testing Database", "Personal Diary", "To-Do List"],
  "Firebase": ["Real-time Chat", "Live Leaderboard", "User Authentication", "Push Notifications", "Serverless Function", "Mobile Backend", "Collaborative Editor", "Social Feed"],
  "PokeAPI": ["Pokedex", "Battle Simulator", "Team Builder", "Pokemon Guessing Game", "Type Calculator", "Evolution Chart", "Move Dex", "Berry Guide"],
  "OpenWeatherMap": ["Weather Dashboard", "Forecast App", "Travel Planner", "Event Scheduler", "Agriculture Monitor", "Clothing Recommender", "Flight Tracker", "Outdoor Activity Guide"],
  "NASA APOD": ["Astronomy Gallery", "Space Wallpaper App", "Educational Tool", "Daily Space Fact", "Cosmos Explorer", "Star Map", "Universe Trivia", "Visual Storyteller"],
  "REST Countries": ["Country Guide", "Flag Quiz", "Travel Visualizer", "Currency Converter", "Geography Learning Tool", "Population Visualizer", "Language Map", "Capital City Game"],
  "Random User Generator": ["User Directory Mockup", "Contact List", "Profile Card Generator", "Social Network Prototype", "Employee Roster", "Test Data Seeder", "Avatar Gallery", "Identity Generator"],
  "The Dog API": ["Breed Explorer", "Dog Gallery", "Adoption Matcher", "Puppy Finder", "Random Dog Generator", "Canine Encyclopedia", "Dog Quiz", "Pet Care Guide"],
  "Cat Facts": ["Daily Cat Fact", "Cat Trivia Game", "Feline Encyclopedia", "Random Fact Widget", "Cat Lover's App", "Educational Quiz", "Fact Sharer", "Meow Messenger"],
  "JSONPlaceholder": ["Blog Prototype", "Comment System", "Photo Album", "User Dashboard", "Todo List Demo", "Post Feed", "API Testing Tool", "Frontend Mockup"],
  "TMDB": ["Movie Recommender", "TV Show Tracker", "Actor Database", "Cinema Guide", "Watchlist Manager", "Rating System", "Trailer Viewer", "Genre Explorer"],
  "CoinGecko": ["Crypto Tracker", "Portfolio Manager", "Price Alert System", "Market Visualizer", "Coin Converter", "Trading Simulator", "Blockchain Explorer", "Historical Data Viewer"]
};

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
          {technologies.length} technologies × specialized topics = hundreds of possible combinations
        </p>
      </div>
    </div>
  );
}