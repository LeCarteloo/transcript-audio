import { ButtonHTMLAttributes } from 'react';

interface SampleComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The background color of the button
   */
  backgroundColor?: string;
}

/**
 * Renders simple button
 */
const SampleComponent = ({
  backgroundColor,
  ...props
}: SampleComponentProps) => {
  return (
    <button style={{ backgroundColor }} type="button" {...props}>
      SampleComponent
    </button>
  );
};

export default SampleComponent;
