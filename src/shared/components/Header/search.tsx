import { cn } from "@/shared/utils/cn";
import { Input } from "../Input";
import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <div className={cn([
      "hidden ",
  
      "md:relative md:hidden ",
      "lg:relative lg:flex lg:items-center lg:justify-between  lg:max-w-[400px] ",
    ])}
    
    // "relative flex items-center max-w-[400px]"
    >
      <Search className="text-gray-200 absolute left-2" />
      <Input
        placeholder="Search"
        className={cn(["rounded-full border-none pl-10 text-text-dark"])}
        autoFocus
      />
    </div>
  );
};
export default NavSearch;
