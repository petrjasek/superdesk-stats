{
    port: 8125,
    backends: ['statsd-librato-backend'],
    librato: {
        email: process.env['LIBRATO_EMAIL'],
        token: process.env['LIBRATO_TOKEN'],
        source: 'superdesk'
    }
}
