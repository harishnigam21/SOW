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
  { id: 0, name: "Invoices", icon: FaFileInvoice, path: "invoices" },
  { id: 1, name: "Customers", icon: IoMdPerson, path: "customers" },
  { id: 2, name: "My Business", icon: MdOutlineSettings, path: "my_business" },
  {
    id: 3,
    name: "Invoice Journal",
    icon: LiaFileInvoiceSolid,
    path: "invoice_journal",
  },
  { id: 4, name: "Price list", icon: FaTag, path: "price_list" },
  {
    id: 5,
    name: "Multiple Invoicing",
    icon: VscDiffMultiple,
    path: "multiple_invoicing",
  },
  {
    id: 6,
    name: "Unpaid Invoices",
    icon: RxCrossCircled,
    path: "unpaid_invoices",
  },
  {
    id: 7,
    name: "Offer",
    icon: BiSolidOffer,
    path: "offer",
  },
  {
    id: 8,
    name: "Inventory Control",
    icon: MdInventory,
    path: "inventory_control",
  },
  {
    id: 9,
    name: "Member Invoicing",
    icon: MdOutlineRememberMe,
    path: "member_invoicing",
  },
  {
    id: 10,
    name: "Import/Export",
    icon: IoCloudUploadSharp,
    path: "import_export",
  },
  {
    id: 11,
    name: "Logout",
    icon: IoLogOut,
    path: "logout",
  },
];
