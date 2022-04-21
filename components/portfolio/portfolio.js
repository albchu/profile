import { ContentBlock } from "../content-block";
import { LabelledSection } from "../labelled-section";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <LabelledSection
      title="Portfolio"
      hideBG
      imgPath="/memojis/computer-pink.png"
    >
      <div className={styles.container}>
        <ContentBlock
          title="Profile Website"
          description="I built this site to get a stronger understanding of Next.js for server side
        generation. I designed and developed all aspects of this site. One of the main obstacles 
        and goals was making sure it is as responsive as possible for all screen dimensions. 
       If you are considering me for a job opportunity, I encourage you to open this on a variety of devices."
          links={[
            {
              displayName: "Source Code",
              href: "https://github.com/albchu/profile",
            },
          ]}
          className={styles.profileBlock}
        />

        <ContentBlock
          title="use-paginator"
          description="I created this react library as an npm package to solve some performance issues we were dealing with when developing
          a dashboard for the Ambyint platform. At the time, other external libaries were either doing too much or not enough for my purposes.
          At its peak, this package was doing 700+ downloads a week."
          links={[
            {
              displayName: "Source Code",
              href: "https://github.com/albchu/react-use-paginator",
            },
            {
              displayName: "Usage Guide",
              href: "https://albchu.github.io/react-use-paginator/",
            },
            {
              displayName: "NPM",
              href: "https://www.npmjs.com/package/react-use-paginator",
            },
          ]}
          className={styles.pkgBlock}
        />

        <ContentBlock
          title="Wedding Website"
          description="After getting engaged with my wife, we thought it would be a fun 
        and challenging project to build an invite website together for the wedding.
       We made this as a mobile-first application that reported RSVPs to a
        google sheet. On user RSVP submission, a rest call was fired to a lambda function
         that was configured to report the RSVP submission into the google sheet. I developed most of the technical aspects of the project
        while my wife designed the pages in Adobe XD. I later helped teach her some basics of CSS so she could assist with implementing the designs."
          links={[
            {
              displayName: "Source Code",
              href: "https://github.com/albchu/wedding",
            },
            {
              displayName: "Demo",
              href: "https://wedding-m80lv3z3t-albertchu1.vercel.app/",
            },
          ]}
          className={styles.weddingBlock}
        />

        <ContentBlock
          title="Medium Articles"
          description="For a while, I was very keen on publicly contributing to the technical
        knowledge base around web development. I saw this as a good way to
        challenge myself at improving my ability to communicate complex topics.
        Admittedly, I have not contributed much in this space in recent years.
        My opinions on some of these concepts have also changed a bit over time
        as I have continued to grow as a developer. In the spirit of posterity,
        they can be observed in all their original glory."
          links={[
            {
              displayName: "My Articles",
              href: "https://medium.com/@albertchu539",
            },
          ]}
          className={styles.mediumBlock}
        />
      </div>
    </LabelledSection>
  );
}
