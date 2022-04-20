import React from 'react'
import styles from './testgrounds.module.css'
import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import { HeroBanner } from '../components/hero-banner';

export const TestGrounds = () => {
    const parallax1 = useParallax({ speed: 10, translateX: [10, -10], scale: [2.5, 2] });
    const parallax2 = useParallax({
        scale: [1, 2.5], translateX: [0, 10], speed: -20
    });
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <HeroBanner />

                <div>He is here.
                    You mean it controls your actions? You mean it controls your actions? He is here. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.

                    I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Obi-Wan is here. The Force is with him. Dantooine. They're on Dantooine. What?!

                    Hokey religions and ancient weapons are no match for a good blaster at your side, kid.
                    Red Five standing by. You mean it controls your actions? Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense.

                    No! Alderaan is peaceful. We have no weapons. You can't possibly…
                    Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money.
                    Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.
                    I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan--
                    I don't know what you're talking about. I am a member of the Imperial Senate on a diplomatic mission to Alderaan-- The Force is strong with this one. I have you now. Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense.

                    I'm surprised you had the courage to take the responsibility yourself.
                    The plans you refer to will soon be back in our hands.
                    She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time!
                    What?! No! Alderaan is peaceful. We have no weapons. You can't possibly… Obi-Wan is here. The Force is with him. Red Five standing by.

                    Partially, but it also obeys your commands. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me. In my experience, there is no such thing as luck.

                    No! Alderaan is peaceful. We have no weapons. You can't possibly… He is here. The Force is strong with this one. I have you now. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.

                    I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. I have traced the Rebel spies to her. Now she is my only link to finding their secret base. Hey, Luke! May the Force be with you.

                    A tremor in the Force. The last time I felt it was in the presence of my old master. You don't believe in the Force, do you? All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it?

                    Escape is not his plan. I must face him, alone. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me. Ye-ha!

                    As you wish. What!? I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. Your eyes can deceive you. Don't trust them. You don't believe in the Force, do you? Escape is not his plan. I must face him, alone.

                    He is here. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense.

                    The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Still, she's got a lot of spirit. I don't know, what do you think? I find your lack of faith disturbing. Escape is not his plan. I must face him, alone.

                    Ye-ha! He is here. I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me. I care. So, what do you think of her, Han?

                    I have traced the Rebel spies to her. Now she is my only link to finding their secret base. All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it? Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.</div>
            </div>
            <div className={styles.mountainsUpper} ref={parallax1.ref} />
            <div className={styles.mountainsLower} ref={parallax2.ref} />
        </div>
    )
}


export default () => {
    return <ParallaxProvider >
        <TestGrounds />
    </ParallaxProvider>
}