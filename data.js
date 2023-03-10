const data = {
  nodes: [
    { name: "Pozo 1", type: "well" },
    { name: "Pozo 2", type: "well" },
    { name: "Pozo 3", type: "well" },
    { name: "Pozo 4", type: "well" },
    { name: "Tanque Ppal", type: "tank" },
    { name: "A oficinas, trainig center, vigilancia", type: "coso" },
    { name: "API", type: "coso" },
    { name: "Torre de enfriamiento", type: "cooling_tower" },
    { name: "Calderas", type: "boiler" },
    { name: "Sec.Arsenico", type: "coso" },
    { name: "Osmosis", type: "coso" },
    { name: "Primario", type: "plant" },
    { name: "Secundario", type: "plant" },
    { name: "Depositos", type: "store" },
    { name: "Baños/Comedor", type: "bathroom" },
    { name: "Perdidas", type: "coso" },
    { name: "Agua en prodcuto", type: "coso" },
    { name: "Consumo humano", type: "coso" },
    { name: "PTEL", type: "coso" },
    { name: "Arroyo", type: "body of water" },
    { name: "Desaireador", type: "coso" },
    { name: "Tanque de almacenamiento", type: "tank" },
    { name: "TK diario 16 m3", type: "tank" },
    { name: "TKs Calderas 2 (4 m3)", type: "tank" },
    { name: "Tanque Potable 20 m3", type: "tank" },
    { name: "Colector Industrial", type: "collector"},
    { name: "Colector cloacal", type: "collector"}
  ],
  links: [
    {
      source: "Pozo 1",
      target: "Tanque Ppal",
      value: 39071.27,
      type: "process",
    },
    {
      source: "Pozo 2",
      target: "Tanque Ppal",
      value: 14299.4,
      type: "process",
    },
    {
      source: "Pozo 3",
      target: "Tanque Ppal",
      value: 31953.93,
      type: "process",
    },
    {
      source: "Pozo 4",
      target: "A oficinas, trainig center, vigilancia",
      value: 31953.93,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "API",
      value: 1647.96,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Torre de enfriamiento",
      value: 22993.04,
      type: "process",
    },
    {
      source: "Torre de enfriamiento",
      target: "Calderas",
      value: 2240.9,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Sec.Arsenico",
      value: 5851.46,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Osmosis",
      value: 36434.3,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Primario",
      value: 718.39,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Secundario",
      value: 266.5,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Depositos",
      value: 1325,
      type: "process",
    },
    {
      source: "Tanque Ppal",
      target: "Baños/Comedor",
      value: 0,
      type: "process",
    },
    {
      source: "Primario",
      target: "Perdidas",
      value: 1918.62,
      type: "steam",
    },
    {
      source: "Primario",
      target: "Agua en prodcuto",
      value: 1493.34,
      type: "process",
    },
    {
      source: "PTEL",
      target: "Arroyo",
      value: 20075,
      type: "potable",
    },
    {
      source: "Colector cloacal",
      target: "PTEL", 
      value: 10658.55,
      type: "idk"
    },
    {
      source: "Tanque Potable 20 m3", 
      target: "Primario",
      value: 6647.43,
      type: "potable"
    }, 
    {
      source: "Tanque Potable 20 m3", 
      target: "Secundario",
      value: 1589.50,
      type: "potable"
    }, 
    {
      source: "Tanque Potable 20 m3", 
      target: "Depositos",
      value: 0,
      type: "potable"
    }, 
    {
      source: "Tanque Potable 20 m3", 
      target: "Baños/Comedor",
      value: 10529.43,
      type: "potable"
    }
  ],
};
