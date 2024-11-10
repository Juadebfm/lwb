import { Typography } from "@material-tailwind/react";

export function SkeletonNavbar() {
  return (
    <div className="max-w-full animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-full rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 min-h-[80%] w-full rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
}
