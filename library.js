"use strict";

var plugin = {};

plugin.parse = function(data, callback) {
	if (!data || !data.postData || !data.postData.content) {
	    return callback(null, data);
	}

	plugin.parseRaw(data.postData.content, function (err, content) {
		data.postData.content = content;
		callback(err, data);
	});
};

plugin.parseRaw = function (content, callback) {
	callback(null, 
		content.replace(/<blockquote>\s*<p>-&gt; *(\((.+?)\))?([\S\s]*?) &lt;-<\/p>\s*<\/blockquote>/gm, '<div class="row"><div class="col-md-12 text-center" tabindex="-1" data-title="$2">$3</div></div>')
	);
};

module.exports = plugin;