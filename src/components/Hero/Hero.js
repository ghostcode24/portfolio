import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        James A. Jerkowski <br />
        Software Developer | Author
      </SectionTitle>
      <SectionText>
        I Create Meaningful Solutions for Your Brand and Products
      </SectionText>
      <Button onClick={() => window.open('mailto:jerkowski@gmail.com', '_blank')}>Let's Talk Now</Button>
    </LeftSection>
  </Section>
);

export default Hero;