import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

import { Main, Ul, Link, Icon, Copyright } from './Footer.styled';

const Footer = () => {
  return (
    <Main>
      <Ul>
        <li>
          <Link href="mailto:spievakov@gamil.com">
            <Icon as={MdEmail} />
            <span>spievakov@gmail.com</span>
          </Link>
        </li>

        <li>
          <Link href="tel:+16474739502">
            <Icon as={MdPhone} />
            <span>+1 (647) 473-9502 </span>
          </Link>
        </li>

        <li>
          <Link
            href="https://www.google.com/maps/place/88+Alice+St,+Guelph,+ON+N1E+2Z8/@43.5471712,-80.2392008,17z/data=!3m1!4b1!4m5!3m4!1s0x882b9ae0d0802679:0x74ca5ec44983415f!8m2!3d43.5471673!4d-80.2370121"
            target="_blank"
          >
            <Icon as={MdLocationOn} />
            <span>88 Alice st</span>
          </Link>
        </li>
      </Ul>

      <Copyright>&#169; 2022 Oleksandr Spievakov</Copyright>
    </Main>
  );
};
export default Footer;
