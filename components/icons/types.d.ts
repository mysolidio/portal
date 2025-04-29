import { ImageProps } from "next/image";

export type SvgIconProps = {
  className?: string;
  size?: number;
};

export type ImageIconProps = Omit<ImageProps, "alt" | "src">;
