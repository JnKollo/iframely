module.exports = {

    re: [
        /((https?:\/\/)?)?embed.francetv.fr\/\?ue=(.+)$/i
    ],

    mixins: [
        "*"
    ],

    provides: ['playbuzz'],

    getLink: function(urlMatch) {
        return [{
            type: CONFIG.T.text_html,
            rel: [CONFIG.R.ssl, CONFIG.R.app],
            href: urlMatch[0]
        }]
    },

    getMeta: function() {
        return {
            canonical: 'Pluzz'
        };
    },

    tests: [
        "http://embed.francetv.fr/?ue=384c60cee6d3a32923b14b3660ad77a8"
    ]
};
