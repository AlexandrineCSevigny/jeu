(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib._1_defaite = function() {
	this.initialize(img._1_defaite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib._1_niveau = function() {
	this.initialize(img._1_niveau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib._1_presentation = function() {
	this.initialize(img._1_presentation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib._1_victoire = function() {
	this.initialize(img._1_victoire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib.copie1_presentation = function() {
	this.initialize(img.copie1_presentation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib.copie1_presentationpng2 = function() {
	this.initialize(img.copie1_presentationpng2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib.Frame = function() {
	this.initialize(img.Frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3200,148);


(lib.niveau1_decors = function() {
	this.initialize(img.niveau1_decors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);


(lib.niveau2_decors = function() {
	this.initialize(img.niveau2_decors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1200);// helper functions:

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


(lib.projectile_naissance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AhFAYIBMAPIBXgnIhOgNAhFAYIBVglAhFAYIgggYIAzglIBCAY");
	this.shape.setTransform(10.2,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87B2FA").s().p("AhBAXIgggXIAzgmIBCAZIBOANIhXAng");
	this.shape_1.setTransform(9.8,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ABHAIIhWgXIg4Aeg");
	this.shape_2.setTransform(36.7,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7FBFD").s().p("AgOgOIBVAXIiNAGg");
	this.shape_3.setTransform(36.6,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgfAGIg8gJIhDgZIARgNIApgEIBFAzIC0AeQgSAGgKABQgiAFi/gDg");
	this.shape_4.setTransform(21,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BED9F5").s().p("AhjAtIBJgnIC0AeQgSAGgKABQgVADhTAAIh5gBgAhWgDIhDgZIARgNIApgEIBFAzg");
	this.shape_5.setTransform(20.5,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ADOgNIAYARQhBAbglAMAB3glIBXAYIiPAHAhwADIhEgYAjHAoIBXglIB3AUIA4gdAjHAoIgggYIAzglAB3glIgtgOQgWgDhTAHQhCAGhBAHIgSANAjHAoIBKAMQC/ADAhgFQALgBASgGIh5gUAB3glIg4Af");
	this.shape_6.setTransform(23.2,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D4EBF6").s().p("Ah8A0IhKgMIgggYIBFgyQBBgHBCgGQBTgHAWADICEAmIAYARQhBAbglAMQgSAGgLABQgVADhSAAIh5gBg");
	this.shape_7.setTransform(23.1,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.projectile_naissance, rect = new cjs.Rectangle(-1,-1,48.2,12.8), [rect]);


(lib.brillant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{brillant:0});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay("brillant");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// brillant
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAJIgKAIIAEgNIgKgHIANAAIADgMIAEAMIANAAIgKAHIAEANg");
	this.shape.setTransform(16.3,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAMIgNAKIAGgRIgPgJIARAAIAFgRIAFARIASAAIgOAJIAFARg");
	this.shape_1.setTransform(35.1,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAJIgKAIIAEgNIgKgHIANAAIADgMIAEAMIANAAIgLAHIAFANg");
	this.shape_2.setTransform(24.8,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAGIgGAFIACgJIgHgDIAJAAIACgJIADAJIAJAAIgHADIACAJg");
	this.shape_3.setTransform(2.4,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAIIgKAIIAEgMIgKgHIANAAIADgNIAEANIANAAIgKAHIAEAMg");
	this.shape_4.setTransform(51.5,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAIIgTgIIARgKIAGgTIAHATIARAKIgRAIIgHAXg");
	this.shape_5.setTransform(36.3,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAFIgMgFIALgGIADgLIAEALIALAGIgLAFIgEANg");
	this.shape_6.setTransform(52.3,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAHIgPgHIANgIIAFgPIAGAPIANAIIgNAHIgGARg");
	this.shape_7.setTransform(12.8,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAIIgTgIIARgKIAGgTIAHATIARAKIgRAIIgHAWg");
	this.shape_8.setTransform(10.9,35.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAGIgGAFIADgIIgIgEIAJAAIACgJIADAJIAJAAIgHAEIACAIg");
	this.shape_9.setTransform(38.8,10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAIIgYgIIAVgKIAIgTIAJATIAVAKIgVAIIgJAWg");
	this.shape_10.setTransform(28.5,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAJIgYgJIAVgKIAIgUIAJAUIAVAKIgVAJIgJAVg");
	this.shape_11.setTransform(4.2,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAKIgdgKIAagNIAKgWIALAWIAZANIgZAKIgLAbg");
	this.shape_12.setTransform(53.3,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAGIgGAFIADgIIgIgFIAJAAIACgIIADAIIAJAAIgIAFIADAIg");
	this.shape_13.setTransform(1.2,30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDAFIgOgFIANgFIAEgMIAGAMIAMAFIgMAFIgGANg");
	this.shape_14.setTransform(27.2,33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_9},{t:this.shape}]},3).to({state:[{t:this.shape_6},{t:this.shape_12},{t:this.shape_10},{t:this.shape_14},{t:this.shape_13},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_11},{t:this.shape_4},{t:this.shape_13},{t:this.shape_3},{t:this.shape_9},{t:this.shape}]},3).to({state:[{t:this.shape_12},{t:this.shape_10},{t:this.shape_14},{t:this.shape_4},{t:this.shape_3},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.3,6.1,52.6,37.1);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(1.2,0,55.8,38.8), rect, rect, rect=new cjs.Rectangle(0,0,57,43.2), rect, rect, rect=new cjs.Rectangle(0,4.8,53.8,34), rect, rect, rect=new cjs.Rectangle(1.3,0,55.7,43.2), rect, rect];


(lib.mcObstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{niveau1:0,niveau2:1,obstacle_n0:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// obsctacle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#634589").ss(1,0,0,4).p("ADihnQgEAHAAAHIAABcQgcABgMADQgRADAAAIQADAigHAcQgKAmgYAEQgoAOhEAEQiEAJhUgXQgpgYATgXQAZgeCJgLIAAg7QABgLgsgJQg4gJgZgGQAYABAWgEQAcgGADgNIgEgZQAEgUAogKQA1gPBdANIAAAgQAngEAlgCQAzgBARAHg");
	this.shape.setTransform(-4.7,0.8,1.25,1.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#775B9B").s().p("AjFB+QgpgYATgXQAZgeCJgLIAAg7QABgLgsgJQg4gJgZgGQAYABAWgEQAcgGADgNIgEgZQAEgUAogKQA1gPBdANIAAAgQAngEAlgCQAzgBARAHQgEAHAAAHIAABcQgcABgMADQgRADAAAIQADAigHAcQgKAmgYAEQgoAOhEAEQgjACggAAQhYAAg9gQg");
	this.shape_1.setTransform(-4.7,0.8,1.25,1.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#586AC5").s().p("AAHgEQgggKgzgGQBQAAASABQA0ADADAQQADAOgOADIgoAEQAYgNgrgMg");
	this.shape_2.setTransform(24.5,-16.7,1.25,1.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#586AC5").s().p("AgEAFQACgXgfgTQAdAIAMAHQAXAOADAWQgBAJgLAGQgPAJgcAAQAQgOABgTg");
	this.shape_3.setTransform(30.8,-3.8,1.25,1.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#586AC5").s().p("AgEgEIAAgZIAFAUQAFAPgBANIgCALQAAgOgHgUg");
	this.shape_4.setTransform(16.6,6.9,1.25,1.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#586AC5").s().p("AAiAhQgbgYgVgGIgngGQgXgFACgGQAdgFA2gNQAsgHAQAMQANALgPAFQgRAHAFAHIAAAhg");
	this.shape_5.setTransform(-1.4,-20.7,1.25,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#586AC5").s().p("AgegEQAjgMASgIIAIAxQgrgbgSgCg");
	this.shape_6.setTransform(-21.8,-12.2,1.25,1.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#586AC5").s().p("AAAAVQgBgMgDgJQgDgNgFABIAZgLIAAAvg");
	this.shape_7.setTransform(-29,-9.3,1.25,1.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#586AC5").s().p("AgYANQgQgNgTAAQAcgGA0gJQAngJAAgJIAAA7QgnADgcAFQgGgMgLgJg");
	this.shape_8.setTransform(-19.5,2.3,1.25,1.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5798C8").ss(0.5,0,0,4).p("AA5iKQAEAKBvgCQBtgBAFAVQAEASglADQgsADgIANAiJhiQAMgGgTgMQgUgMARgKQAVgKBbgOQBagOAQAHQAMAMgOAEQgQAFAEAKIAAAhADGg7QAAgHADgHQgRgHgzABQglACgnAEIAAggADGAhQgcABgMADQgSADAAAIQABABgBABQACAIAKAkQAAAhgjASQgGAFgIACQgpAOhCAEQiGAJhUgXACMAyQADAggHAcQgGAZgNAKADGg7QAAAHAtAOQAuAOAFAgQAAAPggAGQgMACg0ACADGg7IAABcAiJhiIAEAZQAEgUAogKQA1gPBdANAjOgaQAYABAWgEQAcgGADgNIgEgZAjOgaIAAgvAjOgaQgwgJAFgNQAGgMAlgNAhSAIQAAAJhgATQhjATgNAgQgJAVASASQASASApAMAhSAIIAAA8QiJALgZAeQgTAXApAYAiJhiQgOAGg3ATAhSAIQABgKgsgJQg4gJgZgG");
	this.shape_9.setTransform(-1.6,-2.9,1.25,1.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9694DF").s().p("AjeCcQgpgMgSgSQgSgSAJgVQANggBjgTQBggTABgJQAAgKgsgJQg3gJgagGQgwgJAFgNQAGgMAlgNQA3gTAOgGQAMgGgTgMQgUgMASgKQAUgKBagOQBbgOAQAHQAMAMgOAEQgQAFAEAKQAEAKBvgCQBtgBAFAVQAEASgmADQgrADgIANQgDAHAAAHQAAAHAtAOQAuAOAFAgQAAAPggAGQgMACg0ACQgdABgLADQgSADABAIIAAABIALAqQACAkgmATQgFAEgJACQgoAOhDAEQgkACggAAQhYAAg9gQg");
	this.shape_10.setTransform(-1.6,-2.9,1.25,1.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#868DB7").s().p("AgGAAIgTAFIgIAAIBDgbIgDALIgTADIARANQgGgBgOgJIgFAAIgNAdQADgIAAgQg");
	this.shape_11.setTransform(-36.5,-6.9,1.25,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#868DB7").s().p("AAEAcIgrAVIAkgbIgwggIAqAXQADAAAOgtIgMgRQAIAJAKAEQAAAJgRApIA3AZIAAAKg");
	this.shape_12.setTransform(-27.5,-24.7,1.25,1.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#868DB7").s().p("AgYAkQAdgPADgJIgLgmIAYgOIgTAQIAKAgIANgLQgKANgLANQgNAQgJACIgGgFg");
	this.shape_13.setTransform(10.4,-28.6,1.25,1.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#868DB7").s().p("AgfASQACgDgCgGIALADQALACAFgFIAYgcIgSAeQgCADAQAAIAQgBQgMAGgVABIgGAAQgNAAgLgCg");
	this.shape_14.setTransform(38.1,-17.9,1.25,1.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#868DB7").s().p("AgHgGQgHgBgegYQAGgCAGgFIAUAWIA5ARIgsgGIAAAsg");
	this.shape_15.setTransform(38.7,4.2,1.25,1.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#868DB7").s().p("AgIgJIAFAAQAAAEAMAPQgKgEgHgPg");
	this.shape_16.setTransform(30.4,2.1,1.25,1.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#868DB7").s().p("AgZAhQABgHANgHQAKgFALgDIgUgZQgTAAgvgcIADgOQAAANA5ATQApANAzAJQgNACg8gIIARAXQgGgDgUAMQgLAGgEALQgDAJACAHQgFgKACgOg");
	this.shape_17.setTransform(26.4,16.4,1.25,1.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#868DB7").s().p("AgcgSQgGgjAJgVIAPAAIgFALQgEARACAWIAqASQAAAHADATIADAUQgHgQgCgOIgCgMQgBgCgSgFIgRgHQAFAnAXA0QghgvgHgug");
	this.shape_18.setTransform(-10.6,28.1,1.25,1.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#868DB7").s().p("AgBAGIgaAJQgOAFANgGQAUgKAsgoIAAARQglAPAJAEQAGADgSAiQADgOAAgRg");
	this.shape_19.setTransform(-42.9,14.1,1.25,1.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2F83AF").ss(1,0,0,4).p("ADihnQgEAHAAAHIAABcQgcABgMADQgRADAAAIQADAigHAcQgKAmgYAEQgoAOhEAEQiEAJhUgXQgpgYATgXQAZgeCJgLIAAg7QABgLgsgJQg4gJgZgGQAYABAWgEQAcgGADgNIgEgZQAEgUAogKQA1gPBdANIAAAgQAngEAlgCQAzgBARAHg");
	this.shape_20.setTransform(-4.7,0.9,1.25,1.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C959E").s().p("AjFB+QgpgYATgXQAZgeCJgLIAAg7QABgLgsgJQg4gJgZgGQAYABAWgEQAcgGADgNIgEgZQAEgUAogKQA1gPBdANIAAAgQAngEAlgCQAzgBARAHQgEAHAAAHIAABcQgcABgMADQgRADAAAIQADAigHAcQgKAmgYAEQgoAOhEAEQgjACggAAQhYAAg9gQg");
	this.shape_21.setTransform(-4.7,0.9,1.25,1.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4CABD0").s().p("AAHgEQgggKgzgGQBQAAASABQA0ADADAQQADAOgOADIgoAEQAYgNgrgMg");
	this.shape_22.setTransform(24.5,-16.5,1.25,1.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4CABD0").s().p("AgEAFQACgXgfgTQAdAIAMAHQAXAOADAWQgBAJgLAGQgPAJgcAAQAQgOABgTg");
	this.shape_23.setTransform(30.9,-3.6,1.25,1.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4CABD0").s().p("AgEgEIAAgZIAFATQAFAQgBANIgCALQAAgOgHgUg");
	this.shape_24.setTransform(16.7,7.1,1.25,1.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4CABD0").s().p("AAiAhQgbgYgVgGIgngGQgXgFACgGQAdgFA2gNQAsgHAQAMQANALgPAFQgRAHAFAHIAAAhg");
	this.shape_25.setTransform(-1.3,-20.6,1.25,1.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4CABD0").s().p("AgegEQAjgMASgIIAIAxQgrgcgSgBg");
	this.shape_26.setTransform(-21.7,-12.1,1.25,1.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4CABD0").s().p("AAAAVQgBgMgDgJQgDgNgFABIAZgLIAAAvg");
	this.shape_27.setTransform(-29,-9.1,1.25,1.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4CABD0").s().p("AgYAMQgQgMgTAAQAcgGA0gJQAngJAAgJIAAA8QgnADgcAEQgFgMgMgKg");
	this.shape_28.setTransform(-19.4,2.4,1.25,1.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#12A8E7").ss(1,0,0,4).p("AA5iKQAEAKBvgCQBtgBAFAVQADASgkADQgsADgIANQgRgHgzABQglACgnAEIAAggADGg7QAAgHADgHAiJhiQAMgGgTgMQgTgMAQgKQAVgKBbgOQBagOAQAHQAMAMgOAEQgQAFAEAKIAAAhADGAhQgdABgLADQgRADAAAIQAAABAAABQABAIAJAkQABAhgjASQgGAFgIACQgpAOhDAEQiFAJhUgXACNAyQACAggHAcQgGAZgNAKADGg7QAAAHAtAOQAuAOAFAgQAAAPggAGQgNACgzACADGg7IAABcAiJhiIAEAZQAFgUAngKQA1gPBdANAjNgaQAXABAWgEQAcgGADgNIgEgZAjNgaIAAgvAjNgaQgxgJAGgNQAFgMAmgNAhSAIQAAAJhgATQhjATgNAgQgJAVASASQASASApAMAhSAIIAAA8QiIALgaAeQgTAXApAYAiJhiQgOAGg2ATAhSAIQABgKgsgJQg3gJgZgG");
	this.shape_29.setTransform(-1.6,-2.8,1.25,1.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#87D2EF").s().p("AjdCcQgqgMgSgSQgSgSAJgVQANggBkgTQBfgTAAgJQABgKgsgJQg4gJgZgGQgwgJAGgNQAGgMAkgNQA3gTAOgGQAMgGgTgMQgUgMARgKQAVgKBagOQBbgOAQAHQAMAMgOAEQgRAFAFAKQAEAKBvgCQBtgBAEAVQAEASglADQgrADgIANQgEAHAAAHQAAAHAtAOQAvAOAFAgQAAAPggAGQgNACg0ACQgbABgMADQgRADgBAIIAAABIALAqQACAkglATQgGAEgHACQgpAOhCAEQglACggAAQhYAAg8gQg");
	this.shape_30.setTransform(-1.6,-2.8,1.25,1.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5EB3AE").s().p("AgGAAIgTAEIgIAAIBDgaIgDALIgTAEIARALQgGABgOgKIgFAAIgNAcQADgHAAgQg");
	this.shape_31.setTransform(-36.5,-6.7,1.25,1.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5EB3AE").s().p("AAEAcIgrAVIAkgbIgvggIApAWQACABAPgtIgMgRQAIAJAKAFQAAAHgRApIA2AaIAAAKg");
	this.shape_32.setTransform(-27.4,-24.6,1.25,1.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5EB3AE").s().p("AgYAjQAegOACgJIgLgnIAYgNIgUAQIALAgIANgLQgKANgKANQgOAQgJACIgGgGg");
	this.shape_33.setTransform(10.4,-28.5,1.25,1.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5EB3AE").s().p("AgfASQABgDgBgGIALADQAMACAEgFIAYgcIgSAeQgBADAPAAIAQgBQgNAGgUABIgGAAQgNAAgLgCg");
	this.shape_34.setTransform(38.1,-17.8,1.25,1.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5EB3AE").s().p("AgHgGQgHgBgegYQAGgCAGgFIAUAWIA5ARIgsgGIAAAsg");
	this.shape_35.setTransform(38.8,4.3,1.25,1.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5EB3AE").s().p("AgIgJIAFAAQAAAEAMAPQgKgEgHgPg");
	this.shape_36.setTransform(30.5,2.2,1.25,1.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5EB3AE").s().p("AgZAhQACgHANgHQAKgFAKgDIgTgZQgUAAgvgcIAEgOQgBAOA5ASQApANAzAJQgNACg8gIIAQAXQgFgCgVALQgLAHgDAKQgDAJABAHQgEgKACgOg");
	this.shape_37.setTransform(26.5,16.6,1.25,1.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5EB3AE").s().p("AgcgSQgGgjAJgVIAPAAIgFALQgEARACAWIAqASQAAAHADATIADAVQgHgRgCgOIgCgMQgCgDgigLQAFAoAXAzQghgvgHgug");
	this.shape_38.setTransform(-10.5,28.2,1.25,1.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5EB3AE").s().p("AgBAGIgaAJQgOAFANgGQAUgKAsgpIAAASQgNAFgJAFQgLAHAFACQAGADgSAiQADgOAAgRg");
	this.shape_39.setTransform(-42.8,14.3,1.25,1.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#73CBEF").s().p("AjFB+QgpgYATgXQAZgeCJgLIAAg7QABgLgsgJQg4gJgZgGQAYABAWgEQAcgGADgNIgEgZQAEgUAogKQA1gPBdANIAAAgQAngEAlgCQAzgBARAHQgEAHAAAHIAABcQgcABgMADQgRADAAAIQADAigHAcQgKAmgYAEQgoAOhEAEQgjACggAAQhYAAg9gQg");
	this.shape_40.setTransform(-4.6,1.2,1.25,1.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#42B5EE").s().p("AAHgEQgggKgzgGQBQAAASABQA0ADADAQQADAOgOADIgoAEQAYgNgrgMg");
	this.shape_41.setTransform(24.6,-16.3,1.25,1.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#42B5EE").s().p("AgEAFQACgXgfgTQAdAIAMAHQAXAOADAWQgBAJgLAGQgPAJgcAAQAQgOABgTg");
	this.shape_42.setTransform(30.9,-3.4,1.25,1.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#42B5EE").s().p("AgEgEIAAgZIAFAUQAFAPgBANIgCALQAAgOgHgUg");
	this.shape_43.setTransform(16.7,7.3,1.25,1.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#42B5EE").s().p("AAiAhQgbgYgVgGIgngGQgXgFACgGQAdgFA2gNQAsgHAQAMQANALgPAFQgRAHAFAHIAAAhg");
	this.shape_44.setTransform(-1.3,-20.3,1.25,1.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#42B5EE").s().p("AgegEQAjgMASgIIAIAxQgrgbgSgCg");
	this.shape_45.setTransform(-21.7,-11.8,1.25,1.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#42B5EE").s().p("AAAAVQgBgMgDgJQgDgNgFABIAZgLIAAAvg");
	this.shape_46.setTransform(-28.9,-8.9,1.25,1.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#42B5EE").s().p("AgYAMQgQgMgTAAQAcgGA0gJQAngJAAgJIAAA7QgnADgcAFQgFgMgMgKg");
	this.shape_47.setTransform(-19.4,2.7,1.25,1.25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#5798C8").ss(0.5,0,0,4).p("AA5iKQAEAKBvgCQBtgBAFAVQAEASglADQgsADgIANQgRgHgzABQglACgnAEIAAggADGg7QAAgHADgHAiJhiQAMgGgTgMQgUgMARgKQAVgKBbgOQBagOAQAHQAMAMgOAEQgQAFAEAKIAAAhADGAhQgcABgMADQgSADAAAIQABABgBABQACAIAKAkQAAAhgjASQgGAFgIACQgpAOhCAEQiGAJhUgXACMAyQADAggHAcQgGAZgNAKADGg7QAAAHAtAOQAuAOAFAgQAAAPggAGQgMACg0ACADGg7IAABcAiJhiIAEAZQAEgUAogKQA1gPBdANAjOgaQAYABAWgEQAcgGADgNIgEgZAjOgaIAAgvAjOgaQgwgJAFgNQAGgMAlgNAhSAIQAAAJhgATQhjATgNAgQgJAVASASQASASApAMAhSAIIAAA8QiJALgZAeQgTAXApAYAiJhiQgOAGg3ATAhSAIQABgKgsgJQg4gJgZgG");
	this.shape_48.setTransform(-1.5,-2.5,1.25,1.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9BDCFA").s().p("AjeCcQgpgMgSgSQgSgSAJgVQANggBjgTQBggTABgJQAAgKgsgJQg3gJgagGQgwgJAFgNQAGgMAlgNQA3gTAOgGQAMgGgTgMQgUgMASgKQAUgKBagOQBbgOAQAHQAMAMgOAEQgQAFAEAKQAEAKBvgCQBtgBAFAVQAEASgmADQgrADgIANQgDAHAAAHQAAAHAtAOQAuAOAFAgQAAAPggAGQgMACg0ACQgdABgLADQgSADABAIIAAABIALAqQACAkgmATQgFAEgJACQgoAOhDAEQgkACggAAQhYAAg9gQg");
	this.shape_49.setTransform(-1.5,-2.5,1.25,1.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4DAED9").s().p("AgGAAIgTAFIgIAAIBDgbIgDALIgTADIARANQgGgBgOgJIgFAAIgNAdQADgIAAgQg");
	this.shape_50.setTransform(-36.4,-6.5,1.25,1.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4DAED9").s().p("AAEAcIgrAVIAkgbIgwggIAqAXQADAAAOgtIgMgRQAIAJAKAEQAAAJgRApIA3AZIAAAKg");
	this.shape_51.setTransform(-27.4,-24.3,1.25,1.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4DAED9").s().p("AgYAkQAdgPADgJIgLgmIAYgOIgTAQIAKAgIANgLQgKANgLANQgNAQgJACIgGgFg");
	this.shape_52.setTransform(10.5,-28.2,1.25,1.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4DAED9").s().p("AgfASQACgDgCgGIALADQALACAFgFIAYgcIgSAeQgCADAQAAIAQgBQgMAGgVABIgGAAQgNAAgLgCg");
	this.shape_53.setTransform(38.2,-17.5,1.25,1.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4DAED9").s().p("AgHgGQgHgBgegYQAGgCAGgFIAUAWIA5ARIgsgGIAAAsg");
	this.shape_54.setTransform(38.8,4.6,1.25,1.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4DAED9").s().p("AgIgJIAFAAQAAAEAMAPQgKgEgHgPg");
	this.shape_55.setTransform(30.5,2.5,1.25,1.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4DAED9").s().p("AgZAhQABgHANgHQAKgFALgDIgUgZQgTAAgvgcIADgOQAAANA5ATQApANAzAJQgNACg8gIIARAXQgGgDgUAMQgLAGgEALQgDAJACAHQgFgKACgOg");
	this.shape_56.setTransform(26.5,16.8,1.25,1.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4DAED9").s().p("AgcgSQgGgjAJgVIAPAAIgFALQgEARACAWIAqASQAAAHADATIADAUQgHgQgCgOIgCgMQgBgCgSgFIgRgHQAFAnAXA0QghgvgHgug");
	this.shape_57.setTransform(-10.5,28.5,1.25,1.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4DAED9").s().p("AgBAGIgaAJQgOAFANgGQAUgKAsgoIAAARQglAPAJAEQAGADgSAiQADgOAAgRg");
	this.shape_58.setTransform(-42.8,14.5,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-33.7,91.7,71.3);
p.frameBounds = [rect, new cjs.Rectangle(-47.2,-33.6,91.7,71.3), new cjs.Rectangle(-47.2,-33.3,91.7,71.3)];


(lib.ecran_presentation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// titre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("EghMAAAMBCZAAA");
	this.shape.setTransform(395.8,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("EghMAAAMBCZAAA");
	this.shape_1.setTransform(395.8,165);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AxyFDIAAmfIAUAAIAABGQASgjAkgUQAlgWAoAAQApAAAjAUQAkAWATAhQAVAiAAApQAAApgVAjQgTAhgkAWQgjAUgpAAQgoAAgkgVQgkgVgTgjIAADGgAwdg/QgdATgTAfQgSAeAAAjQAAAjASAfQATAeAeASQAfASAjAAQAkAAAegSQAegSAQgeQASgfAAgkQAAgjgSgeQgRgfgegSQgggSghAAQgjAAggASgATSC4QgkgWgTgjQgUglAAgoQAAgoAUgjQAUgjAjgVQAjgVArAAQArAAAiAVQAjAUAUAkQAUAjAAAoQAAArgTAjQgUAkgiAVQgjAUgsAAQgrAAgjgVgATdhBQgeATgSAfQgSAfAAAkQAAAkASAfQASAfAeATQAeASAlAAQAmAAAegSQAegTAQgfQARgfABglQgBgkgRgfQgRgfgfgTQgdgSglAAQgkAAgfATgA5SC2QgjgWgUgjQgVgjAAgoQAAgqAVghQAUgjAjgTQAlgTArAAQBCAAAwA0IjJDFQAUASAUAIQAUAIAZAAQAiAAAdgSQAegRAVgeIAAAhQgZAbgbALQgeAMgiAAQgoAAgkgVgA5Jg/QgdAQgSAeQgRAcAAAlQAAA2AjAlIC7i5QgVgTgUgHQgTgIgcAAQgnAAgfARgAbmC2QgkgWgTghQgVgjAAgpQAAgpAVgiQATghAkgWQAkgUAoAAQApAAAlAWQAkAVASAiIAAkGIAUAAIAAHfIgUAAIAAhGQgUAjglAVQgjAVgoAAQgoAAgkgUgAbxg/QgfASgRAfQgSAeAAAjQAAAkARAfQASAdAeATQAfASAjAAQAkAAAdgSQAfgSASgeQASgfABgjQgBgkgSgdQgSgfgfgTQgegSgjAAQgiAAgfASgALcjsIAAGvIgTAAIAAnmIFhG1IAAmuIATAAIAAHmgAEACpQgighAAg9IAAinIAVAAIAACnQAAA0AbAdQAdAcAyAAQAfAAAZgNQAZgOAQgZQAOgYAAghIAAinIAVAAIAAEfIgVAAIAAg2QgOAagdASQgfARglAAQg8AAghghgAhVC2QgjgWgUghQgUgkgBgoQABgoAUgjQAUghAjgWQAkgUApAAQAnAAAlAWQAlAVARAiIAAkGIAUAAIAAHfIgUAAIAAhGQgUAjgkAVQgjAVgnAAQgpAAgkgUgAhKg/QgeASgSAfQgSAeAAAjQAAAkASAfQARAdAfATQAeASAjAAQAiAAAegSQAfgSASgeQATgfAAgjQAAgkgTgdQgSgfgfgTQgfgSghAAQgiAAgfASgA1BDAQgXgLgLgRIAAgiQAMAcAVANQAWANAgAAQAfAAATgTQAUgUgBgfQAAgbgLgNQgKgPgZgOIhAgnQgNgKgHgLQgHgMgBgQQAAgZASgQQATgPAcAAQAiAAAZAQIAAAcQgUgaglAAQgVAAgMAKQgNAKAAAQQAAAPAHAKQAIALANAJIAvAZQAgATAQAUQAPATAAAfQAAAogaAYQgaAYglAAQgfAAgXgKgAmhCqQgfgdAAgyIAAkrIAVAAIAAB0IBYAAIAAASIhYAAIAAClQAAAqAYAYQAaAYAnAAIAAASQgvAAgggdgAXxDDIAAkfIAVAAIAABDQAMgfAZgTQAZgSAfAAQATAAAVAJIAAAXQgRgOgYAAQgXAAgVAOQgWAOgNAYQgNAXAAAbIAACogAotDDIAAkfIAUAAIAAEfgAsJDDIAAkfIAUAAIAABDQANgfAYgTQAagSAfAAQATAAAVAJIAAAXQgSgOgYAAQgXAAgVAOQgVAPgNAXQgNAXgBAbIAACogA/JDDIAAnfIAVAAIAAHMICVAAIAAATgAozikQgGgHAAgJQAAgJAGgHQAIgGAIAAQAIAAAHAGQAIAHAAAJQAAAJgIAHQgHAGgIAAQgIAAgIgGgA81i+QAlgRAAgqIAAhJIAYAAIAABJQAAAegRAWQgRAVgbAIg");
	this.shape_2.setTransform(395.8,212.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// texte
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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QABgSgIgKQgIgJgOAAQgPAAgGAJgABgGWQgJgJAAgSIAAg/IAPAAIAAA/QAAALAGAGQAFAGAMAAQAOAAAHgJQAIgIAAgTIAAgyIAOAAIAABgIgMAAIgCgMIgBAAQgEAGgJAEQgGAEgMAAQgQAAgKgIgAgEGYQgKgFgFgMQgFgLAAgQQAAgXALgNQAMgOAUAAQAUAAAMAOQAMANAAAXQAAAYgMANQgMANgUAAQgNAAgKgGgAgCFQQgIAJABATQgBATAIAJQAGAKAPAAQAOAAAHgKQAIgJAAgTQAAgSgIgKQgHgJgOAAQgQAAgFAJgAkMGYIAAgOIAOAGQAIACAIAAQAMAAAFgDQAHgEAAgIQgBgFgEgFQgFgDgOgGQgMgEgIgFQgFgEgDgEQgDgGABgGQAAgMAJgGQAKgHARAAQAOAAAQAGIgFAMQgOgFgMAAQgLAAgFACQgFAEgBAFQAAAFADACIAFAFIARAHQAQAGAIAHQAGAHAAAJQAAANgKAIQgLAHgSAAQgSAAgLgGgAllGRQgMgOAAgWQAAgXAMgOQAMgOASAAQATAAAKAMQALAMAAATIAAAJIhDAAQAAARAJAJQAIAKAPgBQAOAAAQgGIAAANIgOAEQgGACgKAAQgWAAgNgNgAlZFOQgHAHgCAOIAzAAQAAgOgGgHQgGgHgMAAQgLAAgHAHgAnHGYIAAgOIAPAGQAHACAIAAQAMAAAFgDQAHgEgBgIQAAgFgEgFQgEgDgPgGQgMgEgIgFQgFgEgDgEQgCgGAAgGQAAgMAJgGQAKgHARAAQAOAAAPAGIgEAMQgOgFgMAAQgLAAgGACQgEAEAAAFQAAAFACACIAFAFIARAHQARAGAHAHQAGAIAAAIQAAAOgLAHQgJAHgTAAQgSAAgLgGgApOGRQgMgNAAgXQAAgYALgNQALgOATAAQATAAALAMQAKAMAAATIAAAJIhDAAQABASAIAIQAIAKAPgBQAOAAARgGIAAANIgPAEQgGACgKAAQgWAAgMgNgApDFOQgIAIAAANIAyAAQAAgOgGgHQgGgHgMAAQgLAAgHAHgAq+GRQgLgMAAgZQAAgYALgMQAKgOATAAQAUAAAKAPIABAAIgBg2IAPAAIAACJIgMAAIgCgMIgBAAQgKAOgUAAQgTAAgKgNgAqzFRQgHAKAAARQAAASAHAKQAHAKANAAQAPAAAGgJ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AALIgYAAIAABWgEgthACtIAAhhIAMAAIACASIABAAQAFgKAHgFQAJgFAIAAIALABIgBAOIgLgCQgMAAgIAKQgJAKABAOIAAA0gEgylACtIAAhhIAMAAIABASIACAAQAFgKAHgFQAJgFAIAAIALABIgBAOIgLgCQgMAAgIAKQgJAJABAPIAAA0gEgzuACtIAAhhIALAAIACASIABAAQAFgKAIgFQAIgFAJAAIALABIgCAOIgKgCQgMAAgJAKQgIAKAAAOIAAA0gANWBYIAJgsIAQAAIACACIgHAUIgJAWgEgi2ABYIAJgsIAQAAIABACIgHAUIgJAWgATUA5QgDgCABgFQgBgGADgCQADgCADAAQADAAADACQADACAAAGQAAAFgDACQgCADgEgBQgEABgCgDgAAAA5QgCgCAAgFQAAgGACgCQACgCAEAAQADAAADACQACADAAAFQAAAEgCADQgCADgEgBQgEABgCgDgEgglAA5QgCgCAAgFQAAgGACgCQADgCADAAQADAAADACQADADAAAFQAAAEgDADQgCADgEgBQgEABgCgDgEgnhAA5QgDgCAAgFQAAgGADgCQADgCADAAQADAAADACQADADgBAFQABAEgDADQgCADgEgBQgEABgCgDgAc7ghIAAiMIAMAAIACANIABAAQAFgHAIgFQAJgDAIAAQATAAALANQAKANAAAYQAAAYgKANQgLANgTAAQgKAAgHgDQgIgEgFgHIgBAAIABA4gAdRibQgHAKAAAQIAAAEQAAAVAHAIQAGAJAPAAQAMAAAIgKQAHgLAAgRQAAgSgHgKQgIgKgMAAQgPABgGAHgAubghIAAiMIAMAAIACANIABAAQAGgHAGgFQAKgDAIAAQATAAAKANQALANAAAYQAAAYgLANQgLANgSAAQgKAAgIgDQgHgFgFgGIgBAAIABAQIAAAogAuGibQgFAIgBASIAAAEQAAATAGAKQAIAJAOAAQANAAAHgKQAHgKAAgSQAAgSgHgKQgIgKgMAAQgOABgIAHgA4ZghIAAgqIABgPIgCAAQgKAPgTAAQgUAAgKgNQgLgOAAgWQAAgYAMgOQAKgNATAAQATAAALAPIABAAIACgNIAMAAIAACMgA5JiZQgHAKAAATQAAASAHAKQAGAJANAAQAPAAAHgIQAGgIABgSIAAgDQAAgVgHgJQgHgIgPg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");
	this.shape_3.setTransform(401.2,375.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Eg+kgQAMB9JAAAMAAAAgBMh9JAAAg");
	this.shape_4.setTransform(401,375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.2)").s().p("Eg+kAQBMAAAggBMB9JAAAMAAAAgBg");
	this.shape_5.setTransform(401,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// decors
	this.instance = new lib._1_presentation();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ecran_presentation, rect = new cjs.Rectangle(-0.5,0,803,600), [rect]);


(lib.decorsMobile2_n2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Frame.svg
	this.instance = new lib.Frame();
	this.instance.parent = this;
	this.instance.setTransform(-800,20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.decorsMobile2_n2_mc, rect = new cjs.Rectangle(-800,20,1600,74), [rect]);


(lib.decorsMobile2_n1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decorMobile02
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBEFFB").s().p("AboCWQsVggiqAAQjMAAu/AfQvBAfiaAAQiiAAqHgoQqRgnjBgCQjJgBkfAQQjTALisAQIAAjDQAIgEAQgDQAWgFAYAAQAXAAAoALQArALAYABQAYABAsgLQAugNAlAAQAbAAA/AXQBCAYBUAEQBLAEBTgHQA1gFAOAIQAxAZC2gKQBJgDBSgXQB8gjAVgFQA5gLCEAFQCIAFA4gKQAkgHAngRIBIghQBhgqCDgDQCEgCA5ASQAPAFAWAJQAWAGAcABQAuACBwAJQBqAIBDgHQA7gGBNAOQBiARBIACQBAACBBATQA7AQB/AAQB7AABkgFQBkgGBOAAQA4AAAnAJQATAFAsASQBbAkCRAJQCbALBxgkIBUgcQAxgNA4AAQBNAACPAiQCOAgB8AAQB4AAB4gaQB3gcBbAAQBqAACugIQCYgHBtgIQA6gIBXgRQBLgMBGAAQBKAACBgPQB7gOA8ABQBHACA8AZQBSAiASAEQAhAHC8ASQDEASBeATQBvAWBVgEQAygCBLgPIAFgBQAlgIBGgSQA5gOAfABIAADFQjfAMkZAKQl+AOkZABIgcAAQkoAArlgeg");
	this.shape.setTransform(-399,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEFFB").s().p("AboCWQsVggiqAAQjLAAvBAfQvAAfiaAAQihAAqIgoQqRgnjBgCQjJgBkfAQQjSALitAQIAAjDQAIgEAQgDQAWgFAYAAQAXAAAoALQAqALAZABQAYABAsgLQAugNAkAAQAcAAA+AXQBDAYBUAEQBLAEBTgHQA1gFAOAIQAxAZC2gKQBJgDBSgXQB8gjAVgFQA4gLCFAFQCIAFA4gKQAkgHAogRIBHghQBhgqCDgDQCEgCA5ASQAPAFAWAJQAWAGAcABQAuACBwAJQBrAIBCgHQA6gGBOAOQBiARBIACQBAACBBATQA7AQB/AAQB7AABkgFQBkgGBOAAQA4AAAnAJQATAFAsASQBbAkCRAJQCbALBxgkIBUgcQAxgNA4AAQBNAACPAiQCOAgB8AAQB4AAB3gaQB5gcBaAAQBpAACvgIQCYgHBtgIQA6gIBXgRQBLgMBGAAQBKAACBgPQB8gOA7ABQBHACA8AZQBSAiASAEQAhAHC8ASQDEASBeATQBvAWBVgEQAxgCBMgPIAFgBQAlgIBGgSQA5gOAfABIAADFQjfAMkZAKQl+AOkZABIgcAAQkoAArlgeg");
	this.shape_1.setTransform(400,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.decorsMobile2_n1_mc, rect = new cjs.Rectangle(-799,0,1599,36), [rect]);


(lib.decorsMobile1_n2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decorsMobile01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7F0F1").s().p("Eg+fAHlIAAq3IFLB+IA1CTIEgAAIB2kRIC1iTICWGkIEWAAIEWkRIIgiTIjVERIBACTIErAAIB1iTICrCTIGWojIBLESIhLERIBLB+IDVkRIBWCTICrkRICAERIHqAAIGhojIAAESIDAAAIBrERIFgkRIEhERIFViTIBWCTIBVB+IDhAAIBrh+IIVAAIAAB+IBhAAIAAh+IBgiTIE1CTIIXkRIAAK3g");
	this.shape.setTransform(-400,-49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7F0F1").s().p("Eg+fAHlIAAq3IFLB+IA1CTIEgAAIB2kRIC1iTICWGkIEWAAIEWkRIIgiTIjVERIBACTIErAAIB1iTICrCTIGWojIBLESIhLERIBLB+IDVkRIBWCTICrkRICAERIHqAAIGhojIAAESIDAAAIBrERIFgkRIEhERIFViTIBWCTIBVB+IDhAAIBrh+IIVAAIAAB+IBhAAIAAh+IBgiTIE1CTIIXkRIAAK3g");
	this.shape_1.setTransform(400,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.decorsMobile1_n2_mc, rect = new cjs.Rectangle(-800,-98,1600,97), [rect]);


(lib.decorsMobile1_n1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decorMobile01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F6E9E").s().p("Eg+fAFeIAAoAQAAgWBFAcIB+A1IAEAAQBMAZAyADQBUAGBvgiQBfgdDDgbQC9gaAggMQATgGBSgzQA8gmBGgBQA8gCB7AVQCCAWBJAAQBGAABMATICRAkQBwANCVAKQCvAMBoAAQBbAAB4ApQB4AqB4AAQB7AACPgzQCOgxBOAAQA3AAAyATIBTApQBxA3CbgPQCRgPBbg2QAtgbASgHQAngPA5AAQBNAABkAJQBlAJB6AAQCAAAA7gZQBBgcBAgDQBHgDBjgbQBNgUA6AJQBCAKBrgLICegQQAdgBAVgKIAmgVQA5gbCDAEQCEADBhA/QAZARAuAgQAoAbAjAJQA5AQCIgIQCEgIA4ASQAVAGB8A0QBSAkBKAGQC1APAxgnQAPgNA1AIQBRAKBNgFQBTgGBDgkQA+giAcAAQAlAAAuASQArASAYgCQAZgBArgRQAngQAYAAQAXAAAWAGQAQAFAJAGIAAIAg");
	this.shape.setTransform(-400,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F6E9E").s().p("Eg+fAFeIAAoAQAAgWBFAcIB+A1IAEAAQBMAZAyADQBUAGBvgiQBfgdDDgbQC9gaAggMQATgGBSgzQA8gmBGgBQA8gCB7AVQCCAWBJAAQBGAABMATICRAkQBwANCVAKQCvAMBoAAQBbAAB4ApQB4AqB4AAQB7AACPgzQCOgxBOAAQA3AAAyATIBTApQBxA3CbgPQCRgPBbg2QAtgbASgHQAngPA5AAQBNAABkAJQBlAJB6AAQCAAAA7gZQBBgcBAgDQBHgDBjgbQBNgUA6AJQBCAKBrgLICegQQAdgBAVgKIAmgVQA5gbCDAEQCEADBhA/QAZARAuAgQAoAbAjAJQA5AQCIgIQCEgIA4ASQAVAGB8A0QBSAkBKAGQC1APAxgnQAPgNA1AIQBRAKBNgFQBTgGBDgkQA+giAcAAQAlAAAuASQArASAYgCQAZgBArgRQAngQAYAAQAXAAAWAGQAQAFAJAGIAAIAg");
	this.shape_1.setTransform(400,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.decorsMobile1_n1_mc, rect = new cjs.Rectangle(-800,-69.9,1600,70), [rect]);


(lib.mcDecors = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"niveau1":0,"niveau2":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// BackgroundFixe
	this.instance = new lib.niveau1_decors();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.niveau2_decors();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect, rect];


(lib.rejouer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBIQgCgCAAgDQAAgCACgDIA9g+Ig9g+QgCgCAAgDQAAgDACgCQABgCADAAQAEAAACACIBIBIIhIBIQgDADgDAAQgCAAgCgDg");
	this.shape.setTransform(4.3,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBIQgBgCAAgDQAAgCABgDIA+g+Ig+g+QgBgCAAgDQAAgDABgCQACgCAEAAQACAAACACIBIBIIhIBIQgCADgDAAQgCAAgDgDg");
	this.shape_1.setTransform(8.6,25.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AHCBIQgCgCAAgDQAAgCACgDIA4g3Iu+AAIgCgBIhCBCQgEAGgGgGQgEgEAEgGIA/g+Ig/g+QgEgGAEgEQACgCADAAQADAAACACIBDBCIABgBIO+AAIg4g3QgFgGAFgEQACgCADAAQADAAACACIBJBIIgFAEIAAABIhEBDQgCADgDAAQgCAAgDgDg");
	this.shape_2.setTransform(62,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai8B1IAAgcQAIACAJAAQAKAAADgFQAEgEAAgLIAAiLIAkAAIAACQQAAAWgMALQgMALgXAAQgNAAgKgDgADrAvQgSgRAAgfQAAghARgSQAQgSAdAAQAcAAAPAQQAPAPAAAdIAAAPIhUAAQABAQAIAIQAKAJAOAAQAKAAAMgCQALgDALgFIAAAbQgKAFgKADQgJABgRAAQggAAgRgRgAEGglQgHAGgBAOIAyAAQAAgOgHgGQgGgIgMAAQgMAAgFAIgABOA1QgMgOAAgWIAAhVIAkAAIAABMQAAAOAGAHQADAHAMAAQAPAAAHgKQAHgJgBgXIAAg+IAkAAIAACDIgbAAIgFgRIgBAAQgHAJgKAEQgKAGgOgBQgXABgMgMgAg6A4QgPgIgHgQQgIgOAAgVQgBggASgRQAPgSAgAAQASAAAOAIQAPAIAHAPQAIARAAATQAAAggRARQgRASgdAAQgTABgOgJgAguggQgGAJAAAUQAAAUAGAJQAHAKAPAAQANAAAHgKQAFgJAAgUQAAgSgFgLQgHgKgOAAQgOAAgHAKgAkdAvQgTgRABgfQAAghAQgSQARgSAdAAQAcAAAOAQQAQAPAAAdIAAAPIhUAAQAAAQAJAIQAJAJAOAAQALAAAMgCQAKgDAMgFIAAAbQgLAFgJADQgKABgRAAQgfAAgRgRgAkDglQgGAGgBAOIAxAAQAAgOgGgGQgHgIgLAAQgMAAgGAIgAFuA/IAAiDIAcAAIAFAXIACAAQAGgMAKgGQAKgHANAAIAMABIgDAiQgDgCgIAAQgQAAgKAJQgKAJAAAPIAABDgAljA/IgohCIgUAAIAABCIgkAAIAAirIAyAAQAiAAASAMQAQAOAAAZQAAAQgIALQgIAMgPAGIAyBLgAmfggIAMAAQASAAAIgGQAHgFAAgNQABgLgJgGQgJgFgRgBIgLAAgAichmQAAgRAUAAQATAAABARQgBAJgFAFQgEAEgKAAQgUAAAAgSg");
	this.shape_3.setTransform(60.4,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rejouer, rect = new cjs.Rectangle(0,0,115.3,33.3), [rect]);


(lib.mcbtnPrecedent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBIIhIhIIBIhIQACgCADAAQADAAACACQAFAEgFAGIg+A+IA+A+QAFAGgFAEQgCADgDAAQgCAAgDgDg");
	this.shape.setTransform(34.4,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeBJIhIhJIBIhIQACgCADAAQADAAACACQAFAEgFAGIg+A+IA+A+QAFAGgFAFQgCACgDAAQgCAAgDgCg");
	this.shape_1.setTransform(30,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMBIIhJhIIBJhIQACgCADAAQADAAACACQAFAEgFAGIg4A3IC/AAIACABIBChCQACgCADAAQADAAACACQAFAEgFAGIg/A+IA/A+QAFAGgFAFQgFAEgFgEIhChDIgCABIi/AAIA4A3QAFAGgFAEQgCADgDAAQgCAAgDgDg");
	this.shape_2.setTransform(15,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AGpArIAAg5IgPAAIAAgKIAQgIIAIgYIAOAAIAAAYIAfAAIAAASIgfAAIAAA5QAAAIAEAEQAEAEAHAAQAKAAAHgCIAAARQgEACgGAAIgMABQghABAAgjgAC9A/QgPgPAAgaQAAgZAOgPQANgPAXAAQAVAAANANQAMAOAAAUIAAANIhIAAQAAAPAJAJQAHAIAPAAIASgBQAJgDAJgEIAAATQgJAEgIACIgUABQgZAAgOgOgADOgJQgGAGgCAOIAxAAQAAgNgGgHQgHgHgKAAQgLAAgHAHgAA9A/QgLgOAAgbQAAgZALgQQALgOAVAAQAWAAALAQIABAAIgCg6IAXAAIAACXIgSAAIgEgPIgBAAQgLARgVgBQgVAAgLgOgABQgFQgHAKAAARQAAARAHALQAHAJAMAAQAOAAAGgIQAGgHABgTIAAgDQAAgUgHgIQgGgIgOAAQgNgBgGAKgAgyA/QgOgPAAgaQAAgaANgOQANgPAXAAQAVAAAMANQAMANAAAVIAAANIhHAAQABAQAIAIQAIAIAOAAIARgBQAKgDAIgEIAAATQgJAEgIACIgTABQgZAAgOgOgAghgJQgHAIAAAMIAwAAQAAgMgHgIQgFgHgLAAQgLAAgHAHgAiXBAQgMgOAAgcQAAgbANgOQANgOAZAAQASAAANAGIgHATQgPgGgJAAQgcAAAAAkQAAASAHAJQAHAKAOgBQAPAAAOgHIAAAUQgGADgIACQgGACgKgBQgZABgNgOgAkJA/QgOgPAAgaQAAgZAOgPQANgPAXAAQAVAAANANQAMANAAAVIAAANIhIAAQABAPAHAJQAJAIAOAAIASgBQAJgDAJgEIAAATQgKAFgHABIgUABQgZAAgPgOgAj3gJQgGAGgCAOIAxAAQAAgOgGgGQgGgHgLAAQgLAAgHAHgAFwBMIAAhCQAAgLgFgHQgFgHgLABQgOAAgHAIQgHAHAAAVIAAA2IgXAAIAAhsIASAAIADAPIABAAQAGgHAIgFQAIgEAMAAQAnAAAAAmIAABHgAlnBMIAAhsIASAAIADAUIACAAQAGgKAIgGQAHgFALAAIAMABIgDAVIgKgBQgNAAgJAJQgJAIAAAPIAAA4gAnfBMIAAiOIApAAQAbAAANALQANALAAAVQAAAXgOALQgPAMgbgBIgPAAIAAA2gAnIADIANAAQASAAAIgGQAIgFAAgOQAAgNgHgGQgIgFgQgBIgQAAgAgegsIAAgDIAVgeIAaAAIAAACIgfAfgAj0gsIAAgDIAVgeIAbAAIAAACIgQAQQgFAGgMAJg");
	this.shape_3.setTransform(101.9,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.247)").s().p("AuwEsIAApXIdhAAIAAJXg");
	this.shape_4.setTransform(77.5,7.1,0.979,0.667);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcbtnPrecedent, rect = new cjs.Rectangle(-15,-12.9,185,40), [rect]);


(lib.mcbtnJouer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBIQgCgCAAgDQAAgCACgDIA+g+Ig+g+QgCgCAAgDQAAgDACgCQACgCAEAAQACAAACACIBJBIIhJBIQgCADgDAAQgCAAgDgDg");
	this.shape.setTransform(67.8,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBIQgCgCgBgDQABgCACgDIA+g+Ig+g+QgCgCgBgDQABgDACgCQACgCACAAQADAAADACIBIBIIhIBIQgDADgDAAQgCAAgCgDg");
	this.shape_1.setTransform(72.2,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABDBIQgFgEAFgGIA4g3Ii/AAIgCgBIhCBCQgFAGgFgGQgFgEAFgGIA/g+Ig/g+QgCgCAAgDQAAgDACgCQACgCADAAQADAAACACIBCBCIACgBIC/AAIg4g3QgFgGAFgEQACgCADAAQADAAACACIBJBIIgFAEIAAABIhEBDQgDADgCAAQgDAAgCgDg");
	this.shape_2.setTransform(87.2,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkEBZIAAgUQAIACAGAAQAUAAgBgYIAAiJIAYAAIAACIQAAAXgKALQgLALgUAAQgLAAgFgCgABXAnQgOgPAAgZQAAgaANgPQANgPAXAAQAWAAANANQAMANAAAWIAAAMIhIAAQAAAPAIAJQAIAIAPAAQAJAAAJgBQAJgDAJgEIAAATQgKAEgHACIgUABQgaAAgOgOgABpghQgHAGgBAOIAxAAQAAgNgGgHQgHgHgLAAQgKAAgHAHgAgmAsQgKgKAAgUIAAhGIAYAAIAABCQAAANAFAGQAFAGALAAQANAAAHgJQAHgIAAgUIAAg2IAXAAIAABsIgSAAIgEgPIgBAAQgDAHgKAFQgIAEgMAAQgTAAgKgJgAiXAvQgLgHgHgNQgGgNAAgQQAAgaANgPQANgOAaAAQAXAAAOAPQANAPAAAZQAAAagNAPQgNAOgZAAQgPAAgMgGgAiRgdQgHAKABARQAAAlAbAAQAcAAAAglQAAglgcAAQgPAAgGAKgADDA0IAAhsIASAAIADAUIABAAQAGgKAIgGQAIgFAKAAIAMABIgCAVIgLgBQgNAAgIAJQgJAIAAAPIAAA4g");
	this.shape_3.setTransform(26.1,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.247)").s().p("Ap6DNIAAmZIT1AAIAAGZg");
	this.shape_4.setTransform(48.5,8,1,0.976);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcbtnJouer, rect = new cjs.Rectangle(-15,-11.9,127,40), [rect]);


(lib.mcbtnInstruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop("normal");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBIQgCgCAAgDQAAgCACgDIA+g+Ig+g+QgCgCAAgDQAAgDACgCQACgCADAAQADAAADACIBIBIIhIBIQgDADgDAAQgCAAgDgDg");
	this.shape.setTransform(126.4,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBIQgCgCAAgDQAAgCACgDIA+g+Ig+g+QgCgCAAgDQAAgDACgCQABgCADAAQAEAAACACIBIBIIhIBIQgDADgDAAQgCAAgCgDg");
	this.shape_1.setTransform(130.8,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABDBIQgFgEAFgGIA4g3Ii/AAIgCgBIhCBCQgFAGgFgGQgFgEAFgGIA/g+Ig/g+QgCgCAAgDQAAgDACgCQACgCADAAQADAAACACIBCBCIACgBIC/AAIg4g3QgFgGAFgEQACgCADAAQADAAACACIBJBIIgFAEIAAABIhEBDQgDADgCAAQgDAAgCgDg");
	this.shape_2.setTransform(145.8,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AHmBFIAAgTQAUAIAQAAQAVAAAAgNQAAgDgDgDIgHgGIgPgHQgTgHgHgHQgGgIAAgKQAAgOALgIQAMgHATAAQATAAARAHIgIASQgSgIgLAAQgSAAAAALQAAAFAEACQAEAEARAGQALAEAIAGQAGAEADAGQADAFAAAIQAAAPgLAKQgLAHgWABQgWgBgNgGgAEFBFQgLgGgHgOQgGgNAAgQQAAgZAOgPQANgPAZAAQAXAAAOAPQANAPAAAZQAAAagNAPQgNAPgZAAQgQgBgLgGgAELgHQgGAIAAATQAAAlAbAAQAcAAAAglQAAglgcAAQgOAAgHAKgABvApIAAg5IgPAAIAAgKIAQgJIAIgWIAOAAIAAAYIAfAAIAAARIgfAAIAAA5QAAAIAEAEQAEAEAHAAQAKAAAHgDIAAASIgKADIgMABQghAAAAgjgAAQA9QgMgNAAgbQAAgcANgNQANgPAZAAQASAAANAGIgHASQgPgFgJAAQgcAAAAAkQAAATAHAJQAHAIAOABQAPAAAOgIIAAAUQgHAEgHABQgGABgKABQgZgBgNgOgAhrBCQgKgJAAgVIAAhFIAXAAIAABCQAAAMAFAGQAGAGAKAAQAPAAAGgIQAHgJAAgUIAAg1IAXAAIAABrIgSAAIgDgOIgBAAQgFAHgJAEQgIAFgMAAQgUAAgJgKgAkXApIAAg5IgPAAIAAgKIAQgJIAIgWIAOAAIAAAYIAfAAIAAARIgfAAIAAA5QAAAIAEAEQAEAEAHAAQAKAAAHgDIAAASIgKADIgMABQghAAAAgjgAmBBFIAAgTQAUAIAPAAQAVAAAAgNQAAgEgCgCQgCgDgGgDIgPgHQgSgHgHgHQgGgHAAgLQAAgOALgIQALgHATAAQATAAARAHIgHASQgRgIgNAAQgSAAAAALQAAAFAFACQAEAEARAGQALAEAIAGQAGAEADAGQADAFAAAIQAAAPgLAKQgMAHgVABQgWgBgNgGgAG2BKIAAhDQAAgLgFgHQgFgFgLgBQgPAAgHAJQgGAJAAATIAAA2IgXAAIAAhrIASAAIADAOIABAAQAFgHAJgFQAIgEAMAAQAnAAAAAnIAABGgAC8BKIAAhrIAXAAIAABrgAjKBKIAAhrIASAAIADATIABAAQAFgKAJgGQAIgFAKAAIAMABIgCAVIgLgBQgNAAgJAJQgIAIAAAOIAAA5gAmxBKIAAhDQAAgKgGgIQgEgFgLgBQgPAAgHAJQgHAJAAATIAAA2IgWAAIAAhrIASAAIADAOIABAAQAFgHAJgFQAIgEAMAAQAnAAAAAnIAABGgAo0BKIAAiOIAXAAIAACOgAC+g1QgEgDAAgGQAAgGAEgEQADgCAGgBQAGABAEACQADAFAAAFQAAAFgDAEQgEAEgGAAQgGAAgDgEg");
	this.shape_3.setTransform(56.5,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.247)").s().p("AwFEJIAAoRMAgLAAAIAAIRg");
	this.shape_4.setTransform(78.1,8.5,0.898,0.755);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcbtnInstruction, rect = new cjs.Rectangle(-14.3,-11.5,185,40), [rect]);


(lib.PointDetection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// point
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape.setTransform(-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PointDetection, rect = new cjs.Rectangle(-3.2,-3.2,5.7,5.7), [rect]);


(lib.mcAntagoniste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vie:0,debutMort:23,finMort:49});

	// timeline functions:
	this.frame_22 = function() {
		this.gotoAndPlay("vie")
	}
	this.frame_49 = function() {
		this.agoniser();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(27).call(this.frame_49).wait(1));

	// antagoniste_v2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C94824").s().p("AgFAJQgEgKgCgRQALAHAHAJQAJAKgIAIQgCADgDAAQgEAAgEgKg");
	this.shape.setTransform(-28.1,-64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C94824").s().p("AgLABQgHgQAQgIQAPgIABAVQAAANgHAXQgNgMgFgNg");
	this.shape_1.setTransform(-16,-80.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C94824").s().p("AgWABQgKgMgPgLQgLgIgJgDQAXgRAZgEQAggFATAaQATAbAJAUQAIAPgBAHIgngZIAEAtQghgdgVgag");
	this.shape_2.setTransform(32,-63.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C94824").s().p("Ag9AbQgLgpAlgqQAbgfAhAPQAfAOAIAgQgUgJgUACQgaADgIAYQgPAqAAAqQgcgTgIggg");
	this.shape_3.setTransform(13.3,-100.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BA4221").s().p("AAHBRQgUgMgQggQgPgeAYgmQASgeAfgaQgMARgJAXQgMAfAAAXQAAAYAOAZQALATAOAMIgGABQgKAAgMgHg");
	this.shape_4.setTransform(17.2,-46.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA4221").s().p("AgeBcQgJgWgFgZQApgmAIgaQAJgdgJgfIgYgUIAPgeQAGgDAKALQAPAPANAlQAQAtgfAiQgKAMgiAXQgIAGAHAeQAFAXALAaQgNgIgNgeg");
	this.shape_5.setTransform(-27.7,-35.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCF37E").s().p("AgIgBQAOgTAOgEQgCASgHAMQgKATgPAAQgLgHARgTg");
	this.shape_6.setTransform(14.8,-8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCF37E").s().p("AAFBPQgugGgSgKQgTgLAPgDQALgDAXACIA7APIg7g3IgjAKQgHgXgCgaQgCgiALgQQAAgBAqA8QAxBIAwAhQgjAAgjgEg");
	this.shape_7.setTransform(-7.7,-8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCF37E").s().p("AAKA3QgSgYgPgbQgVgiAAgTQAAgSAiArQAZAfAeAwg");
	this.shape_8.setTransform(-29.7,-20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEF699").s().p("ABcD6QAcg4AAggQAAgugHgQQgHgTgagDQgSgDgcATQgVAOgRATQgRgWgigPQgugUg1AIQg1AIgcAWQgWARgCASQgBgiAJgjQANgwAdgYQAFhHABgqQABhNgWgSIgOgMIAGAAQAeACAhgZQAggZAUgbQAPgUADgNQgMBDAIA8QAMBQAvAMQAvAOAlgWQAcgQAMgaIAoAZQgbAmgHApQgIA2AqAaQArAbAsgGQAggDAVgSQgDAlgNAjQgRAwgbAPIgUgTQgcA8ggAzQgtBEgeAFQAagkAVgpg");
	this.shape_9.setTransform(2.2,-36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3BD8C").s().p("AhnA3QhEgwANgpQASg6BAgKQA+gKAeArQAlgtA0AAQA4AAAAA8QAABLgwArQgcAZhFAaQhEgYgzgkg");
	this.shape_10.setTransform(-2.4,-17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E98149").s().p("AirE+Qh9hJgohiQAAgNALgVQAPgbAdgXQAdgZgRgiQgNgZgdgUQAYhuBEhfQBdh/CBgSQgDAAgBAaQgCAbADAeQAJBVAnARQAfANAlgVQAcgRATgZQAWABAXAKQAgAOANAZQANAYAFAXQADARgBALQgfASgSAZQgZAhATAXQASAZAgACQAYACAVgJQAZApgBA9QgCBBgfA9QhQCYjOAYQhhgUhcg2g");
	this.shape_11.setTransform(-1.5,-39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BA4221").s().p("AgggIQAagoAfgFQAggGADAUQACAPgMAVQgaAAgbALQgmAQgSAgQAIgjATgdg");
	this.shape_12.setTransform(-15.5,-71.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA4221").s().p("AgKA7QgTgbgCgiQgDgiAZgZQASgTAYgGQgRArgNAaQgHARAGAiQAFAbALAaQgQgJgMgTg");
	this.shape_13.setTransform(17.2,-48.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA4221").s().p("AgCgIQAHgdgOgRQgLgMgRgCQADgTANgGQASgJAZAYQAbAYgUA8QgPAtgfAtQAAgyAPg2g");
	this.shape_14.setTransform(-21.3,-49.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBEE6F").s().p("AADgKQAcgVAIAIQAIAIgfAQQgXANghAMQAXgWAUgOg");
	this.shape_15.setTransform(14.1,-6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBEE6F").s().p("AgigLQgJgQgBgKQAAgKAKAEQAYAJA3BQQg0gRgbgog");
	this.shape_16.setTransform(-29.5,-20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBEE6F").s().p("AgQAiQgaghAAANQAAAOARAVQANARAOANQgJAHgRgBQgYgCgYgTQgYgSAFgZQAEgSAPgNQAPhjAAATQAAALApA+QAfAuAlAyIAogPIhBAeQgZglgSgXg");
	this.shape_17.setTransform(-8.2,-9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BD4422").s().p("AgFgPQAogTAVAVQAWAUgxALQgkAIg3AAQAcgbAdgOg");
	this.shape_18.setTransform(29.8,-68.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BD4422").s().p("AgOgMQAbgbAbAFQAaAGgnAZQgcARgwAVQANgbAWgUg");
	this.shape_19.setTransform(8.5,-105.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDF6A3").s().p("ACeDwQAXhbgFgRQgIgfg4gNQg8gOgfAmQgVgmhjAWQhiAWgaAxQgQgmgKghQgPgsAGgFQACgCAWgFQAagGASgIQA9gbAGhHQAFg9gIghQgGgYgLgCIgjgeIBGhVQgFBAAQA2QAVBHA1AGQA0AFAugZQAhgTASgaQgKAlgDAmQgDA1AQAbQAQAZAVAKQAQAHAMgDIAAgTQAUAGARAOQAXAUAFAYQAFAYgBAVQgBAQgDAJIgegUQgSA/gSAyQgaBHgNALIgCABQgIAAARhEg");
	this.shape_20.setTransform(-2.1,-37.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3C08D").s().p("AhiBHQghgogCg1QgCg1AhgZQAlgbBBAeQA5giAnAbQAjAYADA3QADA2ggApQgmAvhDAAQg7AAgngug");
	this.shape_21.setTransform(-0.9,-16.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB8D4C").s().p("AjTEbQiFhxAIiqQAmAMAegMQAngQgCg6QgDg6gWgRQgQgMgTAMQAJhMAvhCQA/hXBqgLQADA+ARA1QAXBFAkAGQAlAFAagdQAUgVAHgeQAXgCAaAHQAjAJAVAVQAVAVANAXQAJAPACALQgbAcgNAwQgOA1AYAQQAWAPAkgGQASgDAOgGIAQAoQAOA0gLA0QgmCnkZBnQh9gYhjhTg");
	this.shape_22.setTransform(-0.3,-38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BA4221").s().p("AgTARIAngiIAAAig");
	this.shape_23.setTransform(26.5,-72);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BA4221").s().p("AgTAaIAng2IAAA2QgQADgJAAQgKAAgEgDg");
	this.shape_24.setTransform(4,-106.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BA4221").s().p("AAABEQgXgXgIgjQgIghAagfQATgXAbgMQgaAdAFA9QAEAtARAsQgRgGgQgQg");
	this.shape_25.setTransform(16.7,-51.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA4221").s().p("AASAsQgCgdghgIQgUgFghAjQgNAPgFACQgHADgCgPQgEglAihIQAjhOAigRQAkgSAuAVQAQAIgCAGQgDAIgcAAQgqAAgcAiQgWAZgHAfQALgJATADQAZAEAdAbQAdAZggBEQgXAygrAyQAmhagDglg");
	this.shape_26.setTransform(-19.2,-60.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBEE70").s().p("AgQAFQgNgEgCgSQgDgUASADQANADAPAaQAMARAJAXQghgYgQgGg");
	this.shape_27.setTransform(-31.8,-22.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FBEE70").s().p("AAIA3QgdgSgFgUIgZAAQgIgUgCgYQgDggANgSQAWAvAcAoQAkA3AcANQgggJgXgOg");
	this.shape_28.setTransform(-11.8,-6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEF698").s().p("AhzDDQgwhMAIhHQgcAEgXANQggAQgCAWQgSg5gKgxQgPhDAIgQQAjAXAjgCQAxgDAVg7QASgyAFgsQAEghgEgWQAIAZAVATQAbAaApAFQAsAEArggQAggYAUgiQgVAsgFAuQgGBAAgAfQArAsAVABQARACAYgfQAYAcAPAoQATA1gNAqIg3g8IAAA8IgZAAQgPBagKAKQgDADAIhUQAJhcgOgKQgNgLgWARQgQALgOAVQgZgyggghQgsgsghAXQg6ApgIBWQgKBqBMB+Qgxgkgkg4g");
	this.shape_29.setTransform(-1.9,-31.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4C08D").s().p("AhxAsQhBhBAYgvQAYgwA3AEQApADAnAaQAYgbAlgNQAsgPAeAUQAVANAAAlQAAAkgTAqQguBnhbASQhGgngwgwg");
	this.shape_30.setTransform(-0.5,-14.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EE9C57").s().p("Aj+D6Qhhh6AUisQAxAAAmgSQAzgYgDgwQgCgwgjgCQgagBggAVQgPhLAng+QA1hTCKgFQgHAyAPAqQATA3A0ADQA1ADAHgfQAEgXgTgdQA2APAzAbQBFAkAVAlQghAggPAfQgVArAdATQAdATAkAJQAaAHATAAQAeA4gLBIQgKBGgsBBQhkCVivAWQikgXhdh1g");
	this.shape_31.setTransform(0.2,-38.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FBEE70").s().p("AgCAZQgWgBgNgXQAOABAQgCQAVgFANgNQANgOgDAQQgCAMgIAUQgMAJgPAAIgCAAg");
	this.shape_32.setTransform(2.8,-3.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FBEE70").s().p("AAJA8QgXgRgWgVIgUAAIAAhnQAAAVAqA5QAfAqAoArQgQAAgggWg");
	this.shape_33.setTransform(-11.7,-10.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BA4221").s().p("AgaAkQgrgtAVggQAdgsAggJQAfgJAMAbQgXAAgPALQgTAPAHAdQAPA1AjBCQgygcgggig");
	this.shape_34.setTransform(15.9,-54.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BA4221").s().p("AgRgMQABgYAUAIQAVAIgJAUQgIAPgSAQQgIgaABgRg");
	this.shape_35.setTransform(5.1,-110.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BA4221").s().p("ABCBCQgNgtglACQgkADgeAfQgXAYgKAbQgLg0gCgvQgDhAAQgQQAZgZAygZQA2gbAZAHQASAGAGAsQAEAfgDAnQgIgOgLgKQgQgNgPACQgQADgSANQgMAJgIAKQAuAEAaAhQAkAtgdBSQAFgrgKgig");
	this.shape_36.setTransform(-17.5,-78.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FEF698").s().p("AiXChQgMg/AChAQgeAKgKAVQgRAggGAaQgHAfAAAuQgVgMgPgTQgUgZAGgYQAFgWAPgRQAMgNgCgSQgCgNgaglQgTgaARgIQANgHAEAJQAGANAbAAQAqAABEhPQBIhUgHg+QADAWAOAQQASAUAcgIQAegIAugcQAlgWAbgWQgkBJgPBAQgVBXAlAQQAcAMBGgDQAzgDAQAhQAQAggDAbQgCAUgLALQgDgLgKgIQgNgLgTAAQgSAAgTAaQgOATgJAZQgVg7glgvQgzg/g4AAQg2AAgiAWQgZAQgFAVIAPD6QgmgdgRhVg");
	this.shape_37.setTransform(-0.7,-40.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F4C08D").s().p("Ah5ASQhFhLBCgtQAjggArASQAhANAXAfQAcgaAggMQArgQAbAYQAlAigsBXQgtBZg/APQhfgxgzg4g");
	this.shape_38.setTransform(0.5,-18.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EE9C57").s().p("AhxGhQhZgqgohCIgvhKQgVgigJgVQgTgyAGh0QAAgOAog3QA7gIAtgcQA9gkgFg1QgNhsg1AOQgUAFgSAVQgRAUgEASQgFgygCgvQgBg+AIgQQAMgXBBgbQBCgaAWALQAKAFAFAjQAEAWAGA1QANBpAlAAQAUAAASgNIAegaQAnglA0AGQBBAHAiBKQAgBFgaAjQgCgRgLgJQgQgMgaANQgSAJgBAaQgBAYAPAcQAkBDBAAAQAwAAAABDQAAAygXA/QgyBahHBJQhfBhhPAAQhAgHhCgeg");
	this.shape_39.setTransform(0.3,-46.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FBEE70").s().p("AhCA1QAggSAdgYQAlgfAFgVQAGgVAJAOQAIAJAIAXQgGAdgcAUQgeAWgsAAQgMAAgOgCg");
	this.shape_40.setTransform(1.3,-6.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BA4221").s().p("AhIAAQAJgjAWgRQAdgYBLAsQARAKgCARQgCAMgMANQAEgGgLgHQgOgHgjgHQgngIgUAbQgPAUAAAeQgSgZAMglg");
	this.shape_41.setTransform(17.7,-63);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BA4221").s().p("AACAjQAVgmgTgWQgSgWgUAMQgQAJgKAVQAHgsAVgXQAeggApAdQAqAdgmA3QgcAqg3AmQAcgaAOgcg");
	this.shape_42.setTransform(-4.9,-65.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BA4221").s().p("AgFgIQAMgMALAIQAKAIgRAIQgMAIgUAFQAHgQAJgJg");
	this.shape_43.setTransform(24.2,-76);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BA4221").s().p("AgMgMQAIgVAPALQAPAKgOAQQgLAMgTALQAAgZAGgOg");
	this.shape_44.setTransform(1.9,-111);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BA4221").s().p("AALAmQACgdgBgGQgCgOgKAAQgTAAgeAwQgWAkgTAtQggg9Aog5QAegqA0gYQALgcAUgOQAagTAbAVQAgAagQAbIgkAqQgLAMgJAvQgHAhgDAlQgbgVAEg7g");
	this.shape_45.setTransform(-17.4,-87.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FEF698").s().p("AiFDzQgkgqgCgQIgZAAIAAiHQAAgQgWAdQgWAeAEARQAFAYgXgnQgVgkAEgYQACgSANgYQAKgTAKgNIgjgZQgCgaADgWQADgdALgDQAKgCA5AbQBAASAxgrQAqglAtg0QAignAXggQgDA5AOA4QATBMAtAaQAtAbAoAEQAdADAQgJIAACQQgYgfgggQQgqgWggAYQgMg1gugqQgzgugtARQgxATgiBQQgiBSAWAwIgogtQgHAfAMAxQARBCAwBAQgfgggageg");
	this.shape_46.setTransform(-2.8,-33.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4C08D").s().p("AiBAnQg4hEA5hCQAogwA2AWQAvATAIAqQAFgYAUgNQAbgRArATQAqASgBAoQgBAdgUAbQgaAmgiAfQguApghAAQhWgpgogxg");
	this.shape_47.setTransform(-2.6,-17.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EE9C57").s().p("AjmEjQh+iNAgjwQBQADBJgQQBigWAYgyQAkhMgIgiQgJgkg2A9QgFhQAqgrQA3g6B6A4QBhAsAiBCQAdA6geAbQgUgVgoATQgoAUAFAlQgDAiAaAdQAjAnBNADQAmAdgIA+QgHA9guBHQgvBJhHA5QhOA/hVAbQiEgRhehpg");
	this.shape_48.setTransform(-1,-41.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBEE70").s().p("AgIgCQALgXANgGQASgHgXAkQgWAjgMAAQAGgTAJgQg");
	this.shape_49.setTransform(14.8,-10.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBEE70").s().p("AhnBFQAfAAAdgFQAngGAKgOQAZggBBhhQAHAXABAbQACAjgKAYIgegPQgJAqgkAVQgWAOgdAAQghAAgogRg");
	this.shape_50.setTransform(-0.7,-9.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FEF698").s().p("Ai1DKQglg3gIgZIgCApQgTgNgOgVQgUgbADgYQACgTAmgZQAhgVgIgdQgIgdgXgNQgRgJgRABQgCgTAGgQQAHgWATgDQBogPAtgOQCDgrAshYQgVB7BTA+QAiAaAlgBQAmgBAYgdQAKBHgBBFQgDBegaAjQgDgkgMgkQgQgvgYgQQgYgQgoADQgeACgaALQgVgqgfgdQgognglAQQglAQgMA2QgIAoAHAsIgygeQgGA3AFA5QAIBOAcAnQgigsgdgpg");
	this.shape_51.setTransform(-1.7,-38.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BA4221").s().p("AgLBKQgNg3AWgNQAZgPAjgDQAZgBATAFQggghgegXQgpgegQALQgLAHgdA/QgZA2gZAAQAHgXABgXQACgegKgIQgLgIgPAJQgKAHgJAMQAAg0APgpQAUg5AoAAQA8AABZBSQBeBWgOA4QgMgTgWgGQgdgJggAYQgeAWgHAoQgGAjALAkQgbg6gJgqg");
	this.shape_52.setTransform(11.2,-72.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BA4221").s().p("AAPA7QgIgjgPgVQgLgOgSAEQgNAEgPAMIgIAJQgJAKAEgGQAEgGAJgHQAKgQAHgpQAHgqADgGQAIgPAeAGQAfAGAeAXQAbAUgMAsQgJAigVAVQgTATgGAuQAAgXgGgag");
	this.shape_53.setTransform(-14.2,-94.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F4C08D").s().p("AiXAoQhIhPBQhFQA6gzA6AeQAzAaAHA3QAFgfAVgTQAdgaAtAQQAtAQAIA3QAGAogOArIiqBfQhngqg2g7g");
	this.shape_54.setTransform(-1.7,-21.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EE9C57").s().p("AkAEnQiAiYBSjgQBRgWBHgiQBegsAOgoQANgogDgjQgBgagJgOQAMgnAcgdQAkgoAwADQA+ADA/BWQA7BQgEAzQg7AKgiAbQgvAjAjAwQAiAvAhgBQAYgCAOgYQBCAMAHBRQAGBLgtBjQguBlhMBGQhVBPhbAHQiegjhghxg");
	this.shape_55.setTransform(-0.8,-45.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BA4221").s().p("AgCADQAQgVAXgCQAPgCAKAGQgOgYgQgUQgVgagNAAQgKAAgPA6QgRA+gcAOQgQAJACgRQABgHANglQAbhQgbgWQgagVgVARQgPANgIAaQAEghAMgdQAPgoAYgIQARgFAoASQAlASApAfQBlBOgHA2QgBAKgaADQgQACglAAQgZAAgOAMQgPAMgKAkQgIAcAgBDQhdheBFhWg");
	this.shape_56.setTransform(11.3,-72.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BA4221").s().p("AATArQgGgngKgKQgLgMgmAVQgYAOAEgEQALgLAFgxQAFgyAEgEQAGgGAiAVQARAKAqAeQASAOgQA0QgNAogYArQAAgfgEgdg");
	this.shape_57.setTransform(-12.3,-97.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FBEE70").s().p("AgJBiQgIgHgBgIQgGAIgPAHQgUAKgdAAQgdAAgNgbQgKgTACgYQBDAZASAAIBFAAQAbAAAjhaQAihWAOAHQAQAIgDAmQgDAcgKAfIgeAAQgRAlgUAeQgbAqgQAAQgQAAgJgKg");
	this.shape_58.setTransform(-2.6,-8.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEF698").s().p("AikDYQgMghgNgFQgNgGgLAYQgIARgDAYQhZiQAigBIAMAHQAPAFAMAAQAngBgDhCQgFgagPgTQgTgcgaAAIAPgpQA2ASA3gCQBKgBAggnQA7hLA8hbQgJBHAOBAQATBXA4ATQA3ASAmgXQAcgQAJgeIAADSQgTgIgRABQgWAAgCARQgFAegKATQgEgUgMgWQgPgdgYgNQgOgIgIgVQgIgagFgNQgVgrhKALQhCAKgjAeQgbAWgBAWIgyAAIAACwQgFgcgKgYg");
	this.shape_59.setTransform(-1.5,-41.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4C08D").s().p("AhwBOQhAg+AVhpQANg3BMAUQA5APA/AtQARgRAWgJQAegMAVANQAPAKACAjQACAlgOAlQgnBkhqAAQhFgHgvgtg");
	this.shape_60.setTransform(-1.4,-17.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EE9C57").s().p("AkAEvQh+iaBYjoQAegqAkgiQAxgvAjgCQAsgEgvAwQgtAvggAJQgPAEALAQQALAQAZADQBMAJBch7QBMhogQgpQgLgfgxALQgCgeAOgaQARgkAogIQA4gMBdBbQAnAmASAjQAVAmgMAUIgbAOQgbAPgQAPQg0AwAvA/QAnA1AkgDQAagDAOgbQAYA+AGBGQAHBgglA4QgQgFgOAGQgUAKgFAdQgKA2hCA9QhRBLhcAAQiegihehyg");
	this.shape_61.setTransform(-1,-45.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FEF698").s().p("ADbCFQAAhNgVgVQghghg9gDQhAgFgHApIgZA8QgMghgXgZQggggglAFQglAFgbAjQgTAagHAdIhBgyIgUAoQgBgkABgkQAEhEAQgdQA3ADA2gKQBIgQAYglQAYglAhgkQAagbAVgPQAIA1APAwQAUA/AWALQAsAWBqAhQgUAMgMAWQgQAfAIAiQAIAjANAdQAKAVAJAKIhBBLQAKg8ABg5g");
	this.shape_62.setTransform(-3.8,-37.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BA4221").s().p("AgbAAQgEgtAQgOQAPgNAOADQAKACAFAIQgFAAgHAHQgKAKgHASQgIATgEAfQgDAXAAAVQgKgkgCgig");
	this.shape_63.setTransform(27.1,-30);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BA4221").s().p("AgQBHQAFgiAPgCQAQgDATAKQAOAIALAKQgOgqgggtQgrg/g3giQAqAJAmAXQAzAeANArQANApADAjQACAZgDANQgUgMgTgIQgagLgKAGQgKAGgFATQgEAPAAAPQgEgdADgZg");
	this.shape_64.setTransform(13.6,-78.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BA4221").s().p("AgcgdIgoAUQgCgWAGgTQAIgaASgDQATgCAJAPQAHAMAAAPQAEgFANgDQAQgEAVACQAVADgEAvQgDAjgOAsg");
	this.shape_65.setTransform(-14.1,-102.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BA4221").s().p("AA6g+QAFAagBAYQgBAfgNAIQgNAJgLgCQgIgBgDgGIhKAjg");
	this.shape_66.setTransform(-20.8,-66.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FBEE70").s().p("AgiAjQgVgLgSgZQgPgTgGgTQBEAaARAJQAPAHAkgCQAbgBAagEQgbAWgrABQgfABgcgKQAOAQADAIQACAGgFAAQgEAAgKgFg");
	this.shape_67.setTransform(-13,-3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBEE70").s().p("AggAAQAXAAARgCQAYgEABgIIAAAdQgaAAgngPg");
	this.shape_68.setTransform(4.8,-3.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FBEE70").s().p("AgZBWQALgcAGgcIAOAAIAAifQAMgHAMgCQAQgCAFALQAJASgJChIgZAAQgUArg9AuQAQgQAOglg");
	this.shape_69.setTransform(5.4,-19.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F4C08D").s().p("AhjBnQhCgnAKhiQAJhZA/AGQA3AGAlA5QAagmAfgUQAqgaAaAdQATAVADAnQADAngOAmQgkBhhkAAIgQAAQg2AAgmgWg");
	this.shape_70.setTransform(-3.4,-17.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EE9C57").s().p("AkWEnQiJifB3jhQBOAaBOgRQBqgXAqhlQAqhkAQhLQAMg2gFgVQA7AVAsAtQA8A+gIBNQgjAUgSAgQgYAuAbAvQAaAwAmADQAcADAXgTQAcAfARArQAXA6gNAvQgVgGgPALQgQAOgDAkQgDAmAFAVQAFAVANAKQgvBFhIA4QhgBLhaAAQi3gqhnh2g");
	this.shape_71.setTransform(-1.8,-46);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BA4221").s().p("AAGA8QgfgjgIgfQgKgrAcglQAUgbAfgOQgVATgJAdQgLAmAVAjQAWAggEAsQgDAhgPAZQALgtgVgXg");
	this.shape_72.setTransform(27.4,-34.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BA4221").s().p("AAPBLQgbgLgbATQgRAMABgGQACgGAOgOQAngoAUADQALACABgHQABgHgJgKQgXgagoAAQAxhCgFgUQAZAdAOAxQAUA/gOA/QgOgTgVgIg");
	this.shape_73.setTransform(19,-81.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BA4221").s().p("AgQgYIAiAPIAAAYIgiAKg");
	this.shape_74.setTransform(-17.2,-110.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BA4221").s().p("AgCAKIgZgOIA2gtIAABjg");
	this.shape_75.setTransform(-11.2,-104);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BA4221").s().p("AgSgNQADgPAHgIQAIgKALANQAKANgCAZQgBASgHASg");
	this.shape_76.setTransform(-15.1,-69.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FBEE70").s().p("AhFAoIA8geQAJgiARgVQAWgeAVAQQAVAQgVAiQgQAZgdAYIhUAZg");
	this.shape_77.setTransform(6.5,-5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FBEE70").s().p("AgiAXIgPAZQg4hcgEgDQAaARBOAWQA3AQA8APIAAAZQgQAAiAgZg");
	this.shape_78.setTransform(-14.5,-3.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FEF698").s().p("ABpB+QAWhjgQgbQgFgMgQgCQgWgEggASQggATgEAhQgDAZAJAXQgXgwgcgdQglgpgVASQgVASgSAwQgOAigHAjIgjgjIgyAAQgKgyAIg8QAKhRAqg1QBAAGBHg+IA0gwQAbgZAUgGQgPA7AFA1QAIBIAvAQQAwAQAggMQAXgKAHgTQAfAXATApQAYA2gTA9QgMgcgUgWQgagbgbACQgFgEgSB5QgcCFgxAeQAchRAQhJg");
	this.shape_79.setTransform(-4.1,-32.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F4C08D").s().p("AiWA+Qg9hJBYhsQAkgYAoAQQAqAQALA0QAFgdAcgOQAagNAhAEQAiADAVATQAZAUgCAeQgEBAg3A2Qg5A4hEAAQhigSgsg3g");
	this.shape_80.setTransform(-3.1,-15);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE9C57").s().p("AgdG/QhpgKhYg6Qh3hNgIiCQgIiCAnhQQAdg8AogOQB7gfB1hKQCdhkAviCQAgAMAQAsQAVA7gYBaQg+gJgmAVQg0AbAgBHQAoBZAvgTQAlgQAQg2QAjAMAaAhQAjAsgGA8QgUAHgQAOQgVASACAVQACANALAIIAVAMQAaASgPAxQgDAMgeApQgmA0gtArQh8B7hwAAIgRgBg");
	this.shape_81.setTransform(0,-45.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BA4221").s().p("AgaByQgQgggQgxQgQgyAxg3QAigqA0gcQgTAYgPAaQgVAlAAAXQAAAZAWATQAbAYAGARQAIAUgcAeQgUAWgdASQgHgGgLgXg");
	this.shape_82.setTransform(25.1,-38);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BA4221").s().p("AgSgHQgFgZAXABQAYgBgFAZQgEAQgPAXQgPgXgDgQg");
	this.shape_83.setTransform(-26.2,-60);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BA4221").s().p("AgKgEQgCgPAMAAQANAAgDAPQgBAKgJAOQgIgOgCgKg");
	this.shape_84.setTransform(-12.7,-114.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BA4221").s().p("AgOgFQgDgYARgDQASgCgDAZQgDASgMAYQgLgWgDgQg");
	this.shape_85.setTransform(-9.2,-108);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BA4221").s().p("Ag5gZQAIhbANgFQAKgEATAUQATAUASAhQAvBSgOBEIhAAAQgSAAgVAJQgQAHgKAJQAChUAHhAg");
	this.shape_86.setTransform(19.4,-87);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FBEE70").s().p("AhRBDQAdgIAhgcQAqgmAYg8QANAIAKAMQANAQAAAOQgBANgPAPQgKAMgOAJQgZAQgdAKQgdAKgXAAQgKAAgIgBg");
	this.shape_87.setTransform(9.5,-8.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FBEE70").s().p("AAVBQQgtgOgegXIAAAZQglgYgbg2QgSgogIgpQASAtBGAyQAzAmA3AaIAPgZIBQAtQgWAEgWAAQgnAAgpgMg");
	this.shape_88.setTransform(-16.7,-11.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FEF698").s().p("AAMCPQAKgugRggQgUgqg+APQg8ARgfAjQgYAbAAAaIgxgnQAEglAMgkQAPgwASgTIBMhKQAFARAMAMQAQAQAWgGQAUgFAYgrQARgiALgnQACAIAjAIQAYAFAKAMQAIAKgDAIQgRASABARQAAAZAlAKQAkALAfgCQAWgCALgHIAjAjQgMAJgLARQgNAWABAaQAAAuAOA4QgGgTgOgKQgSgNgbAQQgaAQgVAaQgPATgIATg");
	this.shape_89.setTransform(-5,-40.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F4C08D").s().p("AhmBEQg8guANg6QANg6AngRQAdgMAdAMIAsA8QAcgWAggNQArgSAbANQAUAPgDAjQgCAhgUAkQgyBahLAAQg+gPgtgjg");
	this.shape_90.setTransform(-3.2,-15.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE9C57").s().p("Aj7EHQiDhyAljGQAVhPCFhlQBjhLBvg3QANA4AYAyQAiBEAnAQQA1AVA3ghQA0gfAAglQAeAYASAcQAaAngOAYQgIAPgSAGIgfAJQgiAJALAuQAMAuAVAMQARALAAAKQAAARgRAvQgWA9giAzQhnCaieAAQiLgNhhhUg");
	this.shape_91.setTransform(1.8,-37.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BA4221").s().p("AgQAAQgEgPAUgGQAVgFgEASQgDAMgOATQgNgMgDgLg");
	this.shape_92.setTransform(-10.2,-110.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BA4221").s().p("AgLAAQgPgNAQgFQAPgGAIARQAGAKAAASQgUgLgKgKg");
	this.shape_93.setTransform(-28.2,-61.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BA4221").s().p("AgKgKQAEgSANAIQANAIgKAOQgIALgOALQgCgVAEgNg");
	this.shape_94.setTransform(-14.9,-76.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BA4221").s().p("AgkBUQACglgKgfQgLgfgHgwQgGglgBgcQAlgHAiAWQAyAfASBKQgQgOgQgHQgXgKgKALQgIAJAKAqQALAugNAWQgMAVgRALQgLAIgJAAQAHgUABgbg");
	this.shape_95.setTransform(18.8,-90.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BA4221").s().p("AABCDQADghgOgWQgXgbgPgcQgQgcAPg4QAKgqAVgmQgVAxAiApQAHAKAXAVQATASAHAKQARAcgiBGQgNAbgLAKQgDADgDAAQgEAAABgNg");
	this.shape_96.setTransform(27.6,-33.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FBEE70").s().p("AA7hTQAIgYgBA0QgCAmgFA6IgegPQgTAXgWASQggAYgVAAQBuiDAOgrg");
	this.shape_97.setTransform(9.8,-8.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FBEE70").s().p("AAXA8QgSAAgRgEQgYgFgLgLQgKgLgGgiQgEgbABgbQAKASAoAiQAcAZAeAWIAaAAIAAAUg");
	this.shape_98.setTransform(-7.5,-5.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FBEE70").s().p("AAJAtIgdAAQglgcgWhFIgJglQAKAUA5A5QAzAxA7A1QgPAAhBgtg");
	this.shape_99.setTransform(-23.1,-12.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FEF698").s().p("AgpCUQgzgngbAGQgaAGgfAeQgWAXgQAaIgZg3QAqgfAegkQApgxgIgdQgKgngVACQgPACgOAVQATg3Aqg1QA3hHBFgVQgRA3AJA4QAMBLA8AcQA9AdAjgGQAagEADgTQAcAmARAwQAYBDgOAvQAAgQgRgRQgXgWgoAAQggAAgoAaQgfAUgWAYQgignglgcg");
	this.shape_100.setTransform(-1.8,-44.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F4C08D").s().p("AhoAvQhKg+AYg7QAYg6A5AMQAqAIApAmQAmgiAmgMQAzgQASAqQATArgzBJQglA3g4AwQhPgfg3gvg");
	this.shape_101.setTransform(-2.3,-13.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EE9C57").s().p("AACF0QiVgFhohYQiNh3AojeQAVh0CBhdQBfhFBtggQADAyAVAyQAcBCAwAYQAvAYAxAHQAkAEAXgFQAMgZAIgfQAKgqgFggQgEgVAMAHQAMAGAPAZQAoBAgUAiQglAAgYARQggAXANAtQANAtAlAVQAbAQAcgCQgcCHhOBpQhkCHiKAAIgQgBg");
	this.shape_102.setTransform(1.1,-36.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgcA9QgogwgGgnQgDgaANgYQAMgYAXgLQAZgNAoAMQArALgEAZQgCARgeAPQgWAKgdAGQAjgFANAWQALAQgFANQgDAHgSAXQgJALAAAYQAAATAGARQgdghgVgZg");
	this.shape_103.setTransform(-2.3,-12.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#71CDE4").s().p("AgNBKQgXgfgagXQgmghAeg1QAdg1A6AAQAoAAAPAcQALAUgGAWQAFANACASQABAWgIAQQgDAGgjAtQgbAhADAQQgIgTgUgbg");
	this.shape_104.setTransform(-1.5,-12.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AANBTQgWgGgVgSQgIAIgVgBQgPgCgQgFQgFgMgBgQQgCgVAIgPQAIgQAQAEQALACAKAKQAFgTAMgTQAPgaARgLQATgKARAJQAMAHAHAOQARADALAKQAPAOgIASQgJAUgRgHQgegNgEAAQgRAAACANQADALAMAAQAQAAAOAUQAPAWgUAXQgKAMgRAAQgJAAgKgDg");
	this.shape_105.setTransform(-2.9,-19.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#71CDE4").s().p("AgJBUQgLgYgTgKQgmgSgQgMQgbgUAGgnQAAgIBGgdQA0gWA+gVQAPBBAAAPQAAADARAWQAQAVgDAXQgCATgUAMQgWAOgkAAQgKAfgIAIQgFAGgMAAQgBgSgIgSg");
	this.shape_106.setTransform(-0.5,-12.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgfAwQgOgPgLgFQgCAOgHAIQgKALgQgIQgQgJgGgJQgFgHACgFQgJgCgFgIQgIgKACgOQADgRALgGQAIgEAIACQAOgaAYgWQAhgcAiAAQAiAAAXAiQARAZAFAfQAAAfgHALQAVgRAfAFQAZADgUAdQgTAcgVAAQgXAAgWgKQAAAKgDAJQgEALgIAAQgIAAgGgIQgEgFgCgHIgTAtQgGgzgOgOgAAIgBQAAgGgDgEQgEgGgHAAQgEAAgCgCIAAgGQACgMgLAAQgKAAgGAIQgEAFAAAHQgHAAgFADQgIAEAAAJIBFAAIAAAAg");
	this.shape_107.setTransform(-0.2,-19);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#71CDE4").s().p("AAHBxQgOggABgpQAAgZgQgCQg2ACgbgCQgygDAGgkQAGgnBHggQA4gZAVAAQAWAAAVAQIAlAjQASgCARAEQAWAEADAOQAFAagGAbQgIAkgaAKQgZAJgeAGIgZAFIgDAVQgCAXAAALg");
	this.shape_108.setTransform(-2.1,-12.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("ABIBpQgGgZgOgFQgIgCgLALIgMAJQgHAEgHgCQgJgCgKgHQgHgGgDgFQgCAGgGADQgJAEgNgDQgNgCgHgJQgFgHAAgHQgYASgVgBQgbAAgDglQgCglATgIQAOgIATAJQAFAKAIAHQAJAKAIgDQAIgCgBgLQgCgHgFgJQgKAFgHgDQgKgGACgVQADgVALgBQAHgCAJAJQgCgWALgRQAOgXAgACQAmADANAnQAKAcgHAUQALAAAIADQALAEAAAIQAAAHgLAEQgIADgLAAIAPAKQAlgKAbAGQAlAHgGAlQgFAlgdAKQgKADgKAAQgMAAgOgFgAADggQgFADgMAMIgDADQgQACgLADQgQAFAIAEQALAHAWgKIACgBQASAAAHgCQAOgFgFgNQgDgJgHAAIgEABg");
	this.shape_109.setTransform(-3.2,-25.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#71CDE4").s().p("AAeBTQgDgLgFABQgIACgEgHIgLgTQgFgKgDgQQg4AIgrgHQg7gJADgkQACglAUgOQAPgJASAFQABgcAVgXQAbggAzgCQAxgDAWAZQAQASgDAZQAdABAZAQQAhAVADAlQACAkgmAVQgbAPglACQgCAkgFAcQgIAogKAGQgHhDgDgNg");
	this.shape_110.setTransform(-4.5,-16.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAFBYQgGgFgBgFQABAGgGAEQgJAFgVAAQgVAAgLgHQgIgGAAgHQgfALgZgDQgigEAAgdQAAgdALgJQAIgHALAFQAFgeATgbQAagkAogGQAogFANAQQALAMgFARIAZAAQABgMALgJQAOgLAYACQAhAEAbAhQAbAggHAZQgHAZgiAVQgfATgcAAQgFAFgKAFQgMAFgNAAQgOAAgIgFgAhqAwQADAPALAAQAJgegOAAQgLAAACAPgAgMgVQgIADgCAHQgCAFACAFQgPAEAAAPIAnAAQAKAAAAgEQAAgDgFgGQgEgGAEAAQAIAAAHgKQgQgLgLAAIgHABg");
	this.shape_111.setTransform(-3.7,-24.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#71CDE4").s().p("AAlBOQgIgKgOgcIgNgbQgNAFgXACQguAFgvgMQgogLgJgfQgHgXALgYQAlgYAwgTQBBgZAsADQBVAFAUAEQArAHAHAYQAJAhgYAnQgeAtg8AHIAABGIgKAKQABALgGALQgGAMgOAGg");
	this.shape_112.setTransform(-3.7,-14.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgfBhQgNgCgHgLQgFgIAAgJQgJALgMACQgQADgNgQQgIgNABgJQACgGAFgCIgZAAQgEALgJAEQgLAGgQgLQgWgOAYgSQAYgRAnAAIAAgPQgSgHgJgKQgLgOANgOQARgRArAFQAnAGAVAQQAFAAAGgFIAKgLQAMgNAIgGQAPgKASAAQAkAAArAbQAsAcgDAZQgEAagWANQgWAOglgEQADAOgGAMQgIARgYACQgYADgQgEQgMgEgDgFQgGAMgIAJQgKAKgLAAIgEgBgAg9AJQgGANALAAIAKAAQAAAJAEAGQAFAIALgDQAKgCAGgHQAEgGAAgFQAnAKAFgKQAFgKgFgFQAHAAACgDQAEgEgIgHQgIgIgEAIQgDAFAAAJQgGgTgJAAQgKAAAAATIgnAAQAAgTgKAAQgLAMgEAJg");
	this.shape_113.setTransform(-5.2,-26.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#71CDE4").s().p("AAqCCQgBgZAIgQQAMgZABgUQABgXgOgHQgGgDgWAJIgtATQhFAZgqgeQglgbgMglQgIgcAHgWQATgPAVAAQgJgTAAgRQAAgWATgCQAigFBuAeQAegSAkgJQAvgMAbAOQAaANAKAdQAHAWgDAVQgOAVgVARQgdAYgaADQABAZgBAZQgCAhgIALQgSARgIALQgOATAAAcQgFgQgCgSg");
	this.shape_114.setTransform(-4.8,-16.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAvCvQAFgVANgQQASgVgJgiQgHgfgRgEQgFgCgHAEIgRALQgYASgSAHQggAOgkgCQgUgCgNgJQgHgGgJgOQgIgOgIgFIgNgGQgMgEgGgEQgJgGAAgKQAAgoAVgfQAbgmAvAAQAuAAARAbQANAWgLAVQgJATACAQQACAVAUgHQAZgJAVgTQAXgWAAgYQAAgPgKgPQgHgJgNgNQgNgNgCgFQgGgWASgeQAZgoA6AHQA6AGAYAtQANAaAAAhQAAARgfAKQggAMgggOQgQgJgNAVQgOAWASAVQAPARAGAUQAEAMADAhIACAMQABAPgKASQgGAKgQAUQgQASgFAKQgKAQACANQgCgMAEgQg");
	this.shape_115.setTransform(-5.2,-23.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#71CDE4").s().p("AA2CxQgCgaAKgTQAPgagDgWQgDgXgTgEQgHgBgMAJIgaAWQgqAfg+gGQhFgGgagxQgUgmAKgkQAIgaA9gQQA9gRAPATIAUAyQALAcAYgJQAcgKAXgaQAVgZgIgIQgZgNgRgNQgfgYAJgZQAMgjAjgZQAogcAlANQAtAQAZApQAbAsgWAnQgRAggogDIgZgCQgLAAgCAIQgCAKAPAdQARAgAAAhQAAAfgfAlQgiApgFAfQgHgPgBgUg");
	this.shape_116.setTransform(-6.4,-22.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("ABaCIQgPAEgFgOQgCgIAAgZQAAgUACgRIgUgFQgQABgLgGQgQgJADgVQADgUAVgCQARgBATAIQAHgIANgGQAKgFAAgjQAAgEgSgLQgSgJgGgGQgNgKAAgKQAAgZAEAAQgTABgLgFQgRgIAIgSQALgZAXgIQAVgGAoAEQAuAEAXAPQAfAUAAApQAAAogMAUQgJAPgOAAQgOAAgQgZQgLAIgLALQgNAPAAALIgUAdQgCAGABAHQABAJAFADIAEABQASAJAKAIQASAQAAAVQAAASgKANQgHAKgIAEIgPA8gAgiCIQAggGANgXQAKgRgBgTQAFAKABAOQACASgIANQgIANgSABIgDAAQgNAAgMgEgAi9BpQgPgVAAgwQAAgdAigYQAZgSAfgIQAbABAZAMQAgAPAGAaQAFAagVARQgQANgXAEQgFgiAFgQQADgIgHgGQgEgFgHgBQAAADgDAEQgEAFgIADQgPAFgeAAQAFAQgKAiQgFASATAVQAPAPAVALQg7gCgVgdg");
	this.shape_117.setTransform(-8.5,-27);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#71CDE4").s().p("AgsBSQgsgVgDgrQAAglArgqQAsgqAgAHQAlAIASAgQAUAigZAeQgSAYgdAKQgUAIgRgCQARgNAHgTQAJgVgOgLQgQgOgTARQgSAOAEARQAFATALAQQAQAWAgAXQgnAAghgQg");
	this.shape_118.setTransform(-20.3,-21.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#71CDE4").s().p("AgCB4QgGhGgbgNQgCAmgVAYQgdAig1gQQAggJAXgSQAfgYgGgdQgMgKgFgRQgGgVANgVQAOgVAZAEQATADAQAOQAFgZgEgVQgGgdgYgFQghgIgKgUQgJgTAHgmQAHgkBIACQBIACAXAgQAzBEgVAqQgIAPgsAJQguAJgHAMQgIANACASQABAMAFALQAMAIAJAQQAMAWgDAYQgEAngPAmQgSAtgbAcQAGg8gDg0g");
	this.shape_119.setTransform(-0.4,-23.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("ABjDeQgUgWgFgcQgEgaAQgDQgNgBgJgUQgDgJgCgYQgBgQgCgGQgDgKgJAAQgLAAgFAUQADAPgBAFQgDAFAAgIQgBgIACgJQgDgTgKgfQgEgKACgPQADgUAOgTQALgQATgCQAMgCAYAEQAUADAIgCQAOgCgJgVQgGgPgOgRQgNAAgTgFQgagGgVgOQgdgSAjgkQAigkAnAAQAmAAAXAhQAYAigEAwQgDAfgYAaQgPAPgdASQgQALgEAEQgHAKAFAfQAEAeAIAIQAMAMADAIQAHACAGAFQAHAIAAAKQAAALgNAHQgJAFgMACQAMgBAJADQANAFAAANQAAAOgHAIQgFAGgIACQAAAQgJAGQgFAEgGAAIgFgBgABUiiQgNALAOAJQAKAHATADQgBgRgHgKQgEgHgGAAQgGAAgGAEgAgtCdQAdgFAQgQQANgMACgMQADALAAAKQgBAOgIAFQgJAHgVAAIgYgCgAi0ByQgKgQAAggIAAgEQAAgUAcgWQAegWAhAAQAhAAAbAWQAaAXgLATQgJAOgTABQgOAAgNgFQgLgTgPgHQgVgKgTAVQgSAVARAcQAMAUAYAQQg0AAgSgcg");
	this.shape_120.setTransform(-10.7,-30.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#71CDE4").s().p("AhRAiQgPgiAUgnQAOgcAwgLQApgKAaAJQAcAJAGAmQAHAogpARQggANgQgUQgLgOAAgXQglAXAPAiQALAaAfAVQhMgHgTgsg");
	this.shape_121.setTransform(-21.6,-22.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#71CDE4").s().p("AgeAtQAAAJgGAPQgJAVgPAPQgTATgEABQgQAIgagNQAjgNANgbQAKgjAHgUQAJgXgLgdQgNgmAAgJQAAgQAggBQAMgBAoADIAAgoQgQADgVgEQgdgFgSgTQgZgYAvgsQAugqAkAAQAhAAAjBFQAjBDgIAnQgGAeggAFQgnACgSAIQgTAIAcAmQAoA4AGAWQAIAdgWA/QgRAvgYAuQgjgXgYjFg");
	this.shape_122.setTransform(-2.7,-26.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("ABEDQQgJAHgLgBQgPgBgKgPQgKgOABgXQAAgNAFgXIAEgWQAAgLAHgNQAGgKAHgGQgHgQgNgJQgIgGABgNQACgLAFgJIgxAAQgOAAgDgTQgCgOAEgRQARgOAUgJQAagNAQAGQANAEAEALQADAJgDAKQAGgKARgJQAPgKAAAOIABACIAEgGQAJgUAGAKIgPgyQgjAMgfAAQgogBgIgaQgLgmAbgaQAdgZAxADQAiADAkAOQAbALASAMQAIAfACAbQADAlgNALQgNAKgWAEQgQACgOgBQgIAGgWAiQgKANgLAGQgGADgLABQgGAAgBACQgDABAGAcIAMAtQAOABANALQARAOAGAYQAGAbgIANQgEAIgMAFIgCACQgKAEAAAugAhgDGQAaAAAQgLQALgJACgKQAAATgKALQgFAFgLAAQgLAAgSgFgAibC4QgagPgKgOQgQgXAGgnQACgWAkgHQAagFAfAEQAMAHAHAJQAJANgIALQgIAKgGgFQgFgFgBgKQgPgKgPAAQgOAAgMAJQgOALAAAUQAAASAMAWQAMAVAOAMg");
	this.shape_123.setTransform(-9.8,-32.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#71CDE4").s().p("ABVD2QgJgQgWglQgkg7gEgSQgDgMACgHQACgFAFgGQAHgHACgHQACgLgHgUQgHgSgOgRQgHgJgSgRQgSgSgHgJQgMgPgBgQQgDgYAXgQQARgMAXgDQACgHgDgHQgGgKgSgGQgYgGAVgjQAPgbAlglQAcgdBGATQBCARAVAhQARAbgNA0QgKAqgTAdQgLAQgeACQgWACgWgFQgMANgKARQgNAWAAAMQAAANAlAgQAUASAIAIQANAOACAKQAFAdgyChQAAgNgOgbgABHiFIgHAUQADAAADAFQAEAHAAANQADgHAHgHQAJgIALgDQAHgCgDgDIgMgHQgUgKgCgIgAhKCmQgQgGgKgOQAYgCAXgPQARgLALgMQAIALAAANQAAASgSANQgMAIgMAAQgHAAgIgDgAi1CPQgYgLgKgkQgIgaAUgXQAPgSAXgIQAggHAdADQAmADAGAVQAHAcgaATQgYARgRgJQgLgIAAgJQAAgFAGgMIAFgLQADgHgFABQgHAAgVAQQgVAQAPAdQALAVAZATQgRADgNAAQgTAAgMgGg");
	this.shape_124.setTransform(-9.9,-28.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("ABTDbQgHgFgSgJQgTgKgHgGQgMgKgCgMQgCgPAGgSQAEgLALgRQAJgRACgHQACgJgGgHQgEgEgKgFQgHgDAAgCIgTgVQgSgVgIgLQgOgSgFgSQgIgdANgQQAPgSAsADQAbACAMAPQAHAIAEATIADAMQACAEAFAAQAOAAAKgJQAGgGAKgPQAHgLAQALQAQAKgEAPQgDALgUADQgOADgSgCQgDgCgGAHQgIAJgIAUQgIAVACARQABAMAFAFQAOAHAMAPQAQATADAYQADAYgMASQgJANgMAFIAAAyQAAgKgKgIgAA/B/QgNADAKANQAIAJAPAKQACgOgEgKQgEgLgKAAIgEAAgAgBgvQgLADAKALQAGAHAOAJQAAgMgEgJQgEgJgIAAIgDAAgAhqDKQATgEAfgVQAFAQgKAJQgEAFgMAAQgLAAgSgFgAjXBuQAJgoAogIQAbgFAXAJQAQAGAJAKQAAALgEAJQgFANgLACQgKADgEgKQgDgIACgKQgCgDgIAAQgMAAgSAIQgTAIgEAdQgCAUAFAXQgngZAKgqgACXhPQgIgHgIgVQgGgPgFgHQgIgMgNgGQgfAVgcAFQgmAGgHggQgLgrALgUQAIgSAfgEIABAAQAxgGAcAEQAzAHAaAjQAdAngFAsQgEAqgZAAQgZAAgMgMg");
	this.shape_125.setTransform(-9.8,-32.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#71CDE4").s().p("AhAAsQgPgXAAgfQAAgUAggUQAggUAjAAQAbAAARASQANAOADASQgDAKgKAKQgNALgTADQgVADACgPQAHgRgDgFQgCgGgLAFQgIAEgIAHQggAfAOAXQAKARAbAIQgKACgKAAQgkAAgSgbg");
	this.shape_126.setTransform(-25.5,-19.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#71CDE4").s().p("AgTASQgNgGgKgLQAPAAAdgJQAegKALgFQgBAMgFALQgJAQgQAFQgGADgGAAQgJAAgKgGg");
	this.shape_127.setTransform(-17.7,-11.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#71CDE4").s().p("AgZDkQgegegPgeQgRgkALgjIAQgxQAAgQgWgXQgRgQgVgOQgYghgCgcQgEgmAtgLQAzgMAYAgQAHAHAIAPQAIAKAHgCQANgCAFggQADgYgCgbQgIAJgNAIQgTALgTACQgaAEgMgLQgMgLgPgqQgOgnA2geQAzgdAwAIQArAHAoBGQAnBEgMAjQgJAdguANQgcAIgbAAQgIAAgEAXQgDAQAAAUQATAHAQARQAUAWAAAdQAAAhgOAUQgYAggCAFQgIATgEApQgDAfAAAdQgPgegdgeg");
	this.shape_128.setTransform(-1.4,-28.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAlDeQgPgVACgSQADgTALgRQAIgNAIgGQgGhMgOgKQgGgDgMgCQgJgCgEgCQgHgCgGgIQgIgLACgJQABgHAFgCQgagJgTgLQgZgPAFgKQAJgSAUgNQAYgOAaAAQAgAAANAEQAPAGAAAOQAAATgoAWQAUAEAKALQAKAJAAAUQBjibgOgJQgMgJgSgBQgVgBgOALQgRANgZABQgbACgLgQQgLgUAdgmQAegmAgAAQAlABAjATQAmAXAAAcQAAAUgFAPQgEALgGADQAVAEAPAKQAUANgGASQgFATgjAHQgZAGgegBQgKAXgFAZQgIAgAIANQAGAKAQALQAMAJAEAGQAGAJgEAQQgEANgiAfQghAdgMASQgUAcAIAZQgPgKgMgPgABJAjQABAKAFANQAGgNABgKQABgNgIABQgIgBACANgAAChIQgJAFgIAKQAPAAAKgCQAPgFgGgIQgDgEgEAAQgEAAgGAEgABejUQgIAFgHALQAOgBAJgDQANgEgGgHQgDgFgEAAQgDAAgFAEgAh0DlQgMgBgHgGQAdAAAzgdQAAAEgGAIQgIAJgQAIQgNAHgNAAIgFAAgAjeB5QAXgrAngFQAcgEAYAYQAWAWgJANQgFAHgKgBQgIgBgHgFQAAgQgLgHQgPgIgdAPQgdAQACAbQACAUAPASQg5gZAZgvg");
	this.shape_129.setTransform(-10.9,-35.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#71CDE4").s().p("AhDgCQACgvA2gHQAngFAWASQAQANACATQgDAHgKAFQgNAHgTAAQgRAAACgUQABgTgUAFQgVAGgBAdQgCAXAJAaQgrgQACgsg");
	this.shape_130.setTransform(-26.8,-21);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#71CDE4").s().p("AgVAaQgLgIgHgNQAXACAZgMQASgKANgOQAAAMgGAOQgIARgQALQgIAFgIAAQgHAAgIgEg");
	this.shape_131.setTransform(-20,-13.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#71CDE4").s().p("AgTDpQgjgyAFggQAMhIABgKQACgogUgXQgJgKgSgDIgegCQglgFgGgxQgFgtAmgSQAdgMAmAFQAOgCALAFQAPAGAAAQQAAAPgHAgQgDAYAPgGQAUgJAkhAQAkhDgSgKQgIgFgJAIIgSATQgcAfgkgIQgigIgKggQgIgYAHgaQATgjAigRQAsgWAvAdQAwAdAPAhQALAZgJASQALAFAHAMQAKARgDAVQgCAVgjASQgaANggAIQgLAZAOAbQARAgAAAPQAAATgEATQgFAagLALQgUAUgHALQgLATADAUQADAPAMAeQAJAggJArQgigfgZglg");
	this.shape_132.setTransform(-3.5,-30.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAjDuQgJgYAKgYQALgYAhgZQAagTAZgMQgagGgYgTQgLgJgQgbQgIgPgFgFQgHgJgIAAQgaAAghgIQgtgMAAgTQAAggAOgcQASgmAhADQAjAEAMASQAKARgIAfQgIAJgWAGQAeAAAKAKQAJAJABATQAEAAAVALQAQAIAEAIQADAGgDADIAUgKIAAg2QgKgKAAgZQAAgNARgUQANgPAPgMQACgXgDgRQgDgZgLAAQgIAAgMALQgKAIgGADQgKAFgOgCQgYgDgQgVQgPgSAAgSQAAgRAXgRQAYgTAcADQAhAEAjAaQAlAbAAAcQAAARANAUQAJAOADAIQAEAPgEAVQgFAdgQAGQgMAEgMgJQAAAFgPAUQgIALgEABQgBABAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAAmQAOAMAKARQAOAXgDASQgCATgWANQgRAKgTADQgRANgOAVQgTAbAAAYQAAAYgJAMQgHAJgJAAQgOgKgHgRgACwhtQgQADAEALQACAHAKAJQALgMACgJQADgJgLAAIgFAAgABRjlQAAALAPgCQALgCAOgHQgNgHgMgBIgEgBQgLAAAAAJgAhqDgQgIAAgEgEQAlgJASgLQAGADgCAFQgDAHgQAFQgMAFgLAAIgFgBgAjmB7QAGgbAfgLQAYgIAbAEQAVACANAHQAFALAAALQgBAPgOAIQgNAIgFgLQgEgIACgOQAHgDgFgDQgIgEgdAAQgdAAgNAcQgKAWACAZQgMgdAFgXg");
	this.shape_133.setTransform(-12.1,-35.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#71CDE4").s().p("Ag+gKQAFgQAagaQAKgLAkADQAgACALAGQAJAEgCAcQgDAcgOAEQgKACgIgGQgFgEgCgHQAFgRgGgLQgKgPgcAIQgdAJACAiQACAbAPAdQgwgiAMglg");
	this.shape_134.setTransform(-28.8,-21);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#71CDE4").s().p("AgLAWQgNgEgLgHIBFgiQADANgCAKQgDAQgNAFQgHADgIAAQgGAAgJgCg");
	this.shape_135.setTransform(-21.4,-14);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#71CDE4").s().p("AglDAQgIgoAagTQAJgPACgVQACgegNgdQgPgiglgHQgogDgNgFQg1gTAQgxQAMgkAogkQAfgDAcAHQAkAJAFAWQAHAagMANQgPALgFAFQgIAIAgAYQAfAZAOgHQAOgHgJgNQgIgLgRgEQgNgEAOgWQAHgMAbggQARgUAFgYQADgOAAgWQAAgLgHgDQgGgDgHACQgWAlgSANQgNAKgPgFQgJgCgggSQgbgQAbg3QAbg5AqgHQAggGAjApQAZAdASApQAOAbALAdQAPAoAAAYQAAAYghAPQgZAMggAEQATAHAPAVQATAcgDArQgCArgtASQgYAKgFADQgOAJAAARQAJAnAGBqQhMhCgLg3g");
	this.shape_136.setTransform(-4.5,-31.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AArAYIgEgVQgEgIgNAAQgTAAgYAVQgZAXgaAAQgbAAAFgcQAEgVASgZQAngOAngDQA0gEATAVQASAVAAAcQAAAWgIASQgnAAgFgeg");
	this.shape_137.setTransform(-0.5,-55.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AhCAoQACgTAbgZQAagbAGgNQAFgKgHAAQAZgFAVAAQAcACAAANQAAAcgXAZQghAmhEANQgLgFACgPg");
	this.shape_138.setTransform(6.5,-42.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgWCIQgMgiANgYIAfg4QAKgXgRgKIhCgVQg1gSgZglQgVgfARgdQANgWAagMQAoABAdAKQAmAPgHAXQgKAfgOAIQgLAGgKgKQgNgNgOgIQgVgMgHANQgFALAhAYQAYASAhASQAVAGAQANQAWARAAARQAJAIAHgBQAJgBAAgOQAAgfAKgOQAeAMAWASQAfAYgDAZQgBAOgdAQIg8AgQhPAqATAtQgQgUgJgag");
	this.shape_139.setTransform(-4.6,-29.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("Ag7gFQAKgWAYgRQAfAAAYAGQAiAIAAAQQAAAPgJADQgHABgJgFQgCgGgKgGQgOgKgXgCQgYgCgIAaQgGATADAaQgagVAMgdg");
	this.shape_140.setTransform(-28.2,-22.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgpAJQASAABBgUQAAAEgGAEQgIAGgQAFQgLAEgNAAQgNAAgQgDg");
	this.shape_141.setTransform(-23,-12.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#71CDE4").s().p("Ag/AAQAIgnApgNQAhgKAZAPQAVAMAAASQAAALgXAIQgQAHgVADQAOgQABgOQABgTgZAAQgbAAgCAkQgCAZALAhQgwgRAJgog");
	this.shape_142.setTransform(-28.3,-20.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#71CDE4").s().p("AgYATQgOgGgJgKQAbAFAegJQAVgIAQgMQABAIgIAKQgJANgTAIQgJAEgJAAQgJAAgJgDg");
	this.shape_143.setTransform(-23.1,-12.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#71CDE4").s().p("AAOELQgOgZgNgFQgdgMgJgLQgTgVAHguQAEgfAbgqQAUgegLgbQgLgagWgLQgRgJgPACQgeAIgXgDQgggEAAgaQAAh4AtgFQAjgFAlAQQArASAAAfQAAAYgNATQgKAPgMAHQARABAPAGQATAHADALQAGAXAJANQAMAVANgNQAKgKgagiQgdgmAFgRQADgKAugtQAmgkgMgdQgLgbgQgGQgNgEgKAHQAJAcgJARQgNAXgpgNQgrgNAJgtQAGghAcgiQAogHAnAGQA0AJANAgQANAfAFAaQAEATgCAJQAQAFAJAPQANAVgIAdQgIAdgcAYQgVASgXAJQAYAKAQARQAVAXgLAYQgLAYgwAkQgjAagpAYQAJAHAHALQAJAQAAAQIAABkQgHgWgKgSg");
	this.shape_144.setTransform(-2.9,-30.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AivD0IAyAAIAjgeQgWAogNAAQgMAAgmgKgAAUC6QgFgmAYgOQAegQAAgbQAAgWgPgKIhAgoQAUAAAUAEQAcAFALALQAHAHAKATQAIAPAEAEQAHAGAJgGIANgOQANgPAJgDQAPgFAUAMQAVANgEAWQgDAQgOAOQgiAHggALQgpAOgIANQgQAagOAxQgQgdgDgdgAjuCCQAUggAhgEQAdgDASAXQANASAAARQAAAIgLgCQgJgBgKgFQABgJgDgGQgFgKgNAAQgbgFgVAXQgPASgHAYQgMgXATgfgAB8gGQgHgEgDgFQgugQAtgqQAogkAfgGQAVgEARAJQAUAKAHAZQAFASgKAGQgIAEgMgDQAAAUgPAPQgIAIgRgHQgNgGgMgKQABAKgCAJQgEALgKAAQgLAAgJgGgAhdggQgEgNAHgPIgUgoQAHgTALgPQAQgVAQAAQAcAAAWAZQAVAAASALQAZAPAAAdQAAAdgZALQgSAIgVgDQAAAFgKAEQgOAGgaAAQgbAAgGgRgAglhbQgFAHACAOQATAAAJgEQAMgGgPgKQgJgGgFAAQgFAAgDAFgACWjKQgXgSghAAQAMAoglAXQglAXgSguQgNgjAbgRQAUgNAfAAQAXgJAXABQAhACAQAVQAQAVgDAhQgDAZgKAVQAIgwgggYg");
	this.shape_145.setTransform(-10.4,-35.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#71CDE4").s().p("AhCAeQgFgeBCgwQAugfAUAvQAIATgCATQgCAVgLAJQgVARgNgUQgOgWASgFQAHgCABgIQACgIgFgIQgMgUgWAbQg0A6AgAQQglgHgEgYg");
	this.shape_146.setTransform(-30.9,-21.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#71CDE4").s().p("AgPAVQgPgFgMgKQAlAFAYgMQATgJAEgNQAAAKgEALQgHAOgNAJQgHADgJAAQgHAAgKgDg");
	this.shape_147.setTransform(-24.2,-12);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#71CDE4").s().p("AguDBQgOgwAYgYQARgRAFgZQADgQAAglQAAgbgbgIQgQgFg0AAQgoAAgOgKQgNgJgIgfQgHgeAcgvQAcgwAaAAQAdAAAjAWQAmAXADAZQACATgWARQgRANgXAGIAKAUQAgADAiAeQAZAUASAbIAKgkQgOgOgLgXQgPgeAAgbQAAgaAbgGQAfgGAHgWQAIgYgPgdQgKgVgSgQQAAAOgLAXQgIASgLAPQgTAHgTgIQgbgMgOglQgRgxBGgXQBFgWAlAdQAYATAMAnQAJAeAAAbQAaArAEAlQADAXgkAZQgoAagCAGQgBAGAIAIIAUAQQAbAbgJAmQgIAlgtAMQg7APgNALQgVASAKA1QAHAnATAoQhJg2gQg7g");
	this.shape_148.setTransform(-4.3,-31);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgPgJQAEgNAcgHQgHADgHAWQgFAPgDATQgPgZAFgOg");
	this.shape_149.setTransform(-35.6,-17.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAQgKQgCgLgUgFQgOgEgSAAQAygLASAbQANASgHAeQgPgagFgSg");
	this.shape_150.setTransform(-25.8,-20.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgvBIQgogJgIgdQgIgcAIgdQAJghAVgEQAggFAXAFQAIgHANgDQARgFAQAFQAaAJASAfQAUAhgOAfQgOghgYgVQgggegiAKQgiALgDANQgCAJAOAHQATABANAKQAPAOgIAYQgHAZgbAAQgHAAgKgCg");
	this.shape_151.setTransform(-0.6,-54.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("Ag/BOQghg5AVg0QATgtAhgFQATgDAhARQAZANAWASQALAVgEAPQgFAXggAAQggAAgEgXQgEgPAKgVQgVgHgUACQgbAEgGAVQgFAUAoAhQAdAZAoAVg");
	this.shape_152.setTransform(-14.8,-41);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhHAnQgNgYAVgaQAQgUAagOQAbgIAZgCQAigDAIANQAIANgNAaQgJARgQASQgfATgdAHQgKACgJAAQgZAAgKgSg");
	this.shape_153.setTransform(7,-40.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AhkA+QgCgUALgLQAYgXAGgPQALgcgagXQAOAJALAQQAPAVAAAXQAaAFAWgFQAfgIAFgaQAGgagJgQQgGgLgLgCQAKgHALgDQAOgFAFAFQANANANAbQAPAigQAGQgEACgUAFQgJABgMALIgPAWQgGAJgYAJQgTAIgQgKQgOgIgPAKQgQALgIANQgGAJAAAHQgHgOgCgPg");
	this.shape_154.setTransform(2,-23.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#71CDE4").s().p("AAiAMQABgUgHgFQgJgGgbgGQgXgFgUgDQAjgNAdACQAnACAAAdQAAAcgJARQgHAMgIACQAFgSABgQg");
	this.shape_155.setTransform(-26.9,-19.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#71CDE4").s().p("AgNASQgHgZAkglQgFAWgCAWQgBAgAIANQgYgHgFgUg");
	this.shape_156.setTransform(-35.7,-16.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#71CDE4").s().p("AgGAOQgPgDgNgHIBFgTQAAAGgDAIQgFAJgHAGQgEACgHAAQgHAAgIgCg");
	this.shape_157.setTransform(-23.6,-7.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#71CDE4").s().p("AiJCUQgggMAJg4QAShAAFgWQAFgYAiAFQAaAEAeAPIAAhQQAAgSAegPQAVgMAcgFQABgOARgDQAWgEAoAVQAnAVAGAlQADAcgNAYQgJg3gtgMQghgIgmAPQANgFALAIQAPAKAAAgQAAAggYARQgSANgWACQADAZgHAUQgLAcgdACQgdADgNgXQgKgSACgWQgCgIgEABQgGABgIAVQgIAVAcAaQAUATAeAOQgQAMgWAGQgNADgMAAQgRAAgPgGg");
	this.shape_158.setTransform(-6.3,-46);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#71CDE4").s().p("AhpCIQgmg/AVggQAggvAFgRQAHgWgSgSQgKgJAIACQAHABAMAKQAkAcgDAcQgCAPATgDQASgDATgPQA2grgsgfQgwgigMgYQgMgaAWgaQAbgfA6gBQBAgBALAwQAIAlgYAXQgSARgaADQAVARALAXQAQAfgNAYQgLAThWAhQhNAeAAAbQAAAbAPAnQAKAdAOAZQgtgsgcgug");
	this.shape_159.setTransform(3.6,-22.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AilBuQgUgoAag8QASgpAkgDQAagDAZASQgOhQAwgeQAfgUBKAAQAoAAAZAeQAUAWAFAcQgOgRglgUQgqgVgbADQhFAJAAAuQAAAYAQAQQAOAPAOAAQAHAAgCgYQgDgaAIgFQALgHAGATQAFATgHAdQgGAUgeAAQgWAAgagLQAFADAEAJQAGAMAAAQQAAAVgXAOQgVANgQgIQgOgHAGgMQAFgLANAAQAIAAACgNQABgKgBgMQgHgPgPgBQgVgCgbAcQgcAdATApQAOAfAeAYQg4AAgUgog");
	this.shape_160.setTransform(-4.9,-46.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgVAmQgKAFgOgBQgUgBgQgNQgQgOAUgUQAQgRAZgNQAAgHAIgHQALgJAUgCQATgDALAIQAIAGACAKQABgPAdAiQATAVgEANQgDALgMAEQACAHgDAGQgDAJgLADQgKACgLgGQgIgEgGgHQgLAZgJAAQgIAAgQgZg");
	this.shape_161.setTransform(9.8,-41.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AhqBLQgOgNADgOQADgMAbgYQAZgYAAgFQAAgJgGgRQgHgSgHgBQAOABAKAGQAOAKgDASQgEAdgLAZQAIgGALgGQANgHAIgBQAIABAKAHQAGAGAFAGQAZgOASgQQAZgZgDgTQgCgSAGgLQAEgJAHgBQAOABAJALQANANgGAYQgFAZgsAaQggATgmAPQACgEgEgDQgEgEgOAAQgNAAgQAZQgQAagKgBQgQAAgNgMg");
	this.shape_162.setTransform(3.9,-23.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#71CDE4").s().p("AAGAPQAAgGgHgBQgLgCgBgBQgLgPANgOQAKgKARgFQgQAQADAHQACAEALAIQAJAJgTAjg");
	this.shape_163.setTransform(-34.5,-15.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#71CDE4").s().p("AgdAKQADgHAHgEQAJgIAKAAQALAAAJAIQAGAEAEAHg");
	this.shape_164.setTransform(-26.9,-24.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#71CDE4").s().p("AgKgGQAHgJAMAIQANAHgMAGQgIAEgRACQAAgMAFgGg");
	this.shape_165.setTransform(-20.3,-6.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#71CDE4").s().p("AgGgfQAPASgDAUQgCAPgKAKg");
	this.shape_166.setTransform(-21.2,-18.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#71CDE4").s().p("AiFCZQgqgDgEg8QgDgcAJg7QAEgbAtgPQAvgRAdAZQgLgcAKgoQAKgnAQgIQAUgKA8ADQBGAEAiAXQAaATgJAYQgGASgVAOQAAgXgPgSQgXgbg0gHQgrgFgKAjQgIAZALAjQADgNAGgNQAIgQAIgDQANgEAJAJQAKALgHAYQgHAZgPAMQgMAIgVAEQAABNhFgHQgdgCACgaQABgTAQgXQgFgHgNAFQgQAGgVAaQgVAbAcAgQAVAXAlASQgCAHgOAFQgOAEgVAAIgTgBg");
	this.shape_167.setTransform(-4.5,-44.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#71CDE4").s().p("AhWCsQgFgUgNgLQgVgQgGgTQgHgWAOgSQAeglAAgXIAAgxQAZAuAAANIAAAoQAsgDAhgJQAvgMAAgQQAAgYgNgRQgRgUgsgSQgwgSAXg1QAXg0A4gMQAygKAcAcQAWAWAAAeQAAAQgVAVQgPAPgTANQAKAHAHAPQAIATgFAXQgIAigoAYQgoAZg9AHQAFAegGAcQgIAngaANQABgOgDgPg");
	this.shape_168.setTransform(5.6,-26.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgHgEQgDgPAKAAQALAAgCAPQgCAJgHAPQgGgNgBgLg");
	this.shape_169.setTransform(-1.4,-28.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgDBfQgkgJgIgVQgNgiAXg/QAZhDAiAAQAaAAAEASQADAOgIASQgNgVgPADQgUAFgQA1QgQA0AdAeQAVAXAjAEIgMAAQgXAAgUgFg");
	this.shape_170.setTransform(-17.1,-41.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AghANQgHgJAFgPQAIgBAHADQAKAEAAAIQAAARAXgLQAXgJgRgVQARAJACAKQADAMggAIQgLAEgJAAQgPAAgHgJg");
	this.shape_171.setTransform(-8.8,-41.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgfA3QgTgMgEgSQgFgSAIgkQAEgYAXgEQAQgEAWAIQgPgEgLAIQgPALgEAdQgGAhASAKQANAIATgHQAHgQAJgGQANgJALAQQAKAQgNAGQgKAEgRgBQgLAIgMAEQgHACgHAAQgKAAgHgEg");
	this.shape_172.setTransform(-3.7,-53.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AACADQgRgFgPABQgMABgEADQAEgKAMgHQAPgKARADQATACANARQAKALADAOQgKgKgjgKg");
	this.shape_173.setTransform(6.3,-58.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgOAAQgCgEAIgHQAGgFAHgDIAKAnQgYgLgFgJg");
	this.shape_174.setTransform(12.5,-54.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgnAnQgegKACgYQADgXAdgOQAWgLAZgBQARADAPALQAVAPACAUQADAVgVALQgQAIgVAAIgJAAQgXAAgTgGg");
	this.shape_175.setTransform(11.3,-41.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgGgMQgQgFgGgIQgJgJAQgIQAQgIAHAJQAGAGAAANQAIAAAHAGQAKAIAAAPQAAAQgKAEQgHADgIgDIgOAUg");
	this.shape_176.setTransform(10.8,-29.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("Ag1ASQgBgPAOgKQANgKAQgCQALgBAJADQABgGAGgGQAHgHALAAQAKAAAGAHQAEAGAAAGQgjACgbAMQglAOAAAaQgHgIgBgLg");
	this.shape_177.setTransform(-0.3,-19.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#71CDE4").s().p("AgKgCQAFgKAHAGQAHADAFAKQgLADgGAAQgOAAAHgMg");
	this.shape_178.setTransform(-20.3,-4.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#71CDE4").s().p("AgHgEQgCgQAJgBQAKAAgBAQQgCALgGAQQgGgPgCgLg");
	this.shape_179.setTransform(-33,-15);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#71CDE4").s().p("AgHAMQgOgDAFgMQAGgNALAIQAIAGAJANQgJABgIAAIgIAAg");
	this.shape_180.setTransform(-25.3,-24.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#71CDE4").s().p("AgBgKQAKgSADALQAFAPgdAYQAAgPALgRg");
	this.shape_181.setTransform(-20.2,-17.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#71CDE4").s().p("AgRgMIAYgOIAKA2g");
	this.shape_182.setTransform(-2.2,-27.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#71CDE4").s().p("AACBmQglgFgOgiQgahEAlg1QAegrAcAAQANAAAJASQAGAOACASQgPgFgQAJQgUAOgIAkQgIAlAbAaQAUATAeAIQgYAJgWAAIgMAAg");
	this.shape_183.setTransform(-16.5,-40.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#71CDE4").s().p("AgfAXQgKgPAAgXQAAgLARAGQAMAEAPALQAAgLAEgIQAFgLALAAQASAAABAXQABAYgeARQgNAHgJAAQgNAAgJgNg");
	this.shape_184.setTransform(-8.2,-41.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#71CDE4").s().p("AgzAiQgTgiAcgeQAVgXAigMQgJAEgIAOQgMATgFAcQgGAbAPAIQAKAGAPgHQAAgTATgHQASgHAIASQAFAOgKAGQgIAFgMAAQgSATgUADIgEAAQgZAAgRggg");
	this.shape_185.setTransform(-3.7,-52.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#71CDE4").s().p("AAgADQgKAAgPgEQgHgDgEgJQgDgGAAgHIg8AAQAFgJAKgIQAOgLAQgCQASgDALAMQAGAHAJAOQAEAEASAJQARAIAGAIQAFAIgKATQgIANgMAPg");
	this.shape_186.setTransform(7.9,-55);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#71CDE4").s().p("AhxB6QgLgoAbgOQAdgOAnAGQAkAGAFgDQAQgLAJghQALgmgagRQgmgYgLgUQgRgfAbgoQAZgnA4AJQAVAEAQAJQAQAKAAAHQAAAggGAPQgOAggtAGQgDAAAIAJQAOARAGAdQACAagJAJQgIAHgKgDQABAOgDANQgFASgNAFQgGADgrgGQgigFgLAXQgLAVgFAeQgEAWAAARQgXgfgIgeg");
	this.shape_187.setTransform(5.9,-27.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgaA+QgXgdADgnQAEgmAhgfQAcgbATAAQALABgCAPQgCAKgHAPQhEAaAOA4QAKAqAsAoQgpgMgXgdg");
	this.shape_188.setTransform(-17,-40.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgBgBQgHgRgOgGQAQAAALAFQASAHgBAMQABANgIAHQgFAFgIAAQAAgOgDgMg");
	this.shape_189.setTransform(-6.9,-41.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgWASQgXgbANgVQAOgVAWgCQASgBAPAJQgRAGgNAMQgQAQACAPQADAQAKAPQAHALAJAIQgbgQgRgUg");
	this.shape_190.setTransform(-6.9,-52.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgNAGQgFgJACgGQACgJAPAFQAQAGABAJQAAAHgHAHg");
	this.shape_191.setTransform(0.7,-49.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AADAAQgRgFgSgEQAVgJATAKQAOAHALAPQgHgGgXgIg");
	this.shape_192.setTransform(7.6,-57.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgGgDQgBgNAHgBQAIABgBANQgBAIgGAMQgEgMgCgIg");
	this.shape_193.setTransform(14.3,-52.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAUAZQgGgCgQAAQgJAAgLgJQgMgLgIgEQgPgKAWgTQAWgUAjAOQAdAKgCAbQgBAVgQAVQAAgNgMgFg");
	this.shape_194.setTransform(12.1,-41.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgagGQgTgpASgEQAagHgLAqQgCAKASAXQAOASATASQgrgRgUgqg");
	this.shape_195.setTransform(9.1,-34.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgYAFQAMgHARgCQAUgDAAAHQAAAGgXAAIgagBg");
	this.shape_196.setTransform(6.8,-20.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgJACQgNgHAKgGQALgFAIAKQAHAHADAMQgRgFgJgGg");
	this.shape_197.setTransform(-1.9,-27.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AglAYQgOgRAjgTQAfgSAbAAQAAAIgEAIQgGALgKADQgEAAgZAXQgJAIgIAAQgHAAgGgHg");
	this.shape_198.setTransform(-2.4,-18.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgJAAQgEgJANgCQAMgDgBAKQAAAGgHALQgKgIgDgFg");
	this.shape_199.setTransform(-19.1,-15.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgMgCQgDgMAPAAQAQAAgDAMQgDAGgKALQgKgLgCgGg");
	this.shape_200.setTransform(-23.7,-20.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgOgCQgDgKARAAQASAAgDAKQgDAGgMAIQgLgIgDgGg");
	this.shape_201.setTransform(-33.7,-15.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#71CDE4").s().p("AggA6QgUgiANg1QAIgjAegPQAWgMAYACQgOANgMAVQgRAbgCAYQgCAXAQAeQANAXASASIgQABQgqAAgTghg");
	this.shape_202.setTransform(-17.7,-38.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#71CDE4").s().p("AgLANQgNgIAOgIQAKgIASgFQgCAQgGAIQgFAJgGAAQgFAAgFgEg");
	this.shape_203.setTransform(13,-51.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#71CDE4").s().p("AACAFQgXgHgNAHQADgJAJgHQAMgKAPACQAQADAIAOQAGAKAAAMQgQgKgRgFg");
	this.shape_204.setTransform(7.3,-56.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#71CDE4").s().p("AAEAUQgOgBgIgOQgIgMABgHQACgFAFAAIAsAiQgKAFgKAAIgCAAg");
	this.shape_205.setTransform(1.2,-48.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#71CDE4").s().p("AgbA5QgYgMASg8QAIglAagGQAUgEAUAMQgPAHgNALQgQAOAAANQAAANAJASQAHANAIAKQgUALgOAAQgHAAgHgDg");
	this.shape_206.setTransform(-6.3,-51.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#71CDE4").s().p("AgKAgQgQgMgKgXQAdAFAEgOQACgKgKgQQAZAJAOAPQASATgSAVQgLANgLAAQgHAAgJgHg");
	this.shape_207.setTransform(-7,-40.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#71CDE4").s().p("AAABAQgpgrgOgUQgUgdAbgmQAWggAVgFQATgFAZARQAdATgEAiQgCAagTAKQgNAGgQgDQAFgNgEgHQgHgKgXALQgbAMAdAaQAPAPAbAVQAFAHgBARQAAAOgEALQACgIgfghg");
	this.shape_208.setTransform(10.4,-35.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#71CDE4").s().p("AgLgCQgMgRAQgCQAPgDAGARQAEAMgBASQgSgOgKgLg");
	this.shape_209.setTransform(-2.4,-26.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#71CDE4").s().p("AgdgBQAKAAAxgLQAAAJgEAGQgFAJgLAAQgTABgUgOg");
	this.shape_210.setTransform(6.8,-19.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#71CDE4").s().p("AgUASQgSgPgEgQQgFgWAbgLQAfgNATAPQAOAKAAANQAAAKgsAdIgKAjg");
	this.shape_211.setTransform(-2.1,-16.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgpA5QgEgIAJgKQANgNACgYQAGgxACgJQAIgaASABQAQAAAIALQAGAIAAAKIgoAAQgIAAgJAtQgHAjAAATQAAAPAPAUQgZgFgKgUg");
	this.shape_212.setTransform(-17.8,-42.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAAAWQAJgKgNgKQgPgJAAgPQAOgCAKAFQAPAGAAAPQAAAQgHAEQgDACgDAAIgHgCg");
	this.shape_213.setTransform(-6.4,-41.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgiABQgEgkAdgIQAUgFANAJQAJAGACAKQgKAAgLADQgPAEgIAIQgIAIAGASQAEAOAHAOQgdgHgFgmg");
	this.shape_214.setTransform(-7,-51.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgQAKQAAgHADgFQAEgHAIAAQAJAAAHAJQAGAKgIAAg");
	this.shape_215.setTransform(0.3,-48.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgDAAQgMgBgJAGQAAgGAFgFQAHgIAMAAQANAAAHALQAFAIAAAKQgNgPgPAAg");
	this.shape_216.setTransform(7.6,-56.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgHADQgEgFALgGQAJgFAAAJQAAAFgFAKQgIgDgDgFg");
	this.shape_217.setTransform(13.2,-51.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgyAAQAQgpAnAAQAggBAMAVQAGALAAAXQAAAKgIgCQgFgCgHgGQAFgIgFgFQgGgHgYAAQgXABgFARQgDAOAHARQgvAAAQgqg");
	this.shape_218.setTransform(9.6,-40.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgHAHQgKgEALgHQAJgIAGAHQAEAFAAAKQgNAAgHgDg");
	this.shape_219.setTransform(-2.7,-27.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgHgFQAJgGADAHIACANg");
	this.shape_220.setTransform(-24.2,-20.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAHAIQgXAAgXACQgBgFAKgFQALgGAYgDQAYgCAIAIQAFAEgCAJQgDgCgeAAg");
	this.shape_221.setTransform(-2.4,-19.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgIgCQgCgKAKAAQALAAgDAKQgBAFgHAJQgGgIgCgGg");
	this.shape_222.setTransform(5.1,-19.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgLgIQACgSAMAFQANAGgGAPQgFAKgLANQgFgTAAgMg");
	this.shape_223.setTransform(11.8,-28.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#71CDE4").s().p("AAAANQgTgBgSADQAFgOALgKQAPgPASAAQASAAAGATQAEAMgDASQgLgKgagCg");
	this.shape_224.setTransform(7.4,-56.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#71CDE4").s().p("AgKASQgNAAAEgTQAEgTATAEQAQACABANQAAAIgHALg");
	this.shape_225.setTransform(0.6,-48.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#71CDE4").s().p("AgiAMQgRg2AlgLQAagIAPANQALAJACAQQgDgEgJADQgMAFgQAQQgPAPANAKQAIAHATACIgKAZQgGACgFAAQgZAAgNgug");
	this.shape_226.setTransform(-7,-51.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#71CDE4").s().p("AgMAdQgBgSAGgGQAFgFgUgsQAOADALAIQARAKACAOQADAMgGASQgFANgHALIgFAAQgOAAAAgQg");
	this.shape_227.setTransform(-6.2,-40.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#71CDE4").s().p("AgPBTQgWgHgIgNQgHgMALgLQANgMgCgVQgEggAOgdQARggAbAAQAVAAADASQADANgHASQgNABgOAGQgTAKgNASQgNASAPAeQAMAWAUATQgSAAgQgEg");
	this.shape_228.setTransform(-17.8,-41.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#71CDE4").s().p("AgxgCQgNg1A7gEQAugCAIAmQAFAbgPAkQABgOgGgMQgJgPgVgDQgUgCgEAXQgCATAHAYQgagTgKgrg");
	this.shape_229.setTransform(9,-38.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#71CDE4").s().p("AgLgDQgHgLAQAAQAPAAABALQAAAIgHAKQgNgKgFgIg");
	this.shape_230.setTransform(-2.7,-26.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#71CDE4").s().p("AghAIQgFgZAYgRQAUgPAOAXIAOAaQgQAAgPAPQgLALgGAOQgPgKgEgWg");
	this.shape_231.setTransform(-2.4,-17.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#71CDE4").s().p("AgKAMQgLgKANgPQAMgQAHARQAFAMAAAVQgRgCgJgHg");
	this.shape_232.setTransform(6,-19.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#71CDE4").s().p("AgEAPQgIgRAAgdIAYAAIgEBAQgIgEgEgOg");
	this.shape_233.setTransform(12.3,-26.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgHAFQgKgOALgLQAJgKAGATQAEANAAAWQgNgJgHgKg");
	this.shape_234.setTransform(-20.7,-36.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgWAFQgIgVAegHQAUgGAEAUQACAOgHAVQggAAgJgVg");
	this.shape_235.setTransform(-15.4,-48.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgMAPQgLgKgFgVQAcgFARADQAWAGgSAUQgLAMgKAAQgGAAgGgFg");
	this.shape_236.setTransform(-6,-41);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgdAXQgHgNAFgVQAEgRAQgJQARgKARALQANAIgCAHQgCAGgJAEQgDgNgIgCQgKgEgNATQgNARAQARQAKAMAVAIQgpAAgLgUg");
	this.shape_237.setTransform(-6.3,-52.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgSAAQgGgMAQADQALABASAIQgLAJgKACIgDAAQgLAAgEgLg");
	this.shape_238.setTransform(0.5,-48.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("Ag1gFQABgfA6gFQAigDAKAdQAIAUgHAcQgEgSgKgOQgNgRgSAAQgSAAgJAVQgHARAAAVQgagaABgWg");
	this.shape_239.setTransform(10,-41.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgQgCQgEgJAUAAQAVAAgEAJQgDAGgOAIQgNgIgDgGg");
	this.shape_240.setTransform(-2.4,-18.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#71CDE4").s().p("AgJgEQgGgNANAAQANAAABANQAAAJgFANQgLgNgFgJg");
	this.shape_241.setTransform(13.8,-50.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#71CDE4").s().p("AgPAVQgZgEANgXQAOgYASAOQAPAKAMAYQgUAEgNAAIgOgBg");
	this.shape_242.setTransform(7.8,-56.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#71CDE4").s().p("AgNAFQgSgHAQgIQAPgIALALQAJAHAEAOQgYgDgNgGg");
	this.shape_243.setTransform(0.2,-48.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#71CDE4").s().p("AgcAnQgUgVAagqQAagqARAQQANALADAjQgLACgSgLIgPgLIgKAgQgCAjAkAMQgeAAgPgQg");
	this.shape_244.setTransform(-6.2,-52.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#71CDE4").s().p("AgZgMQAOgeAXAGQAfAHgGAdQgGAcgTAAQgKAAgFgKQgEgHAAgIIgeAjQACgeAKgUg");
	this.shape_245.setTransform(-16.2,-47);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#71CDE4").s().p("AgLAXQgQgJANgaQAOgaAJAUQAIAPADAeIgLABQgMAAgIgFg");
	this.shape_246.setTransform(-20.5,-35.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#71CDE4").s().p("AgYgGQgJgjAkARQAdANgGASQgEANgTAKQgSAAgJgkg");
	this.shape_247.setTransform(-6.2,-40.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#71CDE4").s().p("AgJAOQgWgEAFgPQAGgQATALQAOAIAPAQIgVACQgJAAgHgCg");
	this.shape_248.setTransform(6.7,-18.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#71CDE4").s().p("AgMgRQAOgXATAVQASAUgWAPQgRALgcADQAFgeALgRg");
	this.shape_249.setTransform(-2.5,-17.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#71CDE4").s().p("AgNgEQgJgUATgCQARgDACAVQACAPgHAVQgRgSgHgOg");
	this.shape_250.setTransform(11.5,-28);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#71CDE4").s().p("AgxAKQgFgtAbgRQAagQAUAPQALAIAMASQAKAJgCAfQgBAigRAAQgLAAgHggQgGgegPADQgQACgEAbQgDAVADAYQgSgJgEgrg");
	this.shape_251.setTransform(10.3,-40.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgXAHQALgJALgEQAOgGAIAKQAIAKgSABIgHAAQgLAAgQgCg");
	this.shape_252.setTransform(6.1,-56.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgPAGQgWgGAQgHQAQgIAPAJQALAGAHAMQgbgCgQgEg");
	this.shape_253.setTransform(-6.1,-56.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgCAGQAAgBgMgFQgNgFAAgIQAAgJANgBQAKgDALADQAAAJACAFQADAJAKAGQAKAGgIAHQgHAHgKgBQgJAAAAgTg");
	this.shape_254.setTransform(11,-43);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgMAVQgFgPgBgMQAAgRALAAQAMAAAJAVQAIASgFAFQgCADgIAAQgHAAgMgDg");
	this.shape_255.setTransform(4.6,-44.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AAAAPQgHAAgIgHQgGgGgDgGQAAgFADgDQAEgEAIACQAIADgDAHQgCAEAGAAQAOAAALAPg");
	this.shape_256.setTransform(-8.7,-50.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgOAJQgTgGATgJQARgLAMAKQAIAHACANQgZAAgOgEg");
	this.shape_257.setTransform(-16.2,-49.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgTANQgEgPAWgJQAVgJAAATQAAAMgPADIgIABQgHAAgJgCg");
	this.shape_258.setTransform(-21.3,-37.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgGAEQgGgIAKgIQAKgIABANQABAIgDAQQgJgFgEgIg");
	this.shape_259.setTransform(11,-30.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgKAIQgSgCAIgHQAKgLARAGQARAGAAAIIgUABIgOgBg");
	this.shape_260.setTransform(-4.1,-19.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#71CDE4").s().p("AgMAFQgRgLANgLQANgKALARQAKALAFAVQgXgHgMgKg");
	this.shape_261.setTransform(-9,-50.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#71CDE4").s().p("AgTgCQADgIAOAFQAKAEAMAIIgSABQgZAAAEgKg");
	this.shape_262.setTransform(-0.8,-48.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#71CDE4").s().p("AgdAAQAAgPAWADQAQACAVAKQgVAKgQADIgGAAQgQAAAAgNg");
	this.shape_263.setTransform(6.3,-55.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#71CDE4").s().p("AgGAFQgKgHAFgIQAGgIAHALQAGAHAFAOQgMgDgHgGg");
	this.shape_264.setTransform(10.4,-29.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#71CDE4").s().p("AgHALQgLgLAIgPQAIgQAHASQAGANADAYQgOgEgHgJg");
	this.shape_265.setTransform(4.3,-19.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#71CDE4").s().p("AgYAAQAAgcASAFQANAFASASQgSATgNAFIgFAAQgNAAAAgYg");
	this.shape_266.setTransform(-3.7,-18.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#71CDE4").s().p("AgJgDQgDgOAMAAQANAAgDAOQgCAIgIAMQgIgMgBgIg");
	this.shape_267.setTransform(-3.7,-26.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#71CDE4").s().p("AgNAAQgJgNATgFQARgGACAQQACALgHASQgRgKgHgLg");
	this.shape_268.setTransform(-7.3,-42.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#71CDE4").s().p("AgOAHQgQgRAVgHQAUgHAIAPQAIAOgMAMQgEADgFAAQgIAAgMgNg");
	this.shape_269.setTransform(-5.2,-55.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#71CDE4").s().p("AgNAUQgTgMANgXQANgYAOAWQAKAPAHAfQgYAAgOgJg");
	this.shape_270.setTransform(-15.8,-48.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#71CDE4").s().p("AgRgKQgOgfAVgBQAaAAAGAoQAGAjgOAKQgVgdgKgYg");
	this.shape_271.setTransform(4.3,-41.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#71CDE4").s().p("AgRASQgCgZAMgkQASAAAFAgQAEAWgDAeQgHADgGAAQgTAAgCgag");
	this.shape_272.setTransform(11.5,-41.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgNAWQAAgPAEgMQAFgQAKgBQAKABgCAQQgBAMgHAPg");
	this.shape_273.setTransform(4.4,-45.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgHACQgLgHAIgGQAIgFAHAKQAGAHADAMQgOgFgHgGg");
	this.shape_274.setTransform(10.1,-46.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A8E7F7").s().p("AgIAJQgLgGAKgJQAKgLAHAKQAFAHACANQgPAAgIgEg");
	this.shape_275.setTransform(-16.5,-50.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A8E7F7").s().p("AgKAOQgIgFAAgNQAAgKADgJQgBAEACAFQAEAHAKACQAKADAFAKQAEAHAAAJQgPAAgOgKg");
	this.shape_276.setTransform(-8.9,-51.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#A8E7F7").s().p("AgNAJQgPgJATgOQARgNAIAQQAFALgBAUQgWgDgLgIg");
	this.shape_277.setTransform(-6,-56.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#A8E7F7").s().p("AgFgHQAFgLAIAIQAIAIgJAHQgGAGgMADQACgOAEgHg");
	this.shape_278.setTransform(-21.3,-37.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#A8E7F7").s().p("AgGAFQgLgGAKgHQAHgFAGAJQAEAFACAKQgKAAgIgGg");
	this.shape_279.setTransform(-0.7,-50.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#A8E7F7").s().p("AgFAFQgWgFAJgEQAGgDANACQAKACAKADQgEAHgLAAIgLgCg");
	this.shape_280.setTransform(6.4,-57.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#A8E7F7").s().p("AgFgGQAIgFAGATQgYgJAKgFg");
	this.shape_281.setTransform(12.6,-53.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#A8E7F7").s().p("AgKgCQgJgKAQAAQAPAAACAKQACAGgFAIQgPgIgGgGg");
	this.shape_282.setTransform(-8.1,-43.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#A8E7F7").s().p("AgFgDQgDgNAIAAQANAAgJAhQgGgLgDgJg");
	this.shape_283.setTransform(-4.4,-28.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#A8E7F7").s().p("AgVAAQACgLARAEQALADAOAIQgSAFgMAAQgRAAADgJg");
	this.shape_284.setTransform(-3.8,-20.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#A8E7F7").s().p("AgQAAQACgGANADQAIADALAEIgUABQgRAAADgFg");
	this.shape_285.setTransform(5.2,-20.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#A8E7F7").s().p("AgDgMQAJAAgCAKQgBAGgGAIg");
	this.shape_286.setTransform(11.4,-30.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#A8E7F7").s().p("AgMgIQgDgaAPAAQAQAAgDAaQgDASgKAZQgKgZgCgSg");
	this.shape_287.setTransform(4,-44.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#A8E7F7").s().p("AgBAAQgGgHgKgGQgIgFgGgBQAGgJAMgEQAPgFAQAIQAQAIgCAVQgBARgIASg");
	this.shape_288.setTransform(10.2,-43.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#A8E7F6").s().p("AgGAHQgKgEAFgHQAGgIAHAHQAGAFAFAKQgMAAgHgDg");
	this.shape_289.setTransform(-2.3,-21.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#A8E7F6").s().p("AgKAAQgJgLAQgDQAPgCACALQACAIgFAMQgPgJgGgGg");
	this.shape_290.setTransform(-19.6,-38.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#A8E7F6").s().p("AgHACQgKgHALgGQAJgFAGAKQAEAHAAAMQgNgFgHgGg");
	this.shape_291.setTransform(-8.8,-53.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#A8E7F6").s().p("AgKAAQgLgJANgCQAMgDAHAKQAFAGAAALQgRgIgJgFg");
	this.shape_292.setTransform(-4.1,-58);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#A8E7F6").s().p("AgCgKQAKgRAIAKQAIALgPAMQgJAIgSAIQAHgUAJgMg");
	this.shape_293.setTransform(5.4,-46.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#A8E7F6").s().p("AgMAHQgRgIANgLQANgKALANQAKAJAFARQgXgDgMgHg");
	this.shape_294.setTransform(11.7,-47.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#A8E7F6").s().p("AgEgEQADgJAEAFQAKAJgTAKQAAgKACgFg");
	this.shape_295.setTransform(12.2,-32.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#A8E7F6").s().p("AgDgGQAEgKAFAFQAGAGgHAHQgFAGgIAFQACgMADgHg");
	this.shape_296.setTransform(-7.9,-55.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#A8E7F6").s().p("AgLAGQgPgGAQgHQAPgIAIAJQAGAGAAAMQgUgCgKgEg");
	this.shape_297.setTransform(0.8,-44.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A8E7F6").s().p("AgHAIQgLgFAIgMIAYATIgIAAQgHAAgGgCg");
	this.shape_298.setTransform(7.3,-44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},2).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},2).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},2).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},2).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},2).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},2).to({state:[{t:this.shape_104},{t:this.shape_103}]},3).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.2,-108,74,107.6);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-34,-108.8,70.2,109.1), rect, rect=new cjs.Rectangle(-35,-109.8,68.8,111.6), rect, rect=new cjs.Rectangle(-33.1,-113.5,66.9,112.8), rect, rect=new cjs.Rectangle(-34.2,-113.6,66.4,113.3), rect, rect=new cjs.Rectangle(-34.3,-105.3,67.1,104.3), rect, rect=new cjs.Rectangle(-34.1,-107.7,66.2,109.7), rect, rect=new cjs.Rectangle(-37,-110.5,70.5,111.6), rect, rect=new cjs.Rectangle(-35.1,-113,70.2,114.5), rect, rect=new cjs.Rectangle(-33.5,-116.7,70.8,115.5), rect, rect=new cjs.Rectangle(-35.1,-112.8,72.4,113.7), rect, rect, new cjs.Rectangle(-9.9,-24.3,16.8,24.2), new cjs.Rectangle(-12.6,-28.2,23.7,27.6), new cjs.Rectangle(-16.9,-30.2,30.4,30.1), new cjs.Rectangle(-21,-36.4,33.1,36), new cjs.Rectangle(-21.6,-34,35.9,34.2), new cjs.Rectangle(-23.7,-36.1,37.9,36), new cjs.Rectangle(-27,-44,41.4,43.1), new cjs.Rectangle(-29.5,-46.6,43.1,46.7), new cjs.Rectangle(-30.4,-53.2,40.3,53), new cjs.Rectangle(-31.7,-56.7,43.7,57.3), new cjs.Rectangle(-33.4,-57.1,46.8,57.7), new cjs.Rectangle(-33.9,-60.3,46.1,60.2), new cjs.Rectangle(-35.4,-62.9,47.4,62.6), new cjs.Rectangle(-34.8,-61,49.4,61.4), new cjs.Rectangle(-37.6,-61.6,52.3,61.2), new cjs.Rectangle(-37.3,-61.5,53.9,61.3), new cjs.Rectangle(-36.3,-61.4,55.5,56.5), new cjs.Rectangle(-33.8,-60.7,52,57.3), new cjs.Rectangle(-35.2,-58.9,52.3,48), new cjs.Rectangle(-24.9,-58.7,40,45.5), new cjs.Rectangle(-22.5,-58.7,38,44), new cjs.Rectangle(-23.3,-57.9,37.1,41.9), new cjs.Rectangle(-22.5,-58.5,36,39.2), new cjs.Rectangle(-21,-59.2,35,39.1), new cjs.Rectangle(-8.7,-56.9,17.5,13.3), rect=null, rect];


(lib.vie_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vie_pleine:0,vie_vide:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// vie
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape.setTransform(2.4,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgJIASAAIAFgSIAGASIASAAIgPAJIAGASg");
	this.shape_1.setTransform(21.4,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANQAigQAdgbQA6g3gZg2g");
	this.shape_2.setTransform(12.5,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg9QARg2AqAKQAoAJAEAjQASgaAbgFQAigHARAmQAZA2g6A3QgdAbgiAQQghgNgdgag");
	this.shape_3.setTransform(12.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgJIASAAIAFgSIAGASIASAAIgPAJIAGARg");
	this.shape_4.setTransform(2.4,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgJIASAAIAFgSIAGASIASAAIgPAJIAGARg");
	this.shape_5.setTransform(21.4,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:12.5,y:11.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:11.5,y:11.4}},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24.1,22.9);
p.frameBounds = [rect, new cjs.Rectangle(-0.1,-0.5,23.9,22.9)];


(lib.temperature_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{temp0:0,temp1:1,temp2:2,temp3:3,temp4:4,temp5:5,temp6:6,temp7:7,temp8:8,temp9:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// glace
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBADIgIgDIAHgCIAAgIIAEAHIAIgCIgFAFIAFAHIgIgDIgDAHg");
	this.shape.setTransform(157.4,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCADIgLgDIALgCIgBgMIAGAJIALgDIgHAIIAHAJIgLgDIgFAJg");
	this.shape_1.setTransform(166.9,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCADIgHgDIAHgCIAAgIIAEAHIAIgDIgFAGIAFAHIgIgDIgDAHg");
	this.shape_2.setTransform(147.5,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBACIgFgCIAFgBIAAgFIACAEIAFgBIgCADIADAFIgGgCIgCAEg");
	this.shape_3.setTransform(147.9,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBADIgIgDIAIgCIAAgIIADAHIAIgCIgFAFIAFAHIgIgDIgDAHg");
	this.shape_4.setTransform(159.6,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDADIgHgDIAHgDIADgIIADAIIAIADIgIACIgDAJg");
	this.shape_5.setTransform(162.1,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAGIgMgGIAMgEIAGgOIAFAOIAOAEIgOAEIgFAPg");
	this.shape_6.setTransform(143,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAEIgMgEIAMgEIAGgKIAFAKIAOAEIgOADIgFAMg");
	this.shape_7.setTransform(158.2,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAHIgPgHIAPgGIAHgQIAGAQIARAGIgRAFIgGASg");
	this.shape_8.setTransform(151.7,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDADIgHgDIAHgBIADgHIADAGIAIACIgIACIgDAHg");
	this.shape_9.setTransform(146,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAEIgKgEIAKgDIAFgIIAEAIIAMADIgMACIgEAKg");
	this.shape_10.setTransform(148,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AApAbIgWgsIg0gdIAXAsAApAbIAAAZIgngLIgMgrAApAbIgzgd");
	this.shape_11.setTransform(161.1,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#87B2FA").s().p("AAAAmIgNgrIgXgsIAzAdIAWAsIAAAZg");
	this.shape_12.setTransform(161.5,22.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgegfIAVAzIAkARg");
	this.shape_13.setTransform(150.1,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7FBFD").s().p("AgHASIgVg0IA5BFg");
	this.shape_14.setTransform(149.9,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AACAQIASAjIANArIgNgEIgSgTIAAg3Ig1hlIAPALQALAMBKBlg");
	this.shape_15.setTransform(158.1,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BED9F5").s().p("AAVBWIgSgTIAAg3Ig0hlIAOALQAMAMBJBlIgvgXIASAjIANArg");
	this.shape_16.setTransform(158,17.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ABbBaIAAAaIgngMABbBaIgWgpQhKhlgMgMIgOgLIAiBEIgjgRAhFgpIgVg0IABgTQApAZARAMAAnA9IgkhEAhFgpIAlARAhFgpIAKAdQAOAXBUBZIANAEAhahdIA6BFAAnA9IANArABbBaIg0gd");
	this.shape_17.setTransform(156.1,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4EBF6").s().p("AAnBjQhUhZgOgXIgfhRIABgTQApAZARAMIAOALQAMAMBKBlIAWApIAAAZg");
	this.shape_18.setTransform(156.1,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// feu
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BA4221").s().p("AAAABQAEgEAHgBQAEgBADACQgKgRgIAAQgDAAgEAOQgFAPgIADQgGADAGgPQAIgUgIgFQgHgGgHAFQgEADgCAHQABgJADgHQAFgKAHgCQALgDAbATQAdATgCANQgBADgWAAQgHAAgEADQgFADgCAJQgCAGAIARQgagWAUgWg");
	this.shape_19.setTransform(13,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BA4221").s().p("AABgBQgCgDgLAFIgGACQADgDACgLQABgMABgBQACgDAaAQQAJAGgTAfQAAgXgGgEg");
	this.shape_20.setTransform(6.2,3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBEE70").s().p("AgFAVQgEAGgQAAQgJAAgDgHQgDgFABgGQAPAHAJAAIATAAQAIAAAKgWQAKgVAEACQAJAEgJAVIgJAAQgPAbgIAAQgHAAgCgGg");
	this.shape_21.setTransform(9.1,25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEF698").s().p("Ag2AsQgHgDgDASQgYgkAIAAQAGADAGAAQALgBgBgQQgCgGgEgEQgGgHgHAAIAEgKQAQAEAQAAQAVgBAJgJQAUgWAOgTQgDARAEAQQAGAWAQAEQAQAFALgGQAIgEACgHIAAAzQgPgFgCAHQgCAIgCAEQgEgPgMgFQgCgBgIgQQgGgKgWACQgSACgKAIQgIAFAAAGIgOAAIAAArQgFgUgHgCg");
	this.shape_22.setTransform(9.4,17.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F4C08D").s().p("AghAUQgSgQAGgZQAEgOAWAFQAQAEASALQAEgEAHgCQAIgDAHADQAMAGgLAXQgLAYgfAAQgTgBgOgLg");
	this.shape_23.setTransform(9.5,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE9C57").s().p("AhJBLQgkgnAZg4QAIgKALgJQAOgLAKgBQANgBgOAMQgNALgJADQAQAcApgvQAVgZgEgKQgDgIgOADQAAgIAEgGQAEgJAMgCQAQgDAbAWQAaAXgHAKQgNAEgHAHQgQALAOAQQALANALgBQAHAAAEgHQAHAPACARQACAYgLANQgNgDgDANQgDAOgTAPQgXASgaAAQgtgIgbgcg");
	this.shape_24.setTransform(9.5,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(10));

	// rect_rouge
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#962D10").ss(1,0,0,4).p("AgdgnIBjAAIAABPIhjAAQgRAAgMgLQgLgMAAgRQAAgPALgMQAMgMARAAg");
	this.shape_25.setTransform(20.5,17.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BA4221").s().p("AgdAoQgRAAgLgLQgMgMAAgRQAAgPAMgMQALgMARAAIBjAAIAABPg");
	this.shape_26.setTransform(20.5,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).wait(1));

	// rect_orange
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B56A27").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_27.setTransform(36,17.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CD7A30").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_28.setTransform(36,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[]},1).wait(1));

	// orangeJaune
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#C1872A").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_29.setTransform(49,17.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D89B39").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_30.setTransform(49,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[]},1).wait(2));

	// jauneOrange
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#CAA432").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_31.setTransform(61,17.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3BA41").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_32.setTransform(61,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[]},1).wait(3));

	// jauneJauneOrange
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D8C536").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_33.setTransform(74,17.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EEDB49").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_34.setTransform(74,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).wait(4));

	// jauneJauneVert
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#C7CB48").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_35.setTransform(93,17.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DEE266").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_36.setTransform(93,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[]},1).wait(5));

	// rect_jauneVert
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#AEC160").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_37.setTransform(106,17.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CBDE7F").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_38.setTransform(106,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[]},1).wait(6));

	// vert
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#8EB967").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_39.setTransform(119,17.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B7DA98").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_40.setTransform(119,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[]},1).wait(7));

	// turquoise
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#65C080").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_41.setTransform(132,17.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A3D6B2").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_42.setTransform(132,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},1).wait(8));

	// rect_bleu
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#3FA1C9").ss(1,0,0,4).p("AhIgnIB1AAQALAAAJAMQAIALAAAQQAAAQgIAMQgJAMgLAAIh1AAg");
	this.shape_43.setTransform(147.2,17.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#73CBEF").s().p("AhIAoIAAhPIB1AAQALAAAJAMQAIAMAAAPQAAARgIALQgJAMgLAAg");
	this.shape_44.setTransform(147.2,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43}]}).to({state:[]},1).wait(9));

	// ligne
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,0,0,4).p("AAAgsIAABZ");
	this.shape_45.setTransform(83.5,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(10));

	// bg_thermometre
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AqiBLQgfAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAfAAIVFAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAg");
	this.shape_46.setTransform(84,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,168.3,29.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.projectile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glace
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBADIgIgDIAHgCIAAgIIAEAHIAIgCIgFAFIAFAHIgIgDIgDAHg");
	this.shape.setTransform(4.8,17.3,1,1,82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCADIgLgDIALgCIgBgMIAGAJIALgDIgHAIIAHAJIgLgDIgFAJg");
	this.shape_1.setTransform(17.9,25,1,1,82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCADIgHgDIAHgCIAAgIIAEAHIAIgDIgFAGIAFAHIgIgDIgDAHg");
	this.shape_2.setTransform(8.6,6.7,1,1,82);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBACIgFgCIAFgBIAAgFIACAEIAGgBIgEADIAEAFIgGgCIgBAEg");
	this.shape_3.setTransform(17.4,5.8,1,1,82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCADIgIgDIAIgCIAAgIIAFAHIAHgCIgFAFIAGAHIgIgDIgFAHg");
	this.shape_4.setTransform(27,16.3,1,1,82);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDADIgHgDIAHgDIADgIIADAIIAIADIgIACIgDAJg");
	this.shape_5.setTransform(12.3,20.9,1,1,82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAGIgMgGIAMgEIAGgOIAFAOIAOAEIgOAEIgFAPg");
	this.shape_6.setTransform(10.3,1.9,1,1,82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAEIgMgEIAMgEIAGgKIAFAKIAOAEIgOADIgFAMg");
	this.shape_7.setTransform(17.3,16.3,1,1,82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAHIgPgHIAPgGIAHgQIAGAQIARAGIgRAFIgGASg");
	this.shape_8.setTransform(27,8.3,1,1,82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDADIgHgDIAHgBIADgHIADAGIAIACIgIACIgDAHg");
	this.shape_9.setTransform(25.6,2.8,1,1,82);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAEIgJgEIAJgDIAFgIIAEAIIALADIgLACIgEAKg");
	this.shape_10.setTransform(1.2,8.3,1,1,82);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AApAbIAAAZIgngLIgMgrAApAbIgzgdAApAbIgWgsIg0gdIAXAs");
	this.shape_11.setTransform(8.2,20.8,1,1,82,0,0,0.3,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#87B2FA").s().p("AAAAmIgNgrIgXgsIAzAdIAWAsIAAAZg");
	this.shape_12.setTransform(8.2,20.9,1,1,82);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgegfIAVAzIAkARg");
	this.shape_13.setTransform(19.3,7.9,1,1,82);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7FBFD").s().p("AgHASIgVg0IA5BFg");
	this.shape_14.setTransform(19,7.7,1,1,82);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AACAQIg1hlIAPALQALAMBKBlIgvgXIASAjIANArIgNgEIgSgTg");
	this.shape_15.setTransform(12.9,16.7,1,1,82,0,0,-0.1,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BED9F5").s().p("AAVBWIgSgTIAAg3Ig0hlIAOALQALAMBLBlIgwgXIASAjIANArg");
	this.shape_16.setTransform(12.9,16.7,1,1,82);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ABeBaIgWgpQhKhlgLgMIgPgLIAjBEAhWhdIAAgTQAqAZAQAMAhBgpIgVg0IA5BFAArA9IgkhEIgkgRAhBgpIAkARAhBgpIAKAdQAOAXBUBZIANAEABeBaIAAAaIgmgMAArA9IANArABeBaIgzgd");
	this.shape_17.setTransform(13.9,14.6,1,1,82,0,0,0.3,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4EBF6").s().p("AAnBjQhUhZgOgXIgfhRIABgTQApAZARAMIAOALQAMAMBKBlIAWApIAAAZg");
	this.shape_18.setTransform(13.9,14.7,1,1,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,29.3,26.4);
p.frameBounds = [rect];


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhTBQIAAifICnAAIAACfg");
	mask.setTransform(8.4,8);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMAVQgFAAgDgEIgZghQAAgBAAAAQgBgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAjAYQAEADAAAEQABAFgEADQgCACgFAAgAAJAOQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgVgOg");
	this.shape.setTransform(7.6,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7A5QgYgYAAghQAAghAYgXQABAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgXAWAAAeQAAAfAXAVQAXAXAgAAQAgAAAYgXQAXgVAAgfQAAgdgWgWQgXgWgfgBIAAAhQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgjQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAjAAAYAXQAZAXAAAhQAAAhgZAYQgYAXgjAAQgiAAgZgXg");
	this.shape_1.setTransform(8.4,8);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, rect = new cjs.Rectangle(0,0,16.9,16), [rect]);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhTBQIAAifICnAAIAACfg");
	mask_1.setTransform(8.4,8);

	// Calque_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAVQgFAAgDgEIgZghQAAgBAAAAQgBgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAjAYQAEADAAAEQABAFgEADQgCACgFAAgAAJAOQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgVgOg");
	this.shape_2.setTransform(7.6,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7A5QgYgYAAghQAAghAYgXQABAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgXAWAAAeQAAAfAXAVQAXAXAgAAQAgAAAYgXQAXgVAAgfQAAgdgWgWQgXgWgfgBIAAAhQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgjQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAjAAAYAXQAZAXAAAhQAAAhgZAYQgYAXgjAAQgiAAgZgXg");
	this.shape_3.setTransform(8.4,8);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, rect = new cjs.Rectangle(0,0,16.9,16), [rect]);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUBVIAAipICpAAIAACpg");
	mask.setTransform(8.5,8.5);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BVQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAihQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABIB0BRQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIh0BRIgDABgAg2BJIBqhJIhqhIg");
	this.shape.setTransform(8.5,8.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, rect = new cjs.Rectangle(2.2,0,12.6,17), [rect]);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUBVIAAipICpAAIAACpg");
	mask.setTransform(8.5,8.5);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCA9IhRh0IgBgDIAAgCQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIChAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABIhRB0QAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAAAA0IBJhqIiRAAg");
	this.shape.setTransform(8.5,8.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, rect = new cjs.Rectangle(0,2.2,17,12.6), [rect]);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUBVIAAipICpAAIAACpg");
	mask.setTransform(8.5,8.5);

	// Calque_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4BUIh0hRQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIB0hRIADgBIACAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAIAAChQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgCAAIgDgBgAgzAAIBqBJIAAiRg");
	this.shape.setTransform(8.5,8.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, rect = new cjs.Rectangle(2.2,0,12.6,17), [rect]);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhUBVIAAipICpAAIAACpg");
	mask_2.setTransform(8.5,8.5);

	// Calque_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQA/QAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIBRh0QAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIBRB0IABADIAAACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAgABJA3IhJhqIhIBqICRAAg");
	this.shape_4.setTransform(8.5,8.5);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, rect = new cjs.Rectangle(0,2.2,17,12.6), [rect]);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhTBQIAAifICnAAIAACfg");
	mask_3.setTransform(8.4,8);

	// Calque_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAVQgFAAgDgEIgZghQAAgBAAAAQgBgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAjAYQAEADAAAEQABAFgEADQgCACgFAAgAAJAOQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIgVgOg");
	this.shape_5.setTransform(7.6,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7A5QgYgYAAghQAAghAYgXQABAAAAAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgXAWAAAeQAAAfAXAVQAXAXAgAAQAgAAAYgXQAXgVAAgfQAAgdgWgWQgXgWgfgBIAAAhQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAgjQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAjAAAYAXQAZAXAAAhQAAAhgZAYQgYAXgjAAQgiAAgZgXg");
	this.shape_6.setTransform(8.4,8);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, rect = new cjs.Rectangle(0,0,16.9,16), [rect]);


(lib.mcProjectile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{tir:0,statique:8,"debutMort":24,"finMort":37});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("statique");
	}
	this.frame_37 = function() {
		this.explosion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(14).call(this.frame_37).wait(1));

	// projectile
	this.instance = new lib.projectile_naissance();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-1.4,0.01,1,0,0,0,0,5.4);

	this.instance_1 = new lib.brillant();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.3,-1.7,1,1,0,0,0,28.4,21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AhGAYIBNAPIBXgnIhOgMAhGAYIBWgkAhGAYIgggYIAzglIBDAZ");
	this.shape_19.setTransform(10.6,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#87B2FA").s().p("AhBAXIghgXIA0gmIBCAZIBPANIhYAng");
	this.shape_20.setTransform(10.2,-0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ABHAIIhWgWIg4Adg");
	this.shape_21.setTransform(37.1,-4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7FBFD").s().p("AgOgOIBWAWIiPAHg");
	this.shape_22.setTransform(37.1,-4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgeAGIC0AeQgSAGgKABQgjAFi/gDIBKgnIg9gJIhEgZIASgNIApgEg");
	this.shape_23.setTransform(21.4,-1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BED9F5").s().p("AhjAtIBJgnIC1AeQgSAGgLABQgVADhTAAIh5gBgAhWgDIhEgZIARgNIAqgEIBFAzg");
	this.shape_24.setTransform(20.9,-1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AjHAoIBKAMQC/ADAigFQALgBASgGIh5gUIA4gdADPgNIAYARQg9AagpANAB4gkIBXAXIiPAHAB4gkIgtgPQglgEjJAVIgRANAhwADIB4AUAhwADIhEgYAjHAoIBXglAjHAoIgggYIAzglAB4gkIg4Ae");
	this.shape_25.setTransform(23.5,-2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D4EBF6").s().p("Ah9A0IhJgMIghgYIBFgyQDJgVAkAEICFAmIAYARQg+AagpANQgRAGgLABQgWADhSAAIh6gBg");
	this.shape_26.setTransform(23.5,-2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFBEIgKAtIgNgtIgtA2IAahHIhDAAIApgWIgpgJIApgZIgpgqIBDAMIgQg2IAwAqIAKhKIALBKIA3g3IgdBDIBTgMIg2AqIA2AsIhTAAIANBTg");
	this.shape_27.setTransform(35.2,-2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#ACDFFC").ss(1,0,0,4).p("AAdgJIAAAmIgpgXIgNgig");
	this.shape_28.setTransform(28.1,-6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#ACDFFC").ss(1,0,0,4).p("AAYAkIATgpIgmgdIgvAzIAQATg");
	this.shape_29.setTransform(21.2,1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#ACDFFC").ss(1,0,0,4).p("AASAbIAQgyIgzATIgQAfg");
	this.shape_30.setTransform(30.2,6.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#ACDFFC").ss(1,0,0,4).p("AAXgQIg8gJQAAARAbAOQAUAMAaAHg");
	this.shape_31.setTransform(39.6,7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#ACDFFC").ss(1,0,0,4).p("AgKgeIg3AdIBBAfIBFgpIgNgTg");
	this.shape_32.setTransform(46.5,1.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#ACDFFC").ss(1,0,0,4).p("AgZgTIAABJIAcAMIAWhMIgGgzg");
	this.shape_33.setTransform(37.4,-11.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#84C2FB").s().p("AgOAHIgMgjIA2ATIAAAmg");
	this.shape_34.setTransform(28.3,-6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#84C2FB").s().p("AgaAjIgQgTIAvgzIAmAdIgTApg");
	this.shape_35.setTransform(21.2,1.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#84C2FB").s().p("AghAZIAQgeIAzgTIgQAxg");
	this.shape_36.setTransform(30.2,6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#84C2FB").s().p("AgIAHQgcgOAAgRIA8AJIANAoQgagGgTgMg");
	this.shape_37.setTransform(39.5,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#84C2FB").s().p("AhDgBIA3gdIBDAAIAMAUIhFApg");
	this.shape_38.setTransform(46.7,1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#84C2FB").s().p("AgYA0IAAhJIAsgqIAFAzIgVBMg");
	this.shape_39.setTransform(37.4,-11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AheBIIgmAkIAMg6IhzAWIBThDIhNgDIBhgjIixgJICxgdIh0hKICaAwIgagaIAaAAIAAhWIA6BNIgKg9IAdAwIAQh6IAcCdIBAhTIgTAwIB9h6Ih9C0IBXAAIhNAgICXAAIh0AjIDBAmIjbAJIBUBkIiHhXIAqCUIg3h0IAAA3IgcgnIgtAnIAAgnIhWC0gAgtg3QgOAOAAASQAAATAOAMQANANASAAQASAAANgNQANgMAAgTQAAgSgNgOQgNgNgSAAQgSAAgNANg");
	this.shape_40.setTransform(36.3,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#97CCE6").ss(1,0,0,4).p("AAcgdIhGAQIAAApIBTgfg");
	this.shape_41.setTransform(51,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#97CCE6").ss(1,0,0,4).p("AAEgQQgMAAgFAJQgDAGACAHIASAJQAJgLACgIQADgMgOAAg");
	this.shape_42.setTransform(46.3,-8.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#97CCE6").ss(1,0,0,4).p("AAag3Ig5AqIAXBCIAog8g");
	this.shape_43.setTransform(37.7,-15.1,1,1,0,0,0,0,0.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#97CCE6").ss(1,0,0,4).p("AgZgdIAsA8IAQgig");
	this.shape_44.setTransform(27.3,-12.7,1,1,0,0,0,0.5,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#629FD7").s().p("AgpgMIBGgQIANAaIhTAfg");
	this.shape_45.setTransform(50.9,-0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#629FD7").s().p("AgOAGQgCgGADgGQAFgJAMAAQAOAAgDAMQgCAIgJALg");
	this.shape_46.setTransform(46.3,-8.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#629FD7").s().p("AgfgMIA5gqIAGAxIgpA7g");
	this.shape_47.setTransform(37.7,-15.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#629FD7").s().p("AgdgdIA8AZIgQAig");
	this.shape_48.setTransform(27.3,-13.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAviaIAagmAg9kQIAAAZIAJAAIANgNgAgXiaIAAhdIAcBEgAh0iaIAqAAIgqhKgAiBBGIAAAQIgpAjIAJgzIgTgKIhHAaIBHg9IATAaIAQAAIAAATgAiRgpIi6gKIAGgNICRAAIhkhaICKAqIgmAggAiRgTIh6ATAB2g9QgFgGACgFQACgIANAAgAA5h6IAAgMIBjhxIhTB9gABSg9QADgHAFgCQAGgDAFAMAg0iaIgWhKIANAAIAWBUgACcAAIAQAmICUgNgAC5hQQgJgJgCgHQgDgKAOAAQAOAAgDAKQgCAIgJAIgACJgzIAwAAAhkBpIgQAaIgtCEIBHh6gAgXBgQgKAMgCAKQgDANAPAAQAPAAgDgNQgCgKgKgMgAAcBpIAdBHAi0BQIgtApABJA8QAGAFBAA4");
	this.shape_49.setTransform(39.2,1.5,1,1,0,0,0,0,0.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AheAvIAHgNICPAAIhihZICIAqIgmAfIAkAmg");
	this.shape_50.setTransform(15.5,-8.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAdgCIgUgKIhFAZIBFg8IAUAaIAQAAIAAATIAQAAIAAAPIgpAjg");
	this.shape_51.setTransform(20.2,8.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAKg0IAQgaIAJAkIhFB5g");
	this.shape_52.setTransform(26.6,19.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgLAFQACgJAJgNQAKANACAJQADANgPAAQgOAAADgNg");
	this.shape_53.setTransform(36.9,12.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhRgSICjAZIiTAMg");
	this.shape_54.setTransform(63,3.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgHgBQACgHANAAIgMASQgEgGABgFg");
	this.shape_55.setTransform(51.5,-5.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKgCQgDgKANAAQAOAAgDAKQgCAHgJAIQgIgJgCgGg");
	this.shape_56.setTransform(57.7,-8.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgxA+IAAgMIBjhwIhTB8g");
	this.shape_57.setTransform(49.9,-17.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOguIAdBDIgdAag");
	this.shape_58.setTransform(38.3,-18.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKANIAAgZIAVAMIgMANg");
	this.shape_59.setTransform(34.1,-24.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAFAgIgWhJIANAAIAWBTg");
	this.shape_60.setTransform(33.5,-17.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAlIAAhJIApBJg");
	this.shape_61.setTransform(29.6,-17.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AgeAGIA2g2IAJAAIAABCIggAdg");
	this.shape_62.setTransform(28.2,12.2,1,1,0,0,0,0.1,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AgZAYIAAg8QAZAOAOAUQAKAOACAMIAAAQIgKAAg");
	this.shape_63.setTransform(42.3,14.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AAAAhQgIgOgHgQQgKgUAAgKIAzAiIAAAag");
	this.shape_64.setTransform(44.9,8.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AANgiIhcAlIBKAgIBWglg");
	this.shape_65.setTransform(51.3,-0.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AgBgOIgNASIAfAKIAAgcg");
	this.shape_66.setTransform(48.9,-9.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AgfgiIAJBwIA2hTIgQhNg");
	this.shape_67.setTransform(40.7,-16.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AgagiQgJgEAIAcQAGATALAaIAfAAIAKgoQgsgYgNgFg");
	this.shape_68.setTransform(26.1,-16.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#ABD5FA").ss(1,0,0,4).p("AgEAbIBDgcIhQgZIgwAZg");
	this.shape_69.setTransform(21.9,2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#71ACDE").s().p("AgfAHIA2g2IAJAAIAABCIggAdg");
	this.shape_70.setTransform(28.2,12.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#71ACDE").s().p("AAQAmIgpgPIAAg8QAZANAOAVQAKANACANIAAAPg");
	this.shape_71.setTransform(42.3,14.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#71ACDE").s().p("AAAAeQgIgOgHgQQgKgTAAgKIAzAiIAAAZg");
	this.shape_72.setTransform(44.9,8.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#71ACDE").s().p("AhPADIBcglIBDAgIhVAlg");
	this.shape_73.setTransform(51.3,-0.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#71ACDE").s().p("AgPAFIANgTIASAAIAAAcg");
	this.shape_74.setTransform(49.1,-9.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#71ACDE").s().p("AgfgfIAvgwIAQBNIg2BSg");
	this.shape_75.setTransform(40.7,-17.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#71ACDE").s().p("AgKAjQgLgagFgTQgIgcAIAEQAOAFArAYIgJAog");
	this.shape_76.setTransform(26,-16.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#71ACDE").s().p("Ag/gBIAwgZIBPAZIhCAcg");
	this.shape_77.setTransform(21.8,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AARANQgLgNgIgHQgMgJAAAKQAAAKAMAFQAIAEALAAg");
	this.shape_78.setTransform(20.3,-7.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAEAiIAzgvIhSgUIggAmIAAAWg");
	this.shape_79.setTransform(21.6,2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAZgeIgKA2IgpAJIAAgog");
	this.shape_80.setTransform(28.4,12.6,1,1,0,0,0,-0.1,0.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAcANIg5gyQAAAZARAYQAMATAPALg");
	this.shape_81.setTransform(43,17);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAYgEIgvgUIAAAzIAvAAg");
	this.shape_82.setTransform(46.3,9.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAHgfIhSAiIB5AdIAmgdIgmgig");
	this.shape_83.setTransform(51.5,-0.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAEgTIgZAcIAZAKIATgmg");
	this.shape_84.setTransform(51.8,-11.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AgcgZIANBjIAchBIAQgPIAAhJg");
	this.shape_85.setTransform(40.9,-17.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#B9DAF7").ss(1,0,0,4).p("AAagSIAAA5IgzgNIAAg/g");
	this.shape_86.setTransform(24.6,-19.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#71ACDE").s().p("AgDAJQgMgFAAgKQAAgKAMAJQAIAHALANQgLAAgIgEg");
	this.shape_87.setTransform(20.4,-7.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#71ACDE").s().p("Ag5AbIAAgWIAggmIBTAUIg0Avg");
	this.shape_88.setTransform(21.4,2.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#71ACDE").s().p("AgZgIIAzgXIgKA1IgpAKg");
	this.shape_89.setTransform(28.4,12.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#71ACDE").s().p("AgLALQgRgZAAgZIA5AyIgNAdQgPgLgMgSg");
	this.shape_90.setTransform(42.9,17.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#71ACDE").s().p("AgXAaIAAgzIAvAUIAAAfg");
	this.shape_91.setTransform(46.3,9.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#71ACDE").s().p("AhPADIBSgiIAnAAIAmAiIgmAdg");
	this.shape_92.setTransform(51.9,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#71ACDE").s().p("AgVAKIAYgcIATAAIgTAlg");
	this.shape_93.setTransform(51.9,-11.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#71ACDE").s().p("AgcgWIA5g2IAABJIgQAPIgcBBg");
	this.shape_94.setTransform(41,-18);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#71ACDE").s().p("AgZAZIAAg/IAzATIAAA6g");
	this.shape_95.setTransform(24.6,-19.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ag3jhQgIgMgCgIQgCgMAMAAQAIADABAHQADAKgMAMgAiug3IgqgkAh0AOQgIgLgHgDQgLgGgDALgABfhxQgCgMACgHQAEgKAMAHQgCALgEAHQgFAJgFgFgAAvhrQgCgLgEgFQgFgIgJAIQgKAHAJAFQAHADAOABgADfgxQAAgLADgGQAFgHAIAIQAJAJgIAEQgGADgLAAgADfBCQAQgDAqADAgNCcQARADAJAHQAMAKgRAMQgWAQgJgUQgJgUATgIgAhnBsQgSgCgLAFQgOAFAKAOQAHAHALgKQAIgHAHgMgAi+CSIgjATAixBiQg2AHAPAMQAJAHANgJQAJgGAIgLgAiIECQAAgLAEgHQAFgJALAFQAKAFgJAIQgHAFgOAEgAjYgHIhAAA");
	this.shape_96.setTransform(38.9,-3.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgNAAQADgMAKAGQAHAFAHAKg");
	this.shape_97.setTransform(25.7,-3.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgRAIQgPgLA1gHQgIAKgJAGQgGAFgGAAQgFAAgEgDg");
	this.shape_98.setTransform(19,7.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgNAKQgKgNAOgFQAJgFASACQgHALgHAHQgGAGgFAAQgDAAgDgDg");
	this.shape_99.setTransform(26.6,8.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgIgFQAFgJAKAFQAKAFgJAHQgHAFgNAEQAAgLAEgGg");
	this.shape_100.setTransform(26.5,20.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgSAIQgJgTASgIQASADAJAIQALAIgRAMQgKAIgGAAQgJAAgFgMg");
	this.shape_101.setTransform(38.4,13.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGgGQAEgHAIAIQAIAIgHAEQgGADgKAAQAAgKADgGg");
	this.shape_102.setTransform(62.2,-9.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgHALQgCgLADgHQADgKALAHQgCAKgEAHQgCAGgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_103.setTransform(49.1,-16.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgHAGQgJgFAKgGQAIgIAFAIQAEAFACAKQgNgBgHgDg");
	this.shape_104.setTransform(42.3,-15.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgJgDQgCgMALAAQAIADABAIQADAIgMAMQgHgLgCgIg");
	this.shape_105.setTransform(33.3,-27.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AAXAQQgCgKgIgHQgLgKgQAAQgRAAARAKQAOAHAXAKg");
	this.shape_106.setTransform(19.2,-4.2,1,1,0,0,0,0,0.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("ABAgHIhPAyIgzgyIAzgkg");
	this.shape_107.setTransform(20.8,5.4,1,1,0,0,0,-0.4,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AATgdIAGAvIgyANIAAglg");
	this.shape_108.setTransform(28.6,16.7,1,1,0,0,0,0,0.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AATgHIgmgaIAAAiIAZAgg");
	this.shape_109.setTransform(45.3,21.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AAKgPIgsgNQAAARARASQANANAOAJIAXgQg");
	this.shape_110.setTransform(47.8,14.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AgOggIg3AXIBDApIBJgpIgdgXg");
	this.shape_111.setTransform(54.2,3.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AAFgWIgbAlIAbgNIAXgYg");
	this.shape_112.setTransform(53.4,-8.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AgkgfIAUBmIA1hSIgQhAg");
	this.shape_113.setTransform(42.2,-16.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#C5EBFF").ss(1,0,0,4).p("AAPgXIAQBCIgpgTIgThCg");
	this.shape_114.setTransform(24.5,-17.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B0DAF0").s().p("AgOgDQgRgKARAAQAQAAALAKQAIAHACAKQgXgKgOgHg");
	this.shape_115.setTransform(19.2,-4.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B0DAF0").s().p("AhBgHIAzgkIBQAkIhQAyg");
	this.shape_116.setTransform(21,5.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B0DAF0").s().p("AgZgHIAsgWIAHAuIgzAOg");
	this.shape_117.setTransform(28.6,16.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B0DAF0").s().p("AgTACIAAgjIAnAaIgOApg");
	this.shape_118.setTransform(45.3,21.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B0DAF0").s().p("AgQAHQgRgSAAgRIAsANIAXAcIgXAQQgOgJgNgNg");
	this.shape_119.setTransform(47.7,14.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B0DAF0").s().p("AhFgJIA2gWIA4AAIAdAWIhJApg");
	this.shape_120.setTransform(54.3,3.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B0DAF0").s().p("AADgSIAWAAIgWAYIgcANg");
	this.shape_121.setTransform(53.6,-8.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B0DAF0").s().p("AgkgcIA5gtIAQBAIg1BTg");
	this.shape_122.setTransform(42.2,-16.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B0DAF0").s().p("AgLAYIgThCIAsATIARBCg");
	this.shape_123.setTransform(24.6,-17.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABjhTQAIgKAIgEQALgGAFAKQAGALgNABQgKABgPgDgAhjgzQgJgPgIgIQgLgLgEAMQgDAMANAGQAJAEANAAgAhjAcIggAKAgCBTIAAAW");
	this.shape_124.setTransform(38.5,7.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgQAHQAIgJAIgEQAKgGAFAKQAGAKgNABIgFAAQgIAAgLgCg");
	this.shape_125.setTransform(50.1,-1.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgFAKQgNgGADgLQAEgMALALQAHAIAJAOQgNAAgIgEg");
	this.shape_126.setTransform(26.9,0.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AghAWIBWgsIg2AAIg9AMg");
	this.shape_127.setTransform(19.5,6.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAbAPIAAgoIg1AcIAAAZg");
	this.shape_128.setTransform(27.5,16.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAgACIg2gWIAmAsg");
	this.shape_129.setTransform(46.7,14.3,1,1,0,0,0,-0.2,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAKgXIhMAWIBMAZIA9gZg");
	this.shape_130.setTransform(55.2,1.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgegjIAKBjIAyhAIgWhDg");
	this.shape_131.setTransform(42.6,-17.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAOgYIAQA/IgzgdIgJgyg");
	this.shape_132.setTransform(23.4,-18.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E2F1FA").s().p("Ag5gJIA8gMIA3AAIhWAsg");
	this.shape_133.setTransform(19,6.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E2F1FA").s().p("AgaACIA1gcIAAAoIg1ANg");
	this.shape_134.setTransform(27.5,16.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E2F1FA").s().p("AgagWIA1AWIgQAWg");
	this.shape_135.setTransform(47.4,14.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E2F1FA").s().p("AhEgBIBMgWIA9AWIg9AZg");
	this.shape_136.setTransform(55.4,1.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E2F1FA").s().p("AgeghIAmggIAWBCIgyBBg");
	this.shape_137.setTransform(42.6,-17.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E2F1FA").s().p("AgUALIgKgyIAsAQIAQA/g");
	this.shape_138.setTransform(23.3,-18.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ACRhLQALgKAIgEQALgGgBAKQgCAKgLACQgHABgJgDgABgAqIAXANAiWhiQgGgLgGgEQgJgGgBAMQgCAMAJABQAGABAJgFgAhJg7QgIgSgHgJQgKgNgEAOQgDAOAMAHQAIAFAMAAgAAjBXQgJALgCAIQgCAKANAAQAOAAgCgKQgCgIgKgLgAg/A3IgTAQ");
	this.shape_139.setTransform(34.7,4.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgDAKQgJgBACgLQABgMAJAGQAFAFAGAKQgHAEgFAAIgCgBg");
	this.shape_140.setTransform(18.5,-5.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgFALQgMgHAEgMQADgOAKAMQAHAJAIARQgMAAgIgFg");
	this.shape_141.setTransform(25.8,-2.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgKAEQACgHAIgLQAJALACAHQADALgOAAQgNAAADgLg");
	this.shape_142.setTransform(38.2,14.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgOAHQALgJAIgEQALgGgCAKQgCAJgKACIgDAAQgGAAgHgCg");
	this.shape_143.setTransform(50.6,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_1}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},16).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},2).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},2).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},2).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},2).to({state:[]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23.2,scaleX:0.17,x:4},0).wait(1).to({scaleX:0.33,x:7.9,y:-1.5},0).wait(1).to({scaleX:0.5,x:11.7},0).wait(1).to({scaleX:0.67,x:15.5,y:-1.6},0).wait(1).to({scaleX:0.83,x:19.4},0).wait(1).to({scaleX:1,x:23.2,y:-1.7},0).wait(1).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,-7.1,0.5,11.3);
p.frameBounds = [rect, new cjs.Rectangle(-0.7,-7.8,9.7,12.8), new cjs.Rectangle(-0.8,-7.9,17.4,12.8), new cjs.Rectangle(-0.8,-7.9,25.1,12.8), new cjs.Rectangle(-0.9,-8,32.8,12.8), new cjs.Rectangle(-0.9,-8,40.5,12.8), rect=new cjs.Rectangle(-1,-8.1,48.2,12.8), rect, rect=new cjs.Rectangle(-0.8,-17.3,52.6,37.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(15.9,-18.8,38.6,29.3), rect, rect=new cjs.Rectangle(5.3,-25.8,62,53.7), rect, rect=new cjs.Rectangle(5.1,-27,68.2,56.5), rect, rect=new cjs.Rectangle(9.8,-30.5,58.2,53.7), rect, rect=new cjs.Rectangle(13.5,-25,48.8,51.2), rect, rect=new cjs.Rectangle(12.2,-25.4,51.4,45.7), rect, rect=null, rect];


(lib.ecran_niveau2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// titre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ArjAAIXHAA");
	this.shape.setTransform(407.9,327);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ArjAAIXHAA");
	this.shape_1.setTransform(407.9,283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AligbIAMAAIBECMIBDiMIAMAAIhPCmgAiOB/QgSgLgNgVQgMgUABgWQgBgXAMgUQANgTASgKQAVgLAYAAQAlAAAbAdIhxBvQALAJAMAFQALAFAOAAQASAAARgKQARgJALgSIAAATQgMAOgRAHQgOAHgWAAQgWAAgUgMgAiIgKQgQAIgLARQgKARAAAUQAAAfAUAUIBqhoQgMgJgMgFQgMgFgPAAQgVAAgRAKgADjB4QgTgTAAgiIAAheIAMAAIAABeQAAAeAPAQQAQAPAdAAQASAAAOgHQANgIAJgOQAIgOAAgSIAAheIAMAAIAACiIgMAAIAAgfQgIAPgRAKQgQAJgVAAQgjAAgSgSgAAjB/QgUgMgLgTQgLgTAAgYQAAgXALgTQALgSAUgMQAUgLAXAAQAYAAAVAMQAUAMAIATIAAgoIAMAAIAACiIgMAAIAAgpQgJAUgUANQgUALgYAAQgXAAgUgLgAAqgKQgRAKgLARQgKARAAAUQAAATAKASQALARARAKQAQAKAVAAQAUAAAQgKQARgKAKgRQAKgRAAgVQAAgUgKgRQgJgQgSgKQgRgKgTAAQgUAAgRAKgAqRhsIAADzIgKAAIAAkRIDHD1IAAjxIAKAAIAAEQgAHVCHIB9hQQAggUAPgWQAPgVAAgdQAAgZgLgUQgKgVgVgMQgTgMgZAAQgZAAgWANQgVANgMAWQgMAWAAAaIgMAAQAAgdANgZQAOgZAYgOQAYgOAdAAQAdAAAVAOQAYAOALAXQANAXAAAbQAAA6hAAoIhiA/IChAAIAAALgAmOCHIAAiiIALAAIAACigAmShDQgDgEAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(407.9,305.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// texte
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_3.setTransform(547.5,447.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_4.setTransform(566.5,429.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_5.setTransform(556.6,438.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_6.setTransform(556.6,438.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_7.setTransform(518.5,445.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_8.setTransform(537.5,429.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_9.setTransform(528.6,438.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_10.setTransform(528.6,438.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_11.setTransform(488.5,447.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_12.setTransform(506.5,429.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_13.setTransform(496.6,438.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_14.setTransform(496.6,438.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_15.setTransform(459.5,446.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_16.setTransform(478.5,428.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANQAigQAdgbQA6g3gZg2g");
	this.shape_17.setTransform(468.6,437.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgdAcgiAQQghgOgdgag");
	this.shape_18.setTransform(468.6,437.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_19.setTransform(430.5,444.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_20.setTransform(449.5,428.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANQAigQAdgbQA6g3gZg2g");
	this.shape_21.setTransform(440.6,437.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgdAcgiAQQghgOgdgag");
	this.shape_22.setTransform(440.6,437.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgBADIgJgBIAIgEIgCgIIAFAGIAIgEIgEAIIAGAEIgJgBIgCAIg");
	this.shape_23.setTransform(441.5,490.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCADIgMgBIAKgFIgCgLIAIAIIAKgFIgFAKIAIAHIgLgCIgEALg");
	this.shape_24.setTransform(456.8,493.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCADIgIgBIAHgEIgBgIIAFAGIAIgEIgEAHIAGAGIgIgCIgDAIg");
	this.shape_25.setTransform(441.5,478.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBACIgFgBIAEgCIgBgFIAEAEIAFgDIgCAFIADADIgFgBIgCAFg");
	this.shape_26.setTransform(449.7,474.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBACIgFgBIAFgCIgBgFIADAEIAFgDIgDAFIAEADIgFgBIgCAFg");
	this.shape_27.setTransform(431.2,490);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCADIgIgBIAHgEIgBgIIAFAGIAHgEIgDAHIAGAFIgIgBIgDAIg");
	this.shape_28.setTransform(462.6,481.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAEIgJACIAFgHIgBgIIAGAEIAJAAIgFAGIAAAJg");
	this.shape_29.setTransform(450,491);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAAHIgQACIAIgLIAAgOIAKAIIAPAAIgJAKIABAPg");
	this.shape_30.setTransform(441.4,473.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAHIgQACIAIgLIAAgOIAKAIIAPAAIgKAKIACAPg");
	this.shape_31.setTransform(429.1,483.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAGIgNABIAGgKIgCgNIAJAJIAOABIgHAJIACAOg");
	this.shape_32.setTransform(453.3,484.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAIIgUADIALgOIgBgRIAMAKIATAAIgMANIACASg");
	this.shape_33.setTransform(459.8,473.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAEIgHAAIAEgGIgBgHIAFAFIAHAAIgEAFIACAJg");
	this.shape_34.setTransform(456.5,468.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAFIgKABIAFgIIgBgLIAHAHIAKABIgGAHIACAMg");
	this.shape_35.setTransform(434.9,482.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AghAjIAwgQIAmgwIgwARAghAjIAmgvAghAjIgZgEIARglIAugG");
	this.shape_36.setTransform(438.7,490);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#90B2F4").s().p("Ag3AcIARgkIAugHIAwgQIglAwIgxAPg");
	this.shape_37.setTransform(438.4,490.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAmgZIg4ANIgXAhg");
	this.shape_38.setTransform(453.1,480.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8FBFD").s().p("AgQgKIA4gNIhPAvg");
	this.shape_39.setTransform(452.9,480.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgRgDIBvgnQgGAHgIAGQgPALhwA6IAegrIgmALIguAHIAGgNIAWgOg");
	this.shape_40.setTransform(444.8,487.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C4D8F2").s().p("AgNgCIBvgmIgOAMQgPAMhwA6gAhbAEIAWgPIA4AJIgmALIguAHg");
	this.shape_41.setTransform(444.4,487.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AhCAdIguAHAhoBNIAmgwIBKgZIAXghAhoBNIgagEIASglAhoBNIAugQQBwg7APgKQAIgGAGgHIhLAZAA2hAIgfAGQgaALhnBGIgGANABuhNIATADQgdAlgRAQABuhNIhPAwAA2hAIgXAjAA2hAIA4gN");
	this.shape_42.setTransform(445.9,485.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EAF5").s().p("AiBBJIAXgxQBohHAagLIBXgSIATADQgeAkgRARIgNAMQgPALhxA7IguAQg");
	this.shape_43.setTransform(445.8,485.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ABRA3QgMgSAAglQgBglAMgRQANgSAZgBQAYABANASQANATAAAjQAAAngMAQQgMATgagBQgYAAgNgSgABnglQgEAMgBAZQABAbAEALQAEAMALAAQALAAAEgMQAFgMAAgaQAAgZgFgMQgFgLgKAAQgLAAgEALgAgrBCIAAgaQALAFAHABQAJADALAAQAbAAAAgXQAAgVgcAAIgWADIgLgHIAFhHIBNAAIAAAZIgzAAIgCAcIADAAQAGgBAIAAQAUAAANALQAMALAAAUQAAAXgPAOQgOAMgbAAQgYABgPgIgAhXBIIgXglIgXAlIgiAAIAlg4Igjg1IAiAAIAVAkIAVgkIAiAAIgkA1IAmA4g");
	this.shape_44.setTransform(479.9,484.8);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(300.4,436,1,1,0,0,0,8.4,8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhFBFQgFgEAAgHQAAgJAFgEQAFgFAHABQAJgBAEAFQAFAEgBAJQABAHgFAEQgEAFgJAAQgHAAgFgFgABpA2QgNgRABglQgBglAMgSQANgSAaAAQAXAAAOATQANATgBAjQAAAlgMASQgMASgZAAQgZAAgNgTgAB/glQgFAMAAAZQAAAbAFAKQAFAMALAAQAKAAAEgMQAGgNAAgYQAAgXgGgOQgEgLgKAAQgLAAgFALgAgIA2QgNgRAAglQAAglANgSQAKgSAaAAQAYAAANATQANASAAAkQAAAmgMARQgMASgaAAQgZAAgLgTgAANglQgFAMABAZQAAAcADAJQAGAMAKAAQAKAAAGgMQAEgLAAgaQAAgagFgLQgEgLgLAAQgKAAgFALgAi/BHIAAgUIA5g7IAGgMQADgEAAgGQAAgJgFgEQgFgEgIAAQgHAAgJADQgJAFgHAHIgRgUQAMgKAGgDQAFgDAKgDQAHgCAMAAQANAAAKAGQAKADAGAKQAFAJABALQgBALgDAHQgCAIgJAJQgHALgSAPIgSARIAAACIA9AAIAAAZgAhFgKQgFgFAAgHQAAgJAFgEQAFgEAHAAQAJAAAEAEQAFAFgBAIQABAHgFAFQgEAEgJAAQgIAAgEgEg");
	this.shape_45.setTransform(335,435.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AphAAITDAA");
	this.shape_46.setTransform(490,409);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AphAAITDAA");
	this.shape_47.setTransform(490,370);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("An9BTQgWgNgMgWQgMgVAAgbQAAgZAMgWQANgVAWgNQAVgNAZAAQARAAAJADQAJADAOAIIAAAJQgNgJgKgDQgKgEgQAAQgXAAgUAMQgTAMgMAVQgLAUAAAWQAAAXALAVQALAUAUAMQATAMAWAAQARAAALgEQAMgEALgIIAAAJQgNAHgLADQgLAEgPAAQgZAAgVgMgAltBWQgOgIgHgNQgIgOAAgPQAAgQAIgNQAHgMAOgIQAMgIARAAQAQAAANAIQANAIAHAMQAIANAAAQQAAAQgIANQgGANgOAIQgMAIgRAAQgRAAgMgIgAlpgHQgMAHgGALQgHALAAAOQAAAOAHAMQAHAMALAGQALAHAOAAQANAAAMgHQAKgGAIgMQAGgNAAgNQAAgNgGgMQgHgMgLgGQgMgHgNAAQgOAAgLAHgAH3BZQgJgEgEgHIAAgMQAEAJAIAGQAJAFAMAAQAMAAAHgHQAHgIAAgLQAAgKgEgFQgFgGgJgFIgYgPIgHgIQgDgFAAgGQAAgIAHgGQAHgGAKAAQANAAAJAGIAAALQgHgKgOAAQgIAAgFAEQgEAEAAAFQAAAEACAFIAIAHIASAKQANAIAFAHQAFAHAAAMQAAAPgJAJQgKAJgOAAQgLAAgJgEgAGRBVQgNgIgIgNQgIgNAAgPQAAgQAIgNQAHgMAOgHQAOgHAPAAQAaAAARATIhLBKQAJAHAGACQAHADAKAAQAMAAALgGQAMgHAHgLIAAAMQgJAKgKAFQgLAEgNAAQgQAAgMgIgAGUgGQgLAGgHAKQgGAKAAAPQAAAUANAOIBGhFQgHgHgIgDQgIgDgKAAQgPAAgLAHgAAbBVQgOgIgHgNQgHgMAAgQQAAgPAHgNQAHgMAOgIQAMgIAQAAQAPAAAPAJQANAIAGAMIAAgaIAIAAIAABrIgIAAIAAgbQgHAOgNAIQgNAIgQAAQgQAAgMgIgAAfgGQgLAGgIAMQgGALAAANQAAAOAGALQAIAMALAGQALAHAOAAQANAAALgHQALgGAHgMQAHgMAAgNQAAgNgHgMQgHgLgLgGQgLgHgOAAQgOAAgKAHgAFHBRQgLgMAAgSIAAhvIAIAAIAAArIAhAAIAAAHIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAGQgSAAgMgKgAh5BRQgMgMAAgSIAAhvIAIAAIAAArIAhAAIAAAHIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAGQgRAAgMgKgAEYBaIAAg/QAAgTgJgKQgJgLgSAAQgNAAgKAGQgKAGgGAIQgGAKAAANIAAA8IgIAAIAAhrIAIAAIAAAXQAFgLANgHQANgIAPAAQAUAAALANQAMALAAAXIAAA/gACUBaIAAhrIAHAAIAABrgAhIBaIAAhrIAIAAIAAAYQAFgLAJgHQAJgGAMAAQAIAAAHADIAAAJQgHgGgIAAQgJAAgIAGQgIAFgFAIQgFAJAAAKIAAA/gAioBaIAAg/QAAgTgKgKQgJgLgRAAQgOAAgJAGQgLAGgGAIQgGAKAAANIAAA8IgIAAIAAhrIAIAAIAAAXQAFgLANgHQANgIAPAAQAUAAALANQAMALAAAXIAAA/gACRgsQgCgCAAgEQAAgEACgCQAEgCACAAQAEAAACACQADADAAADQAAADgDADQgCACgEAAQgCAAgEgCg");
	this.shape_48.setTransform(488.7,389);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqtbMAlVAAAIAAa3MglVAAAg");
	this.shape_49.setTransform(527,442.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.2)").s().p("AyqNcIAA63MAlVAAAIAAa3g");
	this.shape_50.setTransform(527,442.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AB4A2D").s().p("AAAABQAGgHAJAEQgKgPgFAAQgCAAgEAMQgEAMgHADQgFACAFgMQAHgQgHgFQgGgEgFADQgEADgBAFQADgTAKgDQAJgDAWAPQAZAQgCALQgBADgSAAQgGAAgDACQgEADgCAHQgDAHAIAMQgVgTAQgRg");
	this.shape_51.setTransform(199,487.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AB4A2D").s().p("AAAAAQgCgDgJAEIgEACQACgCACgKQABgKABgBQACgCAUANQAIAFgQAZQAAgSgFgDg");
	this.shape_52.setTransform(193.4,482.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9EE83").s().p("AgEARQgEAFgNAAQgHAAgDgFQgCgEABgFQAQAFAEAAIAQAAQAGAAAIgSQAJgRADABQAHADgHASIgHAAQgMAWgHAAQgGAAgCgFg");
	this.shape_53.setTransform(195.7,500.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FDF6A4").s().p("AgtAkQgDgBgCAFQgCAEgBAFQgWgeAJAAIAKACQAJAAgBgNQgBgFgEgEQgEgGgHAAIAEgIQANAEANAAQASgBAHgIQAQgRAMgRQgCAPADANQAFASANADQAOAEAJgEQAGgEACgGIAAAqIgIgBQgGAAAAADIgEAKQgDgMgKgFQgBAAgHgOQgFgIgSACQgPACgIAGQgHAEAAAFIgMAAIAAAkQgEgRgGgCg");
	this.shape_54.setTransform(196,494.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EBC294").s().p("AgaAQQgQgNAFgUQAEgLASAEQANADAOAJQAEgEAGgCQAHgCAFADQAKAFgJASQgJAVgZAAQgQgCgLgJg");
	this.shape_55.setTransform(196,499.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E19F63").s().p("Ag8A+QgeggAVguQAGgIAJgIQAMgJAIgBQALAAgLAJQgLAKgIACQANAXAjgmQARgVgDgJQgDgGgLACQAAgGADgGQADgHAKgCQANgCAWATQAWASgGAIIgQAJQgNAKALANQAKALAIgBQAGAAAEgGQAFAMACAOQABAUgIALQgEgBgEACQgEACgCAGQgCALgQAMQgTAPgVAAQgmgHgWgXg");
	this.shape_56.setTransform(196.1,493.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgBACIgGgCIAGgBIAAgHIADAFIAHgCIgFAFIAFAFIgHgCIgDAGg");
	this.shape_57.setTransform(320.3,501.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCADIgJgDIAJgCIAAgJIAFAIIAJgEIgGAHIAGAHIgJgCIgFAHg");
	this.shape_58.setTransform(328.1,491.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgBACIgHgCIAHgBIAAgHIADAGIAGgDIgDAFIADAGIgGgDIgDAGg");
	this.shape_59.setTransform(312,496.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAABIgFgBIAFgBIgBgEIACADIAFAAIgDACIADAEIgFgBIgBADg");
	this.shape_60.setTransform(312.3,489.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgBACIgGgCIAGgBIAAgHIADAFIAHgCIgFAFIAFAFIgHgCIgDAGg");
	this.shape_61.setTransform(322.1,482.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDADIgFgDIAFgCIADgHIADAHIAHACIgHACIgDAHg");
	this.shape_62.setTransform(324.1,495.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgFAFIgKgFIAKgDIAFgMIAEALIAMAEIgLADIgFANg");
	this.shape_63.setTransform(308.3,494.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgFAEIgKgEIAKgDIAFgJIAEAJIAMADIgMACIgEALg");
	this.shape_64.setTransform(320.9,490.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGAFIgMgFIAMgFIAGgNIAFANIAOAFIgOADIgFAQg");
	this.shape_65.setTransform(315.5,481.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgCACIgHgCIAHgBIACgGIADAGIAGABIgGACIgDAGg");
	this.shape_66.setTransform(310.8,482.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgDADIgIgDIAIgCIADgHIAEAHIAJACIgJACIgEAIg");
	this.shape_67.setTransform(312.5,502.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAiAXIAAAVIgggKIgKgjAAiAXIgSglIgrgXIATAkAAiAXIgqgY");
	this.shape_68.setTransform(323.3,498.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#90B2F4").s().p("AAAAfIgLgjIgTgkIAqAYIATAkIAAAVg");
	this.shape_69.setTransform(323.6,498.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgZgZIARArIAeAOg");
	this.shape_70.setTransform(314.3,488);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F8FBFD").s().p("AgGAPIgRgrIAvA5g");
	this.shape_71.setTransform(314.1,488.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AACAOIgshUIAMAKQANANA6BQIgngTIAOAdIALAkIgLgEIgOgQg");
	this.shape_72.setTransform(320.8,494);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C4D8F2").s().p("AARBHIgOgQIAAgtIgshUIAMAKQANANA6BQIgngTIAOAdIALAkg");
	this.shape_73.setTransform(320.7,494.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AhHhNIAAgQQAbAPAVAQIAdA4IgdgOAg2giIgRgrIAwA5ABOBLIgSgjQg7hQgMgNIgMgJAg2giIAfAOAg2giIAJAYQAKARBGBMIALADAAjAyIALAkAAjAyIgdg4ABOBLIAAAVIgggKABOBLIgrgZ");
	this.shape_74.setTransform(319.2,493.2,1,1,0,0,0,0.3,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D9EAF5").s().p("AAgBSQhGhMgKgRIgahDIAAgQQAbAPAVAQIAMAJQANANA5BQIATAjIAAAVg");
	this.shape_75.setTransform(319.2,493.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,0,0,4).p("AAAgkIAABJ");
	this.shape_76.setTransform(255.8,495.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#89351C").ss(1,0,0,4).p("Ag4AAQAAgMAJgKQAKgJANAAIBRAAIAAA/IhRAAQgNAAgKgJQgJgJAAgOg");
	this.shape_77.setTransform(206.8,495.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AB4A2D").s().p("AgYAgQgNAAgKgJQgJgJAAgOQAAgMAJgKQAKgJANAAIBRAAIAAA/g");
	this.shape_78.setTransform(206.8,495.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#D5C553").ss(1,0,0,4).p("AgkgfIBJAAIAAA/IhJAAg");
	this.shape_79.setTransform(248.7,495.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBDB64").s().p("AgkAgIAAg/IBIAAIAAA/g");
	this.shape_80.setTransform(248.7,495.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#C4A549").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_81.setTransform(238.7,495.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DCBB58").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_82.setTransform(238.7,495.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#AA6D36").ss(1,0,0,4).p("AgkgfIBJAAIAAA/IhJAAg");
	this.shape_83.setTransform(218.9,495.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C17D40").s().p("AgkAgIAAg/IBIAAIAAA/g");
	this.shape_84.setTransform(218.9,495.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#B8893E").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_85.setTransform(228.8,495.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CE9D4C").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_86.setTransform(228.8,495.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AouA+QgaAAgSgSQgSgSAAgaQAAgZASgSQASgSAaAAIRdAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAg");
	this.shape_87.setTransform(259.4,495.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("Av2AAIftAA");
	this.shape_88.setTransform(290.5,409);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("Av2AAIftAA");
	this.shape_89.setTransform(290.5,370);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AqHBtQAOAAAKgKQAKgJAAgPIAAhxIAIAAIAABxQAAAMgGAJQgFAJgKAGQgKAFgLAAgAuXA8QgWgNgNgWQgMgWAAgYQAAgYAMgXQANgVAWgNQAWgNAZAAQAaAAAUAMQAVANANAWQANAVAAAaQAAAZgNAWQgNAWgVANQgVAMgaAAQgZAAgVgNgAuThgQgUAMgMAUQgLAUAAAXQAAAXALAUQAMAVAUAMQAUALAWAAQAXAAAUgLQAUgMALgVQAMgUAAgXQAAgXgLgUQgMgUgUgMQgTgMgXAAQgYAAgTAMgAmrBAQgNgHgIgNQgIgNAAgRQAAgOAIgMQAIgNANgIQANgIARAAQANAAAKAFQAKAFAIAIIAAANQgIgMgJgGQgKgGgOAAQgPAAgKAHQgLAGgIAMQgHAKAAAOQAAAPAHALQAHALALAHQAMAGANAAQAbAAAPgYIAAANQgIAJgLAEQgKAFgNAAQgQAAgNgIgAN/A/QgNgHgIgOQgHgMAAgQQAAgPAHgNQAIgMANgIQAOgHAQAAQAZAAARAUIhLBJQAKAIAFACQAIADAJAAQANAAALgHQALgHAIgLIAAANQgKAKgKAEQgLAEgNAAQgPAAgNgIgAOCgcQgLAGgGAMQgHAKAAAOQAAATANAPIBHhFQgJgIgHgCQgHgDgKAAQgPAAgMAGgAKuBDQgJgEgEgGIAAgNQAEAKAJAGQAIAEAMAAQAMAAAHgHQAHgHAAgMQAAgJgEgGQgEgFgJgGIgYgOIgIgHQgDgFAAgGQAAgKAHgFQAGgGAMAAQANAAAJAGIAAAKQgIgJgOAAQgIAAgEADQgFAEAAAGQAAAFADAFQADAEAFADIARAJQANAIAFAGQAGAIAAALQAAAQgKAIQgJAJgPAAQgLAAgJgEgAJbBDQgKgEgDgGIAAgNQAEAKAIAGQAJAEAMAAQAMAAAGgHQAIgHAAgMQAAgJgEgGQgEgFgKgGIgYgOIgHgHQgDgFAAgGQAAgKAHgFQAHgGAKAAQANAAAJAGIAAAKQgHgJgOAAQgIAAgFADQgEAEAAAGQAAAGACAEQAEAEAEADIASAJQANAIAFAGQAFAIAAALQAAAPgJAJQgKAJgOAAQgLAAgJgEgAHiA7QgMgNAAgXIAAg9IAHAAIAAA9QAAAUALALQAKAKATAAQAMAAAJgFQAKgFAFgJQAGgIAAgOIAAg9IAIAAIAABrIgIAAIAAgVQgFALgMAGQgLAGgOAAQgWAAgNgMgAF1A/QgMgHgJgOQgHgMAAgQQAAgPAHgNQAIgMANgIQAOgHAQAAQAZAAASAUIhMBJQAJAHAHADQAHADAJAAQANAAALgHQALgGAIgMIAAANQgKAKgKAEQgLAEgNAAQgPAAgNgIgAF5gcQgLAGgHAMQgHAKAAAOQAAAUAOAOIBGhFQgIgHgHgDQgIgDgKAAQgPAAgLAGgACDA/QgMgHgJgOQgHgMAAgQQAAgPAHgNQAIgMANgIQAOgHAQAAQAZAAARAUIhLBJQAIAHAHADQAIADAJAAQANAAALgHQALgGAIgMIAAANQgKAKgKAEQgLAEgNAAQgPAAgNgIgACHgcQgLAGgHAMQgHAKAAAOQAAAUAOAOIBGhFQgIgHgHgDQgIgDgKAAQgPAAgLAGgAgHA/QgNgHgIgNQgHgNAAgQQAAgOAHgNQAIgNANgHQAMgIAQAAQAOAAAPAIQANAHAHAOIAAhiIAHAAIAACzIgHAAIAAgbQgIANgNAIQgNAIgPAAQgQAAgMgIgAgDgbQgLAHgHALQgHAKAAANQAAAOAHALQAHAMALAHQAKAGAOAAQANAAALgGQALgHAHgMQAHgLAAgNQAAgNgHgLQgGgLgMgHQgLgHgNAAQgOAAgKAHgAigBDQgJgEgDgGIAAgNQAEALAIAFQAJAEALAAQANAAAGgHQAIgHAAgMQAAgJgFgGQgDgFgKgGIgYgOIgHgHQgDgFAAgGQAAgKAGgFQAHgGALAAQANAAAJAGIAAAKQgHgJgOAAQgJAAgEADQgFAEAAAGQAAAFADAFQAEAEAEADIARAJQAOAIAEAGQAGAIAAALQAAAPgKAJQgJAJgOAAQgLAAgKgEgAoiA/QgNgHgHgOQgIgMAAgQQAAgPAIgNQAHgMANgIQAOgHAQAAQAZAAASAUIhMBJQAKAIAGACQAHADAJAAQANAAALgHQALgGAIgMIAAANQgJAKgKAEQgMAEgMAAQgQAAgNgIgAoegcQgMAGgGAMQgGAKAAAOQAAAUANAOIBGhFQgJgIgGgCQgIgDgKAAQgPAAgLAGgArUA/QgOgIgHgNIAAAbIgIAAIAAizIAIAAIAABjQAGgOAOgIQAOgIAPAAQAQAAANAIQANAHAHANQAIANAAAOQAAAQgIANQgHANgNAHQgNAIgQAAQgPAAgNgIgArQgbQgMAHgHALQgGAKAAAOQAAANAGALQAHAMAMAHQALAGAOAAQANAAALgGQAKgGAIgNQAGgLAAgOQAAgNgGgKQgHgLgLgHQgLgHgOAAQgOAAgKAHgAM2A7QgMgLAAgTIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgRAAgMgLgAlFA7QgMgLAAgTIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgSAAgLgLgAMBBFIAAhrIAIAAIAABrgAEYBFIAAhrIAIAAIAAAYQAGgMAIgGQAJgHAMAAQAHAAAIADIAAAJQgIgFgIAAQgIAAgIAFQgHAFgGAJQgFAJAAAJIAABAgAjjBFIAAhwQAAgLAGgJQAFgKAJgFQAKgGALAAIAAAHQgJAAgHAFQgIAEgFAIQgEAIAAAJIAAAFIAhAAIAAAGIghAAIAABlgAkOBFIAAhrIAIAAIAABrgAGGg5IAigcIAKAAIgiAcgAL/hCQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDgAkQhCQgDgCAAgEQAAgDADgCQACgDAEAAQADAAACADQADACAAADQAAAEgDACQgCADgDAAQgEAAgCgDgApnhCQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_90.setTransform(289.8,391.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ALKAzQgKgMgBgVQAAgTAKgMQALgNARAAQAQAAAJALQAKAKAAARIAAAIIg7AAQAAAPAHAIQAIAIANAAQANAAAOgGIAAAMIgNAEQgGABgIAAQgTAAgMgLgALUgIQgGAGgBALIAtAAQAAgKgGgHQgEgHgLAAQgKAAgHAHgAImAzQgKgMAAgVQAAgVAKgLQAJgMARAAQARAAAJANIACAAIgBgGIAAgpIAMAAIAAB5IgKAAIgCgMIAAAAQgKANgRAAQgRAAgJgLgAIvgGQgFAIgBAQQABARAFAIQAHAIALAAQAOAAAFgHQAHgHAAgQIAAgDQAAgSgHgHQgFgIgOAAQgLAAgHAJgAFDAzQgLgMAAgVQAAgTAKgMQAKgNARAAQAQAAAKALQAJAKAAARIAAAIIg7AAQAAAPAIAIQAHAIANAAQAOAAANgGIAAAMIgNAEQgGABgJAAQgTAAgKgLgAFNgIQgHAGgBALIAtAAQAAgKgGgHQgEgHgLAAQgLAAgFAHgAEFAkIAAgyIgMAAIAAgGIAMgGIAFgSIAHAAIAAAUIAZAAIAAAKIgZAAIAAAxQAAAHAEAFQAEAEAHAAIAGAAIAFgBIAAAKIgGABIgHABQgZAAAAgagADMAkIAAgyIgMAAIAAgGIAMgGIAFgSIAIAAIAAAUIAZAAIAAAKIgZAAIAAAxQAAAIADAEQAFAEAGAAIAGAAIAGgBIAAAKIgOACQgZAAAAgagABzA4QgHgHAAgMQAAgaApgBIAOgBIAAgFQAAgJgDgFQgFgFgKAAQgLAAgNAHIgEgKIAOgGIAPgCQAPAAAIAHQAIAHAAAOIAAA7IgLAAIgCgNIgBAAQgGAIgGADQgHADgJAAQgNAAgHgGgACXATQgRABgGAEQgHAEAAAJQAAAHAFAEQAEADAHAAQANAAAGgGQAIgHgBgMIAAgIgAgPA4QgHgHAAgMQAAgaApgBIAOgBIAAgFQAAgJgFgFQgDgFgKAAQgMAAgLAHIgFgKIANgGIAQgCQAPAAAHAHQAIAHgBAOIAAA7IgJAAIgCgNIgBAAQgGAIgHADQgGADgKAAQgLAAgIgGgAATATQgPABgFAEQgIAEABAJQAAAHAEAEQAEADAHAAQAMAAAHgGQAHgHAAgMIAAgIgAkpA3QgJgIABgQIAAg3IANAAIAAA2QAAALAFAFQAFAFAKAAQANAAAGgHQAHgHgBgRIAAgsIAOAAIAABVIgLAAIgCgMIgBAAQgDAFgIAFQgIADgIAAQgQAAgHgHgAKDA9IAAhVIALAAIABAQIABAAQAFgIAGgFQAHgFAIAAIAKABIgBAMIgKgBQgLAAgGAJQgIAHAAANIAAAugAH5A9IAAg4QAAgJgEgGQgGgFgJAAQgOAAgGAIQgGAGAAARIAAAtIgNAAIAAhVIAKAAIACAMIABAAQADgGAIgEQAHgEAJAAQAPAAAJAIQAHAHAAAQIAAA4gAGWA9IAAhVIANAAIAABVgAhhA9IAAg4QAAgJgEgGQgFgFgJAAQgMAAgGAHQgGAHAAAOIAAAwIgNAAIAAg4QAAgJgEgGQgFgFgIAAQgNAAgFAIQgGAHAAAQIAAAtIgNAAIAAhVIAKAAIACAMIABAAQADgGAIgEQAGgEAIAAQAUAAAHAPIAAAAQAFgHAGgEQAIgEAJAAQAPAAAHAIQAHAIAAAPIAAA4gAlYA9IAAg4QAAgJgFgGQgEgFgJAAQgMAAgGAHQgFAGAAAPIAAAwIgNAAIAAg4QAAgJgFgGQgFgFgJAAQgMAAgFAIQgHAHABAQIAAAtIgNAAIAAhVIALAAIACAMIAAAAQAEgGAGgEQAHgEAJAAQATAAAHAPIAAAAQAFgHAGgEQAIgEAJAAQAPAAAGAIQAIAHAAAQIAAA4gAnuA9IAAhVIANAAIAABVgAoVA9IAAg4QAAgJgFgGQgGgFgJAAQgNAAgHAIQgGAHAAAQIAAAtIgNAAIAAhVIAKAAIACAMIACAAQADgGAIgEQAGgEAKAAQAPAAAIAIQAHAHABAQIAAA4gAp4A9IAAhVIAMAAIAABVgAqjA9IAAhJIABgcIAAAAIgoBlIgLAAIgmhlIgBAAIABAdIAABIIgMAAIAAhyIAUAAIAkBeIABAAIAkheIAUAAIAABygAANgjIgVgYIAAgCIAQAAQABAEAGAIIAHAMIAAACgAGXgpQgCgCAAgEQAAgFACgCQACgCAEAAQADAAACACQADADAAAEQAAAEgDACQgCACgDAAQgEAAgCgCgAntgpQgCgCAAgEQAAgEACgDQACgCAEAAQADAAACACQADADAAAEQAAAEgDACQgCACgDAAQgEAAgCgCgAp3gpQgCgCgBgEQABgFACgCQACgCADAAQAEAAACACQACADAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_91.setTransform(268.2,471.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ADqAwQgLgNAAgTQAAgUAKgMQAKgNASABQAQAAAJAKQAJAKAAARIAAAIIg7AAQABAQAHAHQAHAIANAAQAOAAAOgGIAAAMIgNAEQgGABgJABQgTAAgLgMgAD0gLQgGAHgBALIAtAAQAAgLgGgHQgGgGgKgBQgKABgGAGgAjCA0QgIgIAAgQIAAg3IANAAIAAA2QAAAMAFAEQAFAFAKABQANAAAHgIQAGgHAAgRIAAgsIANAAIAABVIgLAAIgCgMIgBAAQgDAHgIADQgIADgIABQgPgBgIgHgAkmA2IAAgMIAPAEIARACQANgBAHgFQAGgEAAgKQAAgFgCgEQgDgEgFgDIgRgHQgQgFgHgIQgHgIAAgMQAAgNAKgIQAKgIAQAAQASAAAOAGIgEAMQgNgGgPAAQgKAAgGAFQgGAEAAAIQAAAGACADQACAEAFAEQAGADAKAEQASAGAHAGQAHAIAAALQAAAQgLAIQgMAJgSAAQgTgBgMgFgACiA6IAAhVIALAAIACAQIAAAAQAFgIAHgFQAHgEAIAAIAKAAIgCAMIgJgBQgLAAgHAJQgIAIAAAMIAAAugABlA6IgghVIANAAIATAyIAHAXIABAAIAahJIAOAAIghBVgAAqA6IAAhVIANAAIAABVgAgTA6IgghVIAOAAIAaBJIAAAAIAZhJIAOAAIgfBVgAhnA6IAAhVIALAAIACAQIAAAAQAFgIAHgFQAHgEAHAAIALAAIgCAMIgKgBQgKAAgHAJQgIAIAAAMIAAAugAArgsQgCgCAAgEQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_92.setTransform(219.3,437.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqtbMAlVAAAIAAa3MglVAAAg");
	this.shape_93.setTransform(287,442.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.2)").s().p("AyqNcIAA63MAlVAAAIAAa3g");
	this.shape_94.setTransform(287,442.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// decor
	this.instance_1 = new lib._1_niveau();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ecran_niveau2, rect = new cjs.Rectangle(0,0,800,600), [rect]);


(lib.ecran_niveau1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// titre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ArjAAIXHAA");
	this.shape.setTransform(410.3,265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ArjAAIXHAA");
	this.shape_1.setTransform(410.3,221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkWgbIANAAIBDCMIBDiMIANAAIhQCmgAhCB/QgSgLgNgVQgLgSAAgYQAAgZALgSQALgTAUgKQAUgLAZAAQAkAAAbAdIhwBvQALAKAMAEQALAFAOAAQASAAARgKQARgKALgRIAAATQgOAPgPAGQgPAHgUAAQgWAAgVgMgAg9gKQgQAJgKAQQgKAQAAAVQAAAeAUAVIBohoQgLgJgMgFQgLgFgOAAQgWAAgSAKgAEvB4QgTgUAAghIAAheIAMAAIAABeQAAAdAPARQARAPAcAAQARAAAOgHQAPgHAIgPQAIgNAAgTIAAheIAMAAIAACiIgMAAIAAgfQgIAQgQAJQgRAJgVAAQgjAAgSgSgABvB/QgTgLgMgUQgMgUAAgXQAAgWAMgUQAMgTATgLQATgLAYAAQAYAAAUAMQAWANAIASIAAgoIALAAIAACiIgLAAIAAgpQgJATgWAOQgTALgYAAQgYAAgTgLgAB1gKQgSALgJAQQgKARAAAUQAAAUAKARQAKAQASALQAQAKAVAAQAUAAARgKQARgLAJgQQAKgSAAgUQAAgTgKgSQgKgQgRgKQgRgKgUAAQgTAAgSAKgApEhsIAADzIgLAAIAAkRIDHD1IAAjxIAKAAIAAEQgAJECHIAAkCIgrAAIAAgLIA3AAIAAENgAlCCHIAAiiIALAAIAACigAlFhDQgEgEAAgFQAAgFAEgEQADgDAGAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDADgFAAQgGAAgDgDg");
	this.shape_2.setTransform(410.3,243.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// texte
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgJIASAAIAFgRIAGARIASAAIgPAJIAGASg");
	this.shape_3.setTransform(552.5,377.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgJIASAAIAFgRIAGARIASAAIgPAJIAGASg");
	this.shape_4.setTransform(571.5,359.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_5.setTransform(561.6,368.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_6.setTransform(561.6,368.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_7.setTransform(523.5,375.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgJIASAAIAFgRIAGARIASAAIgPAJIAGASg");
	this.shape_8.setTransform(542.5,359.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_9.setTransform(533.6,368.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_10.setTransform(533.6,368.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgJIASAAIAFgRIAGARIASAAIgPAJIAGASg");
	this.shape_11.setTransform(493.5,377.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgJIASAAIAFgRIAGARIASAAIgPAJIAGASg");
	this.shape_12.setTransform(511.5,359.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_13.setTransform(501.6,368.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_14.setTransform(501.6,368.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgKIASAAIAFgQIAGAQIASAAIgPAKIAGASg");
	this.shape_15.setTransform(464.5,376.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgKIASAAIAFgQIAGAQIASAAIgPAKIAGASg");
	this.shape_16.setTransform(483.5,358.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_17.setTransform(473.6,367.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_18.setTransform(473.6,367.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAMIgOAKIAGgRIgPgKIASAAIAFgRIAGARIASAAIgPAKIAGARg");
	this.shape_19.setTransform(435.5,374.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAAMIgOALIAGgSIgPgKIASAAIAFgQIAGAQIASAAIgPAKIAGASg");
	this.shape_20.setTransform(454.5,358.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("ABig1QgRgmgiAHQgbAFgSAaQgEgjgogJQgqgKgRA2QgSA9A7A0QAdAaAhANIAUgLQAZgPASgRQA6g3gZg2g");
	this.shape_21.setTransform(445.6,367.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8A8Qg7g0ASg8QARg3AqAKQAoAKAEAjQASgaAbgGQAigHARAnQAZA2g6A2QgSARgZAPIgUAMQghgOgdgag");
	this.shape_22.setTransform(445.6,367.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCACIgIgBIAHgCIgBgJIAFAGIAIgEIgEAIIAGAEIgIgBIgDAIg");
	this.shape_23.setTransform(446.5,420.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCADIgMgBIAKgFIgCgLIAIAIIAKgFIgFAKIAIAHIgLgCIgEALg");
	this.shape_24.setTransform(461.8,423.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCADIgIgBIAHgEIgBgIIAFAGIAIgEIgEAHIAGAFIgIgBIgDAIg");
	this.shape_25.setTransform(446.5,408.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAACIgHgBIAGgCIgBgFIADAEIAFgDIgCAFIADADIgFgBIgCAFg");
	this.shape_26.setTransform(454.7,404.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBACIgFgBIAFgCIgBgFIADAEIAFgDIgDAFIAEADIgFgBIgCAFg");
	this.shape_27.setTransform(436.2,420);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgBACIgJgBIAIgCIgCgJIAFAGIAHgEIgDAIIAGAEIgJgBIgCAIg");
	this.shape_28.setTransform(467.6,411.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAEIgJACIAFgHIgBgJIAGAGIAJAAIgFAFIAAAJg");
	this.shape_29.setTransform(455,421);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAAHIgQACIAIgLIAAgOIAKAIIAPAAIgJAKIABAPg");
	this.shape_30.setTransform(446.4,403.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAHIgQACIAIgLIAAgOIAKAIIAPAAIgKAKIACAPg");
	this.shape_31.setTransform(434.1,413.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAGIgNABIAHgKIgCgNIAJAJIANABIgIAJIADAOg");
	this.shape_32.setTransform(458.3,414.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAIIgUADIALgOIgBgRIAMAKIATAAIgMANIACASg");
	this.shape_33.setTransform(464.8,403.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAEIgHAAIAEgGIgBgHIAFAFIAHAAIgEAFIACAJg");
	this.shape_34.setTransform(461.5,398.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAFIgKABIAFgIIgBgLIAHAHIAKABIgGAHIACAMg");
	this.shape_35.setTransform(439.9,412.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AghAjIAwgQIAmgwIgwARAghAjIAmgvAghAjIgZgEIARglIAugG");
	this.shape_36.setTransform(443.7,420);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#90B2F4").s().p("Ag3AcIASgkIAtgHIAwgQIgmAwIgvAPg");
	this.shape_37.setTransform(443.4,420.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAmgZIg4ANIgXAhg");
	this.shape_38.setTransform(458.1,410.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8FBFD").s().p("AgQgKIA4gNIhPAvg");
	this.shape_39.setTransform(457.9,410.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgRgDIBvgnQgGAHgIAGQgPALhwA6IAegrIgmALIguAHIAGgNIAWgOg");
	this.shape_40.setTransform(449.8,417.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C4D8F2").s().p("AgNgCIBvgnIgNANQgQAMhwA5gAhbADIAXgOIA3AJIglAMIgvAGg");
	this.shape_41.setTransform(449.4,417.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ABuhNIATADQgdAlgRAQAAIAEIAXghAhoBNIAugQQBwg7APgKQAIgGAGgHIhLAZABuhNIhPAwAA2hAIgXAjAA2hAIA4gNAA2hAIgfAGQgaALhnBGIgGANAhCAdIguAHAhoBNIAmgwIBKgZAhoBNIgagEIASgl");
	this.shape_42.setTransform(450.9,415.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D9EAF5").s().p("AiBBKIAYgzQBnhGAagLIBXgSIATACQgeAlgQAQIgOANQgPALhwA6IguAQg");
	this.shape_43.setTransform(450.8,415.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("ABIBCIAAgaQAJAEAJACQAIADALAAQAcAAAAgXQAAgVgdAAIgWADIgMgHIAGhHIBNAAIAAAZIgzAAIgCAcIADAAQAGgCAJAAQAUAAANAMQAMALAAAUQAAAXgPAOQgOAMgcAAQgYAAgOgHgAgsBCIAAgaQALAFAHACQALADAJAAQAOAAAHgGQAHgEAAgMQAAgKgIgEQgJgEgQAAIgLAAIAAgWIALAAQAQAAAHgFQAIgEAAgLQAAgQgUAAQgHAAgGACQgHACgKAHIgOgVQATgOAbAAQAWAAANAJQANAIAAARQAAAOgIAIQgIAJgPAEIAAABQARACAJAHQAJAJAAAOQAAAUgPAMQgOALgcAAQgXAAgSgHgAhWBIIgXgmIgXAmIgiAAIAlg4Igjg1IAiAAIAVAjIAVgjIAiAAIgkA1IAmA4g");
	this.shape_44.setTransform(484.8,414.8);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(305.4,366,1,1,0,0,0,8.4,8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhHBFQgEgEgBgHQABgJAEgEQAEgEAJgBQAHABAFAEQAEAEABAJQgBAHgEAEQgFAFgHAAQgJAAgEgFgABnA3QgNgSABglQAAglAMgSQAMgSAZAAQAYAAANATQAOATAAAjQAAAlgNASQgMASgaAAQgZAAgMgSgAB9glQgEAMAAAZQAAAbAEALQAEALALAAQALAAAFgLQAEgOAAgYQAAgYgEgNQgFgMgLAAQgLAAgEAMgAgWBCIAAgaQAKAFAIACQAJACAJAAQAPAAAIgFQAHgEAAgMQAAgKgJgFQgIgDgRAAIgLAAIAAgXIALAAQAQAAAIgEQAHgEAAgLQAAgQgTAAQgJAAgGACQgHACgIAGIgOgUQATgPAaAAQAXABAMAIQANAKAAAPQABANgJAKQgHAJgPAEIAAAAQAQACAKAIQAJAIAAAPQgBAUgPAMQgOALgcAAQgXAAgRgHgAiVBHIABhuIgbAYIgPgTIAugkIAZAAIAACNgAhHgKQgEgFgBgHQABgJAEgEQAFgEAIAAQAHAAAFAFQAEADABAJQgBAHgEAFQgEAEgIAAQgJAAgEgEg");
	this.shape_45.setTransform(340.2,365.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AphAAITDAA");
	this.shape_46.setTransform(495,339);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AphAAITDAA");
	this.shape_47.setTransform(495,300);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("An9BTQgWgNgMgWQgMgVAAgbQAAgZAMgWQANgVAWgNQAVgNAZAAQARAAAJADQAJADAOAIIAAAJQgNgJgKgDQgKgEgQAAQgXAAgUAMQgTAMgMAVQgLAUAAAWQAAAXALAVQALAUAUAMQATAMAWAAQARAAALgEQAMgEALgIIAAAJQgNAHgLADQgLAEgPAAQgZAAgVgMgAltBWQgOgIgHgNQgIgOAAgPQAAgQAIgNQAHgMAOgIQAMgIARAAQAQAAANAIQANAIAHAMQAIANAAAQQAAAQgIANQgGANgOAIQgMAIgRAAQgRAAgMgIgAlpgHQgMAHgGALQgHALAAAOQAAAOAHAMQAHAMALAGQALAHAOAAQANAAAMgHQAKgGAIgMQAGgNAAgNQAAgNgGgMQgHgMgLgGQgMgHgNAAQgOAAgLAHgAH3BZQgJgEgEgHIAAgMQAEAJAIAGQAJAFAMAAQAMAAAHgHQAHgIAAgLQAAgKgEgFQgFgGgJgFIgYgPIgHgIQgDgFAAgGQAAgIAHgGQAHgGAKAAQANAAAJAGIAAALQgHgKgOAAQgIAAgFAEQgEAEAAAFQAAAEACAFIAIAHIASAKQANAIAFAHQAFAHAAAMQAAAPgJAJQgKAJgOAAQgLAAgJgEgAGRBVQgNgIgIgNQgIgNAAgPQAAgQAIgNQAHgMAOgHQAOgHAPAAQAaAAARATIhLBKQAJAHAGACQAHADAKAAQAMAAALgGQAMgHAHgLIAAAMQgJAKgKAFQgLAEgNAAQgQAAgMgIgAGUgGQgLAGgHAKQgGAKAAAPQAAAUANAOIBGhFQgHgHgIgDQgIgDgKAAQgPAAgLAHgAAbBVQgOgIgHgNQgHgMAAgQQAAgPAHgNQAHgMAOgIQAMgIAQAAQAPAAAPAJQANAIAGAMIAAgaIAIAAIAABrIgIAAIAAgbQgHAOgNAIQgNAIgQAAQgQAAgMgIgAAfgGQgLAGgIAMQgGALAAANQAAAOAGALQAIAMALAGQALAHAOAAQANAAALgHQALgGAHgMQAHgMAAgNQAAgNgHgMQgHgLgLgGQgLgHgOAAQgOAAgKAHgAFHBRQgLgMAAgSIAAhvIAIAAIAAArIAhAAIAAAHIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAGQgSAAgMgKgAh5BRQgMgMAAgSIAAhvIAIAAIAAArIAhAAIAAAHIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAGQgRAAgMgKgAEYBaIAAg/QAAgTgJgKQgJgLgSAAQgNAAgKAGQgKAGgGAIQgGAKAAANIAAA8IgIAAIAAhrIAIAAIAAAXQAFgLANgHQANgIAPAAQAUAAALANQAMALAAAXIAAA/gACUBaIAAhrIAHAAIAABrgAhIBaIAAhrIAIAAIAAAYQAFgLAJgHQAJgGAMAAQAIAAAHADIAAAJQgHgGgIAAQgJAAgIAGQgIAFgFAIQgFAJAAAKIAAA/gAioBaIAAg/QAAgTgKgKQgJgLgRAAQgOAAgJAGQgLAGgGAIQgGAKAAANIAAA8IgIAAIAAhrIAIAAIAAAXQAFgLANgHQANgIAPAAQAUAAALANQAMALAAAXIAAA/gACRgsQgCgCAAgEQAAgEACgCQAEgCACAAQAEAAACACQADADAAADQAAADgDADQgCACgEAAQgCAAgEgCg");
	this.shape_48.setTransform(493.7,319);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqtbMAlVAAAIAAa3MglVAAAg");
	this.shape_49.setTransform(532,372.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.2)").s().p("AyqNcIAA63MAlVAAAIAAa3g");
	this.shape_50.setTransform(532,372.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#AB4A2D").s().p("AAAABQAGgHAJAEQgKgPgFAAQgCAAgEAMQgEAMgHADQgFACAFgMQAHgQgHgFQgGgEgFADQgEADgBAFQADgTAKgDQAJgDAWAPQAZAQgCALQgBADgSAAQgGAAgDACQgEADgCAHQgDAHAIAMQgVgTAQgRg");
	this.shape_51.setTransform(204,417.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AB4A2D").s().p("AAAAAQgCgDgJAEIgEACQACgCACgKQABgKABgBQACgCAUANQAIAFgQAZQAAgSgFgDg");
	this.shape_52.setTransform(198.4,412.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9EE83").s().p("AgEARQgEAFgNAAQgHAAgDgFQgCgEABgFQAQAFAEAAIAQAAQAGAAAIgSQAJgRADABQAHADgHASIgHAAQgMAWgHAAQgGAAgCgFg");
	this.shape_53.setTransform(200.7,430.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FDF6A4").s().p("AgtAkQgDgBgCAFQgCAEgBAFQgWgeAJAAIAKACQAJAAgBgNQgBgFgEgEQgEgGgHAAIAEgIQANAEANAAQASgBAHgIQAQgRAMgRQgCAPADANQAFASANADQAOAEAJgEQAGgEACgGIAAAqIgIgBQgGAAAAADIgEAKQgDgMgKgFQgBAAgHgOQgFgIgSACQgPACgIAGQgHAEAAAFIgMAAIAAAkQgEgRgGgCg");
	this.shape_54.setTransform(201,424.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EBC294").s().p("AgaAQQgQgNAFgUQAEgLASAEQANADAOAJQAEgEAGgCQAHgCAFADQAKAFgJASQgJAVgZAAQgQgCgLgJg");
	this.shape_55.setTransform(201,429.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E19F63").s().p("Ag8A+QgeggAVguQAGgIAJgIQAMgJAIgBQALAAgLAJQgLAKgIACQANAXAjgmQARgVgDgJQgDgGgLACQAAgGADgGQADgHAKgCQANgCAWATQAWASgGAIIgQAJQgNAKALANQAKALAIgBQAGAAAEgGQAFAMACAOQABAUgIALQgEgBgEACQgEACgCAGQgCALgQAMQgTAPgVAAQgmgHgWgXg");
	this.shape_56.setTransform(201.1,423.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgBACIgHgCIAHgBIAAgHIADAGIAGgDIgDAFIADAGIgGgDIgDAGg");
	this.shape_57.setTransform(325.3,431.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBADIgJgDIAJgCIAAgJIAEAIIAIgDIgFAGIAFAHIgIgDIgEAIg");
	this.shape_58.setTransform(333.1,421.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgBACIgGgCIAGgBIAAgHIADAGIAHgDIgFAFIAFAGIgHgDIgDAGg");
	this.shape_59.setTransform(317,426.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAACIgFgCIAFgBIgBgEIACADIAFgBIgDADIADAEIgFgBIgBADg");
	this.shape_60.setTransform(317.3,419.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgBACIgHgCIAHgBIAAgHIADAGIAGgDIgDAFIADAGIgGgDIgDAGg");
	this.shape_61.setTransform(327.1,412.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCADIgHgDIAHgCIACgGIACAGIAHACIgHACIgCAIg");
	this.shape_62.setTransform(329.1,425.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgFAFIgKgFIAKgDIAFgMIAEALIAMAEIgLADIgFANg");
	this.shape_63.setTransform(313.3,424.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgFAEIgKgEIAKgDIAFgJIAEAJIAMADIgMACIgEALg");
	this.shape_64.setTransform(325.9,420.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgGAGIgMgGIAMgFIAGgNIAFANIAOAFIgOADIgFAQg");
	this.shape_65.setTransform(320.5,411.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgDACIgFgCIAFgBIADgGIACAGIAIABIgIACIgCAGg");
	this.shape_66.setTransform(315.8,412.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEADIgIgDIAIgCIAEgHIADAHIAJACIgJACIgDAIg");
	this.shape_67.setTransform(317.5,432.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAiAXIgSglIgrgXIATAkAAiAXIgqgYAAiAXIAAAVIgggKIgKgj");
	this.shape_68.setTransform(328.3,428.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#90B2F4").s().p("AAAAfIgLgjIgTgkIArAYIASAkIAAAVg");
	this.shape_69.setTransform(328.6,428.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgZgZIARArIAeAOg");
	this.shape_70.setTransform(319.3,418);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F8FBFD").s().p("AgGAPIgRgrIAvA5g");
	this.shape_71.setTransform(319.1,418.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AACAOIgshUIAMAKQANANA6BQIgngTIAOAdIALAkIgLgEIgOgQg");
	this.shape_72.setTransform(325.8,424);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C4D8F2").s().p("AARBHIgOgQIAAgtIgshUIAMAKQANANA6BQIgngTIAOAdIALAkg");
	this.shape_73.setTransform(325.7,424.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("ABLBLIgSgjQg6hQgNgNIgMgJIAdA4IgegOAhKhNIAvA5AhKhNIAAgQQAbAPAVAQAg5giIAeAOAg5giIgRgrAg5giIAJAYQAKARBGBMIALADAAgAyIgdg4AAgAyIALAkABLBLIgrgZABLBLIAAAVIgggK");
	this.shape_74.setTransform(324.2,423.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D9EAF5").s().p("AAgBSQhGhMgLgRIgZhDIAAgQQAbAPAVAQIAMAJQANANA6BQIASAjIAAAVg");
	this.shape_75.setTransform(324.2,423.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,0,0,4).p("AAAgkIAABJ");
	this.shape_76.setTransform(260.8,425.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#89351C").ss(1,0,0,4).p("Ag4AAQAAgMAJgKQAKgJANAAIBRAAIAAA/IhRAAQgNAAgKgJQgJgJAAgOg");
	this.shape_77.setTransform(211.8,425.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AB4A2D").s().p("AgYAgQgNAAgKgJQgJgJAAgOQAAgMAJgKQAKgJANAAIBRAAIAAA/g");
	this.shape_78.setTransform(211.8,425.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#D5C553").ss(1,0,0,4).p("AgkgfIBJAAIAAA/IhJAAg");
	this.shape_79.setTransform(253.7,425.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBDB64").s().p("AgjAgIAAg/IBIAAIAAA/g");
	this.shape_80.setTransform(253.7,425.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#C4A549").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_81.setTransform(243.7,425.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DCBB58").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_82.setTransform(243.7,425.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#AA6D36").ss(1,0,0,4).p("AgkgfIBJAAIAAA/IhJAAg");
	this.shape_83.setTransform(223.9,425.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C17D40").s().p("AgjAgIAAg/IBIAAIAAA/g");
	this.shape_84.setTransform(223.9,425.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#B8893E").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_85.setTransform(233.8,425.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CE9D4C").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_86.setTransform(233.8,425.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AouA+QgaAAgSgSQgSgSAAgaQAAgZASgSQASgSAaAAIRdAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAg");
	this.shape_87.setTransform(264.4,425.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("Av2AAIftAA");
	this.shape_88.setTransform(295.5,339);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("Av2AAIftAA");
	this.shape_89.setTransform(295.5,300);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AqHBtQAOAAAKgKQAKgJAAgPIAAhxIAIAAIAABxQAAAMgGAJQgFAJgKAGQgKAFgLAAgAuXA8QgWgNgNgWQgMgWAAgYQAAgYAMgXQANgVAWgNQAWgNAZAAQAaAAAUAMQAVANANAWQANAVAAAaQAAAZgNAWQgNAWgVANQgVAMgaAAQgZAAgVgNgAuThgQgUAMgMAUQgLAUAAAXQAAAXALAUQAMAVAUAMQAUALAWAAQAXAAAUgLQAUgMALgVQAMgUAAgXQAAgXgLgUQgMgUgUgMQgTgMgXAAQgYAAgTAMgAmrBAQgNgHgIgNQgIgNAAgRQAAgOAIgMQAIgNANgIQANgIARAAQANAAAKAFQAKAFAIAIIAAANQgIgMgJgGQgKgGgOAAQgPAAgKAHQgLAGgIAMQgHAKAAAOQAAAPAHALQAHALALAHQAMAGANAAQAbAAAPgYIAAANQgIAJgLAEQgKAFgNAAQgQAAgNgIgAN/A/QgNgHgIgOQgHgMAAgQQAAgPAHgNQAIgMANgIQAOgHAQAAQAZAAARAUIhLBJQAKAIAFACQAIADAJAAQANAAALgHQALgHAIgLIAAANQgKAKgKAEQgLAEgNAAQgPAAgNgIgAOCgcQgLAGgGAMQgHAKAAAOQAAATANAPIBHhFQgJgIgHgCQgHgDgKAAQgPAAgMAGgAKuBDQgJgEgEgGIAAgNQAEAKAJAGQAIAEAMAAQAMAAAHgHQAHgHAAgMQAAgJgEgGQgEgFgJgGIgYgOIgIgHQgDgFAAgGQAAgKAHgFQAGgGAMAAQANAAAJAGIAAAKQgIgJgOAAQgIAAgEADQgFAEAAAGQAAAFADAFQADAEAFADIARAJQANAIAFAGQAGAIAAALQAAAQgKAIQgJAJgPAAQgLAAgJgEgAJbBDQgKgEgDgGIAAgNQAEAKAIAGQAJAEAMAAQAMAAAGgHQAIgHAAgMQAAgJgEgGQgEgFgKgGIgYgOIgHgHQgDgFAAgGQAAgKAHgFQAHgGAKAAQANAAAJAGIAAAKQgHgJgOAAQgIAAgFADQgEAEAAAGQAAAGACAEQAEAEAEADIASAJQANAIAFAGQAFAIAAALQAAAPgJAJQgKAJgOAAQgLAAgJgEgAHiA7QgMgNAAgXIAAg9IAHAAIAAA9QAAAUALALQAKAKATAAQAMAAAJgFQAKgFAFgJQAGgIAAgOIAAg9IAIAAIAABrIgIAAIAAgVQgFALgMAGQgLAGgOAAQgWAAgNgMgAF1A/QgMgHgJgOQgHgMAAgQQAAgPAHgNQAIgMANgIQAOgHAQAAQAZAAASAUIhMBJQAJAHAHADQAHADAJAAQANAAALgHQALgGAIgMIAAANQgKAKgKAEQgLAEgNAAQgPAAgNgIgAF5gcQgLAGgHAMQgHAKAAAOQAAAUAOAOIBGhFQgIgHgHgDQgIgDgKAAQgPAAgLAGgACDA/QgMgHgJgOQgHgMAAgQQAAgPAHgNQAIgMANgIQAOgHAQAAQAZAAARAUIhLBJQAIAHAHADQAIADAJAAQANAAALgHQALgGAIgMIAAANQgKAKgKAEQgLAEgNAAQgPAAgNgIgACHgcQgLAGgHAMQgHAKAAAOQAAAUAOAOIBGhFQgIgHgHgDQgIgDgKAAQgPAAgLAGgAgHA/QgNgHgIgNQgHgNAAgQQAAgOAHgNQAIgNANgHQAMgIAQAAQAOAAAPAIQANAHAHAOIAAhiIAHAAIAACzIgHAAIAAgbQgIANgNAIQgNAIgPAAQgQAAgMgIgAgDgbQgLAHgHALQgHAKAAANQAAAOAHALQAHAMALAHQAKAGAOAAQANAAALgGQALgHAHgMQAHgLAAgNQAAgNgHgLQgGgLgMgHQgLgHgNAAQgOAAgKAHgAigBDQgJgEgDgGIAAgNQAEALAIAFQAJAEALAAQANAAAGgHQAIgHAAgMQAAgJgFgGQgDgFgKgGIgYgOIgHgHQgDgFAAgGQAAgKAGgFQAHgGALAAQANAAAJAGIAAAKQgHgJgOAAQgJAAgEADQgFAEAAAGQAAAFADAFQAEAEAEADIARAJQAOAIAEAGQAGAIAAALQAAAPgKAJQgJAJgOAAQgLAAgKgEgAoiA/QgNgHgHgOQgIgMAAgQQAAgPAIgNQAHgMANgIQAOgHAQAAQAZAAASAUIhMBJQAKAIAGACQAHADAJAAQANAAALgHQALgGAIgMIAAANQgJAKgKAEQgMAEgMAAQgQAAgNgIgAoegcQgMAGgGAMQgGAKAAAOQAAAUANAOIBGhFQgJgIgGgCQgIgDgKAAQgPAAgLAGgArUA/QgOgIgHgNIAAAbIgIAAIAAizIAIAAIAABjQAGgOAOgIQAOgIAPAAQAQAAANAIQANAHAHANQAIANAAAOQAAAQgIANQgHANgNAHQgNAIgQAAQgPAAgNgIgArQgbQgMAHgHALQgGAKAAAOQAAANAGALQAHAMAMAHQALAGAOAAQANAAALgGQAKgGAIgNQAGgLAAgOQAAgNgGgKQgHgLgLgHQgLgHgOAAQgOAAgKAHgAM2A7QgMgLAAgTIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgRAAgMgLgAlFA7QgMgLAAgTIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgSAAgLgLgAMBBFIAAhrIAIAAIAABrgAEYBFIAAhrIAIAAIAAAYQAGgMAIgGQAJgHAMAAQAHAAAIADIAAAJQgIgFgIAAQgIAAgIAFQgHAFgGAJQgFAJAAAJIAABAgAjjBFIAAhwQAAgLAGgJQAFgKAJgFQAKgGALAAIAAAHQgJAAgHAFQgIAEgFAIQgEAIAAAJIAAAFIAhAAIAAAGIghAAIAABlgAkOBFIAAhrIAIAAIAABrgAGGg5IAigcIAKAAIgiAcgAL/hCQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDgAkQhCQgDgCAAgEQAAgDADgCQACgDAEAAQADAAACADQADACAAADQAAAEgDACQgCADgDAAQgEAAgCgDgApnhCQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_90.setTransform(294.8,321.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ALLAzQgLgMAAgVQAAgTAKgMQAKgNARAAQARAAAJALQAJAKAAARIAAAIIg7AAQAAAPAIAIQAHAIANAAQAOAAANgGIAAAMIgNAEQgGABgJAAQgSAAgLgLgALVgIQgGAGgCALIAtAAQAAgKgFgHQgGgHgKAAQgKAAgGAHgAImAzQgKgMAAgVQAAgVAKgLQAIgMARAAQASAAAJANIACAAIgCgGIAAgpIAOAAIAAB5IgLAAIgCgMIgBAAQgIANgTAAQgRAAgIgLgAIwgGQgHAIABAQQgBARAHAIQAFAIAMAAQANAAAHgHQAFgHAAgQIAAgDQAAgSgFgHQgHgIgNAAQgMAAgFAJgAFCAzQgLgMAAgVQAAgTAKgMQALgNARAAQAQAAAJALQAKAKAAARIAAAIIg7AAQAAAPAHAIQAIAIANAAQANAAAOgGIAAAMIgNAEQgGABgIAAQgUAAgLgLgAFMgIQgGAGgBALIAtAAQAAgKgFgHQgFgHgLAAQgKAAgHAHgAEEAkIAAgyIgMAAIAAgGIAMgGIAGgSIAIAAIAAAUIAZAAIAAAKIgZAAIAAAxQAAAHADAFQAEAEAGAAIAHAAIAFgBIAAAKIgGABIgIABQgZAAAAgagADMAkIAAgyIgMAAIAAgGIAMgGIAGgSIAHAAIAAAUIAZAAIAAAKIgZAAIAAAxQAAAIADAEQAEAEAHAAIAHAAIAEgBIAAAKIgNACQgZAAAAgagABzA4QgIgHAAgMQAAgaAqgBIAPgBIAAgFQAAgJgFgFQgEgFgJAAQgMAAgNAHIgEgKIAOgGIAPgCQAPAAAIAHQAHAHAAAOIAAA7IgKAAIgCgNIAAAAQgHAIgHADQgFADgKAAQgNAAgHgGgACWATQgPABgHAEQgHAEAAAJQAAAHAEAEQAFADAIAAQAMAAAHgGQAGgHABgMIAAgIgAgPA4QgHgHAAgMQAAgaApgBIAOgBIAAgFQAAgJgEgFQgEgFgKAAQgMAAgMAHIgEgKIAOgGIAOgCQAPAAAJAHQAGAHABAOIAAA7IgKAAIgDgNIAAAAQgGAIgHADQgGADgKAAQgLAAgIgGgAAUATQgQABgGAEQgGAEgBAJQAAAHAFAEQAEADAHAAQAMAAAHgGQAGgHAAgMIAAgIgAkqA3QgHgIgBgQIAAg3IAOAAIAAA2QAAALAEAFQAGAFAJAAQAOAAAGgHQAGgHAAgRIAAgsIANAAIAABVIgLAAIgBgMIgBAAQgDAFgIAFQgIADgIAAQgQAAgIgHgAKDA9IAAhVIAKAAIACAQIABAAQAFgIAGgFQAHgFAIAAIAKABIgCAMIgJgBQgLAAgHAJQgHAHAAANIAAAugAH5A9IAAg4QAAgJgFgGQgFgFgKAAQgNAAgGAIQgHAGABARIAAAtIgOAAIAAhVIALAAIACAMIABAAQADgGAIgEQAHgEAJAAQAQAAAHAIQAIAHAAAQIAAA4gAGWA9IAAhVIANAAIAABVgAhhA9IAAg4QAAgJgFgGQgDgFgKAAQgMAAgGAHQgFAHgBAOIAAAwIgMAAIAAg4QAAgJgFgGQgFgFgIAAQgMAAgGAIQgGAHAAAQIAAAtIgNAAIAAhVIALAAIACAMIAAAAQAEgGAGgEQAHgEAJAAQATAAAHAPIABAAQADgHAIgEQAIgEAIAAQAOAAAIAIQAHAIAAAPIAAA4gAlYA9IAAg4QAAgJgEgGQgGgFgIAAQgMAAgGAHQgGAGABAPIAAAwIgOAAIAAg4QAAgJgEgGQgFgFgJAAQgMAAgGAIQgFAHgBAQIAAAtIgMAAIAAhVIAKAAIACAMIABAAQADgGAIgEQAGgEAIAAQAVAAAFAPIABAAQAFgHAHgEQAGgEAKAAQAPAAAHAIQAHAHAAAQIAAA4gAntA9IAAhVIANAAIAABVgAoWA9IAAg4QAAgJgEgGQgGgFgJAAQgNAAgHAIQgGAHAAAQIAAAtIgNAAIAAhVIALAAIABAMIABAAQAEgGAHgEQAHgEAJAAQAQAAAIAIQAIAHAAAQIAAA4gAp5A9IAAhVIAOAAIAABVgAqjA9IAAhJIABgcIgBAAIgnBlIgKAAIgnhlIgBAAIABAdIAABIIgMAAIAAhyIAUAAIAkBeIABAAIAkheIAUAAIAABygAAOgjIgVgYIAAgCIAOAAQACAEAFAIIAIAMIAAACgAGXgpQgCgCAAgEQAAgFACgCQACgCADAAQAEAAACACQADADgBAEQABAEgDACQgCACgEAAQgDAAgCgCgAnsgpQgDgCAAgEQAAgEADgDQACgCADAAQADAAACACQADADgBAEQABAEgDACQgCACgDAAQgDAAgCgCgAp4gpQgBgCgBgEQABgFABgCQACgCAEAAQAEAAABACQADADAAAEQAAAEgDACQgBACgEAAQgEAAgCgCg");
	this.shape_91.setTransform(273.2,401.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ADqAwQgLgMAAgVQAAgTAKgMQAKgNASAAQAQAAAJALQAJALAAAQIAAAIIg7AAQABAQAHAHQAHAIANAAQAOAAAOgGIAAAMIgNAEQgGACgJgBQgTAAgLgLgAD0gLQgGAHgBAKIAtAAQAAgKgGgHQgGgHgKAAQgKAAgGAHgAjCA0QgIgIAAgQIAAg3IANAAIAAA3QAAAKAFAFQAFAGAKAAQANgBAHgHQAGgIAAgQIAAgsIANAAIAABVIgLAAIgCgLIgBAAQgDAFgIAEQgIADgIAAQgPAAgIgHgAkmA2IAAgNIAPAFIARACQANAAAHgGQAGgFAAgIQAAgGgCgEQgDgEgFgDIgRgIQgQgEgHgIQgHgIAAgNQAAgMAKgIQAKgIAQAAQASAAAOAGIgEALQgNgFgPAAQgKAAgGAFQgGAEAAAIQAAAGACADQACAFAFACQAGAEAKAEQASAFAHAHQAHAIAAAMQAAAPgLAIQgMAIgSAAQgTAAgMgFgACiA6IAAhVIALAAIACAQIAAAAQAFgIAHgFQAHgEAIgBIAKABIgCANIgJgBQgLgBgHAJQgIAIAAAMIAAAugABlA6IgghVIANAAIATAyIAHAXIABAAIAahJIAOAAIghBVgAAqA6IAAhVIANAAIAABVgAgTA6IgghVIAOAAIAaBJIAAAAIAZhJIAOAAIgfBVgAhnA6IAAhVIALAAIACAQIAAAAQAFgIAHgFQAHgEAHgBIALABIgCANIgKgBQgKgBgHAJQgIAIAAAMIAAAugAArgrQgCgDAAgEQAAgFACgCQACgBADAAQAEAAACABQACADAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_92.setTransform(224.3,367.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqtbMAlVAAAIAAa3MglVAAAg");
	this.shape_93.setTransform(292,372.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.2)").s().p("AyqNcIAA63MAlVAAAIAAa3g");
	this.shape_94.setTransform(292,372.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// decor
	this.instance_1 = new lib.copie1_presentationpng2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ecran_niveau1, rect = new cjs.Rectangle(0,0,800,600), [rect]);


(lib.ecran_instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// titre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AtgAAIbBAA");
	this.shape.setTransform(400.1,198);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AtgAAIbBAA");
	this.shape_1.setTransform(400.1,154);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFeB+QgUgNgLgTQgLgUAAgYQAAgXALgUQANgTASgLQAUgMAYAAQAZAAASAMQAUAMALASQAMAVAAAWQgBAZgKAUQgLATgUAMQgTAMgZAAQgXAAgVgMgAFkgOQgRALgKAQQgKASAAAUQAAAUAKATQAKARARAKQASALAUAAQAVAAARgLQARgLAJgQQAKgTAAgUQAAgUgKgSQgKgRgRgKQgRgLgUAAQgVAAgRALgAAQB+QgSgMgLgTQgMgUAAgYQAAgXAMgTQALgTATgLQAUgLAYAAQAVAAANAGQAPAHAOANIAAATQgMgRgPgJQgOgJgWAAQgUAAgSAKQgRALgJAQQgKARAAAUQgBAVALASQAKARAPAJQASAKATAAQAoAAAZglIAAAUQgOAOgPAGQgPAHgVAAQgWAAgVgLgALICCQgOgGgGgJIAAgTQAIAQALAHQANAHARAAQASAAAKgLQAMgLgBgRQAAgPgFgIQgIgJgNgIIgkgWQgFgEgGgHQgFgHABgIQgBgPALgIQAJgJARAAQAVAAAMAJIAAAQQgLgPgVAAQgMAAgGAGQgIAGAAAJQAAAHAEAGQAFAGAIAEIAaAQQASAKAJALQAIALAAASQAAAWgPAOQgOANgVAAQgTAAgLgGgAi8B1QgSgSgBgjIAAhdIAMAAIAABdQAAAeAPAQQAQAQAdAAQARAAAPgIQANgHAJgPQAIgOAAgSIAAhdIAMAAIAAChIgMAAIAAgeQgIAPgQAKQgRAJgVAAQgjAAgSgTgAoOCCQgOgGgFgJIAAgTQAGAQAMAHQANAHARAAQASAAAKgLQAMgLAAgRQgBgPgFgIQgGgIgOgJIgkgWQgIgFgEgGQgEgGAAgJQAAgPAKgIQAJgJARAAQAUAAAOAJIAAAQQgMgPgVAAQgKAAgJAGQgHAFAAAKQAAAHAFAGQAEAGAHAEIAbAQQASAKAJALQAIALAAASQAAAWgPAOQgOANgVAAQgSAAgMgGgACpB2QgRgQAAgdIAAinIAMAAIAABBIAxAAIAAAKIgxAAIAABcQAAAYANAOQAPANAVAAIAAAKQgaAAgSgQgAmNB2QgRgQAAgdIAAinIAMAAIAABBIAxAAIAAAKIgxAAIAABcQAAAZAOANQAOANAWAAIAAAKQgaAAgTgQgAKFCEIAAheQABgegOgPQgPgQgaAAQgSAAgQAJQgQAJgIANQgJAPAAASIAABbIgMAAIAAihIAMAAIAAAjQAHgRAUgLQASgLAXAAQAfAAARATQARARAAAjIAABegAD8CEIAAihIAMAAIAAChgAlCCEIAAihIAMAAIAAAkQAHgRANgJQAPgKASAAQALAAALAEIAAAOQgKgIgNAAQgOAAgLAIQgMAHgIANQgHANAAAPIAABfgApQCEIAAheQAAgdgPgQQgOgQgZAAQgSAAgRAJQgQAJgJANQgJAPAAASIAABbIgLAAIAAihIALAAIAAAjQAJgRASgLQATgLAYAAQAeAAARATQARASABAiIAABegAsXCEIAAkNIAMAAIAAENgAD5hGQgEgDABgGQgBgFAEgDQADgEAGAAQAFAAADAEQAEAEABAEQgBAFgEAEQgDAEgFAAQgGAAgDgEg");
	this.shape_2.setTransform(400.1,175.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// texte
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAqQgJgJAAgSIAAg/IAbAAIAAA4QAAALAEAGQADAEAJABQALAAAFgIQAFgHAAgRIAAguIAbAAIAABiIgVAAIgDgOIgCAAQgEAIgIAEQgHADgLAAQgRAAgJgJgAhRAtQgKgHgGgLQgGgMAAgPQAAgXANgOQANgNAWAAQAPAAAKAGQAKAGAHAMQAFAMAAAOQAAAYgMANQgNAOgXAAQgNAAgMgGgAhHgVQgFAJAAAMQAAAOAFAIQAFAIALAAQALAAAEgIQAFgHAAgPQAAgNgFgIQgEgHgLAAQgMAAgEAHg");
	this.shape_3.setTransform(594.2,326.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBEIAAiGIAFAAQAgAAARARQASARAAAgQgBASgIAQQgKAQgPAJQgOAIgTABgAgeA9IABAAQASABAMgJQANgHAIgPQAJgOgBgRQAAgegPgPQgPgRgdAAIgBAAg");
	this.shape_4.setTransform(545.1,323.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAzIAAgJQAFALAKAGQAIAFANAAQAIAAAIgDQAIgEAEgHQAFgIAAgJQAAgIgDgHQgCgGgIgFIgTgNIgRgMQgGgEgDgFQgEgHAAgJQAAgNAIgGQAHgHANAAQAQAAAJAMIAAAKQgFgIgHgFQgGgEgIAAQgIAAgIAGQgFAGgBAIQAAAJAGAHQAGAHANAIQAQAJAJAIQAHAFADAHQACAIAAAJQAAALgEAIQgFAIgKAFQgJAFgLAAQgWAAgNgTg");
	this.shape_5.setTransform(514.5,323.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3BWIAAh1IAGAAIAAAUQAFgJAKgHQAKgFAMAAQAMgBAJAGQAKAGAGAJQAGALAAAKQAAAMgGAJQgGAJgKAHQgJAFgMAAQgMAAgKgFQgJgHgGgJIAAA4gAhfgWQgIAFgFAIQgFAIAAAKQAAAKAFAJQAFAIAJAFQAIAFAKAAQAKAAAIgFQAJgFAFgIQAFgJAAgKQAAgJgFgJQgFgIgJgFQgIgFgKgBQgKABgJAFgADAAuQgJgHgGgJQgGgKAAgMQAAgLAGgJQAGgKAJgFQAKgGANABQASAAAOAOIg5A3QAGAEAGADQAGADAGAAQAIgBAKgFQAIgEAGgJIAAAKQgGAHgIADQgIAEgKgBQgLAAgLgFgADDgWQgJAEgEAIQgFAJAAAJQAAAOAKALIA0gzQgEgEgHgDQgGgDgHAAQgMABgIAFgABoAuQgKgFgGgKQgGgKAAgMQAAgLAGgJQAGgKAKgGQAKgFAMAAQAKgBAHAEQAHADAHAHIAAAJQgGgIgHgEQgHgFgLgBQgJAAgKAGQgIAFgGAIQgFAJAAAJQAAALAFAJQAFAIAJAFQAIAFAKAAQAUAAAMgSIAAAJQgHAHgHAEQgIACgKAAQgLABgKgGgAAAAuQgIgHgGgJQgGgJAAgMQAAgKAGgLQAGgJAIgGQAJgGANABQALAAALAFQAKAGAEAKIAAgUIAGAAIAABQIgGAAIAAgUQgEAJgLAIQgJAFgMAAQgNAAgJgFgAADgWQgHAFgFAIQgFAIAAAKQAAAKAFAJQAFAIAIAFQAIAFAKAAQAKAAAIgFQAJgFAFgIQAFgJAAgKQAAgJgFgJQgFgIgJgFQgIgFgKgBQgKABgJAFgAixAxQgGgEgEgEIAAgKQAEAIAGADQAFAEAKAAQAJAAAFgFQAGgHAAgIQAAgHgEgEQgEgFgFgDIgSgKIgGgGQgCgDAAgFQAAgHAFgFQAEgDAJAAQAKgBAGAFIAAAHQgFgGgLgBQgFAAgEADQgEADAAAEQAAAEADADQACAEAEACIAMAHQAKAFAEAGQAEAFAAAIQAAAMgHAGQgHAHgLAAQgKAAgFgCgAj2AxIAAiGIAxAAIAAAGIgrAAIAABJIAkAAIAAAFIgkAAIAAAtIArAAIAAAFg");
	this.shape_6.setTransform(599.1,373.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AzXh3MAmvAAAIAADvMgmvAAAg");
	this.shape_7.setTransform(594.5,371.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.247)").s().p("AzXB4IAAjvMAmvAAAIAADvg");
	this.shape_8.setTransform(594.5,371.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA9BFIgagzIhGAAIgZAzIgGAAIBCiJIBECJgAggAMIBBAAIghhDg");
	this.shape_9.setTransform(482.3,323.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAACIgcBDIg7iJIAGAAIA1B6IAag6IgchAIAGAAIAYA7IAZg7IAHAAIgdBBIAaA5IA1h6IAGAAIg8CJg");
	this.shape_10.setTransform(513.8,293.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_11.setTransform(544.5,322.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_12.setTransform(544.5,322.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_13.setTransform(513.5,322.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_14.setTransform(513.5,322.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_15.setTransform(482.5,322.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_16.setTransform(482.5,322.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_17.setTransform(513.5,292.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_18.setTransform(513.5,292.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_19.setTransform(706.5,323.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_20.setTransform(706.5,323.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_21.setTransform(675.5,323.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_22.setTransform(675.5,323.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_23.setTransform(644.5,323.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_24.setTransform(644.5,323.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ah3h3IDvAAIAADvIjvAAg");
	this.shape_25.setTransform(675.5,293.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.247)").s().p("Ah3B4IAAjvIDvAAIAADvg");
	this.shape_26.setTransform(675.5,293.5);

	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(675.4,293.5,1,1,0,0,0,8.4,8.5);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(644.5,323.5,1,1,0,0,0,8.5,8.5);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(675.5,323.5,1,1,0,0,0,8.5,8.5);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(707.5,323.4,1,1,0,0,0,8.5,8.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AqiAAIVFAA");
	this.shape_27.setTransform(479.5,261);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AqiAAIVFAA");
	this.shape_28.setTransform(479.5,222);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ao9BTQgWgNgMgWQgMgVAAgbQAAgZAMgWQANgVAWgNQAVgNAZAAQARAAAJADQAJADAOAIIAAAJQgLgIgMgEQgKgEgQAAQgXAAgUAMQgTAMgMAVQgLAUAAAWQAAAXALAVQALAUAUAMQATAMAWAAQARAAALgEQAMgEALgIIAAAJQgKAHgOADQgLAEgPAAQgZAAgVgMgAmtBWQgOgIgHgNQgIgOAAgPQAAgQAIgNQAHgMAOgIQAMgIARAAQAQAAANAIQANAIAHAMQAIANAAAQQAAAQgIANQgGANgOAIQgMAIgRAAQgRAAgMgIgAmpgHQgMAHgGALQgHALAAAOQAAAOAHAMQAHAMALAGQALAHAOAAQANAAAMgHQAKgGAIgMQAGgNAAgNQAAgNgGgMQgHgMgLgGQgMgHgNAAQgOAAgLAHgAI3BZQgKgEgDgHIAAgMQAEAJAIAGQAJAFAMAAQAMAAAHgHQAHgIAAgLQAAgKgEgFQgFgGgJgFIgYgPIgHgIQgDgEAAgHQAAgIAHgGQAHgGAKAAQANAAAJAGIAAALQgHgKgOAAQgIAAgFAEQgEAEAAAFQAAAEACAFIAIAHIASAKQANAIAFAHQAFAIAAALQAAAPgJAJQgKAJgOAAQgLAAgJgEgAHRBVQgNgIgIgNQgIgNAAgPQAAgQAIgNQAHgMAOgHQAMgHARAAQAaAAARATIhLBKQAHAGAIADQAHADAKAAQALAAAMgGQAMgHAHgLIAAAMQgJAKgKAFQgLAEgNAAQgQAAgMgIgAHUgGQgKAFgIALQgGAKAAAPQAAAUANAOIBGhFQgJgHgGgDQgIgDgKAAQgPAAgLAHgAFFBVQgNgIgHgNQgIgMAAgQQAAgPAIgNQAHgMANgIQANgIAQAAQAPAAAOAJQANAHAHAMIAAhhIAIAAIAACzIgIAAIAAgaQgHANgOAIQgNAIgPAAQgQAAgNgIgAFJgGQgLAGgHALQgGALAAAOQAAAOAGALQAHAMALAGQALAHAOAAQANAAALgHQALgGAIgMQAHgMAAgNQAAgNgHgLQgHgMgMgGQgKgHgOAAQgOAAgLAHgAA9BVQgOgIgHgNQgIgNAAgPQAAgOAIgOQAHgMAOgIQAMgIAQAAQAPAAAPAJQANAIAGAMIAAgaIAIAAIAABrIgIAAIAAgbQgHAOgNAIQgNAIgQAAQgQAAgMgIgABBgGQgLAGgIAMQgGALAAANQAAAOAGALQAIAMALAGQALAHAOAAQANAAALgHQALgGAHgMQAHgMAAgNQAAgNgHgMQgHgLgLgGQgLgHgOAAQgOAAgKAHgAEJBaIAAg/QAAgTgJgKQgKgLgRAAQgMAAgLAGQgKAGgGAIQgGAKAAANIAAA8IgIAAIAAhrIAIAAIAAAXQAFgLANgHQANgIAPAAQAUAAALANQAMALAAAXIAAA/gAAABaIAAhIQAAgPgHgHQgHgJgNAAQgJAAgJAFQgIAEgFAHQgFAJAAAJIAABFIgHAAIAAhDQAAgSgIgIQgIgKgNAAQgIAAgJAEQgHAFgGAGQgFAIAAAIIAABIIgHAAIAAhrIAHAAIAAAQQAMgTAYAAQAMAAAIAHQAJAGADANQADgLALgHQALgIANAAQASAAAJALQAJAJAAASIAABIgAizBaIAAhIQAAgPgIgHQgHgJgNAAQgKAAgIAFQgHAEgGAHQgFAJAAAJIAABFIgIAAIAAhDQAAgSgIgIQgIgKgNAAQgIAAgJAEQgHAFgFAGQgFAIAAAIIAABIIgIAAIAAhrIAIAAIAAAQQALgTAYAAQAMAAAJAHQAJAGADANQADgKALgIQAKgIAOAAQASAAAJALQAKAJAAASIAABIg");
	this.shape_29.setTransform(478.1,241);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAoAwQgLgNAAgTQAAgUAKgMQAKgMARAAQARAAAJAKQAJAKAAARIAAAIIg6AAQAAAPAHAIQAHAIAOAAQAOAAANgGIAAAMIgNAEQgGACgJAAQgSAAgMgMgAAygLQgGAHgBALIAtAAQAAgMgGgGQgFgGgLAAQgKAAgGAGgAB8A6IAAhVIALAAIABAQIAAAAQAFgIAHgFQAHgFAIABIAKABIgCALIgJgBQgLAAgHAJQgHAIgBAMIAAAugAgfA6IAAhVIAMAAIABAQIABAAQAEgIAHgFQAGgFAIABIAKABIgCALIgJgBQgKAAgHAJQgHAIAAAMIAAAugAhHA6IAAhVIANAAIAABVgAiHA6IAAhmIglAAIAAgLIBWAAIAAALIglAAIAABmgAhGgsQgCgCAAgEQAAgEACgCQACgCAEgBQADABACACQACACAAAEQAAAEgCACQgCACgDAAQgEAAgCgCg");
	this.shape_30.setTransform(431.4,354.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBGQgJgGAAgLQAAgJAFgFQAFgFAJgDQgDgBgCgDQgCgDAAgFQAAgFACgDQACgDAGgEQgHgCgEgGQgEgGAAgJQAAgOAIgIQAJgHAPAAQAHAAAFABIAeAAIAAAJIgQABIAEAIQACAEAAAGQAAAMgJAHQgIAHgPAAIgIAAQgIADAAAIQAAADADACQADABAHAAIAPAAQAPAAAGAGQAIAGAAALQAAAOgLAIQgMAHgWAAQgRAAgJgGgAAqAoQgFAFAAAHQAAAIAGADQAGAEAKAAQAQAAAJgFQAHgFAAgJQAAgHgEgCQgDgDgNAAIgQAAQgJAAgEAEgAAxgiQgFAFAAAKQAAAIAFAFQAGAFAIAAQATAAAAgSQAAgUgTAAQgJAAgFAFgACBAcQgLgMAAgTQAAgVAKgMQAKgMARAAQARAAAJAKQAJAKAAASIAAAJIg7AAQABAOAHAHQAHAIANAAQAOAAAOgGIAAAMIgNAEQgGACgJAAQgTAAgLgMgACLgfQgGAHgBAMIAsAAQAAgNgFgGQgFgGgLAAQgKAAgGAGgAg3AgQgIgHAAgRIAAg3IANAAIAAA3QAAALAFAFQAFAFAKAAQANAAAGgIQAGgHAAgQIAAgtIAMAAIAABVIgJAAIgCgLIgBAAQgEAGgHADQgIAEgIAAQgQAAgHgIgAiRAiQgJgFgFgKQgFgKAAgNQAAgVALgLQAKgMATAAQASAAAKAMQALAMAAAUQAAAUgLAMQgKAMgTAAQgLAAgJgGgAiQgdQgGAIAAARQAAAQAGAIQAHAJANAAQAMAAAHgJQAGgIAAgQQAAgRgGgIQgHgIgNAAQgNAAgGAIgADVAmIAAhVIAKAAIACAQIAAAAQAFgIAHgFQAHgEAIAAIAKABIgCAMIgJgBQgLAAgHAIQgIAJAAAMIAAAtgAkFAmIAAhxIAgAAQAXAAAKAHQALAHAAAOQAAAKgGAHQgGAHgLABIAAABQAaAFAAAWQAAAPgKAIQgKAJgTAAgAj4AbIAYAAQANAAAIgGQAHgFAAgLQAAgKgHgFQgIgFgOAAIgXAAgAj4gaIAWAAQAOAAAHgFQAGgEAAgLQAAgJgHgEQgHgFgPAAIgUAAg");
	this.shape_31.setTransform(441.7,281.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AB4A2D").s().p("AAAABQAEgEAHgBQAEgBADACQgDgFgGgGQgGgGgDAAQgDAAgEAOQgFAPgIADQgGADAGgPQAIgUgIgFQgHgGgHAFQgEADgCAHQABgJADgHQAFgKAHgCQALgDAbATQAdATgCAMQgBAEgWAAQgHAAgEADQgFADgCAJQgBAFACAJIAFAJQgagWAUgWg");
	this.shape_32.setTransform(445,469.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AB4A2D").s().p("AABgBQgCgDgLAFIgGACQADgDACgLQABgMABgBQACgDAaAQQAFAEgFAMQgDAKgHAKQAAgWgGgEg");
	this.shape_33.setTransform(438.2,463.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F9EE83").s().p("AgFAVQgEAGgQAAQgOAAAAgSQAQAHAIAAIAUAAQAHAAALgWQAJgVAEACQAJAEgJAVIgJAAQgPAbgHAAQgIAAgCgGg");
	this.shape_34.setTransform(441.1,485.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDF6A4").s().p("AgvA1QgDgIgEgBQgHgDgDASQgYgkAIAAIAMADQALgBgBgQQgCgGgEgEQgGgHgHAAIAEgKQAQAEAQAAQAVgBAJgJQAUgWAOgTQgDARAEAQQAGAWAQAEQAQAFALgGQAIgEACgHIAAAzQgQgFgBAHQgCAJgCADQgEgPgMgGQgCgBgIgPQgGgKgWACQgSACgKAIQgIAFAAAGIgPAAIAAArQgBgGgDgHg");
	this.shape_35.setTransform(441.4,477.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBC294").s().p("AggAUQgTgQAHgZQADgOAWAFQAQAEASALQAFgEAGgCQAJgDAGADQAMAGgKAXQgMAYgeAAQgTgBgOgLg");
	this.shape_36.setTransform(441.4,483.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E19F63").s().p("AhJBLQgkgnAZg4QAIgKALgJQAOgLAKgBQANgBgOAMQgNALgJADQAQAcApgvQAVgZgEgKQgDgIgOADQAAgIAEgGQAEgJAMgCQAQgDAbAWQAaAXgHAKIgUALQgQALAOAQQALANALgBQAHAAAEgHQAHAPACARQACAYgLANQgNgDgDANQgDAOgTAPQgXASgaAAQgtgIgbgcg");
	this.shape_37.setTransform(441.5,476.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgBACIgIgCIAHgBIAAgJIAEAHIAIgDIgFAGIAFAHIgIgDIgDAHg");
	this.shape_38.setTransform(591.4,485.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCADIgLgDIALgCIgBgMIAGAJIALgDIgHAIIAHAJIgLgDIgFAJg");
	this.shape_39.setTransform(600.9,473.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCADIgHgDIAHgCIAAgIIAEAHIAIgDIgFAGIAFAHIgIgDIgDAHg");
	this.shape_40.setTransform(581.5,480.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgBACIgFgCIAFgBIAAgFIADAEIAEgBIgCADIADAFIgFgCIgDAEg");
	this.shape_41.setTransform(581.9,471.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgBACIgIgCIAIgBIAAgJIADAHIAIgDIgEAGIAEAHIgIgDIgDAHg");
	this.shape_42.setTransform(593.6,463.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgDAEIgHgEIAHgDIADgIIADAIIAIADIgIADIgDAJg");
	this.shape_43.setTransform(596.1,478.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGAGIgMgGIAMgEIAGgOIAFAOIAOAEIgOAEIgFAPg");
	this.shape_44.setTransform(577,478.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAEIgMgEIAMgEIAGgKIAFAKIAOAEIgOADIgFAMg");
	this.shape_45.setTransform(592.2,473.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHAHIgPgHIAPgGIAHgQIAGAQIARAGIgRAEIgGATg");
	this.shape_46.setTransform(585.7,462.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDADIgIgDIAIgBIADgHIADAGIAJACIgJACIgDAHg");
	this.shape_47.setTransform(580,463.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgEAEIgLgEIALgDIAEgIIAEAIIAMADIgMACIgEAKg");
	this.shape_48.setTransform(582,488);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AApAbIgWgsIg0gdIAXAsAApAbIgzgdAApAbIAAAZIgngLIgMgr");
	this.shape_49.setTransform(595.1,482.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#90B2F4").s().p("AAAAmIgNgqIgXgtIAzAdIAWAsIAAAZg");
	this.shape_50.setTransform(595.5,482.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgegfIAVAzIAkARg");
	this.shape_51.setTransform(584.1,470);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8FBFD").s().p("AgHASIgVg0IA5BFg");
	this.shape_52.setTransform(583.9,470.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AACAQIASAjIANArIgNgEIgSgTIAAg3Ig1hlIAPALQALAMBKBlg");
	this.shape_53.setTransform(592.1,477.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C4D8F2").s().p("AAVBWIgSgTIAAg3Ig1hlIAPALQAMAMBJBlIgvgXIASAjIANArg");
	this.shape_54.setTransform(592,477.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AhahdIAAgTQAmAWAVAPIAiBEIgjgRAhFgpIAKAdQAOAXBUBZIANAEAhFgpIAlARABbBaIgWgpQhKhlgMgMIgOgLABbBaIAAAaIgngMAAnA9IgkhEAAnA9IANArABbBaIg0gdAhahdIA6BFAhFgpIgVg0");
	this.shape_55.setTransform(590.1,476.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D9EAF5").s().p("AAnBjQhUhZgOgXIgfhRIAAgTQAmAVAVAQIAOALQAMAMBKBlIAWApIAAAZg");
	this.shape_56.setTransform(590.1,476.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,0,0,4).p("AAAgsIAABZ");
	this.shape_57.setTransform(513.5,478.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#89351C").ss(1,0,0,4).p("AhFAAQAAgQALgLQAMgMARAAIBjAAIAABPIhjAAQgRAAgMgMQgLgLAAgRg");
	this.shape_58.setTransform(454.5,478.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AB4A2D").s().p("AgdAoQgRAAgMgLQgLgMAAgRQAAgPALgMQAMgMARAAIBjAAIAABPg");
	this.shape_59.setTransform(454.5,478.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#C4A549").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_60.setTransform(493,478.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DCBB58").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_61.setTransform(493,478.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#AA6D36").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_62.setTransform(469,478.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C17D40").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_63.setTransform(469,478.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#B8893E").ss(1,0,0,4).p("AgsgnIBZAAIAABPIhZAAg");
	this.shape_64.setTransform(481,478.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CE9D4C").s().p("AgsAoIAAhPIBZAAIAABPg");
	this.shape_65.setTransform(481,478.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AqiBLQgfAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAfAAIVFAAQAfAAAWAWQAWAXAAAdQAAAfgWAWQgWAWgfAAg");
	this.shape_66.setTransform(518,478.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B95131").s().p("AgBADQgCgDgBgGQAMAGgFAGIgCABQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBg");
	this.shape_67.setTransform(55.7,466.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B95131").s().p("AgDAAQgDgFAGgDQAFgDAAAHQAAAFgCAJQgFgFgBgFg");
	this.shape_68.setTransform(60.3,460.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B95131").s().p("AgHAAQgJgJgIgDQAIgGAKgCQALgCAIAKQAMASAAAIIgOgKIACARQgOgNgGgIg");
	this.shape_69.setTransform(78.4,467);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B95131").s().p("AgXAKQgEgPAOgQQALgLALAFQAMAGADAMQgHgEgIABQgJABgDAJQgGAQAAAPQgKgHgEgMg");
	this.shape_70.setTransform(71.4,452.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#AB4A2D").s().p("AADAfQgHgFgGgMQgGgMAJgOQAHgLALgJQgMATAAAPQAAARAOAOIgDAAQgDAAgEgCg");
	this.shape_71.setTransform(72.8,473.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AB4A2D").s().p("AgQARQAPgOADgKQAEgMgEgKIgJgIIAGgLQAGgEAKAaQAGARgMANQgEAFgMAIQgFADALAdQgJgGgGgag");
	this.shape_72.setTransform(55.8,477.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAF28E").s().p("AgDAAQAFgHAFgBQAAAGgDAEQgEAIgFAAQgEgDAGgHg");
	this.shape_73.setTransform(71.9,487.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FAF28E").s().p("AgWAYQgMgHAYABIAVAGIgVgVIgOAEQgHgaAHgLIAQAWQASAbASAMQglAAgNgHg");
	this.shape_74.setTransform(63.4,487.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAF28E").s().p("AAEAVQgUgZAAgOQAAgMAhAzg");
	this.shape_75.setTransform(55.1,483.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FDF6A4").s().p("AAtA+QAAgSgCgHQgDgGgKgCQgHAAgKAHQgIAFgGAHQgHgIgMgGQgSgHgUACQgUADgLAJQgIAGAAAHQgBgMADgOQAFgSALgJIADgrQAAgcgIgIQgFgEACAAQALAAANgJQAWgQAEgQQgEAZADAXQAEAeASAFQARAGAOgJQALgFAEgLIAPAKQgKAOgCAQQgEATAQAKQAQALARgDQAMgBAIgHQgBAOgFANQgGASgKAHIgIgIQgfBCgUAEQAcgpAAgVg");
	this.shape_76.setTransform(67.2,477);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EABF93").s().p("AgmAVQgagSAFgPQAHgWAYgEQAXgDALAQQAOgRAUAAQAVAAAAAWQAAAdgSAPQgLAKgaAKQgZgJgTgOg");
	this.shape_77.setTransform(65.4,484.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DA8655").s().p("AhBB5QgvgcgPglQAAgGAEgHQAFgKALgJQALgJgGgOQgFgIgLgIQAJgpAagkQAjgwAwgHQgDAAADAfQACAgAPAGQAMAGAOgJQALgFAHgLQAZAEAJAPQAJASgCALQgMAIgGAIQgKANAIAJQAHAJAMABQAIAAAIgCQAXAjgaAyQgeA5hOAKQgkgJgjgTg");
	this.shape_78.setTransform(65.8,475.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AoCAAIQFAA");
	this.shape_79.setTransform(67.5,448);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AoCAAIQFAA");
	this.shape_80.setTransform(67.5,409);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AD2BWQgMgIgIgNQgIgOAAgPQAAgPAIgOQAHgMANgHQANgJAQAAQARAAAMAJQANAHAIAMQAHAOAAAPQAAAQgHAOQgIANgMAHQgMAIgRAAQgRAAgNgIgAD6gGQgLAGgHALQgGALAAAPQAAAOAGALQAHAMALAGQAMAIAOgBQANABAMgIQALgGAGgMQAHgLAAgOQAAgPgHgLQgHgLgLgHQgLgHgOAAQgNAAgMAIgAhqBVQgNgHgIgOQgIgOAAgOQAAgPAIgOQAIgMANgHQANgHARAAQAZAAARATIhLBKQAKAIAFACQAIACAJAAQAMAAAMgGQALgHAIgLIAAANQgKAJgKAFQgLAEgNAAQgPAAgNgIgAhngGQgLAGgGALQgHAJAAAPQAAAUANAOIBHhFQgJgHgHgDQgHgDgKABQgPAAgMAGgAB+BRQgMgLAAgTIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgRAAgMgLgAizBRQgMgMAAgSIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgRAAgMgLgAjuBRQgMgMAAgSIAAhvIAIAAIAAAsIAhAAIAAAGIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgRAAgMgLgAG7BbIAAg/QAAgUgJgKQgKgKgRAAQgNAAgKAFQgKAGgGAIQgGAKAAANIAAA9IgIAAIAAhrIAIAAIAAAWQAFgKANgIQANgIAPAAQATABAMANQAMAKAAAYIAAA/gAC1BbIAAhrIAIAAIAABrgABPBbIAAg/QAAgUgKgKQgJgKgRAAQgOAAgJAFQgLAGgGAIQgFAKAAANIAAA9IgIAAIAAhrIAIAAIAAAWQAEgKANgIQANgIAPAAQAUABALANQAMALAAAXIAAA/gAkWBbIgjhFIhfAAIghBFIgJAAIBai4IBaC4gAmVAOIBaAAIguhagACzgsQgDgCAAgEQAAgDADgDQACgCAEAAQADAAACACQADADAAADQAAAEgDACQgCACgDABQgEgBgCgCg");
	this.shape_81.setTransform(64.8,428);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("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BgGAIQgFAGAAAPIAAAvIgNAAIAAg3QAAgKgEgGQgGgEgIAAQgMAAgGAHQgGAIABAQIAAAsIgOAAIAAhVIALAAIACAMIABAAQADgGAHgEQAGgDAJAAQATAAAHAOIABAAQAEgHAHgEQAIgDAJAAQAOgBAHAIQAIAIAAAQIAAA3gA3oAqIAAhVIANAAIAABVgA4RAqIAAh5IAOAAIAAB5gA68AqIAAg3QAAgKgEgGQgGgEgKAAQgNAAgGAHQgGAHAAARIAAAsIgNAAIAAhVIALAAIABAMIABAAQAFgGAGgEQAHgDAJAAQAQgBAIAIQAHAHABARIAAA3gEginAAqIAAh5IANAAIAAB5gEgjSAAqIAAhxIANAAIAABxgAdig7QgCgCAAgFQAAgEACgDQACgCADAAQADAAACACQADADAAAEQAAAEgDADQgCABgDAAQgDAAgCgBgAJLg7QgBgCAAgFQAAgEABgDQACgCAEAAQADAAACACQACADABAEQgBAFgCACQgCABgDAAQgEAAgCgBgAFFg7QgCgCAAgFQAAgEACgDQACgCADAAQADAAACACQACADAAAEQAAAFgCACQgCABgDAAQgDAAgCgBgA0pg7QgCgCAAgFQAAgEACgDQACgCADAAQADAAACACQACADAAAEQAAAFgCACQgCABgDAAQgDAAgCgBgA3ng7QgCgCAAgFQAAgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAFgCACQgCABgEAAQgDAAgCgBg");
	this.shape_82.setTransform(246.5,515.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("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");
	this.shape_83.setTransform(219.4,478.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AB4A2D").s().p("AAAABQAHgHAIAEQgKgPgFAAQgCAAgEAMQgEAMgHADQgFACAFgMQAHgQgHgFQgGgEgFADQgEADgBAFQADgTAKgDQAJgDAWAPQAZAQgCALQgBADgSAAQgGAAgDACQgEADgCAHQgDAHAIAMQgVgTAQgRg");
	this.shape_84.setTransform(250,353.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#AB4A2D").s().p("AAAAAQgBgDgKAEIgEACQACgCACgKQABgKABgBQACgCAUANQAIAFgQAZQAAgSgFgDg");
	this.shape_85.setTransform(244.4,348.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F9EE83").s().p("AgEARQgEAFgNAAQgHAAgDgFQgCgEABgFQAQAFAEAAIAQAAQAGAAAIgSQAJgRADABQAHADgHASIgHAAQgMAWgHAAQgGAAgCgFg");
	this.shape_86.setTransform(246.7,366.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FDF6A4").s().p("AgtAkQgDgBgCAFQgCAEgBAFQgWgeAJAAIAKACQAJAAgBgNQgBgFgEgEQgEgGgHAAIAEgIQANAEANAAQASgBAHgIQAQgRAMgRQgCAPADANQAFASANADQAOAEAJgEQAGgEACgGIAAAqIgIgBQgGAAAAADIgEAKQgDgMgKgFQgBAAgHgOQgFgIgSACQgPACgIAGQgHAEAAAFIgMAAIAAAkQgEgRgGgCg");
	this.shape_87.setTransform(247,360.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EBC294").s().p("AgaAQQgQgNAFgUQAEgLASAEQANADAOAJQAMgKAKAFQAKAFgJASQgJAVgZAAQgQgCgLgJg");
	this.shape_88.setTransform(247,365.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E19F63").s().p("Ag8A+QgeggAVguQAGgIAJgIQAMgJAIgBQALAAgLAJQgLAKgIACQANAXAjgmQARgVgDgJQgDgGgLACQAAgGADgGQADgHAKgCQANgCAWATQAWASgGAIIgQAJQgNAKALANQAKALAIgBQAGAAAEgGQAFAMACAOQABAUgIALQgEgBgEACQgEACgCAGQgCALgQAMQgTAPgVAAQgmgHgWgXg");
	this.shape_89.setTransform(247.1,359.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgBACIgGgCIAGgBIAAgHIADAFIAGgCIgEAFIAEAFIgGgCIgDAGg");
	this.shape_90.setTransform(371.3,367.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgCADIgIgDIAIgCIAAgJIAFAIIAIgDIgFAGIAFAHIgIgCIgFAHg");
	this.shape_91.setTransform(379.1,357.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgBACIgGgCIAGgBIAAgHIADAGIAHgDIgFAFIAFAGIgHgDIgDAGg");
	this.shape_92.setTransform(363,362.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAAACIgFgCIAFgBIAAgEIABADIAFgBIgDADIADAEIgFgBIgBADg");
	this.shape_93.setTransform(363.3,355.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgBACIgGgCIAGgBIAAgHIADAGIAGgDIgDAFIADAGIgGgDIgDAGg");
	this.shape_94.setTransform(373.1,348.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCADIgHgDIAHgCIACgHIADAHIAGACIgGACIgDAIg");
	this.shape_95.setTransform(375.1,361.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgFAFIgKgFIAKgDIAFgMIAEALIAMAEIgLADIgFANg");
	this.shape_96.setTransform(359.3,360.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgFAEIgKgEIAKgDIAFgJIAEAJIAMADIgMACIgEALg");
	this.shape_97.setTransform(371.9,356.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGAGIgMgGIAMgFIAGgNIAFANIAOAFIgOADIgFAQg");
	this.shape_98.setTransform(366.5,347.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgCACIgGgCIAGgBIACgGIACAGIAHABIgHACIgCAGg");
	this.shape_99.setTransform(361.8,348.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgEADIgIgDIAIgCIAEgHIADAHIAJACIgJACIgDAIg");
	this.shape_100.setTransform(363.5,368.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAiAXIgSglIgrgXIATAkAAiAXIgqgYAAiAXIAAAVIgggKIgKgj");
	this.shape_101.setTransform(374.3,364.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#90B2F4").s().p("AAAAfIgLgjIgTgkIAqAYIATAkIAAAVg");
	this.shape_102.setTransform(374.6,364.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgZgZIARArIAeAOg");
	this.shape_103.setTransform(365.3,354);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F8FBFD").s().p("AgGAPIgRgrIAvA5g");
	this.shape_104.setTransform(365.1,354.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AACAOIgshUIAMAKQANANA6BQIgngTIAOAdIALAkIgLgEIgOgQg");
	this.shape_105.setTransform(371.8,360);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C4D8F2").s().p("AARBHIgOgQIAAgtIgshUIAMAKQANANA6BQIgngTIAOAdIALAkg");
	this.shape_106.setTransform(371.7,360.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AhHhNIAAgQQAbAPAVAQIAdA4IgdgOAg2giIgRgrIAwA5ABOBLIgSgjQg7hQgMgNIgMgJAAjAyIALAkAg2giIAJAYQAKARBGBMIALADABOBLIAAAVIgggKAAjAyIgdg4ABOBLIgrgZAg2giIAfAO");
	this.shape_107.setTransform(370.2,359.2,1,1,0,0,0,0.3,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D9EAF5").s().p("AAgBSQhGhMgLgRIgZhDIAAgQQAbAPAVAQIAMAJQANANA5BQIATAjIAAAVg");
	this.shape_108.setTransform(370.2,359.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1,0,0,4).p("AAAgkIAABJ");
	this.shape_109.setTransform(306.8,361.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#89351C").ss(1,0,0,4).p("Ag4AAQAAgMAJgKQAKgJANAAIBRAAIAAA/IhRAAQgNAAgKgJQgJgJAAgOg");
	this.shape_110.setTransform(257.8,361.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#AB4A2D").s().p("AgYAgQgNAAgKgJQgJgJAAgOQAAgMAJgKQAKgJANAAIBRAAIAAA/g");
	this.shape_111.setTransform(257.8,361.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#7EBD86").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_112.setTransform(344.4,361.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#AED4B5").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_113.setTransform(344.4,361.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#98B770").ss(1,0,0,4).p("AgkgfIBIAAIAAA/IhIAAg");
	this.shape_114.setTransform(333.6,361.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BFD89F").s().p("AgkAgIAAg/IBIAAIAAA/g");
	this.shape_115.setTransform(333.6,361.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#B2C06D").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_116.setTransform(323.7,361.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CFDD8A").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_117.setTransform(323.7,361.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#C8CA5E").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_118.setTransform(313.8,361.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DFE178").s().p("AgjAgIAAg/IBIAAIAAA/g");
	this.shape_119.setTransform(313.8,361.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#D5C553").ss(1,0,0,4).p("AgjgfIBIAAIAAA/IhIAAg");
	this.shape_120.setTransform(299.7,361.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EBDB64").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_121.setTransform(299.7,361.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#C4A549").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_122.setTransform(289.7,361.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#DCBB58").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_123.setTransform(289.7,361.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#AA6D36").ss(1,0,0,4).p("AgkgfIBIAAIAAA/IhIAAg");
	this.shape_124.setTransform(269.9,361.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C17D40").s().p("AgjAgIAAg/IBIAAIAAA/g");
	this.shape_125.setTransform(269.9,361.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#B8893E").ss(1,0,0,4).p("AgjgfIBHAAIAAA/IhHAAg");
	this.shape_126.setTransform(279.8,361.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CE9D4C").s().p("AgjAgIAAg/IBHAAIAAA/g");
	this.shape_127.setTransform(279.8,361.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#5C9FC5").ss(1,0,0,4).p("AhVgfICLAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAIiLAAg");
	this.shape_128.setTransform(360.1,361.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8AC9EB").s().p("AhVAgIAAg/ICLAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAg");
	this.shape_129.setTransform(360.1,361.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AouA+QgaAAgSgSQgSgSAAgaQAAgZASgSQASgSAaAAIRdAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAg");
	this.shape_130.setTransform(310.4,361.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B95131").s().p("AgBADQgCgDgBgGQAMAGgFAGIgCABQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBg");
	this.shape_131.setTransform(104.7,311.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B95131").s().p("AgDAAQgDgFAGgDQAFgDAAAHQAAAFgCAJQgFgFgBgFg");
	this.shape_132.setTransform(109.3,305.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B95131").s().p("AgIAAQgIgJgJgDQAJgGAKgCQALgCAHAKQAOATAAAHIgQgKIACARQgNgNgHgIg");
	this.shape_133.setTransform(127.4,312);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B95131").s().p("AgXAKQgEgPAOgQQALgLALAFQAMAGADAMQgHgEgIABQgJABgDAJQgGAQAAAPQgKgHgEgMg");
	this.shape_134.setTransform(120.4,297.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#AB4A2D").s().p("AADAfQgHgFgGgMQgGgMAJgOQAHgLALgJQgMATAAAPQAAARAOAOIgDAAQgDAAgEgCg");
	this.shape_135.setTransform(121.8,318.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#AB4A2D").s().p("AgQARQAPgOADgKQAEgMgEgKIgJgIIAGgLQAGgEAKAaQAGARgMANQgEAFgMAIQgFADALAdQgJgGgGgag");
	this.shape_136.setTransform(104.8,322.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FAF28E").s().p("AgDAAQAFgHAFgBQAAAGgDAFQgEAGgFABQgEgDAGgHg");
	this.shape_137.setTransform(120.9,332.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FAF28E").s().p("AgWAYQgMgHAYABIAVAGIgVgVIgOAEQgHgaAHgLIAQAWQASAbASAMQglAAgNgHg");
	this.shape_138.setTransform(112.4,332.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAF28E").s().p("AAEAVQgGgJgGgKQgIgNAAgHQAAgMAhAzg");
	this.shape_139.setTransform(104.1,328.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FDF6A4").s().p("AAtA+QAAgSgCgGQgDgIgKgBQgHAAgKAHQgIAFgGAHQgHgJgMgFQgSgIgUADQgUADgLAJQgIAGAAAHQgBgMADgOQAFgSALgJIADgrQAAgcgIgHQgFgFACAAQALABANgKQAWgQAEgQQgEAZADAXQAEAeASAFQARAFAOgHQALgHAEgKIAPAKQgKAOgCAPQgEAUAQALQAQAKARgCQAMgCAIgGQgBANgFAOQgGARgKAHIgIgIQgfBDgUADQAcgpAAgVg");
	this.shape_140.setTransform(116.2,322);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EABF93").s().p("AgmAVQgagSAFgPQAHgWAYgEQAXgEALARQAOgSAUABQAVAAAAAWQAAAcgSAQQgLAKgaAJQgZgIgTgOg");
	this.shape_141.setTransform(114.4,329.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#DA8655").s().p("AhBB4QgvgbgPglQAAgGAEgHQAFgKALgJQALgKgGgNQgFgJgLgHQAJgpAagkQAjgwAwgIQgDACADAeQACAhAPAFQAMAFAOgHQALgHAHgKQAZADAJAQQAJARgCAMQgMAIgGAIQgKAMAIAKQAHAJAMABQAIABAIgEQAXAkgaAyQgeA6hOAIQgkgHgjgVg");
	this.shape_142.setTransform(114.8,320.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#4982AB").ss(1,0,0,4).p("ACghIQgCAEAAAGIAABAQgUABgJACQgMACAAAGQACAYgFAUQgGAbgSACQgaAKgyADQheAGg6gQQgdgRANgQQASgWBhgHIAAgqQAAgHgfgGQgngHgSgEQAyAAAEgQIgDgSQAEgNAbgIQAmgKBBAJIAAAXQBRgJAVAJg");
	this.shape_143.setTransform(284.1,283.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#60939C").s().p("AiLBZQgdgRAOgQQARgWBhgHIAAgqQABgHgfgGQgogHgRgEQAyAAAEgQIgDgSQADgNAcgIQAlgKBCAJIAAAXQBRgJAVAJQgDAEAAAGIAABAQgUABgIACQgMACAAAGQACAYgFAUQgHAbgRACQgaAKgyADQgZACgXAAQg+AAgrgMg");
	this.shape_144.setTransform(284.2,283.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#67A9CC").s().p("AAFgDQgWgGglgFQA3AAAPABQAkACADALQACAKgKACIgdADQARgKgegIg");
	this.shape_145.setTransform(300.7,273.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#67A9CC").s().p("AgCAEQABgQgWgOQAVAGAIAFQAQAJACAQQAAAGgIAFQgLAGgTAAQALgKABgNg");
	this.shape_146.setTransform(304.3,280.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#67A9CC").s().p("AgDgCIAAgSIADANQAEALgBAKIgCAHQAAgKgEgNg");
	this.shape_147.setTransform(296.3,286.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#67A9CC").s().p("AAYAYQgSgRgPgFIgcgEQgQgDABgFQAVgDAmgJQAfgGALAJQAJAIgKAEQgMAEADAFIAAAXg");
	this.shape_148.setTransform(286.1,271.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#67A9CC").s().p("AgVgCIAmgPIAFAjQgbgTgQgBg");
	this.shape_149.setTransform(274.5,275.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#67A9CC").s().p("AAAAOQgDgXgFAAIARgHIAAAhg");
	this.shape_150.setTransform(270.5,277.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#67A9CC").s().p("AgQAJQgLgJgOAAIA4gLQAbgFAAgHIAAAqIgvAFQgEgIgHgHg");
	this.shape_151.setTransform(275.9,284.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#50A6E1").ss(1,0,0,4).p("AhghFQAIgEgNgJQgOgJAMgGQAOgIBAgJQBAgKALAFQAJAIgKADQgMADADAIQADAGBOgBQBOAAADAPQADAMgaACQgfACgGAKQgVgJhRAJIAAgXAheg0QAEgNAbgIQAmgKBBAJAiRgSQAyAAAEgQIgDgSAg5AFQAAgGgfgGQgngHgSgEIAAgiAhghFIACARAiRgSQgigIAEgIQAEgIAagKAg5AFIAAArQhhAHgSAWQgNAQAdARAg5AFQAAAHhEANQhGAOgKAWQgGAQANAMQANANAdAIAhghFQgHADgqAOACMAXQgUABgJACQgMACAAAGQAAABAAAAQACAXgFAUQgEARgJAIQgFADgGABQgaAKgxADQhfAGg6gQACMgpIAABAACMgpQAAgGACgEACMgpQAAAEAgAKQAhAKADAWQAAALgXAEQgLACgiABABjAjQABAGAHAZQABAYgZANAAohhIAAAX");
	this.shape_152.setTransform(285.9,281.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#99D0EC").s().p("AicBuQgdgIgNgNQgNgMAGgQQAKgWBGgOQBEgNAAgHQAAgGgfgGQgngHgSgEQgigIAEgIQAEgIAagKIAxgRQAIgEgNgJQgOgJAMgGQAOgIBAgJQBAgKALAFQAJAIgKADQgMADADAIQADAGBOgBQBOAAADAPQADAMgaACQgfACgGAKQgCAEAAAGQAAAEAgAKQAhAKADAWQAAALgXAEQgLACgiABQgUABgJACQgMACAAAGIABABIAHAdQABAagaANQgEAEgGAAQgaAKgxADQgZACgXAAQg/AAgqgMg");
	this.shape_153.setTransform(285.9,281.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#75B1AD").s().p("AgFAAIgNAEIgFAAIAvgUIgCAJIgOACIAMAJQgDAAgLgHIgDAAIgJAUQACgJgBgIg");
	this.shape_154.setTransform(266.2,278.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#75B1AD").s().p("AADATIgeAQIAZgTIghgXQAZAQAEgBQADAAAJgeIgIgMIAMAJQAAAHgMAbIAmASIAAAIg");
	this.shape_155.setTransform(271.3,268.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#75B1AD").s().p("AgRAZQAVgLABgFIgHgbIARgKIgOAMIAIAWIAJgIQgSAcgNADg");
	this.shape_156.setTransform(292.7,266.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#75B1AD").s().p("AgWANIABgHIAHACQAIACADgEIARgTIgNAVQgBACALAAIAMgBQgLAFgPAAIgTgBg");
	this.shape_157.setTransform(308.4,272.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#75B1AD").s().p("AgFgFQgEAAgWgRQAFgBADgDIAPAPIAoAMIgfgFIAAAgg");
	this.shape_158.setTransform(308.8,285.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#75B1AD").s().p("AgFgGIADAAQAAACAIALQgGgCgFgLg");
	this.shape_159.setTransform(304,284);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#75B1AD").s().p("AgRAYQABgJAXgIIgOgRQgNAAghgTIACgKQgBAJAoANQAeAKAkAGQgHABgtgGIAMARQgEgCgOAIQgIAFgDAHQgBAGAAAFQgDgGACgKg");
	this.shape_160.setTransform(301.8,292.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#75B1AD").s().p("AgUgNQgDgZAGgOIAKAAIgDAIQgDAMABAQIAeAMQgBAKAFAXQgFgMgBgKIgCgIIgZgJQADAZAQAnQgWgjgGggg");
	this.shape_161.setTransform(280.9,298.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#75B1AD").s().p("AAAAEQglAPASgJQARgIAcgbIAAAMQgJADgGAEQgIAFAEABQADACgLAYQABgJAAgNg");
	this.shape_162.setTransform(262.5,290.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AnaAAIO1AA");
	this.shape_163.setTransform(63.5,261);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AnaAAIO1AA");
	this.shape_164.setTransform(63.5,222);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AhuBtQAOAAAKgKQAKgJAAgPIAAhyIAIAAIAAByQAAAMgGAJQgFAJgKAGQgKAFgLAAgAl+A8QgWgNgNgWQgMgWAAgYQAAgYAMgXQANgVAWgNQAWgNAZAAQAaAAAUAMQAVANANAWQANAVAAAaQAAAZgNAWQgNAWgVANQgVAMgaAAQgZAAgVgNgAl6hgQgTALgNAVQgLAUAAAXQAAAXALAUQAMAVAUAMQAUALAWAAQAXAAAUgLQAUgMALgVQAMgUAAgXQAAgXgLgUQgNgVgTgLQgTgMgXAAQgYAAgTAMgABtBAQgNgHgIgNQgIgNAAgQQAAgPAIgMQAIgNANgIQANgIARAAQANAAAKAFQAKAFAIAIIAAANQgIgMgJgGQgKgGgOAAQgPAAgKAHQgMAHgHALQgHAKAAAOQAAAPAHALQAHALALAHQAMAGANAAQAbAAAPgYIAAANQgIAJgLAEQgKAFgNAAQgQAAgNgIgAF4BDQgJgEgDgGIAAgNQAEALAIAFQAJAEALAAQANAAAGgHQAIgHAAgMQAAgJgFgGQgDgFgKgGIgYgOIgHgHQgDgFAAgGQAAgKAGgFQAHgGALAAQANAAAJAGIAAAKQgHgJgOAAQgJAAgEADQgFAEAAAGQAAAFADAFQAEAEAEADIARAJQAOAIAEAGQAGAIAAALQAAAPgKAJQgJAJgOAAQgLAAgKgEgAgJA/QgNgHgHgOQgIgMAAgQQAAgPAIgNQAHgMANgIQAMgHARAAQAZAAASAUIhLBJQAIAHAHADQAHADAJAAQAMAAAMgHQALgGAIgMIAAANQgJAKgKAEQgMAEgMAAQgQAAgMgIgAgFgcQgMAGgGAMQgGAKAAAOQAAAUANAOIBFhFQgJgIgGgCQgIgDgKAAQgPAAgKAGgAi7A/QgOgIgHgNIAAAbIgIAAIAAizIAIAAIAABjQAGgOAOgIQAOgIAPAAQAQAAANAIQANAHAHANQAIANAAAPQAAAPgIANQgHANgNAHQgNAIgQAAQgPAAgNgIgAi3gbQgMAHgHALQgGAKAAAOQAAANAGALQAHAMAMAHQALAGAOAAQANAAALgGQAKgGAIgNQAGgLAAgNQAAgOgGgKQgHgLgLgHQgLgHgOAAQgOAAgKAHgADTA7QgMgLAAgTIAAhvIAIAAIAAArIAhAAIAAAHIghAAIAAA9QAAAQAJAJQAKAJAOAAIAAAHQgSAAgLgLgAE1BFIAAhwQAAgLAGgJQAFgKAJgFQAKgGALAAIAAAHQgJAAgHAFQgIAEgFAIQgEAHAAAKIAAAEIAhAAIAAAHIghAAIAABlgAEKBFIAAhsIAIAAIAABsgAEIhCQgDgCAAgEQAAgDADgCQACgDAEAAQADAAACADQADACAAADQAAAEgDACQgCADgDAAQgEAAgCgDgAhOhCQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_165.setTransform(63.1,243.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("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");
	this.shape_166.setTransform(120.6,361.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AFEA5IAAgMIANAFIAOABQAKAAAFgDQAGgDAAgHQAAgEgEgEQgEgDgNgGIgRgHQgGgEgCgEQgCgEAAgFQAAgLAIgGQAJgGAPAAQANAAAOAGIgFAKQgNgFgKAAQgKAAgEADQgFADAAAFQAAAEACABIAGAFIAPAGQAQAGAEAFQAFAFAAAJQAAAMgIAHQgKAGgPAAQgRAAgKgFgAD2AzQgLgMAAgVQAAgUAKgLQAKgNARAAQAQAAAKALQAJALAAAQIAAAIIg7AAQAAAPAIAIQAGAIAOAAQAOAAANgGIAAAMIgNAEQgGABgIAAQgUAAgKgLgAEAgIQgGAGgCALIAtAAQAAgKgFgHQgFgHgLAAQgKAAgGAHgABMA5IAAgMIANAFIAOABQAKAAAFgDQAGgEAAgGQAAgEgFgEQgDgDgOgGIgRgHQgFgEgCgEQgDgEAAgFQAAgLAJgGQAJgGAOAAQAOAAANAGIgEAKQgMgFgMAAQgJAAgEADQgFACAAAGQAAAEACABQABACAEADIAPAGQAQAGAFAFQAFAGAAAIQAAAMgJAHQgJAGgQAAQgQAAgKgFgAgyA3QgIgIAAgQIAAg3IANAAIAAA2QAAALAFAFQAFAFAKAAQAOAAAGgHQAFgIAAgQIAAgsIANAAIAABVIgLAAIgCgMIAAAAQgEAGgGAEQgJADgIAAQgPAAgIgHgAiyAkIAAgyIgMAAIAAgGIAMgGIAGgSIAHAAIAAAUIAZAAIAAAKIgZAAIAAAxQAAAIAEAEQAEAEAGAAIAHAAIAFgBIAAAKIgOACQgZAAAAgagAkGAzQgLgMAAgVQAAgTAKgMQAKgNARAAQARAAAJALQAJAKAAARIAAAIIg7AAQAAAPAIAIQAHAIANAAQAOAAANgGIAAAMIgNAEQgGABgIAAQgUAAgKgLgAj8gIQgGAGgCALIAtAAQAAgKgFgHQgFgHgLAAQgKAAgGAHgADHA9IAAh5IANAAIAAB5gAAoA9IAAhVIANAAIAABVgAh6A9IAAhVIALAAIABAQIABAAQAEgJAHgEQAHgFAIAAIAKABIgCAMIgJgBQgLAAgHAJQgHAHAAANIAAAugAl/A9IAAhyIAjAAQAaAAAPAPQAPAPAAAZQAAAdgQAPQgPAPgdAAgAlyAxIAQAAQAYAAAMgMQAMgLAAgXQAAgWgLgLQgMgLgWAAIgTAAgAj1gjIAAgCIAOgYIAQAAIAAACIgKAMIgMAMgAAqgpQgDgCAAgEQAAgEADgDQACgCADAAQADAAACACQADADAAAEQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_167.setTransform(56,318.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("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");
	this.shape_168.setTransform(83.7,279.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#8AC9EB").s().p("AiLBZQgdgRAOgQQASgWBhgHIAAgqQAAgHgfgGIg5gLQARAAAPgDQAUgEACgJIgDgSQADgNAcgIQAmgKBBAJIAAAXQAbgEAbgBQAjgBANAGQgDAEAAAGIAABAQgoABAAAKQACAYgFAUQgHAbgRACQgbAKgxADQgZACgXAAQg+AAgrgMg");
	this.shape_169.setTransform(188,282.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#66B3E9").s().p("AAEgDQgVgHglgEQA2AAAQABQAkACACALQACAKgKACIgcADQARgKgfgIg");
	this.shape_170.setTransform(204.6,272.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#66B3E9").s().p("AgCAEQABgRgWgNQAVAGAIAFQAPAKADAPQAAAGgJAFQgKAGgTAAQALgKABgNg");
	this.shape_171.setTransform(208.2,279.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#66B3E9").s().p("AgDgDIAAgRIADAOQAEAKAAAKQgCADAAAEQAAgHgFgRg");
	this.shape_172.setTransform(200.1,286);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#66B3E9").s().p("AAYAXQgUgRgNgEIgcgEQgQgEABgEQAVgDAmgJQAfgGALAJQAJAIgKAEQgMAEADAFIAAAXg");
	this.shape_173.setTransform(189.9,270.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#66B3E9").s().p("AABAFQgOgHgIAAIAmgPIAFAjQgJgHgMgGg");
	this.shape_174.setTransform(178.4,275.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#66B3E9").s().p("AAAAPQAAgIgCgHQgDgJgDABIARgIIAAAhg");
	this.shape_175.setTransform(174.3,276.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#66B3E9").s().p("AgRAJQgLgJgOAAIA5gKQAbgHABgGIAAAqQgZACgXADQgDgJgJgGg");
	this.shape_176.setTransform(179.7,283.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#6797C4").ss(0.5,0,0,4).p("AhghFQAJgEgOgJQgOgJAMgGQAOgIBAgJQBAgKALAFQAJAIgKADQgMADAEAIQACAGBPgBQBNAAADAPQADAMgaACQgfACgGAKQgMgGgkABQgbABgaAEIAAgXAhghFIADARQADgNAcgIQAlgKBCAJAhghFQgJADgoAOAiRgSQgigHAEgJQAEgIAagKAiRgSIAAgiAiRgSQARAAAPgDQAUgEACgJIgCgSAg5AFQABgGgfgGQgogHgSgEAg5AFQAAAHhEANQhGAOgKAWQgGAPANANQANAMAdAJAg5AFIAAArQhhAHgSAWQgNAQAdARACMAXQgoABAAAKQAAAAAAABQAAAGAHAZQABAXgZANABkAjQABAXgFAUQgEARgJAHQgEAEgGABQgbAKgxADQhfAGg6gQAAphhIAAAXACMgpIAABAACMgpQAAgGACgEACMgpQAAAEAgAKQAhAKADAWQAAALgXAEQgIABglAC");
	this.shape_177.setTransform(189.8,280.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#AADBF7").s().p("AicBuQgdgJgNgMQgNgNAGgPQAKgWBGgOQBEgNAAgHQABgGgfgGIg6gLQgigHAEgJQAEgIAagKIAxgRQAJgEgOgJQgOgJAMgGQAOgIBAgJQBAgKALAFQAJAIgKADQgMADAEAIQACAGBPgBQBNAAADAPQADAMgaACQgfACgGAKQgCAEAAAGQAAAEAgAKQAhAKADAWQAAALgXAEIgtADQgoABAAAKIAAABIAHAdQACAZgbAOQgDADgGABQgbAKgxADQgZACgXAAQg/AAgqgMg");
	this.shape_178.setTransform(189.8,280.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#69ACD5").s().p("AgEAAIgOADIgFAAIAvgTIgCAJIgNACIALAIQgFAAgJgGIgDAAIgJAUQACgGAAgLg");
	this.shape_179.setTransform(170.1,278.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#69ACD5").s().p("AADAUIgeAPIAZgUIghgWIAdAQQADAAAJgfIgJgMIANAJQAAAHgMAcIAnASIAAAHg");
	this.shape_180.setTransform(175.2,268.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#69ACD5").s().p("AgRAZQAVgLABgFIgHgbIARgKIgOALIAIAXIAJgIQgSAcgNADg");
	this.shape_181.setTransform(196.6,265.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#69ACD5").s().p("AgWANQACgCgBgEQAOAFAFgFIARgUIgOAVQgBADAXgBQgKAEgRAAIgSgBg");
	this.shape_182.setTransform(212.2,271.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#69ACD5").s().p("AgFgFQgFAAgVgRQAFgCADgDIAPAQIAoALIgfgDIAAAeg");
	this.shape_183.setTransform(212.6,284.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#69ACD5").s().p("AgFgGIADAAQAAACAIALQgGgCgFgLg");
	this.shape_184.setTransform(207.9,283.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#69ACD5").s().p("AgRAYQABgJAXgIIgNgRQgOAAghgTIADgKQgBAJAoANQAbAJAmAHQgKABgpgGIALARQgEgCgOAIQgIAFgCAHQgCAGABAFQgEgIACgIg");
	this.shape_185.setTransform(205.7,291.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#69ACD5").s().p("AgUgMQgDgZAGgPIALAAIgEAIQgDAMABAQIAeAMQgBAKAFAXQgFgMgBgKIgCgIQgBgBgMgEIgMgEQAEAcAPAjQgWghgGggg");
	this.shape_186.setTransform(184.7,297.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#69ACD5").s().p("AAAAEQgiANAOgHQARgIAcgbIAAAMQgZALAGACQADACgLAYIACgWg");
	this.shape_187.setTransform(166.4,290.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#5E4785").ss(1,0,0,4).p("ACghIQgDAEAAAGIAABAQgoABAAAKQACAYgFAUQgHAbgRACQgbAKgxADQhfAGg6gQQgdgRAOgQQASgWBhgHIAAgqQAAgHgfgGQgngHgSgEQARAAAPgDQAUgEACgJIgDgSQADgNAcgIQAmgKBBAJIAAAXQAbgEAbgBQAjgBANAGg");
	this.shape_188.setTransform(234.7,282.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#725D97").s().p("AiLBZQgdgRAOgQQASgWBhgHIAAgqQAAgHgfgGIg5gLQARAAAPgDQAUgEACgJIgDgSQADgNAcgIQAmgKBBAJIAAAXQAbgEAbgBQAjgBANAGQgDAEAAAGIAABAQgoABAAAKQACAYgFAUQgHAbgRACQgbAKgxADQgZACgXAAQg+AAgrgMg");
	this.shape_189.setTransform(234.7,282.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#5B6BBF").s().p("AAEgDQgVgHglgEQA2AAAQABQAkACACALQACAKgKACIgcADQARgKgfgIg");
	this.shape_190.setTransform(251.2,272.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#5B6BBF").s().p("AgCAEQABgQgWgOQAVAGAHAFQAQAKADAPQAAAGgJAFQgKAGgTAAQAMgKAAgNg");
	this.shape_191.setTransform(254.8,279.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#5B6BBF").s().p("AgDgDQABgJgBgIIAEANQADALAAAKIgCAHQAAgHgFgRg");
	this.shape_192.setTransform(246.8,286);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#5B6BBF").s().p("AAYAXQgUgRgOgEIgbgEQgQgEABgEQAUgDAngJQAfgGAKAJQAKAIgKAEQgMAEADAFIAAAXg");
	this.shape_193.setTransform(236.6,270.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#5B6BBF").s().p("AABAFQgOgHgIAAIAmgPIAFAjQgJgHgMgGg");
	this.shape_194.setTransform(225.1,275.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#5B6BBF").s().p("AAAAPQgBgIgCgHQgCgJgDABIARgIIAAAhg");
	this.shape_195.setTransform(221,276.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#5B6BBF").s().p("AgRAJQgLgJgOAAIA5gKQAbgHABgGIAAAqQgZACgXADQgDgJgJgGg");
	this.shape_196.setTransform(226.4,283.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#6797C4").ss(0.5,0,0,4).p("AAphhQACAGBPgBQBNAAADAPQADAMgaACQgfACgGAKQgMgGgkABQgbABgaAEIAAgXACMgpQAAAEAgAKQAhAKADAWQAAALgXAEQgIABglACACMgpIAABAQgoABAAAKQAAAAAAABQABAXgFAUQgEARgJAHQgEAEgGABQgbAKgxADQhfAGg6gQACMgpQAAgGACgEABkAjQAAAGAHAZQABAXgZANAhghFQAJgEgOgJQgOgJAMgGQAPgIA/gJQBAgKALAFQAJAIgKADQgLADADAIIAAAXAiRgSQgigHAEgJQAEgIAagKAiRgSIAAgiAg5AFIAAArQhhAHgSAWQgNAQAdARAg5AFQAAAHhEANQhGAOgKAWQgGAPANANQANAMAdAJAiRgSQARAAAPgDQAUgEACgJIgCgSQADgNAcgIQAlgKBCAJAg5AFQABgGgfgGQgogHgSgEAhghFIADARAhghFQgJADgoAO");
	this.shape_197.setTransform(236.4,280.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#9595DA").s().p("AicBuQgdgJgNgMQgNgNAGgPQAKgWBGgOQBEgNAAgHQABgGgfgGIg6gLQgigHAEgJQAEgIAagKIAxgRQAJgEgOgJQgOgJAMgGQAPgIA/gJQBAgKALAFQAJAIgKADQgLADADAIQACAGBPgBQBNAAADAPQADAMgaACQgfACgGAKQgCAEAAAGQAAAEAgAKQAhAKADAWQAAALgXAEIgtADQgoABAAAKIAAABIAHAdQACAZgbAOQgDADgGABQgbAKgxADQgZACgXAAQg/AAgqgMg");
	this.shape_198.setTransform(236.4,280.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#878DB4").s().p("AgEAAIgNADIgGAAIAvgTIgCAJIgNACIALAIQgFAAgJgGIgDAAIgJAUQACgGAAgLg");
	this.shape_199.setTransform(216.7,278.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#878DB4").s().p("AADAUIgeAPIAZgUIghgWIAdAQQACAAALgfIgJgMIALAJQABAHgMAcIAmASIAAAHg");
	this.shape_200.setTransform(221.8,268.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#878DB4").s().p("AgRAZQAVgKABgGIgHgbIARgKIgOALIAIAXIAJgIQgSAcgMADg");
	this.shape_201.setTransform(243.2,265.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#878DB4").s().p("AgWANQACgCgBgEQAOAFAFgFIARgUIgNAVQgCADAXgBQgKAEgRAAIgSgBg");
	this.shape_202.setTransform(258.9,271.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#878DB4").s().p("AgFgFQgEAAgWgRQAFgCADgDIAPAQIAoALIgfgDIAAAeg");
	this.shape_203.setTransform(259.3,284.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#878DB4").s().p("AgFgGIADAAQAAACAIALQgGgCgFgLg");
	this.shape_204.setTransform(254.6,283.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#878DB4").s().p("AgRAYQABgJAYgIIgOgRQgMAAgjgTIACgKQAAAJAoANQAcAJAlAHQgJABgrgGIAMARQgEgCgOAIQgIAFgDAHQgBAGAAAFQgCgIABgIg");
	this.shape_205.setTransform(252.3,291.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#878DB4").s().p("AgUgMQgDgZAGgPIALAAIgEAIQgDAMABAQIAeAMQgBAKAFAXQgFgMgBgKIgCgIQgBgBgMgEIgMgEQAEAcAPAjQgWghgGggg");
	this.shape_206.setTransform(231.4,297.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#878DB4").s().p("AAAAEQgiANAOgHQARgIAcgbIAAAMQgZALAGACQADACgLAYIACgWg");
	this.shape_207.setTransform(213.1,290.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("A/KuhMA+VAAAIAAdDMg+VAAAg");
	this.shape_208.setTransform(201,305.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.2)").s().p("A/KOiIAA9DMA+VAAAIAAdDg");
	this.shape_209.setTransform(201,305.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Eg+QgK2MB8hAAAIAAVtMh8hAAAg");
	this.shape_210.setTransform(400,468);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.2)").s().p("Eg+QAK3IAA1tMB8hAAAIAAVtg");
	this.shape_211.setTransform(400,468);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("A/FuhMA+LAAAIAAdDMg+LAAAg");
	this.shape_212.setTransform(599.5,305.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.2)").s().p("A/FOiIAA9DMA+LAAAIAAdDg");
	this.shape_213.setTransform(599.5,305.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["rgba(0,0,0,0.447)","rgba(0,0,0,0)"],[0,1],0,-300,0,300).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_214.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// decors
	this.instance_4 = new lib.copie1_presentation();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ecran_instruction, rect = new cjs.Rectangle(0,0,800,601), [rect]);


(lib.mcDecorsMobiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{niveau1_bas:0,niveau2_bas:1,niveau1_haut:2,niveau2_haut:3});

	// decors
	this.instance = new lib.decorsMobile1_n1_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,-35,1,1,0,0,0,0,-35);

	this.instance_1 = new lib.decorsMobile1_n2_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.9,-48.9,1,1,0,0,0,0,-49.5);

	this.instance_2 = new lib.decorsMobile2_n1_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,17,1,1,0,0,0,0,18);

	this.instance_3 = new lib.decorsMobile2_n2_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,47.6,1,1,0,0,0,0,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-800,-69.9,1600,70);
p.frameBounds = [rect, new cjs.Rectangle(-800.9,-97.4,1600,97), new cjs.Rectangle(-798.9,-1,1599,36), new cjs.Rectangle(-800,20,1600,74)];


(lib.mcbtnRejouer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bouton
	this.instance = new lib.rejouer();
	this.instance.parent = this;
	this.instance.setTransform(57.7,16.6,1,1,0,0,0,57.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Calque_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AuwEsIAApXIdhAAIAAJXg");
	this.shape.setTransform(58.7,17.4,0.687,0.749);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcbtnRejouer, rect = new cjs.Rectangle(-6.2,-5,129.9,44.9), [rect]);


(lib.mcAvatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"statique":0,course:2,dommage:15,"debutMort":18,"finMort":78});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay("course");
	}
	this.frame_18 = function() {
		this.stop;
	}
	this.frame_78 = function() {
		this.agoniserAvatar();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(4).call(this.frame_18).wait(60).call(this.frame_78).wait(1));

	// point4
	this.mcP4 = new lib.PointDetection();
	this.mcP4.name = "mcP4";
	this.mcP4.parent = this;
	this.mcP4.setTransform(-8.3,-55.5,1,1,0,0,0,-0.5,-1);
	this.mcP4.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mcP4).wait(1).to({regX:-0.4,regY:-0.4,x:-7.8,y:-54.1},0).wait(1).to({x:-7.4,y:-53.3},0).wait(1).to({x:-7.3},0).wait(1).to({x:-10,y:-59.3},0).wait(1).to({x:-9.1,y:-59.4},0).wait(1).to({x:-14.9,y:-53.7},0).wait(1).to({x:-15.5,y:-53.6},0).wait(1).to({x:-17.4,y:-53.9},0).wait(1).to({x:-19.2,y:-53.3},0).wait(1).to({x:-17,y:-52.4},0).wait(1).to({x:-17.4,y:-52.2},0).wait(1).to({x:-12.1,y:-55.9},0).wait(1).to({x:-11.6},0).wait(1).to({x:-10.6,y:-56.1},0).wait(1).to({x:-9.7,y:-56.3},0).wait(1).to({x:-9.5,y:-55.7},0).wait(1).to({y:-56.4},0).wait(1).to({x:-18.3,y:-41.9},0).wait(1).to({x:-18.1,y:-42.2},0).wait(1).to({x:-27.4,y:-31.4},0).wait(59));

	// point3
	this.mcP3 = new lib.PointDetection();
	this.mcP3.name = "mcP3";
	this.mcP3.parent = this;
	this.mcP3.setTransform(27.6,-51.9,1,1,0,0,0,-0.5,-1);
	this.mcP3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mcP3).wait(1).to({regX:-0.4,regY:-0.4,x:27.8},0).wait(1).to({x:35.4,y:-52.3},0).wait(1).to({x:35.5,y:-52},0).wait(1).to({x:32.4,y:-65.9},0).wait(1).to({x:32.2,y:-65.6},0).wait(1).to({x:20.8,y:-69.6},0).wait(1).to({x:21,y:-69.5},0).wait(1).to({x:19.3,y:-67.5},0).wait(1).to({x:18.8,y:-67},0).wait(1).to({x:17.9,y:-65.8},0).wait(1).to({x:17,y:-64.9},0).wait(1).to({x:25.3,y:-60.1},0).wait(1).to({x:24.9,y:-59.1},0).wait(1).to({x:25},0).wait(1).to({x:20.5,y:-47.1},0).wait(1).to({y:-46.4},0).wait(1).to({y:-46.8},0).wait(1).to({x:32.6,y:-28.4},0).wait(1).to({x:32.5,y:-28.6},0).wait(1).to({x:28.7,y:-18.2},0).wait(59));

	// point2
	this.mcP2 = new lib.PointDetection();
	this.mcP2.name = "mcP2";
	this.mcP2.parent = this;
	this.mcP2.setTransform(-37.2,-32.8,1,1,0,0,0,-0.5,-1);
	this.mcP2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mcP2).wait(1).to({regX:-0.4,regY:-0.4,x:-37.3,y:-32},0).wait(1).to({x:-46.4,y:-28.9},0).wait(1).to({x:-46.2,y:-29.7},0).wait(1).to({x:-36.7,y:-20.2},0).wait(2).to({x:-13.6,y:-1.7},0).wait(1).to({x:-13.3},0).wait(1).to({x:-48,y:-8.2},0).wait(2).to({x:-56.9,y:-10.9},0).wait(1).to({x:-57,y:-11.2},0).wait(1).to({x:-61.9,y:-19.3},0).wait(1).to({x:-61.6,y:-20.1},0).wait(1).to({x:-61.8,y:-19.9},0).wait(1).to({x:-30.1,y:-22},0).wait(1).to({x:-30},0).wait(1).to({y:-22.1},0).wait(1).to({x:-41.5,y:-20.9},0).wait(1).to({y:-22.8},0).wait(1).to({x:-49.6,y:-7.6},0).wait(59));

	// point1
	this.mcP1 = new lib.PointDetection();
	this.mcP1.name = "mcP1";
	this.mcP1.parent = this;
	this.mcP1.setTransform(19.9,-3,1,1,0,0,0,-0.5,-1);
	this.mcP1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mcP1).wait(1).to({regX:-0.4,regY:-0.4,x:18.5,y:-2.2},0).wait(1).to({x:8.5,y:-1.3},0).wait(1).to({x:8.6,y:-1.2},0).wait(1).to({x:-12.8,y:-6.7},0).wait(1).to({x:-13.3,y:-6.1},0).wait(1).to({x:11.7,y:-4.5},0).wait(1).to({x:11,y:-4.4},0).wait(1).to({x:42.4,y:-19.7},0).wait(1).to({x:42.6,y:-20},0).wait(1).to({x:47.1},0).wait(1).to({x:47.2,y:-19.4},0).wait(1).to({x:36.2,y:-2},0).wait(1).to({x:36.6},0).wait(1).to({x:36.4,y:-1.9},0).wait(1).to({x:14.5,y:0.5},0).wait(1).to({x:14.7,y:0.4},0).wait(1).to({x:14.8,y:0.3},0).wait(1).to({x:25.5,y:-1.2},0).wait(1).to({x:25.6,y:-1.3},0).wait(1).to({x:27.5,y:-0.4},0).wait(59));

	// point0
	this.mcP0 = new lib.PointDetection();
	this.mcP0.name = "mcP0";
	this.mcP0.parent = this;
	this.mcP0.setTransform(61.2,-34,1,1,0,0,0,-0.5,-0.5);
	this.mcP0.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mcP0).wait(1).to({regX:-0.4,regY:-0.4,x:61.3,y:-34.8},0).wait(1).to({x:48.2,y:-25.2},0).wait(1).to({y:-24.8},0).wait(1).to({x:55.8,y:-51.5},0).wait(1).to({y:-51.4},0).wait(1).to({x:41.7,y:-50},0).wait(1).to({x:41.8,y:-49.9},0).wait(1).to({x:41,y:-44.3},0).wait(1).to({y:-44.2},0).wait(1).to({x:39.3,y:-43.6},0).wait(1).to({x:39.4,y:-43.3},0).wait(1).to({x:47.4,y:-36},0).wait(1).to({x:47},0).wait(1).to({x:47.1,y:-35.6},0).wait(1).to({x:38.2,y:-15.5},0).wait(1).to({y:-15.4},0).wait(1).to({x:38.3},0).wait(1).to({x:45.1,y:-17.3},0).wait(1).to({x:45.4,y:-17.1},0).wait(1).to({x:43,y:-3.4},0).wait(59));

	// Avatar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAAQAAgJAEAAQAFAAAAAJQAAAKgFAAQgEAAAAgKg");
	this.shape.setTransform(51.5,-39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAUQgSgJAEgSQAFgHAHgFQAJgGAIADQAIACAEAHQADAGAAAFQgFASgFAGQgDACgEAAQgGAAgHgEg");
	this.shape_1.setTransform(60.7,-34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("ACeAcQAwgHAogJQA2gMAIgKICWAAQAPgEAOgOQAQgPAAgRQAAgRgdgHQgggJgEgHQgEgIADgPQACgNgLgOQgLgOgigRQAJgEABgHQABgKgQgIQgQgIgIAHQgGAFAAAKAkJBAQgJArgNAoQgMAlgMAUQgNAYAMAKQAFAFAaAGQAcAHAFAPQAEAOgRAEIiqAAQACgbgEgkQgFgwgNgdQgNgdgFg2QgDgoABgkIgeAAQgFgYAPgeQASgmACgcQADggAngrQAeghAmgbQAbgTBJgEQBLgEAoARQA2AXBGAJQBAAJAQgLQApgOAHgBQAwgGAsAfQAjAZAlADQAUACAcAAQAJABAVAIAEghuIAogtQgFgJgKgIQgUgRgUAIQgVAJAJAbQAJAYASALgAF/i1QgUgKgPgFADBg3QAIAagrA5Aj7g8QAAA2gOBGQAzAJBLgDQBSgEALgRQgMAYgMAlQgNArACAQQADASAMAPQAOASABAEQACAGAAAVQABAXACAKICLAAQAAgPgIgKQgIgLgTgJQgQgIAEgkQACgbAKgdQA8g4Aog3AguAxQAjhGgFgT");
	this.shape_2.setTransform(11.6,-28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDFAFA").s().p("AmvEhQACgbgEgkQgFgwgNgdQgNgdgFg2QgDgoABgkIgeAAQgFgYAPgeQASgmACgcQADggAngrQAeghAmgbQAbgTBJgEQBLgEAoARQA2AXBGAJQBAAJAQgLQApgOAHgBQAwgGAsAfQAjAZAlADQAUACAcAAQAJABAVAIQAAgKAGgFQAIgHAQAIQAQAIgBAKQgBAHgJAEQAiARALAOQALAOgCANQgDAPAEAIQAEAHAgAJQAdAHAAARQAAARgQAPQgOAOgPAEIiWAAQgIAKg2AMQgoAJgwAHQgoA3g8A4QgKAdgCAbQgEAkAQAIQATAJAIALQAIAKAAAPIiLAAQgCgKgBgXQAAgVgCgGQgBgEgOgSQgMgPgDgSQgCgQANgrQAMglAMgYQgLARhSAEQhLADgzgJQgJArgNAoQgMAlgMAUQgNAYAMAKQAFAFAaAGQAcAHAFAPQAEAOgRAEg");
	this.shape_3.setTransform(11.6,-28.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#848484").ss(0.3,0,0,4).p("AEeiDIAAADQgCATgfAqQgmA1gEAIQgFAJgeAoQgQAWALAIQAIAGANABQALAAAIAIQAKAKgCALQAAAGgDADIhuAKIAejlICWgbAiAguQgWAogRAjQgXAxACAKQADALAUgBQAXgCAEAHQAKAPgKAFIhBAFQgjgCgXgIQgggLAKgTQAUgiAtiMIBuAFg");
	this.shape_4.setTransform(3.8,-16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0DDDD").s().p("Ag7hkICVgbQgCASgfAqQgmA1gEAIQgFAKgdAnQgQAWALAIQAIAGANABQAKAAAIAJQAKAJgCALQAAAGgDADIhtAKg");
	this.shape_5.setTransform(23.4,-16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0DDDD").s().p("AhABhQgggLALgSQATgjAuiMIBtAGIgUAjQgXAngRAjQgXAxADALQACAKAVgBQAWgBAFAGQAJAPgJAGIhAAEQgkgBgXgJg");
	this.shape_6.setTransform(-15.9,-14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAJQgGgNADgHQACgIAPgFQAJgDANAAQAPALgFAPQgGAOgcAOQgHgHgFgLg");
	this.shape_7.setTransform(48,-24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E0DDDD").ss(0.3,0,0,4).p("AgpAUQgDAQAMAKQAIAHANACIAxgeQAFgrAAgQQAAgMgNgFQgNgGgOAIQgkASgIAzg");
	this.shape_8.setTransform(33.7,-49.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAuQgMgKADgQQAIgzAkgSQAOgIANAGQANAFAAAMQAAAQgFArIgxAeQgNgCgIgHg");
	this.shape_9.setTransform(33.7,-49.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEAAQAAgOAEAAQACAAACAFQABAEAAAFQAAAPgFAAQgEAAAAgPg");
	this.shape_10.setTransform(43.5,-32.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AjMgmQgiAYhJAEQgmACgyAAQgQACgQAlQgQAmgHACQgPAEgPgSQgPgTAAgaQAAgTAaglQAOgUAegiIBQgPQAoguAUgdQAQgYAigTQAdgRAQAAQgHgLAFgGQAJgKAmgIQAtgJBOAZQBpAiAkAFQAZgDAPgBQAKgBAZAAQAOAAAUASQAUARAVAAQAUAAAagKQAagKAXAAIA2AUQAHgUAOgRQARgVANAIQAWANAAAdQAAAgggAIAgJAMQAagaANgQQAZgdAAgTQAEgMALgXAjMgmQAUgUASgZQAYggADgSAjMgmQAcAcA5ANQA0AMA6gDIgPDqIAPAoIByAAQADgGAAgHQAAgOgNgDQgFgBgTACQgKABgGgMQgGgMA0hpIA2hnIBugaIBLAaIAcASQAeARAMAAIAtAAQAQgFAOgKQAPgLAAgJQAAgHgKgWQgKgYAAgLQAAgJAFgJQAFgJAAgNQABgTAAgHQgCgKgJgTQgHgOgSgTACbAaQAcgaAYgjQAhguAFggAGejGIApAg");
	this.shape_11.setTransform(0,-27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDFAFA").s().p("AgJEeIgPgoIAPjqQg6ADg0gMQg4gNgdgcQgiAYhJAEQgmACgyAAQgPACgQAlQgRAmgHACQgOAEgQgSQgPgTAAgaQAAgTAaglQANgSAegkIABAAIBQgPQApguATgdQAQgYAigTQAegRAPAAQgGgLAFgGQAIgKAmgIQAugJBNAZQBpAiAkAFIAngEIAkgBQAOAAAUASQAUARAVAAQATAAAagKQAbgKAXAAIA2AUQAHgUANgRQARgVAOAIQAWANAAAdQgBAggfAIQASATAHAOQAJATABAKIAAAaQAAANgFAJQgFAJAAAJQAAALAKAYQAKAWAAAHQAAAJgPALQgOAKgQAFIgtAAQgNAAgdgRIgcgSIhLgaIhuAaIg2BnQg0BpAGAMQAGAMALgBQASgCAFABQANADAAAOQgBAHgCAGg");
	this.shape_12.setTransform(0,-27.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#848484").ss(0.3,0,0,4).p("AAhAJQgEgaAYiFIifAAQgVA1AmBhQAcBJAtBCQATAIAHABQAIABAoAAQASAAATACQAMAAAGgMQACgFgBgGQgBgLgKgDQgJgDgYABIgWACQgGg2gJgzg");
	this.shape_13.setTransform(21.1,-14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#848484").ss(0.3,0,0,4).p("AAgANQATgGAkghQAbgbAXgcIhpg8Ig2AeQg7BkgLAAIgUAAQgiATAJBkQADAeAfAEQAfAFAAgTQgBgXAAgNQABgVAKgIQAxglAtgNg");
	this.shape_14.setTransform(-24.8,-18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0DDDD").s().p("AA6CVQgoAAgIgBQgHgBgTgIQgthCgchJQgmhhAVg1ICfAAQgYCFAEAaQAJAzAGA2IAWgCQAYgBAJADQAKADABALQABAGgCAFQgGAMgMAAQgTgCgSAAg");
	this.shape_15.setTransform(21.1,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0DDDD").s().p("AhmCOQgfgFgDgeQgJhjAigUIAUAAQALAAA7hkIA2geIBpA8QgXAdgbAaQgkAigTAFQgtANgxAlQgKAIgBAWQAAAMABAXQAAAQgUAAIgLgBg");
	this.shape_16.setTransform(-24.9,-18.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAJQgIgFAHgJQAFgIALgHQADgDAEAAQAGAAAGAIQAKAPAAAYQgfgGgNgJg");
	this.shape_17.setTransform(55.3,-51.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAAQAAgOAEAAQACAAABAEQACAFAAAFQAAAPgFAAQgEAAAAgPg");
	this.shape_18.setTransform(47.8,-53.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E0DDDD").ss(0.3,0,0,4).p("AgpAoQADASAUACQAPACAQgHQgFgDAMgbQAJgVAOgXQgDgWgRgLQgPgLgTAEQgRAEgJAjQgIAfAEAdg");
	this.shape_19.setTransform(32.5,-62.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDFAFA").s().p("AgSA8QgUgCgDgSQgEgdAIgfQAJgjARgEQATgEAPALQARALADAWQgOAXgJAVQgMAbAFADQgNAGgNAAIgFgBg");
	this.shape_20.setTransform(32.5,-62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AAiBHQAigKAfgKQBXgeAUgUQASgEAZgBQAaAAAGAFQADADAFgVQAGgcAVgDQARgDA+gFQA2gIAHgTQAKgcgBgXQgBgVgIgIQgDgDgggEQgbgEgDgOQgEgbgEgPQgIgZgTgNQgLgHgbgCAkCBHQgWAbgoAeQghAZAAADQAAAIANAIQAKAGAMADQAIADAHAGQAKAIAAAIQAAAZhQAAQggAAgcglQgUgcgKgjQAPgOAOgSQASgZADgSQACgSgNglQgOgmAAgQQAAgiAfgsQAog4BKgpQA6ggBdAWQBFAPA8AjQALgLANgIQAUgLAUAAQAkAAAZAOQASAKAGgEQAOgJADgEQAGgJAHgXQADgOAfgJQAbgIAngDQAcgDAYADAEKkVQADgPAGgPQAIgTAIgCQAKgEAKAUQAIATgBAQAAiBHQA2gXANgvQAKgnAAgSQAAgOgFACAi3BbQgPAjAAAUQAAAKABAbQAAAYgGAJQgEAHgaAQQgZAQgFALQgHAOABAUQABARAFAJQAEAIAVgJQAXgJAHgPQAFgLAZgLQASgHAWgGQAZg1Afg3QAkhBAIgCQAfgIAdgIQAAgBABAAQABAAAAAAIAEgBQADgBADgBAAcBJQACgBADAAQAAgBABAAAi3BbQADgOAFgRQAGgVAGgIQAFgIAOgEQAKgDALAAAkCBHQA5AUASAAAjuhYQAqBTg+BM");
	this.shape_21.setTransform(11.2,-37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFAFA").s().p("AkIFGQgFgJgBgRQgBgUAHgOQAGgLAYgQQAagQAEgHQAHgJAAgYIgCglQAAgUAPgjQgSAAg5gUQgWAbgoAeQghAZAAADQAAAIANAIQAKAGAMADQAJADAHAGQAJAIAAAIQAAAZhQAAQggAAgbglQgUgcgLgjQAQgOANgSQATgZACgSQADgSgNglQgPgmAAgQQAAgiAggsQAng4BKgpQA6ggBeAWQBFAPA7AjQALgLANgIQAVgLATAAQAlAAAZAOQASAKAFgEQAOgJADgEQAGgJAHgXQAEgOAfgJQAbgIAmgDQADgPAGgPQAIgTAIgCQALgEAJAUQAJATgCAQQAcACAKAHQATANAIAZQAFAPADAbQADAOAcAEQAgAEACADQAJAIABAVQABAXgLAcQgHATg2AIIhPAIQgUADgHAcQgFAVgDgDQgGgFgaAAQgZABgSAEQgbAbiPAqQgSAIgYAGIgfAHIgBAAQgIACgkBBQgeA3gaA1QgVAGgSAHQgaALgFALQgHAPgWAJQgMAFgGAAQgGAAgCgEg");
	this.shape_22.setTransform(11.3,-37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#848484").ss(0.3,0,0,4).p("AFNicIjSD5QgLA8AGAAIAyAAQAUAZgFAKQgDAFgsABQgiABgngCQgQgTgOgfQgPglAAgcQAAgaAphBQAfgzAmgvgAlLhgQAKADARgDQAWgEAVgQQAVgQAJgZQAGgSgBgQIB4AjIiRCuQAKAWgCASAlLhgQgHAggCAhQgCArALAQQAUAeAJAIQARAQAYgEQAQgCACgSAlLhgQgGAgAjA0QAZAlAiAh");
	this.shape_23.setTransform(-5.4,-20.1,1,1,0,0,0,-0.5,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0DDDD").s().p("AhvCuQgRgTgNgfQgPglAAgcQAAgaAohBQAggzAmgvIDMgtIjSD5QgKA8AGAAIAxAAQAUAZgFAKQgDAFgrABIgSABIg3gCg");
	this.shape_24.setTransform(12.6,-18.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0DDDD").s().p("AhOB7QgJgJgUgdQgLgRACgrQACggAHggQAKADARgDQAWgFAVgPQAVgQAJgZQAGgTgBgQIB3AkIiQCuQAKAWgCASQgCARgQADIgJABQgSAAgOgNg");
	this.shape_25.setTransform(-27.4,-25.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZgEQgDgIAIgEQAGgDAJAAQAZAHAEADQAFAEgFAPQgFAKgPAAQgUAAgJgYg");
	this.shape_26.setTransform(41.7,-49.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E0DDDD").ss(0.3,0,0,4).p("AAIg9QAQgLAKAVQAHAPACAZQAAALgFAbQgGAbgEAEQgFAGgPABQgTADgUgKQgVgLATgvQARgtAYgQg");
	this.shape_27.setTransform(18.3,-65.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDFAFA").s().p("AgfA6QgVgLATgvQARgtAYgQQAQgLAKAVQAHAPACAZQAAALgFAbQgGAbgEAEQgFAGgPABIgIABQgPAAgQgIg");
	this.shape_28.setTransform(18.3,-65.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AijB5QgEAhAQA4QAOAtAOAaQAggHAZAAQAhABAAAQQAAAPgbAXQgPAMggAUQgXACgOABQgaACgIgFQgPgKAAgeQAAgGgwgvQgmglgsgoQgWgQgWgWQgegfgLgaQgRgrAPg2QAShBA7g+QAtgwBkgTQBKgNBHAFQAIgNAMgKQARgPARgCQATgDAYAGQASAFANAGQgBgBADgFQADgGAGgCQAGgCAKAAQAIAAABABQgGgTAOgXQALgRAQgKQAMgIAWgEQAagEAeADQAFgPALgKQANgPAQADQAQACAAATQgBANgIAQAD2lGIAUADQATAEANAGABWi3QAIAFAIAYQAGASADASIAACBQAYgYAYgTQAigaASAAQATAAADAFQACAFALAAQAOAAAKgEQAIgDADgDQA3AAAjgKQATgGAQghQAPgggFgJQgCgEgcgFQgbgFgDgLQgCgIAEgXQAEgXgGgQQgPgxgrgVAghBvQAkAkAiAdQAuAoANAAQAHAFAEAFQAFAHgGADIgVAKQgOALAAATIAAA3QAAAEALAEQAMAEACgHQAJgbApgiQAtgnAAAAQAKgPgKgoIhQhfIAAhLAghBvIAPgtQAEgLAAgkQAAgjgEgHAijB5QAdACAhgCQAsgCAYgIAijB5QACgLgYgoQgYgogTgTQgJgeAJgT");
	this.shape_29.setTransform(2.5,-36);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDFAFA").s().p("AiyFpQgPgKAAgeQAAgGgwgvQgmglgsgoQgWgQgWgWQgegfgLgaQgRgrAPg2QAShBA7g+QAtgwBkgTQBKgNBHAFQAIgNAMgKQARgPARgCQATgDAYAGQASAFAOAHQgDgCAEgGQAEgFAFgCQAGgCAJgBQAJAAABACQgGgTAPgXQALgQAPgLQAMgIAWgEQAagEAeADQAFgPALgKQANgPAQADQAQACAAATQgBANgIAQQArAVAPAxQAGAQgEAXQgEAXACAIQADALAbAFQAcAFACAEQAFAJgPAgQgQAhgTAGQgjAKg3AAQgDADgIADQgKAEgOAAQgLAAgCgFQgDgFgTAAQgSAAgiAaQgYATgYAYIAABLIBQBfQAKAogKAPIgtAnQgpAigJAbQgCAHgMgEQgLgEAAgEIAAg3QAAgTAOgLIAVgKQAGgDgFgHQgEgFgHgFQgNAAgugoQgigdgkgkQgYAIgsACQghACgdgCQgEAhAQA4QAOAtAOAaQAggHAZAAQAhABAAAQQAAAPgbAXQgPAMggAUIglADIgNAAQgPAAgGgDg");
	this.shape_30.setTransform(2.5,-36);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#848484").ss(0.3,0,0,4).p("ABUh3IAABBQgTAAgRAFQgXAHgGANQgFANgKAWQgHASADAGQADAIANAAQAMAAALgIQAIgFADgGQABgFgCgEQAaAHAZgBQAigCAKgSIAyhagAi0AFIAAhFICCB8IgOAZQgCACgBAQQgBAPgHACQgGADgMgDAi0AFIgPAKQgFAdApApQALAMAUAKQAUALAPACAi0AFQgIATAjAnQAZAeAjAb");
	this.shape_31.setTransform(-12.8,-14.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0DDDD").s().p("AhgBHQgDgGAHgSIAQgkQAFgMAYgHQARgFATAAIAAhBIBtAZIgyBZQgLATghACQgZABgZgHQACAEgCAFQgCAGgIAFQgLAIgNAAQgMAAgEgIg");
	this.shape_32.setTransform(-3.2,-18.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0DDDD").s().p("AAeBcQgPgCgUgLQgUgLgLgLQgpgpAGgcIAPgKIAAhGICBB8IgPAZQgBABgBARQgBAOgHADIgIABIgKgBg");
	this.shape_33.setTransform(-25.2,-11.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPAJQgLgSAEgIQADgGARgDQARgDAHAHQAKAUgZAdQgKAAgMgSg");
	this.shape_34.setTransform(40.8,-43.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEAAQAAgOAEAAQACAAACAEQABAFAAAFQAAAPgFAAQgEAAAAgPg");
	this.shape_35.setTransform(34,-50.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#E0DDDD").ss(0.3,0,0,4).p("AgnAvQADAQASAEQAOADAOgDQAIgBANglQANglgEgOQgEgQgPgOQgQgPgOAAQgOAAgKAuQgKArAEAZg");
	this.shape_36.setTransform(19.4,-62.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDFAFA").s().p("AgSBDQgSgEgDgQQgEgZAKgrQAKguAOAAQAOAAAQAPQAPAOAEAQQAEAOgNAlQgNAlgIABQgIABgHAAIgNgBg");
	this.shape_37.setTransform(19.4,-62.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AjwB8QgJAmgwA6QgYAegdAdQgGAGAEAJQACAFAKAKQAFAFATgDQAVgCAKAFQALAFgGAMQgEAKgLAIQgSAFhIgFQglgDgYgZQgTgUgFgWQAjgSAAiYQAAiwBphYQAnghBYgLQAwgGBQgFQAjgGAvgXQAsgVANAAQALAAAcAFQAbAFATAAQAcgVAfgNQAlgPAiAAQANgRAQgPQAVgTAKAAQARAAAJAfQAIAhgYAGADRgjQgTgxgTgqQgag4gLgIAjwB8QAdADAjgDQAvgEAdgQQAcgPA8gmQA0gcAiAGQAhAGAKACQg+gngVgIADRgjIC5BtQAAARAZAXQAVAUATAKQALAFABAKQABAIgDAHQgMAFgmAAQgTAAgFgGQgEgEADgFQgZgMgUgIQgNgGgLgKQgIgHgDgHQgjAAgkgEQgygGgYgKQgYgLgOgSQgKgOgCgMQgBgBgBgBAjwB8QAgh/gRgRAEXkrQAQAAATAEQASAEARALADRgjIBagKQAMAIANAHQARAKAIAAQARAAAZgEQAggFAGgGQAIgIAKgZQALgZgEgHQgBgDgagLQgXgKAAgLQAAgKAIgSQAHgRAAgKQAAgOgTgbQgWgfgdgS");
	this.shape_38.setTransform(-2.5,-35.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDFAFA").s().p("AmBFdQglgDgZgZQgSgUgFgWQAjgSAAiYQAAiwBphYQAmghBYgLQAwgGBRgFQAjgGAvgXQAsgVANAAQAKAAAcAFQAcAFATAAQAbgVAfgNQAlgPAjAAQANgRAQgPQAUgTALAAQARAAAIAfQAJAhgYAGQAcASAWAfQAUAbAAAOQAAAKgIARQgHASAAAKQAAALAXAKQAZALACADQADAHgKAZQgKAZgIAIQgHAGgfAFQgaAEgQAAQgIAAgRgKQgOgHgLgIIhaAKIC5BtQAAARAZAXQAUAUAUAKQAKAFACAKQABAIgDAHQgNAFglAAQgTAAgGgGQgEgEAEgFQgZgMgUgIQgOgGgKgKQgIgHgDgHQgjAAglgEQgygGgXgKQgYgLgOgSQgLgOgBgMIgCgBIgrgJQgjgGg0AcQg8AmgbAPQgeAQguAEQgjADgdgDQgKAmgvA6QgYAegdAdQgHAGAEAJQADAFAKAKQAFAFATgDQAVgCAKAFQAKAFgFAMQgFAKgKAIQgJACgXAAQgWAAgkgCg");
	this.shape_39.setTransform(-2.4,-35.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#848484").ss(0.3,0,0,4).p("ACkgBQgHgTgDgLQgjgKhQgoQgKgFgTgjQgNgagMgdIESBBIAKCBQAUAPAFAPQADAKgIADQgHACgXAAAknhHICRDRQgDAFgBAIQgBAJAFAIQAHAKAwABQAZABAegCQAKAAATgMQAUgNAAgKQAAgIgJgEQgGgDgJAAQgKAEgLABQgQABgIgGQgRgLgIgJQgFhHgJg7QgMhRgOgIQgNgIg9ARQgtAMgzATgACkgBQAFAMAFAHQAKAPASANQAWARAUAAIAPAAACkgBQAhAJAbAQQAjAVAAAS");
	this.shape_40.setTransform(1.5,-17.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E0DDDD").s().p("ABpB4QgUAAgXgRQgRgNgKgPQgFgHgFgOQgIgTgCgKQgigKhQgnQgLgFgSgjQgPgagLgdIESBBIAKCBQATAPAGAPQADAJgJADQgHADgWAAg");
	this.shape_41.setTransform(15.5,-23.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E0DDDD").s().p("AAvCSQgvgBgHgJQgFgIABgKQABgHADgFIiRjRQA0gTAsgMQA9gRAMAIQAOAIAMBRQAJA7AGBHQAHAJARALQAJAFAPgBQAMgBAJgDQAJAAAHADQAJAEAAAIQAAAKgUANQgUAMgJAAIgjABIgVgBg");
	this.shape_42.setTransform(-12.8,-14.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgMAKQgMgQAEgIQADgGAIgDQAIgCAGABQARAHAAATQAAATgNAEIgDAAQgIAAgKgPg");
	this.shape_43.setTransform(38.7,-43.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGAAQAAgOAGAAQADAAACAFQACAEABAFQgBAHgCAEQgCAEgDAAQgGAAAAgPg");
	this.shape_44.setTransform(31.9,-47.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#E0DDDD").ss(0.3,0,0,4).p("AAABEQAKAAANgXQAKgRAGgUQAFgKgBgQQAAgPgEgIQgEgKgKgIQgNgLgMAEQgPADgQAxQgQAvAHAPQAHAOAKADQAGADARAAg");
	this.shape_45.setTransform(16.2,-60.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDFAFA").s().p("AgXBBQgKgDgHgOQgHgPAQgvQAQgxAPgDQAMgEANALQAKAIAEAKQAEAIAAAPQABAQgFAKQgGAUgKARQgNAXgKAAQgRAAgGgDg");
	this.shape_46.setTransform(16.2,-60.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AEUADQAGgjAKgFQAFgCAfAIQAjAJAJAAQAOAAAZgKQAWgLAJgJQAJgJADgLQAFgQgHgOQgFgJgVgGQgTgEAAgLQAAgEAEgiQAEgbgDgPQgCgKgSgQQgRgQgXgNAEfkkQANgPAPgNQATgRAIAAQALAAAJAKQAKAHAAAIQAAAKgUAjAkSB7QgdAcg5ArQhLA6gHAGIAAAyQAUgFAPAFQAIACgCALQgBAIgFAJIhLAAQgcgPgVgyQgUgvAIgNQAHgKAHgBQAEAAANABQAJAAAfg2QAQgcAYgrQAHgNAJglQALguANgiQASgvA/guQA9gtA6gMQAsgJA5AJQBJAKAGAAQAKAAAVgUQAXgWAZgDQAXgCAYAGQARAFALAGQAQgZApgUQAugZAqAAQAYAAApAZACEisQAQAAAXAUQAQANAPARQATAiA3BbAIUB2QgPgFgyAUQg3gbg1gdQhBgkgCgIIgQgeACOA1QAQAXATAXQAYAeALAJQAMAJAyAKQAZAFAhAGQAGABAnAVQAnATALAEQARAEAXgBAkSB7QAyABA1gBQBDgCAWgIQADgBBGghQAxgXAbgDQArgFAgAFQg0gygXAAAIUB2QgTACgVAlQgPAagKAhAIUB2QALAEADARQACASgLALQgIAIgRANQgQAOgEAFQgGAFgTADAjoBEQgLAYgfAf");
	this.shape_47.setTransform(-5,-33.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDFAFA").s().p("AniFRQgcgOgVgyQgUgvAIgOQAHgJAHgBIARAAQAJABAfg2IAohIQAHgMAJglQALgvANggQASgwA/guQA9gtA6gMQAsgJA5AJQBJAKAGAAQAKABAVgVQAXgWAZgDQAYgCAXAGQARAEALAIQAQgaApgUQAugZAqAAQANgOAPgOQATgQAIgBQALAAAJAJQAKAJAAAIQAAAKgUAiQAXANARAQQASAQACAKQADAPgEAcIgEAmQAAAKATAFQAVAFAFAJQAHAOgFAPQgDAMgJAKQgJAIgWALQgZALgOgBQgJAAgjgJQgfgIgFACQgKAFgGAjIAQAdQACAIBBAkQA1AdA3AbQAygUAPAGQALADADASQACARgLALIgZAXIgUASQgGAFgTADQgXABgRgFQgLgCgngUQgngUgGgDIg6gLQgygJgMgJQgLgJgYgdQgTgZgQgXQgggEgrAEQgbAEgxAXIhJAhQgWAJhDACQg1ABgygCQgdAdg5ArIhSA/IAAAzQAUgGAPAGQAIACgCALQgBAIgFAIg");
	this.shape_48.setTransform(-5,-33.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#C4C4C4").ss(0.3,0,0,4).p("AAGgWQgSgKg4g8IgKBVICaBoQADgRAAgTQAAgagIgNQgKgQgVgLQgYgMgKgFg");
	this.shape_49.setTransform(28,-28.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#C4C4C4").ss(0.3,0,0,4).p("AAyiBIiaAFQgFAXAZBVQAaBXgBAJQAAABgEAbQgCAKAGAFQAWAIA4gBQA2gCAggIQAAgLgDgJQgEgNgIgCQgGgCgKADQgMAEgHAAQgRgHgMgJQgQgLAFgIQAGgIAMhDQAKg3AHg2g");
	this.shape_50.setTransform(-23.4,-12.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E0DDDD").s().p("AhOgJIAKhVQA4A8ASAKIAiARQAVALAKAQQAIAOAAAZQAAATgDARg");
	this.shape_51.setTransform(28,-28.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E0DDDD").s().p("Ag7B7QgGgFACgKIAEgcQABgJgahXQgZhVAFgXICagFQgHA2gKA3QgMBDgGAIQgFAIAQALQANAJAQAHQAHAAAMgEQAKgDAGACQAIACAEANQADAJAAALQggAIg2ACIgRAAQgqAAgTgHg");
	this.shape_52.setTransform(-23.4,-12.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgBAcQgKgDgHgUQgHgSAEgIQADgFAHgBQAGgBAEACQAGADAJAHQAJAHAAADQAAAIgIAOQgHANgHAAIgCgBg");
	this.shape_53.setTransform(47,-35.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHAAQABgOAGAAQADAAACAEQADAFAAAFQAAAGgDAFQgCAEgDAAQgGAAgBgPg");
	this.shape_54.setTransform(40.1,-41.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#E0DDDD").ss(0.3,0,0,4).p("AAqgVQAFAKgoBFQgPAHgKgBQgEgBgKgFQgMgGADg0QAEg2AUgHQATgGAUATQANAMAHAPg");
	this.shape_55.setTransform(25.1,-55.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FDFAFA").s().p("AgSBAQgEgBgKgFQgMgGADg0QAEg2AUgHQATgGAUATQANAMAHAPQAFAKgoBFQgNAGgJAAIgDAAg");
	this.shape_56.setTransform(25.1,-55.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AGIgbQALAAAJAIQAHAGADAGQAmAYArgKQAegGAYgZQAUgXgEgKQgBgBgcgUQgYgRADgMQABgEAIgXQAGgQAAgMQAAgMgVgcQgXgegagTAGXkMQALgRAMgNQARgTALAAQAOAAAKAMQAKAKgEAIIgUAkAGXkMQANgBANACQAPAEAUAMACVAbQAJAKACARQABAOgEAJQgEANBDBmQBGBpAbAKQAZAKAlABQAUABAXgCQAOAAARgJQASgKgDgLQgEgLgegHQgdgIgIALQgGAKgSgSQgOgOgHgNQgFgLgtiaQABgTgBgaQBIg2ASAAQgggFgVghQgRgYgFgcAjoAMQgTAOhoApQhwAsgUALQgaAPgFAeQgGAkgDAEQgJANgIAAQgIgDgFAAQgHAAgCgIQgCgGgEgkQgDgbALgfQAKgVgDAEQgFAJAJgbQAJgaAHgLQAFgFAYgDQAfgEAUgIQARgGA2hJQAdgoAyhGQAVgaAmgbQAagSAZgOQgFgDAEgFQAFgGAVgGQAfgHA6ADQA7ADAWALQAPAIA0AIQAoAGAlADQAkgPAiAAQASAAAeAMQAbALAKgDQAJgCAkgOQAmgOAbgBACOjAQAGgMAMgLQAQgOAVgDQAagDAYAcQANAPARAjQAJASAIA6QAGA1ACA3AjoAMQATgMAtgqQAlgjAdgeAjoAMQAQAQAgAKQAsAPA1gGQAzgFBMgNQA/gMATAAQARAAAKAKQglhAAFgK");
	this.shape_57.setTransform(-7.9,-30.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FDFAFA").s().p("AF7E+QglgBgZgKQgbgKhGhpQhDhmAEgNQAEgJgBgOQgCgRgJgKQgKgKgRAAQgTAAg/AMQhMANgzAFQg1AGgsgPQgggKgQgQQgTAOhoApQhwAsgUALQgaAPgFAeQgGAkgDAEQgJANgIAAQgIgDgFAAQgHAAgCgIIgGgqQgCgYAIgbQAFgPAFgKIgBABQgFAJAJgbQAJgaAHgLQAFgFAYgDQAfgEAUgIQARgGA2hJIBPhuQAVgaAmgbQAagSAZgOQgFgDAEgFQAFgGAVgGQAfgHA6ADQA7ADAWALQAPAIA0AIQAoAGAlADQAkgPAiAAQASAAAeAMQAbALAKgDQAJgCAkgOQAmgOAbgBQALgRAMgNQARgTALAAQAOAAAKAMQAKAKgEAIIgUAkQAaATAXAeQAVAcAAAMQAAAMgGAQIgJAbQgDAMAYARIAdAVQAEAKgUAXQgYAZgeAGQgrAKgmgYQgDgGgHgGQgJgIgLAAQgSAAhIA2QABAagBATQAtCaAFALQAHANAOAOQASASAGgKQAIgLAdAIQAeAHAEALQADALgSAKQgRAJgOAAIgbABIgQAAg");
	this.shape_58.setTransform(-7.9,-30.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#848484").ss(0.3,0,0,4).p("ADri1QAVBWAOAOICMCLQAIACAKABQAMAAAFgDQADgBANgNQALgLAIAAQAIAAAIAKQAFAHAEAIIhaBBQgjALgPgLQgCgBgXgSQgQgNgJgDQgkgMg+ggQhcgvgZgmQgVgfA3gvQAoghA9gdgAn5A6QABgJAFgGQALgLAKgCQAKgDAEgEQAAgWA3iTQAygKAoADQA3ADAAAdQAAAdgzBJQgmA2guA1IAKA8QAagJAOAJQAIAGgHAKQgGAIgKAGIhBAAAn5A6QBMBqAAAOAn5A6QgDAbARAoQASApAYAMIAUAA");
	this.shape_59.setTransform(6.8,-17.8,1,1,0,0,0,0,-0.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E0DDDD").s().p("ABCCWIgZgUQgQgMgJgDQgjgMg/ghQhbgvgaglQgVggA3guQAogiA9gcQAVBWAOAOICMCLQAHACAKAAQAMAAAGgCQACgBANgOQALgKAJAAQAHAAAIAJQAGAHAEAJIhaBBQgSAFgMAAQgNAAgHgFg");
	this.shape_60.setTransform(36.8,-20.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E0DDDD").s().p("Ag/CnQgYgMgSgqQgRgnADgbQABgKAFgFQALgLAKgDQAKgCAEgEQAAgVA3iUQAxgLAoADQA3AEAAAdQAAAdgzBJQgmA1gtA2IAKA8QAZgJAOAJQAIAFgHAKQgGAIgKAHg");
	this.shape_61.setTransform(-31.8,-16.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CFCBCB").ss(0.3,0,0,4).p("AAwgCQgBgLgPgHQgMgGgOgCQgTAGgOAHQgVAKABAFQACAHAGAHQAEAEAMAIQAKAIAdgMQAggLAAgNg");
	this.shape_62.setTransform(32.6,-32.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EDE8E8").s().p("AgXAaIgQgMQgGgHgCgHQgBgFAVgKQAOgHATgGQAOACAMAGQAPAHABALQAAANggALQgRAHgLAAQgHAAgEgDg");
	this.shape_63.setTransform(32.6,-32.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.3,0,0,4).p("AATgKQgFgFgPAAQgGgBgGAEQgGAEgBAFQAAAGAEAGQAFAHAJAAQALAAAGgGQAEgFACgFQABgHgDgDg");
	this.shape_64.setTransform(38.2,-15.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgQAJQgEgGAAgGQABgFAGgEQAGgEAGABQAPAAAFAFQADADgBAHQgCAFgEAFQgGAGgLAAQgJAAgFgHg");
	this.shape_65.setTransform(38.2,-15.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgDADQgEAAgEgCQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgBAFACIAJABIAKgBQAGgBgBABQABABgIABIgIACIgDAAg");
	this.shape_66.setTransform(36,-25.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgOgDQAAgDAHABIAKACIAJgCQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABQgBADgGADQgGADgFAAQgLgBAAgJg");
	this.shape_67.setTransform(35.1,-23);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#D0CFCF").ss(0.5,0,0,4).p("AFBhsQAuALADAJQABADgCADQgEAEgBACQgFAJgJgGACZASQAIgEATAEQAPAEAOAHIAVBEQARASALAHQADACARAIQAQAHAggDQAkgDgCgRQgBgMgIgOQgIgNAAgQQAAgOAGgUQAHgZADgZQACgTgBgHQgBgMgJgMAlNAyQAEAngTgKQgUgNgBgyQgBg5AahjQAUhKBOgwQA1ghBCgPQAcABAhAGQAnAGARAKQBMAtAJABQAtAAALACQAYADAQANQAJAIAQAKQAOANAOAaQAsA1AUgFQAPgEASAOQANAMAQAXAgKAaIAUhDAgKAaIgSBcIBKCoQAHADAXAKQAWAKAKAAQAFAAAJgOQAJgNAAgDQAAgGgIgQQgCgEgHAAQgHAAgDAEQgEABgKgDQgLgEgBAAQgNg6gCgPQgJg6AMgQQAKgPARgHQAYgMAHgFQAKgHAKgQQAHgOACgKQgLgUABhIAlRAdQADAMABAJQA2BiAGAKQAGAHADBOQAlAzAcANQAQAIAWgLQAQgJANgPIgPgjQgKAHgVgIQgKgEgCgHQgBgGAEgEQAvg5AKgiQAFgPgchnQAdAOAoAFQAxAHAZgOAisgtQAHAUAMAn");
	this.shape_68.setTransform(4.1,-27.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDE8E8").s().p("AjHEzQgcgNglgzQgDhOgGgHQgGgKg2hiQAEAngTgKQgUgNgBgyQgBg5AahjQAUhKBOgwQA1ghBCgPQAcABAhAGQAnAGARAKQBMAtAJABQAtAAALACQAYADAQANQAJAIAQAKQAOANAOAaQAsA1AUgFQAPgEASAOQAuALADAJQABADgCADIgFAGQgFAJgJgGQAIAMACAMQABAIgCASQgDAZgHAZQgGAUAAAOQAAAQAIANQAIAOABAMQACARgkADQggADgQgHIgUgKQgLgHgRgSIgVhEQgOgHgPgEQgTgEgIAEQgCAKgHAOQgKAQgKAHQgHAFgYAMQgRAHgKAPQgMAQAJA6QACAPANA6IAMAEQAKADAEgBQADgEAHAAQAHAAACAEQAIAQAAAGQAAADgJANQgJAOgFAAQgKAAgWgKIgegNIhKioIAShcQgZAOgxgHQgogFgdgOQAcBngFAPQgKAigvA5QgEAEABAGQACAHAKAEQAVAIAKgHIAPAjQgNAPgQAJQgNAHgLAAQgIAAgGgEg");
	this.shape_69.setTransform(4.1,-27.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#848484").ss(0.3,0,0,4).p("AgOBXIgnhDQgngfgKgcQgFgQAtgQQAhgLAtgIQAsBBADASQABAIgaASQgaASABAIQACAIATgCQAOgDARgGIAJgPQASADAGAFQAIAGgDAZQgFAHgHAHQgKAJgJACQgJABgegBQgagBgVgDg");
	this.shape_70.setTransform(-12.8,-16.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#848484").ss(0.3,0,0,4).p("Ag9AKQgOgBgKhFIAtgrIAtA+QARADAXAIQAaAKAHAHQAHAHABAPQABAHgCASQgCAVgGAUQgIAZgLAFQgNAFgEgMQgBgEgDgeQgCgRACgGQACgFAGgCQADgJgVAAg");
	this.shape_71.setTransform(14.6,-20);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CFCDCD").s().p("AAhBbQgagBgVgDIgnhDQgngfgKgcQgFgQAtgQQAhgLAtgIQAsBBADASQABAIgaASQgaASABAIQACAIATgCQAOgDARgGIAJgPQASADAGAFQAIAGgDAZQgFAHgHAHQgKAJgJACIgOAAIgZAAg");
	this.shape_72.setTransform(-12.8,-16.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CFCDCD").s().p("AApBgQgBgEgDgeQgCgRACgGQACgFAGgCQADgJgVAAIhYgOQgOgBgKhFIAtgrIAtA9QARAEAXAIQAaAJAHAHQAHAHABAPQABAHgCASQgCAWgGATQgIAagLAEIgHACQgHAAgDgJg");
	this.shape_73.setTransform(14.6,-19.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.5,0,0,4).p("AgNgJIAcAS");
	this.shape_74.setTransform(36.9,-22.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.5,0,0,4).p("AAFgMIgJAa");
	this.shape_75.setTransform(36.7,-22.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAFQgHgEAMgJIASgQQAFAAAEAFIAGAKQADAGgDALQgDAMgGAFg");
	this.shape_76.setTransform(45,-17.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AEYg0QgKgGgNgFQgRgHgLAAQgPABgMAWQgLAVARAAQAYgBAxgNgAEahgQgLgCgfAIQgfAHgFgBQgSgPgzgZQgzgZgKgFQgmgUgZgOQgwgbgXgGQgggJhCgHQhMgIgiAHQhFANg0BOQgGAKgMAgQgOAjgCADQgEAJAAAZQAIAeALAWQAFAMAKAWQAKASAJAGQATATA1AFQAigEABgBQAYgDAHgFQguAlAEAPQADAKAGAHQADAFAIAHIB4BJICVAAQAHAAADgJQAFgLgKgTQAAgEgPgKQgQgKgHAAQg1gFgYAFQgdgLAAgcQAAgFANgUQANgVADgWQAKglgJgiQgNgsgugJQghgMghAMQgdAKgGARAChgLQAQAygtAmADRA6QgJgXAEgKAFdhGQAXAUATAnQAUAGASAJQAVAMADAJQADAMgCANQgDAPgIADQgHAMg+AAQhGgDgWAAQgXAAgXgHQgRgFgKgHQgHALhGAIAEahgQAKgKAdABQAcABAFAIQACADgGAKQgGAJAFAEAEahgQAPABA0AZAAGBcIAAA6IBvATIAsAwIAwAAQAGgCAfgDQAbgFgBgJQgBgNgDgFQgDgHgHgEIgygTIgcgnIgwgiAAGBcQAAgdACgNQACgWAZgnAhjBIIBpAUAmnhDQgLABgKALQgMANADATQACASARAMQAMAJAOAD");
	this.shape_77.setTransform(1.1,-20.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FDFAFA").s().p("AiKDyIh4hJQgIgHgDgFQgGgHgDgKQgEgRAugjQgHAFgaAEIghAEQg1gFgTgTQgJgGgKgSIgPgiQgOgDgMgJQgRgMgCgSQgDgTAMgNQAKgLALgBIAQgmQAMggAGgKQA0hOBFgNQAigHBMAIQBCAHAgAJQAXAGAwAbIA/AiIA9AeQAzAZASAPQAFABAfgHQAfgIALACQAKgKAdABQAcABAFAIQACADgGAKQgGAJAFAEQAXAUATAnQAUAGASAJQAVAMADAJQADAMgCANQgDAPgIADQgHAMg+AAIhcgDQgXAAgXgHQgRgFgKgHQgHALhGAIIAwAiIAcAnIAyATQAHAEADAHQADAFABANQABAJgbAFQgfADgGACIgwAAIgsgwIhvgTIAAg6IhpgUQgDAWgNAVQgNAUAAAFQAAAcAdALQAYgFA1AFQAHAAAQAKQAPAKAAAEQAKATgFALQgDAJgHAAg");
	this.shape_78.setTransform(1.1,-20.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#848484").ss(0.3,0,0,4).p("AgOBYIgnhFQgOgKgNgOQgRgTgGgQQgFgQAugQQAhgLAtgIQAtBEADAQQABAIgaASQgaASABAIQABAJATgDQAOgCARgHIAKgPQASADAGAGQAHAFgCAZQgPAWgQADQgRADhGgGg");
	this.shape_79.setTransform(-9.1,-15.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#848484").ss(0.3,0,0,4).p("AhQAVQgIgBgHgZQgGgVgDgYIAtgrIAvA+QARAEAWAIQAaAJAIAHQAYAWgCARQgBAKAQAYQANATgIADQgPAHgQgEQgPgEgMgNQgIgJgDgLQgCgJgFgEQgHgGgHgCg");
	this.shape_80.setTransform(16.6,-17.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CFCDCD").s().p("AgOBYIgnhFQgOgKgNgOQgRgTgGgQQgFgQAugQQAhgLAtgIQAtBEADAQQABAIgaASQgaASABAIQABAJATgDQAOgCARgHIAKgPQASADAGAGQAHAFgCAZQgPAWgQADIgRABQgYAAgugEg");
	this.shape_81.setTransform(-9.1,-15.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CFCDCD").s().p("ABIBdQgQgEgMgNQgIgJgCgKQgDgKgFgEQgHgFgGgCIhegQQgHgBgIgaQgGgVgDgXIAugrIAuA+QARAEAWAHQAbAKAHAHQAYAWgBARQgBAKAPAXQANATgIAEQgIAEgKAAIgMgCg");
	this.shape_82.setTransform(16.6,-17.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.5,0,0,4).p("AgOgJIAdAT");
	this.shape_83.setTransform(31.6,-9.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(0.5,0,0,4).p("AAGgNIgLAb");
	this.shape_84.setTransform(31.4,-9.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgTAGQgHgEAMgLIATgPQAGgBADAFIAGALQAEAGgDALQgDANgHAEIgegTg");
	this.shape_85.setTransform(42,-4.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AEaggQAXAEASAAQAMgBAQAOAEaggQARgLARgGQAXgIALAHQALAIgCALQgBAJgHAHAEaggQgdgGgXgHQgggaghgWQgsgfgTgFQgTgGg8gBQgrgBguACQgYgOhBgTQhQgXghAHQgZAEgwA2QgoAugmA5QgNAUgNAXQgNABgJAIQgMAKACATQADATARANQAMAKAPADAD3gGQgLgGgNgGQgSgGgLAAQgPABgMAWQgNAVASAAQAWgBA2gOgAFZCOQAFgIgEgHQgFgIgVAAQgSABg/gNQg+gNgFAAQgcgLgHgXQgFgegJgUAglB3QAAgLARgpQAQgnALgSAglB3IAnAXQAEAGABAIAknCcQASAPAZAMQAoAABxADQBfACAGgFQAKgHgFgUAFZCOQBtAAALgEQAJgDADgPQACgNgDgNQgDgJgbgMQgVgKgXgHQgWgugdgZAFZCOQAEAHgEAGQgFAIgTAAIk6gHAglB3IhfAXQAKgbADgdQAEglgJgTQgVgnghgcQglgeglgCAkGBTIgoAtQgQAIAXAUIheAAQgVgKgUgrAm9AUQgHAPgBAHQAHAdAQAg");
	this.shape_86.setTransform(-4.7,-15.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FDFAFA").s().p("AhjC6QhxgDgoAAQgZgMgSgPIheAAQgVgKgUgrQgPgDgMgKQgRgNgDgTQgCgTAMgKQAJgIANgBQANgXANgUQAmg5AoguQAwg2AZgEQAhgHBQAXQBBATAYAOQAugCArABQA8ABATAGQATAFAsAfQAhAWAgAaQAXAHAdAGQARgLARgGQAXgIALAHQALAIgCALQgBAJgHAHQAdAZAWAuQAXAHAVAKQAbAMADAJQADANgCANQgDAPgJADQgLAEhtAAQAEAHgEAGQgFAIgTAAIk6gHQAFAUgKAHQgEAEg3AAIgqgBg");
	this.shape_87.setTransform(-4.7,-15.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#E0DDDD").ss(0.5,0,0,4).p("AEaggQARgLARgGQAXgIALAHQALAIgCALQgBAJgHAHAEaggQAXAEASAAQAMgBAQAOAEaggQgdgGgXgHQgggaghgWQgsgfgTgFQgTgGg8gBQgrgBguACQgYgOhBgTQhQgXghAHQgZAEgwA2QgoAugmA5QgNAUgNAXQgNABgJAIQgMAKACATQADATARANQAMAKAPADAD3gGQgLgGgNgGQgSgGgLAAQgPABgMAWQgNAVASAAQAWgBA2gOgAknCcQASAPAZAMQAoAABxADQBfACAGgFQAKgHgFgUAglB3IAnAXQAEAGABAIAglB3QAAgLARgpQAQgnALgSAFZCOQAFgIgEgHQgFgIgVAAQgSABg/gNQg+gNgFAAQgcgLgHgXQgFgegJgUAFZCOQBtAAALgEQAJgDADgPQACgNgDgNQgDgJgbgMQgVgKgXgHQgWgugdgZAFZCOQAEAHgEAGQgFAIgTAAIk6gHAglB3IhfAXQAKgbADgdQAEglgJgTQgVgnghgcQglgeglgCAkGBTIgoAtQgQAIAXAUIheAAQgVgKgUgrAm9AUQgHAPgBAHQAHAdAQAg");
	this.shape_88.setTransform(-4.7,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:51.5,y:-39.7}}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape,p:{x:34.7,y:-53.9}},{t:this.shape_26}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},2).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},2).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},2).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},3).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},3).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},2).to({state:[{t:this.shape_87},{t:this.shape_88},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},58).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.9,-58.6,104,59.9);
p.frameBounds = [rect, new cjs.Rectangle(-40.2,-58.6,104.3,59.9), new cjs.Rectangle(-51,-57.3,102,59.3), new cjs.Rectangle(-51,-57.3,102.1,59.3), rect=new cjs.Rectangle(-40.1,-70.9,98.9,71.2), rect, rect=new cjs.Rectangle(-40.3,-73.5,85.5,74.9), rect, rect=new cjs.Rectangle(-50.8,-71.6,96.5,73.1), rect, rect=new cjs.Rectangle(-60.6,-68.7,111.3,70.1), rect, rect=new cjs.Rectangle(-66.2,-63.3,124.6,65.6), rect, rect, rect=new cjs.Rectangle(-33.9,-59.6,76.1,64.2), rect, rect, new cjs.Rectangle(-45.4,-45.6,93.3,50.4), new cjs.Rectangle(-45.4,-45.6,93.6,50.4), rect=new cjs.Rectangle(-53.5,-35,99.3,39.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.thermometre_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"temp0":0,"temp1":1,"temp2":2,"temp3":3,"temp4":4,"temp5":5,"temp6":6,"temp7":7,"temp8":8,"temp9":9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// thermometre
	this.instance = new lib.temperature_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(84.1,14.5,1,1,0,0,0,84.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,168.3,29.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.horloge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// horloge
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(8.4,8,1,1,0,0,0,8.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,16.9,16);
p.frameBounds = [rect];


(lib.afficheurVie_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// coeur05
	this.coeur5 = new lib.vie_mc();
	this.coeur5.name = "coeur5";
	this.coeur5.parent = this;
	this.coeur5.setTransform(115.9,0.2);

	this.timeline.addTween(cjs.Tween.get(this.coeur5).wait(1));

	// coeur04
	this.coeur4 = new lib.vie_mc();
	this.coeur4.name = "coeur4";
	this.coeur4.parent = this;
	this.coeur4.setTransform(100,11.4,1,1,0,0,0,11.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.coeur4).wait(1));

	// coeur03
	this.coeur3 = new lib.vie_mc();
	this.coeur3.name = "coeur3";
	this.coeur3.parent = this;
	this.coeur3.setTransform(70,11.4,1,1,0,0,0,11.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.coeur3).wait(1));

	// coeur02
	this.coeur2 = new lib.vie_mc();
	this.coeur2.name = "coeur2";
	this.coeur2.parent = this;
	this.coeur2.setTransform(41,11.4,1,1,0,0,0,11.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.coeur2).wait(1));

	// coeur01
	this.coeur1 = new lib.vie_mc();
	this.coeur1.name = "coeur1";
	this.coeur1.parent = this;
	this.coeur1.setTransform(11.8,11.4,1,1,0,0,0,11.8,11.2);

	this.timeline.addTween(cjs.Tween.get(this.coeur1).wait(1));

}).prototype = getMCSymbolPrototype(lib.afficheurVie_mc, rect = new cjs.Rectangle(0,0.2,139.7,22.4), [rect]);


(lib.afficheur_projectile_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"niveau1":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// texte
	this.nbProjectile = new cjs.Text("", "bold 20px 'Open Sans'", "#FFFFFF");
	this.nbProjectile.name = "nbProjectile";
	this.nbProjectile.lineHeight = 27;
	this.nbProjectile.lineWidth = 36;
	this.nbProjectile.parent = this;
	this.nbProjectile.setTransform(31.3,10.5);

	this.timeline.addTween(cjs.Tween.get(this.nbProjectile).wait(1));

	// projectile
	this.instance = new lib.projectile("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(14.7,13.2,1,1,0,0,0,14.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.afficheur_projectile_mc, rect = new cjs.Rectangle(0,0,69.5,39.8), [rect]);


(lib.ecran_victoire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// titre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ArFAAIWLAA");
	this.shape.setTransform(383,329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ArFAAIWLAA");
	this.shape_1.setTransform(383,285);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApJiJIANAAIBvD4IBuj4IANAAIh8ETgAArB9QgUgLgLgUQgLgVAAgXQAAgXALgUQALgTAUgLQATgMAZAAQAXAAAUAMQAUAKALAUQALAUAAAXQAAAYgLAUQgLAUgTAMQgTAMgZAAQgZgBgTgMgAAxgOQgRALgKAQQgJARAAAVQAAAVAJARQALASAQAKQASALAUAAQAVAAAQgLQARgKAKgSQAJgRAAgWQAAgUgJgRQgKgRgRgKQgRgLgUAAQgVAAgRALgAjYB9QgUgLgLgUQgMgSABgaQgBgXAMgSQALgTAUgLQAUgLAYAAQAWgBANAHQAPAHANANIAAATQgNgRgOgJQgNgJgXAAQgTAAgSAKQgSALgJAPQgLASAAATQAAAXAKARQAKAQARAKQASAKATAAQAnAAAZglIAAAUQgNAOgQAGQgPAHgUAAQgXAAgUgMgAGlB8QgSgLgNgUQgMgVAAgWQAAgXAMgUQAMgTATgKQAUgLAZAAQAlAAAaAeIhwBuQALAKALAEQAMAFAOAAQASAAARgKQARgJALgSIAAATQgNAPgPAHQgQAGgUAAQgXAAgUgMgAGrgNQgRAJgKAQQgKAQAAAVQAAAfAUAVIBphoQgKgKgNgFQgMgFgPAAQgVAAgRAKgAI0CDQgDgDAAgGQAAgFADgDQAEgEAFAAQAGAAADAEQAEADAAAFQAAAGgEADQgDAEgGAAQgFAAgEgEgAhAB2QgRgQAAgdIAAinIAMAAIAABAIAxAAIAAALIgxAAIAABcQAAAZAOANQAOANAWAAIAAAKQgaAAgTgQgAEaCEIAAiiIALAAIAAAlQAIgRANgKQAPgKARAAQAKABAMAEIAAANQgJgHgOgBQgNABgMAHQgMAIgHAMQgIAOAAAPIAABfgADYCEIAAiiIAMAAIAACigAk7CEIAAiiIAMAAIAACigAI4BgIAAjpIAMAAIAADpgADVhGQgEgEABgFQgBgFAEgDQAEgEAFAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEADgFAAQgFAAgEgDgAk+hGQgDgFAAgEQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(380.6,307.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// ours
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C7C2B5").s().p("AgSgFQgBgOAUADQAaADgMAPQgMAQgLAAQgKgOAAgJg");
	this.shape_3.setTransform(543.2,285.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C7C2B5").s().p("AgVARQgCgOAGgJQAHgOASADQAZADgSATQgNAOgNAAQgFAAgFgCg");
	this.shape_4.setTransform(583.5,285.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#886B31","rgba(89,57,26,0.988)"],[0,1],0,7.6,0,-4.4).s().p("AgcArQgQgKgEgMQgGgRAHgXQAIgeAagEQAUgDAVAUQAOAOAJATIgtA5QgRgBgRgKg");
	this.shape_5.setTransform(545.7,285.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#886B31","rgba(89,57,26,0.988)"],[0,1],0,5.3,0,-6.7).s().p("AhOArQgHgiAOgcQASgoAygHQAfAAAaAcQASAUAJAZQgRAVgVARQgcAWgSABQghAAgqgZg");
	this.shape_6.setTransform(586.2,288.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,0,0,4).p("AC2iIQgHgiAOgdQASgnAygIQAgAAAaAcQASAVAJAaQgRAUgVARQgcAXgTAAQghAAgqgZgAhcjOQgJgUgOgOQgVgTgVADQgaADgIAfQgHAXAGASQAEALAQAKQARAKASACgAjoCeQAogFAggWQArgcAAgtQAAgugYgbQgSgVgXgFQglgIgmABQgzACgTAUQgdAeAcBFQAeBKBCALgAk4DaIBQgUIAAgoAjoDGQA5AUBJATQBYAXAagCQAbgDAvgWQAjgQAfgTIAeAA");
	this.shape_7.setTransform(560.1,306.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373530").s().p("AgcArQgQgKgEgMQgGgRAHgXQAIgeAagEQAUgDAVAUQAOAOAJATIgtA5QgRgBgRgKg");
	this.shape_8.setTransform(545.7,285.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373530").s().p("AhOArQgHgiAOgcQASgoAygHQAfAAAaAcQASAUAJAZQgRAVgVARQgcAWgSABQghAAgqgZg");
	this.shape_9.setTransform(586.2,288.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373530").s().p("AhhATQgdhFAegfQASgTAzgCQAlgBAmAHQAWAGASAUQAZAdAAAsQAAAtgsAdQgfAVgoAFQhBgKgehKg");
	this.shape_10.setTransform(537,311.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DEDEDE").ss(1,0,0,4).p("ADerwQCEgJCWAoQDMA2B3B9QCfCmBnD6QBdDgAACkQAACOhzEdQglBaioFwQgYBYgQBTQgVBuALAdQAAAcgfAnQgpAzg6gDQiJgHjagIQglgSgagSQgjgaAIgNQAWglAKgLQAaggAggKQAmgMBDgSIgvnlQBUgZBfg+QBxhJAthLQCIjlAVgqQBijFAKidAggt3QA7AXA/AeQBSAmAeAYQALAJAJALADoq5QADgMAAgJQAAgRgNgRAGBNtICElZQgajIggipQgrjkgfgbAnTYfQAIAjAtAPQAhAMAngCIIMgUQABhDAFhDQAGhXAIgYQANgoCqm9Asx2sQAngVA+gPQBKgRA3AIQA5AJBQAVQBKATAnAQQAag+AvguQA/g+BFAKQBZAOAxA9QAnAwAWBXQARBFg8BdQg2BVgvAIQgdAFAhAJQAaAGAtAFIhLAZQAtAPAeAAQAbAAhmAZIBoAZIhKAAQAfAWA1ASQgJAJgPAJQgdARgfAAQgXAAAwANQAwAMAaAAQAcAAgnANQgnAMgiAAQgTAAgQgFQgHgCgDAHQATAWAfAXQAjAZATAAQAmAAhKARQgxALgTgGQAFAEAJAHQArAjASgDQgJADgdAEQguAHgPgCQARAKA0AhIhkAAQANAXAYANQARAJALAAIhaAUQgSAxhVBMQhQBIg0AXAp9w/QAOgVAYgOQAggUAjAFQAiAFAlAqQAbAgARAkAsx2sQgXgVgZgeQgdgjgIgTQgMgbghgVQgigWgkAAQgnAAgxBEQgzBFAEA6QAEBJAIAgQALAwAbAbQAAA/gtC2QgnChAOBRQgRA3ARA1QASA6APAaQALATAGgDIAUgFQgJAqAUAnQAbA1BIAQQBcAVBYgQQBGgNA3ggAsx2sQhKAnhLAyQhjBCglAtAwDv+QAEh8BMAJQAgAFAVAlQARAbAFAfQgHAYgWAiQgXAlgXASQgLAJgJADQgpANhyAvQgeAdgQAuQgCAGgCAGAvgmcQA6AkAVBbQALAzAABcQAAAwgGBLQgDBNAJBtQATDsBQELQBmFYCpD9QgJADgJALQgMAPgFAVQgFAUgIAlQgKAbgWAGQgDABhEAHQgvAEgMASQgOAVALAuQAKAsANAEIAOABQAfgBBbgRQBsgTAggSQgGAFgFAHQgSAYAIAhAhNsbQgHgCgDgFAhlrkQgFAAgBgCAjPupQAFA9gHA+QgJBTgdAiQgdAigxAjQgkAagfAPAjyHiQAgA4AeBNQAwB4AABNIAAF8IhRBpAj7HeQgHAFgGAZQgIAigFAyIA3B4IhQhQIBQB9Ig3gZIBLBuIhLg3IBLDhIg8gyIAoCWIgjgKQAAAyAOA3QAKAmAUA0AjyHiQgFgIgEAEAjyHiQgFgCgEgCQhSgqhCgzQhdhIAAgzAi0V/QARgcANgcQASgmAAgQIAAhpAnTS3QAJgNAkgHQApgIAYANQAfAJAdAiQAcAgAHAAAi0V/QgMAJgWALQgrAXgyAMQgCABg/ACQgnACgaAZQgFADgEADAi0V/QAEgNgLgeQgQgpgKgaArEYRIDxAO");
	this.shape_11.setTransform(641.1,383.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DEDEDE").ss(1,0,0,4).p("ASeEGQAAikhdjgQhnj6ifimQh4h8jLg2QiXgpiDAJQgJgLgLgJQgdgYhTgmQg9gdg9gYQAiAAAngMQAngNgcAAQgaAAgwgMQgwgNAXAAQAfAAAdgRQAPgJAJgJQg1gSgfgWIBKAAIhogZQBmgZgbAAQgeAAgtgPIBLgZQgtgFgagGQghgJAdgFQAvgIA2hVQA8hdgRhFQgWhXgngwQgxg9hZgOQhFgKg/A+QgvAugaA+QgmgPhLgUQhPgVg6gJQg2gIhLARQg9APgoAVQgWgUgagfQgdgjgIgTQgMgbghgVQgigWgkAAQgnAAgxBEQgzBFAEA6QAEBJAIAgQALAwAbAbQAAA/gtC1QgnCiAOBRQgRA4ARA0QASA6APAaQAMATAFgDIAUgFQgJAqAUAnQAbA1BIAQQA6AkAVBbQALAzAABcQAAAwgGBLQgDBNAJBtQATDsBQELQBmFYCpD9QgJADgJALQgMAPgFAVQgFAUgIAlQgKAbgWAGQgDABhEAHQgvAEgMASQgOAVALAuQAKAsANAEID/APQAIAjAtAPQAhAMAngCIIMgUQABhEAFhCQAGhXAIgYQANgoCqm9IAvHlQhDASgmAMQggAKgaAgQgKALgWAlQgIANAjAaQAaASAlASQD7AJBoAGQA6ADApgzQAfgnAAgcQgLgdAVhvQAPhSAZhYQColwAlhaQBzkdAAiOgAiESoIhRBpQgUg0gKgmQgOg3AAgyIAjAKIgoiWIA8AyIhLjhIBLA3IhLhuIA3AZIhQh9IBQBQIg3h4QAFgyAIghQALgtALASQAgA4AeBNQAwB4AABNg");
	this.shape_12.setTransform(641.1,383.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AmeZRQgtgPgIgjIj/gPQgNgEgKgsQgLguAOgVQAMgSAvgEIBHgIQAWgGAKgbIANg5QAFgVAMgPQAJgLAJgDQipj9hmlYQhQkLgTjsQgJhtADhNQAGhLAAgwQAAhcgLgzQgVhbg6gkQhIgQgbg1QgUgnAJgqIgUAFQgFADgMgTQgPgagSg6QgRg0ARg4QgOhRAniiQAti1AAg/QgbgbgLgwQgIgggEhJQgEg6AzhFQAxhEAnAAQAkAAAiAWQAhAVAMAbQAIATAdAjQAaAfAWAUQAogVA9gPQBLgRA2AIQA6AJBPAVQBLAUAmAPQAag+AvguQA/g+BFAKQBZAOAxA9QAnAwAWBXQARBFg8BdQg2BVgvAIQgdAFAhAJQAaAGAtAFIhLAZQAtAPAeAAQAbAAhmAZIBoAZIhKAAQAfAWA1ASQgJAJgPAJQgdARgfAAQgXAAAwANQAwAMAaAAQAcAAgnANQgnAMgiAAQA9AYA9AdQBTAmAdAYQALAJAJALQCDgJCXApQDLA2B4B8QCfCmBnD6QBdDgAACkQAACOhzEdQglBaioFwQgZBYgPBSQgVBvALAdQAAAcgfAnQgpAzg6gDQhogGj7gJQglgSgagSQgjgaAIgNQAWglAKgLQAaggAggKQAmgMBDgSIgvnlQiqG9gNAoQgIAYgGBXQgFBCgBBEIoMAUIgJABQgiAAgdgLgAjzS3QAKAmAUA0IBRhpIAAl8QAAhNgwh4QgehNggg4QgLgSgLAtQgIAhgFAyIA3B4IhQhQIBQB9Ig3gZIBLBuIhLg3IBLDhIg8gyIAoCWIgjgKQAAAyAOA3g");
	this.shape_13.setTransform(641.1,383.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.157)").s().p("AhRGmQoaholmjFQiohdhVheQhWhiAQhWQAQhWB2g6QBxg5C/gYQGVgyIaBoQIbBoFmDFQCoBdBVBeQBWBigQBWQgQBWh2A6QhxA5i/AYQiEAQiSAAQkvAAlrhGg");
	this.shape_14.setTransform(713.3,554.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// projectile
	this.mc_projectile = new lib.afficheur_projectile_mc();
	this.mc_projectile.name = "mc_projectile";
	this.mc_projectile.parent = this;
	this.mc_projectile.setTransform(75.8,545,1,1,0,0,0,34.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_projectile).wait(1));

	// vie
	this.vie_txt = new cjs.Text("", "bold 20px 'Open Sans'", "#FFFFFF");
	this.vie_txt.name = "vie_txt";
	this.vie_txt.lineHeight = 27;
	this.vie_txt.lineWidth = 38;
	this.vie_txt.parent = this;
	this.vie_txt.setTransform(75.1,489.7);

	this.instance = new lib.vie_mc();
	this.instance.parent = this;
	this.instance.setTransform(55.8,495,1,1,0,0,0,11.8,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.vie_txt}]}).wait(1));

	// texte
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiQBRIAAh7IALAAIABALIABAAQAEgFAHgFQAIgDAHAAQASAAAJAMQAJAMAAAUQAAAVgJALQgKAMgRAAQgHAAgIgDQgHgEgEgGIgBAAIABAygAh9gZQgGAGAAAQIAAADQAAARAGAIQAGAIANAAQALAAAHgJQAGgKAAgOQAAgOgGgKQgHgJgLAAQgNAAgGAIgAGoAgQgLgLAAgVQAAgTAKgNQAKgMARAAQARAAAJALQAJAKAAASIAAAHIg7AAQABAPAGAHQAIAJANgBQAOAAANgFIAAAMIgMADQgHACgJAAQgSAAgLgMgAGxgaQgFAGgCAMIAtAAQAAgNgFgFQgGgHgKAAQgKAAgHAHgAEFAlQgIgIAAgQIAAg3IANAAIAAA2QAAALAFAFQAFAFAKAAQANAAAGgIQAHgGgBgRIAAgsIAOAAIAABUIgLAAIgCgLIgBAAQgDAGgIADQgIAEgIAAQgPAAgIgHgADGASIAAgyIgMAAIAAgHIAMgFIAFgSIAIAAIAAAUIAZAAIAAAKIgZAAIAAAxQAAAHAEAFQADAEAHAAIAHgBIAEgBIAAAKIgGACIgHABQgZAAAAgagABtAmQgHgHgBgMQAAgZAqgBIAOgBIAAgGQAAgKgDgEQgFgFgKAAQgKAAgNAHIgFgLIAOgFIAPgCQAPAAAIAHQAIAHAAAPIAAA5IgKAAIgDgMIgBAAQgFAHgHAEQgHADgJAAQgMAAgIgGgACRABQgRABgGADQgHAFABAJQAAAHADAEQAEADAIAAQANAAAHgGQAGgIAAgLIAAgIgAgoAgQgLgMAAgUQAAgTAKgNQAKgMASAAQAPAAAJALQAKAKgBASIAAAHIg5AAQAAAPAHAHQAHAJAOgBQANAAANgFIAAAMIgNADQgFACgJAAQgSAAgMgMgAgegaQgGAGgBAMIAsAAQgBgMgEgGQgFgHgLAAQgKAAgGAHgAl4AgQgLgLAAgVQAAgUAKgMQAKgMARAAQAQAAAKALQAJALAAARIAAAHIg7AAQAAAPAHAHQAHAJANgBQAOAAAOgFIAAAMIgNADQgGACgJAAQgTAAgKgMgAlvgaQgFAFgCANIAtAAQAAgMgFgGQgHgHgJAAQgKAAgHAHgAFgAqIAAhUIAKAAIACAQIABAAQAEgJAIgFQAGgEAIAAIAKABIgCAMIgJgBQgKAAgIAJQgHAIAAAMIAAAtgAArAqIAAhUIALAAIABAQIABAAQAFgKAGgEQAHgEAIAAIAKABIgBAMIgKgBQgLAAgHAJQgHAHAAANIAAAtgAi4AqIAAg3QAAgKgEgFQgFgFgJAAQgMAAgGAHQgGAHABAOIAAAvIgOAAIAAg3QABgKgFgFQgFgFgJAAQgLAAgHAIQgFAHAAAQIAAAsIgNAAIAAhUIAKAAIADALIAAAAQADgFAIgEQAGgEAIAAQAUAAAHAOIAAAAQAFgGAHgEQAHgEAJAAQAPAAAHAHQAHAJAAAPIAAA3gAm/AqIAAhlIglAAIAAgMIBWAAIAAAMIglAAIAABlgAgXg1IAAgDIAPgXIAPAAIAAACIgKAMIgMAMg");
	this.shape_15.setTransform(87.6,425.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AphAAITDAA");
	this.shape_16.setTransform(102,393);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AphAAITDAA");
	this.shape_17.setTransform(102,354);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AoehbIAJAAIBKCkIBJikIAJAAIhTC3gAEOBTQgOgHgHgOQgIgNAAgPQAAgQAIgNQAHgNAOgHQAMgIARAAQAQAAANAIQANAHAHANQAIANAAAQQAAAQgIANQgGAMgOAJQgMAIgRgBQgRAAgMgIgAESgJQgMAHgGAKQgHAMAAAOQAAAOAHAMQAHAMALAGQALAHAOAAQANAAAMgHQAKgGAIgMQAGgMAAgOQAAgOgGgMQgHgLgLgHQgMgHgNAAQgOAAgLAIgAlrBTQgNgIgIgNQgHgNAAgPQAAgQAHgNQAIgNANgHQANgIAQAAQAQAAANAIQANAHAIANQAHANAAAQQAAAQgHANQgHAMgNAJQgNAIgQgBQgRAAgNgIgAlngJQgLAHgHAKQgGAMAAAOQAAAOAGAMQAHAMALAGQAMAHAOAAQANAAALgHQALgGAHgMQAGgMAAgOQAAgOgGgMQgGgKgMgIQgLgHgOAAQgNAAgMAIgACZBTQgMgGgJgOQgIgNAAgQQAAgPAIgNQAJgNAMgGQANgIAQAAQAOgBAJAFQAJAEAKAKIAAALQgIgKgKgHQgJgFgPgBQgOABgLAGQgKAGgIALQgHAMAAANQAAAPAHALQAHAMALAGQALAGANAAQAcAAAPgYIAAANQgJAJgKAFQgLAEgNAAQgPAAgNgIgAHWBSQgNgHgHgNQgIgNAAgPQAAgRAIgMQAHgLANgJQAOgGAQAAQAZAAASATIhMBJQAKAIAGACQAHADAJAAQANAAALgGQALgHAIgLIAAAMQgJAKgLAFQgLADgNAAQgPABgNgJgAHagJQgMAHgGAKQgGAKAAAPQAAAVANANIBGhFQgJgHgGgDQgIgDgKAAQgPAAgLAGgAA1BXQgJgEgEgHIAAgNQAFALAIAFQAHAFANgBQAMAAAHgGQAHgJAAgKQAAgLgEgEQgEgGgJgFIgYgPQgEgDgEgFQgDgGAAgEQAAgKAHgFQAHgGAKAAQANAAAJAGIAAAKQgHgJgOAAQgIAAgEAEQgFADAAAHQAAADADAFQADAFAFACIARAKQANAIAFAGQAGAIAAAMQAAAPgKAIQgKAKgOgBQgLAAgJgDgAhlBSQgNgHgIgNQgHgNAAgPQAAgQAHgNQAIgMANgIQAOgGAQAAQAZAAARATIhLBJQAKAIAFACQAIADAJAAQANAAALgGQALgIAIgKIAAAMQgKAKgKAFQgLADgNAAQgPABgNgJgAhigJQgLAHgGAKQgHAKAAAPQAAAUANAOIBHhFQgJgHgHgDQgHgDgKAAQgPAAgMAGgAj0BPQgLgMAAgSIAAhwIAHAAIAAAsIAiAAIAAAHIgiAAIAAA9QAAAPAKAJQAKAJAOAAIAAAHQgSAAgMgKgAF5BYIAAhrIAIAAIAAAYQAGgMAIgGQAJgGAMAAQAIAAAHACIAAAJQgIgFgHAAQgJAAgIAFQgHAFgGAJQgFAJAAAKIAAA/gAjCBYIAAhrIAIAAIAAAYQAFgLAJgHQAIgGANAAQAHAAAIACIAAAJQgHgFgJAAQgIAAgJAFQgHAGgGAIQgEAIAAALIAAA/g");
	this.shape_18.setTransform(98.3,373.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AuIAAIcRAA");
	this.shape_19.setTransform(369.5,393);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AuIAAIcRAA");
	this.shape_20.setTransform(369.5,354);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("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AAgKgEgFQgGgGgIAAQgNAAgFAIQgGAHABARIAAAtIgOAAIAAhWIALAAIACAMIABAAQADgGAHgEQAGgDAJAAQAUgBAGAPIABAAQAEgHAHgEQAHgEAKABQAOAAAHAHQAHAIABAQIAAA4gAyFJLIAAhWIANAAIAABWgAytJLIAAg3QAAgLgEgFQgHgGgJAAQgNAAgGAIQgHAGAAASIAAAtIgMAAIAAhWIAKAAIACAMIABAAQAEgGAHgEQAHgDAJAAQAPAAAIAHQAIAIAAAQIAAA4gAIFHqIgLgMQgHgGgDgGIAAgCIAPAAIAPAYIAAACgAFWHqQgIgFgJgKIgRAPIgJAAIAAgCIANgQIAHgIIAMAAQACADAEAFIAPAQIAAACgAQVHkQgDgCAAgEQAAgEADgCQABgCAEAAQAEAAACACQACACAAAEQAAAEgCACQgCACgEABQgEgBgBgCgAG9HkQgCgCAAgEQAAgEACgCQACgCAEAAQADAAABACQADACAAAEQAAAEgDACQgBACgDABQgEgBgCgCgAhxHkQgCgCAAgEQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCACQgCACgEABQgDgBgCgCgAyEHkQgCgCAAgEQAAgEACgCQACgCAEAAQADAAACACQACACAAAEQAAAEgCACQgCACgDABQgEgBgCgCgANxGVIAAh8IALAAIACAMIAAAAQAFgHAGgDQAIgDAIAAQARgBAJAMQAKALAAAWQAAAWgKAKQgJAMgRAAQgIAAgIgDQgHgEgEgGIgBAAIABAygAOEEqQgGAHAAAQIAAADQAAASAGAHQAGAJAOgBQAKABAHgKQAGgIAAgRQAAgPgGgJQgHgIgLAAQgNAAgGAHgABDGVIAAh8IAKAAIACAMIAAAAQAFgHAHgDQAHgDAIAAQASgBAIAMQAKALAAAWQAAAWgKAKQgJAMgRAAQgIAAgHgDQgHgEgFgGIgBAAIABAygABVEqQgFAHgBAQIAAADQABASAFAHQAGAJAOgBQALABAGgKQAGgIABgRQgBgPgGgJQgGgIgMAAQgNAAgGAHgAogGVIABgyIgBAAQgJANgRAAQgRAAgKgMQgJgMAAgUQAAgVAJgLQALgMAQAAQARAAAJANIABAAIACgMIAKAAIAAB8gApLEsQgFAIAAARQAAAQAFAIQAHAIALAAQANABAGgIQAGgHAAgQIAAgDQABgSgHgHQgFgJgOABQgLgBgHAKgATOFrIAAgMIANAFIAOABQAJAAAHgCQAFgEAAgGQAAgFgEgEQgEgDgOgFIgRgIQgFgEgCgEQgCgEgBgGQAAgKAJgHQAJgFAPAAQANgBAOAGIgFAKQgMgEgLAAQgJAAgGACQgEADAAAGQAAADACACIAFAFIAPAGQAQAHAFAEQAFAGABAJQAAAMgJAGQgKAHgQgBQgRABgJgGgAR/FlQgKgMgBgUQABgVAJgMQALgMARAAQARgBAIALQAKAKAAASIAAAJIg7AAQAAAOAIAIQAHAIANAAQAOAAAOgGIAAAMIgOAEQgGABgIAAQgTAAgMgLgASKEpQgHAHAAAMIAsAAQAAgMgGgHQgEgHgLABQgLgBgFAHgAQzFlQgLgLABgVQgBgXALgKQAKgMATAAQAGAAAHABIAJADIgEALIgJgDIgJgBQgbAAAAAiQABAPAGAIQAHAJAMAAQALAAALgEIAAALQgJAFgNgBQgSAAgKgLgAPaFlQgMgMABgUQgBgVALgMQAKgMARAAQAQgBAKALQAJALAAARIAAAJIg7AAQAAAOAHAIQAIAIANAAQAOAAANgGIAAAMIgNAEQgGABgJAAQgTAAgKgLgAPjEpQgFAGgCANIAtAAQAAgMgFgHQgGgHgKABQgKgBgHAHgAMfFrIAAgMIAOAFIANABQALAAAFgCQAGgEAAgGQAAgFgFgEQgEgDgNgFIgRgIQgFgEgCgEQgDgEAAgGQAAgKAIgHQAKgFAOAAQANgBAOAGIgFAKQgMgEgLAAQgIAAgGACQgFADABAGQAAADACACQABACAEADIAPAGQAQAHAEAEQAGAGAAAJQAAAMgJAGQgKAHgPgBQgQABgLgGgALRFlQgLgMAAgUQAAgVAKgMQAKgMASAAQAQgBAJALQAKAKgBASIAAAJIg6AAQAAANAHAJQAIAIAMAAQAPAAANgGIAAAMIgNAEQgGABgJAAQgSAAgMgLgALbEpQgGAHgBAMIAtAAQgBgMgFgHQgFgHgKABQgLgBgGAHgAJPFrIAAgMIAOAFIANABQALAAAFgCQAGgEAAgGQAAgFgFgEQgDgDgOgFIgRgIQgFgEgCgEQgCgDgBgHQAAgLAJgGQAIgFAQAAQANgBAOAGIgGAKQgMgEgKAAQgKAAgFACQg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DAGgIADQgIADgIAAQgPAAgJgHgAP8COQgIgHAAgMQAAgaAqgBIAOgBIAAgFQABgKgFgEQgFgFgJgBQgLAAgNAHIgEgKIAOgGIAPgCQAOAAAJAIQAHAGAAAPIAAA7IgJAAIgDgNIgBAAQgGAIgGAEQgHADgJgBQgNAAgHgGgAQfBpQgPABgIAEQgGAFAAAIQAAAHAEAEQAEADAIABQAMgBAHgGQAHgHAAgMIAAgIgAOnCJQgLgMAAgVQAAgUAKgMQAKgNARAAQARAAAJALQAJAKAAASIAAAIIg6AAQABAPAGAIQAIAIANAAQANAAAOgGIAAAMIgNAEQgGABgJAAQgSABgMgMgAOxBNQgGAHgBALIAtAAQAAgMgGgGQgFgHgLAAQgKAAgGAHgALgCJQgLgLAAgWQAAgTAKgNQAKgNARAAQARAAAJALQAJAKAAASIAAAIIg6AAQgBAPAIAIQAHAIAOAAQAOAAANgGIAAAMIgNAEQgHABgIAAQgSABgMgMgALqBNQgGAHgBALIAtAAQAAgLgGgHQgFgHgLAAQgKAAgGAHgAJ8CJQgJgMAAgVQAAgWAJgLQAKgLAQgBQARAAAKANIABAAIgBgGIAAgpIANAAIAAB6IgLAAIgBgLIgBAAQgJANgSgBQgQABgKgMgAKGBPQgFAJAAAQQAAARAFAIQAHAJALAAQAOAAAFgHQAHgIgBgQIAAgDQAAgRgGgJQgGgIgNAAQgLABgHAIgAHzCNQgIgIAAgQIAAg4IANAAIAAA3QAAAMAFAEQAFAGAKAAQANAAAHgIQAFgHABgRIAAgtIAMAAIAABWIgKAAIgCgLIAAAAQgFAGgHADQgIADgIAAQgPAAgIgHgAGTCOQgGgHAAgMQAAgaApgBIAPgBIAAgFQgBgKgEgEQgFgFgJgBQgLAAgNAHIgEgKIAOgGIAPgCQAPAAAHAIQAIAGAAAPIAAA7IgKAAIgCgNIgBAAQgFAIgIAEQgGADgJgBQgMAAgJgGgAG3BpQgPABgHAEQgHAEAAAJQAAAHAEAEQAEADAIABQANgBAGgGQAHgHAAgMIAAgIgAE/CJQgLgMAAgVQAAgUALgMQAJgNASAAQAQAAAJALQAKAKAAASIAAAIIg8AAQABAPAHAIQAHAIANAAQAOAAAOgGIAAAMIgNAEQgGABgJAAQgTABgLgMgAFJBNQgGAHgBAL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AgEACgEIAIgHQgGgCgFgHQgEgHAAgIQAAgNAIgJQAJgIAQABQAGAAAFABIAeAAIAAAJIgPABIADAIQACADAAAHQAAAMgJAHQgIAIgPAAIgHAAQgJAEAAAGQAAAEADACQADABAHAAIAPAAQAOAAAHAGQAIAGAAALQAAAOgMAIQgLAHgWAAQgQAAgKgGgAGvhGQgFAEAAAIQAAAIAFACQAHAEAKABQAQgBAIgEQAJgFAAgJQgBgGgEgEQgDgCgNAAIgPAAQgKAAgEAEgAG2iRQgFAEAAALQAAAJAFAEQAGAFAIAAQATAAAAgSQAAgUgTAAQgJAAgFAFgAsPgiIAAh8IALAAIABAMIABAAQAEgHAHgEQAIgCAIAAQAQAAAKALQAJAMAAAVQAAAWgJAKQgKANgQAAQgIgBgIgDQgGgDgFgHIgBAAIABAygAr9iNQgEAHgBAQIAAADQAAASAFAHQAHAIANAAQALAAAHgJQAFgIAAgQQAAgQgFgJQgIgIgKAAQgNAAgHAHgAPehJQgCgCgBgGQABgEACgDQACgDAFAAQADAAAEADQACADAAAEQAAAFgCADQgEADgDAAQgDAAgEgDgAOMhMIAAgMIANAFIANABQALAAAFgCQAGgFAAgFQAAgFgFgEQgDgDgOgGIgRgHQgFgEgCgEQgDgEAAgGQAAgKAJgHQAJgFAPAAQANgBAOAGIgFAKQgMgEgLAAQgJAAgGACQgEADAAAFQAAAEACACIAGAFIAOAGQARAHAEAEQAFAGAAAJQABAMgKAGQgJAHgQAAQgQAAgKgGgAL8hSQgLgNAAgTQAAgVAKgMQAKgMASAAQAQAAAJAKQAJAKAAASIAAAJIg6AAQABAOAGAIQAIAIANAAQANAAAOgGIAAAMIgNAEQgGACgJAAQgSAAgMgMgAMGiOQgGAHgBAMIAtAAQAAgNgGgGQgFgGgLAAQgKAAgGAGgAKGhSQgJgMgBgUQAAgWALgMQAKgLAUAAIAMABIAJADIgDALIgKgDIgJgBQgaAAAAAiQAAAQAGAHQAHAJAMAAQALAAALgEIAAALQgIAFgNAAQgTAAgLgMgAIphNQgHgGAAgNQAAgaApgBIAPAAIAAgGQAAgKgEgFQgFgEgKAAQgKAAgNAGIgFgKIAOgFIAPgCQAPAAAIAGQAIAIAAAPIAAA6IgKAAIgDgMIgBAAQgFAH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DgEAAgGQAAgKAIgGQAJgGAPgBQANAAAOAGIgFAKQgLgEgMAAQgIAAgGADQgFACABAGQgBADACACIAGAFIAPAGQAQAGAFAGQAFAFAAAIQAAANgJAGQgKAGgPAAQgRABgKgGgAQ6kkQgLgLAAgWQAAgTAKgNQAKgNASAAQAQAAAJALQAKAKAAASIAAAJIg8AAQABAOAHAIQAIAIAMAAQAOAAANgGIAAAMIgMAEQgHACgIgBQgTAAgLgLgARElgQgGAGgCAMIAtAAQAAgLgFgHQgFgHgKABQgLgBgGAHgAOukgQgHgIAAgQIAAg4IANAAIAAA4QAAAKAFAFQAFAGAKgBQAOAAAFgHQAHgIAAgQIAAgtIAMAAIAABWIgKAAIgCgLIAAAAQgFAFgHAEQgIAEgIgBQgPAAgJgHgANQkfQgIgHABgMQAAgaApgBIAOgBIAAgFQAAgKgEgFQgEgEgKAAQgLgBgNAHIgEgKIAOgFIAPgDQAPABAIAGQAHAHAAAQIAAA6IgKAAIgCgMIgBAAQgGAHgGAEQgHACgJAAQgNAAgHgGgANzlEQgQABgGAEQgHAFAAAIQAAAHAFAEQADADAIAAQAMAAAHgGQAHgHAAgMIAAgIgAL7kkQgLgNAAgUQAAgUAKgMQAKgNASAAQAQAAAJALQAKALgBARIAAAJIg6AAQABAPAGAHQAHAIAOAAQAOAAANgGIAAAMIgNAEQgGACgJgBQgSAAgMgLgAMFlgQgGAHgBALIAtAAQAAgLgGgHQgFgHgLABQgKgBgGAHgAJ8kkQgJgMAAgVQAAgWAJgKQAKgNAQAAQARAAAKANIABAAIgBgGIAAgpIANAAIAAB6IgLAAIgBgLIgBAAQgJANgSgBQgQAAgKgLgAKGldQgFAIAAAQQAAARAFAIQAHAIALAAQAOABAFgIQAHgHgBgQIAAgDQAAgRgGgJQgGgIgNABQgLAAgHAJgAHzkgQgIgIAAgQIAAg4IANAAIAAA4QAAAKAFAFQAFAGAKgBQANAAAHgHQAFgIABgQIAAgtIAMAAIAABWIgKAAIgCgLIAAAAQgFAFgHAEQgIAEgIgBQgPAAgIgHgAGTkfQgGgHAAgMQAAgaApgBIAPgBIAAgFQgBgKgEgFQgFgEgJAAQgLgBgNAHIgEgKIAOgFIAPgDQAPABAHAGQAIAHAAAQIAAA6IgKAAIgCgM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");
	this.shape_21.setTransform(405.9,489.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("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");
	this.shape_22.setTransform(369.2,375.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("A4DzIMAwHAAAMAAAAmRMgwHAAAg");
	this.shape_23.setTransform(411.5,463);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.2)").s().p("A4DTJMAAAgmRMAwHAAAMAAAAmRg");
	this.shape_24.setTransform(411.5,463);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqzIMAlVAAAMAAAAmRMglVAAAg");
	this.shape_25.setTransform(137,463);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.2)").s().p("AyqTJMAAAgmRMAlVAAAMAAAAmRg");
	this.shape_26.setTransform(137,463);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// decor
	this.instance_1 = new lib._1_victoire();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ecran_victoire, rect = new cjs.Rectangle(0,0,843.7,604), [rect]);


(lib.minuterie_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"niveau1":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// horloge
	this.instance = new lib.horloge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.4,8,1,1,0,0,0,8.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// minuterie
	this.minuterie = new cjs.Text("", "bold 20px 'Open Sans'", "#FFFFFF");
	this.minuterie.name = "minuterie";
	this.minuterie.lineHeight = 27;
	this.minuterie.lineWidth = 41;
	this.minuterie.parent = this;
	this.minuterie.setTransform(21,1.8);

	this.timeline.addTween(cjs.Tween.get(this.minuterie).wait(1));

}).prototype = getMCSymbolPrototype(lib.minuterie_mc, rect = new cjs.Rectangle(0,-0.2,64.3,31.3), [rect]);


(lib.mcAfficheur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// minuterie
	this.minuterie_mc = new lib.minuterie_mc();
	this.minuterie_mc.name = "minuterie_mc";
	this.minuterie_mc.parent = this;
	this.minuterie_mc.setTransform(-42.1,17.2,1,1,0,0,0,32.1,7.4);

	this.timeline.addTween(cjs.Tween.get(this.minuterie_mc).wait(1));

	// temperature
	this.thermometre_mc = new lib.temperature_mc();
	this.thermometre_mc.name = "thermometre_mc";
	this.thermometre_mc.parent = this;
	this.thermometre_mc.setTransform(-196.1,16.7,1,1,0,0,0,84.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.thermometre_mc).wait(1));

	// afficheurVie
	this.projectile_mc = new lib.afficheur_projectile_mc();
	this.projectile_mc.name = "projectile_mc";
	this.projectile_mc.parent = this;
	this.projectile_mc.setTransform(-346.1,17.9,1,1,0,0,0,34.8,16.4);

	this.vie_mc = new lib.afficheurVie_mc();
	this.vie_mc.name = "vie_mc";
	this.vie_mc.parent = this;
	this.vie_mc.setTransform(-554.9,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vie_mc},{t:this.projectile_mc}]}).wait(1));

	// bg_affichage
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("EgrqgCkMBXVAAAIAAFJMhXVAAAg");
	this.shape.setTransform(-280.1,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.4)").s().p("EgrqAClIAAlJMBXVAAAIAAFJg");
	this.shape_1.setTransform(-280.1,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcAfficheur, rect = new cjs.Rectangle(-560.6,-1,561,42.3), [rect]);


(lib.ecran_defaite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tire
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AqYAAIUxAA");
	this.shape.setTransform(374.5,318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AqYAAIUxAA");
	this.shape_1.setTransform(374.5,274);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AEtB9QgTgLgMgUQgMgUAAgWQAAgYAMgUQAMgTATgKQAUgLAZAAQAlAAAbAeIhxBuQAKAJANAGQALAEAOAAQASAAARgKQASgJALgSIAAATQgNAOgRAIQgPAGgVAAQgWAAgUgMgAEygMQgQAJgKAQQgKARAAAVQAAAdAUAVIBphnQgLgKgMgFQgMgFgOAAQgWAAgSAKgAlSB9QgTgLgMgUQgMgUAAgWQAAgYAMgUQALgTAUgKQAUgLAZAAQAlAAAaAeIhxBuQAMAKALAFQAMAEAOAAQARAAASgKQARgJALgSIAAATQgNAPgQAHQgPAGgVAAQgWAAgUgMgAlNgMQgRAJgKAQQgJAQAAAWQAAAeAUAUIBphnQgKgKgNgFQgMgFgPAAQgVAAgSAKgAhEB9QgUgLgLgUQgMgUAAgWQAAgWAMgVQALgSAUgLQATgMAYAAQAYAAATANQAVAMAIASIAAgnIAMAAIAAChIgMAAIAAgpQgJAUgVANQgSALgYAAQgYAAgTgLgAg+gLQgRAKgKAQQgKASAAATQAAATAKASQAKARARAKQARALAVgBQAVABAOgLQARgKAKgRQAKgRAAgUQAAgUgKgRQgKgQgRgKQgQgLgUAAQgTAAgSALgAIbCFQgEgEAAgFQAAgGAEgDQAEgEAFAAQAEAAAEAEQAEADAAAGQAAAFgEAEQgDADgFAAQgGAAgDgDgAHpCFQgEgEAAgFQAAgGAEgDQAEgEAFAAQAEAAAEAEQAEADAAAGQAAAFgEAEQgDADgFAAQgGAAgDgDgAG3CFQgEgEAAgFQAAgGAEgDQAEgEAFAAQAFAAADAEQAEADAAAGQAAAFgEAEQgDADgFAAQgGAAgDgDgAC/B2QgRgPAAgdIAAinIAMAAIAABBIAxAAIAAAKIgxAAIAABcQAAAZAOANQAOANAWAAIAAAKQgbAAgSgRgABxCFIAAihIALAAIAAChgAjCCFIAAioQAAgQAIgOQAJgPAOgIQAOgIARAAIAAAKQgOAAgLAHQgMAIgHAKQgGANAAANIAAAHIAyAAIAAAKIgyAAIAACXgAovCFIAAkNIALAAQBCAAAiAjQAjAkAABAQAAAkgSAfQgSAfgfASQgeASgmAAgAokB6IADAAQAhAAAcgQQAagQARgdQAQgdAAghQAAg7gfghQgfggg6gBIgDAAgAk4g4IAygqIAPAAIgyAqgABthFQgDgEAAgFQAAgFADgEQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDADgGABQgFgBgEgDg");
	this.shape_2.setTransform(376.8,296.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// projectile
	this.mc_projectile = new lib.afficheur_projectile_mc();
	this.mc_projectile.name = "mc_projectile";
	this.mc_projectile.parent = this;
	this.mc_projectile.setTransform(368.8,510.7,1,1,0,0,0,34.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_projectile).wait(1));

	// minuterie
	this.mc_minuterie = new lib.minuterie_mc();
	this.mc_minuterie.name = "mc_minuterie";
	this.mc_minuterie.parent = this;
	this.mc_minuterie.setTransform(482.1,418.1,1,1,0,0,0,32.1,15.3);

	this.timeline.addTween(cjs.Tween.get(this.mc_minuterie).wait(1));

	// texte
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjDBMIAAh7IALAAIACAMIABAAQADgGAIgEQAHgDAIAAQASAAAJALQAIAMABAVQgBAVgIALQgKAMgRAAQgIAAgHgDQgIgEgDgGIgBAAIABAxgAivgeQgHAHABAQIAAADQgBARAHAIQAGAIANAAQALAAAGgJQAHgKgBgOQABgPgHgKQgGgIgLAAQgOAAgFAHgAHxANIAAgyIgMAAIAAgGIAMgFIAFgSIAIAAIAAATIAZAAIAAAKIgZAAIAAAyQAAAIADAEQAFAEAFAAIAHgBIAGgBIAAAKIgPADQgYAAAAgbgAE2AhQgIgGAAgNQAAgZApgBIAPAAIAAgGQAAgJgEgFQgEgFgKAAQgLAAgNAGIgEgKIANgFIAQgCQAPAAAIAHQAHAHAAAPIAAA5IgKAAIgCgMIgBAAQgHAIgGADQgGADgJAAQgNAAgHgHgAFZgDQgQABgHADQgGAFAAAIQAAAIAEADQAEAEAIAAQAMAAAHgHQAHgHAAgLIAAgHgAD9ANIAAgyIgMAAIAAgGIAMgFIAGgSIAHAAIAAATIAZAAIAAAKIgZAAIAAAyQAAAIADAEQAEAEAGAAIAHgBIAGgBIAAAKIgOADQgZAAAAgbgACqAiIAAgMIAOAFIANACQAKAAAGgDQAGgEgBgGQABgFgFgEQgDgDgOgEIgRgIQgGgEgCgEQgCgEAAgGQAAgKAJgGQAJgGAOAAQANAAAOAFIgFALQgMgFgLAAQgJAAgFADQgFACAAAGQAAADACACIAGAFIAPAGQAQAHAEAEQAGAFAAAJQAAAMgJAGQgJAHgQAAQgRAAgKgGgABcAcQgLgLAAgUQAAgUAKgNQALgMAQAAQARAAAJAKQAJAKAAASIAAAJIg6AAQgBAOAIAHQAIAIANAAQANAAAOgGIAAAMIgOAEQgFACgJAAQgSAAgMgMgABmgfQgGAHgBAMIAtAAQAAgMgGgHQgFgGgLAAQgKAAgGAGgAhmAiIAAgMIANAFIAOACQALAAAEgDQAGgEAAgGQAAgFgEgEQgDgDgOgEIgRgIQgFgEgCgEQgDgEAAgGQAAgKAJgGQAIgGAPAAQANAAAOAFIgEALQgOgFgKAAQgKAAgEADQgEACgBAGQABADABACIAGAFIAPAGQAQAHAFAEQAEAFAAAJQABALgJAHQgKAHgPAAQgRAAgKgGgAmrAcQgLgLAAgUQAAgVAKgMQAKgMASAAQAPAAAKAKQAJALAAARIAAAJIg6AAQAAAOAHAHQAHAIANAAQAOAAAOgGIAAAMIgNAEQgHACgIAAQgTAAgLgMgAmhgfQgGAGgBANIAtAAQgBgMgFgHQgGgGgKAAQgKAAgGAGgAHIAmIAAg2QAAgLgFgFQgFgFgJAAQgOAAgGAHQgHAHABARIAAAsIgOAAIAAhVIALAAIADAMIAAAAQADgFAIgFQAHgDAJAAQAPAAAIAHQAIAIAAAQIAAA3gAAUAmIAAhVIALAAIACAQIAAAAQAGgIAFgFQAIgEAIAAIAKABIgCAMIgJgBQgMAAgGAIQgIAJABAMIAAAtgAjqAmIAAg3QgBgKgEgFQgEgFgKAAQgMAAgFAHQgGAHAAAOIAAAvIgNAAIAAg3QAAgKgFgFQgEgFgJAAQgMAAgGAHQgGAIAAAQIAAAsIgMAAIAAhVIAKAAIACAMIAAAAQAEgGAHgEQAGgDAJAAQAUAAAGAOIABAAQAEgHAHgDQAIgEAIAAQAPAAAIAHQAGAIAAAQIAAA3gAnyAmIAAhlIgkAAIAAgMIBVAAIAAAMIgkAAIAABlg");
	this.shape_3.setTransform(382.7,410.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiQBQIAAh7IAKAAIACANIABAAQADgHAJgEQAHgDAHAAQASAAAJALQAJANAAAUQAAAVgJALQgJAMgSAAQgHAAgHgDQgIgEgEgGIgBAAIABAxgAh9gaQgGAIAAAQIAAACQAAARAGAIQAGAIANAAQALAAAGgJQAHgJAAgPQAAgPgHgKQgGgIgLAAQgNAAgGAHgAGnAhQgLgMABgVQgBgTALgMQAKgNARAAQAQAAAKAKQAJALAAARIAAAIIg7AAQABAPAGAIQAIAHANABQAOAAAOgHIAAAMIgOAFQgGABgJAAQgSAAgMgLgAGxgbQgFAIgCALIAtAAQAAgMgFgHQgGgGgKAAQgKAAgHAGgAEEAkQgHgHAAgQIAAg4IANAAIAAA3QAAALAEAFQAHAFAJAAQANAAAGgIQAHgGAAgSIAAgsIAMAAIAABWIgKAAIgCgMIgBAAQgEAGgHAEQgIADgIAAQgPAAgJgIgADGARIAAgyIgMAAIAAgFIAMgGIAGgSIAHAAIAAATIAZAAIAAAKIgZAAIAAAyQAAAHAEAFQADAEAHAAIAHAAIAEgBIAAAKIgFABIgIABQgZAAAAgbgABtAlQgIgGAAgNQAAgZAqgBIAPAAIAAgFQgBgLgEgEQgEgFgJAAQgLAAgNAGIgFgKIAOgFIAQgCQAOAAAIAHQAHAHAAAPIAAA6IgJAAIgDgNIAAAAQgGAIgHADQgGADgKAAQgNAAgHgHgACQAAQgPABgHAFQgGAEAAAIQAAAIADADQAFAEAIAAQAMAAAHgHQAGgHABgLIAAgIgAgoAhQgLgNAAgUQAAgUAKgLQAKgNASAAQAPAAAJAKQAJALAAARIAAAIIg5AAQABAPAGAIQAIAHANABQAMAAAOgHIAAAMIgNAFQgFABgJAAQgSAAgMgLgAgegbQgGAIgBALIAsAAQgBgMgFgHQgEgGgLAAQgJAAgHAGgAl5AhQgLgMABgVQgBgUAKgLQALgNARAAQAQAAAKAKQAJALAAARIAAAIIg7AAQAAAPAHAIQAHAHANABQAOAAAOgHIAAAMIgNAFQgGABgJAAQgTAAgLgLgAlvgbQgFAHgCAMIAtAAQAAgLgFgIQgHgGgKAAQgJAAgHAGgAFgArIAAhWIAKAAIACAQIABAAQAEgIAIgEQAGgFAIAAIALABIgDAMIgJgBQgKAAgIAIQgHAJAAANIAAAtgAArArIAAhWIAKAAIACAQIAAAAQAHgJAFgDQAHgFAIAAIAKABIgCAMIgJgBQgLAAgHAIQgHAIAAAOIAAAtgAi4ArIAAg3QAAgKgFgGQgDgFgKAAQgMAAgGAHQgFAHAAAPIAAAvIgOAAIAAg3QABgKgFgGQgFgFgJAAQgLAAgHAHQgFAJAAAQIAAAsIgNAAIAAhWIALAAIACANIAAAAQAEgHAGgDQAHgEAJAAQATAAAHAPIABAAQADgIAIgDQAHgEAJAAQAOAAAIAHQAHAIAAARIAAA3gAnAArIAAhmIgkAAIAAgMIBWAAIAAAMIgkAAIAABmgAgXg2IAAgBIAPgZIAPAAIAAACIgJANIgNALg");
	this.shape_4.setTransform(377.6,444.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ApSAAISlAA");
	this.shape_5.setTransform(390.5,380);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ApSAAISlAA");
	this.shape_6.setTransform(390.5,341);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AoehbIAJAAIBKClIBJilIAJAAIhTC3gAEOBTQgOgIgHgMQgIgOAAgQQAAgPAIgOQAHgMAOgHQANgIAQAAQAQAAANAIQANAHAHAMQAIAOAAAPQAAARgIANQgGAMgNAJQgNAHgQABQgSAAgMgJgAESgJQgMAHgGALQgGALgBAOQABAOAGALQAHAMALAHQAMAHAOAAQANAAALgHQAKgGAIgNQAGgMAAgOQAAgNgGgLQgHgMgLgGQgMgIgNABQgOAAgLAHgAlrBTQgNgIgHgMQgIgOAAgQQAAgPAIgOQAHgMANgHQANgIAQAAQAQAAANAIQAOAHAHAMQAIAOAAAPQAAARgIANQgGAMgOAJQgNAHgQABQgRAAgNgJgAlngJQgLAHgHALQgGALAAAOQAAAOAGALQAIAMAKAHQAMAHAOAAQANAAALgHQAMgHAGgMQAHgLAAgPQAAgOgHgKQgGgMgMgGQgLgIgOABQgNAAgMAHgACZBTQgMgGgJgOQgIgMAAgSQAAgOAIgNQAJgNAMgHQANgHARgBQANABAJAEQAKAEAJAJIAAANQgHgMgLgFQgJgHgOAAQgOAAgLAIQgLAFgIAMQgHALAAANQAAAOAHAMQAHALALAHQAMAGANAAQAbAAAPgYIAAANQgJAJgKAEQgKAFgNAAQgQAAgNgIgAHXBTQgOgIgHgNQgIgNAAgQQAAgQAIgNQAHgKAOgJQAOgHAPAAQAZAAASAUIhMBKQAKAHAGACQAHADAKAAQANAAALgHQAKgGAIgMIAAANQgJAKgLAEQgKAFgNAAQgPgBgNgHgAHagIQgLAFgHALQgGAKAAAPQAAAUANAOIBHhFQgJgIgHgCQgHgDgLAAQgPAAgLAHgAA1BWQgJgDgDgHIAAgMQAEAKAIAFQAHAEANAAQAMABAHgIQAHgHAAgMQAAgKgEgFQgDgFgKgGIgYgOQgDgDgFgFQgCgGAAgEQgBgKAHgFQAHgGAKAAQANAAAKAGIAAAKQgIgJgOAAQgIAAgEADQgFAEAAAGQAAAFADAEQAEAEAEADIARAKQANAIAFAGQAGAIAAALQAAAPgKAKQgJAIgOABQgMAAgJgFgAhlBTQgNgIgHgNQgIgNAAgQQAAgQAIgNQAHgLANgIQAPgHAPAAQAaAAAQAUIhLBKQAKAHAFACQAIADAJAAQANAAALgHQALgGAIgMIAAANQgJAKgKAEQgMAFgNAAQgPgBgNgHgAhigIQgLAFgGALQgGAKAAAPQgBATANAPIBHhFQgJgIgHgCQgHgDgKAAQgPAAgMAHgAj0BOQgLgLAAgTIAAhuIAIAAIAAArIAhAAIAAAGIghAAIAAA9QAAAQAJAKQAKAJAOAAIAAAGQgRAAgNgLgAF5BYIAAhrIAIAAIAAAXQAGgLAIgGQAJgHAMAAQAIABAIADIAAAJQgJgGgHAAQgJAAgIAGQgHAEgGAIQgFALAAAIIAABAgAjCBYIAAhrIAIAAIAAAXQAFgLAJgGQAIgHANAAQAIABAHADIAAAJQgHgGgJAAQgIAAgIAGQgIAFgGAHQgEAKAAAJIAABAg");
	this.shape_7.setTransform(388.3,360.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AuIAAIcRAA");
	this.shape_8.setTransform(659.5,380);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AuIAAIcRAA");
	this.shape_9.setTransform(659.5,341);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("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");
	this.shape_10.setTransform(666.5,457.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("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");
	this.shape_11.setTransform(659.2,362.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqwoMAlVAAAMAAAAhRMglVAAAg");
	this.shape_12.setTransform(667,434);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.2)").s().p("AyqQpMAAAghRMAlVAAAMAAAAhRg");
	this.shape_13.setTransform(667,434);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AyqwoMAlVAAAMAAAAhRMglVAAAg");
	this.shape_14.setTransform(427,434.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.2)").s().p("AyqQpMAAAghRMAlVAAAMAAAAhRg");
	this.shape_15.setTransform(427,434.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// decor
	this.instance = new lib._1_defaite();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ecran_defaite, rect = new cjs.Rectangle(0,0,800,600), [rect]);


(lib.mcEcrans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{presentation:0,instruction:1,"niveau1":2,"niveau2":3,victoire:4,defaite:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// bouton2
	this.btnPrecedent = new lib.mcbtnPrecedent();
	this.btnPrecedent.name = "btnPrecedent";
	this.btnPrecedent.parent = this;
	this.btnPrecedent.setTransform(109.1,566,1,1,0,0,0,75,8.1);
	this.btnPrecedent._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnPrecedent).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

	// bouton1
	this.btnInstruction = new lib.mcbtnInstruction();
	this.btnInstruction.name = "btnInstruction";
	this.btnInstruction.parent = this;
	this.btnInstruction.setTransform(689.1,555,1,1,0,0,0,80.4,8);

	this.btnJouer = new lib.mcbtnJouer();
	this.btnJouer.name = "btnJouer";
	this.btnJouer.parent = this;
	this.btnJouer.setTransform(706.1,567,1,1,0,0,0,51.1,9.1);

	this.btnRejouer = new lib.mcbtnRejouer();
	this.btnRejouer.name = "btnRejouer";
	this.btnRejouer.parent = this;
	this.btnRejouer.setTransform(720,572,1,1,0,0,0,57.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnInstruction}]}).to({state:[{t:this.btnJouer}]},1).to({state:[]},1).to({state:[{t:this.btnRejouer,p:{x:720,y:572}}]},2).to({state:[{t:this.btnRejouer,p:{x:729,y:571}}]},1).wait(1));

	// thermometre
	this.temperature_mc_victoire = new lib.thermometre_mc();
	this.temperature_mc_victoire.name = "temperature_mc_victoire";
	this.temperature_mc_victoire.parent = this;
	this.temperature_mc_victoire.setTransform(129.1,451,1,1,0,0,0,84.1,14.5);

	this.temperature_mc_defaite = new lib.thermometre_mc();
	this.temperature_mc_defaite.name = "temperature_mc_defaite";
	this.temperature_mc_defaite.parent = this;
	this.temperature_mc_defaite.setTransform(417,470,1,1,0,0,0,84.1,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.temperature_mc_victoire}]},4).to({state:[{t:this.temperature_mc_defaite}]},1).wait(1));

	// ecran
	this.instance = new lib.ecran_presentation();
	this.instance.parent = this;
	this.instance.setTransform(399.5,300,1,1,0,0,0,401,300);

	this.instance_1 = new lib.ecran_instruction();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,299.5,1,1,0,0,0,400,300.5);

	this.instance_2 = new lib.mcbtnInstruction();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.9,28,1,1,0,0,0,23.9,28);

	this.instance_3 = new lib.ecran_niveau1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(400,300,1,1,0,0,0,400,300);

	this.instance_4 = new lib.ecran_niveau2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(400,300,1,1,0,0,0,400,300);

	this.ecran_victoire = new lib.ecran_victoire();
	this.ecran_victoire.name = "ecran_victoire";
	this.ecran_victoire.parent = this;
	this.ecran_victoire.setTransform(421.8,302,1,1,0,0,0,421.8,302);

	this.ecran_defaite = new lib.ecran_defaite();
	this.ecran_defaite.name = "ecran_defaite";
	this.ecran_defaite.parent = this;
	this.ecran_defaite.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.ecran_victoire}]},1).to({state:[{t:this.ecran_defaite}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,0,802,600);
p.frameBounds = [rect, new cjs.Rectangle(-14.3,-11.5,814.4,611.6), rect=new cjs.Rectangle(0,0,800,600), rect, new cjs.Rectangle(0,0,843.7,604), new cjs.Rectangle(0,0,800,600)];


// stage content:
(lib.animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'DC868218F739481C869E0124B554A1C4',
	width: 800,
	height: 600,
	fps: 30,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/_1_defaite.jpg?1557937378877", id:"_1_defaite"},
		{src:"images/_1_niveau.jpg?1557937378877", id:"_1_niveau"},
		{src:"images/_1_presentation.jpg?1557937378877", id:"_1_presentation"},
		{src:"images/_1_victoire.jpg?1557937378877", id:"_1_victoire"},
		{src:"images/copie1_presentation.jpg?1557937378877", id:"copie1_presentation"},
		{src:"images/copie1_presentationpng2.jpg?1557937378877", id:"copie1_presentationpng2"},
		{src:"images/Frame.png?1557937378877", id:"Frame"},
		{src:"images/niveau1_decors.jpg?1557937378877", id:"niveau1_decors"},
		{src:"images/niveau2_decors.jpg?1557937378877", id:"niveau2_decors"}
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
an.compositions['DC868218F739481C869E0124B554A1C4'] = {
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