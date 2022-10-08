import TitledSection from '@components/TitledSection';
import { FC } from 'react';

export const AboutSection: FC = () => {
  return (
    <TitledSection title="About me" id="about-me">
      <p className="text-gray-500 text-opacity-80 text-2xl xsm:text-3xl xsm:leading-10 mt-10 !leading-relaxed">
        Hey 👋 Im a full-stack developer who loves to do things right for over
        than {new Date().getFullYear() - 2016} years now. I always seek the
        environment where can I do so and try to surround myself with people who
        thinks the same 🚀 <br />
        <br />
        When I don't work I focus on my hobbies and my family. My hobbies are
        reading, cooking, extreme sports, socializing and learning new
        languages. AKA avid mind-broadening person 🌅
        <br />
        <br />
        My favorite topics are, of course, latest technology and programming
        trends, cars, psychology and japanese culture 🙇 <br />
        <a className="bold" href="#contact">
          Want to talk it over coffee? Contact me then 😀
        </a>
      </p>
    </TitledSection>
  );
};
