import { ReactNode } from "react";

interface WrapperTemplateProps {
  children: ReactNode;
}

function WrapperTemplate(props: WrapperTemplateProps) {
  const { children } = props;
  return (
    <div className='container mx-auto'>
      <div className='flex flex-warp'>
        <div className='self-center w-full px-5 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-600 dark:text-white my-10 shadow-xl transition-all ease-out duration-200'>
          <div className='my-5'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default WrapperTemplate;
