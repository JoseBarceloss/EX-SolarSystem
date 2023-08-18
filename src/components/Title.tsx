type HeadlineProps = {
  headline: string
};

function Title({ headline } : HeadlineProps) {
  return (
    <h2>{headline}</h2>
  );
}

export default Title;
