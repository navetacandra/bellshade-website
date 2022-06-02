import { ReactNode } from "react";

interface UnorderedListProps {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  children: ReactNode;
}

export default function UnorderedList(props: UnorderedListProps) {
  const { className, children } = props;
  return (
    <div className='ml-4'>
      <ul
        className={className ? `${className} ml-4 list-disc` : "ml-4 list-disc"}
      >
        {children}
      </ul>
    </div>
  );
}
