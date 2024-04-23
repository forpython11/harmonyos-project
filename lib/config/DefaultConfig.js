"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.defaultConfigTypes=exports.configType=exports.defaultConfig=exports.logLevelType=exports.types=void 0;const t=e(require("path")),o=e(require("os")),r=require("../common/Constants");!function(e){e.REGISTRY="registry",e.PUBLISH_ID="publish_id",e.CACHE="cache",e.KEY_PATH="key_path",e.NO_PROXY="no_proxy",e.HTTP_PROXY="http_proxy",e.HTTPS_PROXY="https_proxy",e.STRICT_SSL="strict_ssl",e.LOG_LEVEL="log_level",e.PUBLISH_REGISTRY="publish_registry",e.CA_FILES="ca_files",e.FETCH_TIMEOUT="fetch_timeout"}(exports.types||(exports.types={})),exports.logLevelType=["error","warn","info","debug"],exports.defaultConfig={registry:"",publish_id:"",cache:t.default.join(o.default.homedir(),r.Constants.PmDir,"cache"),key_path:"",no_proxy:"",http_proxy:"",https_proxy:"",strict_ssl:!0,log_level:"info",publish_registry:"",ca_files:"",fetch_timeout:6e4},function(e){e.CLI="cli",e.PROJECT="project",e.USER="user",e.DEFAULT="default"}(exports.configType||(exports.configType={})),exports.defaultConfigTypes=new Set(Object.keys(exports.defaultConfig));