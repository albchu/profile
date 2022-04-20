import { ExperienceItem } from './experience-item'
import { LabelledSection } from './labelled-section'

export default function Experience() {
  return (
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
  )
}
