import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getServerSession();

  if (!!user?.user?.email) {
    redirect("/");
  } else {
    return <>{children}</>;
  }
}
