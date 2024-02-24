import React from "react";
import style from "./SignUp.module.css";

import { RiAdminLine } from "react-icons/ri";
import { IconType } from "react-icons";
import Link from "next/link";

interface Props {
  typeOfOption: string;
  Icon: IconType;
}

const SectionCard = ({ Icon, typeOfOption }: Props) => {
  return (
    <Link href={"/signup/" + typeOfOption}>
      <div className={[style.option].join(" ")}>
        <p className={[style.paragraph].join(" ")}>
          sign up as <br />
          {typeOfOption}
        </p>
        <Icon size={40} />
      </div>
    </Link>
  );
};

const Section: React.FC = () => {
  return (
    <div className={[style.page].join(" ")}>
      <div className={style.mainWrapper}>
        <p className={[style.paragraph].join(" ")}>LOGO</p>
        <div className={[style.optionWrapper].join(" ")}>
          <SectionCard
            Icon={RiAdminLine}
            typeOfOption="mezgeb"
          ></SectionCard>
          <SectionCard Icon={RiAdminLine} typeOfOption="business"></SectionCard>
          <SectionCard Icon={RiAdminLine} typeOfOption="client"></SectionCard>
        </div>
      </div>
    </div>
  );
};

export default Section;
