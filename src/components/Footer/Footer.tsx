import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import { Main, Ul, Link, Icon, Copyright } from "./Footer.styled";

const Footer: React.FC = () => {

  return (
    <Main>
      <Ul>
        <li>
          <Link href="mailto:alexandr.pobeda99@gamil.com">
            <Icon as={MdEmail} />
            <span>alexandr.pobeda99@gmail.com</span>
          </Link>
        </li>

        <li>
          <Link href="tel:+16474739502">
            <Icon as={MdPhone} />
            <span>+1 (647) 473-9502 </span>
          </Link>
        </li>

        <li>
          <Link>
            <Icon as={MdLocationOn} />
            <span>88 Alice st</span>
          </Link>
        </li>
      </Ul>

      <Copyright>
        &#169; 2022 Oleksandr Spievakov
      </Copyright>
    </Main>
  )
}
export default Footer;