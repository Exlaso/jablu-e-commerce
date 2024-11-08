import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./navbar/ShoppingCartIcon";
import { Catergory_Menu_Bar } from "./navbar/Category_Menu_bar";
import NavbarHeader from "./navbar/NavbarHeader";
import Accounticon from "./navbar/Accounticon";
import { getServerSession } from "next-auth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { JabluLogo } from "@/components/jabluLogo";

const Navbar = async ({
  showsearch = true,
  category,
}: {
  showsearch?: boolean;
  category: string[];
}) => {
  const Auth = await getServerSession();
  let data: { data: string } = { data: "/static/icons/navbar/face.svg" };

  const token: RequestCookie | undefined = (await cookies()).get(
    "jablu_jwt_token",
  );

  if (!!Auth?.user?.email) {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/GetuserPFP?jablu_jwt_token=${token?.value}`,
      {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      },
    );
    data = await res.json();
  }
  return (
    <NavbarHeader>
      <nav className=" mx-auto w-full ">
        <div className="flex items-center justify-between   w-full ">
          <Catergory_Menu_Bar category={category} />
          <JabluLogo className={"md:hidden"} />
          <div className="flex items-center justify-end space-x-4 relative z-[22]">
            {showsearch && (
              <div className="max-lg:hidden">
                <SearchBar />
              </div>
            )}
            <ShoppingCartIcon
              isAuthed={!!Auth?.user?.email}
              token={token?.value ?? ""}
            />
            <Accounticon imgurl={data.data} />
          </div>
        </div>
      </nav>
    </NavbarHeader>
  );
};

export default Navbar;
