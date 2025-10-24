"use client";
import CatalogoFireCloud from "@/components/catalogoFireCloud";
import LogoCarrosel from "@/components/logoCarrosel";
import ProdutosCatalogo from "@/components/produtosCatalogo";
import Sidebar from "@/components/Sidebar";
import SocialButtons from "@/components/SocialButtons";
import { Box } from "@mui/material";

export default function Home() {


  return (
    <Box mb={10}>
      <Sidebar />

      <CatalogoFireCloud />

      <SocialButtons 
        whatsapp="https://wa.me/5598989145050?text=Olá,%20gostaria%20de%20mais%20informações!" 
        instagram="https://www.instagram.com/firecloudslz/"
        location="https://maps.app.goo.gl/rHcHmXTZKKAeNAU37"
      />

      <LogoCarrosel />

      <ProdutosCatalogo id="armazenar" categoria="🎒 Para Armazenar" jsonPath="/json/paraArmazenar.json" />
      <ProdutosCatalogo id="cuias" categoria="🥣 Cuias" jsonPath="/json/cuias.json" />
      <ProdutosCatalogo id="sedas" categoria="📜 Sedas" jsonPath="/json/sedas.json" />
      <ProdutosCatalogo id="piteiras" categoria="🔹 Piteiras" jsonPath="/json/piteiras.json" />
      <ProdutosCatalogo id="tabaco" categoria="🌿 Tabaco" jsonPath="/json/tabaco.json" />
      <ProdutosCatalogo id="tesouras" categoria="✂️ Tesouras" jsonPath="/json/tesouras.json" />
      <ProdutosCatalogo id="isqueiros" categoria="🔥 Isqueiros" jsonPath="/json/isqueiros.json" />
      <ProdutosCatalogo id="cinzeiros" categoria="🗑️ Cinzeiros" jsonPath="/json/cinzeiros.json" />
      <ProdutosCatalogo id="bandejas" categoria="📥 Bandejas" jsonPath="/json/bandejas.json" />
      <ProdutosCatalogo id="slicks" categoria="📥 Slicks" jsonPath="/json/slicks.json" />

    </Box>
  );
}
