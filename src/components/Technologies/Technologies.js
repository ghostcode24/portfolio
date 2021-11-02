import React from 'react';
import { DiDatabase, DiReact} from 'react-icons/di';
import { SiMaterialUi } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world, from frontend design to backend deployment.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - React <br />
            - ES6/JavaScript<br />
            - HTML5/CSS3 <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="4rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Node.js/Express <br />
            - MongoDB <br />
            - REST/API <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiMaterialUi size="4rem" />
        <ListContainer>
          <ListTitle>UI Frameworks</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Material-UI <br />
            - Styled Components <br />
            - Tailwind CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
