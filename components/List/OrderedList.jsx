export default function OrderedList(props) {
  const { className, children } = props;
  return (
    <ol
      className={
        className ? `${className} ml-4 list-decimal` : "ml-4 list-decimal"
      }
    >
      <div className="ml-4">{children}</div>
    </ol>
  );
}
