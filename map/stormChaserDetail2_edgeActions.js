
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("clockText").html("");});
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
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'detailMap'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_showSatView}","click",function(sym,e){sym.$("detailMapSat2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hideSatView}","click",function(sym,e){sym.$("detailMapSat2").hide();});
//Edge binding end
})("detailMap");
//Edge symbol end:'detailMap'
})(jQuery,AdobeEdge,"EDGE-31508284");