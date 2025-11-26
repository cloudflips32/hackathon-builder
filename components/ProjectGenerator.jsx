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
  "JavaScript": ["an Interactive Dashboard", "a Browser Game", "a Real-time Chat", "a Data Visualization", "a Task Manager", "a Weather Widget", "a Form Validator", "a Calculator"],
  "Python": ["a Data Analysis Tool", "a Web Scraper", "a Automation Script", "a Machine Learning Model", "a Flask API", "a Discord Bot", "a Image Processor", "a File Organizer"],
  "Java": ["an Android App", "an Enterprise System", "an Inventory Manager", "a Banking System", "a Student Record System", "a Library Management", "a Game Engine", "a Desktop Application"],
  "TypeScript": ["a Strictly Typed API", "a Large Scale App", "a React Component Library", "a Next.js Dashboard", "a Node.js Backend", "a Type-Safe Form", "a Refactoring Tool", "a CLI Tool"],
  "C++": ["a Game Engine", "a System Monitor", "an Embedded System", "a High-Performance Solver", "a Graphics Renderer", "a Audio Processor", "a Physics Engine", "a Operating System Kernel"],
  "PostgreSQL": ["a User Database", "a Financial Ledger", "a Inventory Catalog", "a Employee Directory", "a Analytics Store", "a Geospatial Data", "a Relational Schema", "a Transaction Log"],
  "MongoDB": ["a Content Management System", "a Social Media Feed", "a Product Catalog", "a User Profiles", "an IoT Data Store", "a Real-time Analytics", "a Mobile App Backend", "a Logging System"],
  "MySQL": ["an eCommerce Platform", "a WordPress Plugin", "a Forum Database", "a Customer CRM", "a Booking System", "a School Management", "a Blog Backend", "a Ticket System"],
  "SQLite": ["a Local Cache", "a Mobile App Storage", "an Embedded Device DB", "a Configuration Store", "a Browser Extension Data", "a Testing Database", "a Personal Diary", "a To-Do List"],
  "Firebase": ["a Real-time Chat", "a Live Leaderboard", "a User Authentication", "Push Notifications", "Serverless Function", "Mobile Backend", "Collaborative Editor", "Social Feed"],
  "PokeAPI": ["a Pokedex", "a Battle Simulator", "a Team Builder", "a Pokemon Guessing Game", "a Type Calculator", "an Evolution Chart", "a Move Dex", "a Berry Guide"],
  "OpenWeatherMap": ["a Weather Dashboard", "a Forecast App", "a Travel Planner", "a Event Scheduler", "a Agriculture Monitor", "a Clothing Recommender", "a Flight Tracker", "a Outdoor Activity Guide"],
  "NASA APOD": ["an Astronomy Gallery", "a Space Wallpaper App", "an Educational Tool", "a Daily Space Fact", "a Cosmos Explorer", "a Star Map", "a Universe Trivia", "a Visual Storyteller"],
  "REST Countries": ["a Country Guide", "a Flag Quiz", "a Travel Visualizer", "a Currency Converter", "a Geography Learning Tool", "a Population Visualizer", "a Language Map", "a Capital City Game"],
  "Random User Generator": ["a User Directory Mockup", "a Contact List", "a Profile Card Generator", "a Social Network Prototype", "a Employee Roster", "a Test Data Seeder", "a Avatar Gallery", "a Identity Generator"],
  "The Dog API": ["a Breed Explorer", "a Dog Gallery", "an Adoption Matcher", "a Puppy Finder", "a Random Dog Generator", "a Canine Encyclopedia", "a Dog Quiz", "a Pet Care Guide"],
  "Cat Facts": ["a Daily Cat Fact", "a Cat Trivia Game", "a Feline Encyclopedia", "a Random Fact Widget", "a Cat Lover's App", "an Educational Quiz", "a Fact Sharer", "a Meow Messenger"],
  "JSONPlaceholder": ["a Blog Prototype", "a Comment System", "a Photo Album", "a User Dashboard", "a Todo List Demo", "a Post Feed", "a API Testing Tool", "a Frontend Mockup"],
  "TMDB": ["a Movie Recommender", "a TV Show Tracker", "an Actor Database", "a Cinema Guide", "a Watchlist Manager", "a Rating System", "a Trailer Viewer", "a Genre Explorer"],
  "CoinGecko": ["a Crypto Tracker", "a Portfolio Manager", "a Price Alert System", "a Market Visualizer", "a Coin Converter", "a Trading Simulator", "a Blockchain Explorer", "a Historical Data Viewer"]
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