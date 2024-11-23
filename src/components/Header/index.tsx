import Logo from "./logo";
import Notifications from "./notification";
import User from "./user-action";
import Cart from "./cart";
import NavSearch from "./search";
import LinkList from "./LinkList";
import Hamburger from "./Hamburger";
import { cn } from "@/utils/cn";

const Header = () => {
  return (
    <header
      className={"bg-primary  w-screen text-white sticky top-0 z-20 h-[60px] shadow-sm"}
    >
      <nav
        className={cn([
          "h-full px-4 py-4 flex items-center gap-2 w-full ",
          "md:px-4 md:py-4 md:gap-8 md:flex md:items-center",
          "lg:px-4 md:py-4  lg:gap-8 lg:md:flex  lg:items-center",
        ])}
      >
        <Hamburger/>
        <Logo />
        <div
          className={cn([
            "hidden ",
            " md:flex  md:items-center md:justify-between md:w-full",
            " lg:flex lg:items-center lg:justify-between lg:w-full ",
          ])}
        >
        <LinkList/>
          <NavSearch />
        </div>
        <div className={cn(["avatar-section flex items-center ml-auto gap-8"])}>
          <Cart />
          <Notifications />
          <User />
        </div>
      </nav>
    </header>
  );
};

export default Header;
