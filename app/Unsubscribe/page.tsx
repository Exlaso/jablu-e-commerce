import React, {FunctionComponent} from "react";
import {redirect} from "next/navigation";
import SubscribeSwitchs from "@/components/Subscribe/SubscribeSwitchs";
import {gqlClient} from "@/lib/service/client";
import {GetSubscribedataDocument} from "@/lib/gql/graphql";

interface typesforpage {
    searchParams: {
        email: string | undefined
    }
}

const page: FunctionComponent<typesforpage> = async (props) => {

    if (!props.searchParams.email) {
        redirect("/")
    }
    const subscribedata = await gqlClient.request(GetSubscribedataDocument, {
        email: props.searchParams.email
    }, {
        "x-hasura-admin-secret": process.env.Hasura_Secret!
    }).catch(() => {
        redirect("/");

    })
    return <main className={"py-[13vh] min-h-screen flex justify-center items-center"}>

        <div className={"flex flex-col justify-start w-full items-center gap-4"}>
            <h1 className={"text-4xl font-bold"}>
                Unsubscribe from Newsletter
            </h1>
            <p>
                Email address: {props.searchParams.email}
            </p>
            <SubscribeSwitchs
                admintoken={process.env.Hasura_Secret!}
                email={props.searchParams.email}
                update={subscribedata.users.at(0)?.subscriber?.update ?? true}
                cart={subscribedata.users.at(0)?.subscriber?.cart ?? true}
                new={subscribedata.users.at(0)?.subscriber?.newreleases ?? true}
                favr={subscribedata.users.at(0)?.subscriber?.favourite ?? true}
            />

        </div>
    </main>
}
export default page