"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PackageFactory=void 0;const r=require("./LocalDirPackage"),t=e(require("../../../log")),a=require("./RegistryPackage"),c=require("./LocalFilePackage"),i=require("npm-package-arg"),s=/[.](?:har)$/i;var o;!function(e){e.FILE="file",e.DIRECTORY="directory",e.TAG="tag",e.VERSION="version",e.RANGE="range"}(o||(o={}));exports.PackageFactory=class{static getPackage(e,l,n,u,g){let p;try{let e=l;!l||!l.endsWith(".har")||l.includes("file:")||l.includes("/")||l.includes("\\")||(e=`./${l}`),p=i(e,n)}catch(e){throw t.default.error("",e.message),""}(p.type===o.FILE||p.type===o.DIRECTORY)&&p.type===o.DIRECTORY&&s.test(p.rawSpec)&&(p.type=o.FILE);const d=g||p.name,y=p.fetchSpec;if(p.registry)return new a.RegistryPackage(d,y);switch(p.type){case o.DIRECTORY:return new r.LocalDirPackage(e,y,u,d);case o.FILE:return new c.LocalFilePackage(e,y,d);default:throw t.default.error("",`invalid pkg-spec, ${l}`),""}}};