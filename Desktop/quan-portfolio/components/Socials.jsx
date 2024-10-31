import Link from "next/link";

import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/decade2506/portfolio.1" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/mq.nv.3/" },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/iceheart2506/?hl=en",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
