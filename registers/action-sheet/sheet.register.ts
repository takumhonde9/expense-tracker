import AddItemSheet from "../../components/sheet/add-item.sheet";
import { registerSheet } from "react-native-actions-sheet";
import { ADD_ITEM_SHEET, MAKE_TRANSFER_SHEET } from "./constants";
import MakeTransferSheet from "../../components/sheet/make-transfer.sheet";

registerSheet(ADD_ITEM_SHEET, AddItemSheet);
registerSheet(MAKE_TRANSFER_SHEET, MakeTransferSheet);

export {}; // for JS bundler
