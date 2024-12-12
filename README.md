<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Personal Portfolio Website</h3>

  <p align="center">
    A personal portfolio website with a blog, projects, about, and contact sections.
    <br />
    <a href="https://github.com/your-username/portfolio-website"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/your-username/portfolio-website">View Demo</a>
    ·
    <a href="https://github.com/your-username/portfolio-website/issues">Report Bug</a>
    ·
    <a href="https://github.com/your-username/portfolio-website/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This repository contains the code for my personal portfolio website. The website features a blog, project showcases, an about me section, and a contact form. It is designed to be a comprehensive platform to display my skills, experience, and thoughts through blog posts and video related content.

Here's why I built it:

- To have a professional online presence
- To share my knowledge and experience through blogging
- To showcase my projects in a well-organized manner
- To provide a way for potential employers or collaborators to contact me

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project is built using the following technologies:

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Tailwind CSS][Tailwind-css]][Tailwind-url]
- [![Content Layer][Contentlayer]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure you have Node.js and npm installed. You can download Node.js from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MarloneA/Personal-Portfolio.git
   ```
2. Navigate to the project directory
   ```sh
   cd Personal-Portfolio
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Home Page
- [x] Blog Section
- [x] Projects Section
- [x] About Me Section
- [x] Contact Form
- [x] Videos Section
- [ ] Courses Section
- [x] Dark Mode
- [ ] SEO
- [ ] Multi-language Support Translations and internationalisation
  - [ ] Spanish
  - [ ] French
  - [ ] Japanese
  - [ ] German

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### in progress

video schema

```js

const video = {
  id: "ljljlkj34l5234523l4j523452345",
  title: "how reverse proxies work",
  description: "learn how to configure an nginx reverse proxy server",
  tags: ["devops", "proxies"],
  links: {
    project: "",
    youtube: "https://www.youtube.com",
    github: "https:www.github.com",
    coverphoto: "https://unsplash.com",
  },
  metadata: {
    likes: 234,
    comments: 28,
    published: 243543253452,
  },
  content: {
    overview: `In this video, you’ll learn how to create a fully responsive NFT collection
        website landing page using React JS. The video covers the entire process of 
        creating the landing page from scratch, including the use of various tools 
        and technologies. This website uses different libraries such as swiper for 
        carousel, react-confetti to add confetti animation etc.`,
    keypoints: [
      "Complex Animaitions in React.",
      "How to create Scrolling effects using gsap.",
      "How we can leverage advantages of component structure.",
      "How to use confetti in React JS for awesome background effects.",
      "Uses of Lazy and suspense in reactJS to make components load faster.",
      "How to use different Hooks from react-use.",
      "How to draw SVG path on scroll.",
    ],
    features: [
      "Multiple sections such as home, about, showcase, team, faq etc.",
      "Cool Background Effects",
      "Unique design",
      "Mobile Responsive",
      "Unique approach to showcase your NFTs",
      "Speed optimization by code-splitting",
      "Smooth animations using gsap",
      "Animating svg on scroll",
      "Easy to customize",
    ],
    libraries: [
      "CRA (create-react-app)",
      "Styled-components",
      "gsap",
      "react-use",
      "typewriter-effect",
      "react-confetti",
    ],
    resources: [
      "Fonts are from Fontsource.",
      "Special Thanks to Robert for creating Bigheads.",
      "All the svg files used in this website are from Icons8 and FreeSVG.",
    ],
  },
};
```

## ContentLayer Issues

For overrides check > [next content layer version fix](https://github.com/contentlayerdev/contentlayer/issues/575#issuecomment-2016467695)

contentlayer TypeError: Cannot read properties of undefined (reading 'inTable') > [in table error fix](https://github.com/contentlayerdev/contentlayer/issues/558#issuecomment-1955938711)
