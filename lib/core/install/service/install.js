"use strict";var t=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(i,s){function a(t){try{l(o.next(t))}catch(t){s(t)}}function r(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}))},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.commonInstall=exports.installSymlink=void 0;const e=require("./common"),o=require("../../../util"),i=require("../../package/PackageLock"),s=require("../../../common/Constants"),a=n(require("../../../log")),r=n(require("path")),l=require("../../../common/message"),c=require("../../../common/GlobalState");function u(n,u){return t(this,void 0,void 0,(function*(){try{o.PackageUtil.checkIfPackageJsonExists(n),i.PackageLock.initLockJson(n),yield d(n,u),yield function(n){return t(this,void 0,void 0,(function*(){const t=[],i=[];e.pkgPathToNodeMap.forEach((e=>{(function(t){if(c.GlobalState.command===c.CommandType.UPDATE&&t.saveSpec.startsWith("file:")&&!t.isLink)return!1;const n=r.default.join(t.pkgStoreDir,s.Constants.MyPackageJson);return o.FsUtil.existsSync(n)})(e)||(t.push(e),i.push(e.fetch(n)))})),yield Promise.all(i);!function(t){if(!o.FsUtil.existsSync(t))return;const n=o.FsUtil.readdirSync(t);for(const i of n){const n=r.default.join(t,i);o.FsUtil.statSync(n).isDirectory()?i!==s.Constants.MyModules&&(e.pkgPathToNodeMap.has(n)||o.FsUtil.rmDirSync(n)):o.FsUtil.rmDirSync(n)}}(r.default.join(n,s.Constants.MyModules,s.Constants.PmDir));const a=[];t.forEach((t=>{a.push(t.install(n))})),yield Promise.all(a)}))}(n),i.PackageLock.updateLockFile(),yield function(n,o,i){return t(this,void 0,void 0,(function*(){const t=[];e.pkgPathToNodeMap.forEach((e=>{const i=r.default.join(e.saveRootDir,o);t.push(e.symlink(n,i))})),yield Promise.all(t);const s=r.default.join(n,o);(0,e.deleteExtraneousLinks)(s,(t=>-1!==i.children.findIndex((n=>n.name===t)))),yield i.symlink(n,s)}))}(n,s.Constants.MyModules,u),yield function(n){return t(this,void 0,void 0,(function*(){const t=r.default.join(n,s.Constants.MyModules,s.Constants.PmDir,s.Constants.MyModules);(0,e.deleteExtraneousLinks)(t,(t=>e.pkgMaxVersionMap.has(t)));const i=[];e.pkgMaxVersionMap.forEach((n=>{const a=r.default.join(t,n.name),l=r.default.join(n.saveRootDir,s.Constants.MyModules,n.name);(0,e.checkFileIfExist)(l),i.push(o.FsUtil.symLinkDir(l,a))})),yield Promise.all(i)}))}(n),f(n)}catch(t){a.default.error((0,l.getMessage)("install.fail"),"",t.message||""),f(n),process.exit(1)}}))}function d(n,e){return t(this,void 0,void 0,(function*(){yield Promise.all(e.children.map((e=>t(this,void 0,void 0,(function*(){return yield e.init(n),d(n,e)})))))}))}function f(t){const n=r.default.join(t,s.Constants.MyModules),e=r.default.join(n,s.Constants.PmDir),i=r.default.join(e,s.Constants.MyModules);o.FsUtil.rmEmptyDirSync(i),o.FsUtil.rmEmptyDirSync(e),o.FsUtil.rmEmptyDirSync(n)}exports.installSymlink=function(n,i){return t(this,void 0,void 0,(function*(){const t=process.cwd(),s=(new Date).getTime();try{const o=yield(0,e.getRootNode)(t,i,n);yield u(t,o),i.saveDev?i.saveProd=!1:i.saveProd=i.save,yield(0,e.updatePkgJson)(t,o.packageJson,i)}catch(n){throw f(t),""}o.PrintUtil.printCostTime(s,"install")}))},exports.commonInstall=u;