import { FiCheckCircle } from "react-icons/fi";

interface props {
  year: number;
  title: string;
  description?: string;
}

export default function Timeline({ timeline }: { timeline: Array<props> }) {
  let currentYear: number | null, previousYear: number;
  return (
    <>
      {timeline.map((step, i: number) => {
        currentYear = previousYear !== step.year ? step.year : null;
        previousYear = step.year;
        return (
          <div key={i}>
            {currentYear && i !== 0 && <div className="border my-8"></div>}
            {currentYear && (
              <p className="font-bold text-lg md:text-xl text-gray-900 dark:text-gray-100 mb-4">
                {currentYear}
              </p>
            )}
            <div className="flex items-center text-green-600 dark:text-green-300 m-2">
              <FiCheckCircle />
              <h4 className="font-medium ml-2">{step.title}</h4>
            </div>
            {step.description && (
              <p className="text-sm ml-8 mb-4">{step.description}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
