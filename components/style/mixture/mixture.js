import { size } from "../size/size";
import { color } from "../color/color";
import { position } from "../position/position";
import { outline } from "../outlineStyle/outline";
//color, size, position, outlineStyle
export const mixtureStyle = {
  base_note: `${size.width.base_note} ${size.height.base_note} ${color.background.base_note} ${position.base_note} ${color.outline.base_note}`,
  page: `${size.width.page} ${size.height.page} ${color.pageColor.base_note} ${outline.common} ${color.outline.base_note} ${position.page} ${color.outline.base_note}`,
  header: `${position.header} ${size.height.header} ${size.width.header} ${color.background.header} ${outline.header} ${color.outline.base_note}`,
};
