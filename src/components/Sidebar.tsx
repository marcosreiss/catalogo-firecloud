"use client";

import { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { Menu, Backpack, RiceBowl, Receipt, SmokingRoomsRounded, ContentCut, Whatshot, Delete } from "@mui/icons-material";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const highlightSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.style.border = "3px solid red";
      setTimeout(() => {
        section.style.border = "none";
      }, 2000); // Remove o destaque após 2 segundos
    }
  };
  

  // Função para rolar até a seção específica
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Faz a rolagem suave
      highlightSection(id);
      setOpen(false); // Fecha a Sidebar após clicar
    }
  };
  const botões = 
  [
    { text: "Para Armazenar", icon: <Backpack />, id: "armazenar" },
    { text: "Cuias", icon: <RiceBowl />, id: "cuias" },
    { text: "Sedas", icon: <Receipt />, id: "sedas" },
    { text: "Piteiras", icon: <SmokingRoomsRounded />, id: "piteiras" },
    { text: "Tesouras", icon: <ContentCut />, id: "tesouras" },
    { text: "Isqueiros", icon: <Whatshot />, id: "isqueiros" },
    { text: "Cinzeiros", icon: <Delete />, id: "cinzeiros" },
  ]

  return (
    <>
      {/* Botão de Menu */}
      <IconButton onClick={() => setOpen(true)} sx={{ position: "fixed", top: 20, left: 20 }}>
        <Menu fontSize="large" />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary="Menu" sx={{ fontWeight: "bold", textAlign: "center" }} />
          </ListItem>

          {/* Itens da Sidebar */}
          {botões.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
