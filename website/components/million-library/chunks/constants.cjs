'use strict';

const Object$ = Object;
const Map$ = Map;
const Set$ = Set;
const SetHas$ = Set$.prototype.has;
const SetAdd$ = Set$.prototype.add;
const MapHas$ = Map$.prototype.has;
const MapGet$ = Map$.prototype.get;
const MapSet$ = Map$.prototype.set;
const ChildFlag = 1;
const AttributeFlag = 2;
const EventFlag = 4;
const StyleAttributeFlag = 8;
const SvgAttributeFlag = 16;
const BlockFlag = 32;
const TEXT_NODE_CACHE = "__t";
const EVENTS_REGISTRY = "__m";
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const XLINK_NS = "http://www.w3.org/1999/xlink";
const XML_NS = "http://www.w3.org/2000/xmlns/";
const X_CHAR = 120;
const NON_PROPS = new Set$(["href", "list", "form", "tabIndex", "download"]);
const VOID_ELEMENTS = new Set$(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);

exports.AttributeFlag = AttributeFlag;
exports.BlockFlag = BlockFlag;
exports.ChildFlag = ChildFlag;
exports.EVENTS_REGISTRY = EVENTS_REGISTRY;
exports.EventFlag = EventFlag;
exports.IS_NON_DIMENSIONAL = IS_NON_DIMENSIONAL;
exports.Map$ = Map$;
exports.MapGet$ = MapGet$;
exports.MapHas$ = MapHas$;
exports.MapSet$ = MapSet$;
exports.NON_PROPS = NON_PROPS;
exports.Object$ = Object$;
exports.Set$ = Set$;
exports.SetAdd$ = SetAdd$;
exports.SetHas$ = SetHas$;
exports.StyleAttributeFlag = StyleAttributeFlag;
exports.SvgAttributeFlag = SvgAttributeFlag;
exports.TEXT_NODE_CACHE = TEXT_NODE_CACHE;
exports.VOID_ELEMENTS = VOID_ELEMENTS;
exports.XLINK_NS = XLINK_NS;
exports.XML_NS = XML_NS;
exports.X_CHAR = X_CHAR;
