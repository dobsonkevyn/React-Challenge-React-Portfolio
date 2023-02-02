import React from "react";
import profileImage from "../../assets/large/profile/";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Kevyn Dobson. I am 29 years old. I'll be 30 in March. I live in Atlanta, GA. 
            I was born and raised in Charleston, SC. I am new to the tech field. I attend Georgia Tech Bootcamp to 
            expand my knowledge. I'm currently employeed at State Farm as an Weather Catastrophe Specialist. In my free time
            I love to travel, learning new ways to cook and spending time with my loved ones.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

