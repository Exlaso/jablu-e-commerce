import React, {FunctionComponent} from "react";
import {redirect} from "next/navigation";
import SubscribeSwitchs from "@/components/Subscribe/SubscribeSwitchs";
import {gqlClient} from "@/lib/service/client";
import {GetSubscribedataDocument} from "@/lib/gql/graphql";
import {Metadata} from "next";
import {getServerSession} from "next-auth";
import BackButton from "@/components/Utils/Backbtn";

interface typesforpage {
    searchParams: {
        email: string | undefined
    }
}

export const metadata: Metadata = {
    title: "Subsciption - Jablu.in",
    keywords: [
        "Jablu.in",
        "Jablu",
        "Jablu.in Account",
        "Jablu.in Subsciption",
        "Jablu.in Account Subsciption",
        "Jablu.in Account Subsciption",
    ],
    description: "Manage your subscription settings for Jablu.in",
    metadataBase: new URL("https://jablu.exlaso.in"),
    openGraph: {
        title: "Subsciption - Jablu.in",
        url: `https://jablu.exlaso.in/Subscription`,
        siteName: "Jablu.in",
        type: "website",
        images: "https://jablu.exlaso.in/icon.svg",
        description: "Manage your subscription settings for Jablu.in",
    },
    alternates: {
        canonical: "https://jablu.exlaso.in/Subscription"
    },
}

const page: FunctionComponent<typesforpage> = async (props) => {

    const data = await getServerSession();
    let email = "";
    if (props.searchParams.email) {
        email = props.searchParams.email;
    } else if (data?.user?.email) {
        email = data.user.email;
    } else {
        redirect("/");
    }
    const subscribedata = await gqlClient.request(GetSubscribedataDocument, {
        email: email
    }, {
        "x-hasura-admin-secret": process.env.Hasura_Secret!
    }).catch(() => {
        redirect("/");


    })
    return <main className={"py-[13vh] min-h-screen flex flex-col justify-center items-center"}>
<BackButton />
        <div className={"flex flex-col justify-start w-full items-center gap-4"}>
            <h1 className={"text-4xl font-bold"}>
                Unsubscribe from Newsletter
            </h1>
            <p>
                Email address: {email}
            </p>
            <SubscribeSwitchs
                admintoken={process.env.Hasura_Secret!}
                email={email}
                update={subscribedata.users.at(0)?.subscriber?.update ?? true}
                cart={subscribedata.users.at(0)?.subscriber?.cart ?? true}
                new={subscribedata.users.at(0)?.subscriber?.newreleases ?? true}
                favr={subscribedata.users.at(0)?.subscriber?.favourite ?? true}
            />

        </div>
    </main>
}
export default page