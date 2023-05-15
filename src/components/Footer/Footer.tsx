import { FooterWrapper, Contacts, Contact, Copyright } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        <p>&#169; 2022 Crust & Co.</p>
        <p>All rights reserved.</p>
        <p>Developer - Sasha Spievakov.</p>
      </Copyright>

      <Contacts>
        <Contact href="https://github.com/SashaSpievakov">GitHub</Contact>

        <Contact
          href="https://www.google.com/maps/place/687+Yonge+St,+Toronto,+ON+M4Y+2B2/@43.6689719,-79.3870519,18z/data=!3m1!4b1!4m6!3m5!1s0x882b34ae07a20ea5:0xcb9f91518efcc2c1!8m2!3d43.6689704!4d-79.3860646!16s%2Fg%2F11nnkxs6c3"
          target="_blank"
        >
          687 Yonge St
        </Contact>

        <Contact href="mailto:spievakov@gamil.com">spievakov@gmail.com</Contact>
      </Contacts>
    </FooterWrapper>
  );
};
export default Footer;
