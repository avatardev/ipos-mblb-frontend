import React from "react";
import Divider from "../elements/Divider";
import Logo from "../elements/Logo";
import BPDLogo from "../../assets/images/BPD.png";
import KarangasemLogo from "../../assets/images/karangasem.png";
import MenuItem from "../elements/MenuItem";

export default function Sidebar() {
  return (
    <div className="bg-white text-primary lg:w-96  min-h-screen p-4">
      <div className="w-full flex justify-between items-center gap-5">
        <Logo img={KarangasemLogo} />
        <h1 className="text-xl font-semibold hidden lg:block">IPOS MBLB</h1>
        <Logo img={BPDLogo} />
      </div>
      <Divider />
      <MenuItem icon="speedometer-outline" name="Dashboard" href="/" />
      <Divider />
      <MenuItem icon="person-outline" name="Admin" href="/admin" />
      <MenuItem icon="pricetag-outline" name="Penjual" href="/penjual" />
      <MenuItem icon="cart-outline" name="Pembeli" href="/pembeli" />
      <MenuItem
        icon="cube-outline"
        name="Produk"
        pathParent="produk"
        isDropdown
      >
        <MenuItem name="Produk Master" href="/produk/master" />
        <MenuItem name="Produk Seller" href="/produk/seller" />
      </MenuItem>
      <MenuItem icon="location-outline" name="Lokasi" href="/lokasi" />
      <MenuItem
        icon="git-branch-outline"
        name="Log Aktivitas"
        href="/log-aktivitas"
      />

      <Divider />
      <MenuItem
        icon="folder-outline"
        name="Laporan"
        pathParent="laporan"
        isDropdown
      >
        <MenuItem name="Transaksi" href="/laporan/transaksi" />
        <MenuItem name="Harian" href="/laporan/harian" />
        <MenuItem name="Detail Transaksi" href="/laporan/detail-transaksi" />
        <MenuItem name="Pembanding" href="/laporan/pembandingr" />
      </MenuItem>
    </div>
  );
}
