it("bundle0 should include sourcemapped test.js", function() {
	var fs = require("fs");
	var source = fs.readFileSync(__filename + ".map", "utf-8");
	var map = JSON.parse(source);
	map.sources.should.containEql("webpack:///./test.js");
});

require.include("./test.js");
