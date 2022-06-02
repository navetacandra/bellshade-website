import { ReactNode } from "react";

interface OrderedListProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  children: ReactNode;
}

export default function OrderedList(props: OrderedListProps) {
  const { className, children } = props;
  return (
    <div className='ml-4'>
      <ol
        className={
          className ? `${className} ml-4 list-decimal` : "ml-4 list-decimal"
        }
      >
        {children}
      </ol>
    </div>
  );
}
