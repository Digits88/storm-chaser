
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();sym.$("clockText").html("");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.$("clockText").html("6:20 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4500,function(sym,e){sym.$("clockText").html("6:19 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){sym.$("clockText").html("6:21 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.$("clockText").html("6:22 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.$("clockText").html("6:23 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14500,function(sym,e){sym.$("clockText").html("6:24 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16500,function(sym,e){sym.$("clockText").html("6:25 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18500,function(sym,e){sym.$("clockText").html("6:26 p.m.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$("Stage").height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$("Stage");var parent=sym.$("Stage").parent();var parentWidth=stage.parent().width();var parentHeight=$(window).height();var stageWidth=stage.width();var stageHeight=stage.height();var desiredWidth=Math.round(parentWidth*1);var desiredHeight=Math.round(parentHeight*1);var rescaleWidth=(desiredWidth/stageWidth);var rescaleHeight=(desiredHeight/stageHeight);var rescale=rescaleWidth;if(stageHeight*rescale>desiredHeight)
rescale=rescaleHeight;stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){scaleStage();});$(document).ready(function(){scaleStage();});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playHover_btn2c}","click",function(sym,e){sym.play();var childSymbols=sym.getChildSymbols();for(var i=0;i<childSymbols.length;i++)
childSymbols[i].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playHover_btn2c}","mouseout",function(sym,e){sym.$("playHover_btn2c").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pauseHover_btn2c}","click",function(sym,e){sym.stop();var childSymbols=sym.getChildSymbols();for(var i=0;i<childSymbols.length;i++)
childSymbols[i].stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pauseHover_btn2c}","mouseout",function(sym,e){sym.$("pauseHover_btn2c").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewindHover_btn2c}","click",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewindHover_btn2c}","mouseout",function(sym,e){sym.$("rewindHover_btn2c").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_btn2c}","mouseover",function(sym,e){sym.$("playHover_btn2c").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pause_btn2c}","mouseover",function(sym,e){sym.$("pauseHover_btn2c").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewind_btn2c}","mouseover",function(sym,e){sym.$("rewindHover_btn2c").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'detailMap'
(function(symbolName){})("detailMap");
//Edge symbol end:'detailMap'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-31508284");