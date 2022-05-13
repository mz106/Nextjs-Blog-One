import Link from "next/link";

const Button = (props) => {
  console.log(props.link)
  return (
    <Link href={props.link}>
      <a>{props.children}</a>
    </Link>
  );
};

export default Button;
