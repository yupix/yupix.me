import { ReactNode } from 'react';
import { cn } from '~/utils/misc';

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export const Prose: React.FC<ProseProps> = ({ className, ...props }) => (
  <div
    className={cn(
      className,
      'dark:text-gray-400 prose prose-gray max-w-none dark:prose-invert',
      // headings
      'prose-headings:font-display prose-headings:scroll-mt-28 prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
      // lead
      'prose-lead:text-gray-700 dark:prose-lead:text-gray-700',
      // links
      'prose-a:font-semibold dark:prose-a:text-primary-500',
      // link underline
      'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.primary.200))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.gray.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.primary.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
      // pre
      'prose-pre:rounded-xl prose-pre:bg-gray-900 prose-pre:shadow-lg dark:prose-pre:bg-gray-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-gray-700/10',
      // hr
      'dark:prose-hr:border-gray-800',
    )}
    {...props}
  />
);