module.exports = {
    siteMetadata: {
        title: 'Stephen C Wright | Technical Producer',
        author: 'Steve Wright',
        description: 'Stephen C Wright August 2018 Portfolio',
        siteUrl: 'https://scwright1.github.io/jupiter',
        shortTitle: 'Stephen Wright',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            },
        },
        `gatsby-transformer-remark`,
    ],
};
