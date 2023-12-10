/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/james-harrison-vpOeXr5wmR4-unsplash.jpg";

const imageAltText = "Programming Desktop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SkinSight 👁️",
    description:
      "The application for classify skin wound severity tell you whether you should go to hospital right now or later. With the provided first aid step for each skin type of wound.[Down for maintenance]]",
    url: "https://skinsight.vercel.app/",
  },
  {
    title: "C shop management system",
    description:
      "C project about shop management system. The system can add, edit, delete, and search for product. It also can calculate the sales repoty and manage the warestock.",
    url: "https://github.com/PlugsPakuko/Shop-Management-System-C",
  },
  {
    title: "Wireless Motion Capture Suit using IMU sensor",
    description:
      "Affordable mocap suit with wireless connection. Applyable in various aspect; Filming, animation and other science.",
    url: "https://github.com/PlugsPakuko/Wireless-Mocap-Suit",
  },
  {
    title: "First web port",
    description:
      "My first portfolio website!.",
    url: "https://github.com/PlugsPakuko/CPE101-WebPort",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
