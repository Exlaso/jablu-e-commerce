import Link from "next/link";

const Navforlg = ({
    navigation,
    path,
  }: {
    navigation: { title: string; href: string }[];
    path: string;
  }) => {
  return (
    <aside className="w-full h-full  py-10 px-4  max-md:hidden">
      <h1 className="text-2xl font-bold mb-10 text-[var(--highlight-color)]">
        Manage Account
      </h1>
      <ul className="flex flex-col gap-10 text-xl font-semibold px-2">
        {navigation.map((e, i) => {
          let selected = "";
          if (path.includes(e.href)) {
            selected = "  bg-tertiary text-[var(--highlight-color)] ";
          }
          return (
            <Link
              href={e.href}
              key={i}
              className={selected + " p-2"}
            >
              {e.title}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default Navforlg;
