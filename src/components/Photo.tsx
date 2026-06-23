import { img } from "../assets/images";

type Props = {
  name: string;
  className?: string;
  /** Above-the-fold images load eagerly; everything else defers. */
  eager?: boolean;
  alt?: string;
};

export function Photo({ name, className, eager, alt = "" }: Props) {
  return (
    <img
      src={img[name]}
      className={className}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
    />
  );
}
