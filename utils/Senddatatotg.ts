
export const message = async (message: string) => {


    const chat_id = 1024009553;
    try {
        await fetch(`https://api.telegram.org/${process.env.NEXT_PUBLIC_TG_SECRET}/sendMessage?chat_id=${chat_id}&text=${message}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
        });

    } catch (error) {
        console.error(error);
    }
}