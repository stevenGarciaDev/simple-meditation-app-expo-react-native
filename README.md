<div align="center">
  <br />
    <a href="https://www.youtube.com/channel/UCzrpTaJWhZZNLLE_3obvE2Q" target="_blank">
      <img src="https://i.postimg.cc/rygDVH1m/React-Native-Git-Hub-Cover.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-expo-black?style=for-the-badge&logoColor=white&logo=expo&color=FD366E" alt="expo" />
    <img src="https://img.shields.io/badge/NativeWind-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="nativewind" />
  </div>

  <h3 align="center">Meditation and Affirmations App</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on the <a href="https://www.youtube.com/channel/UCzrpTaJWhZZNLLE_3obvE2Q/videos" target="_blank"><b>StevenCodeCraft</b></a> YouTube channel.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/channel/UCzrpTaJWhZZNLLE_3obvE2Q" target="_blank"><b>StevenCodeCraft</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://www.youtube.com/channel/UCzrpTaJWhZZNLLE_3obvE2Q" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Built with React Native to deliver seamless user experiences, this app features a clean design utilizing FlatLists, Linear Gradients, modals, tab bars, icons, and file-based routing with Expo Router.

## <a name="tech-stack">⚙️ Tech Stack</a>

-   React Native
-   Expo
-   NativeWind
-   JavaScript
-   TypeScript

## <a name="features">🔋 Features</a>

👉 **Onboarding Screen**: Welcome screen with a linear gradient to help users get started with the app.

👉 **Meditation List Screen with Flat List**: A flat list displays previews of various meditations with corresponding images.

👉 **Audio Playing Capability**: Control audio playback and manage a meditation countdown timer.

👉 **Tab Navigation**: Navigate between sections like the Meditation Screen and Affirmations screen with ease using tab navigation.

👉 **Responsiveness**: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

-   [Git](https://git-scm.com/)
-   [Node.js](https://nodejs.org/en)
-   [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/stevenGarciaDev/simple-meditation-app-expo-react-native.git
cd simple-meditation-app-expo-react-native
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npx expo start
```

**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
        "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
        "./app/(tabs)/meditate.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                rmono: ["Roboto-Mono", "sans-serif"],
            },
        },
    },
    plugins: [],
};
```

</details>

<details>
<summary><code>Font Loaded</code></summary>

```javascript
const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
});
```

</details>

<details>
<summary><code>TypeScript file for Affirmation Images</code></summary>

```javascript
import californiaBackyardOne from "@/assets/affirmation-images/California-backyard-1.webp";
import californiaBackyardTwo from "@/assets/affirmation-images/California-backyard-2.webp";
import californiaBackyardThree from "@/assets/affirmation-images/California-backyard-3.webp";
import californiaBackyardFour from "@/assets/affirmation-images/California-backyard-4.webp";

import englishCountrysideOne from "@/assets/affirmation-images/english-countryside-1.webp";
import englishCountrysideTwo from "@/assets/affirmation-images/english-countryside-2.webp";
import englishCountrysideThree from "@/assets/affirmation-images/english-countryside-3.webp";
import englishCountrysideFour from "@/assets/affirmation-images/english-countryside-4.webp";

import mountainMeditateOne from "@/assets/affirmation-images/mountain-meditate-1.webp";
import mountainMeditateTwo from "@/assets/affirmation-images/mountain-meditate-2.webp";
import mountainMeditateThree from "@/assets/affirmation-images/mountain-meditate-3.webp";
import mountainMeditateFour from "@/assets/affirmation-images/mountain-meditate-4.webp";

import nightSkyOne from "@/assets/affirmation-images/night-sky-1.webp";
import nightSkyTwo from "@/assets/affirmation-images/night-sky-2.webp";
import nightSkyThree from "@/assets/affirmation-images/night-sky-3.webp";
import nightSkyFour from "@/assets/affirmation-images/night-sky-4.webp";

import oregonOne from "@/assets/affirmation-images/oregon-1.webp";
import oregonTwo from "@/assets/affirmation-images/oregon-2.webp";
import oregonThree from "@/assets/affirmation-images/oregon-3.webp";
import oregonFour from "@/assets/affirmation-images/oregon-4.webp";

import relaxingRiverOne from "@/assets/affirmation-images/relaxing-river-1.webp";
import relaxingRiverTwo from "@/assets/affirmation-images/relaxing-river-2.webp";
import relaxingRiverThree from "@/assets/affirmation-images/relaxing-river-3.webp";
import relaxingRiverFour from "@/assets/affirmation-images/relaxing-river-4.webp";

import tuscannyOne from "@/assets/affirmation-images/Tuscanny-1.webp";
import tuscannyTwo from "@/assets/affirmation-images/Tuscanny-2.webp";
import tuscannyThree from "@/assets/affirmation-images/Tuscanny-3.webp";
import tuscannyFour from "@/assets/affirmation-images/Tuscanny-4.webp";

export default {
    californiaBackyardOne,
    californiaBackyardTwo,
    californiaBackyardThree,
    californiaBackyardFour,
    englishCountrysideOne,
    englishCountrysideTwo,
    englishCountrysideThree,
    englishCountrysideFour,
    mountainMeditateOne,
    mountainMeditateTwo,
    mountainMeditateThree,
    mountainMeditateFour,
    nightSkyOne,
    nightSkyTwo,
    nightSkyThree,
    nightSkyFour,
    oregonOne,
    oregonTwo,
    oregonThree,
    oregonFour,
    relaxingRiverOne,
    relaxingRiverTwo,
    relaxingRiverThree,
    relaxingRiverFour,
    tuscannyOne,
    tuscannyTwo,
    tuscannyThree,
    tuscannyFour,
};
```

</details>

<details>
<summary><code>TypeScript file for Meditation images</code></summary>

```javascript
import treeImage from "@/assets/meditation-images/trees.webp";
import meditatingUnderTree from "@/assets/meditation-images/meditate-under-tree.webp";
import riverImage from "@/assets/meditation-images/river.webp";
import beachImage from "@/assets/meditation-images/beach.webp";
import yosemiteStars from "@/assets/meditation-images/yosemite-stars.webp";
import waterfall from "@/assets/meditation-images/waterfall.webp";

export default [
    treeImage,
    riverImage,
    meditatingUnderTree,
    beachImage,
    yosemiteStars,
    waterfall,
];
```

</details>

<details>
<summary><code>TypeScript file for Meditation data</code></summary>

```javascript
export interface MeditationType {
    id: number;
    title: string;
    image: string;
    audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
    {
        id: 1,
        title: "Mountains",
        image: "trees.webp",
        audio: "trees.mp3",
    },
    {
        id: 2,
        title: "Rivers",
        image: "river.webp",
        audio: "river.mp3",
    },
    {
        id: 3,
        title: "Sunset",
        image: "meditate-under-tree.webp",
        audio: "meditate-under-tree.mp3",
    },
    {
        id: 4,
        title: "Beaches",
        image: "beach.webp",
        audio: "beach.mp3",
    },
    {
        id: 5,
        title: "Starry Night",
        image: "yosemite-stars.webp",
        audio: "yosemite-stars.mp3",
    },
    {
        id: 6,
        title: "Waterfall",
        image: "waterfall.webp",
        audio: "waterfall.mp3",
    },
];

export const AUDIO_FILES: { [key: string]: any } = {
    "trees.mp3": require("@/assets/audio/trees.mp3"),
    "river.mp3": require("@/assets/audio/river.mp3"),
    "meditate-under-tree.mp3": require("@/assets/audio/meditate-under-tree.mp3"),
    "beach.mp3": require("@/assets/audio/beach.mp3"),
    "yosemite-stars.mp3": require("@/assets/audio/yosemite-stars.mp3"),
    "waterfall.mp3": require("@/assets/audio/waterfall.mp3"),
};
```

</details>

## <a name="links">🔗 Links</a>

Assets and constants used in the project can be found [here](https://drive.google.com/drive/folders/1ZNn-26vUkscU4Bx08BQsyY_i0HkbuzH5?usp=sharing)

## <a name="more">🚀 More</a>

**Advance your skills with StevenCodeCraft Courses**

Enjoyed creating this project? Dive deeper into web development fundamentals with our PRO courses, offering beginner-friendly learning material. Give it a go!"

<a href="https://stevencodecraft.com" target="_blank">
    StevenCodeCraft.com
</a>
