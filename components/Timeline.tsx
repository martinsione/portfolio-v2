import { FiCheckCircle } from "react-icons/fi";

const Divider = () => (
  <div className="border border-gray-200 dark:border-gray-600 w-full my-8"></div>
);

const Step = ({
  year,
  title,
  description,
}: {
  year?: number;
  title: string;
  description?: string;
}) => {
  return (
    <>
      <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
        {year}
      </h3>
      <ul>
        <li className="mb-4 ml-2">
          <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
            <span className="sr-only">Check</span>
            <FiCheckCircle />
            <p className="font-medium text-gray-900 dark:text-gray-100 ml-2">
              {title}
            </p>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-400 ml-6">
            {description}
          </p>
        </li>
      </ul>
    </>
  );
};

interface TimelineStruct {
  year: number | undefined;
  title: string;
  description?: string;
}

export default function Timeline({
  title,
  timeline,
}: {
  title: string;
  timeline: Array<TimelineStruct>;
}) {
  let prevYear: number | undefined, currentYear: number | undefined;
  let loadDivider: boolean;
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        {title}
      </h3>

      {timeline.map((step, key) => {
        currentYear = prevYear !== step.year ? step.year : undefined;
        // Divider will only load if year if different than prevYear and if its not the current year (first step)
        loadDivider = currentYear !== undefined && key !== 0 ? true : false;
        prevYear = step.year;

        return (
          <div key={key}>
            {loadDivider && <Divider />}
            <Step
              year={currentYear}
              title={step.title}
              description={step.description}
            />
          </div>
        );
      })}
    </>
  );
}
