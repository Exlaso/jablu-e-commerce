/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {

        remotePatterns: [
            {
                hostname: "exlaso.rf.gd",
                protocol:"https"
            },
            {
                hostname: "lh3.googleusercontent.com",
                protocol:"https"
            },
            {
                hostname: "utfs.io",
                protocol:"https"
            },
            {
                hostname: "i.dummyjson.com",
                protocol:"https"
            },
            {
                hostname: "placeimg.com",
                protocol:"https"
            },
            {
                hostname: "res.cloudinary.com",
                protocol:"https"
            },
            {
                hostname: "picsum.photos",
                protocol:"https"
            },
            {
                hostname: "fakestoreapi.com",
                protocol:"https"
            }
        ],
    }
}


module.exports = nextConfig
