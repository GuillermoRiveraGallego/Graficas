import Skeleton from "react-loading-skeleton";

export const SkeletonHotel = () => (
  <div className="">
    <Skeleton className="h-12 mb-3 mt-2" width={400} />
    <Skeleton className="h-[200px] " />

    <div className="grid grid-cols-2 gap-4 pt-4">
      <Skeleton className="h-[500px] w-full" />
      <Skeleton className="h-[500px] w-full" />
    </div>
  </div>
);
