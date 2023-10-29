import { FunctionComponent } from "react";

interface JabluTextLogoProps {
    className?:string;
}

const JabluTextLogo: FunctionComponent<JabluTextLogoProps> = ({
    className
}) => {
  return (
    <div className={`${className}  shadowhand inline-block`}>
      <div className="flex items-center justify-center flex-wrap tracking-widest jablutext font-bold">
        <div className="jablutext ">Jablu </div>
        <div className="jablutext ">.</div>
        <div className="jablutext ">in</div>
      </div>
    </div>
  );
};

export default JabluTextLogo;
