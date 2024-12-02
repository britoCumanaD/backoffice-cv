import dayjs from "dayjs";
require("dayjs/locale/es");
const isBetween = require("dayjs/plugin/isBetween");
const toObject = require("dayjs/plugin/toObject");
const objectSupport = require("dayjs/plugin/objectSupport");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.locale('es');
dayjs.extend(isSameOrBefore);
dayjs.extend(objectSupport);
dayjs.extend(toObject);
dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(timezone);

export default {
  install(Vue) {
    Vue.prototype.$date = dayjs;
  },
};
