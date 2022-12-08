import {
  Wrapper,
  Image,
  Content,
  Title,
  Text,
  MessageIcon,
} from "./styled";
import { BlueButton, MiniText } from "../StyledComponents";
import picture from "../images/picture.jpeg";
const Header = () => {
  return (
    <Wrapper>
      <Image src={picture} alt="" />
      <Content>
        <MiniText>this is</MiniText>
        <Title>Patryk Kaniewski</Title>
        <Text>
          I'm deeply intrested in self improvement. One of my goals is to become
          front-end developer. Currently learing from youcode Frontend Developer
          course.
        </Text>
        <BlueButton>
          <MessageIcon />
          Hire Me
        </BlueButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
