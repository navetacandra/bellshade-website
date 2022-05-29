import { ReactNode } from "react";

interface OrderedListProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  children: ReactNode;
}

export default function OrderedList(props: OrderedListProps) {
  const { className, children } = props;
  return (
    <ol
      className={
        className ? `${className} ml-4 list-decimal` : "ml-4 list-decimal"
      }
    >
      <div className='ml-4'>{children}</div>
    </ol>
  );
}
