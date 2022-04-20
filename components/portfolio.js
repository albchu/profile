import { LabelledSection } from './labelled-section'

export default function Portfolio() {
  return (
    <LabelledSection title="Portfolio">
      <h5>Profile Website</h5>
      <p>I built this site as an excuse to try utilizing Next.js for server side generation. I designed and developed all aspects of this site. The source code can be located <a href="https://github.com/albchu/profile">here.</a></p>

      <br />

      <h5>Wedding Website</h5>
      <p>In the before covid times, I was engaged to my fiancee (now wife). As a fun project, we collaborated on building out our invites website. We wanted to make a mobile first application that reported RSVPs to a google sheet. I developed most of the technical aspects of the project while my wife designed the pages. The source code can be found <a href="https://github.com/albchu/wedding">here</a> and the most recent deployment of it can be found <a href="https://wedding-m80lv3z3t-albertchu1.vercel.app/">at this link</a>. Please excuse the random URL for the site. Domains are expensive and I have since let this one expire.</p>

      <br />

      <h5>Medium Articles</h5>
      <p>Here is a link to some of <a href="https://medium.com/@albertchu539">the technical articles I published on Medium</a>. For a while, I was very keen on publicly contributing to the technical knowledge base around web development. I saw this as a good way to challenge myself at improving my ability to communicate complex topics. Admittedly, I have not contributed much in this space in recent years. My opinions on some of these concepts have also changed a bit over time as I have continued to grow as a developer. In the spirit of posterity, they can be observed in all their original glory.</p>
    </LabelledSection>
  )
}
