require! {
	livescript: LiveScript
	'loader-utils': LoaderUtils
}

module.exports = (source) !->
	@cacheable?!
	ls-request = LoaderUtils.get-remaining-request this
	js-request = LoaderUtils.get-current-request this

	config =
		filename: ls-request
		output-filename: js-request
		map: \linked
		bare: true
		const: false
		header: false

	query = LoaderUtils.parse-query this.query
	config <<< query

	result = LiveScript.compile source, config
	if config.map == 'none'
		return result
	result.map.set-source-content ls-request, source
	result.map._file = ls-request # Monkeypatch filename in sourcemap
	@callback null, result.code, JSON.parse(result.map.to-string!)
