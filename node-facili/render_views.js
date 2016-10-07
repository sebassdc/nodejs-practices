function render(html, parametros){
	var variables = html.match(/[^\{\}]+(?=\})/g);
	for (var i = variables.length - 1; i >= 0; i--) {
		var variable = variables[i];
		html = html.replace("{"+variables[i]+"}", parametros[variable]);
	}
	return html;
}
module.exports.render = render;
