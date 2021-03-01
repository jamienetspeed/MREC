(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"asd.png", id:"asd"},
		{src:"Bg.jpg", id:"Bg"},
		{src:"Boots.png", id:"Boots"},
		{src:"Fire.png", id:"Fire"},
		{src:"Logos.png", id:"Logos"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.asd = function() {
	this.initialize(img.asd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,42);


(lib.Bg = function() {
	this.initialize(img.Bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Boots = function() {
	this.initialize(img.Boots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,180);


(lib.Fire = function() {
	this.initialize(img.Fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,147);


(lib.Logos = function() {
	this.initialize(img.Logos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,53);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fire();
	this.instance.parent = this;
	this.instance.setTransform(-31.5,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-73.5,63,147);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGMAuQgKgHAAgPIABAAIAUAAQAAAGAFAEQAEAEAGAAQAIAAAEgEQAEgEABgHQAAgJgFgEQgEgEgIAAIgMAAIAAgOIAMAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAQgFAAgEAEQgEADgBAGIgVAAIAAgBQAAgMAKgIQAKgIAPAAQARAAAKAHQAJAIAAAPQAAAHgEAGQgEAHgJADQAJABAGAHQAEAGAAAJQAAAPgKAIQgLAIgRAAQgPAAgLgIgABmAuQgKgIAAgOQAAgJAFgHQAFgGAIgCQgHgDgEgGQgFgHABgIQgBgOAKgIQAKgHAOAAQAPAAAKAHQAJAIAAAOQAAAIgEAHQgEAGgIADQAJACAFAGQAFAHAAAJQAAAOgKAIQgKAIgRAAQgQAAgKgIgAB1ALQgDAEAAAHQAAAHADAFQAFAEAGAAQAHAAAFgEQADgFAAgHQAAgHgDgEQgFgFgHAAQgGAAgFAFgAB3ghQgDAEAAAGQAAAHADAEQAEAEAFAAQAHAAADgEQADgEAAgHQAAgGgEgEQgCgEgHAAQgFAAgEAEgAAPAuQgLgHABgPIAAAAIAVAAQAAAGAEAEQAFAEAGAAQAIAAAEgEQAEgEAAgHQAAgJgEgEQgFgEgHAAIgNAAIAAgOIANAAQAHAAAEgEQADgEAAgHQAAgGgDgEQgEgEgHAAQgGAAgEAEQgEADAAAGIgVAAIAAgBQgBgMALgIQAJgIAQAAQAQAAAKAHQAKAIAAAPQgBAHgEAGQgEAHgIADQAJABAFAHQAEAGABAJQAAAPgLAIQgLAIgQAAQgQAAgKgIgAhDArQgKgMAAgUIAAgTQAAgVAMgMQAMgMASAAIALABQAGABAFACIgEAQIgJgDIgJgBQgJAAgGAIQgGAHABANIAAAAQADgEAGgCQAGgCAGAAQAOAAAJAKQAIAIAAAQQAAAQgKALQgKAKgQAAQgRAAgLgLgAgyAAQgEABgCADIAAAIQAAAMAFAHQAEAHAIAAQAGAAAFgGQADgGAAgJQAAgJgDgFQgFgEgHAAQgFAAgFABgAi/ArQgKgLAAgVIAAgVQAAgVAKgLQAJgLARAAQARAAAJALQAKALAAAVIAAAVQAAAVgKALQgJALgRAAQgRAAgJgLgAiwgfQgDAGAAANIAAAZQAAANADAGQAEAGAHAAQAIAAADgGQAEgGAAgNIAAgZQAAgNgEgGQgEgGgHAAQgIAAgDAGgAkWArQgJgLAAgVIAAgVQAAgVAJgLQALgLAQAAQARAAAKALQAJALAAAVIAAAVQAAAVgJALQgKALgRAAQgQAAgLgLgAkGgfQgEAGAAANIAAAZQAAANAEAGQAEAGAHAAQAHAAAEgGQAEgGAAgNIAAgZQAAgNgEgGQgEgGgHAAQgIAAgDAGgAlrAuQgLgIAAgOQABgJAFgHQAEgGAJgCQgIgDgEgGQgEgHAAgIQAAgOAKgIQAJgHAPAAQAPAAAJAHQAKAIAAAOQAAAIgEAHQgFAGgHADQAJACAFAGQAEAHAAAJQAAAOgKAIQgJAIgRAAQgQAAgKgIgAlcALQgEAEAAAHQAAAHAEAFQAEAEAHAAQAHAAAEgEQAEgFAAgHQAAgHgEgEQgFgFgGAAQgHAAgEAFgAlaghQgDAEgBAGQABAHADAEQADAEAGAAQAGAAADgEQAEgEAAgHQgBgGgDgEQgDgEgGAAQgGAAgDAEgAnBArQgKgLAAgVIAAgVQAAgVAKgLQAKgLAQAAQARAAAKALQAJALAAAVIAAAVQAAAVgJALQgKALgRAAQgQAAgKgLgAmygfQgDAGgBANIAAAZQABANADAGQAEAGAHAAQAHAAAEgGQAEgGAAgNIAAgZQAAgNgEgGQgEgGgHAAQgIAAgDAGgAFAA1IABgLQACgYAJgSQAIgTAOgQIg3AAIAAgRIBMAAIAAARQgRAUgHAPQgGARgDAZIAAALgADqA1IABgLQADgYAHgSQAJgTAOgQIg2AAIAAgRIBLAAIAAARQgSAUgFAPQgHARgCAZIgCALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAdgIIAMAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAQgGAAgEAEQgEADAAAGIgVAAIAAgBQAAgMAKgIQAKgIAPAAQAQAAAKAHQAKAIAAAPQAAAHgEAGQgFAHgIADQAJABAFAHQAFAGAAAJQAAAPgLAIQgLAIgQAAQgPAAgLgIQgKgHAAgPIAAAAIAVAAQAAAGAEAEQAFAEAGAAQAIAAAEgEQAEgEAAgHQAAgJgEgEQgEgEgIAAIgMAAgACjgYQAAAIgFAHQgEAGgHADQAIACAFAGQAFAHAAAJQAAAOgKAIQgKAIgQAAQgQAAgKgIQgLgIAAgOQAAgJAFgHQAFgGAJgCQgIgDgEgGQgEgHAAgIQAAgOAJgIQAKgHAPAAQAPAAAJAHQAKAIAAAOgACNgXQAAgGgDgEQgDgEgGAAQgGAAgDAEQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAADgEQADgEAAgHgAF3gjQgRAUgGAPQgHARgCAZIgBALIgWAAIABgLQADgYAIgSQAIgTAOgQIg2AAIAAgRIBLAAgAEhgjQgRAUgGAPQgHARgCAZIgBALIgWAAIABgLQADgYAIgSQAIgTAOgQIg2AAIAAgRIBLAAgAGagIIAMAAQAIAAADgEQAEgEAAgHQAAgGgEgEQgDgEgHAAQgGAAgEAEQgEADAAAGIgVAAIAAgBQgBgMAKgIQAKgIAPAAQARAAAKAHQAJAIAAAPQAAAHgEAGQgEAHgIADQAJABAFAHQAEAGAAAJQAAAPgKAIQgLAIgRAAQgPAAgKgIQgLgHAAgPIABAAIAUAAQAAAGAFAEQAEAEAHAAQAHAAAEgEQAFgEAAgHQAAgJgEgEQgFgEgIAAIgMAAgACQAWQAAgHgEgEQgFgFgGAAQgHAAgEAFQgEAEAAAHQAAAHAEAFQAEAEAHAAQAHAAAEgEQAEgFAAgHgAmDALQAAAVgKALQgKALgQAAQgRAAgKgLQgJgLAAgVIAAgVQAAgVAJgLQAKgLARAAQAQAAAKALQAKALAAAVgAmYgMQAAgNgEgGQgEgGgHAAQgIAAgDAGQgEAGAAANIAAAZQAAANAEAGQAEAGAHAAQAHAAAEgGQAEgGAAgNgAkvgYQAAAIgFAHQgEAGgHADQAIACAFAGQAFAHAAAJQAAAOgKAIQgKAIgQAAQgQAAgKgIQgLgIAAgOQAAgJAFgHQAFgGAJgCQgIgDgEgGQgEgHAAgIQAAgOAJgIQAKgHAPAAQAPAAAJAHQAKAIAAAOgAlFgXQAAgGgDgEQgDgEgGAAQgGAAgDAEQgEAEAAAGQAAAHAEAEQADAEAGAAQAGAAADgEQADgEAAgHgAjXALQAAAVgKALQgKALgQAAQgRAAgKgLQgJgLAAgVIAAgVQAAgVAJgLQAKgLARAAQAQAAAKALQAKALAAAVgAjsgMQAAgNgEgGQgEgGgHAAQgIAAgDAGQgEAGAAANIAAAZQAAANAEAGQAEAGAHAAQAHAAAEgGQAEgGAAgNgAiBALQAAAVgKALQgKALgQAAQgRAAgKgLQgJgLAAgVIAAgVQAAgVAJgLQAKgLARAAQAQAAAKALQAKALAAAVgAiWgMQAAgNgEgGQgEgGgHAAQgIAAgDAGQgEAGAAANIAAAZQAAANAEAGQAEAGAHAAQAHAAAEgGQAEgGAAgNgAgjg1QAGAAAFABQAGABAFACIgEAQQgFgCgEgBQgEgBgFAAQgJAAgGAIQgGAHAAANIABAAQADgEAGgCQAFgCAHAAQAOAAAIAKQAJAIAAAQQAAAQgKALQgKAKgQAAQgRAAgLgLQgKgMAAgUIAAgTQAAgVAMgMQAMgMASAAgAgogBQgFAAgFABQgEABgCADIAAAIQAAAMAFAHQAEAHAIAAQAGAAAEgGQAEgGAAgJQAAgJgEgFQgEgEgHAAgAlCAWQAAgHgEgEQgFgFgGAAQgHAAgEAFQgEAEAAAHQAAAHAEAFQAEAEAHAAQAHAAAEgEQAEgFAAgHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGMAuQgKgHAAgPIABAAIAUAAQAAAGAFAEQAEAEAGAAQAIAAAEgEQAEgEABgHQAAgJgFgEQgEgEgIAAIgMAAIAAgOIAMAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgEgEgHAAQgFAAgEAEQgEADgBAGIgVAAIAAgBQAAgMAKgIQAKgIAPAAQARAAAKAHQAJAIAAAPQAAAHgEAGQgEAHgJADQAJABAGAHQAEAGAAAJQAAAPgKAIQgLAIgRAAQgPAAgLgIgABmAuQgKgIAAgOQAAgJAFgHQAFgGAIgCQgHgDgEgGQgFgHABgIQgBgOAKgIQAKgHAOAAQAPAAAKAHQAJAIAAAOQAAAIgEAHQgEAGgIADQAJACAFAGQAFAHAAAJQAAAOgKAIQgKAIgRAAQgQAAgKgIgAB1ALQgDAEAAAHQAAAHADAFQAFAEAGAAQAHAAAFgEQADgFAAgHQAAgHgDgEQgFgFgHAAQgGAAgFAFgAB3ghQgDAEAAAGQAAAHADAEQAEAEAFAAQAHAAADgEQADgEAAgHQAAgGgEgEQgCgEgHAAQgFAAgEAEgAAPAuQgLgHABgPIAAAAIAVAAQAAAGAEAEQAFAEAGAAQAIAAAEgEQAEgEAAgHQAAgJgEgEQgFgEgHAAIgNAAIAAgOIANAAQAHAAAEgEQADgEAAgHQAAgGgDgEQgEgEgHAAQgGAAgEAEQgEADAAAGIgVAAIAAgBQgBgMALgIQAJgIAQAAQAQAAAKAHQAKAIAAAPQgBAHgEAGQgEAHgIADQAJABAFAHQAEAGABAJQAAAPgLAIQgLAIgQAAQgQAAgKgIgAhDArQgKgMAAgUIAAgTQAAgVAMgMQAMgMASAAIALABQAGABAFACIgEAQIgJgDIgJgBQgJAAgGAIQgGAHABANIAAAAQADgEAGgCQAGgCAGAAQAOAAAJAKQAIAIAAAQQAAAQgKALQgKAKgQAAQgRAAgLgLgAgyAAQgEABgCADIAAAIQAAAMAFAHQAEAHAIAAQAGAAAFgGQADgGAAgJQAAgJgDgFQgFgEgHAAQgFAAgFABgAi/ArQgKgLAAgVIAAgVQAAgVAKgLQAJgLARAAQARAAAJALQAKALAAAVIAAAVQAAAVgKALQgJALgRAAQgRAAgJgLgAiwgfQgDAGAAANIAAAZQAAANADAGQAEAGAHAAQAIAAADgGQAEgGAAgNIAAgZQAAgNgEgGQgEgGgHAAQgIAAgDAGgAkWArQgJgLAAgVIAAgVQAAgVAJgLQALgLAQAAQARAAAKALQAJALAAAVIAAAVQAAAVgJALQgKALgRAAQgQAAgLgLgAkGgfQgEAGAAANIAAAZQAAANAEAGQAEAGAHAAQAHAAAEgGQAEgGAAgNIAAgZQAAgNgEgGQgEgGgHAAQgIAAgDAGgAlrAuQgLgIAAgOQABgJAFgHQAEgGAJgCQgIgDgEgGQgEgHAAgIQAAgOAKgIQAJgHAPAAQAPAAAJAHQAKAIAAAOQAAAIgEAHQgFAGgHADQAJACAFAGQAEAHAAAJQAAAOgKAIQgJAIgRAAQgQAAgKgIgAlcALQgEAEAAAHQAAAHAEAFQAEAEAHAAQAHAAAEgEQAEgFAAgHQAAgHgEgEQgFgFgGAAQgHAAgEAFgAlaghQgDAEgBAGQABAHADAEQADAEAGAAQAGAAADgEQAEgEAAgHQgBgGgDgEQgDgEgGAAQgGAAgDAEgAnBArQgKgLAAgVIAAgVQAAgVAKgLQAKgLAQAAQARAAAKALQAJALAAAVIAAAVQAAAVgJALQgKALgRAAQgQAAgKgLgAmygfQgDAGgBANIAAAZQABANADAGQAEAGAHAAQAHAAAEgGQAEgGAAgNIAAgZQAAgNgEgGQgEgGgHAAQgIAAgDAGgAFAA1IABgLQACgYAJgSQAIgTAOgQIg3AAIAAgRIBMAAIAAARQgRAUgHAPQgGARgDAZIAAALgADqA1IABgLQADgYAHgSQAJgTAOgQIg2AAIAAgRIBLAAIAAARQgSAUgFAPQgHARgCAZIgCALg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-6.4,94.1,13);


(lib.Subs3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaByIAAhfQgBgSgFgGQgIgIgMAAQgHAAgHAEQgGADgFAFIAABzIgrAAIAAjjIArAAIAABaQAIgLALgGQAJgGANAAQAYAAAPARQANAQAAAhIAABeg");
	this.shape.setTransform(61.9,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBYQgMgMAAgbIAAhPIgXAAIAAgeIAXAAIAAgnIAoAAIAAAnIAbAAIAAAeIgbAAIAABPQAAAJAFAEQAEAEAGAAIAFAAIAGgBIAEAeIgNAEIgNABQgVAAgLgMg");
	this.shape_1.setTransform(47.9,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBQIAAhhQAAgQgHgGQgGgHgNAAQgHAAgHADQgGAEgFAGIAABxIgrAAIAAicIAoAAIACAWQAIgMAMgGQAJgHAPAAQAYAAANAPQAOAPAAAgIAABhg");
	this.shape_2.setTransform(34.5,43.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2A7QgTgWAAgkIAAgBQAAgjATgXQAUgXAiAAQAiAAAUAXQAUAWAAAkIAAABQAAAkgUAWQgUAXgiAAQgiAAgUgXgAgXgiQgIANAAAVIAAABQAAAWAIANQAHANAQAAQAQAAAIgNQAHgNAAgWIAAgBQAAgVgHgNQgIgOgQAAQgPAAgIAOg");
	this.shape_3.setTransform(17.6,43.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABEBqIAAg/IAEhdIgBAAIg5CcIgbAAIg5ibIgBAAIAEBcIAAA/IgqAAIAAjTIA3AAIA2CbIAAAAIA2ibIA4AAIAADTg");
	this.shape_4.setTransform(-4,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBQIAAicIAnAAIACAXQADgMAJgHQAKgHALAAIAGAAIAGACIgFAmIgQgBQgKAAgFAEQgHAEgBAHIAABpg");
	this.shape_5.setTransform(-29,43.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA8QgUgWAAgiIAAgEQAAgjAUgXQASgXAgAAQAfAAASAUQASATAAAhIAAAVIhdAAIAAABQABAQAKAKQAIAKAPAAQAOAAAJgDQAKgDAKgGIANAaQgKAIgQAGQgQAFgTAAQggAAgVgWgAgPgnQgIAJgBAPIABABIAyAAIAAgEQAAgNgGgJQgHgIgMAAQgLAAgGAJg");
	this.shape_6.setTransform(-42.8,43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRBqIAAjTIBUAAQAkAAAVATQAVASABAfQgBAfgVAQQgVATgkAAIgpAAIAABNgAgmgCIApAAQARAAAKgKQAJgKAAgPQAAgPgJgKQgKgKgRAAIgpAAg");
	this.shape_7.setTransform(-60.2,40.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzBWQgWgXABgoIAAgoQgBgqAYgYQAZgZAjAAQAMAAALACQAKACAKAFIgIAfIgRgFQgHgCgLAAQgRAAgLAPQgNAPABAZIAAABQAIgHALgFQAKgEAMAAQAdAAAQAUQAQATABAfQgBAggTAVQgVAVgfAAQggAAgVgXgAgRAAQgIADgFAHIAAAOQABAZAIAOQAJANAOAAQANAAAIgMQAIgMAAgRQAAgSgIgLQgIgIgOAAQgJAAgJACg");
	this.shape_8.setTransform(78.1,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdBrQgMgCgLgFIAGgfIASAGQAKABALAAQAPAAAKgMQAMgNAAgXIAAgKQgIAJgJAEQgKAFgKAAQgeAAgRgTQgRgSAAghQAAggAUgVQAUgVAfAAQAgAAATAWQAVAXAAApIAAAwQAAAngWAWQgYAWghAAQgLAAgLgCgAgUg/QgIAMAAARQAAASAHAMQAIAJANAAQAJAAAHgEQAJgCAFgHIAAgTQAAgYgJgMQgIgMgNAAQgMAAgIAMg");
	this.shape_9.setTransform(60.5,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUASIAAgjIApAAIAAAjg");
	this.shape_10.setTransform(47.6,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBrQgLgCgKgFIAFgfIASAGQAKABALAAQAPAAALgMQALgNgBgXIAAgKQgHAJgKAEQgJAFgKAAQgeAAgRgTQgRgSAAghQAAggAUgVQAUgVAfAAQAfAAAVAWQAUAXAAApIAAAwQAAAngXAWQgWAWgiAAQgLAAgMgCgAgUg/QgJAMABARQgBASAIAMQAHAJAOAAQAIAAAJgEQAHgCAFgHIAAgTQAAgYgIgMQgIgMgNAAQgMAAgIAMg");
	this.shape_11.setTransform(34.6,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BWQgUgXgBgoIAAgoQAAgqAZgYQAYgZAjAAQAMAAAKACQALACAKAFIgIAfIgRgFQgIgCgJAAQgSAAgMAPQgMAPACAZIAAABQAHgHALgFQAKgEANAAQAcAAARAUQAPATAAAfQABAggVAVQgUAVgfAAQggAAgWgXgAgRAAQgIADgEAHIAAAOQgBAZAKAOQAIANAOAAQANAAAIgMQAIgMAAgRQAAgSgIgLQgIgIgOAAQgJAAgJACg");
	this.shape_12.setTransform(17.8,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgICLIAAgdQgbgDgSgQQgSgRABghIAAAAIAqAAQAAATAJAJQAJAIAMAAQANABAHgIQAHgGAAgNQAAgMgGgHQgHgIgQgGQgfgMgQgMQgQgPAAgbQAAgYAQgPQAQgRAagDIAAgfIAWAAIAAAgQAZAEAPASQAPARAAAcIgBABIgqAAQAAgRgHgKQgHgJgMAAQgLAAgGAIQgGAHAAAMQAAALAHAHQAGAIAPAHQAhAMAPANQAQAOAAAaQAAAagQAPQgPAPgbADIAAAdg");
	this.shape_13.setTransform(0.3,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABGBQIAAheQAAgSgGgHQgGgHgLAAQgJAAgHAEQgHAEgEAHIABAFIAAAEIAABmIgpAAIAAheQAAgSgGgHQgGgHgLAAQgJAAgGADQgHADgEAGIAAByIgrAAIAAicIAoAAIACAVQAHgMAMgGQALgGAPAAQAQAAAJAHQAKAGAGAOQAHgNAMgHQAMgHAPAAQAYAAANAQQAOAQAAAhIAABeg");
	this.shape_14.setTransform(-28.7,3.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2A7QgTgWAAgkIAAgBQAAgjATgXQAUgXAiAAQAiAAAUAXQAUAWAAAkIAAABQAAAkgUAWQgUAXgiAAQgiAAgUgXgAgXgiQgIANAAAVIAAABQAAAWAIANQAHANAQAAQAQAAAIgNQAHgNAAgWIAAgBQAAgVgHgNQgIgOgQAAQgPAAgIAOg");
	this.shape_15.setTransform(-50.2,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrBQIAAicIAoAAIACAXQAEgMAIgHQAKgHALAAIAGAAIAGACIgFAmIgQgBQgKAAgFAEQgHAEgBAHIAABpg");
	this.shape_16.setTransform(-63.1,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhIBqIAAjTICRAAIAAAhIhmAAIAAA7IBXAAIAAAfIhXAAIAABYg");
	this.shape_17.setTransform(-77.1,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeBPIgehdIAAAAIgdBdIgjAAIgoidIAoAAIAVBkIABAAIAehkIAaAAIAdBkIABAAIAWhkIAnAAIgoCdg");
	this.shape_18.setTransform(78.7,-35.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag2A7QgTgWAAgkIAAgBQAAgjATgXQAUgXAiAAQAiAAAUAXQAUAWAAAkIAAABQAAAkgUAWQgUAXgiAAQgiAAgUgXgAgXgiQgIANAAAVIAAABQAAAWAIANQAHANAQAAQAQAAAIgNQAHgNAAgWIAAgBQAAgVgHgNQgIgOgQAAQgPAAgIAOg");
	this.shape_19.setTransform(59.2,-35.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArBqIhUiQIgBABIAACPIgrAAIAAjTIArAAIBUCQIABgBIAAiPIArAAIAADTg");
	this.shape_20.setTransform(40.1,-38.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLBYQgMgMAAgbIAAhPIgXAAIAAgeIAXAAIAAgnIAoAAIAAAnIAbAAIAAAeIgbAAIAABPQAAAJAFAEQAEAEAGAAIAGAAIAFgBIAEAeIgNAEIgNABQgVAAgLgMg");
	this.shape_21.setTransform(16.5,-37.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgwA7QgUgWAAgjIAAgDQAAgjAUgWQATgXAhAAQAdAAASARQASARAAAbIgBABIgnAAQAAgMgGgJQgHgIgMAAQgPAAgHANQgHAOAAAUIAAADQAAAVAHANQAHANAPAAQAMAAAGgHQAHgGAAgLIAnAAIABAAQAAAYgSARQgTAQgcAAQghAAgTgXg");
	this.shape_22.setTransform(3.9,-35.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvA8QgVgWAAgiIAAgEQAAgjATgXQAUgXAeAAQAhAAARAUQASATAAAhIAAAVIhdAAIAAABQABAQAJAKQAKAKANAAQAPAAAJgDQAJgDALgGIAMAaQgJAIgQAGQgPAFgUAAQggAAgUgWgAgQgnQgGAJgCAPIAAABIAzAAIAAgEQAAgNgHgJQgGgIgNAAQgJAAgIAJg");
	this.shape_23.setTransform(-11.7,-35.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAaBQIAAhhQAAgQgHgGQgGgHgNAAQgHAAgHADQgGAEgFAGIAABxIgrAAIAAicIAoAAIACAWQAIgMAMgGQAJgHAPAAQAYAAANAPQAOAPAAAgIAABhg");
	this.shape_24.setTransform(-28.3,-36);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaBQIAAhhQAAgQgHgGQgGgHgNAAQgHAAgHADQgGAEgFAGIAABxIgrAAIAAicIAoAAIACAWQAIgMAMgGQAJgHAPAAQAYAAANAPQAOAPAAAgIAABhg");
	this.shape_25.setTransform(-45.2,-36);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag2A7QgTgWAAgkIAAgBQAAgjATgXQAUgXAiAAQAiAAAUAXQAUAWAAAkIAAABQAAAkgUAWQgUAXgiAAQgiAAgUgXgAgXgiQgIANAAAVIAAABQAAAWAIANQAHANAQAAQAQAAAIgNQAHgNAAgWIAAgBQAAgVgHgNQgIgOgQAAQgPAAgIAOg");
	this.shape_26.setTransform(-62.2,-35.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag7BVQgYgZAAgnIAAgoQAAgnAYgZQAXgZAkAAQAnAAAXAUQAWAUgBAjIAAABIgqAAQAAgVgKgLQgKgLgVAAQgRAAgMAPQgLAQAAAYIAAApQAAAYAMAQQAMAPASAAQAUAAAKgKQAJgLAAgVIAqAAIAAAAQABAjgWAUQgWAUgmAAQglAAgYgYg");
	this.shape_27.setTransform(-80,-38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-61.4,183.8,122.8);


(lib.Subs2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBqIAAglIApAAIAAAlgAgUAhIAAiKIApAAIAACKg");
	this.shape.setTransform(111.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwA8QgUgWAAgiIAAgEQAAgjATgXQATgXAgAAQAfAAASAUQASATAAAhIAAAVIhdAAIAAABQABAQAKAKQAIAKAPAAQAOAAAJgDQAJgDAMgGIAMAaQgLAIgPAGQgQAFgTAAQggAAgVgWgAgPgnQgIAJgBAPIABABIAyAAIAAgEQAAgNgGgJQgHgIgMAAQgLAAgGAJg");
	this.shape_1.setTransform(100,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA8QgUgWAAgiIAAgEQAAgjAUgXQASgXAgAAQAfAAASAUQASATAAAhIAAAVIhdAAIAAABQABAQAKAKQAIAKAPAAQAOAAAJgDQAKgDAKgGIANAaQgKAIgQAGQgQAFgTAAQggAAgVgWgAgPgnQgIAJgBAPIABABIAyAAIAAgEQAAgNgGgJQgHgIgMAAQgLAAgGAJg");
	this.shape_2.setTransform(84.1,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBQIAAicIAoAAIACAXQAEgMAIgHQAJgHAMAAIAGAAIAGACIgFAmIgQgBQgKAAgFAEQgGAEgCAHIAABpg");
	this.shape_3.setTransform(71.6,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBqIAAjTICRAAIAAAhIhmAAIAAA7IBXAAIAAAfIhXAAIAABYg");
	this.shape_4.setTransform(57.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZByIAAhfQAAgSgFgGQgIgIgMAAQgHAAgGAEQgIADgEAFIAABzIgqAAIAAjjIAqAAIAABaQAIgLAKgGQAJgGANAAQAZAAAOARQAOAQAAAhIAABeg");
	this.shape_5.setTransform(32.3,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBYQgMgMAAgbIAAhPIgXAAIAAgeIAXAAIAAgnIApAAIAAAnIAbAAIAAAeIgbAAIAABPQAAAJADAEQAFAEAGAAIAFAAIAGgBIAEAeIgMAEIgOABQgVAAgLgMg");
	this.shape_6.setTransform(18.3,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBQIAAhhQAAgQgHgGQgGgHgNAAQgHAAgHADQgGAEgFAGIAABxIgrAAIAAicIAoAAIACAWQAIgMAMgGQAJgHAPAAQAYAAANAPQAOAPAAAgIAABhg");
	this.shape_7.setTransform(4.9,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2A7QgTgWAAgkIAAgBQAAgjATgXQAUgXAiAAQAiAAAUAXQAUAWAAAkIAAABQAAAkgUAWQgUAXgiAAQgiAAgUgXgAgXgiQgIANAAAVIAAABQAAAWAIANQAHANAQAAQAQAAAIgNQAHgNAAgWIAAgBQAAgVgHgNQgIgOgQAAQgPAAgIAOg");
	this.shape_8.setTransform(-12.1,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABEBqIAAg/IAEhdIgBAAIg5CcIgbAAIg5ibIgBAAIAEBcIAAA/IgqAAIAAjTIA3AAIA2CbIAAAAIA2ibIA4AAIAADTg");
	this.shape_9.setTransform(-33.7,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBYQgMgMAAgbIAAhPIgXAAIAAgeIAXAAIAAgnIAoAAIAAAnIAbAAIAAAeIgbAAIAABPQAAAJAFAEQAEAEAGAAIAFAAIAGgBIAEAeIgNAEIgNABQgVAAgLgMg");
	this.shape_10.setTransform(-59.7,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwBCQgSgQABgVIAAgBIAnAAQAAANAIAGQAIAGALAAQAMAAAGgFQAGgFAAgIQAAgHgGgFQgHgFgRgEQgcgGgOgJQgOgLAAgUQAAgUARgOQARgPAbAAQAeAAASAPQASAOgBAVIAAABIgpAAQAAgJgGgGQgGgGgMAAQgJAAgFAFQgGAFAAAHQAAAIAGAFQAGAEARAEQAdAGAPAJQAOALAAAUQAAAWgTANQgSAOgeAAQgdAAgTgQg");
	this.shape_11.setTransform(-72.5,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBQIAAicIAnAAIACAXQADgMAKgHQAJgHALAAIAGAAIAFACIgEAmIgQgBQgJAAgHAEQgGAEgBAHIAABpg");
	this.shape_12.setTransform(-84.5,3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUByIAAidIApAAIAACdgAgUhRIAAggIApAAIAAAgg");
	this.shape_13.setTransform(-94.6,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhIBqIAAjTICRAAIAAAhIhmAAIAAA7IBXAAIAAAfIhXAAIAABYg");
	this.shape_14.setTransform(-106.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.9,-21.8,235.9,43.6);


(lib.Subs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARA1IAAhAQAAgLgEgEQgFgEgIAAQgEAAgFACQgEACgDAEIAABLIgdAAIAAhnIAbAAIABAPQAGgIAIgFQAFgEAKAAQAQAAAIAKQAJAKAAAVIAABAg");
	this.shape.setTransform(38.9,65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATA0IgTg9IAAAAIgSA9IgYAAIgbhnIAbAAIANBBIABAAIAUhBIARAAIAUBBIAAAAIAOhBIAbAAIgbBng");
	this.shape_1.setTransform(25.9,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAnQgNgPAAgYIAAAAQgBgXANgPQAOgPAWAAQAXAAANAPQAOAPAAAXIAAAAQAAAYgOAPQgNAPgXAAQgWAAgNgPgAgPgXQgFAJAAAOIAAAAQAAAPAFAJQAFAIAKAAQALAAAEgIQAFgJABgPIAAAAQgBgOgFgJQgEgIgLAAQgKAAgFAIg");
	this.shape_2.setTransform(12.9,65.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA6QgIgIAAgRIAAg0IgPAAIAAgUIAPAAIAAgaIAbAAIAAAaIARAAIAAAUIgRAAIAAAzQAAAHACACQADADAEAAIAEAAIAEgBIACAUIgIADIgJAAQgOAAgHgIg");
	this.shape_3.setTransform(3.5,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA1IAAhnIAbAAIABAPQACgIAGgFQAFgEAIAAIAEAAIAEABIgDAZIgLAAQgGAAgEACQgEADgBAFIAABFg");
	this.shape_4.setTransform(-7.7,65.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjArQgJgLAAgXIAAg9IAcAAIAAA+QAAALADAFQAEAFAIAAQAFAAAFgCQAFgCADgEIAAhLIAdAAIAABnIgZAAIgCgPQgGAIgHAFQgGAEgJAAQgRAAgJgKg");
	this.shape_5.setTransform(-17.4,66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAnQgNgPAAgYIAAAAQAAgXAMgPQAOgPAWAAQAXAAANAPQAOAPAAAXIAAAAQAAAYgOAPQgNAPgXAAQgWAAgNgPgAgPgXQgFAJAAAOIAAAAQAAAPAFAJQAFAIAKAAQALAAAFgIQAEgJAAgPIAAAAQAAgOgEgJQgFgIgLAAQgKAAgFAIg");
	this.shape_6.setTransform(-28.7,65.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBJIgIgBIADgWIADABIACAAQAIAAADgDQAEgDACgGIADgIIglhoIAeAAIASA9IABAHIAAAAIAUhEIAeAAIgqB4QgFALgGAIQgIAIgPAAIgGgBg");
	this.shape_7.setTransform(-39.4,68);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBJQgJgCgIgFIAGgVQAGAEAHABQAHACAIAAQAKgBAFgEQAGgFAAgLIAAgJQgFAGgGADQgHADgGAAQgTAAgLgOQgLgPAAgVIAAgCQAAgZALgQQALgPATAAQAHABAHAEQAHADAEAIIADgNIAYAAIAABmQAAAVgNAMQgOALgWgBQgIAAgJgBgAgNgqQgFAJAAAPIAAACQAAAOAFAGQAFAIAIAAQAHAAAEgCQAFgDADgFIAAgrQgDgFgFgDQgEgDgHABQgIgBgFAKg");
	this.shape_8.setTransform(37.8,42.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARA1IAAhAQAAgLgFgEQgEgEgIAAQgEAAgEACQgFACgDAEIAABLIgcAAIAAhnIAaAAIACAPQAFgIAHgFQAGgEAJAAQAQAAAKAKQAIAKABAVIAABAg");
	this.shape_9.setTransform(26.7,40.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBMIAAhoIAbAAIAABogAgNg1IAAgWIAbAAIAAAWg");
	this.shape_10.setTransform(18.4,38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjA/QgLgPAAgXIAAgCQAAgXALgQQAKgPAUAAQAGAAAGAEQAHADAEAGIAAg6IAdAAIAACXIgZAAIgCgNQgFAHgHAEQgGAEgHAAQgUAAgKgOgAgNAAQgFAIAAAPIAAACQAAAOAFAIQAFAIAIAAQAGAAAFgDQAEgCADgFIAAgtQgDgDgEgDQgFgDgGAAQgIAAgFAJg");
	this.shape_11.setTransform(9.8,38.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARA1IAAhAQAAgLgEgEQgFgEgIAAQgEAAgFACQgEACgDAEIAABLIgdAAIAAhnIAbAAIABAPQAFgIAJgFQAFgEAJAAQARAAAIAKQAKAKgBAVIAABAg");
	this.shape_12.setTransform(-1.2,40.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAuQgJgJAAgPQAAgPAMgHQAMgIAXAAIAOAAIAAgJQAAgHgEgEQgEgFgGAAQgGAAgFAEQgDADAAAGIgbAAIAAgBQgCgNANgKQAMgJASAAQATAAAMAJQAMAKAAASIAAApIABAOIAEANIgdAAIgDgHIgCgJQgDAIgIAFQgFAFgKAAQgQAAgKgIgAgNALQgFAEAAAGQAAAGAEADQADADAGAAQAGAAAFgEQAGgDACgFIAAgPIgOAAQgJAAgEAFg");
	this.shape_13.setTransform(-12.3,40.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBMIAAiXIAbAAIAACXg");
	this.shape_14.setTransform(-20.3,38.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAsQgNgLABgOIAAAAIAaAAQABAIAFAEQAFAEAHAAQAIAAAEgDQAEgDAAgGQAAgFgFgDQgEgDgLgDQgSgEgKgFQgJgIAAgNQAAgNALgKQAMgJARAAQAUAAAMAJQAMAKgBAOIAAABIgbAAQAAgHgEgEQgEgEgIAAQgFAAgEAEQgEADAAAFQAAAFAEADQAEADALADQAUAEAJAFQAJAIAAANQAAAOgMAJQgMAJgUAAQgTAAgMgKg");
	this.shape_15.setTransform(-33.2,40.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNBMIAAhoIAbAAIAABogAgNg1IAAgWIAbAAIAAAWg");
	this.shape_16.setTransform(-41,38.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAoQgOgPAAgXIAAgCQAAgXANgPQANgPAUAAQAVAAAMANQAMAMAAAWIAAAOIg9AAIAAABQAAAKAHAHQAGAGAIAAQAKAAAGgCQAGgBAIgFIAIASQgHAFgKAEQgLADgNAAQgUAAgOgOgAgKgZQgEAGgBAKIAAAAIAhAAIAAgCQAAgKgEgFQgEgFgJAAQgGAAgFAGg");
	this.shape_17.setTransform(15.5,15.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcA1IAAhnIAbAAIABAPQACgIAGgFQAFgEAIAAIAEAAIAEABIgDAZIgLAAQgGAAgEACQgEADgBAFIAABFg");
	this.shape_18.setTransform(7.1,15.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIBJQgHgEgFgHIgCANIgYAAIAAiXIAcAAIAAA6QAFgGAGgDQAGgEAHAAQAUAAAKAPQALAQAAAXIAAACQAAAXgLAPQgKAOgUAAQgHAAgHgEgAgLgGQgEADgDADIAAAtQADAFAEACQAFADAGAAQAKAAAEgIQAFgIAAgOIAAgCQAAgQgFgHQgEgJgKAAQgGAAgFADg");
	this.shape_19.setTransform(-2.3,12.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNBMIAAhoIAbAAIAABogAgNg1IAAgWIAbAAIAAAWg");
	this.shape_20.setTransform(-10.9,12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSBNIAAhUIgQAAIAAgUIAQAAIAAgMQAAgRAKgKQAJgKASAAIAIABIAIABIgDAWIgEgBIgFAAQgHAAgEADQgDAEAAAHIAAAMIAVAAIAAAUIgVAAIAABUg");
	this.shape_21.setTransform(-16.9,12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjA/QgLgPAAgXIAAgCQAAgXALgQQAKgPAUAAQAGAAAGAEQAHADAEAGIAAg6IAdAAIAACXIgZAAIgCgNQgFAHgHAEQgGAEgHAAQgUAAgKgOgAgNAAQgFAIAAAPIAAACQAAAOAFAIQAFAIAIAAQAGAAAFgDQAEgCADgFIAAgtQgDgDgEgDQgFgDgGAAQgIAAgFAJg");
	this.shape_22.setTransform(42.3,-12.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARA1IAAhAQAAgLgFgEQgEgEgIAAQgEAAgEACQgFACgDAEIAABLIgcAAIAAhnIAaAAIACAPQAFgIAHgFQAGgEAJAAQAQAAAKAKQAIAKABAVIAABAg");
	this.shape_23.setTransform(31.2,-10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglAuQgJgJAAgPQAAgPAMgHQAMgIAWAAIAOAAIAAgJQAAgHgEgEQgEgFgGAAQgHAAgDAEQgEADAAAGIgcAAIAAgBQAAgNAMgKQAMgJASAAQATAAAMAJQAMAKAAASIAAApIABAOIADANIgcAAIgCgHIgCgJQgFAIgHAFQgFAFgKAAQgRAAgIgIgAgOALQgEAEAAAGQAAAGADADQAEADAGAAQAFAAAHgEQAFgDACgFIAAgPIgOAAQgJAAgFAFg");
	this.shape_24.setTransform(20.2,-10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIBJQgHgEgFgHIgCANIgYAAIAAiXIAcAAIAAA6QAFgGAGgDQAGgEAHAAQAUAAAKAPQALAQAAAXIAAACQAAAXgLAPQgKAOgUAAQgHAAgHgEgAgLgGQgEADgDADIAAAtQADAFAEACQAFADAGAAQAKAAAEgIQAFgIAAgOIAAgCQAAgQgFgHQgEgJgKAAQgGAAgFADg");
	this.shape_25.setTransform(9.4,-12.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjA/QgLgPAAgXIAAgCQAAgXALgQQAKgPAUAAQAGAAAGAEQAHADAEAGIAAg6IAdAAIAACXIgZAAIgCgNQgFAHgHAEQgGAEgHAAQgUAAgKgOgAgNAAQgFAIAAAPIAAACQAAAOAFAIQAFAIAIAAQAGAAAFgDQAEgCADgFIAAgtQgDgDgEgDQgFgDgGAAQgIAAgFAJg");
	this.shape_26.setTransform(-2.4,-12.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmAuQgJgJAAgPQAAgPAMgHQAMgIAXAAIAOAAIAAgJQAAgHgEgEQgEgFgGAAQgGAAgFAEQgDADAAAGIgbAAIAAgBQgCgNANgKQAMgJASAAQATAAAMAJQAMAKAAASIAAApIABAOIAEANIgdAAIgDgHIgCgJQgDAIgIAFQgFAFgKAAQgQAAgKgIgAgNALQgFAEAAAGQAAAGAEADQADADAGAAQAGAAAFgEQAGgDACgFIAAgPIgOAAQgJAAgEAFg");
	this.shape_27.setTransform(-13.2,-10.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjAnQgNgPAAgYIAAAAQAAgXAMgPQAOgPAWAAQAXAAANAPQAOAPAAAXIAAAAQAAAYgOAPQgNAPgXAAQgWAAgNgPgAgPgXQgFAJAAAOIAAAAQAAAPAFAJQAFAIAKAAQALAAAFgIQAEgJAAgPIAAAAQAAgOgEgJQgFgIgLAAQgKAAgFAIg");
	this.shape_28.setTransform(-24.2,-10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcA1IAAhnIAbAAIABAPQACgIAGgFQAFgEAIAAIAEAAIAEABIgDAZIgLAAQgGAAgEACQgEADgBAFIAABFg");
	this.shape_29.setTransform(-32.8,-10.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBJQgHgEgFgHIgCANIgYAAIAAiXIAcAAIAAA6QAFgGAGgDQAGgEAHAAQAUAAAKAPQALAQAAAXIAAACQAAAXgLAPQgKAOgUAAQgHAAgHgEgAgLgGQgEADgDADIAAAtQADAFAEACQAFADAGAAQAKAAAEgIQAFgIAAgOIAAgCQAAgQgFgHQgEgJgKAAQgGAAgFADg");
	this.shape_30.setTransform(-42.3,-12.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjA/QgLgPAAgXIAAgCQAAgXALgQQAKgPAUAAQAGAAAGAEQAHADAEAGIAAg6IAdAAIAACXIgZAAIgCgNQgFAHgHAEQgGAEgHAAQgUAAgKgOgAgNAAQgFAIAAAPIAAACQAAAOAFAIQAFAIAIAAQAGAAAFgDQAEgCADgFIAAgtQgDgDgEgDQgFgDgGAAQgIAAgFAJg");
	this.shape_31.setTransform(36.6,-37.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfAoQgOgPAAgXIAAgCQAAgXANgPQANgPAUAAQAVAAAMANQAMAMAAAWIAAAOIg9AAIAAABQAAAKAHAHQAGAGAIAAQAKAAAGgCQAGgBAIgFIAIASQgHAFgKAEQgLADgNAAQgUAAgOgOgAgKgZQgEAGgBAKIAAAAIAhAAIAAgCQAAgKgEgFQgEgFgJAAQgGAAgFAGg");
	this.shape_32.setTransform(26,-35.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcA1IAAhnIAbAAIABAPQACgIAGgFQAFgEAIAAIAEAAIAEABIgDAZIgLAAQgGAAgEACQgEADgBAFIAABFg");
	this.shape_33.setTransform(17.6,-35.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgkArQgIgLgBgXIAAg9IAcAAIAAA+QAAALAFAFQADAFAIAAQAFAAAFgCQAFgCADgEIAAhLIAcAAIAABnIgYAAIgDgPQgFAIgHAFQgGAEgJAAQgRAAgKgKg");
	this.shape_34.setTransform(8,-35.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjAnQgOgPAAgYIAAAAQABgXANgPQANgPAWAAQAWAAAOAPQANAPAAAXIAAAAQAAAYgNAPQgNAPgXAAQgWAAgNgPgAgPgXQgFAJAAAOIAAAAQAAAPAFAJQAFAIAKAAQAKAAAGgIQAEgJAAgPIAAAAQAAgOgEgJQgGgIgKAAQgKAAgFAIg");
	this.shape_35.setTransform(-3.3,-35.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMA0IgkhnIAeAAIARBAIABAKIAAAAIACgKIAShAIAdAAIgkBng");
	this.shape_36.setTransform(-14.1,-35.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgmAuQgIgJgBgPQAAgPANgHQALgIAXAAIAOAAIAAgJQAAgHgEgEQgEgFgGAAQgGAAgFAEQgDADAAAGIgbAAIAAgBQgBgNAMgKQAMgJASAAQATAAAMAJQAMAKAAASIAAApIABAOIADANIgcAAIgCgHIgDgJQgEAIgHAFQgFAFgKAAQgRAAgJgIgAgOALQgEAEAAAGQAAAGAEADQADADAGAAQAGAAAFgEQAGgDACgFIAAgPIgOAAQgJAAgFAFg");
	this.shape_37.setTransform(-24.6,-35.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgNBMIAAiXIAbAAIAACXg");
	this.shape_38.setTransform(-32.6,-37.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgSBNIAAhUIgQAAIAAgUIAQAAIAAgMQAAgRAKgKQAJgKASAAIAIABIAIABIgDAWIgEgBIgFAAQgHAAgEADQgDAEAAAHIAAAMIAVAAIAAAUIgVAAIAABUg");
	this.shape_39.setTransform(-38.7,-38);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AghBJIgHgCIADgUIADAAIADAAQAGAAAFgDQADgDACgGIAEgIIgmhoIAfAAIARA+IABAFIAAAAIAThDIAfAAIgrB4QgEALgGAIQgHAIgQgBIgHAAg");
	this.shape_40.setTransform(30.4,-58.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcA1IAAhnIAbAAIABAPQACgIAGgFQAFgEAIAAIAEAAIAEABIgDAZIgLAAQgGAAgEACQgEADgBAFIAABFg");
	this.shape_41.setTransform(22.3,-61);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHA6QgIgIAAgRIAAg0IgPAAIAAgUIAPAAIAAgaIAbAAIAAAaIARAAIAAAUIgRAAIAAAzQAAAHACACQADADAEAAIAEAAIAEgBIACAUIgIADIgJAAQgOAAgHgIg");
	this.shape_42.setTransform(14.5,-62.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARA1IAAhAQAAgLgEgEQgFgEgIAAQgEAAgFACQgEACgDAEIAABLIgdAAIAAhnIAbAAIABAPQAGgIAIgFQAFgEAKAAQAQAAAIAKQAJAKAAAVIAABAg");
	this.shape_43.setTransform(5.6,-61);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgjArQgJgLAAgXIAAg9IAcAAIAAA+QAAALADAFQAEAFAIAAQAFAAAFgCQAFgCADgEIAAhLIAdAAIAABnIgZAAIgCgPQgGAIgHAFQgGAEgJAAQgRAAgJgKg");
	this.shape_44.setTransform(-5.7,-60.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgjAnQgNgPAAgYIAAAAQAAgXAMgPQAOgPAWAAQAXAAANAPQAOAPAAAXIAAAAQAAAYgOAPQgNAPgXAAQgWAAgNgPgAgPgXQgFAJAAAOIAAAAQAAAPAFAJQAFAIAKAAQALAAAFgIQAEgJAAgPIAAAAQAAgOgEgJQgFgIgLAAQgKAAgFAIg");
	this.shape_45.setTransform(-17,-60.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgnA4QgQgQAAgaIAAgaQAAgaAQgRQAQgRAXAAQAaAAAPAOQAPANgBAYIAAAAIgcAAQAAgOgGgHQgHgIgOAAQgLAAgIALQgHAKAAAQIAAAbQAAAQAIAKQAIAKALAAQANABAHgIQAGgHAAgOIAcAAIAAABQAAAXgOANQgOANgaAAQgYAAgQgQg");
	this.shape_46.setTransform(-28.9,-62.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-78.5,100.5,157.1);


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logos();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-26.5,155,53);


(lib.Logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.asd();
	this.instance.parent = this;
	this.instance.setTransform(-61,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-21,122,42);


(lib.BGs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,3.9,1.365,1.365);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-11.8,127.1,23.9);


(lib.BootsFire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Boots();
	this.instance.parent = this;
	this.instance.setTransform(-79,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Fire.png
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14.5,59.5);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-134,140,267);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.loopsPlayed) {
		        this.loopsPlayed = 0;
		}
	}
	this.frame_313 = function() {
		this.loopsPlayed++; console.log(this.loopsPlayed);
		
		if (this.loopsPlayed >= 1) {
		        this.stop();    
		} else {
		        this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(313).call(this.frame_313).wait(1));

	// logo2
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(35.1,56.7,0.542,0.542,0,0,0,0.1,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-0.5,y:44.5,alpha:1},5).wait(183));

	// Subs3
	this.instance_1 = new lib.Subs3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-52.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(78).to({alpha:0},6).wait(85));

	// Subs2
	this.instance_2 = new lib.Subs2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-44.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(0.98)).wait(79));

	// Cta
	this.instance_3 = new lib.Cta();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66,111.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({y:105.3,alpha:1},7,cjs.Ease.get(1)).wait(114).to({scaleX:1.4,scaleY:1.4,x:0,y:85.9},4).wait(175));

	// Logo1
	this.instance_4 = new lib.Logo1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(66,77.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({y:71,alpha:1},7,cjs.Ease.get(1)).wait(110).to({scaleX:1.21,scaleY:1.21,x:53.1,y:66.6,alpha:0},5,cjs.Ease.get(0.96)).wait(185));

	// Subs 1
	this.instance_5 = new lib.Subs1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(66,-45.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-38.8,alpha:1},7,cjs.Ease.get(1)).wait(117).to({alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(185));

	// Boots Fire
	this.instance_6 = new lib.BootsFire();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-69,-270.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-66.8,y:78.2},53).to({y:58.2},12).to({y:78.2},8).wait(51).to({alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(185));

	// BGs
	this.instance_7 = new lib.BGs();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(314));

	// Layer 5
	this.instance_8 = new lib.Symbol12();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(314));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-404.9,300,529.9);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WTdMAAAgm5MAutAAAMAAAAm5g");
	this.shape.setTransform(150,124.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bThMAAAgnBMAu2AAAMAAAAnBg");
	mask.setTransform(150,125);

	// MainMC
	this.instance = new lib.Main();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,124.5,301,251);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;