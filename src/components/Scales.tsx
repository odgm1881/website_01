type Props = { size?: number; className?: string; strokeWidth?: number };

/* Знак-весы: единственный фирменный знак бренда, простой геометрический мотив
   (по бренд-буку «аптекарские весы с двумя чашами»). */
export function Scales({ size = 24, className, strokeWidth = 2 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M32 8v44M20 52h24M32 14 12 24m20-10 20 10M12 24l-6 12h12l-6-12Zm40 0-6 12h12l-6-12Z" />
    </svg>
  );
}
