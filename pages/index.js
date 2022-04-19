import Head from 'next/head'
import { EnvelopeLogo } from '../components/envelope-logo'
import { ExperienceItem } from '../components/experience-item'
import { GitHubLogo } from '../components/github-logo'
import { LabelledSection } from '../components/labelled-section'
import { LinkedinLogo } from '../components/linkedin-logo'
import styles from '../styles/Home.module.css'

// I believe this is all I need for serverside generation.
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Albert Chuuuuuuu</title>
        <meta name="description" content="This is both my resume and portfolio at the same time like an all-in-one shower wash." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <img src="/face.png" alt="mugshot" className={styles.heroImage} />
          <div className={styles.bannerContent}>
            <div className={styles.heroName}>Albert Chu</div>
            <div className={styles.heroTitle}>Web Developer</div>
            <div className={styles.socials}>

              <a href="https://github.com/albchu">
                <GitHubLogo />
              </a>

              <a href="https://www.linkedin.com/in/albchu/">
                <LinkedinLogo />
              </a>

              <a href="mailto:albertchu539@gmail.com">
                <EnvelopeLogo />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contents}>
          <LabelledSection title="About Me">
            <p>
              Born and raised in Canada, I&apos;m a web developer by trade that enjoys pragmatically solving complex problems. I am comfortable working all over the tech stack but I hold a special spot in my heart for frontend development. Building great user experiences while bringing beautiful designs to life is a driving force in my career. I want to make major impacts in interesting projects that deliver value to users in meaningful ways.
            </p>
            <br />
            <p>
              In the winter, you can find me in the mountains hurtling myself off mountains on my snowboard. In the summer, I enjoy golf, and patio beers with friends. At all times of the year, I&apos;m typically hanging out with my wife and dog.
            </p>
            <br />

            <p>If you are a prospective employer with an exciting opportunity, please include the phrase &quot;Pineapples belong on pizza&quot; somewhere in your email. This will show that you have taken the time to evaluate me for skill fit and I promise that I will evaluate your role as thoroughly as you have evaluated my profile.</p>
          </LabelledSection>
          <LabelledSection title="Portfolio">
            <h5>Profile Website</h5>
            <p>I built this site as an excuse to try utilizing Next.js for server side generation. I designed and developed all aspects of this site. The source code can be located <a href="https://github.com/albchu/profile">here.</a></p>

            <br />

            <h5>Wedding Website</h5>
            <p>In the before covid times, I was engaged to my fiancee (now Wife). As a fun project, we collaborated on building out our invites website. We wanted to make a mobile first application that reported RSVPs to a google sheet. I developed most of the technical aspects of the project while my wife designed the pages. The source code can be found <a href="https://github.com/albchu/wedding">here</a> and the most recent deployment of it can be found <a href="https://wedding-m80lv3z3t-albertchu1.vercel.app/">at this link</a>. Please excuse the random URL for the site. Domains are expensive and I have since let this one expire.</p>

            <br />

            <h5>Medium Articles</h5>
            <p>Here is a link to some of <a href="https://medium.com/@albertchu539">the technical articles I published on Medium</a>. For a while, I was very keen on publicly contributing to the technical knowledge base around web development. I saw this as a good way to challenge myself at improving my ability to communicate complex topics. Admittedly, I have not contributed much in this space in recent years. My opinions on some of these concepts have also changed a bit over time as I have continued to grow as a developer. In the spirit of posterity, they can be observed in all their original glory.</p>
          </LabelledSection>

          <LabelledSection title="Experience">
            <ExperienceItem
              company="ZenHub"
              role="Senior Frontend Developer"
              date="Aug 2021 - Present"
              companyUrl="https://www.zenhub.com/"
              logoPath="/zenhub-logo.png"
            >
              <p>
                I focused on developing features that would improve the developer experience in project management. As a senior member of the team, I am a thought leader for development efforts on complex features. My responsibilities are a balance between development and communicating with PMs and QAs to address priorities quickly. I have a critical role in developing and launching the ZenHub Platform.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Ambyint"
              role="Senior Full Stack Developer"
              date="May 2019 - Aug 2021"
              companyUrl="https://www.ambyint.com/"
              logoPath="/ambyint-logo.png"
            >
              <p>
                Senior member of an agile team building a lift-optimization platform agnostic to lift types. Focused on building a highly functional platform to innovate and disrupt the Oil and Gas sector. Distributed Nodejs backend built in the CQRS pattern using Kafka backed onto MongoDB.
                Worked closely with design and QA to ensure features developed across the stack are delivered to a high quality. I strive to demonstrate technical leadership in my role. A portion of my days was allocated to reviewing pull requests and individual technical mentorship for team members.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Replicon"
              role="Software Developer"
              date="May 2017 - May 2019"
              companyUrl="https://www.replicon.com/en-ca/"
              logoPath="/replicon-logo.png"
            >
              <p>
                Full-stack dev on a productivity cloud platform. Node.js backend deployed on AWS and using a mix of AWS technologies. React.js frontend using GraphQL as a middleware to query a C# backend. Worked closely with the UX team to iterate and develop prototype designs into deployable production ready code.

                Additionally designed and developed a performance metrics database and visualization frontend with React.js and Highcharts. The objective was to create a system for visualizing test metrics in order to gain visibility into areas of concern.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Synopsys"
              role="Software Engineer"
              date="May 2015 - May 2017"
              companyUrl="https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html"
              logoPath="/synopsys-logo.png"
            >
              <p>
                Spearheaded the performance lab to deliver data visualizations to identify bottlenecks and regressions in weekly builds. Additionally, I built out large features for automated testing and triage of the Coverity platform.
              </p>
            </ExperienceItem>

            <ExperienceItem
              company="Coverity"
              role="Software Automation Intern"
              date="Oct 2013 - May 2015"
              companyUrl="https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html"
              logoPath="/coverity-logo.png"
            >
              <p>
                My first steps into the industry of software development. My main work was around end to end test automation, and performance and scalability testing on unix systems to identify bottlenecks in the static analysis engine.
              </p>
            </ExperienceItem>

          </LabelledSection>

          <LabelledSection title="Education">
            <ExperienceItem
              company="University of Calgary"
              role="Bachelors of Science"
              date="Sep 2010 - May 2015"
              companyUrl="https://science.ucalgary.ca/"
              logoPath="/ucalgary-logo.jpg"
            >
              <p>
                Majored in Computer Science with a concentration in Game Development. I balanced my internship with full-time studies to ensure that I was industry ready by graduation.
              </p>
            </ExperienceItem>
          </LabelledSection>
        </div>

        <div className={styles.footer}>
          <img src="/pineapple.png" />
          <p>You've made it to the end.</p>
          <p>Thanks for visiting!</p>
        </div>
      </main>
    </div>
  )
}
