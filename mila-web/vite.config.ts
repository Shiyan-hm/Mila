import {defineConfig} from "vite";

import react from "@vitejs/plugin-react";

import {VitePWA} from "vite-plugin-pwa";


export default defineConfig({

plugins:[

react(),


VitePWA({

registerType:"autoUpdate",


manifest:{


name:"Mila 考研助手",

short_name:"Mila",

description:"2028考研个人AI工作台",


theme_color:"#C9B8A6",

background_color:"#F7F1E8",

display:"standalone",

orientation:"portrait",


icons:[

{
src:"/mila-192.png",
sizes:"192x192",
type:"image/png"
},

{
src:"/mila-512.png",
sizes:"512x512",
type:"image/png"
}

]

}

})


]


})
