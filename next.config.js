module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://baganheritage.xyz/",
        permanent: true,
      },
//        {
//          source: "/:slug",
//          destination: "https://baganheritage.xyz/:slug",
//          permanent: true,
//        },
    ];
  },
};
