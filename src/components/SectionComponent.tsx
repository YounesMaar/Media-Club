import { FC } from "react";
import { Button } from "./ui/button";

interface SectionComponentProps {
  title: string;
  body: string;
  backgroundImage: string;
  button?: boolean;
  buttonLabel?: string;
}

const SectionComponent: FC<SectionComponentProps> = ({
  body,
  title,
  button,
  buttonLabel,
  backgroundImage,
}) => {
  return (
    <div className="relative h-[100vh] flex items-center justify-center gap-4 text-white flex-col">
      <div
        className="absolute inset-0 brightness-75 bg-cover bg-center -z-10 filter bg-black"
        style={{ backgroundImage }}
      />
      <h1 className="text-4xl font-base text-center">{title}</h1>
      <p className="text-secondary/80 w-2/3 md:w-2/5 text-center">{body}</p>
      {button && (
        <Button
          size="customized"
          className="bg-primary/70 px-10 py-6 rounded-full"
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default SectionComponent;
