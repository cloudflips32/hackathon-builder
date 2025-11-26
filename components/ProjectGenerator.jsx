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

const technologyIdeas = {
  "JavaScript": [
    "Build a ${noun} that runs entirely in the browser using LocalStorage.",
    "Create a real-time ${noun} using WebSockets and vanilla JS.",
    "Develop a ${noun} with a focus on accessibility and keyboard navigation.",
    "Design a ${noun} that uses the Canvas API for interactive elements.",
    "Make a ${noun} as a Progressive Web App (PWA) for offline capability.",
    "Create a ${noun} that visualizes complex data structures.",
    "Build a ${noun} that interacts with public APIs using Fetch.",
    "Develop a ${noun} game engine from scratch."
  ],
  "Python": [
    "Write a script that automates the creation of ${noun}.",
    "Build a CLI tool for managing ${noun} efficiently.",
    "Create a data analysis pipeline for ${noun} statistics.",
    "Develop a Flask application that serves ${noun} data.",
    "Train a machine learning model to predict trends in ${noun}.",
    "Build a web scraper to aggregate ${noun} information.",
    "Create a ${noun} bot for Discord or Slack.",
    "Develop a GUI application for ${noun} using Tkinter or PyQt."
  ],
  "Java": [
    "Build a robust ${noun} using Spring Boot microservices.",
    "Develop a multi-threaded ${noun} for high-performance processing.",
    "Create a desktop ${noun} application using JavaFX.",
    "Design an Android app for ${noun} management on the go.",
    "Implement a secure ${noun} system with role-based access control.",
    "Build a ${noun} that connects to a legacy database system.",
    "Develop a ${noun} simulation engine using object-oriented principles.",
    "Create a RESTful API for ${noun} services."
  ],
  "TypeScript": [
    "Build a type-safe ${noun} with end-to-end type coverage.",
    "Create a ${noun} library and publish it to NPM.",
    "Develop a ${noun} using Next.js and server-side rendering.",
    "Refactor an existing JS ${noun} codebase to strict TypeScript.",
    "Build a ${noun} that uses advanced generic types for flexibility.",
    "Create a ${noun} CLI with strict argument parsing.",
    "Develop a ${noun} dashboard with real-time type validation.",
    "Design a ${noun} architecture using interfaces and abstract classes."
  ],
  "C++": [
    "Develop a high-performance ${noun} engine with memory management.",
    "Build a ${noun} that runs on embedded hardware.",
    "Create a ${noun} simulation with real-time physics.",
    "Write a ${noun} system monitor with low-level OS hooks.",
    "Develop a cross-platform ${noun} application using Qt.",
    "Implement a custom ${noun} algorithm for maximum efficiency.",
    "Build a ${noun} game using OpenGL or Vulkan.",
    "Create a ${noun} audio processing tool."
  ],
  "PostgreSQL": [
    "Design a normalized database schema for a complex ${noun}.",
    "Build a ${noun} that uses advanced JSONB queries.",
    "Create a ${noun} with complex stored procedures and triggers.",
    "Develop a ${noun} analytics platform using materialized views.",
    "Implement a ${noun} search engine using full-text search.",
    "Build a geospatial ${noun} using PostGIS extensions.",
    "Create a secure ${noun} ledger with row-level security.",
    "Optimize a high-traffic ${noun} database with custom indexing."
  ],
  "MongoDB": [
    "Build a flexible ${noun} that handles unstructured data.",
    "Create a ${noun} with a focus on horizontal scalability.",
    "Develop a real-time ${noun} feed using Change Streams.",
    "Design a ${noun} schema optimized for read-heavy workloads.",
    "Build a ${noun} that aggregates data using the aggregation pipeline.",
    "Create a geospatial ${noun} app using location queries.",
    "Develop a ${noun} caching layer for a larger system.",
    "Implement a ${noun} logging system for high-volume events."
  ],
  "MySQL": [
    "Build a classic LAMP stack ${noun} application.",
    "Design a relational ${noun} database for an e-commerce platform.",
    "Create a ${noun} with ACID compliance for financial transactions.",
    "Develop a ${noun} content management system.",
    "Optimize a ${noun} database for complex join operations.",
    "Build a replicated ${noun} system for high availability.",
    "Create a ${noun} reporting tool using complex SQL queries.",
    "Implement a ${noun} user authentication system."
  ],
  "SQLite": [
    "Build a local-first ${noun} app that syncs when online.",
    "Create a lightweight ${noun} for an IoT device.",
    "Develop a ${noun} configuration manager for a desktop app.",
    "Build a ${noun} testing utility with an in-memory database.",
    "Create a private ${noun} journal that lives on a USB drive.",
    "Develop a ${noun} browser extension with local storage.",
    "Build a portable ${noun} catalog application.",
    "Implement a ${noun} cache for offline data access."
  ],
  "Firebase": [
    "Build a real-time ${noun} with live updates across clients.",
    "Create a serverless ${noun} using Cloud Functions.",
    "Develop a ${noun} with simple social login authentication.",
    "Build a collaborative ${noun} where users edit together.",
    "Create a ${noun} that sends push notifications on updates.",
    "Develop a mobile-first ${noun} with offline persistence.",
    "Build a scalable ${noun} chat application.",
    "Implement a ${noun} file sharing system using Storage."
  ],
  "PokeAPI": [
    "Build a comprehensive ${noun} with search and filter capabilities.",
    "Create a ${noun} that compares stats between Pokemon.",
    "Develop a ${noun} minigame using sprite assets.",
    "Build a ${noun} team planner with type effectiveness analysis.",
    "Create a ${noun} that visualizes evolution chains.",
    "Develop a daily ${noun} challenge app.",
    "Build a ${noun} quiz game to test knowledge.",
    "Create a ${noun} that generates random encounters."
  ],
  "OpenWeatherMap": [
    "Build a ${noun} that alerts users of severe conditions.",
    "Create a travel-focused ${noun} for packing recommendations.",
    "Develop a ${noun} that visualizes historical weather data.",
    "Build an agricultural ${noun} for crop management.",
    "Create a ${noun} that suggests outdoor activities.",
    "Develop a ${noun} widget for a smart mirror.",
    "Build a ${noun} that compares climates of two cities.",
    "Create a ${noun} that tracks weather patterns over time."
  ],
  "NASA APOD": [
    "Build a gallery-style ${noun} for browsing space images.",
    "Create an educational ${noun} for learning about the cosmos.",
    "Develop a ${noun} that sets the daily image as wallpaper.",
    "Build a ${noun} screensaver for public displays.",
    "Create a ${noun} that explains the science behind the photo.",
    "Develop a ${noun} quiz based on space facts.",
    "Build a ${noun} that lets users rate and save favorites.",
    "Create a ${noun} visualizer for exploring the archive."
  ],
  "REST Countries": [
    "Build a ${noun} for learning world geography.",
    "Create a ${noun} that visualizes population density.",
    "Develop a travel ${noun} for visa and currency info.",
    "Build a ${noun} game to guess flags and capitals.",
    "Create a ${noun} that compares economic statistics.",
    "Develop a ${noun} for finding neighboring countries.",
    "Build a ${noun} that sorts countries by various metrics.",
    "Create a ${noun} dashboard for global demographics."
  ],
  "Random User Generator": [
    "Build a ${noun} for populating design mockups.",
    "Create a ${noun} to test pagination and sorting.",
    "Develop a ${noun} directory with search functionality.",
    "Build a ${noun} that simulates a social network feed.",
    "Create a ${noun} for testing contact management apps.",
    "Develop a ${noun} that generates diverse user personas.",
    "Build a ${noun} visualization of user distribution.",
    "Create a ${noun} for stress-testing database inserts."
  ],
  "The Dog API": [
    "Build a ${noun} for identifying dog breeds.",
    "Create a ${noun} that matches users with their ideal dog.",
    "Develop a ${noun} gallery with infinite scrolling.",
    "Build a ${noun} quiz to test breed knowledge.",
    "Create a ${noun} for random daily dog cuteness.",
    "Develop a ${noun} that compares breed temperaments.",
    "Build a ${noun} adoption simulator.",
    "Create a ${noun} screensaver of random dogs."
  ],
  "Cat Facts": [
    "Build a ${noun} that delivers a daily fact notification.",
    "Create a ${noun} widget for a home screen.",
    "Develop a ${noun} SMS bot that texts facts to friends.",
    "Build a ${noun} quiz: Fact or Fiction?",
    "Create a ${noun} that pairs facts with cute images.",
    "Develop a ${noun} voice app that reads facts aloud.",
    "Build a ${noun} social app for sharing favorite facts.",
    "Create a ${noun} calendar with a fact for every day."
  ],
  "JSONPlaceholder": [
    "Build a ${noun} to practice CRUD operations.",
    "Create a ${noun} that simulates a blog platform.",
    "Develop a ${noun} dashboard for user management.",
    "Build a ${noun} photo album viewer.",
    "Create a ${noun} comment moderation tool.",
    "Develop a ${noun} to test infinite loading patterns.",
    "Build a ${noun} that visualizes nested data relationships.",
    "Create a ${noun} boilerplate for future projects."
  ],
  "TMDB": [
    "Build a ${noun} for discovering hidden gems.",
    "Create a ${noun} that tracks watched episodes.",
    "Develop a ${noun} for creating and sharing lists.",
    "Build a ${noun} that suggests movies based on mood.",
    "Create a ${noun} that visualizes actor connections.",
    "Develop a ${noun} for rating and reviewing titles.",
    "Build a ${noun} calendar for upcoming releases.",
    "Create a ${noun} that analyzes box office trends."
  ],
  "CoinGecko": [
    "Build a ${noun} for tracking portfolio value.",
    "Create a ${noun} that alerts on price spikes.",
    "Develop a ${noun} dashboard for market analysis.",
    "Build a ${noun} for comparing coin performance.",
    "Create a ${noun} that converts currencies in real-time.",
    "Develop a ${noun} simulator for risk-free trading.",
    "Build a ${noun} that visualizes historical price data.",
    "Create a ${noun} news aggregator for crypto assets."
  ]
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