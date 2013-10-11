
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.$("clockText").html("6:04 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.$("clockText").html("6:05 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.$("clockText").html("6:06 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.$("clockText").html("6:07 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.$("clockText").html("6:08 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.$("clockText").html("6:09 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.$("clockText").html("6:10 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8000,function(sym,e){sym.$("clockText").html("6:11 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9000,function(sym,e){sym.$("clockText").html("6:12 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.$("clockText").html("6:13 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){sym.$("clockText").html("6:14 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.$("clockText").html("6:15 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){sym.$("clockText").html("6:16 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("clockText").html("");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$("Stage").height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$("Stage");var parent=sym.$("Stage").parent();var parentWidth=stage.parent().width();var parentHeight=$(window).height();var stageWidth=stage.width();var stageHeight=stage.height();var desiredWidth=Math.round(parentWidth*1);var desiredHeight=Math.round(parentHeight*1);var rescaleWidth=(desiredWidth/stageWidth);var rescaleHeight=(desiredHeight/stageHeight);var rescale=rescaleWidth;if(stageHeight*rescale>desiredHeight)
rescale=rescaleHeight;stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){scaleStage();});$(document).ready(function(){scaleStage();});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playHover_btn2a}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playHover_btn2a}","mouseout",function(sym,e){sym.$("playHover_btn2a").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pauseHover_btn2a}","click",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pauseHover_btn2a}","mouseout",function(sym,e){sym.$("pauseHover_btn2a").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewindHover_btn2a}","click",function(sym,e){sym.play("starter");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewindHover_btn2a}","mouseout",function(sym,e){sym.$("rewindHover_btn2a").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_btn2a}","mouseover",function(sym,e){sym.$("playHover_btn2a").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pause_btn2a}","mouseover",function(sym,e){sym.$("pauseHover_btn2a").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewind_btn2a}","mouseover",function(sym,e){sym.$("rewindHover_btn2a").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-3014757");