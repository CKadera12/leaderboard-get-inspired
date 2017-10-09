(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[821,47,61,46],[734,0,103,40],[0,96,728,90],[839,0,70,45],[734,42,85,34],[0,0,732,94],[730,96,174,90]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.leaderboardcranberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardgetinspiredpie = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardgetinspiredtable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardgreenberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardgreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardtable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.recipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBDIgNgCIgFACIgDABIgDgBIgDgCQgEgDgEgLQgDgKAAgJQgBgFADgCQACgDAEAAQAFAAAGAKIAGAIQADAFAHADQAHADAGAAQAIAAAGgEQAEgEAAgIQAAgLgUgKIgIgEQgTgKgIgHQgHgIAAgNQAAgRAMgKQAMgLATAAIAHABIAJABIAHgCIADgBQAHAAAGAKQAGALAAALQAAAEgCADQgCACgEAAQgDAAgCgCQgEgCgDgHQgFgIgFgDQgFgDgIAAQgGAAgFAEQgEAEAAAHQAAAGAEAFQAFAEAPAIIACABQAjARABAVQAAASgOAMQgOAMgVAAg");
	this.shape.setTransform(40.7,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgTAdAAQAZAAAOAOQAPAOAAAYQAAAIgDADQgCACgKAAIgwAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgBAEAAIAbAAIAGgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgNgIgIQgJgJgLAAQgPAAgIAOQgHANAAATQAAATAKAPQAKAPAQAAQAJAAAHgCIANgHIAEgEQAHgFADAAQADAAACACQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAEgDAEQgDAFgGAEQgLAJgLAEQgKAEgMAAQgbAAgSgSg");
	this.shape_1.setTransform(28.4,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BYQgHgCAAgFQAAgFAGgCIAHgDQACgDABgKQABgKAAggIAAgVQABgjgCgKQgBgKgDgBIgGgDQgIgDAAgDQAAgEACgCQADgDAFgBIASgGQAJgDAFABQADAAABABQACACAAAFIAAAHIAAACIABABIAFgDIAFgFQAIgFAGgDQAIgDAIAAQAYAAAOASQAQARAAAcQAAAegRAUQgSAUgaAAQgKAAgEgDQgEgDgBgGQAAgCACgCQACgCAEAAIADAAIAFABQAOAAAIgMQAJgMAAgTQAAgWgKgOQgIgOgPAAQgNAAgIAIQgHAHgBAUIAABRIACAOQAAAFACACQABABAGABIAFACIADACIABAFQAAAEgHADQgJABgRAAQgUAAgGgCg");
	this.shape_2.setTransform(13.6,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBcQgGgCgBgFQABgFAGgCIADgBQADgCACgFQABgEABgKIgBgJIAAgKIAAgNQAAgVgBgFQgBgGgDgBIgFgDQgJgCABgEQgBgDADgDIAIgEIATgGIAOgDQADAAABADQACACAAAGIAAAIIgBAGIgBAgIAAAAIAAAgIABARQACAGACABIAFACQAGACAAAFQABAFgHADQgGABgRAAQgSAAgHgCgAgPhAQgFgFgBgGQAAgIAHgFQAGgFAIAAQAIAAAGAFQAFAEAAAHQAAAHgGAFQgGAFgJAAQgHAAgGgEg");
	this.shape_3.setTransform(2.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAxQgTgTAAgcQAAgdAUgUQATgTAdAAQAUAAAQALQAPALgBAPQAAAGgDAEQgFADgGAAQgHAAgEgDQgEgDgEgKQgEgKgGgDQgEgEgIAAQgOAAgJALQgIALAAAUQAAAWAMAPQAMAOARAAQAHAAAGgCQAGgBAFgEIAEgDQAHgGAEAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAADgCAFIgIAIQgKAJgKAEQgMAEgNAAQgaAAgSgSg");
	this.shape_4.setTransform(-7.5,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgTAdAAQAZAAAOAOQAPAOAAAYQAAAIgDADQgCACgKAAIgwAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgBAEAAIAbAAIAGgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgNgIgIQgJgJgLAAQgPAAgIAOQgHANAAATQAAATAKAPQAKAPAQAAQAJAAAHgCIANgHIAEgEQAHgFADAAQADAAACACQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAAEgDAEQgDAFgGAEQgLAJgLAEQgKAEgMAAQgbAAgSgSg");
	this.shape_5.setTransform(-21,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcBAQgNgpgJgIQgHgIgOAAQgKAAAAgIQAAgIAJAAQAUAAAKgIQAKgJAAgRQAAgRgKgJQgKgJgTAAQgKAAgFACQgDABgBAEIgBALIgCAaIAAA4IACAnQABAJACACIAGADQAHACAAAGQAAAGgGACQgIACgUAAQgVAAgGgCQgIgCAAgGQAAgFAIgDIAGgDQACgCACgQIABg3IgBgxQgBgSgCgDQgCgCgGgDQgHgCAAgFQAAgFAEgCQAEgCAIAAIAdAAIAagBIATgBQAcAAAQAMQAOANAAAWQAAARgKANQgKAMgSAFIAAABQAOADAJAIQAHAJAGAVIAEANQAFAUAIAAIADAAIAFgBQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAGgHAEQgIAEgLAAQgaAAgJgfg");
	this.shape_6.setTransform(-36.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.recipes, new cjs.Rectangle(-52,-17.3,104,34.7), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("MAKE DELICIOUS MEMORIES", "14px 'Rescue'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 185;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.makedeliciousmemories, new cjs.Rectangle(-94.2,-26.1,188.5,52.3), null);


(lib.leaderboardtable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardtable();
	this.instance.parent = this;
	this.instance.setTransform(-366,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardtable_1, new cjs.Rectangle(-366,-47,732,94), null);


(lib.holidaytips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAoQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIACgEIACgFIAIgNQADgHAAgDIgBgDIgEgCQgHgDgDgEQgEgFAAgGQAAgKAGgFQAFgGAIABQAIgBAFAIQAHAIAAALQgBAJgDAIQgEAKgIANIgGAKQgDAEgCAAIgGgBg");
	this.shape.setTransform(74.4,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBDIgNgCIgFACIgEABIgCgBIgDgCQgEgDgDgLQgFgKAAgJQABgFACgCQACgDADAAQAGAAAGAKIAGAIQADAFAHADQAHADAGAAQAJAAAEgEQAFgEABgIQgBgLgUgKIgIgEQgUgKgHgHQgHgIAAgNQAAgRAMgKQAMgLASAAIAIABIAJABIAHgCIADgBQAHAAAGAKQAGALAAALQAAAEgCADQgCACgDAAQgEAAgDgCQgCgCgFgHQgEgIgFgDQgGgDgGAAQgHAAgFAEQgEAEAAAHQAAAGAEAFQAFAEAPAIIACABQAkARAAAVQAAASgOAMQgOAMgUAAg");
	this.shape_1.setTransform(64.8,-13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BYQgGgCAAgGQgBgDAGgDIAHgDQACgDACgKQABgKAAggIAAgUQAAgjgCgLQgBgKgDgCIgGgCQgIgCAAgFQAAgDADgCQACgCAFgCIATgGQAIgCAEgBQAEAAACACQABADAAAEIAAAHIABACIAAABIAFgDIAFgFQAIgGAHgCQAHgDAHAAQAZAAAPARQAPASAAAcQAAAegRAUQgRAUgaAAQgMAAgDgDQgFgDABgFQAAgDACgDQABgCAEAAIADABIAEAAQAPAAAJgLQAIgMAAgUQAAgVgJgOQgKgNgOAAQgNAAgHAHQgJAIABATIAABSIAAAMQABAGABABQACACAGABIAFACIADADIABADQAAAFgIACQgHACgTAAQgTAAgGgCg");
	this.shape_2.setTransform(51.3,-11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBcQgHgCABgFQgBgFAHgCIADgBQAEgCABgFQABgEAAgKIAAgJIAAgKIAAgNQAAgVgBgFQgBgGgCgBIgHgDQgHgCgBgEQABgDACgDIAIgEIAUgGIAMgDQAEAAACADQABACAAAGIAAAIIAAAGIgBAgIAAAAIgBAgIABARQABAGADABIAFACQAHACgBAFQAAAFgFADQgHABgRAAQgTAAgGgCgAgPhAQgGgFAAgGQABgIAFgFQAHgFAIAAQAIAAAFAFQAGAEAAAHQAAAHgGAFQgGAFgIAAQgJAAgFgEg");
	this.shape_3.setTransform(40.4,-16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBcQgIgCAAgGQAAgFAHgCQAHgEABgCQACgBABgWIABg8IgBgiIgBgVQAAgEgDgBIgHgBIgGAAQgJAAgFACQgEADgEAEIgEAJIgEAJIgEAEQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgEAAgCgEQgCgDAAgIQAAgRAEgLQAEgKAGAAIACAAQAKACAQAAIBLAAQAQAAAKgCIABAAQAHAAAEAKQAEALAAARQAAAHgCAEQgCADgEABIgEgCIgEgEIgEgJIgEgJQgEgEgFgDQgFgCgJAAIgFAAIgHABQgDACAAAEIgBAUIgBAiIABA8QABAWABABQACACAHAEQAHACAAAFQAAAGgIACQgHACgUAAQgTAAgHgCg");
	this.shape_4.setTransform(28.4,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BVQgGgFAAgIQAAgHAFgEQAEgFAGAAIAGABIAEADIAEAFQADAFACAAQAHAAAHgKQAHgJgBgKQAAgLgJgVIgBgDIgVgsIgLgaQgCgEgIgDIAAgBIgGgDQgCgCAAgDQAAgFAHgDQAHgCASAAQAUAAAGACQAGACAAAGIAAAEIgDACIgFACQgEACgBACIADAKIALAaIAJAYQAEAGACAAQABAAACgGIAJgUIAJgaQADgJAAgDQAAgEgGgEQgIgEAAgDQAAgFAGgCQAGgCAPAAQAPAAAFACQAGACAAAGQAAAEgHACIgGACQgHAEgIAWIgEAKIgRApQgVA1gNAQQgNARgTAAQgJAAgHgGg");
	this.shape_5.setTransform(6.5,-10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXA9IgHgHIgGACQgPAMgQAAQgTAAgLgMQgMgKAAgTQAAgUAPgKQAPgMAbAAQAGAAADACQADACAAAEQAAAHgIAAQgNAAgHAHQgIAFAAAMQAAAKAHAGQAGAHAMgBQALAAAGgFQAFgGAAgNIAAgxQAAgLgFgGQgFgHgIAAQgGABgGADQgFACgFAGIgDADQgIALgJgBQgFABgDgEQgDgDAAgGQAAgMAPgIQAPgIAYAAQANAAALADQAKAEAGAHQADAFACAIQACAIAAATIAAAoIABALQABADADABIAEABQAIADAAAEQAAAHgJAEQgJAFgLABQgGgBgGgGg");
	this.shape_6.setTransform(-6.8,-13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4BOQgPgRAAgcQAAggASgSQARgUAcAAIAJABQADABACADQACADABADQgBAHgIAAIgDAAIgDgBQgOAAgKAMQgIALAAAUQAAAWAJAOQAKANAOAAQANAAAHgHQAIgIAAgOIAAgkIAAg6QAAgJgCgEQgCgDgEgCIgDgBQgJgCAAgFQAAgDADgDQAEgCAKgEIAOgEIAMgCQAFAAABADQACACAAAGIAAAHIgCBPIACA2QABAMACACIAJADQAGABAAAFQAAAGgSAGIgOADIgKABQgDAAgCgCQgBgCAAgEIAAgGIgBgDIAAgBIgEADIgGAEQgHAGgHADQgIADgHAAQgZAAgPgSg");
	this.shape_7.setTransform(-21,-16.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBcQgGgCgBgFQABgFAGgCIADgBQADgCACgFQABgEAAgKIAAgJIAAgKIAAgNQAAgVgBgFQgBgGgDgBIgFgDQgJgCABgEQgBgDADgDIAIgEIATgGIAOgDQACAAACADQACACAAAGIAAAIIgBAGIgBAgIAAAAIAAAgIABARQABAGADABIAFACQAGACAAAFQABAFgHADQgGABgRAAQgSAAgHgCgAgPhAQgFgFgBgGQAAgIAHgFQAGgFAIAAQAIAAAFAFQAGAEAAAHQAAAHgGAFQgGAFgJAAQgHAAgGgEg");
	this.shape_8.setTransform(-32.8,-16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVBdQgGgCAAgGQAAgEAFgCIAGgEQADgCABgIIABgZIgBgUIAAgYIAAgKQAAgggBgKQgBgJgDgCIgIgDQgIgCAAgEQAAgEADgCQACgCAKgDIARgFIAMgCQAEAAACADQABACAAAGIAAAKQgBAuAAAuIAAAsQABAJACADIAIAEQAGACAAAFQAAAFgHACQgGACgRAAQgTAAgGgCg");
	this.shape_9.setTransform(-40.2,-16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguAwQgSgTAAgdQAAgcATgTQATgTAcAAQAcAAASASQARASAAAcQABAdgUAUQgTAUgbAAQgbAAgTgTgAgYgmQgIALAAARQAAAZAMARQAKARAPAAQAMAAAJgKQAHgLAAgSQAAgYgLgRQgLgRgOAAQgNAAgIAKg");
	this.shape_10.setTransform(-50.9,-13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdBbQgIgCAAgGQABgFAHgDIAGgDQACgBABgJIABgeIAAgSIgBgFQgBgCgHgCQgGgBgYAAIgbABQgHABgCABIgBAFIgBAJIAAALIABAeQAAAJADABIAGADQAHADABAFQgBAGgGACQgIACgUAAQgVAAgGgCQgIgCAAgGQAAgFAIgDIAGgDQACgCACgRIABg2IgBgwQgCgTgBgCQgBgDgHgCQgHgDAAgFQAAgGAGgBQAGgCAXAAQAXAAAFACQAGABABAGQgBAFgHADIgGADQgDACAAAHIgBAnQAAAFAEABQAGADASAAIAKAAIAbgBQAIgBACgCIACgDIAAgFIAAgFIgBggQgBgHgCgBIgGgDQgHgDgBgFQAAgGAHgBQAGgCAWAAQAXAAAHABQAFACAAAGQAAAFgIADIgGADQgDACgBASQgBARAAAiIABAyQABATACACQABACAHAEQAHACAAAFQAAAGgHACQgIACgUAAQgUAAgHgCg");
	this.shape_11.setTransform(-67.9,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaytips, new cjs.Rectangle(-80.7,-33.7,161.5,34.7), null);


(lib.getinspiredturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardturkey();
	this.instance.parent = this;
	this.instance.setTransform(-87,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredturkey, new cjs.Rectangle(-87,-45,174,90), null);


(lib.getinspiredtable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardgetinspiredtable();
	this.instance.parent = this;
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredtable, new cjs.Rectangle(-364,-45,728,90), null);


(lib.getinspiredpie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardgetinspiredpie();
	this.instance.parent = this;
	this.instance.setTransform(-51.5,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredpie, new cjs.Rectangle(-51.5,-20,103,40), null);


(lib.getinspiredgreens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardgreens();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredgreens, new cjs.Rectangle(-42.5,-17,85,34), null);


(lib.getinspiredgreenberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardgreenberries();
	this.instance.parent = this;
	this.instance.setTransform(-35,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredgreenberries, new cjs.Rectangle(-35,-22.5,70,45), null);


(lib.getinspiredcranberries = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardcranberries();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredcranberries, new cjs.Rectangle(-30.5,-23,61,46), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AgkAqIAAhTIAcAAQAIAAAIACQAIADAGAFQAHAFAEAHQACAEABAFIABAKIgBAKQgBAFgCAEIgFAHIgGAGQgGAGgIACQgKACgGAAgAgZAgIAPAAQAIAAAFgCQAHgDAFgDQAFgEACgGIACgHIABgHIgBgHIgCgGQgCgGgFgEQgFgEgHgCQgFgCgIAAIgPAAg");
	this.shape.setTransform(35.5,-46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgbAqIAAhTIA1AAIAAAKIgpAAIAAAaIAnAAIAAAJIgnAAIAAAcIArAAIAAAKg");
	this.shape_1.setTransform(27.4,-46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAbAAQAFAAAFABQAGABAEADQAEADADAEQACAFAAAGQAAAJgGAGIgGAEIgJADIAYAmgAgSgEIAOAAIAHgBQAEgBACgCIAFgDQABgDAAgEQAAgEgBgDIgFgEIgGgBIgGgBIgPAAg");
	this.shape_2.setTransform(20.2,-46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_3.setTransform(14.5,-46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgbAqIAAhTIAZAAQAHAAAFABQAGABAEADQAEADACAEQACAFAAAGQAAAHgCAEQgDAEgDADQgFACgFACIgMABIgNAAIAAAlgAgPgEIAMAAIAHAAIAHgDQACgBABgDQACgDAAgEQAAgEgCgCQgBgDgCgCIgHgBIgHgBIgMAAg");
	this.shape_4.setTransform(9.7,-46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgPAqQgIgEgFgFIAJgJQADAFAFADQAGACAFAAIAFgBQADAAADgCIAEgFQABgCAAgEQAAgEgBgCIgFgFIgGgDIgHgCIgIgEQgEAAgDgDQgDgDgCgEQgCgEAAgGQAAgGADgEQACgFAFgDQAEgDAFgBIAJgCIAIABIAGACQAHADAEAEIgJAIQgCgDgFgCQgEgCgFgBIgFABIgFADIgEAEQgCACAAAEQAAAEACACQABACACACIAGACIAGADIAIADQAFACADABQAEADACAEQADAFAAAGQAAAGgDAGQgCAEgEAEQgFACgFACIgKABQgIAAgHgCg");
	this.shape_5.setTransform(2.3,-46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AAVAqIgshEIAAAAIAABEIgMAAIAAhTIAPAAIAsBCIAAAAIAAhCIAMAAIAABTg");
	this.shape_6.setTransform(-5.6,-46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_7.setTransform(-11.9,-46.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63900").s().p("AgFAqIAAhJIgbAAIAAgKIBBAAIAAAKIgbAAIAABJg");
	this.shape_8.setTransform(-19.9,-46.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63900").s().p("AgbAqIAAhTIA1AAIAAAKIgpAAIAAAaIAnAAIAAAJIgnAAIAAAcIArAAIAAAKg");
	this.shape_9.setTransform(-26.6,-46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63900").s().p("AgLAqQgIgEgGgGQgGgGgDgIQgEgJAAgJQAAgJAEgJQADgHAGgGIAHgGIAHgDQAJgEAIAAIAKABIAJADQAIACAFAGIgIAIQgEgEgGgCIgGgCIgHgBQgHAAgGADQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAFAGADQAGACAHAAIALgBIAJgDIAAgYIgTAAIAAgJIAfAAIAAAoQgHAEgIABIgRACQgJAAgJgCg");
	this.shape_10.setTransform(-35.3,-46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-52,-56,104,18.8), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AizEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAKAAAEgLQADgJAAgZIAAl7QAAgZgDgIQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QAEAQgGAJQgFAJgMAAQgOAAgHgOIgJgSQgGgPgPgFQgMgEggAAIhQAAQghAAgJAIQgIAJAAAiIAABlQAAAZAIAFQAFAEAdAAIAnAAQAaAAAIgEQAHgDACgNIABgFQADgVAUAAQANAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgNAAQgTAAgEgWIgBgGQgCgNgHgDQgIgEgbAAIgmAAQgdAAgFAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAQAGAhAAIBVgBQAvAAAPgfIAHgQQAJgQAOAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(21.9,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,43.9,56.7), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNBlQgFgDAAgHIAAiTQAAgLgLABIgyAAQgLgBAAgOQAAgUAKgBICfAAQAMABAAARQAAARgLABIgyAAQgLAAAAAKIAACTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape.setTransform(9.1,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,18.2,20.5), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAEQACAEAAAJQAAASgMAAIh5AAQgIAAAAAKIAAAcQAAAIAKABIBFAAQALgBAAATQAAAQgKAAIhFAAQgFAAgDADQgDADAAAFIAAAeQAAAKAKAAIB3AAQALAAAAASQAAASgLAAg");
	this.shape.setTransform(9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,18,20.4), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ah+EYQgKgJgIgYIhIjYQgCgFgEAAQgEAAgCAFIhNDYIgJAWQgDAGgFAFQgMAJgRAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgKQAAgWAdAAICvAAQAcAAAAAWQAAALgHAFQgHAFgRABQgOACgGAFQgGAFAAAKQAAAKADAJIBzFGQACAFAFAAQAEAAACgGIA/i2QAIgagHgWIgehbIgHgTQgEgJgHgFQgGgEgPgEQgNgDgGgFQgFgFAAgKQAAgZAeAAICmAAQAdAAAAAWQAAAUgcADQgQACgGAFQgGAFAAALQAAALAIAZIBgEsQACAGAEgBQAEAAABgGIBek6QADgMAAgIQAAgSgdgEQgbgCAAgWQAAgMAIgGQAHgFARAAIElAAQAVAAAJAFQAIAFAAAOQAAAKgGAHQgGAHgJAAIgRAAQgLAAgFALQgCAKAAAXIAABuQAAAdAFAHQAGAGAYAAIBzAAQAXAAAHgIQADgDAAgHIABgeIAAhoQAAgbgCgGQgCgFgFgDQgEgDgFAAIgQAAQgKAAgGgHQgHgHAAgKQAAgOAJgFQAIgFAWAAICaAAQAWAAAJAFQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBAEQgDAHAAAaIAAF8QAAAaADAIQABAFAFADQAEACAEAAIASAAQAJAAAGAHQAHAHAAAKQAAAOgJAFQgIAGgXAAIiaAAQgVAAgJgGQgIgFAAgOQAAgJAGgIQAHgHAJAAIAQAAQALAAAFgKQACgHAAgbIAAh8IgBgdQAAgHgDgEQgGgHgYAAIhzAAQgYAAgGAGQgFAHAAAdIAACBQAAAXACALQAEAKAMAAIARAAQAIAAAGAIQAGAHAAAKQAAANgIAGQgIAFgVAAIiaAAQgWAAgIgGQgJgFAAgOQAAgJAGgIQAHgHAJAAIARAAQAEAAAFgCQAEgDABgFQADgHAAgbIAAl8QAAgxgjAFQgMABgHAJQgIAJgGAWIiHGzQgJAfgKALQgKALgUAAQgTAAgLgJg");
	this.shape.setTransform(63.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,127,57.9), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhTEbIgTgEQgIAAgKAJQgKAHgJABQgLAAgGgHQgGgGgEgPIgVhWQgCgFAAgMQAAgKAIgJQAHgHAMAAQANAAAIAMIAMAQQAWAgAiASQAiARAkABQAogBAagUQAZgVAAgjQAAgggbgfQgZgbhAguQg/grgPgMQgSgOgTgWQggglAAg0QAAg+ArglQArglBGgBQAnABAhAHIAWAFIALACQAIAAAMgHQAJgIAJAAQASAAAGAYIAUBcQACAEAAAHQAAAKgHAFQgHAGgLAAQgMAAgKgOQgOgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAPAAAaQAAAXAJANQANASAaAUIApAfQAzAjAWARQAXATAUATQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgxAAgngNg");
	this.shape.setTransform(19,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.1,59.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABaBkQgGgCAAgFIgOhsQgCgGgFAAQgDAAgDAEIgxA+QgEAFgFAAQgGAAgFgGIgtg8QgCgDgEAAQgFAAgBAIIgOBnQgCALgTAAQgGAAgFgDQgGgCAAgGIAViwQACgKADgDQAEgEALAAQAKAAAFAJIA4BOQAGAJADgBQAFAAAGgIIA7hQQAFgIAKAAQAHAAADADQAEACACAJIAUC0QABALgXAAQgFAAgEgDg");
	this.shape.setTransform(12.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,24.3,20.6), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AA6BlQgFgBgEgFIhAhFQgKgJgUAAQgFAAgEAEQgDAFAAAGIAAA7QAAAIgGACQgFACgKAAQgRAAAAgMIAAi0QAAgIAFgCQAFgDAKAAQASAAAAAMIAAA3QAAANAJAAQALAAAGgCQADgCAFgEIBJhDQAMgLANALQAMAMgKAJIhAA7QgJAHAJAKIBOBVQAIAJgGAFQgEAEgOAAQgMAAgFgCg");
	this.shape.setTransform(9.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,19.1,20.7), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Path_3, null, null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ai5EbQgWAAgIgFQgJgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAFgLQACgKAAgXIAAl7QAAgYgDgJQgBgFgFgEQgEgEgEAAIgRAAQgIAAgHgHQgHgHAAgJQAAgOAJgGQAJgFAVAAIFvAAQAZAAAFAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOIgIgSQgGgPgPgFQgMgEggAAIhtAAQgiAAgIAIQgJAJAAAiIAABlQAAAZAIAFQAEAEAeAAIBGAAQAaAAAIgEQAHgDACgNIABgFQADgVATAAQAOAAAFAIQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgSAAgEgWIgBgGQgCgNgHgDQgIgDgbAAIhFAAQgdAAgFADQgIAFAAAaIAACKQAAAbACAGQADAFAFADQAFADAFAAIAUAAQAJAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape.setTransform(22.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,45.1,56.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgSQAngUAmgNQAJgEgCgJQgCgKgNADQgVAEgZAAQgggBgYgJQgXgJgcgSQgggUgKgEQgugWg6AZQgWAJgLgLQgMgLAGgXQAXhVBDg4QBKg9BQAXQA0APAlA0QAnA2AeALQATAGAAAPQAAAOgRADQgbAFgjgQQgfgPgegbQgfgdgvgCQgrgCgcAVQgLAJADAGQAEAHALgCQAfgHAdAGQAoAHAbAgQAkAoAuAPQA4ASAugeIAZgXQAOgMALADQAQAEgCAUQgBAUgTAZQgiAsg9AeQhFAjgeAeQgwAvgTA9QgQAzAABRQAABxArBAQAqBBBKAAQBJAAArhCQAqhCAAhwQAAhfgXg4QgZg6g2gUQgbgLAFgTQAFgUAigDQA2gHA8AtQBoBMAACkQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape.setTransform(33.5,46.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,67.1,93.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgGQAGgHAJAAIARAAQAEAAAEgDQAFgEABgEQADgJAAgXIAAl+QAAgYgDgKQgBgEgFgEQgEgDgEAAIgRAAQgKAAgGgGQgHgHAAgKQAAgOAJgGQAJgFAWAAICdAAQAWAAAIAFQAJAGAAAOQAAAKgGAHQgHAGgJAAIgRAAQgOAAgEALQgDAGAAAcIAAFjQAAAcACAKQACAJAIAFQAGAEALACQAMABAaAAIAvAAQAwAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgEAQIgNBCQgFAVgZAAg");
	this.shape.setTransform(20.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,40.4,56.7), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjmEaQgWgDgGgEQgKgFAAgNQAAgKAGgHQAFgHAKAAIARAAQAKAAAEgLQADgJAAgYIAAl5QAAgZgDgIQgEgMgKAAIgRAAQgKAAgFgGQgGgIAAgJQAAgNAKgFQAGgEAWgDQBdgNBrAAQBOAAA1ASQA0ASAnAoQAmAlATA4QAUA5AABEQAABNgZA9QgZA+gwAlQgkAegxAOQgxAOhDAAQh0AAhUgNgAgvjrQgdAEgIAMQgLAMABAhIAAFjQgBAgAVAMQANAHAnACQBNAFArhAQAsg/gBhxQAAhvgqg/Qgqg+hMAAIgcACg");
	this.shape.setTransform(26.9,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,53.8,59), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAJgKAAgQQAAgOgJgKQgKgKgPAAQgOAAgKAKg");
	this.shape.setTransform(4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,8.8,8.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAvBeIgggxQgGgJgJAAIguAAQgEAAgDADQgDADAAAEIAAAxQAAAGgKABIgPABQgNAAAAgMIABi5QAAgIAIAAIBrAAQAgAAAUATQAVATgBAfQABAYgPAPIgWATQgIAGAEAGIAiAzQAFAHgFAEQgFAEgOAAQgRAAgFgJgAg4g4IAAAuQAAAFAEAEQAEABAFAAIA+AAQAQAAALgHQAMgJAAgRQAAgPgMgKQgLgIgQAAIg+AAQgNAAAAAKg");
	this.shape.setTransform(9.5,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,18.9,20.6), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAJAaIgNgVIgGAAIAAAVIgJAAIAAgzIATAAQARAAAAAQQABAMgNACIAOAVgAgKgCIAHAAQAMAAAAgHQAAgIgKAAIgJAAg");
	this.shape.setTransform(2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,3.9,5.2), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABnDxQhFg1gYhfIgBgDQgCgKgHgBQgGABgCAKIgBACQgYBfhHA2QhHA2hoAAQh/AAhLhQQhMhQAAiGQAAiGBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQADALAFgBQAHAAADgLIAAAAQAXhgBGg1QBHg3BoAAQB/AABMBPQBNBQAACFQAACIhNBQQhMBRiBAAQhmAAhHg2gACmiqQgoA/AABuQAABsAoA9QApA+BIAAQBGAAAog/QApg/ABhrQAAhrgqhAQgqg/hGAAQhGAAgpA/gAmFiqQgpA/AABuQAABsApA9QAoA+BIAAQBGAAApg/QApg/AAhrQAAhrgqhAQgpg/hGAAQhGAAgpA/g");
	this.shape.setTransform(55.8,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,111.5,59), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABCBfIgNgbQgEgGgGAAIhTAAQgJAAgEAMIgMAVQgDAIgSAAQgWAAAFgMIBZi4QAFgKAKAAQALABAFAIIBYC7QACAGgJADQgGABgIAAQgPABgDgJgAgEgdIgYAyQgCADACACQABADAEAAIAwAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQACgCgCgDIgYgzQgCgEgDABQgDAAgCADg");
	this.shape.setTransform(10.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,21,20.7), null);


(lib.ctarectanglewhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApWCLIAAkVIStAAIAAEVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectanglewhite, new cjs.Rectangle(-59.8,-13.8,119.8,27.8), null);


(lib.andmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpAxQgTgTAAgcQAAgdATgUQATgTAdAAQAZAAAOAOQAPAOAAAYQAAAIgDADQgCACgKAAIgwAAQgFAAgCgCQgCgCAAgDQAAgEACgCQACgBAEAAIAbAAIAGgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgNgIgIQgJgJgLAAQgPAAgIAOQgHANAAATQAAATAKAPQAKAPAQAAQAJAAAHgCIANgHIAEgEQAHgFADAAQADAAACACQABABAAAAQAAAAAAABQABAAAAABQAAABAAAAQAAAEgDAEQgDAFgGAEQgLAJgLAEQgKAEgMAAQgbAAgSgSg");
	this.shape.setTransform(49.6,-13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmBAQgHgCABgFQgBgFAHgDIADAAQAEgCAAgFQACgFAAgJIAAgJIAAgKIAAgHQAAgYgBgHQgBgHgDgCIgGgCQgIgCABgFQAAgDACgCIAIgFIARgFIAMgDQAGAAACASIAAACIAAABQAHgKAIgFQAGgGAIAAQAJAAAFAGQAGAEgBAKQAAAJgDAFQgEAFgIAAIgGgBIgGgEIgDgFQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQgKAAgDANQgDAMAAAmQAAAMABAFQACAGADACIAFABQAIADAAAFQAAAFgIACQgGACgSAAQgTAAgGgCg");
	this.shape_1.setTransform(38.2,-13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAwQgSgTAAgdQAAgcATgTQATgTAcAAQAcAAASASQARASAAAcQABAdgUAUQgSAUgcAAQgbAAgTgTgAgYgmQgIALAAARQAAAZAMARQAKARAPAAQAMAAAJgKQAHgLAAgSQAAgYgKgRQgMgRgOAAQgNAAgIAKg");
	this.shape_2.setTransform(25.7,-13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwBbQgHgCAAgGQAAgFAIgDIAGgDQACgCABgFIABgYIAAgGIAAg3IgBggIgQAqQgmBjgIAAQgEAAgHgNQgIgOgSgqIgchBIgBAzIgBAiIABAZQABAFACACIAGADQAIADAAAFQAAAGgHACQgHACgPAAQgOAAgHgCQgGgCAAgGQAAgEAHgEQAHgDABgDQABgGACghQACghAAgoIAAgFQAAgNgBgFQgBgEgDgCIgGgDQgIgDAAgFQAAgGAGgBQAFgCATAAIASAAIAGABQACACAJAXIAHASIAEAJQAfBOACAAQADAAAMgcQALgbAQgtIADgIQAEgPAEgEQADgCAFgBIARgBQASAAAFACQAGABAAAGQAAAFgHADIgEABQgEADgBAEQgBAFAAAVIABBIQABAhACAFQAAADAGADIADABIAFACQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAGgHACQgHACgVAAQgUAAgHgCg");
	this.shape_3.setTransform(6.8,-16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BOQgQgRAAgcQAAggARgSQASgUAbAAIAJABQAEABADADQABADAAADQABAHgJAAIgDAAIgEgBQgOAAgIAMQgJALAAAUQAAAWAKAOQAJANAPAAQAMAAAIgHQAHgIAAgOIAAgkIAAg6QAAgJgBgEQgDgDgEgCIgEgBQgHgCAAgFQAAgDADgDQADgCAJgEIAPgEIAMgCQAEAAACADQACACAAAGIAAAHIgCBPIABA2QABAMACACIAJADQAHABAAAFQAAAGgTAGIgMADIgKABQgEAAgCgCQgBgCAAgEIAAgGIAAgDIgBgBIgEADIgFAEQgJAGgGADQgHADgJAAQgYAAgOgSg");
	this.shape_4.setTransform(-19.2,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBAQgGgCAAgFQAAgFAGgCIAFgCQADgCABgGQACgFAAgOQAAgogGgLQgFgKgOAAQgFAAgHAEQgGAEgDAHQgDAGgBAJIgBAjQAAANABAEQABAEACACIAFACQAHACAAAFQAAAFgGADQgHABgRAAQgTAAgHgCQgGgCAAgFQAAgFAGgDIADAAQAEgCABgFQACgFAAgJIgBgJIAAgKIAAgNQAAgUgBgGQgBgHgCgBIgGgCQgIgCAAgFQAAgDACgCIAIgFIATgGIANgCQAEAAABACQACACAAAEIAAAJIAAABIABABIABgBIAAAAIADgCIADgDQAOgNAPAAQAKAAAIAEQAJAEAGAHQAGAHACAKQADAKAAAUIAAARIAAAIIAAAIIABAMQABAFADACIAEAAQAGADAAAFQAAAFgGACQgGACgUAAQgSAAgGgCg");
	this.shape_5.setTransform(-35,-13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXA9IgHgHIgGACQgPAMgQAAQgTAAgLgMQgMgKAAgTQAAgUAPgKQAPgMAbAAQAGAAADACQADACAAAEQAAAHgIAAQgNAAgHAHQgIAFAAAMQAAAKAHAGQAGAHAMgBQALAAAGgFQAFgGAAgNIAAgxQAAgLgFgGQgFgHgIAAQgGABgGADQgFACgFAGIgDADQgIALgJgBQgFABgDgEQgDgDAAgGQAAgMAPgIQAPgIAYAAQANAAALADQAKAEAGAHQADAFACAIQACAIAAATIAAAoIABALQABADADABIAEABQAIADAAAEQAAAHgJAEQgJAFgLABQgGgBgGgGg");
	this.shape_6.setTransform(-49.4,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andmore, new cjs.Rectangle(-58.5,-33.7,117,34.7), null);


(lib.whitelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgLQAKgJAOgBQAPABAKAJQAKALAAAOQAAAPgKAKQgKALgPgBQgOABgKgLgAAWAZIgPgVQANgCAAgMQAAgQgRAAIgTAAIAAAzIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(130.4,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgEAAgFIAAgtQAAgKANAAIA+AAQAQAAALAJQALAJAAAPQAAAQgLAJQgLAJgQAAg");
	this.shape_2.setTransform(-11.1,85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(130.6,58);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hGAAQhGAAgpg9g");
	this.shape_4.setTransform(-48.8,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgDAAgCgCQgBgDABgDIAZgxQACgEACAAQADAAACADIAZAzQABADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-44.3,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDsQgmgCgOgHQgVgMAAggIAAljQAAghAKgMQAKgMAcgEIAdgDQBKAAArA/QAqA+AABvQAABxgqBAQgqA8hFAAIgKgBg");
	this.shape_6.setTransform(64.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCtQgog/AAhrQAAhuAog/QApg/BGAAQBFAAAqBAQApA+AABsQAABrgpA/QgpA/hFAAQhHAAgpg9g");
	this.shape_7.setTransform(6.9,30.2);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(69.3,-37.3,1,1,0,0,0,20.2,28.3);
	this.instance.alpha = 0.789;

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,-54.3,1,1,0,0,0,33.5,46.6);
	this.instance_1.alpha = 0.789;

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98.3,30.1,1,1,0,0,0,22.6,28.3);
	this.instance_2.alpha = 0.789;

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-56.6,165.6);
	this.instance_3.alpha = 0.789;

	this.instance_4 = new lib.CompoundPath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-44.3,88.2,1,1,0,0,0,10.5,10.3);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(22.7,88.2,1,1,0,0,0,9.6,10.3);
	this.instance_5.alpha = 0.789;

	this.instance_6 = new lib.Path_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-78.1,88.3,1,1,0,0,0,12.2,10.3);
	this.instance_6.alpha = 0.789;

	this.instance_7 = new lib.Path_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.1,30.3,1,1,0,0,0,19,29.6);
	this.instance_7.alpha = 0.789;

	this.instance_8 = new lib.CompoundPath_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-20.9,30.2,1,1,0,0,0,55.8,29.5);
	this.instance_8.alpha = 0.789;

	this.instance_9 = new lib.CompoundPath_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(130.6,59.1,1,1,0,0,0,1.9,2.6);
	this.instance_9.alpha = 0.789;

	this.instance_10 = new lib.Path_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-74.6,-36.8,1,1,0,0,0,63.5,28.9);
	this.instance_10.alpha = 0.789;

	this.instance_11 = new lib.CompoundPath_3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-11,88.3,1,1,0,0,0,9.5,10.3);
	this.instance_11.alpha = 0.789;

	this.instance_12 = new lib.Path_8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(52.4,88.3,1,1,0,0,0,9,10.2);
	this.instance_12.alpha = 0.789;

	this.instance_13 = new lib.Path_9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(81.3,88.3,1,1,0,0,0,9.1,10.2);
	this.instance_13.alpha = 0.789;

	this.instance_14 = new lib.CompoundPath_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(130.4,59.1,1,1,0,0,0,4.4,4.4);
	this.instance_14.alpha = 0.789;

	this.instance_15 = new lib.CompoundPath_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(62.2,30.2,1,1,0,0,0,26.9,29.5);
	this.instance_15.alpha = 0.789;

	this.instance_16 = new lib.Path_10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(114.4,-37.3,1,1,0,0,0,21.9,28.3);
	this.instance_16.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitelogo, new cjs.Rectangle(-175,-175,350,350), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.holidaytips();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-80.7,-33.7,161.5,34.7), null);


// stage content:
(lib.leaderboardbroketextgetinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_220 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(169).call(this.frame_220).wait(5));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5TEOIAAobMA1vAAAIAAIbg");
	mask.setTransform(182,18);

	// make-delicious-memories
	this.instance = new lib.makedeliciousmemories();
	this.instance.parent = this;
	this.instance.setTransform(112.8,31.7);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({x:-97.2},0).to({x:122.8,alpha:1},10,cjs.Ease.get(1)).to({x:112.8},8,cjs.Ease.get(1)).wait(163));

	// holiday tips,
	this.instance_1 = new lib.ctarectangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97.3,52.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({alpha:1},10).wait(153));

	// recipes
	this.instance_2 = new lib.recipes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(228.6,36.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({alpha:1},10).wait(143));

	// and more
	this.instance_3 = new lib.andmore();
	this.instance_3.parent = this;
	this.instance_3.setTransform(338.1,52.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({alpha:1},10).wait(133));

	// white-logo
	this.instance_4 = new lib.whitelogo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(663.5,48.5,0.234,0.234);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({scaleX:0.02,scaleY:0.02,x:660.8,y:44.6},0).to({regX:0.1,regY:0.1,scaleX:0.36,scaleY:0.36,alpha:1},6,cjs.Ease.get(1)).to({regY:0,scaleX:0.33,scaleY:0.33},7,cjs.Ease.get(1)).wait(203));

	// green-berries
	this.instance_5 = new lib.getinspiredgreenberries();
	this.instance_5.parent = this;
	this.instance_5.setTransform(615,22.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({alpha:1},10).wait(181));

	// turkey
	this.instance_6 = new lib.getinspiredturkey();
	this.instance_6.parent = this;
	this.instance_6.setTransform(507,45);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({alpha:1},10).wait(186));

	// pie
	this.instance_7 = new lib.getinspiredpie();
	this.instance_7.parent = this;
	this.instance_7.setTransform(394.5,20);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({alpha:1},10).wait(196));

	// cranberries
	this.instance_8 = new lib.getinspiredcranberries();
	this.instance_8.parent = this;
	this.instance_8.setTransform(390.5,67);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({alpha:1},10).wait(201));

	// greens
	this.instance_9 = new lib.getinspiredgreens();
	this.instance_9.parent = this;
	this.instance_9.setTransform(311.5,73);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({alpha:1},10).wait(206));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AonH0IAAobIXRAAIAAIbg");
	mask_1.setTransform(93.8,50);

	// get-inspired
	this.instance_10 = new lib.getinspired();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80,115.9);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(86).to({x:-70.1},0).to({x:89.9,alpha:1},10,cjs.Ease.get(1)).to({x:80},8,cjs.Ease.get(1)).wait(121));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AvJHqIAAobMAhbAAAIAAIbg");
	mask_2.setTransform(117,49);

	// cta-rectangle
	this.instance_11 = new lib.ctarectanglewhite();
	this.instance_11.parent = this;
	this.instance_11.setTransform(79.9,68.9);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(86).to({x:-70.1},0).to({x:89.9,alpha:1},10,cjs.Ease.get(1)).to({x:79.9},8,cjs.Ease.get(1)).wait(121));

	// table
	this.instance_12 = new lib.getinspiredtable();
	this.instance_12.parent = this;
	this.instance_12.setTransform(364,45);

	this.instance_13 = new lib.leaderboardtable_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(364,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(362,45,732,94);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;