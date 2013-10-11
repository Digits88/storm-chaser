
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("clockText").html("6:13 p.m.");sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.$("clockText").html("6:14 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.$("clockText").html("6:15 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.$("clockText").html("6:16 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.$("clockText").html("6:17 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4250,function(sym,e){sym.$("clockText").html("6:18 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){sym.$("clockText").html("6:19 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.$("clockText").html("6:20 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7250,function(sym,e){sym.$("clockText").html("6:21 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8250,function(sym,e){sym.$("clockText").html("6:22 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9250,function(sym,e){sym.$("clockText").html("6:23 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10250,function(sym,e){sym.$("clockText").html("6:24 p.m.");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11250,function(sym,e){sym.stop();sym.$("clockText").html("6:25 p.m.");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$("Stage").height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$("Stage");var parent=sym.$("Stage").parent();var parentWidth=stage.parent().width();var parentHeight=$(window).height();var stageWidth=stage.width();var stageHeight=stage.height();var desiredWidth=Math.round(parentWidth*1);var desiredHeight=Math.round(parentHeight*1);var rescaleWidth=(desiredWidth/stageWidth);var rescaleHeight=(desiredHeight/stageHeight);var rescale=rescaleWidth;if(stageHeight*rescale>desiredHeight)
rescale=rescaleHeight;stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){scaleStage();});$(document).ready(function(){scaleStage();});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playHover_btn2b}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playHover_btn2b}","mouseout",function(sym,e){sym.$("playHover_btn2b").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pauseHover_btn2b}","click",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pauseHover_btn2b}","mouseout",function(sym,e){sym.$("pauseHover_btn2b").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewindHover_btn2b}","click",function(sym,e){sym.play("starter");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewindHover_btn2b}","mouseout",function(sym,e){sym.$("rewindHover_btn2b").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_btn2b}","mouseover",function(sym,e){sym.$("playHover_btn2b").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pause_btn2b}","mouseover",function(sym,e){sym.$("pauseHover_btn2b").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_rewind_btn2b}","mouseover",function(sym,e){sym.$("rewindHover_btn2b").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-3014757");