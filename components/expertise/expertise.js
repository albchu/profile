import { ContentBlock } from "../content-block";
import { LabelledSection } from "../labelled-section";
import styles from "./expertise.module.css";

export default function Expertise() {
  return (
    <LabelledSection
      title="Expertise"
      hideBG
      imgPath="/memojis/blue-side-talk.png"
    >
      <div className={styles.container}>
        <ContentBlock
          title="React.js"
          description="I have been developing with React.js since 2017. At this point in my
        career, I am very confident that I can be thrown into any random part of
        a React frontend codebase and be able to figure it out quickly."
          className={styles.reactBlock}
          imgPath="/react-logo.png"
        />

        <ContentBlock
          title="Node.js"
          description="As much time as I have spent developing with React, I've been developing
        with Javascript for longer. From my University days of writing scrapers
        to liberate text books to developing production Node.js
        applications across an entire stack, Javascript (and more specifically
        Node.js applications) have been the bread and butter of my career."
          className={styles.nodeBlock}
          imgPath="/nodejs-logo.png"
        />

        <ContentBlock
          title="Attention to Detail"
          description="An aspect of my professional career that I adore is collaborating with designers. 
        It is important to me to ensure that their intent for a
        feature is realized fully. Over the course of my career, I have
        developed a keen eye for identifying all the little details of a design
        so that nothing gets lost in translation from Figma to prod deployment."
          className={styles.detailBlock}
          imgPath="/magnifying-glass.png"
        />

        <ContentBlock
          title="Quality Software"
          description="As a developer that started in QA automation, I have always prioritized the importance 
        of testing in development. Writing production quality software doesn't stop at keeping up with
        latest in the software development zeitgeist. You need to have high
        quality tests to ensure that functionality always works as intended. 
        Where ever I develop code professionally, I strive to champion developing clear and testable code."
          className={styles.qualityBlock}
          imgPath="/ok-emoji.png"
        />
      </div>
    </LabelledSection>
  );
}
