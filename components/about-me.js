import React from "react";
import { LabelledSection } from "./labelled-section";

export default function AboutMe() {
  return (
    <LabelledSection title="About Me" hideBG imgPath="/memojis/nervous.png">
      <p>
        I&apos;m a web developer that enjoys solving complex problems. I am
        comfortable working all over the tech stack but frontend always holds a
        special spot in my heart.
      </p>
      <br />
      <p>
        Building great functionality and user experiences with beautiful yet
        purposeful designs to life is a driving force in my career. I want to
        make major impacts in interesting projects to deliver work that I'm
        proud to look back on.
      </p>
      <br />
      <p>
        In the winter, you can find me hurtling myself off mountains on my
        snowboard. In the summer, I enjoy golf, and patio beers with friends. At
        all times of the year, I&apos;m typically hanging out with my wife and
        dog.
      </p>
    </LabelledSection>
  );
}
