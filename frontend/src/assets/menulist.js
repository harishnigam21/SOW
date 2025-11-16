import { FaFileInvoice } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaTag } from "react-icons/fa6";
import { VscDiffMultiple } from "react-icons/vsc";
import { RxCrossCircled } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { MdOutlineRememberMe } from "react-icons/md";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
export const menulist = [
  {
    id: 0,
    name: "Invoices",
    icon: FaFileInvoice,
    path: "invoices",
    color: "#a4fbf6",
  },
  {
    id: 1,
    name: "Customers",
    icon: IoMdPerson,
    path: "customers",
    color: "#45eabe",
  },
  {
    id: 2,
    name: "My Business",
    icon: MdOutlineSettings,
    path: "my_business",
    color: "#a3dee1ff",
  },
  {
    id: 3,
    name: "Invoice Journal",
    icon: LiaFileInvoiceSolid,
    path: "invoice_journal",
    color: "#57dbf4",
  },
  {
    id: 4,
    name: "Price list",
    icon: FaTag,
    path: "price_list",
    color: "#f5a23b",
  },
  {
    id: 5,
    name: "Multiple Invoicing",
    icon: VscDiffMultiple,
    path: "multiple_invoicing",
    color: "#8de6f2",
  },
  {
    id: 6,
    name: "Unpaid Invoices",
    icon: RxCrossCircled,
    path: "unpaid_invoices",
    color: "#f18ebf",
  },
  {
    id: 7,
    name: "Offer",
    icon: BiSolidOffer,
    path: "offer",
    color: "#eeea94",
  },
  {
    id: 8,
    name: "Inventory Control",
    icon: MdInventory,
    path: "inventory_control",
    color: "#a1e1e5",
  },
  {
    id: 9,
    name: "Member Invoicing",
    icon: MdOutlineRememberMe,
    path: "member_invoicing",
    color: "#36abf8",
  },
  {
    id: 10,
    name: "Import/Export",
    icon: IoCloudUploadSharp,
    path: "import_export",
    color: "#36abf8",
  },
  {
    id: 11,
    name: "Logout",
    icon: IoLogOut,
    path: "logout",
    color: "#a3dee1ff",
  },
];
