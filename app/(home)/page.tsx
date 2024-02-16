import getAllProducts from "@/utils/GetProduct";
import ProductsCategories from "@/components/ProductsCategories";
import ProccessSection from "@/components/Parallax/Parallax";
import Exploresection from "@/components/Exploresection";
import CategoriesDisplay from "@/components/Categories/CategoriesDisplay";
import WishlistSection from "@/components/Home/WishlistSection";
import {GetCategories} from "@/lib/db/hasura";
import {Product} from "@/lib/Interfaces";
import {HeroParallax} from "@/components/ui/hero-parallax";
import {MaskContainer} from "@/components/ui/svg-mask-effect";


export default async function Home() {
    const Items: Product[] | undefined = await getAllProducts();
    const data: { name: string; image: string; description: string }[] =
        await GetCategories();
    const sortFunction = (a: any, b: any) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }
    return (
        <main className="flex min-h-screen flex-col">

            <HeroParallax products={Items ? [...Items.map(e => ({
                title: e.title,
                link: "/Products/" + e.title.replaceAll(" ", "-"),
                thumbnail: e.images
            })),...Items.map(e => ({
                title: e.title,
                link: "/Products/" + e.title.replaceAll(" ", "-"),
                thumbnail: e.images
            }))] : []}></HeroParallax>

            <MaskContainer
                revealText={<div className="flex flex-col items-center justify-center  w-full gap-4 ">
                    {[0, 0, 0, 0, 0, 0, 0,].map((e, i) => (
                        <h2 key={i + e}
                            className=" flex justify-center gap-3 flex-wrap max-md:px-5  items-center uppercase text-white  w-full font-bold ">
                            {"We have the best product for you".split(" ").map((e, i) => <span key={i + e}>{e} </span>)}
                        </h2>))}
                </div>
                }
                size={50}
                revealSize={300}
            >
                <div className="flex flex-col items-center justify-center  w-full gap-4">
                    {[0, 0, 0, 0, 0, 0, 0,].map((e, i) => (
                        <h2 key={i + e}
                            className=" flex justify-center gap-3 flex-wrap max-md:px-5  items-center uppercase text-white  w-full font-bold ">
                            {"We have the best pricing for you".split(" ").map((e, i) => {
                                if (e === "pricing") return <span key={i + e} className="text-[red]">{e} </span>
                                return <span key={i + e}>{e} </span>
                            })}
                        </h2>))}
                </div>

            </MaskContainer>
            {/*<LandingSection/>*/}
            <Exploresection/>
            <ProccessSection/>
            <CategoriesDisplay className="py-20" data={data.sort(sortFunction).slice(0, 3)}/>
            <div className=" px-16 py-4 max-lg:px-0 flex flex-col gap-5 ">
                <WishlistSection/>
                <ProductsCategories data={Items}/>
            </div>
        </main>
    );
}
