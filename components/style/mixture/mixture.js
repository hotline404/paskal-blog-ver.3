import { size } from "../size/size";
import { color } from "../color/color";

export const mixtureStyle = {
  background: `w-[${size.width.background}] ${size.height.background} bg-[${color.background.base_note}]`,
  page: `w-[${size.width.page}] h-[${size.height.page}] bg-[${color.pageColor.base_note}]`,
};
