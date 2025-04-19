import Image from "next/image";
import { HTMLAttributes } from "react";

interface FraudDetectionProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export default function FraudDetection({
  className,
  size = 32,
  ...props
}: FraudDetectionProps) {
  return (
    <div className={className} {...props}>
      <Image
        src="/icons/fraud-detection.svg"
        alt="Fraud Detection Icon"
        width={size}
        height={size}
      />
    </div>
  );
}
