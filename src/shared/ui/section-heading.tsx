interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export function SectionHeading({ badge, title, highlight, description }: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {badge && (
        <span className="inline-block text-sm font-semibold text-[#059669] bg-[#ECFDF5] px-4 py-1.5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
