{
    port: 8125,
    backends: [ "../../statsdplugin/hostedgraphite" ],
    hostedGraphiteAPIKey: process.env['HOSTEDGRAPHITE_APIKEY'],
}
