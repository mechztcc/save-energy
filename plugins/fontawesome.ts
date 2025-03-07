import { defineNuxtPlugin } from "#app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faLock,
  faPlus,
  faImage,
  faTableList,
  faT,
  faMapLocationDot,
  faChartSimple,
  faCloudArrowDown,
  faCode,
  faLink,
  faPlay,
  faHeadphones,
  faTrash,
  faCircleCheck,
  faCircle,
  faChevronRight,
  faPenNib,
  faItalic,
  faBold,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faPaintBrush,
  faVideo,
  faThumbsUp,
  faVolumeLow
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default defineNuxtPlugin((nuxtApp) => {
  library.add(
    faUser,
    faLock,
    faGithub,
    faTwitter,
    faPlus,
    faImage,
    faTableList,
    faT,
    faMapLocationDot,
    faChartSimple,
    faCloudArrowDown,
    faCode,
    faLink,
    faPlay,
    faHeadphones,
    faTrash,
    faCircleCheck,
    faChevronRight,
    faPenNib,
    faCircle,
    faItalic,
    faBold,
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faPaintBrush,
    faVideo,
    faYoutube,
    faThumbsUp,
    faVolumeLow
  );

  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
