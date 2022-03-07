import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface Props {
  href: string;
  text: string;
}

const style:CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};
export const ActiveLink:FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();
  //   console.log(asPath);

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
