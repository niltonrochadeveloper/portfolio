import {
  Container,
  Article,
  Content,
  Description,
  Title,
  Card,
  ContentTitle,
} from "./styles";
import { ExperienceProps } from "./types";

const Do: React.FC<ExperienceProps> = ({ source }) => {
  return (
    <Container id="do">
      <Article>
        <ContentTitle>
          <Title>O que eu faço</Title>
          <Description>
            Loren Ipsum dolor, sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Description>
        </ContentTitle>
        <Content>
          {source.map((experience) => (
            <Card>{experience.company}</Card>
          ))}
        </Content>
      </Article>
    </Container>
  );
};

export default Do;
