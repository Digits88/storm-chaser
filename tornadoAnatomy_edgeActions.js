
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_next_btn}","click",function(sym,e){sym.stop("step1");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_step1Next_btn}","click",function(sym,e){sym.stop("step2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_step2Next_btn}","click",function(sym,e){sym.stop("step3");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_step3Next_btn}","click",function(sym,e){sym.stop("step4");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_again_btn}","click",function(sym,e){sym.stop("step1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$("Stage").height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$("Stage");var parent=sym.$("Stage").parent();var parentWidth=stage.parent().width();var parentHeight=$(window).height();var stageWidth=stage.width();var stageHeight=stage.height();var desiredWidth=Math.round(parentWidth*1);var desiredHeight=Math.round(parentHeight*1);var rescaleWidth=(desiredWidth/stageWidth);var rescaleHeight=(desiredHeight/stageHeight);var rescale=rescaleWidth;if(stageHeight*rescale>desiredHeight)
rescale=rescaleHeight;stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){scaleStage();});$(document).ready(function(){scaleStage();});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'next_btn'
(function(symbolName){})("next_btn");
//Edge symbol end:'next_btn'

//=========================================================

//Edge symbol: 'close_btn'
(function(symbolName){})("close_btn");
//Edge symbol end:'close_btn'

//=========================================================

//Edge symbol: 'credits_group'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop("creditStart");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_btn}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_credits_btn}","click",function(sym,e){sym.play("creditStart");});
//Edge binding end
})("credits_group");
//Edge symbol end:'credits_group'

//=========================================================

//Edge symbol: 'credits'
(function(symbolName){})("credits");
//Edge symbol end:'credits'

//=========================================================

//Edge symbol: 'credits_symbol'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_credits_btn}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop("creditsStart");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_btn}","click",function(sym,e){sym.play();});
//Edge binding end
})("credits_symbol");
//Edge symbol end:'credits_symbol'

//=========================================================

//Edge symbol: 'credits_box'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop("creditsStart");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_btn}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_credits_btn}","click",function(sym,e){sym.play();});
//Edge binding end
})("credits_box");
//Edge symbol end:'credits_box'
})(jQuery,AdobeEdge,"EDGE-18505037");