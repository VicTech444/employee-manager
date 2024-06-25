import { useLocation } from "react-router-dom";
import { navList } from "../helpers/navList";
import { usePathname } from "next/navigation";

export default function Header() {
    let path = usePathname();

    let msg = navList.filter(list => list.path === path);

    return (
      <header>
        <h1 className="font-bold">{msg[0].message}</h1>
      </header>
    );
  }