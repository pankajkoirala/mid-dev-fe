import { Icon } from "../Icon";
import { Typography } from "../typography";

const ErrorCard = ({ errormessage }: { errormessage?: string }) => {
  return (
    <div className="h-[300px] w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <Icon className=" text-red-500 h-20 w-20" icon="AlertTriangle" />
        <Typography variant={"p4"}>
          {errormessage ?? "Somethings went wrong ..."}
        </Typography>
      </div>
    </div>
  );
};
 export default ErrorCard