import { size } from "../size/size";
import { color } from "../color/color";
import { position } from "../position/position";
import { outline } from "../outlineStyle/outline";
import { hover } from "../effect/hover";
import { transition } from "../effect/transition";
import { visible } from "../effect/visible";

//color, size, position, outlineStyle
export const mixtureStyle = {
  base_note: `${size.width.base_note} ${size.height.base_note} ${color.background.base_note} ${position.base_note} ${color.outline.base_note}`,
  page: `${size.width.page} ${size.height.page} ${color.pageColor.base_note} ${outline.common} ${color.outline.base_note} ${position.page} ${color.outline.base_note} drop-shadow-xl/50`,
  header: `${position.header} ${size.height.header} ${size.width.header} ${color.background.header} ${outline.header} ${color.outline.base_note} ${hover.size.header} ${transition.header} ${visible.input} drop-shadow-xl/50`,
  titleBox: `${position.titleBox} ${size.width.titleBox} ${size.height.titleBox} ${size.font.title}`,
  searchBox: `${size.width.searchBox} ${size.height.searchBox} ${position.searchBox} ${outline.searchBox} `
};
