"use strict";var e=this&&this.__awaiter||function(e,n,t,i){return new(t||(t=Promise))((function(r,s){function o(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}l((i=i.apply(e,n||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.list=void 0;const t=n(require("semver")),i=n(require("path")),r=require("../../../common/Constants"),s=require("../../../util"),o=n(require("../../../log")),a=n(require("chalk")),l=require("../../../util/unicode-tree"),d=new Map,c=new Map;function u(n,o,l){return e(this,void 0,void 0,(function*(){const e={realpath:"",name:n,version:o,dependencies:{},children:[],depth:void 0===l.depth?0:l.depth+1,label:`${n}@${o}`};l.children.push(e);const u=function(e,n){let t=e.realpath,o=i.default.join(t,r.Constants.MyModules,n),a=i.default.join(o,r.Constants.MyPackageJson);if(s.FsUtil.existsSync(a))return o;t=i.default.join(t,".."),e.name.startsWith("@")&&(t=i.default.join(t,".."));if(o=i.default.join(t,n),a=i.default.join(o,r.Constants.MyPackageJson),s.FsUtil.existsSync(a))return o;return}(l,e.name);if(u){let n;e.realpath=yield s.FsUtil.realpath(u),c.has(e.realpath)?n=c.get(e.realpath):(n=s.FsUtil.readJSON5Sync(i.default.join(u,r.Constants.MyPackageJson)),c.set(e.realpath,n)),e.dependencies=n.dependencies||{},o.startsWith("file:")||(e.version=n.version)}if(!e.realpath){e.missing=!0;const n=`missing: ${e.label}, required by ${l.name}@${l.version}`;return d.set(n,l.depth||0),e.problem=n,e.label=`${a.default.red.bgBlack("UNMET DEPENDENCY")} ${e.label}`,e}if(t.default.validRange(o)&&!t.default.satisfies(e.version,o)){const t=`${n}@${e.version}`;return e.invalid=!0,e.problem=`invalid: ${t}, required ${e.label} ${e.realpath}`,e.label=`${t} ${a.default.red.bgBlack(`invalid version, required ${e.label}`)}`,d.set(e.problem,l.depth||0),e}return e.label=`${n}@${e.version}`,e}))}function f(e,n){return e.localeCompare(n)}function h(e,n,i){if(e.depth&&e.depth>i)return e.children=[],!1;let r=e.name===n.name&&t.default.satisfies(e.version,n.version||"*",{includePrerelease:!0,loose:!0});r&&(e.label=a.default.yellow.bgBlack(e.label));for(const t of e.children.slice()){if(h(t,n,i))r=!0;else{const n=e.children.findIndex((e=>e.name===t.name));-1!==n&&e.children.splice(n,1)}}return r}function p(e,n){void 0!==e.depth&&e.depth>=n?e.children=[]:e.children.forEach((e=>p(e,n)))}function v(e,n){for(const t of e.children){const e={label:t.label||"",nodes:[]};n.nodes.push(e),v(t,e)}}function m(e,n){for(const t of e.children){const e=t.invalid||t.missing,i={version:t.missing?void 0:t.version,missing:t.missing,invalid:t.invalid,problems:e?[t.problem||""]:void 0};m(t,i),n.dependencies||(n.dependencies={}),n.dependencies[t.name]=i}}function b(e){e.children=e.children.sort(((e,n)=>f(e.name,n.name))),e.children.forEach((e=>b(e)))}function y(e,n){const t={};m(e,t);const i={name:e.name,version:e.version,problems:n,dependencies:t.dependencies};return s.PrintUtil.print(JSON.stringify(i,null,2)),n.forEach((e=>o.default.error("",e))),i}function g(e,n){const t={label:`${e.name}@${e.version} ${e.realpath||""}`,nodes:[]};return v(e,t),0===t.nodes.length&&t.nodes.push("(empty)"),s.PrintUtil.print((0,l.unicodeTree)(t,"")),n.forEach((e=>o.default.error("",e))),(0,l.unicodeTree)(t,"")}exports.list=function(n,t){return e(this,void 0,void 0,(function*(){const o=process.cwd(),a=function(e){const n={name:"",version:"",realpath:"",dependencies:{},children:[],root:!0},t=i.default.join(e,r.Constants.MyPackageJson);if(s.FsUtil.existsSync(t)){const e=s.FsUtil.readJSON5Sync(t);n.dependencies=e.dependencies||{},n.name=e.name,n.version=e.version;const i=e.devDependencies||{};Object.keys(i).forEach((e=>{n.dependencies&&(n.dependencies[e]=i[e])}))}return n}(o),l={name:a.name,version:a.version,dependencies:a.dependencies,children:[],realpath:o,depth:-1,root:!0};yield function(n){return e(this,void 0,void 0,(function*(){const e=[];for(e.push(n);e.length>0;){const n=e.shift();if(!n)break;const t=n.dependencies;if(!t)continue;const i=Object.keys(t).sort(f);for(const r of i){const i=t[r],s=yield u(r,i,n);e.push(s)}}}))}(l),b(l);let c=n?1/0:0;if(t.depth>=0&&(c=t.depth),n){h(l,s.PackageUtil.parse(n),c)}else p(l,c);let v=[];return!n&&c>0&&(d.forEach(((e,n)=>{e<=c&&v.push(n)})),v=v.sort(f)),t.json?y(l,v):g(l,v)}))};