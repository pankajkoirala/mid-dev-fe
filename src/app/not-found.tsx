import { Typography } from "@/components/typography";

const NotFound = () => {
  return (
    <div className=" h-[350px] w-screen flex flex-col items-center justify-center">
      <Typography variant={'h1'} className="font-bold">
        404
      </Typography>
      <Typography variant={'p3'} className="font-bold">
        Page Not Found
      </Typography>{' '}
    </div>
  );
};
export default NotFound;
