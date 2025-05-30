import React from "react";

interface TypographyTypeIIProps {
  text1?: string;
  text2?: string;
}

export const TypographyTypeII: React.FC<TypographyTypeIIProps> = ({
  text1,
  text2,
}) => {
  return (
    <div className="space-y-2">
      {text1 && <p className="text-4xl text-neutral-900 m-2">{text1}</p>}
      {text2 && <p className="text-sm text-black-40 m-2">{text2}</p>}
    </div>
  );
};
