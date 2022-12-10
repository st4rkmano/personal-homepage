import { MiniText } from "../StyledComponents";
import { Wrapper, Mail, Text, IconContainer, Link } from "./styled";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";

const Footer = () => (
  <Wrapper>
    <MiniText>let's talk</MiniText>
    <Mail href="mailto:kaniewski.patryk@gmail.com" rel="noopener noreferrer">
      kaniewski.patryk@gmail.com
    </Mail>
    <Text>
      Hit me whenever you have some proposal. I'm open to talk about new
      projects or jobs.
    </Text>
    <IconContainer>
      <Link
        href="https://github.com/st4rkmano"
        target="_blank"
        rel="nooreferrer nooopener"
      >
        <Github />
      </Link>
      <Link
        href="https://www.facebook.com/st4rki"
        target="_blank"
        rel="nooreferrer nooopener"
      >
        <Facebook />
      </Link>
      <Link target="_blank" rel="nooreferrer nooopener">
        <Linkedin />
      </Link>
      <Link target="_blank" rel="nooreferrer nooopener">
        <Instagram />
      </Link>
    </IconContainer>
  </Wrapper>
);

export default Footer;
