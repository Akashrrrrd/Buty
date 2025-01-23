import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import SplashScreen from "./components/SplashScreen";
import side_1 from "./assets/side_1.png";
import side_2 from "./assets/side_2.png";
import side_3 from "./assets/side_3.png";
import side_4 from "./assets/side_4.png";
import side_5 from "./assets/side_5.png";
import side_6 from "./assets/side_6.png";
import side_7 from "./assets/side_7.png";
import side_8 from "./assets/side_8.png";
import side_9 from "./assets/side_9.png";
import side_10 from "./assets/side_10.png";
import content_1 from "./assets/content_1.png";
import content_2 from "./assets/content_2.png";
import content_3 from "./assets/content_3.png";
import content_4 from "./assets/content_4.png";
import content_5 from "./assets/content_5.png";
import content_6 from "./assets/content_6.png";
import content_7 from "./assets/content_7.png";
import content_8 from "./assets/content_8.png";
import content_9 from "./assets/content_9.png";
import content_10 from "./assets/content_10.png";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sidebarItems = [
    {
      icon: side_1,
      text: "Infinite Jobs",
      content: {
        title: "Infinite Jobs",
        description:
          "In a single resource you will have 20 preconfigured jobs, in the most optimized way possible.",
        releaseDate: "Available on January 25",
        image: content_1,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_2,
      text: "Infinite Activities",
      content: {
        title: "INFINITE ACTIVITIES",
        description:
          "Experience endless possibilities with our activity system.",
        releaseDate: "Coming soon",
        image: content_2,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_3,
      text: "Gardener Job",
      content: {
        title: "GARDENER JOB",
        description: "Start your journey as a professional gardener.",
        releaseDate: "Available now",
        image: content_3,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_4,
      text: "Flight School",
      content: {
        title: "FLIGHT SCHOOL",
        description: "Learn to fly with our advanced flight training program.",
        releaseDate: "Available on February 15",
        image: content_4,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_5,
      text: "Boat School",
      content: {
        title: "BOAT SCHOOL",
        description: "Master the art of sailing and navigate the waters.",
        releaseDate: "Available on March 10",
        image: content_5,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_6,
      text: "License System",
      content: {
        title: "LICENSE SYSTEM",
        description: "A modern license system to streamline operations.",
        releaseDate: "Coming soon",
        image: content_6,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_7,
      text: "Modern Vehicle Shop",
      content: {
        title: "MODERN VEHICLE SHOP",
        description:
          "Discover a wide range of modern vehicles available for purchase.",
        releaseDate: "Available on April 5",
        image: content_7,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_8,
      text: "Advanced Miner Job",
      content: {
        title: "ADVANCED MINER JOB",
        description: "Upgrade your mining skills with our advanced job system.",
        releaseDate: "Available now",
        image: content_8,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_9,
      text: "Advanced Garbage Job",
      content: {
        title: "ADVANCED GARBAGE JOB",
        description:
          "Manage waste efficiently with our advanced garbage job system.",
        releaseDate: "Available now",
        image: content_9,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
    {
      icon: side_10,
      text: "Advanced Progress Bar",
      content: {
        title: "ADVANCED PROGRESS BAR",
        description:
          "Track your progress visually with our advanced progress bar system.",
        releaseDate: "Available on May 20",
        image: content_10,
        buttons: {
          primary: "TRY IT NOW",
          secondary: "CLICK TO BUY",
        },
      },
    },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowItemDetails(true);
    setIsSidebarOpen(true);
  };

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <div className="app">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        selectedItem={selectedItem}
        setSelectedItem={handleItemClick}
        sidebarItems={sidebarItems}
        showItemDetails={showItemDetails}
      />
      <Home
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        selectedItem={selectedItem}
        setSelectedItem={handleItemClick}
        sidebarItems={sidebarItems}
      />
    </div>
  );
};

export default App;
