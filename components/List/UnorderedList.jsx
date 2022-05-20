export default function UnorderedList(props) {
  const { className, children } = props;
  return (
    <ul
      className={className ? `${className} ml-4 list-disc` : "ml-4 list-disc"}
    >
      <div className="ml-4">{children}</div>
    </ul>
  );
}
