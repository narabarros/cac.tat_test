module.exports = {
    default: '--format-options \'{"snippetInterface": "synchronous"}\'',
    require: ['features/step_definitions/*.js', 'features/support/*.js'],
    format: 'pretty',
    tags: '@smoke'
};