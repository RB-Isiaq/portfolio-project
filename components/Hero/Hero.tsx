// import Typewriter from 'typewriter-effect';
// import Image from 'next/image';
// import styles from './Hero.module.scss';
// import Profile from '@/public/myself-bg.png';
// import { TestId } from './constants';

// const Hero = () => {
//   return (
//     <section id="home" className={styles.hero} data-testid={TestId.HERO_ID}>
//       <div className={styles.details}>
//         <h1 className={styles.name} data-testid={TestId.HERO_NAME}>
//           Ridwan Bukola <span>Isiaq</span>
//           <Typewriter
//             options={{
//               strings: ['Ridwan', 'Bukola', 'Isiaq'],
//               autoStart: true,
//               loop: true,
//             }}
//           />
//         </h1>
//         <div className={styles.profession}>
//           <h1>Frontend Developer</h1>
//           <h2>ReactJS | NextJS | Typescript</h2>
//         </div>
//         <a
//           className={styles.btn}
//           rel="noopener"
//           href="/Resume.pdf"
//           download="Ridwan's Resume"
//           target="_blank"
//           data-testid={TestId.RESUME}
//         >
//           Résumé
//         </a>
//       </div>
//       <div className={styles.image}>
//         <Image
//           src={Profile}
//           alt="Isiaq"
//           className={styles.img}
//           width={432}
//           height={577}
//           data-testid={TestId.HERO_IMG}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
'use client';

import Image from 'next/image';
import styles from './Hero.module.scss';
import Profile from '@/public/myself-bg.png';
import { TestId } from './constants';
import dynamic from 'next/dynamic';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});
const Hero = () => {
  return (
    <section id="home" className={styles.hero} data-testid={TestId.HERO_ID}>
      <div className={styles.details}>
        <h1 className={styles.name} data-testid={TestId.HERO_NAME}>
          Ridwan Bukola <span>Isiaq</span>
        </h1>
        <div className={styles.profession}>
          <TypewriterComponent
            component="h1"
            options={{
              autoStart: true,
              loop: true,
              strings: ['Frontend Developer', 'Software Developer'],
              delay: 150,
              skipAddStyles: true,
              cursor: '🖋️',
              deleteSpeed: 100,
              cursorClassName: 'cursor',
            }}
          />
          <h2>ReactJS | NextJS | Typescript</h2>
        </div>
        <a
          className={styles.btn}
          rel="noopener"
          href="/Resume.pdf"
          download="Ridwan's Resume"
          target="_blank"
          data-testid={TestId.RESUME}
        >
          Résumé
        </a>
      </div>
      <div className={styles.image}>
        <Image
          src={Profile}
          alt="Isiaq"
          className={styles.img}
          width={432}
          height={577}
          data-testid={TestId.HERO_IMG}
        />
      </div>
    </section>
  );
};

export default Hero;
