import React from "react";
import Divider from "../elements/Divider";
import iposImage from "../../assets/images/ipos.png";
import MenuItem from "../elements/MenuItem";
import {
  IoGitBranchOutline,
  IoCubeOutline,
  IoCartOutline,
  IoSpeedometerOutline,
  IoPricetagOutline,
  IoPersonOutline,
  IoLocationOutline,
  IoFolderOpenOutline,
} from "react-icons/io5";

export default function Sidebar(props) {
  const role_name = localStorage.getItem("role_name");
  return (
    <div
      className={`bg-blue text-white lg:w-96  min-h-screen p-4  ${
        props.condition === "show" ? "" : "hidden"
      }`}
    >
      <div className="w-full flex justify-center items-center gap-5">
        <img src={iposImage} className="h-[64px]" />
      </div>
      <Divider />
      <MenuItem
        icon={<IoSpeedometerOutline />}
        name="Dashboard"
        href="/dashboard"
      />
      <Divider />
      {role_name === "Admin" && (
        <>
          <MenuItem
            icon={<IoPersonOutline />}
            name="User"
            pathParent="user"
            isDropdown
          >
            <MenuItem name="Admin" href="/user/admin" isChild />
            <MenuItem name="Checker" href="/user/checker" isChild />
          </MenuItem>
          <MenuItem
            icon={<IoPricetagOutline />}
            name="Penjual"
            href="/penjual"
          />
        </>
      )}
      <MenuItem icon={<IoCartOutline />} name="Pembeli" href="/pembeli" />
      <MenuItem
        icon={<IoCubeOutline />}
        name="Produk"
        pathParent="produk"
        isDropdown
      >
        {role_name === "Admin" && (
          <MenuItem name="Produk Master" href="/produk/master" isChild />
        )}
        <MenuItem name="Produk Seller" href="/produk/seller" isChild />
      </MenuItem>
      {role_name === "Admin" && (
        <>
          <MenuItem icon={<IoLocationOutline />} name="Lokasi" href="/lokasi" />
          <MenuItem
            icon={<IoGitBranchOutline />}
            name="Log Aktivitas"
            href="/log-aktivitas"
          />
        </>
      )}

      <Divider />
      <MenuItem
        icon={<IoFolderOpenOutline />}
        name="Laporan"
        pathParent="laporan"
        isDropdown
      >
        <MenuItem name="Transaksi" href="/laporan/transaksi" isChild />
        <MenuItem name="Harian" href="/laporan/harian" isChild />
        <MenuItem
          name="Detail Transaksi"
          href="/laporan/detail-transaksi"
          isChild
        />
        <MenuItem name="Pembanding" href="/laporan/pembanding" isChild />
      </MenuItem>
    </div>
  );
}
