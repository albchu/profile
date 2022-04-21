import { ExperienceItem } from "./experience-item";
import { LabelledSection } from "./labelled-section";

export default function Education() {
  return (
    <LabelledSection title="Education" imgPath="/memojis/education.png">
      <ExperienceItem
        company="University of Calgary"
        role="Bachelors of Science"
        date="Sep 2010 - May 2015"
        companyUrl="https://science.ucalgary.ca/"
        logoPath="/ucalgary-logo.jpg"
      >
        <p>
          Majored in Computer Science with a concentration in Game Development.
          I balanced my internship with full-time studies to ensure that I was
          industry ready by graduation.
        </p>
      </ExperienceItem>
    </LabelledSection>
  );
}
