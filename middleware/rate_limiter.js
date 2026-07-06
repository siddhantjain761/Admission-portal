const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
    // Time window in milliseconds (15 minutes)
    windowMs: 1 * 60 * 1000,

    // Maximum number of requests allowed per window
    max: 5,

    // Response message when limit is exceeded
    handler: (req, res, next, options) => {
        res.status(429).json({
            error: 'Too Many Requests',
            message: `Rate limit exceeded. Try again in ${Math.ceil(options.windowMs / 1000)} seconds.`,
            retryAfter: Math.ceil(options.windowMs / 1000)
        });
    },

    // Enable standard rate limit headers (RateLimit-*)
    standardHeaders: true,
    skipSuccessfulRequests: true,

    // Disable legacy X-RateLimit-* headers
    legacyHeaders: false
});


module.exports = authLimiter