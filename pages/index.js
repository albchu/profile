import Head from 'next/head'
import Image from 'next/image'
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
          <Image src="/face.png" alt="mugshot" width={300} height={300} />
          <div className={styles.bannerContent}>
            <h1>Albert Chu</h1>
            <h2>Frontend Dev</h2>
            <div>
              Row of social media links. include email as a mailto
            </div>

          </div>
        </div>

        <section>
          <h2>About Me</h2>
          <p>
            The plans you refer to will soon be back in our hands. Red Five standing by. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.

            You don't believe in the Force, do you? I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. Red Five standing by. You are a part of the Rebel Alliance and a traitor! Take her away!
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          <p>
            I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here. Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.

            I'm surprised you had the courage to take the responsibility yourself. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.

            I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me. Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            No! Alderaan is peaceful. We have no weapons. You can't possibly… I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me.

            You don't believe in the Force, do you? Obi-Wan is here. The Force is with him. Still, she's got a lot of spirit. I don't know, what do you think? But with the blast shield down, I can't even see! How am I supposed to fight?

            I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. A tremor in the Force. The last time I felt it was in the presence of my old master. The Force is strong with this one. I have you now.
          </p>
        </section>
      </main>

      <footer>
        some pineappel image
      </footer>

    </div>
  )
}
