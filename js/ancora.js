/* Âncora Ilhabela · o comportamento do site. Links (reserva, Instagram, Cubs, Cothy) no CONFIG logo abaixo; as unidades em
   UNIDADES (fotos, frases) e LOCAIS (endereço, tempos e mapa do entorno) */
/* ── Configuração: troque os links aqui ── */
const CONFIG = {
  reservaGeral: 'https://www.airbnb.com.br/users/profile/1470655185362162108',
  instagram: 'https://www.instagram.com/ancorailhabela/',
  cubs: 'https://www.cubsmodular.com.br/',
  cothy: 'https://cothy.com.br/'   /* link do crédito "Desenvolvido por Cothy" no rodapé (vazio = só texto) */
};

/* galeria: [arquivo, nome do ambiente, descrição, enquadramento opcional (object-position)]. A primeira abre o capítulo; as miniaturas trocam a foto. */
const UNIDADES = [
  { nome:'Vila Trancoso', bairro:'Perequê', rua:'Rua Caranguejo', tipo:'Apartamentos', icone:'remos',
    frase:'A poucos passos da praia e do centro do Perequê.', airbnb:'',
    galeria:[['u1n-g1','Quarto','Quarto de casal com cortina laranja, cabeceira de madeira e criados-mudos'],['u1n-g2','Sala','Sala integrada à cozinha, com sofá cinza e banquetas de madeira'],['u1n-g3','Cozinha','Cozinha com bancada de granito, prateleiras abertas e forro de madeira'],['u1n-g6','Banheiro','Banheiro com bancada branca sobre gabinete de madeira, espelho grande e box de vidro'],['u1n-g5','Fachada','Fachada da Vila Trancoso no Perequê, com portão de madeira e a placa da vila']] },
  { nome:'Vila Trancoso', bairro:'Itaquanduba', rua:'Rua Jacob Eduardo Toedtli', tipo:'Apartamentos', icone:'barco',
    frase:'Apartamentos com vista para o mar e o Pico do Baepi.', airbnb:'',
    galeria:[['u2n-g1','Sala e cozinha','Sala integrada à cozinha, com mesa de madeira e janelas para o verde'],['u2n-g2','Quarto','Quarto de casal com porta de vidro para o jardim'],['u2n-g3','Quarto de solteiro','Quarto com duas camas de solteiro e janela'],['u2n-g4','Banheiro','Banheiro com box de vidro, cuba sobre bancada de madeira e janela alta','50% 30%'],['u2n-g5','Fachada','Fachada da Vila Trancoso no Itaquanduba, com a placa laranja da vila e o portão de madeira']] },
  { nome:'Cubs', bairro:'Perequê', rua:'Avenida Princesa Isabel', tipo:'Estúdio', icone:'gaivotas',
    frase:'Estúdio moderno no coração do Perequê.', airbnb:'',
    galeria:[['u3n-g7','Estúdio','Estúdio com cama junto à janela, TV, cozinha compacta e mesa dobrável'],['u3-g1','Quarto','Cama do estúdio junto à janela, com painel de madeira'],['u3n-g8','Cozinha','Cozinha compacta com cooktop, pia de inox, micro-ondas e bancada de granito, ao lado da cama'],['u3n-g6','Varanda','Varanda do estúdio, com portão de ripas de madeira, floreira e banco'],['u3n-g5','Fachada','Fachada do Cubs Perequê, com brises de madeira e escada externa']] },
  { nome:'Dois Coqueiros', bairro:'Perequê', rua:'Rua Dois Coqueiros', tipo:'Apartamentos', icone:'coqueiros',
    frase:'Apartamento completo para aproveitar Ilhabela com mais espaço.', airbnb:'',
    galeria:[['u4n-g1','Quarto','Quarto com cabeceira de folhas de palmeira e criados-mudos de madeira'],['u4n-g2','Sala','Sala com sofá, TV, escrivaninha e cortinas claras'],['u4n-g6','Detalhes','Cabeceira de folhas de palmeira, luminária preta e criado-mudo de madeira'],['u4n-g4','Mezanino','Mezanino com cama, escrivaninha e guarda-corpo de madeira'],['u4n-g5','Fachada','Vista aérea do prédio do Dois Coqueiros, com ripas de madeira e estacionamento na frente']] },
  { nome:'Center Caiçara', bairro:'Perequê', rua:'Rua José Dias Barbosa', tipo:'Lofts', icone:'pescador',
    frase:'Tudo o que você precisa para ficar mais tempo na ilha.', airbnb:'',
    galeria:[['u5n-g1','Sala','Sala do loft com sofá, quadros de barcos e varanda com ripas de madeira'],['u5n-g2','Quarto','Quarto do loft com cama de casal, cama de solteiro e piso de madeira'],['u5n-g3','Cozinha','Cozinha com prateleiras de madeira, bancada escura e mesa de jantar'],['u5n-g4','Varanda','Varanda com espreguiçadeira de madeira e brises que filtram a luz'],['u5n-g5','Fachada','Fachada do Perequê Center Caiçara, com o mural do pescador e o deck com mesas']] }
];

/* Localização: a posição de cada unidade (em metros, x para leste e y para o sul, a partir de um ponto no Perequê), o endereço, os
   tempos até a praia e o mercado a pé e até a balsa de carro, os lugares úteis por perto (em metros a partir da unidade, com os
   minutos a pé) e o caminho a pé até a praia. Calculados por rota a partir do endereço, com os dados do OpenStreetMap: são
   estimativas. Na ordem de UNIDADES */
const LOCAIS = [{"x":-85,"y":746,"praia":5,"mercado":6,"balsa":2,"end":"Rua Caranguejo, 137, Ilhabela - SP","rota":"M0 0L35 -46L-42 -99L-40 -102L-134 -169L-137 -166L-167 -188L-212 -217L-222 -201L-225 -203","pontos":[{"t":"praia","n":"Praia do Perequê","c":"Praia do Perequê","x":-225,"y":-203,"min":5},{"t":"mercado","n":"Supermercado do Frade","c":"Supermercado","x":139,"y":-335,"min":6},{"t":"farmacia","n":"Drogaria São Paulo","c":"Farmácia","x":104,"y":-120,"min":3},{"t":"feira","n":"Mercado do Peixe","c":"Mercado do Peixe","x":-42,"y":-399,"min":7}]},{"x":668,"y":-1274,"praia":8,"mercado":8,"balsa":6,"end":"Rua Jacob Eduardo Toedtli, 246, Ilhabela - SP","rota":"M0 0L-177 171L-195 184L-205 187L-232 186L-271 178L-406 147L-409 158L-455 143L-472 87","pontos":[{"t":"praia","n":"Praia do Itaquanduba","c":"Praia do Itaquanduba","x":-472,"y":87,"min":8},{"t":"mercado","n":"Supermercado do Frade","c":"Supermercado","x":-344,"y":-129,"min":8}]},{"x":21,"y":639,"praia":7,"mercado":3,"balsa":4,"end":"Avenida Princesa Isabel, 1424, Ilhabela - SP","rota":"M0 0L26 11L-1 87L-44 72L-71 61L-148 8L-146 5L-240 -62L-243 -59L-273 -81L-318 -110L-292 -151","pontos":[{"t":"praia","n":"Praia do Perequê","c":"Praia do Perequê","x":-294,"y":-152,"min":7},{"t":"mercado","n":"Supermercado do Frade","c":"Supermercado","x":33,"y":-228,"min":3},{"t":"farmacia","n":"Drogaria São Paulo","c":"Farmácia","x":-2,"y":-13,"min":0},{"t":"feira","n":"Mercado do Peixe","c":"Mercado do Peixe","x":-148,"y":-292,"min":7}]},{"x":-18,"y":713,"praia":5,"mercado":5,"balsa":4,"end":"Rua Dois Coqueiros, 45, Ilhabela - SP","rota":"M0 0L-32 -13L-109 -66L-107 -69L-201 -136L-204 -133L-234 -155L-279 -184L-277 -186L-278 -187","pontos":[{"t":"praia","n":"Praia do Perequê","c":"Praia do Perequê","x":-279,"y":-188,"min":5},{"t":"mercado","n":"Supermercado do Frade","c":"Supermercado","x":72,"y":-302,"min":5},{"t":"farmacia","n":"Drogaria São Paulo","c":"Farmácia","x":37,"y":-87,"min":2},{"t":"feira","n":"Mercado do Peixe","c":"Mercado do Peixe","x":-109,"y":-366,"min":7}]},{"x":46,"y":467,"praia":5,"mercado":2,"balsa":4,"end":"Rua José Dias Barbosa, 83, Ilhabela - SP","rota":"M0 0L-21 21L-44 -3L-162 -93L-116 -160L-151 -184L-120 -199","pontos":[{"t":"praia","n":"Praia do Perequê","c":"Praia do Perequê","x":-119,"y":-197,"min":5},{"t":"mercado","n":"Supermercado do Frade","c":"Supermercado","x":8,"y":-56,"min":2},{"t":"farmacia","n":"Farma Conde","c":"Farmácia","x":38,"y":-5,"min":1},{"t":"feira","n":"Mercado do Peixe","c":"Mercado do Peixe","x":-173,"y":-120,"min":4}]}];
UNIDADES.forEach((u, i) => { u.local = LOCAIS[i]; });

const ICONES = {"remos": "data:image/png;base64,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", "barco": "data:image/png;base64,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", "coqueiros": "data:image/png;base64,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", "pescador": "data:image/png;base64,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", "gaivotas": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAABaCAYAAADXRuh5AAAFR0lEQVR4nO3dIXAdVRTG8f8yDK+CRJAKiqoARJqaqqioCqaCRnUqUCgUGGpQxQQDBkwUNcFUBYcIJkVEMYhMRUBARUEUBK1oKniIzaMZ+vLydu855967+X4zO51O++499+w5u5vdl/dARERERMRFAzwCngF/AQ+AX4AfgLsZ4yrNGvAusHy0vQYsHP3bGPgDuAnsZonO3o/A68ArtLXxgLY+fgK+YzjrTNUA14F3aOviTdq8NUf//hh4Arwx7cXjDtsWMHJaRAneAvbolpPJdiNDvF76rP92jkADrdOepPrkZqo+A022Tdu1ZbFNWg5mJrdSFvl4LzxqWyP6N5p749XahFvYrXuIjbeJbW5quhr4m6C1WxfgmHIvRz3WOrSmm/DI06PQFcxvnQy14TXhGFjtnwszF/Bd41Ab74Dh5+xjfNe4PWty76Ic0xZ/tFFCvF22pagFZRCRvxyudYzRZW0rQUFEJjlqPbkKJ8pDYnJ4ELUg53Uc33bmCWY3MKDt+XPUmfelw1lquonIfK45riPqIJJUG7dLDWwG73h3aJ/znXXWdzy9a6MJiHfDOOb/rDsF/IFBbF43T2p6PJLTBuU2n9dBIsszyrWewXok2fp5nJotjXUTppxJrGvU9Flkc/p/mekfgzEmuo5jdVQEuAzsG4531i1h+8wuZ21Y1bcLqzPPvHKfaWV+0fvKYq69nmudm3U3H5B+A+K0mCwapuij2EBF7LdqasNrktQEnBRX6rgXgd8Sx5D+RsDTxDG8aiP0YPyS07gNsJjw+mlJTEnsHdqY1HR5HdLuh1sJY1jXxmUyXAFFTLgPXOr52kl8KYnVZWW5LPZrlbXhdcY7biVhnjHtndM+Jmc5KVcDfNTztSk3yN4mc21ETx51J3GR9tfupR5RtVHEwTjijHdcA3wTMIearj7eDfFzwBzFW8L+nQXuz14kxJfY18bV0BVUwCqxH0YHLq4s35YoJ0hNrH5jYJgsfqugWKVc8/ZNUinxi59B1kb0zZWT9ElS0YkVM4OsjVIaD7olq/jEiqnB1UZJjQfzJa2KxIq5QdVGaY0Hs5NXTWLFxWBqo8TGg+lJrCqx4ka1EUCPDOQkxT8yqF0Jn0Yt5dHBWERERERERERERERERERERERERERERERERERERERERAZAHxLz3OfA8rG/3weeHP15D/g9R1CFWgCu0+ZrGXiV57m7DzwDruUJTWrT9XP5HwI3skQaZwHYot/3FowyxCsVsvhmmrXwqO19jb6lRwK9j91XQ42BK7HhJ9nEdu07seFL7SyLb7Lth66gG4/16mw3h1I/STqXbx3GvERZBXmBsuI5k3RX80URBZkr70NeW1V0xnvR9wFzjIHdgHmOz6cznBTP62efaduK4zo+CV6LiJlV2hsktRWtd7y/Alcd4hY50V3Kbb4rTrFtG8UnYsLqgfNk20iIZc84lq2EWGQG3YGyMwKeGo7Xdd9YXq6eB/40HE/+R43nw6oJ5t0/0fNJIiXal0VDnLaPIuYQY3qO56sBziWOMauxUpvuHGq6LNR4/g5pi/vThDGmNVhK031FG9NhwhiSQEe7eCkNM9lfFmNIRjrjxWuAWz1fm/K87zPUdMXQjsjL4x0r02g/F0ZnvLwiGkJNVyA1Xn4N8IXDuHdQ04mcahW7t3rpE74KpyNieVJ/7lsEHlsEIn7UeGXq23zan5XQz3hl6tNAarqKqPHK1aWR1HSVUeOVbZ6GUtNVSI1XvlmNpaarlBqvDtMaTE0nEsTys1kko5dzByCdnKf9JGgREREREREREZGz61+p2kT9L9CVewAAAABJRU5ErkJggg=="};
const SVGS = { logo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3542.7 2473.4 1358.1 307.2" fill="currentColor" role="img" aria-label="Âncora"><g class="sim"><path d="M-3380.56,2730.47c-11-13.28-34.71-38.31-73.52-54.69-36.9-15.58-69.54-15.85-86.61-14.8,4.63,15,12.96,29.69,12.96,29.69,0,0,21.6,4.26,27.53,5.86,46.89,12.59,88.42,45.34,119.49,81.7v.32c.05-.05.1-.1.15-.16.04.05.09.1.14.16v-.32c31.08-36.36,72.61-69.11,119.5-81.7,5.92-1.59,27.8-5.79,27.8-5.79,0,0,7.85-13.49,13.09-29.83-16.75-1.22-50.12-1.32-87.4,14.45-39,16.5-62.51,41.97-73.13,55.11Z"></path><path d="M-3387.9,2475.74c24.21-3.2,49.32,13.79,57.02,36.57,17.41,51.53-44.38,94.4-85.71,58.13-34.87-30.61-16.53-88.73,28.69-94.7ZM-3363.37,2512.13c-18.32-18.35-50.98.87-41.29,27.51,8.57,23.58,45.78,19.46,47.64-6.89.51-7.23-1.06-15.32-6.35-20.62Z"></path><rect x="-3458.67" y="2613.24" width="155.3" height="30.18"></rect></g><g class="acento" style="fill:var(--sol,#ed6938)"><path d="M-3033.58,2699.4h-32.31v-22.61c-10.29,16.76-29.73,25-50.03,25-34.59,0-71.76-24.21-71.76-71.82s38.6-72.08,77.19-72.08,76.91,23.94,76.91,72.08v69.42ZM-3126.21,2537.4h-29.16l35.16-34.84h20.02l35.16,34.84h-29.16l-16.01-15.96-16.01,15.96ZM-3065.89,2629.97c0-23.94-18.58-43.63-44.31-43.63s-44.31,19.69-44.31,43.63,18.59,43.62,44.31,43.62,44.31-19.41,44.31-43.62Z"></path></g><g class="letras"><path d="M-2857.43,2626.25v73.15h-32.59v-75.81c0-25.8-17.44-38.57-39.46-38.57s-39.45,12.77-39.45,38.57v75.81h-32.31v-73.15c0-45.75,32.31-68.36,71.76-68.36s72.05,22.61,72.05,68.36Z"></path><path d="M-2749.84,2674.13c16.58,0,33.16-8.51,39.45-23.68l32.59-.27c-7.15,34.05-39.17,51.87-71.76,51.87-37.45,0-75.47-23.67-75.47-72.08s38.03-72.08,75.47-72.08c32.59,0,64.61,17.82,71.76,51.86l-32.59-.26c-6.29-15.43-22.87-23.94-39.45-23.94-21.16,0-42.03,13.57-42.03,44.42s20.87,44.16,42.03,44.16Z"></path><path d="M-2490.44,2629.97c0,39.9-32.59,72.08-77.48,72.08s-77.48-32.18-77.48-72.08,32.59-72.08,77.48-72.08,77.48,32.45,77.48,72.08ZM-2523.6,2629.97c0-23.94-18.59-43.63-44.31-43.63s-44.32,19.69-44.32,43.63,18.59,43.62,44.32,43.62,44.31-19.41,44.31-43.62Z"></path><path d="M-2373.13,2560.28v26.87h-20.02c-23.15,0-32.59,9.84-32.59,33.25v79h-32.3v-79c0-38.57,18.58-60.11,58.32-60.11h26.59Z"></path><path d="M-2186.63,2699.39h-32.31v-22.61c-10.29,16.76-29.73,25-50.03,25-34.59,0-71.76-24.21-71.76-71.82s38.6-72.08,77.19-72.08,76.91,23.94,76.91,72.08v69.42ZM-2218.94,2629.97c0-23.94-18.58-43.63-44.31-43.63s-44.31,19.69-44.31,43.63,18.59,43.62,44.31,43.62,44.31-19.41,44.31-43.62Z"></path></g></svg>`, wordmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3189.7 2500.6 1005.1 203.5" fill="currentColor" aria-hidden="true"><g class="acento" style="fill:var(--sol,#ed6938)"><path d="M-3033.58,2699.4h-32.31v-22.61c-10.29,16.76-29.73,25-50.03,25-34.59,0-71.76-24.21-71.76-71.82s38.6-72.08,77.19-72.08,76.91,23.94,76.91,72.08v69.42ZM-3126.21,2537.4h-29.16l35.16-34.84h20.02l35.16,34.84h-29.16l-16.01-15.96-16.01,15.96ZM-3065.89,2629.97c0-23.94-18.58-43.63-44.31-43.63s-44.31,19.69-44.31,43.63,18.59,43.62,44.31,43.62,44.31-19.41,44.31-43.62Z"></path></g><g class="letras"><path d="M-2857.43,2626.25v73.15h-32.59v-75.81c0-25.8-17.44-38.57-39.46-38.57s-39.45,12.77-39.45,38.57v75.81h-32.31v-73.15c0-45.75,32.31-68.36,71.76-68.36s72.05,22.61,72.05,68.36Z"></path><path d="M-2749.84,2674.13c16.58,0,33.16-8.51,39.45-23.68l32.59-.27c-7.15,34.05-39.17,51.87-71.76,51.87-37.45,0-75.47-23.67-75.47-72.08s38.03-72.08,75.47-72.08c32.59,0,64.61,17.82,71.76,51.86l-32.59-.26c-6.29-15.43-22.87-23.94-39.45-23.94-21.16,0-42.03,13.57-42.03,44.42s20.87,44.16,42.03,44.16Z"></path><path d="M-2490.44,2629.97c0,39.9-32.59,72.08-77.48,72.08s-77.48-32.18-77.48-72.08,32.59-72.08,77.48-72.08,77.48,32.45,77.48,72.08ZM-2523.6,2629.97c0-23.94-18.59-43.63-44.31-43.63s-44.32,19.69-44.32,43.63,18.59,43.62,44.32,43.62,44.31-19.41,44.31-43.62Z"></path><path d="M-2373.13,2560.28v26.87h-20.02c-23.15,0-32.59,9.84-32.59,33.25v79h-32.3v-79c0-38.57,18.58-60.11,58.32-60.11h26.59Z"></path><path d="M-2186.63,2699.39h-32.31v-22.61c-10.29,16.76-29.73,25-50.03,25-34.59,0-71.76-24.21-71.76-71.82s38.6-72.08,77.19-72.08,76.91,23.94,76.91,72.08v69.42ZM-2218.94,2629.97c0-23.94-18.58-43.63-44.31-43.63s-44.31,19.69-44.31,43.63,18.59,43.62,44.31,43.62,44.31-19.41,44.31-43.62Z"></path></g></svg>`, simbolo:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-7398.7 2556.0 324.7 307.2" fill="currentColor" aria-hidden="true"><path d="M-7236.57,2813.11c-11-13.28-34.71-38.31-73.52-54.69-36.9-15.58-69.54-15.85-86.61-14.8,4.63,15,12.96,29.69,12.96,29.69,0,0,21.6,4.26,27.53,5.86,46.89,12.59,88.42,45.34,119.49,81.7v.32c.05-.05.1-.1.15-.16.04.05.09.1.14.16v-.32c31.08-36.36,72.61-69.11,119.5-81.7,5.92-1.59,27.8-5.79,27.8-5.79,0,0,7.85-13.49,13.09-29.83-16.75-1.22-50.12-1.32-87.4,14.45-39,16.5-62.51,41.97-73.13,55.11Z"></path><path d="M-7243.91,2558.39c24.21-3.2,49.32,13.79,57.02,36.57,17.41,51.53-44.38,94.4-85.71,58.13-34.87-30.61-16.53-88.73,28.69-94.7ZM-7219.37,2594.78c-18.32-18.35-50.98.87-41.29,27.51,8.57,23.58,45.78,19.46,47.64-6.89.51-7.23-1.06-15.32-6.35-20.62Z"></path><rect x="-7314.68" y="2695.89" width="155.3" height="30.18"></rect></svg>`, assinatura:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="3170.1 -506.5 771.0 114.4" fill="currentColor" aria-hidden="true"><path d="M3201.45-501.56l.45.23h1.13c0,.38.3.98.9,1.8,0,.68-3.15,7.81-9.46,21.4-4.96,10.55-8.94,20.61-11.94,30.18-.71,3.87-1.61,7.32-2.7,10.36-1.2,4.54-1.8,8.45-1.8,11.71v2.93c0,4.05,1.35,6.08,4.05,6.08h.9c2.06,0,3.87-.68,5.41-2.03.79,0,2.37-1.05,4.73-3.15,2.29-1.95,3.64-2.93,4.05-2.93,0-.71,1.73-2.59,5.18-5.63,0-.3,1.13-1.58,3.38-3.83,6.87-8.22,11.38-14.38,13.52-18.47l-.23-.45c1.05-.79,1.58-1.31,1.58-1.58v-.68c1.65-1.43,2.48-2.33,2.48-2.7,1.01-1.01,1.91-2.37,2.7-4.05,2.97-4.81,4.62-7.21,4.96-7.21s.56-.37.68-1.13c.34,0,.79-.75,1.35-2.25.26,0,.71-.45,1.35-1.35l-.23-.45c.6-.56,1.65-2.37,3.15-5.41.71-.34,1.54-1.54,2.48-3.6,1.2-2.29,2.33-4.09,3.38-5.41l-.23-.45c2.82-5.41,4.84-8.63,6.08-9.69.11,0,.56-.15,1.35-.45,1.8.45,2.7,1.35,2.7,2.7,0,.41-1.2,2.14-3.6,5.18,0,.34-.75,1.54-2.25,3.6-2.85,5.56-4.88,10.21-6.08,13.97-1.2,2.85-2.1,7.13-2.7,12.84v2.48l-.23,1.35c-.15,15.84,1.25,25.19,4.2,28.04,2.95,2.85,5.75,4.28,8.42,4.28,0,.15.68.3,2.03.45,2.06,0,4.99-.75,8.79-2.25.37,0,1.28-.53,2.7-1.58,2.85-1.43,4.51-2.4,4.96-2.93,1.2-.6,1.8-.98,1.8-1.13.04-.15.86-.68,2.48-1.58l-.23-1.13c.64-.19,1.31-.71,2.03-1.58l1.13.23.45-.23c.26.15.56.23.9.23.15-.53.23-.83.23-.9-.3-.15-.53-.23-.68-.23.45-1.65,1.05-2.48,1.8-2.48l-.23-.45v-.23h.45v1.13l-.9.9v.45l1.13.23h.23c0-.45.15-.68.45-.68h.23c-1.16,2.07-2.22,3.34-3.15,3.83-.15.6-.53.9-1.13.9,0-.15-.08-.23-.23-.23l-.68.9.23,1.13c-3.72,3.64-6.72,5.97-9.01,6.98-.41.53-1.61,1.13-3.6,1.8,0,.68-2.93,1.65-8.79,2.93-.19.15-2.14.04-5.86-.34-3.57-.86-6.88-3.01-9.94-6.45-3.06-3.44-4.68-11.37-4.87-23.79.04-3.57-.06-5.35-.28-5.35.3-.49.45-.94.45-1.35l-.23-.45c.3-.56.45-1.16.45-1.8,0-.15-.08-.23-.23-.23.3-.79.45-1.39.45-1.8l-.23-.9c.15-.45.3-.68.45-.68l-.23-.45v-.45c0-.53.07-1.2.23-2.03-.15-.3-.23-.53-.23-.68h-.23c-2.74,3.75-4.24,5.63-4.5,5.63h-.23v.23l.23,1.13c-1.54,1.24-2.59,2.89-3.15,4.96l-1.8,2.03c0,.15-.08.23-.23.23l.23.45c0,.3-.75.98-2.25,2.03,0,1.24-.83,2.74-2.48,4.5,0,.53-.98,1.88-2.93,4.05,0,.38-.98,1.58-2.93,3.6,0,.75-1.2,2.48-3.6,5.18,0,.49-1.65,2.37-4.96,5.63-7.66,8.18-13.22,12.84-16.67,13.97-.64.79-2.52,1.31-5.63,1.58-3.08,0-5.71-1.5-7.88-4.5-.68-1.39-1.2-2.82-1.58-4.28.15-.3.23-.53.23-.68-.3-.49-.45-.94-.45-1.35v-2.48c0-.3.38-.45,1.13-.45v-.45c0-.23-.23-.45-.68-.68,0-4.2.53-6.68,1.58-7.43v-.9l-.45-.68,2.25-8.11,1.58-4.73-.23-1.35c.45-.37,1.2-2.03,2.25-4.96.53,0,.9-1.5,1.13-4.5.3-.19,1.05-1.84,2.25-4.96h-.23c0-.23.6-1.2,1.8-2.93-.15-.3-.23-.53-.23-.68,1.73-2.03,2.7-4.28,2.93-6.76.37-.45.75-.68,1.13-.68l-.23-1.13c.45,0,.9-.75,1.35-2.25l.45-.23-.23-.45c1.5-3.72,2.55-5.59,3.15-5.63.34-1.65.86-2.48,1.58-2.48v-.23l-.45-.68c2.55-5.03,3.83-7.73,3.83-8.11,1.01-3,1.91-4.5,2.7-4.5ZM3213.83-442.32v.68h.23v-.68h-.23ZM3236.59-477.46h.45v-.45c-.3.04-.45.19-.45.45ZM3273.98-435.45v.68h.23c1.5-.41,2.25-.71,2.25-.9v-.23h-1.35c-.38.3-.75.45-1.13.45ZM3281.64-444.68l.23.45v.23c-.41,0-.86.23-1.35.68v-1.13l1.13-.23ZM3280.96-441.3h.45v.23h-.45v-.23Z"></path><path d="M3292.67-471.15c1.84.56,2.8,1.54,2.87,2.93-1.69,5.26-2.48,8.94-2.37,11.04l.11,1.13c.04.9.45,1.35,1.24,1.35h.39c2.48-.15,6.12-2.7,10.93-7.66,1.5-1.65,2.98-3.68,4.45-6.08l.23.45c.08,1.16-.11,2.14-.56,2.93v.45h.79c-1.5,2.59-3.49,5.26-5.97,8-3.64,4.13-6.7,6.19-9.18,6.19-2.63,0-4.52-1.35-5.69-4.05-.23-1.01-.36-1.84-.39-2.48l-.06-1.13c.37-2.25,1.11-4.96,2.2-8.11-.26-.15-.47-.23-.62-.23-3.49,1.95-6.85,5.93-10.08,11.94-.71.6-1.28.9-1.69.9h-.34c-.71,0-1.26-.45-1.63-1.35l-.06-.45c-.08-1.28.92-2.93,2.98-4.96-.04-.26.34-1.46,1.13-3.6l-.23-2.7c0-.37-.58-.6-1.75-.68-4.43,1.39-10.21,6.8-17.34,16.22-1.2,3.6-2.31,5.41-3.32,5.41h-.39c-1.43-.34-2.18-1.09-2.25-2.25,3.38-5.03,5.48-10.14,6.31-15.32-.71-3.12-.58-5.03.39-5.74h2.03l1.35,1.86c-.26,3.45-.38,5.35-.34,5.69v.23h.39c2.93-3.53,5.42-5.86,7.49-6.98-.04-.37,1.52-1.13,4.67-2.25h1.18c2.21,0,3.98,1.35,5.29,4.05h.17c3.9-3.15,6.46-4.73,7.66-4.73Z"></path><path d="M3358.56-493.51c2.4,0,3.68.98,3.83,2.93-.83,5.37-2.2,9.12-4.11,11.26-2.37,3.49-5.88,6.72-10.53,9.69-4.96,2.03-7.4,3.45-7.32,4.28-.75,1.31-1.35,4.47-1.8,9.46l.17,2.03c.15,1.8,1.2,2.7,3.15,2.7h.9c3.12,0,6.46-1.3,10.02-3.89,2.4-1.5,4.62-3.25,6.65-5.24.26-.64,1.99-2.25,5.18-4.84l2.2-3.15c.64.23.96.45.96.68-1.05,4.17-3.66,8.03-7.83,11.6-5.93,5.78-11.41,8.67-16.44,8.67h-1.13c-3.64,0-6.27-1.95-7.88-5.86l-.23-2.7c.3-3.98,1-6.83,2.08-8.56-.15-1.69-.06-3.05.28-4.08.34-1.03.84-1.55,1.52-1.55-.04-.53.62-1.73,1.97-3.6.04-1.69,1.91-4.69,5.63-9.01,5.67-7.21,9.91-10.81,12.73-10.81ZM3343.53-472.11l.45.23c4.84-2.51,8.56-5.82,11.15-9.91,1.05-.83,2.29-3.3,3.72-7.43l-.06-1.13c-1.39,0-4.15,2.33-8.28,6.98-4.32,5.71-6.64,9.46-6.98,11.26Z"></path><path d="M3368.7-469.41c.64,0,1.39.3,2.25.9,0,.53-1.35,2.93-4.05,7.21-.64,1.28-1.09,3.38-1.35,6.31.3.68.6,1.05.9,1.13,1.5,0,4.51-1.88,9.01-5.63,2.33-2.29,5.03-5.29,8.11-9.01,1.05-.3,1.95-.45,2.7-.45h.68c.23,0,.53.38.9,1.13,0,.3-.9,1.5-2.7,3.6-.6.86-1.35,2.67-2.25,5.41v2.03c0,.19.37.56,1.13,1.13,2.21,0,6.68-3.45,13.4-10.36,1.2-1.65,2.33-2.7,3.38-3.15h.23c.3.04.45.19.45.45-1.13,3.49-4.17,7.92-9.12,13.29-2.85,2.55-5.63,3.83-8.33,3.83h-.23c-2.67,0-4.69-1.88-6.08-5.63-4.73,4.66-7.81,6.98-9.24,6.98-1.05.3-1.95.45-2.7.45-2.48,0-4.05-1.65-4.73-4.96v-.23c0-4.47,2.03-9.12,6.08-13.97.3,0,.83-.15,1.58-.45Z"></path><path d="M3410.03-472.67c3.04.71,4.56,1.82,4.56,3.32.45,0,.77.88.96,2.65,0,3.83-.79,9.57-2.37,17.23,1.31-.83,2.42-1.71,3.32-2.65.9-.94,2.5-2.35,4.79-4.22,1.91-1.91,3.31-3.27,4.2-4.05.88-.79,2.19-2.67,3.91-5.63,1.99-1.61,3.21-2.01,3.66-1.18,0,.19.07.28.23.28,0,1.28-1.12,3.33-3.35,6.17-2.23,2.83-4.87,5.87-7.91,9.09-4.99,4.02-8.6,7.28-10.81,9.8-1.99,8.15-3.66,13.06-5.01,14.75,0,.26-.71,2.01-2.14,5.24,0,.34-.71,1.54-2.14,3.6-1.5,3.38-3.58,7.24-6.25,11.6-2.67,4.35-5.68,7.51-9.04,9.46-3.36,1.95-5.99,2.56-7.88,1.83-1.9-.73-2.91-2.55-3.04-5.46-.13-2.91.61-6.86,2.22-11.85,1.61-4.99,5.56-10.98,11.83-17.96,7.32-7.43,13.36-12.22,18.13-14.36l2.87-13.8v-.73h-.51c-3.04,4.13-6.46,6.19-10.25,6.19-3.64-.68-5.46-2.35-5.46-5.01v-.96c0-4.54,4.45-8.84,13.35-12.9,1.16-.15,1.88-.3,2.14-.45ZM3382.04-399.01c2.97-.71,6.78-4.34,11.43-10.87,4.09-6.23,6.76-11.49,8-15.77,1.09-1.35,1.63-2.7,1.63-4.05.41-.19,1.63-3.79,3.66-10.81l-7.72,5.86c-2.89,2.44-6.38,6.44-10.47,11.99-3.98,4.69-6.8,9.99-8.48,15.88-1.67,5.89-1.02,8.48,1.94,7.77ZM3398.83-459.78v1.91c.15.45.62.68,1.41.68h1.69c3.45-2.03,6.23-4.81,8.33-8.33l-.23-2.14.23-1.69h-.96c-3,.53-6.18,2.76-9.52,6.7-.64,1.2-.96,2.16-.96,2.87Z"></path><path d="M3440.72-472.28c1.5,0,3.23.9,5.18,2.7,1.95,0,2.93.68,2.93,2.03.15,0,.23.08.23.23-2.1,3.79-3.15,7.02-3.15,9.69v.68c.3,1.35.68,2.03,1.13,2.03h1.35c2.1,0,5.63-2.85,10.59-8.56,0-.41,1.05-1.31,3.15-2.7.3-1.09.9-1.91,1.8-2.48h.23c0,.41.15.86.45,1.35-.9,2.63-2.23,5.07-4,7.32-4.99,6.53-9.22,9.8-12.67,9.8-3.12,0-5.44-1.8-6.98-5.41v-.45h-.68c-5.48,4.66-9.76,6.98-12.84,6.98h-.68c-2.93,0-4.81-1.58-5.63-4.73v-.45c0-4.09,3.08-8.37,9.24-12.84l6.31-4.05c0-.53,1.35-.9,4.05-1.13ZM3426.08-454.93v1.58c.04.3.19.45.45.45h.45c2.74,0,6.42-2.18,11.04-6.53,2.85-2.93,4.28-5.18,4.28-6.76v-.23c0-1.8-.68-2.7-2.03-2.7-3.64,1.2-7.55,4.05-11.71,8.56-1.39,1.99-2.21,3.87-2.48,5.63Z"></path><path d="M3478.79-475.49c.79,0,1.56.96,2.31,2.87,0,1.58-2.05,5.46-6.14,11.66-1.39,2.97-2.08,5.33-2.08,7.1,0,.64.37.96,1.13.96h.96c3.42-1.09,8.62-5.44,15.6-13.06,1.16-.23,1.75-.86,1.75-1.91.04-.26.17-.39.39-.39h.17c.19,0,.37.19.56.56v.56c0,.6-.69,1.75-2.08,3.43-.56,1.77-3.02,4.79-7.38,9.07-2.89,2.63-5.84,4.49-8.84,5.58h-.73c-3,0-4.99-1.22-5.97-3.66,0-.37-.06-.56-.17-.56.11-.49.24-.73.39-.73l-.23-.39v-1.35c.41-2.4,2.21-5.72,5.41-9.97,0-.3.62-1.18,1.86-2.65.79-1.46,1.18-2.42,1.18-2.87v-.23h-.79c-3.04,1.69-5.78,2.53-8.22,2.53h-.17c-.15,0-1.18,1.28-3.1,3.83-.41.23-.79.34-1.13.34h-.17c-.68,0-1.26-.51-1.75-1.52.08-.68.66-1.37,1.75-2.08,0-.23.11-.54.34-.96l-1.29-1.52v-.23c0-.71.43-1.35,1.29-1.91h1.35l2.87-.73,1.35.96c3.38-.79,6.06-1.63,8.05-2.53.53,0,1.03-.06,1.52-.17Z"></path><path d="M3521.48-470.59c1.69.49,2.61,1.31,2.76,2.48-.26,3.6-.36,5.63-.28,6.08h.45c.34,0,2.37-1.73,6.08-5.18.34,0,1.39-.53,3.15-1.58l.45.23c1.39-.9,2.98-1.35,4.79-1.35,1.35,0,3.15,1.05,5.41,3.15l.96,2.25c.45,3.38-1.58,6.83-6.08,10.36-1.88,1.39-4.9,2.97-9.07,4.73l.06.23c.07.56,1.26.94,3.55,1.13h.68c10.06-2.7,17.83-8.15,23.31-16.33,1.01-1.95,2.38-2.93,4.11-2.93v.23c-.75,2.97-2.61,6.36-5.58,10.19-5.82,5.97-11.45,9.76-16.89,11.38-5.67,1.46-10.04,1.07-13.12-1.18-2.4-2.55-3.7-3.83-3.89-3.83-1.5,5.78-2.83,10.44-4,13.97-1.76,6.57-4.04,11.53-6.81,14.87-3.19,4.05-5.33,6.08-6.42,6.08h-.9c-1.69-.3-2.63-1.13-2.82-2.48l-.06-.68c.41-.45.71-1.5.9-3.15,1.69-6.04,3.79-11.75,6.31-17.12,1.05,0,1.45-.9,1.18-2.7.86-.34,1.28-.64,1.24-.9l-.11-1.13c.19,0,1.56-2.1,4.11-6.31l2.03-1.8c-.11-.71.39-1.99,1.52-3.83.53-1.46.81-3.87.84-7.21.23,0,.36-.68.39-2.03l-.28-.45c-.11-3.45.56-5.18,2.03-5.18ZM3506.5-432.07l.06.45h.23c.3,0,.43-.15.39-.45l-.06-.45h-.23c-.3.04-.43.19-.39.45ZM3507.17-428.69l.17,1.13c.08.53.02,1.88-.17,4.05h.23c2.85-3.23,4.98-7.66,6.36-13.29,1.2-3.19,1.9-5.37,2.08-6.53h-.45l-3.94,5.86c-.56,1.61-1.6,3.57-3.1,5.86.15,1.05-.24,2.03-1.18,2.93ZM3512.8-444.01l.06.23c.08.3.24.45.51.45l-.11-.68h-.45ZM3522.32-452.12h.23c.34,0,1.05-.23,2.14-.68,1.09.3,2.03.45,2.82.45h.45c1.13,0,4-1.43,8.62-4.28,2.25-2.74,3.44-5.14,3.55-7.21l-.11-.9c-.15-1.2-.83-1.8-2.03-1.8-3.38.53-8.2,4.36-14.47,11.49-.83,1.58-1.22,2.55-1.18,2.93Z"></path><path d="M3570.24-472.28c1.5,0,3.23.9,5.18,2.7,1.95,0,2.93.68,2.93,2.03.15,0,.23.08.23.23-2.1,3.79-3.15,7.02-3.15,9.69v.68c.3,1.35.68,2.03,1.13,2.03h1.35c2.1,0,5.63-2.85,10.59-8.56,0-.41,1.05-1.31,3.15-2.7.3-1.09.9-1.91,1.8-2.48h.23c0,.41.15.86.45,1.35-.9,2.63-2.23,5.07-4,7.32-4.99,6.53-9.22,9.8-12.67,9.8-3.12,0-5.44-1.8-6.98-5.41v-.45h-.68c-5.48,4.66-9.76,6.98-12.84,6.98h-.68c-2.93,0-4.81-1.58-5.63-4.73v-.45c0-4.09,3.08-8.37,9.24-12.84l6.31-4.05c0-.53,1.35-.9,4.05-1.13ZM3555.6-454.93v1.58c.04.3.19.45.45.45h.45c2.74,0,6.42-2.18,11.04-6.53,2.85-2.93,4.28-5.18,4.28-6.76v-.23c0-1.8-.68-2.7-2.03-2.7-3.64,1.2-7.55,4.05-11.71,8.56-1.39,1.99-2.21,3.87-2.48,5.63Z"></path><path d="M3608.31-475.49c.79,0,1.56.96,2.31,2.87,0,1.58-2.05,5.46-6.14,11.66-1.39,2.97-2.08,5.33-2.08,7.1,0,.64.37.96,1.13.96h.96c3.42-1.09,8.62-5.44,15.6-13.06,1.16-.23,1.75-.86,1.75-1.91.04-.26.17-.39.39-.39h.17c.19,0,.37.19.56.56v.56c0,.6-.69,1.75-2.08,3.43-.56,1.77-3.02,4.79-7.38,9.07-2.89,2.63-5.84,4.49-8.84,5.58h-.73c-3,0-4.99-1.22-5.97-3.66,0-.37-.06-.56-.17-.56.11-.49.24-.73.39-.73l-.23-.39v-1.35c.41-2.4,2.21-5.72,5.41-9.97,0-.3.62-1.18,1.86-2.65.79-1.46,1.18-2.42,1.18-2.87v-.23h-.79c-3.04,1.69-5.78,2.53-8.22,2.53h-.17c-.15,0-1.18,1.28-3.1,3.83-.41.23-.79.34-1.13.34h-.17c-.68,0-1.26-.51-1.75-1.52.08-.68.66-1.37,1.75-2.08,0-.23.11-.54.34-.96l-1.29-1.52v-.23c0-.71.43-1.35,1.29-1.91h1.35l2.87-.73,1.35.96c3.38-.79,6.06-1.63,8.05-2.53.53,0,1.03-.06,1.52-.17Z"></path><path d="M3631.23-472.28c1.5,0,3.23.9,5.18,2.7,1.95,0,2.93.68,2.93,2.03.15,0,.23.08.23.23-2.1,3.79-3.15,7.02-3.15,9.69v.68c.3,1.35.68,2.03,1.13,2.03h1.35c2.1,0,5.63-2.85,10.59-8.56,0-.41,1.05-1.31,3.15-2.7.3-1.09.9-1.91,1.8-2.48h.23c0,.41.15.86.45,1.35-.9,2.63-2.23,5.07-4,7.32-4.99,6.53-9.22,9.8-12.67,9.8-3.12,0-5.44-1.8-6.98-5.41v-.45h-.68c-5.48,4.66-9.76,6.98-12.84,6.98h-.68c-2.93,0-4.81-1.58-5.63-4.73v-.45c0-4.09,3.08-8.37,9.24-12.84l6.31-4.05c0-.53,1.35-.9,4.05-1.13ZM3616.59-454.93v1.58c.04.3.19.45.45.45h.45c2.74,0,6.42-2.18,11.04-6.53,2.85-2.93,4.28-5.18,4.28-6.76v-.23c0-1.8-.68-2.7-2.03-2.7-3.64,1.2-7.55,4.05-11.71,8.56-1.39,1.99-2.21,3.87-2.48,5.63Z"></path><path d="M3707.09-473.52c0,.3.07.45.23.45-1.73,4.17-3.08,6.8-4.05,7.88-1.39,1.8-2.22,3.15-2.48,4.05-8.37,8.86-14.45,13.29-18.25,13.29-2.4,0-3.98-1.58-4.73-4.73v-.23c0-2.59,1.58-8.45,4.73-17.57,1.5-.45,2.48-.68,2.93-.68.6,0,.9.68.9,2.03-1.95,5.18-3.38,10.44-4.28,15.77v.68c0,.23.23.45.68.68,2.59,0,7.4-3.75,14.42-11.26.41-.04,1.76-1.76,4.05-5.18.26,0,1.84-1.73,4.73-5.18h1.13Z"></path><path d="M3714.8-470.36l.73-.17c4.54-.37,7.04.15,7.49,1.58.23-.07.88,1.03,1.97,3.32.23.71.15,2.22-.23,4.5l-.06-.17h-.06c.9-.19,4.19-2.46,9.85-6.81.71-.45,1.31-.73,1.8-.84.56,1.8-2.44,5.35-9.01,10.64-1.88,1.2-3.47,1.95-4.79,2.25-2.74,2.82-4.84,4.71-6.31,5.69-.41.11-.9.3-1.46.56-3.27.79-6.06-.21-8.39-2.98-.49-.83-.96-1.75-1.41-2.76-1.5-4.73-.45-8.5,3.15-11.32,1.13-1.39,2.95-2.38,5.46-2.98-.04-.11.37-.28,1.24-.51ZM3708.55-457.58l.17.51c.71,2.33,1.54,3.59,2.48,3.77.68.19,1.52.15,2.53-.11,2.06-1.24,3.17-2.08,3.32-2.53v.06c-3.53-1.61-5.69-3.62-6.48-6.03-.11.04-.23-.15-.34-.56-.04-.83-.11-1.46-.23-1.91h-.06c-1.65,2.33-2.12,4.6-1.41,6.81ZM3714.58-462.87c1.24,2.78,2.89,3.9,4.96,3.38l.56-.11c1.16-1.58,1.71-3.12,1.63-4.62-1.01-2.55-2.22-3.66-3.6-3.32-.08-.23-.3-.28-.68-.17-2.74.68-3.7,2.29-2.87,4.84Z"></path><path d="M3754.9-493.51c2.4,0,3.68.98,3.83,2.93-.83,5.37-2.2,9.12-4.11,11.26-2.37,3.49-5.88,6.72-10.53,9.69-4.96,2.03-7.4,3.45-7.32,4.28-.75,1.31-1.35,4.47-1.8,9.46l.17,2.03c.15,1.8,1.2,2.7,3.15,2.7h.9c3.12,0,6.46-1.3,10.02-3.89,2.4-1.5,4.62-3.25,6.65-5.24.26-.64,1.99-2.25,5.18-4.84l2.2-3.15c.64.23.96.45.96.68-1.05,4.17-3.66,8.03-7.83,11.6-5.93,5.78-11.41,8.67-16.44,8.67h-1.13c-3.64,0-6.27-1.95-7.88-5.86l-.23-2.7c.3-3.98,1-6.83,2.08-8.56-.15-1.69-.06-3.05.28-4.08.34-1.03.84-1.55,1.52-1.55-.04-.53.62-1.73,1.97-3.6.04-1.69,1.91-4.69,5.63-9.01,5.67-7.21,9.91-10.81,12.73-10.81ZM3739.86-472.11l.45.23c4.84-2.51,8.56-5.82,11.15-9.91,1.05-.83,2.29-3.3,3.72-7.43l-.06-1.13c-1.39,0-4.15,2.33-8.28,6.98-4.32,5.71-6.64,9.46-6.98,11.26Z"></path><path d="M3778.38-503.53l1.13.28,1.3-.28c.68.86,1.01,1.5,1.01,1.91,0,1.01-1.5,4.07-4.5,9.18.07.49.28.73.62.73h3.66c.75-.34,7.17-.98,19.26-1.91l3.55-.51,1.13-.28c1.31.19,2.46.28,3.44.28.3-.3,1.78-.56,4.45-.79.79.19,1.54.28,2.25.28h.9c.37,0,.68-.07.9-.23l.39.23c1.69-.37,2.83-.56,3.44-.56.83,0,1.73.19,2.7.56.6-.37,1.2-.56,1.8-.56h2.7c.37,0,.68-.07.9-.23.23.15.53.23.9.23h1.58c.64,0,1.24-.07,1.8-.23.56.15,1.16.23,1.8.23-2.1.23-.88.34,3.66.34-.04-.04.11-.06.45-.06.49-.34.92-.51,1.3-.51,2.18.15,3.44.23,3.77.23v-.17l1.63.45,7.43-.51,1.35.23,2.82-.51.23.56,2.82-.28h2.93c.26,0,.39.09.39.28-.08,0-.11-.09-.11-.28l2.42-.28c1.31.19,2.31.28,2.98.28v.84l-1.46-.84h1.41c.56,0,1.22-.09,1.97-.28l.45.28,3.43-.56,1.07.56c.23,0,.49-.09.79-.28.3,0,.45.09.45.28,1.61-.19,2.8-.28,3.55-.28h4.5l1.35-.28c.34.15.51.34.51.56.41,0,1.07-.17,1.97-.51l1.13.51c.3-.19.6-.09.9.28h.06v.73h.79c.15-1.05.32-1.58.51-1.58h5.29l.9,1.58h1.13c.19-.71.28-1.16.28-1.35.07,0,.11.11.11.34l-.51-.56c.83,0,1.86.53,3.1,1.58.45,0,.68-.28.68-.84h-.68l.56-.56.68-.11c.11,1.2.6,1.8,1.46,1.8,0-1.05-.73-1.48-2.2-1.29h3.72l-.34,1.29h.68c.56,0,1.11-.26,1.63-.79.41,0,.92.28,1.52.84l.68-.39-.28-.68v-.17c0,.11.04.17.11.17,0-.19.64.15,1.91,1.01h.9c0-.56.47-.99,1.41-1.29.23.15.54.23.96.23-.34.23-.19.34.45.34,0-.19.26-.11.79.23.11,0,.43-.09.96-.28h.84s.09-.13.28-.51h1.01c.04.08.06.38.06.9l.51.56c-.38,0-.88-.23-1.52-.68v-.34l.45.28c-1.58.49-2.42.73-2.53.73h-1.13c-.53,0-1.22-.08-2.08-.23l-.9.51c-.98-.19-1.78-.28-2.42-.28h-.28c-1.05.64-1.58.77-1.58.39-.49-.26-.94-.39-1.35-.39-.49.38-.84.56-1.07.56l-1.29-.34v.56h-1.46v-.51h-.45c-.3.38-1.39.64-3.27.79,0-.19-.34-.28-1.01-.28.04,0-.09,0-.39,0-1.46.38-2.52.56-3.15.56l-1.63-.28-.84.51-1.13-.23c-.38,0-1.35.17-2.93.51-2.1-.34-3.27-.69-3.49-1.07h-.39c-.49.53-.83.79-1.01.79-.49-.34-.96-.51-1.41-.51h-.23c-.3,0-1.35.43-3.15,1.3l-.39-.23h-5.01c-.56,0-1.22.08-1.97.23-.26-.15-.58-.23-.96-.23-.86,0-1.3.13-1.3.39-.41-.26-.96-.39-1.63-.39h-1.35c-.15,0-.75.17-1.8.51h-.9c-.34,0-1.01-.17-2.03-.51l-3.15.79c-.11,0-.32-.09-.62-.28-4.62.34-8.54.51-11.77.51h-.9c-.56,0-1.24.09-2.03.28l-1.07-.51-6.59.51-1.13-.28c-.56.23-.84.39-.84.51l-2.08-.23h-3.15c-.86,0-1.99.19-3.38.56-.45,0-.81-.09-1.07-.28l-7.72.51-1.35-.28c-1.13.38-1.88.56-2.25.56l-2.25-.28c-9.72.56-22.17,1.67-37.34,3.32.11.04-.38.94-1.46,2.7,0,.41-1.2,2.95-3.6,7.6-2.85,8.37-4.28,12.78-4.28,13.23,0,.19.07.45.23.79-.45,1.8-.68,3.64-.68,5.52v2.37c.37,2.22,1.63,3.32,3.77,3.32,2.44,0,6.98-2.2,13.63-6.59,1.95-1.2,3.68-2.42,5.18-3.66,1.95-2.1,4.2-5.05,6.76-8.84l.34.51c-.34,2.29-.96,4.34-1.86,6.14-4.81,5.82-8.2,9.16-10.19,10.02-.94.98-2.37,2.03-4.28,3.15-3.83,2.63-7.1,3.94-9.8,3.94-3.12-.45-5.39-1.56-6.81-3.32,0-.68-.37-1.54-1.13-2.59l.23-.45v-.56c0-.64-.23-1.28-.68-1.91v-.45l.45-.79v-1.58c0-.64.08-1.45.23-2.42-.15-.34-.23-.58-.23-.73.45-2.63,1.35-5.69,2.7-9.18.23-2.18.83-3.85,1.8-5.01.45-2.33,1.13-4.07,2.03-5.24,1.05-2.03,1.58-3.34,1.58-3.94-.23,0-.49-.09-.79-.28l-19.43,3.72c-1.31-.68-2.16-1.43-2.53-2.25l.23-1.35.56-1.24c12.35-2.7,20.93-4.32,25.74-4.84,2.29-3.3,3.43-5.44,3.43-6.42.56-.75,1.6-2.83,3.1-6.25l.34-.23ZM3897.82-495.31h1.24v1.18l-.62,1.41c-.64-.37-1.22-.56-1.75-.56,0-1.2.37-1.88,1.13-2.03ZM3913.25-495.14h-1.01v-1.18h1.01v1.18ZM3921.36-495.82v1.97h-1.91v-1.97h1.91ZM3924.29-494.63h-1.01v-1.18h1.01v1.18ZM3925.19-494.46c-.68-.11-1.01-.47-1.01-1.07h1.01v1.07ZM3926.32-494.46c.08,0,.11.15.11.45l1.97-.51h-2.65l.56.06ZM3930.03-495.08v.34c.07,0-.08.19-.45.56h-.11c-.38-.49-.19-.79.56-.9ZM3932.17-493.56h-1.01v-1.18h1.01v1.18ZM3937.24-494.92v-.11h.56v.23l.11.23c.34-.23.11-.34-.68-.34Z"></path><path d="M3803.16-472.28c1.5,0,3.23.9,5.18,2.7,1.95,0,2.93.68,2.93,2.03.15,0,.23.08.23.23-2.1,3.79-3.15,7.02-3.15,9.69v.68c.3,1.35.68,2.03,1.13,2.03h1.35c2.1,0,5.63-2.85,10.59-8.56,0-.41,1.05-1.31,3.15-2.7.3-1.09.9-1.91,1.8-2.48h.23c0,.41.15.86.45,1.35-.9,2.63-2.23,5.07-4,7.32-4.99,6.53-9.22,9.8-12.67,9.8-3.12,0-5.44-1.8-6.98-5.41v-.45h-.68c-5.48,4.66-9.76,6.98-12.84,6.98h-.68c-2.93,0-4.81-1.58-5.63-4.73v-.45c0-4.09,3.08-8.37,9.24-12.84l6.31-4.05c0-.53,1.35-.9,4.05-1.13ZM3788.52-454.93v1.58c.04.3.19.45.45.45h.45c2.74,0,6.42-2.18,11.04-6.53,2.85-2.93,4.28-5.18,4.28-6.76v-.23c0-1.8-.68-2.7-2.03-2.7-3.64,1.2-7.55,4.05-11.71,8.56-1.39,1.99-2.21,3.87-2.48,5.63Z"></path><path d="M3841.23-475.49c.79,0,1.56.96,2.31,2.87,0,1.58-2.05,5.46-6.14,11.66-1.39,2.97-2.08,5.33-2.08,7.1,0,.64.37.96,1.13.96h.96c3.42-1.09,8.62-5.44,15.6-13.06,1.16-.23,1.75-.86,1.75-1.91.04-.26.17-.39.39-.39h.17c.19,0,.37.19.56.56v.56c0,.6-.69,1.75-2.08,3.43-.56,1.77-3.02,4.79-7.38,9.07-2.89,2.63-5.84,4.49-8.84,5.58h-.73c-3,0-4.99-1.22-5.97-3.66,0-.37-.06-.56-.17-.56.11-.49.24-.73.39-.73l-.23-.39v-1.35c.41-2.4,2.21-5.72,5.41-9.97,0-.3.62-1.18,1.86-2.65.79-1.46,1.18-2.42,1.18-2.87v-.23h-.79c-3.04,1.69-5.78,2.53-8.22,2.53h-.17c-.15,0-1.18,1.28-3.1,3.83-.41.23-.79.34-1.13.34h-.17c-.68,0-1.26-.51-1.75-1.52.08-.68.66-1.37,1.75-2.08,0-.23.11-.54.34-.96l-1.29-1.52v-.23c0-.71.43-1.35,1.29-1.91h1.35l2.87-.73,1.35.96c3.38-.79,6.06-1.63,8.05-2.53.53,0,1.03-.06,1.52-.17Z"></path></svg>` };
const SETA = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>';

const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const linkUnidade = u => u.airbnb || CONFIG.reservaGeral;
document.documentElement.lang = 'pt-BR';

/* ── Conteúdo ── */
$$('[data-svg]').forEach(el => el.innerHTML = SVGS[el.dataset.svg]);
if (CONFIG.cothy) $('#credito').innerHTML = `Desenvolvido por <a href="${CONFIG.cothy}" target="_blank" rel="noopener">Cothy</a>`;
$$('[data-reserva]').forEach(a => { a.href = CONFIG.reservaGeral; a.setAttribute('aria-label', 'Reserve agora no Airbnb, abre em nova aba'); });
$$('[data-instagram]').forEach(a => a.href = CONFIG.instagram);
/* sem o site da Cubs na configuração, os links para ele saem */
$$('[data-cubs]').forEach(a => { if (CONFIG.cubs) a.href = CONFIG.cubs; else a.remove(); });

/* ── O resto do site monta logo depois que a foto da chegada aparece: num celular lento, a primeira coisa na tela é a ilha; as
   unidades, os mapas e a coreografia vêm no quadro seguinte (o que está acima, links e símbolos, entra na hora) ── */
function site(){
/* cada unidade: a foto de abertura carrega perto da hora; os outros ambientes só quando alguém pede. O último ambiente é o mapa do
   entorno, desenhado só quando alguém abre */
const MAPA_AMB = ['mapa', 'Localização', ''];
const PIN = '<svg viewBox="0 0 12 14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M6 13.2s4.6-4.3 4.6-7.8a4.6 4.6 0 0 0-9.2 0c0 3.5 4.6 7.8 4.6 7.8Z"/><circle cx="6" cy="5.4" r="1.7"/></svg>';
const rotaGoogle = l => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(l.end);
const ruaNum = l => l.end.replace(/,\s*Ilhabela.*$/, '');
const minutos = m => m < 1 ? 'ao lado' : `${m} ${m === 1 ? 'minuto' : 'minutos'} a pé`;
const entorno = u => `Mapa do entorno, ${u.nome} ${u.bairro}: ` + u.local.pontos.map(p => `${p.n}, ${minutos(p.min)}`).join('; ') + '.';
const tempoMapa = m => m < 1 ? 'ao lado' : `<b>${m}</b> min a pé`;
/* "à Rua", "à Avenida" (crase com as ruas e avenidas; "ao" com um nome masculino) */
const chegarRotulo = l => `Como chegar ${/^(Rua|Avenida|Av\.|Travessa|Estrada|Praça|Alameda|Rodovia)\b/.test(ruaNum(l)) ? 'à' : 'ao'} ${ruaNum(l)}: rota no Google Maps, abre em nova aba`;
/* a miniatura do mapa mostra a unidade e o caminho até a praia (com o mar e a areia à vista): o recorte fica entre as duas */
const miniVista = l => { const p = l.pontos.find(q => q.t === 'praia') || { x:0, y:0 }, w = Math.max(560, Math.abs(p.x) + 260), h = w / 1.5;
  return [Math.round(l.x + p.x / 2 - w / 2), Math.round(l.y + p.y / 2 - h / 2), Math.round(w), Math.round(h)]; };
const miniPin = l => { const [x0, y0, w, h] = miniVista(l); return [((l.x - x0) / w * 100).toFixed(1), ((l.y - y0) / h * 100).toFixed(1)]; };
$('#listaUnidades').outerHTML = UNIDADES.map((u,i) => { const l = u.local, n = i + 1; return `
  <article class="cap" id="u-${n}" aria-labelledby="t-u${n}">
    <div class="cap-midia">
      <div class="cap-foto" id="foto-u${n}">${u.galeria.map(([f,,alt,pos],k) => `<img ${k ? `data-src="img/${f}.webp"` : `src="img/${f}.webp"${i ? ' loading="lazy"' : ''}`} alt="${alt}" decoding="async"${pos ? ` style="object-position:${pos}"` : ''}${k ? '' : ' class="on"'}>`).join('')}<div class="cap-mapa" data-i="${i}"><svg class="cm-arte" role="img" aria-label="${entorno(u)}" preserveAspectRatio="none"></svg><svg class="cm-sobre" aria-hidden="true" focusable="false"></svg><div class="cm-camada" aria-hidden="true"></div><a class="cm-osm" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a></div></div>
      <div class="cap-galeria">
        <div class="cap-leg"><p class="rotulo cap-legenda" aria-live="polite">${u.galeria[0][1]}</p><a class="cap-rota" href="${rotaGoogle(l)}" target="_blank" rel="noopener" aria-label="${chegarRotulo(l)}">Como chegar ${SETA}</a></div>
        <div class="minis" role="group" aria-label="Ambientes de ${u.nome} ${u.bairro}">${[...u.galeria, MAPA_AMB].map(([f,amb],k) => f === 'mapa'
          ? `<button type="button" class="mini mini-mapa" data-k="${k}" aria-pressed="false" aria-label="Ver a localização no mapa"><svg viewBox="${miniVista(l).join(' ')}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"></svg><i style="left:${miniPin(l)[0]}%;top:${miniPin(l)[1]}%"></i></button>`
          : `<button type="button" class="mini" data-k="${k}" aria-pressed="${k === 0}" aria-label="Ver ${amb.toLowerCase()}"><img src="img/${f.replace('-g','-t')}.webp" alt="" loading="lazy"></button>`).join('')}</div>
      </div>
    </div>
    <div class="cap-txt">
      <span class="u-ico" aria-hidden="true"><i style="--m:url(${ICONES[u.icone]})"></i></span>
      <h3 id="t-u${n}" tabindex="-1"><span class="forte">${u.nome}</span><span class="leve">${u.bairro}</span></h3>
      <p class="u-frase">${u.frase}</p>
      <ul class="u-perto" aria-label="Tempos até a praia, o mercado e a balsa">
        <li><span class="rotulo">Praia</span><span class="u-perto-v"><b>${l.praia}</b> min <span class="u-modo">a pé</span></span></li>
        <li><span class="rotulo">Mercado</span><span class="u-perto-v"><b>${l.mercado}</b> min <span class="u-modo">a pé</span></span></li>
        <li><span class="rotulo">Balsa</span><span class="u-perto-v"><b>${l.balsa}</b> min <span class="u-modo">de carro</span></span></li>
      </ul>
      <div class="cap-base"><span class="rotulo">${u.tipo} · ${u.rua}</span><div class="cap-acoes"><a class="btn-reserva" href="${linkUnidade(u)}" target="_blank" rel="noopener" aria-label="Reservar ${u.nome} ${u.bairro} no Airbnb, abre em nova aba">Reserve agora ${SETA}</a><button type="button" class="u-ver-mapa" aria-controls="foto-u${n}">${PIN}<span>Ver no mapa</span></button></div></div>
      <a class="cm-chegar" href="${rotaGoogle(l)}" target="_blank" rel="noopener" aria-label="${chegarRotulo(l)}"><span class="cm-end">${ruaNum(l)}</span><span class="cm-ir">Como chegar ${SETA}</span></a>
    </div>
  </article>`; }).join('');
/* o desenho do entorno (a costa, o mar, as praias e as ruas) é um só, guardado num <template>: cada mapa recebe uma cópia quando é
   aberto; as miniaturas recebem a sua já agora */
const copiaBase = () => $('#mapaBase').content.querySelector('.mb').cloneNode(true);
$$('.mini-mapa svg').forEach(s => s.appendChild(copiaBase()));
$('#previa').innerHTML = UNIDADES.map((u,i) => `<img src="img/${u.galeria[0][0]}.webp" alt="" class="${i===0?'on':''}" loading="lazy">`).join('');
$('#menuLista').innerHTML = UNIDADES.map((u,i) => `<li data-i="${i}"><a class="ir" href="#u-${i+1}" data-unidade="${i}"><span class="t">${u.nome}</span><span class="b">${u.bairro}</span></a><a class="reservar" href="${linkUnidade(u)}" target="_blank" rel="noopener" aria-label="Reservar ${u.nome} ${u.bairro} no Airbnb, abre em nova aba">Reservar ${SETA}</a></li>`).join('');

/* galeria: a miniatura troca a foto grande do capítulo; a última abre o mapa do entorno */
const quadrosFoto = cap => $$('.cap-foto > img, .cap-foto > .cap-mapa', cap);
function mostraFoto(cap, k){
  const itens = quadrosFoto(cap), alvo = itens[k];
  if (!alvo) return;
  const u = UNIDADES[+cap.id.slice(2) - 1], mapa = alvo.classList.contains('cap-mapa');
  if (!mapa) cap._foto = k;
  $$('.mini', cap).forEach((b,j) => b.setAttribute('aria-pressed', String(j === k)));
  $('.cap-legenda', cap).textContent = (u.galeria[k] || MAPA_AMB)[1];
  cap.classList.toggle('vendo-mapa', mapa);
  const ver = $('.u-ver-mapa span', cap);
  if (ver) ver.textContent = mapa ? 'Ver as fotos' : 'Ver no mapa';
  const troca = () => itens.forEach(im => im.classList.toggle('on', im === alvo));
  if (mapa){
    const jaAberto = alvo.classList.contains('on');
    montaMapa(cap); desenhaMapa(cap); troca();
    if (!jaAberto) animaEntorno(alvo);
    return;
  }
  if (alvo.dataset.src){
    alvo.src = alvo.dataset.src; alvo.removeAttribute('data-src');
    (alvo.decode ? alvo.decode() : Promise.resolve()).then(troca, troca);
  } else troca();
}
$$('.cap').forEach(cap => {
  $$('.mini', cap).forEach((b,k) => {
    b.addEventListener('click', () => mostraFoto(cap, k));
    b.addEventListener('pointerenter', () => {
      const q = quadrosFoto(cap)[k];
      if (q && q.dataset.src) new Image().src = q.dataset.src;
      else if (q && q.classList.contains('cap-mapa')) montaMapa(cap);
    });
  });
  /* "Ver no mapa" abre o mapa; com o mapa à vista, "Ver as fotos" volta para o último ambiente visto. Na lista (celular), a página
     sobe até o quadro da foto, que fica acima do texto */
  const ver = $('.u-ver-mapa', cap);
  if (ver) ver.addEventListener('click', () => {
    mostraFoto(cap, cap.classList.contains('vendo-mapa') ? (cap._foto || 0) : quadrosFoto(cap).length - 1);
    if (!document.documentElement.classList.contains('h')){
      const r = $('.cap-foto', cap).getBoundingClientRect(), cabe = r.height + 104 <= innerHeight;
      if (r.top < 70 || r.bottom > innerHeight - 20) irPara($('.cap-foto', cap), cabe ? -84 : -Math.round((innerHeight - r.height) / 2));
    }
  });
});

/* ── O mapa do entorno: a unidade, os lugares úteis por perto com o tempo a pé e o caminho a pé até a praia. A escala e o enquadramento
   se ajustam ao espaço livre: na tela cheia, fora do texto, da galeria, do índice e do topo; na lista, ao quadro da foto ── */
const ORDEM_LUGAR = { praia:0, mercado:1, farmacia:2, feira:3 };
function montaMapa(cap){
  const box = $('.cap-mapa', cap);
  if (!box || box.dataset.pronto) return box;
  box.dataset.pronto = '1';
  const i = +box.dataset.i, l = UNIDADES[i].local;
  $('.cm-arte', box).appendChild(copiaBase());
  $('.cm-sobre', box).innerHTML = `<defs><mask id="cmRevela${i}" maskUnits="userSpaceOnUse" x="-5000" y="-5000" width="15000" height="15000"><path class="cm-revela"/></mask></defs><path class="cm-caminho" mask="url(#cmRevela${i})"/>`;
  /* um lugar a menos de 30 m (a farmácia ao lado do Cubs) não ganha ponto próprio: o nome fica junto do pin */
  $('.cm-camada', box).innerHTML = l.pontos.map((p, k) => `${Math.hypot(p.x, p.y) < 30 ? '' : `<i class="cm-ponto" data-k="${k}" data-t="${p.t}"></i>`}<span class="cm-rot" data-k="${k}"><span class="n">${p.n}</span><span class="c">${p.c}</span><span class="t">${tempoMapa(p.min)}</span></span>`).join('') + '<i class="cm-pin"></i>';
  /* redesenha quando o quadro muda de tamanho (o mapa escondido espera a vez de aparecer) e quando as fontes chegam */
  if ('ResizeObserver' in window){
    let q = 0;
    new ResizeObserver(() => { cancelAnimationFrame(q); q = requestAnimationFrame(() => { if (box.classList.contains('on')) desenhaMapa(cap); }); }).observe(box);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (box.classList.contains('on')) desenhaMapa(cap); });
  return box;
}
/* as linhas de texto de verdade (não a caixa inteira do bloco): o mapa pode passar ao lado de uma linha curta */
function retangulosTexto(el){
  const out = [], rg = document.createRange(), tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let n = tw.nextNode(); n; n = tw.nextNode()){ if (!n.textContent.trim()) continue; rg.selectNodeContents(n); out.push(...rg.getClientRects()); }
  return out;
}
function desenhaMapa(cap){
  const box = $('.cap-mapa', cap);
  if (!box || !box.dataset.pronto) return;
  const W = box.clientWidth, H = box.clientHeight;
  if (!W || !H) return;
  const l = UNIDADES[+box.dataset.i].local, cheia = document.documentElement.classList.contains('h'), pequeno = W < 700;
  box.classList.toggle('compacto', pequeno);
  const a = desenhaMapaEm(cap, box, W, H, l, cheia);
  if (pequeno || (!a.faltam && a.s >= a.s0 * .6)) return;
  /* algum nome não coube, ou só coube com o mapa muito aberto: tenta com os nomes curtos (Supermercado, Farmácia) e fica com o que
     mostra mais e mais de perto */
  box.classList.add('compacto');
  const b = desenhaMapaEm(cap, box, W, H, l, cheia);
  if (a.faltam < b.faltam || (a.faltam === b.faltam && a.s >= b.s * .75)){ box.classList.remove('compacto'); desenhaMapaEm(cap, box, W, H, l, cheia); }
}
function desenhaMapaEm(cap, box, W, H, l, cheia){
  /* o endereço com "Como chegar" fica no fim do texto (é o próximo na ordem do teclado depois de "Ver no mapa") e é posto junto do pin */
  const camada = $('.cm-camada', box), pin = $('.cm-pin', camada), chegar = $('.cm-chegar', cap), osm = $('.cm-osm', box);
  const rots = $$('.cm-rot', camada), pontos = $$('.cm-ponto', camada);
  /* obstáculos, em px do quadro do mapa. Na tela cheia: o bloco do texto inteiro (da primeira à última linha, até onde vai a linha
     mais comprida), a galeria, o índice, a faixa do topo e o crédito do mapa. A foto (e o mapa junto) pode estar um pouco ampliada
     pela rolagem: as medidas da tela voltam para a escala do quadro */
  const obst = [], M = cheia ? 24 : 8;
  let livreR = [M, M, W - M, H - M];
  if (cheia){
    const rb = box.getBoundingClientRect(), rc = cap.getBoundingClientRect(), k = rb.width / W || 1;
    const cx = rb.left + rb.width / 2, cy = rb.top + rb.height / 2;
    /* fixo: o topo, preso à tela; vale a posição dele com a tela das unidades presa no alto */
    const local = (r, fixo) => { const dx = fixo ? rc.left : 0, dy = fixo ? rc.top : 0;
      return [W / 2 + (r.left + dx - cx) / k, H / 2 + (r.top + dy - cy) / k, W / 2 + (r.right + dx - cx) / k, H / 2 + (r.bottom + dy - cy) / k]; };
    const abre = (q, m) => [q[0] - m, q[1] - m, q[2] + m, q[3] + m];
    const txt = $('.cap-txt', cap), rs = [];
    [$('h3', txt), $('.u-frase', txt), $('.cap-base .rotulo', txt)].forEach(el => { if (el) rs.push(...retangulosTexto(el)); });
    $$('.u-ico, .u-perto, .u-ver-mapa, .btn-reserva', txt).forEach(el => rs.push(el.getBoundingClientRect()));
    const tq = rs.filter(r => r.width && r.height).map(r => local(r)).reduce((a, q) => [Math.min(a[0], q[0]), Math.min(a[1], q[1]), Math.max(a[2], q[2]), Math.max(a[3], q[3])], [1e9, 1e9, -1e9, -1e9]);
    const gq = local($('.cap-galeria', cap).getBoundingClientRect());
    const ind = $('.indice'), iq = ind && ind.offsetParent ? local(ind.getBoundingClientRect()) : [0, H, W, H];
    const topo = Math.max(...['#selo', '.topo-acoes'].map(sel => { const el = $(sel); return el ? local(el.getBoundingClientRect(), true)[3] : 0; })) + 14;
    obst.push(abre(tq, 22), abre(gq, 16), abre(iq, 10), [-1e4, -1e4, 1e4, topo]);
    /* o retângulo livre principal: à direita do texto, entre o topo e a galeria */
    livreR = [tq[2] + 22 + 24, topo + 8, W - M, Math.min(gq[1] - 16, iq[1] - 10) - 8];
  }
  if (osm.offsetWidth) obst.push([osm.offsetLeft - 8, osm.offsetTop - 6, osm.offsetLeft + osm.offsetWidth + 8, osm.offsetTop + osm.offsetHeight + 6]);
  const livreObs = (x0, y0, x1, y1) => x0 >= M && y0 >= M && x1 <= W - M && y1 <= H - M && !obst.some(o => x1 > o[0] && x0 < o[2] && y1 > o[1] && y0 < o[3]);
  /* medidas dos rótulos com cada um encostado à esquerda (um rótulo perto da borda direita encolheria e mediria menos) */
  [...rots, chegar].forEach(r => { r.classList.remove('some', 'esq', 'meio'); r.style.left = '0px'; r.style.top = '0px'; });
  cap.classList.remove('sem-chegar');
  const tam = rots.map(r => [r.offsetWidth, r.offsetHeight]);
  /* com pouco espaço livre (computador estreito), o cartão mostra só "Como chegar": a rua já está no texto da unidade */
  cap.classList.toggle('cartao-curto', cheia && livreR[2] - livreR[0] < 400);
  const tc = cheia && chegar.offsetWidth ? [chegar.offsetWidth, chegar.offsetHeight] : null;
  const junto = l.pontos.map(p => Math.hypot(p.x, p.y) < 30);
  const nums = l.rota.match(/-?\d+(?:\.\d+)?/g).map(Number), rota = [];
  for (let k = 0; k + 1 < nums.length; k += 2) rota.push([nums[k], nums[k + 1]]);
  const gap = cheia ? 13 : 10, gapPin = cheia ? 22 : 15, R = cheia ? 15 : 12;
  /* as posições de um rótulo w×h em volta de (x, y): direita, esquerda, em cima, embaixo e as diagonais; se nenhuma servir, as mesmas
     um pouco mais longe */
  const anel = (x, y, w, h, g) => { const d = g * .8; return [[x + g, y - h / 2, ''], [x - g - w, y - h / 2, 'esq'], [x - w / 2, y - g - h, 'meio'], [x - w / 2, y + g, 'meio'],
    [x + d, y - d - h, ''], [x + d, y + d, ''], [x - d - w, y - d - h, 'esq'], [x - d - w, y + d, 'esq']]; };
  const volta = (x, y, w, h, g) => [...anel(x, y, w, h, g), ...anel(x, y, w, h, g * 1.7)];
  /* ordena as posições pelo lado de fora: o rótulo olha para longe de (rx, ry) */
  const porFora = (cs, x, y, w, h, rx, ry) => {
    const vx = x - rx, vy = y - ry, n = Math.hypot(vx, vy);
    if (n < 2) return cs;
    return cs.map((c, j) => { const ux = c[0] + w / 2 - x, uy = c[1] + h / 2 - y; return [c, j, (j >= 8 ? 10 : 0) - (ux * vx + uy * vy) / (n * (Math.hypot(ux, uy) || 1))]; })
      .sort((a, b) => (a[2] - b[2]) || (a[1] - b[1])).map(c => c[0]);
  };
  const xyDe = (s, px, py) => l.pontos.map((p, k) => junto[k] ? [px, py] : [px + p.x * s, py + p.y * s]);
  const cabe = (s, px, py) => {
    if (!livreObs(px - R, py - R, px + R, py + R)) return false;
    const xy = xyDe(s, px, py);
    for (let k = 0; k < xy.length; k++){
      const [x, y] = xy[k], [w, h] = tam[k];
      if (!junto[k] && !livreObs(x - 7, y - 7, x + 7, y + 7)) return false;
      if (!volta(x, y, w, h, junto[k] ? gapPin : gap).some(([a, b]) => livreObs(a, b, a + w, b + h))) return false;
    }
    /* o caminho até a praia também fica no espaço livre */
    if (!rota.every(([x, y]) => livreObs(px + x * s - 3, py + y * s - 3, px + x * s + 3, py + y * s + 3))) return false;
    return !tc || volta(px, py, tc[0], tc[1], gapPin - 4).some(([a, b]) => livreObs(a, b, a + tc[0], b + tc[1]));
  };
  /* cada rótulo no primeiro lugar livre: primeiro o endereço (junto do pin, do lado oposto aos lugares), depois a praia, o mercado,
     a farmácia e o Mercado do Peixe. Nenhum rótulo fica em cima de outro, de um ponto ou do caminho */
  const coloca = (s, px, py) => {
    const xy = xyDe(s, px, py), ocup = [[px - R, py - R, px + R, py + R]];
    xy.forEach(([x, y], k) => { if (!junto[k]) ocup.push([x - 8, y - 8, x + 8, y + 8]); });
    for (let k = 1; k < rota.length; k++){
      const [x0, y0] = rota[k - 1], [x1, y1] = rota[k], n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) * s / 8));
      for (let j = 0; j <= n; j++){ const x = px + (x0 + (x1 - x0) * j / n) * s, y = py + (y0 + (y1 - y0) * j / n) * s; ocup.push([x - 3, y - 3, x + 3, y + 3]); }
    }
    const livre = (a, b, w, h) => livreObs(a, b, a + w, b + h) && !ocup.some(o => a + w > o[0] && a < o[2] && b + h > o[1] && b < o[3]);
    const res = { s, px, py, xy, rot: [], chegar: null, faltam: 0, semNome: 0 };
    const poe = k => {
      const [x, y] = xy[k], [w, h] = tam[k], cs = volta(x, y, w, h, junto[k] ? gapPin : gap);
      const c = (junto[k] ? cs : porFora(cs, x, y, w, h, px, py)).find(([a, b]) => livre(a, b, w, h));
      if (c){ res.rot[k] = c; ocup.push([c[0] - 6, c[1] - 4, c[0] + w + 6, c[1] + h + 4]); }
      else { res.rot[k] = null; res.semNome++; res.faltam += l.pontos[k].t === 'praia' ? 3 : 1; }
    };
    junto.forEach((j, k) => { if (j) poe(k); });
    /* o cartão encosta no pin e fica a 10 px de todo o resto (pontos, nomes, o caminho) */
    const bate = (o, x0, y0, x1, y1) => x1 > o[0] && x0 < o[2] && y1 > o[1] && y0 < o[3];
    const livreC = (a, b, w, h) => livreObs(a, b, a + w, b + h) && !bate(ocup[0], a, b, a + w, b + h)
      && !ocup.slice(1).some(o => bate(o, a - 10, b - 10, a + w + 10, b + h + 10));
    const marcaC = c => { res.chegar = c; ocup.push([c[0] - 10, c[1] - 10, c[0] + tc[0] + 10, c[1] + tc[1] + 10]); };
    if (tc){
      const [w, h] = tc, longe = xy.filter((q, k) => !junto[k]);
      const gx = longe.length ? longe.reduce((a, q) => a + q[0], 0) / longe.length : px - 1, gy = longe.length ? longe.reduce((a, q) => a + q[1], 0) / longe.length : py;
      /* em volta do pin, em cada lado também deslizado (o pin numa ponta do cartão), e depois um pouco mais longe */
      const g = gapPin - 6, d = g * .8, lados = gg => [[px + gg, py - h / 2], [px + gg, py - 10], [px + gg, py - h + 10], [px - gg - w, py - h / 2], [px - gg - w, py - 10], [px - gg - w, py - h + 10],
        [px - w / 2, py - gg - h], [px - 14, py - gg - h], [px - w + 14, py - gg - h], [px - w / 2, py + gg], [px - 14, py + gg], [px - w + 14, py + gg],
        [px + gg * .8, py - gg * .8 - h], [px + gg * .8, py + gg * .8], [px - gg * .8 - w, py - gg * .8 - h], [px - gg * .8 - w, py + gg * .8]];
      const cs = porFora(lados(g).map(c => [...c, '']), px, py, w, h, gx, gy).concat(porFora(lados(g * 1.8).map(c => [...c, '']), px, py, w, h, gx, gy));
      const c = cs.find(([a, b]) => livreC(a, b, w, h));
      if (c) marcaC(c);
    }
    l.pontos.map((p, k) => k).filter(k => !junto[k]).sort((a, b) => ORDEM_LUGAR[l.pontos[a].t] - ORDEM_LUGAR[l.pontos[b].t]).forEach(poe);
    if (tc && !res.chegar){
      /* sem lugar junto do pin: o cartão vai para um canto do espaço livre (o fio laranja e o pin dizem de quem é o endereço) */
      const [w, h] = tc, R0 = livreR, cantos = [[R0[2] - w, R0[1], 'canto'], [R0[2] - w, R0[3] - h, 'canto'], [R0[0], R0[1], 'canto'], [R0[0], R0[3] - h, 'canto']];
      const c = cantos.find(([a, b]) => livreC(a, b, w, h) && !ocup.slice(1).some(o => bate(o, a - 24, b - 24, a + w + 24, b + h + 24)));
      /* no canto vale menos que junto do pin: a busca ainda tenta um pouco mais longe antes de aceitar */
      if (c){ marcaC(c); res.faltam += .5; } else res.faltam += 3;
    }
    return res;
  };
  /* o enquadramento: o conjunto (a unidade, os lugares e o caminho) fica centrado no espaço livre principal, ocupando no máximo
     três quartos dele; se não couber ali, a unidade anda um pouco em volta, e depois a escala abre aos poucos até caber */
  const pontosM = [[0, 0], ...l.pontos.filter((p, k) => !junto[k]).map(p => [p.x, p.y]), ...rota];
  const bx0 = Math.min(...pontosM.map(q => q[0])), bx1 = Math.max(...pontosM.map(q => q[0])), by0 = Math.min(...pontosM.map(q => q[1])), by1 = Math.max(...pontosM.map(q => q[1]));
  const Rw = Math.max(80, livreR[2] - livreR[0]), Rh = Math.max(80, livreR[3] - livreR[1]), T = [(livreR[0] + livreR[2]) / 2, (livreR[1] + livreR[3]) / 2];
  /* o lugar do cartão do endereço entra na conta do enquadramento: do lado oposto aos lugares (em px, a partir do pin) */
  const outros = l.pontos.filter((p, k) => !junto[k]), gxm = outros.reduce((a, p) => a + p.x, 0) / (outros.length || 1), gym = outros.reduce((a, p) => a + p.y, 0) / (outros.length || 1);
  const cartao = !tc ? null : Math.abs(gxm) > Math.abs(gym)
    ? (gxm < 0 ? [16, -tc[1] + 10, 16 + tc[0], tc[1] - 10] : [-16 - tc[0], -tc[1] + 10, -16, tc[1] - 10])
    : (gym < 0 ? [-tc[0] + 14, 16, tc[0] - 14, 16 + tc[1]] : [-tc[0] + 14, -16 - tc[1], tc[0] - 14, -16]);
  /* onde fica a unidade numa escala s: o conjunto (lugares, caminho e o cartão) centrado no espaço livre principal */
  const origem = s => {
    let x0 = bx0 * s, x1 = bx1 * s, y0 = by0 * s, y1 = by1 * s;
    if (cartao){ x0 = Math.min(x0, cartao[0]); y0 = Math.min(y0, cartao[1]); x1 = Math.max(x1, cartao[2]); y1 = Math.max(y1, cartao[3]); }
    return [T[0] - (x0 + x1) / 2, T[1] - (y0 + y1) / 2];
  };
  const desvios = [];
  for (let a = -8; a <= 8; a++) for (let b = -6; b <= 6; b++) desvios.push([a * Rw * .045, b * Rh * .06]);
  desvios.sort((p, q) => Math.hypot(p[0], p[1]) - Math.hypot(q[0], q[1]));
  const s0 = Math.min(cheia ? 2.4 : 1.9, .76 * Rw / Math.max(60, bx1 - bx0), .76 * Rh / Math.max(60, by1 - by0));
  let s = s0, melhor = null, paciencia = 0;
  for (let passo = 0; passo < 40 && s > .04; passo++, s *= .93){
    /* o mapa não se afasta demais para caber tudo: abaixo de 45% da escala inicial, fica o melhor que já se achou (sem o cartão, o
       "Como chegar" vai para a legenda) */
    if (melhor && melhor.semNome === 0 && s < s0 * .45) break;
    if (melhor && melhor.faltam <= .5 && ++paciencia > 4) break;
    const [ox, oy] = origem(s);
    const P = desvios.map(([dx, dy]) => [ox + dx, oy + dy]).find(([x, y]) => cabe(s, x, y));
    if (!P) continue;
    const r = coloca(s, P[0], P[1]);
    if (!melhor || r.faltam < melhor.faltam) melhor = r;
    if (!r.faltam) break;
  }
  if (!melhor) melhor = coloca(s / .93, ...origem(s / .93));
  const { s: sc, px, py, xy } = melhor;
  $('.cm-arte', box).setAttribute('viewBox', `${(l.x - px / sc).toFixed(2)} ${(l.y - py / sc).toFixed(2)} ${(W / sc).toFixed(2)} ${(H / sc).toFixed(2)}`);
  pin.style.left = px.toFixed(1) + 'px'; pin.style.top = py.toFixed(1) + 'px';
  pontos.forEach(el => { const [x, y] = xy[+el.dataset.k]; el.style.left = x.toFixed(1) + 'px'; el.style.top = y.toFixed(1) + 'px'; });
  pontos.forEach(el => el.classList.toggle('some', !melhor.rot[+el.dataset.k]));
  rots.forEach(el => {
    const c = melhor.rot[+el.dataset.k];
    if (!c){ el.classList.add('some'); return; }
    el.style.left = c[0].toFixed(1) + 'px'; el.style.top = c[1].toFixed(1) + 'px';
    if (c[2]) el.classList.add(c[2]);
  });
  if (tc){
    const c = melhor.chegar;
    /* a posição é contada a partir do bloco do texto, onde o link mora */
    const txt = chegar.offsetParent || cap, ox = txt === cap ? 0 : txt.offsetLeft, oy = txt === cap ? 0 : txt.offsetTop;
    if (c){
      chegar.style.left = (c[0] - ox).toFixed(1) + 'px'; chegar.style.top = (c[1] - oy).toFixed(1) + 'px';
      /* o fio laranja fica do lado que olha para o pin */
      const dx = px - (c[0] + tc[0] / 2), dy = py - (c[1] + tc[1] / 2);
      chegar.dataset.fio = Math.abs(dx) / tc[0] >= Math.abs(dy) / tc[1] ? (dx < 0 ? 'esq' : 'dir') : (dy < 0 ? 'cima' : 'baixo');
      /* à esquerda do pin, o texto do cartão alinha à direita, junto do fio */
      if (chegar.dataset.fio === 'dir') chegar.classList.add('esq');
    }
    /* sem lugar junto do pin, "Como chegar" volta para a linha da legenda */
    else { chegar.classList.add('some'); cap.classList.add('sem-chegar'); }
  }
  /* o caminho até a praia, em px */
  const d = rota.map(([x, y], k) => (k ? 'L' : 'M') + (px + x * sc).toFixed(1) + ' ' + (py + y * sc).toFixed(1)).join('');
  const sobre = $('.cm-sobre', box);
  sobre.setAttribute('viewBox', `0 0 ${W} ${H}`);
  $('.cm-caminho', sobre).setAttribute('d', d);
  $('.cm-revela', sobre).setAttribute('d', d);
  return { s: sc, s0, faltam: melhor.faltam };
}
/* quando o mapa abre: o pin cai, os lugares aparecem do mais perto para o mais longe e o caminho até a praia se desenha da porta até
   a areia */
function animaEntorno(box){
  if (reduz || !window.gsap) return;
  const camada = $('.cm-camada', box), revela = $('.cm-revela', box), pin = $('.cm-pin', camada), chegar = $('.cm-chegar', box.closest('.cap'));
  const l = UNIDADES[+box.dataset.i].local;
  const ordem = l.pontos.map((p, k) => k).sort((a, b) => Math.hypot(l.pontos[a].x, l.pontos[a].y) - Math.hypot(l.pontos[b].x, l.pontos[b].y));
  const todos = [pin, revela, chegar, ...$$('.cm-ponto, .cm-rot', camada)];
  gsap.killTweensOf(todos);
  gsap.fromTo(pin, { scale:0 }, { scale:1, duration:.7, ease:'back.out(2.4)', delay:.2 });
  gsap.fromTo(chegar, { opacity:0, y:8 }, { opacity:1, y:0, duration:.8, ease:'power3.out', delay:.45 });
  const L = revela.getTotalLength ? revela.getTotalLength() : 0;
  if (L) gsap.fromTo(revela, { strokeDasharray:L + 2, strokeDashoffset:L + 2 }, { strokeDashoffset:0, duration:1.5, ease:'power2.inOut', delay:.5 });
  ordem.forEach((k, j) => {
    const ponto = $(`.cm-ponto[data-k="${k}"]`, camada), rot = $(`.cm-rot[data-k="${k}"]`, camada), t = .55 + j * .12;
    if (ponto) gsap.fromTo(ponto, { scale:0 }, { scale:1, duration:.55, ease:'back.out(2.2)', delay:t });
    gsap.fromTo(rot, { opacity:0, y:5 }, { opacity:1, y:0, duration:.6, ease:'power3.out', delay:t + .08 });
  });
}
/* índice das unidades (no computador, embaixo da tela cheia): nome e bairro, iguais nos cinco */
$('#indice').innerHTML = UNIDADES.map((u,i) => `<li><button type="button" data-i="${i}" aria-current="${i === 0}"><span class="nm">${u.nome}</span><span class="br">${u.bairro}</span></button></li>`).join('');
$('#indice').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) irUnidade(+b.dataset.i); });
/* no celular, deslizar a foto para o lado passa para o ambiente seguinte ou anterior (as miniaturas continuam valendo) */
$$('.cap').forEach(cap => {
  const foto = $('.cap-foto', cap); let x0 = null, y0 = 0;
  foto.addEventListener('touchstart', e => { const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; }, { passive:true });
  foto.addEventListener('touchend', e => {
    if (x0 === null) return;
    const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; x0 = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
    const minis = $$('.mini', cap), n = minis.length, atual = minis.findIndex(b => b.getAttribute('aria-pressed') === 'true');
    mostraFoto(cap, (atual + (dx < 0 ? 1 : -1) + n) % n);
  }, { passive:true });
});

/* avaliações em faixa (telas até 900 px): a linha embaixo mostra o trecho à vista, e o teclado alcança a faixa só quando ela rola */
(() => {
  const grade = $('#provasGrade'), fio = $('#pvLinha b');
  if (!grade || !fio) return;
  const mede = () => {
    const sw = grade.scrollWidth, cw = grade.clientWidth, rola = sw > cw + 2;
    if (rola) grade.setAttribute('tabindex', '0'); else grade.removeAttribute('tabindex');
    fio.style.width = (rola ? cw / sw * 100 : 100).toFixed(2) + '%';
    fio.style.left = (rola ? grade.scrollLeft / sw * 100 : 0).toFixed(2) + '%';
  };
  grade.addEventListener('scroll', mede, { passive:true });
  addEventListener('resize', mede);
  mede();
})();

/* ── Base ── */
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
const temGSAP = !!(window.gsap && window.ScrollTrigger);
/* as classes da versão animada (anima e, no computador, h) entram junto com a coreografia, no fim da página (Início) */

let lenis = null;
if (!reduz && window.Lenis) {
  /* gesto para o lado em cima da faixa das avaliações (quando ela é faixa, até 900 px): a rolagem fica com o navegador, e a faixa anda */
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1,
    virtualScroll: ({ deltaX, deltaY, event }) => !(Math.abs(deltaX) > Math.abs(deltaY) && event.target instanceof Element && event.target.closest('#provasGrade[tabindex]')) });
  if (temGSAP) { lenis.on('scroll', () => { ScrollTrigger.update(); }); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
}
/* Selo: o anel com o nome gira devagar o tempo todo e acompanha a rolagem (para a frente ao descer, para trás ao subir) */
(() => {
  const anel = $('#selo .selo-anel');
  if (!anel || reduz) return;
  let ang = 0, tAnt = performance.now(), yAnt = scrollY;
  const gira = t => {
    const dt = Math.min(64, t - tAnt), y = scrollY, dy = Math.max(-80, Math.min(80, y - yAnt));
    tAnt = t; yAnt = y;
    ang = (ang + dt * .006 + dy * .1) % 360;
    anel.setAttribute('transform', `rotate(${ang.toFixed(2)} 60 60)`);
    requestAnimationFrame(gira);
  };
  requestAnimationFrame(gira);
})();
/* saltos (menu, selo, índice, "Voltar ao topo"): enquanto a página corre até lá, os botões do topo não somem, porque a rolagem não é da pessoa */
let saltando = false, fimSalto = 0;
const irPara = (alvo, offset = 0) => {
  const suave = { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) };
  /* o início é sempre o topo: a chegada fica presa na rolagem, e medir o elemento daria o fim da prisão, não o começo da página */
  if (alvo === '#inicio') alvo = 0;
  const solta = () => { saltando = false; clearTimeout(fimSalto); const ac = $('.topo-acoes'); if (ac) ac.classList.remove('oculto'); yAcoes = scrollY; };
  saltando = true; clearTimeout(fimSalto); fimSalto = setTimeout(solta, 2000);
  if (typeof alvo === 'number'){
    if (lenis) lenis.scrollTo(alvo, { ...suave, onComplete: solta });
    else scrollTo({ top: alvo, behavior: reduz ? 'auto' : 'smooth' });
    return;
  }
  const el = typeof alvo === 'string' ? document.querySelector(alvo) : alvo; if (!el) return;
  if (lenis) lenis.scrollTo(el, { ...suave, offset, onComplete: solta });
  else el.scrollIntoView({ behavior: reduz ? 'auto' : 'smooth' });
};
/* depois do salto, o foco vai para o título do lugar de chegada (quem usa teclado ou leitor de tela continua dali) */
const focaDepois = sel => setTimeout(() => { const t = $(sel); if (t) t.focus({ preventScroll:true }); }, reduz ? 60 : 1700);
/* "A marca": para com o arco já em cima e a frase inteira na tela, o título a pouco mais de um terço da altura */
let fimHeroi = null;
const irMarca = () => {
  const fim = fimHeroi && fimHeroi(), t = $('#t-marca');
  if (!fim || !t) { irPara('#marca', -Math.round(innerHeight * .16)); return; }
  irPara(Math.max(fim, Math.round(t.getBoundingClientRect().top + scrollY - innerHeight * .38)));
};
/* ir direto a uma unidade: na lista, a folga para o topo vem do scroll-margin-top de cada unidade; no computador, a tela cheia troca esta função */
const irUnidadeLista = i => irPara('#u-' + (i + 1));
let irUnidade = irUnidadeLista;
/* "Unidades" no menu: a primeira unidade */
let irAbertura = () => irUnidade(0);
/* "Avaliações" no menu: no computador, a tela troca esta função para parar com o trilho já na tela */
let irAvaliacoes = () => irPara('#avaliacoes');

const menu = $('#menu');
/* Topo: sem faixa e sempre na tela. O selo e os botões trocam de cor conforme o que está atrás de cada um:
   branco sobre foto e sobre o azul, marrom sobre o off-white */
const topo = $('#topo'), heroi = $('#inicio'), arco = $('.arco'), selo = $('#selo'), acoes = $('.topo-acoes');
let heroP = 0, temaPalco = 'claro';
const naFaixaY = (el, y) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.height > 0 && y >= r.top && y < r.bottom; };
function temaNoPonto(x, y){
  for (const el of document.elementsFromPoint(x, y)){
    if (el.closest('#topo, #barra, .menu, .pular')) continue;
    const marcado = el.closest('[data-tema]');
    if (marcado) return marcado.dataset.tema;
    if (el.closest('#avaliacoes, #construcao')) continue;   /* as caixas transparentes das duas seções */
    return null;
  }
  return null;
}
/* yAlto: um ponto perto do alto do selo. Para o azul do fechamento, que sobe de baixo, o selo só fica branco quando o azul já cobre
   quase todo ele: branco em cima do off-white some, marrom em cima do azul ainda se lê */
function temaEm(x, y, yAlto = y){
  const raiz = document.documentElement;
  if (naFaixaY($('#fim'), yAlto)) return 'escuro';
  /* avaliações e Construção: vale o que está de fato embaixo do ponto (o trilho anda para o lado e o arco tem recorte).
     Cada painel diz o seu tema (off-white = claro, a fachada do Cubs = escuro); o que não é delas segue para as regras abaixo */
  const t = temaNoPonto(x, y);
  if (t) return t;
  /* enquanto a névoa da marca ainda cobre o alto da foto, o topo continua sobre o off-white */
  const nev = $('.sobre-nevoa');
  if (nev && nev.offsetParent !== null){
    const rn = nev.getBoundingClientRect();
    if (y >= rn.top && y < rn.top + rn.height * .55) return 'claro';
  }
  if (naFaixaY($('#caps'), y)) return temaPalco;
  const sobre = $('.sobre');
  if (sobre){ const r = sobre.getBoundingClientRect(), sobe = parseFloat(getComputedStyle(sobre).getPropertyValue('--sobe')) || 0; if (y >= r.top + sobe && y < r.bottom) return 'claro'; }
  if (naFaixaY(heroi, y)){
    const ra = arco.getBoundingClientRect();
    return Math.hypot(x - (ra.left + ra.width / 2), y - (ra.top + ra.height / 2)) <= ra.width / 2 ? 'claro' : 'escuro';
  }
  return 'claro';
}
function atualizaTopo(){
  if (!selo || !acoes) return;
  const rs = selo.getBoundingClientRect(), ra = acoes.getBoundingClientRect();
  const t1 = temaEm(rs.left + rs.width / 2, rs.top + rs.height / 2, rs.top + rs.height * .22), t2 = temaEm(ra.left + ra.width / 2, ra.top + ra.height / 2, ra.top + ra.height * .22);
  if (selo.dataset.tema !== t1) selo.dataset.tema = t1;
  if (acoes.dataset.tema !== t2) acoes.dataset.tema = t2;
}

/* Menu: o resto do site fica inerte enquanto ele está aberto, e o foco volta para onde estava */
let focoAntes = null;
function trava(on){
  if (lenis) on ? lenis.stop() : lenis.start();
  document.body.style.overflow = on ? 'hidden' : '';
  $$('main, #topo, .pular').forEach(el => el.inert = on);
  atualizaBarra();
}
function abreMenu(){ focoAntes = document.activeElement; menu.classList.add('aberto'); $('#abreMenu').setAttribute('aria-expanded','true'); trava(true); setTimeout(() => $('#fechaMenu').focus(), 60); }
function fechaMenu(volta = true){ if (!menu.classList.contains('aberto')) return; menu.classList.remove('aberto'); $('#abreMenu').setAttribute('aria-expanded','false'); trava(false); if (volta && focoAntes) focoAntes.focus({ preventScroll:true }); }
$('#abreMenu').onclick = abreMenu;
$('#fechaMenu').onclick = () => fechaMenu();
document.addEventListener('click', e => {
  const u = e.target.closest('[data-unidade]');
  if (u){ e.preventDefault(); const aberto = menu.classList.contains('aberto'), i = +u.dataset.unidade; fechaMenu(false);
    setTimeout(() => { irUnidade(i); focaDepois('#t-u' + (i + 1)); }, aberto ? 450 : 0); return; }
  const a = e.target.closest('[data-alvo]');
  if (a){ e.preventDefault(); const aberto = menu.classList.contains('aberto'), alvo = a.dataset.alvo; fechaMenu(false);
    const titulos = { '#inicio':'#titulo', '#marca':'#t-marca', '#unidades':'#t-unidades', '#avaliacoes':'#t-provas', '#construcao':'#t-cubs' };
    setTimeout(() => {
      if (alvo === '#unidades') irAbertura(); else if (alvo === '#marca') irMarca(); else if (alvo === '#avaliacoes') irAvaliacoes(); else irPara(alvo);
      if (alvo === '#unidades') focaDepois('#t-u1'); else if (titulos[alvo]) focaDepois(titulos[alvo]);
    }, aberto ? 450 : 0); }
});
$('.pular').addEventListener('click', e => { e.preventDefault(); irMarca(); focaDepois('#t-marca'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') fechaMenu(); });
$$('#menuLista li').forEach(li => li.addEventListener('mouseenter', () => $$('#previa img').forEach((im,k) => im.classList.toggle('on', k === +li.dataset.i))));

/* links que abrem outra aba avisam isso a quem usa leitor de tela */
$$('a[target="_blank"]').forEach(a => { if (!a.hasAttribute('aria-label')) a.insertAdjacentHTML('beforeend', '<span class="sr"> (abre em nova aba)</span>'); });

/* Barra de reserva no celular: aparece depois da chegada, sai no bloco laranja das unidades (cada uma tem o próprio botão) e no fechamento, que termina no seu próprio botão */
const barra = $('#barra');
const fimSec = $('#fim'), listaCaps = $('#unidades');
let fimCTA = null;
function atualizaBarra(){
  /* o fechamento termina no próprio botão: a barra sai quando a linha do horizonte termina e o azul começa a abrir */
  const noFim = (fimSec._p !== undefined && fimSec._p > .34) || (fimCTA === null ? fimSec.getBoundingClientRect().top < innerHeight * .8 : fimCTA);
  const rc = listaCaps.getBoundingClientRect(), nasUnidades = rc.top < innerHeight * .85 && rc.bottom > innerHeight * .3;
  const on = scrollY > innerHeight * 1.2 && !noFim && !nasUnidades;
  barra.classList.toggle('on', on);
  barra.inert = !on || menu.classList.contains('aberto');
}
let yAcoes = 0;
function escondeAcoes(){
  if (saltando){ yAcoes = scrollY; return; }
  const y = scrollY, desceu = y > innerHeight * .9;
  if (menu.classList.contains('aberto') || !desceu || y < yAcoes - 4) acoes.classList.remove('oculto');
  else if (y > yAcoes + 4) acoes.classList.add('oculto');
  yAcoes = y;
}
addEventListener('scroll', () => { atualizaBarra(); escondeAcoes(); if (!temGSAP) atualizaTopo(); }, { passive:true });
/* com animação, o topo é conferido a cada quadro depois que a rolagem mexe (as posições do arco e dos círculos só valem depois do quadro) */
let yTopo = -1, sujaTopo = 0;
const marcaTopo = () => { sujaTopo = Math.max(sujaTopo, 2); };
if (temGSAP) gsap.ticker.add(() => { const y = scrollY; if (y !== yTopo){ yTopo = y; sujaTopo = 6; } if (sujaTopo > 0){ sujaTopo--; atualizaTopo(); } });

function entradaHeroi(){
  document.documentElement.classList.remove('entrando');
  if (!temGSAP) return;
  gsap.fromTo('#titulo > span', { yPercent:100, opacity:0 }, { yPercent:0, opacity:1, duration:1.4, ease:'expo.out', stagger:.12 });
  gsap.fromTo('.role', { opacity:0, y:12 }, { opacity:1, y:0, duration:1, ease:'power3.out', delay:.45 });
  gsap.fromTo('.banco.esq img', { xPercent:-12 }, { xPercent:0, duration:2.6, ease:'expo.out' });
  gsap.fromTo('.banco.dir img', { xPercent:12 }, { xPercent:0, duration:2.6, ease:'expo.out' });
}

/* ── Coreografia ── */
const linhas = (el, mask) => window.SplitText ? SplitText.create(el, mask ? { type:'lines', mask:'lines', linesClass:'mask-line' } : { type:'lines', linesClass:'mask-line' }).lines : [el];
const entra = (alvo, vars, gatilho, inicio='top 82%') => gsap.from(alvo, { ...vars, scrollTrigger:{ trigger: gatilho || alvo, start: inicio, once: true } });
/* a frase da marca nasce dentro do arco da chegada: a seção sobe por baixo dele o quanto sobra entre o símbolo e o fim da chegada */
function ajustaSobre(){
  const sobre = $('.sobre');
  if (!sobre) return;
  if (!document.documentElement.classList.contains('anima')){ sobre.style.setProperty('--sobe', '0px'); return; }
  const D = arco.offsetWidth, simbH = ($('.arco .simb') || {}).offsetHeight || 48;
  const folga = Math.min(84, Math.max(40, innerHeight * .07));
  sobre.style.setProperty('--sobe', Math.max(0, Math.round(innerHeight * .58 - D * .064 - simbH - folga)) + 'px');
}
function coreografia(){
  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);

  /* céu em movimento: o banco de nuvens respira devagar */
  gsap.to('.banco.esq', { x:'1.6vw', duration:11, ease:'sine.inOut', yoyo:true, repeat:-1 });
  gsap.to('.banco.dir', { x:'-1.6vw', duration:13, ease:'sine.inOut', yoyo:true, repeat:-1 });

  /* 1. Chegada: a câmera desce pelo banco de nuvens até a ilha; o círculo sobe e cobre a tela */
  const hs = () => $('.ceu').offsetHeight - 2;
  /* o arco segue a rolagem com um pequeno atraso (scrub): o topo é conferido a cada quadro da animação, não só quando a rolagem muda */
  const th = gsap.timeline({ onUpdate: marcaTopo, scrollTrigger:{ trigger:'#inicio', start:'top top', end:'+=150%', pin:true, pinSpacer:'#pinInicio', scrub:1, anticipatePin:1,
    onUpdate(s){ heroP = s.progress; } } });
  fimHeroi = () => th.scrollTrigger ? Math.round(th.scrollTrigger.end) : null;
  th.to('#cena', { y: () => -hs(), ease:'power1.inOut', duration:.62 }, 0)
    .fromTo('.ilha img', { scale:1.14 }, { scale:1, ease:'none', duration:.72 }, 0)
    .to('.banco.esq', { xPercent:-58, yPercent:-72, scale:1.35, ease:'power1.in', duration:.5 }, 0)
    .to('.banco.dir', { xPercent:58, yPercent:-72, scale:1.35, ease:'power1.in', duration:.5 }, 0)
    .to('.banco', { opacity:0, ease:'none', duration:.26 }, .24)
    .to('.veu', { opacity:1, ease:'none', duration:.24 }, .3)
    .to('#heroiTxt', { yPercent:-70, opacity:0, ease:'power1.in', duration:.24 }, 0)
    .to('.role', { opacity:0, duration:.08 }, 0)
    .to('.arco', { y: () => -innerHeight * .58, ease:'power2.out', duration:.38 }, .62)
    .from('.arco .simb', { opacity:0, y:20, ease:'power2.out', duration:.2 }, .8);

  /* 2. A marca: a seção sobe por baixo do arco, e a frase entra por linhas já dentro dele */
  ajustaSobre();
  ScrollTrigger.addEventListener('refreshInit', ajustaSobre);
  entra(linhas($('.declaracao'), true), { yPercent:105, duration:1.15, ease:'expo.out', stagger:.08 }, '.declaracao');
  entra('.sobre-txt', { y:24, opacity:0, duration:1, ease:'power3.out', delay:.3 }, '.declaracao');

  const mm = gsap.matchMedia();
  mm.add({ desk:'(min-width: 901px)', mob:'(max-width: 900px)' }, ctx => {
    const desk = ctx.conditions.desk;

    /* o trilho das avaliações (regras html.h) só existe no computador */
    document.documentElement.classList.toggle('h', desk);

    /* 3. Unidades: no computador, a tela presa com a dissolução entre as cinco; no celular, a lista, e cada uma aparece quando chega */
    const soltaUnidades = desk ? unidadesTelaCheia() : unidadesLista();
    /* a primeira unidade fica parada embaixo da marca enquanto ela sobe (só com rolagem suave: mouse ou trackpad) */
    const soltaFoto = desk && lenis && matchMedia('(hover: hover) and (pointer: fine)').matches ? fotoParada() : null;

    /* 4. Avaliações: no computador, o trilho entra de lado por cima da última unidade e corre pelos depoimentos;
       no celular, o título entra pelos lados e os depoimentos aparecem na faixa */
    const soltaProvas = desk ? avaliacoesTrilho() : avaliacoesCelular();

    /* 5. Construção: o off-white sobe por cima da fachada do Cubs com a borda em coração (a curva de Castelhanos do símbolo),
       trazendo o texto da Cubs dentro */
    const soltaCoracao = abreCoracao($('#construcao'), '.pv-fim-txt');


    /* passagem para o fechamento: a linha do horizonte se desenha logo abaixo do texto da Cubs e abre no azul */
    const soltaLinha = abreLinha($('#fim'), $('#construcao'));

    /* 6. Fechamento: a curva de Castelhanos é traçada, o horizonte se estende e o sol nasce atrás dele.
       Somados, viram a âncora, que encolhe até o tamanho da assinatura. Tudo em branco. */
    const fecha = fechamento(desk);
    requestAnimationFrame(() => { if (ScrollTrigger.sort) ScrollTrigger.sort(); ScrollTrigger.refresh(); });
    return () => {
      soltaFoto && soltaFoto();
      soltaUnidades && soltaUnidades();
      soltaProvas && soltaProvas();
      soltaCoracao && soltaCoracao();
      soltaLinha && soltaLinha();
      fecha && fecha();
    };
  });

  /* depois que tudo carrega (fotos, fontes), as posições da rolagem são conferidas de novo (se já carregou, o quadro seguinte à
     montagem já confere) */
  if (document.readyState !== 'complete') addEventListener('load', () => { ScrollTrigger.refresh(); atualizaTopo(); });
  /* se a altura da página mudar depois de pronta (uma imagem, uma fonte), as posições da rolagem são recalculadas */
  if ('ResizeObserver' in window){
    let altura = document.body.scrollHeight, espera;
    new ResizeObserver(() => { const nova = document.body.scrollHeight; if (Math.abs(nova - altura) < 3) return; altura = nova; clearTimeout(espera); espera = setTimeout(() => ScrollTrigger.refresh(), 250); }).observe(document.body);
  }
  atualizaTopo();
}

/* Unidades no celular (lista): cada uma aparece quando chega; a foto sobe um pouco e clareia, o texto vem logo depois */
function unidadesLista(){
  const caps = $$('.cap');
  if (!caps.length) return null;
  const tws = [];
  caps.forEach(cap => {
    const foto = $('.cap-foto', cap), txt = $('.cap-txt', cap), gal = $('.cap-galeria', cap);
    tws.push(gsap.from(foto, { y:40, opacity:0, duration:1.1, ease:'expo.out', scrollTrigger:{ trigger:cap, start:'top 88%', once:true } }));
    tws.push(gsap.from([...txt.children, gal], { y:20, opacity:0, duration:.9, ease:'power3.out', stagger:.06, delay:.1,
      scrollTrigger:{ trigger:cap, start:'top 80%', once:true } }));
  });
  return () => {
    tws.forEach(t => { if (t.scrollTrigger) t.scrollTrigger.kill(); t.kill(); });
    caps.forEach(cap => gsap.set([$('.cap-foto', cap), ...$('.cap-txt', cap).children, $('.cap-galeria', cap)], { clearProps:'transform,opacity' }));
  };
}

/* Computador com mouse ou trackpad: a primeira unidade fica parada na tela enquanto a marca sobe por cima dela, como a ilha surge no
   céu da chegada. Tudo por transform, acertado no mesmo quadro da rolagem suave */
function fotoParada(){
  const quadro = $('.cap');
  if (!quadro || !$('#caps')) return null;
  /* enquanto a tela das unidades sobe, a primeira unidade anda para cima o mesmo tanto: na tela, ela não se mexe */
  const sobe = gsap.fromTo(quadro, { y: () => -innerHeight }, { y:0, ease:'none', immediateRender:true,
    scrollTrigger:{ trigger:'#caps', start:'top bottom', end:'top top', scrub:true, invalidateOnRefresh:true } });
  return () => {
    if (sobe.scrollTrigger) sobe.scrollTrigger.kill();
    sobe.kill();
    gsap.set(quadro, { clearProps:'y' });
  };
}

/* Unidades no computador: uma tela presa. A primeira aparece inteira quando a marca sobe (sem texto); quando a tela prende, entram o
   texto, os ambientes e o índice. Depois, a rolagem passa de uma unidade para a outra numa dissolução curta: a seguinte
   aparece por cima da anterior, sem subir, encolher ou escurecer nada. A última fica mais uma tela, enquanto o trilho das avaliações
   entra de lado por cima dela */
function unidadesTelaCheia(){
  const caps = $$('.cap'), quadros = caps, N = caps.length;
  const botoes = $$('#indice button'), linha = $('#indiceBarra'), indice = $('.indice'), palco = $('#caps');
  if (!N) return null;
  let atual = 0, destino = null, soltaDestino, ativo = false, vivo = true;
  const seg = () => Math.round(innerHeight * .75);
  /* os quadros de fora ficam transparentes e sem clique, mas continuam na página: o teclado e o leitor de tela chegam a todas */
  quadros.forEach((q,i) => { q.style.zIndex = i ? 1 : 2; q.style.pointerEvents = i ? 'none' : ''; gsap.set(q, { opacity: i ? 0 : 1 }); });
  temaPalco = 'escuro';
  const pecas = q => $$('.cap-txt, .cap-galeria', q);
  /* para de vez as animações desses elementos (o killTweensOf com uma lista maior deixa vivas as que ainda esperam o atraso) */
  const para = alvos => gsap.getTweensOf(alvos).forEach(t => t.kill());
  gsap.set(pecas(caps[0]), { opacity:0 });
  gsap.set(indice, { opacity:0 }); indice.style.pointerEvents = 'none';
  palco.classList.add('limpa');
  botoes.forEach((b,j) => b.setAttribute('aria-current', String(j === 0)));
  /* o texto da unidade à vista, o índice e o véu que dá leitura a eles só aparecem com a tela presa: enquanto a marca sobe, a foto
     aparece limpa */
  const mostraTexto = on => {
    if (!vivo || on === ativo) return;
    ativo = on;
    palco.classList.toggle('limpa', !on);
    gsap.to(pecas(quadros[atual]), { opacity: on ? 1 : 0, duration: on ? .7 : .25, ease:'power1.out', overwrite:true });
    gsap.to(indice, { opacity: on ? 1 : 0, duration:.5, overwrite:true });
    indice.style.pointerEvents = on ? '' : 'none';
  };
  /* o texto do quadro que sai some rápido, e o do que entra aparece logo depois: os textos nunca se sobrepõem */
  const mostra = k => {
    if (!vivo || k === atual) return;
    const velha = quadros[atual], nova = quadros[k];
    atual = k;
    botoes.forEach((b,j) => b.setAttribute('aria-current', String(j === k)));
    marcaTopo();
    quadros.forEach(q => { q.style.zIndex = q === nova ? 2 : 1; q.style.pointerEvents = q === nova ? '' : 'none'; });
    para(quadros.flatMap(pecas));
    gsap.to(pecas(velha), { opacity:0, duration:.2, ease:'power1.out' });
    gsap.fromTo(pecas(nova), { opacity:0 }, { opacity: ativo ? 1 : 0, duration:.5, delay:.22, ease:'power1.out' });
    gsap.to(nova, { opacity:1, duration:.7, ease:'power2.out', overwrite:'auto',
      onComplete(){
        if (!vivo || quadros[atual] !== nova) return;
        quadros.forEach(q => { if (q !== nova){ gsap.set(q, { opacity:0 }); gsap.set(pecas(q), { opacity:1 }); } });
      } });
  };
  /* com o teclado: quando o foco entra numa unidade que não está na tela (ou antes de a tela prender, com o texto ainda apagado),
     a tela vai até ela */
  const aoFocar = caps.map((c, i) => { const f = () => { if (atual !== i || !ativo) irUnidade(i); }; c.addEventListener('focusin', f); return f; });
  /* cada unidade ocupa três quartos de tela de rolagem; perto da troca há uma folga, para a foto não ir e voltar se a rolagem parar ali.
     Cada foto chega um pouco mais perto e assenta enquanto a pessoa rola por ela: a tela presa nunca fica parada demais */
  const fotosCaps = caps.map(c => $('.cap-foto', c));
  const quadroPor = s => {
    const x = Math.min(N - 1, s.progress * (s.end - s.start) / seg());
    linha.style.transform = `scaleX(${Math.max(0, Math.min(1, x / (N - 1))).toFixed(4)})`;
    fotosCaps.forEach((f, i) => { if (!f) return; const z = (1.05 - .05 * Math.max(0, Math.min(1, x - i + .5))).toFixed(4); f.style.transform = `scale(${z})`; f.style.setProperty('--zoom', z); });
    const k = Math.abs(x - atual) < .58 ? atual : Math.round(x);
    mostra(destino !== null ? destino : k);
  };
  const confere = s => { if (!vivo) return; mostraTexto(s.progress * (s.end - s.start) > innerHeight * .04); quadroPor(s); };
  const st = ScrollTrigger.create({ trigger:'#caps', start:'top top', end: () => '+=' + (seg() * (N - 1) + innerHeight),
    pin:true, anticipatePin:1, invalidateOnRefresh:true, onUpdate: confere, onRefresh: confere });
  /* onde cada unidade descansa na rolagem: no centro do seu trecho; a primeira, um pouco depois do começo, quando a névoa da marca
     já saiu de cima da foto */
  const pouso = i => i * seg() + (i ? 0 : Math.round(innerHeight * .34));
  /* quando a rolagem para, a página assenta no ponto de descanso da unidade que está à vista (um toque leve no mouse ou no trackpad
     não troca a unidade). Assenta depois de uma troca (no sentido em que a pessoa vinha) e depois de um deslize pequeno, que é o
     toque sem querer */
  let esperaAssenta = 0, sentido = 1, repouso = null;
  const assenta = () => {
    const y = scrollY, antes = repouso; repouso = y;
    if (!lenis || saltando || destino !== null || menu.classList.contains('aberto') || !st.isActive) return;
    const x = (y - st.start) / seg(), c = pouso(atual) / seg();
    if (atual === N - 1 && x > N - 1) return;       /* depois do centro da última, a pessoa está indo para as avaliações */
    if (atual === 0 && x < .3 && sentido < 0) return;   /* no começo, subindo, a pessoa está voltando para a marca */
    if (Math.abs(x - c) < .04) return;
    const semQuerer = antes !== null && Math.abs(y - antes) < seg() * .12;
    const centroAFrente = (sentido > 0 && x < c) || (sentido < 0 && x > c);
    if (!semQuerer && !centroAFrente) return;
    lenis.scrollTo(st.start + pouso(atual), { duration:.8, easing: t => 1 - Math.pow(1 - t, 3) });
  };
  const aoRolar = l => { if (l && l.direction) sentido = l.direction; clearTimeout(esperaAssenta); esperaAssenta = setTimeout(assenta, 260); };
  const soltaRolar = lenis ? lenis.on('scroll', aoRolar) : null;
  /* as fotos de abertura das cinco carregam antes de a seção chegar, para a troca nunca esperar imagem */
  const carrega = ScrollTrigger.create({ trigger:'#unidades', start:'top 220%', once:true,
    onEnter(){ $$('.cap-foto img.on').forEach(im => { im.loading = 'eager'; if (im.decode) im.decode().catch(() => {}); }); } });
  /* pelo menu ou pelo índice: a unidade escolhida aparece já na saída, sem passar pelas do meio; a escolha vale enquanto a página
     corre até lá, depois o quadro volta a seguir a rolagem */
  const solta = () => { clearTimeout(soltaDestino); soltaDestino = setTimeout(() => { destino = null; quadroPor(st); }, 1800); };
  irUnidade = i => {
    destino = i; mostra(i); solta();
    irPara(st.start + pouso(i));
  };
  return () => {
    vivo = false;
    clearTimeout(soltaDestino); clearTimeout(esperaAssenta);
    if (typeof soltaRolar === 'function') soltaRolar();
    carrega.kill();
    irUnidade = irUnidadeLista;
    temaPalco = 'claro';
    gsap.killTweensOf(quadros, 'opacity'); para(quadros.flatMap(pecas)); para(indice);
    caps.forEach((c, i) => c.removeEventListener('focusin', aoFocar[i]));
    quadros.forEach(q => { q.style.zIndex = ''; q.style.pointerEvents = ''; gsap.set(q, { clearProps:'opacity' }); pecas(q).forEach(el => { el.style.opacity = ''; }); });
    indice.style.opacity = ''; indice.style.pointerEvents = '';
    palco.classList.remove('limpa');
    botoes.forEach((b,j) => b.setAttribute('aria-current', String(j === 0)));
    linha.style.transform = '';
    fotosCaps.forEach(f => { if (f){ f.style.transform = ''; f.style.removeProperty('--zoom'); } });
  };
}

/* Coração (Construção): a borda de cima do off-white é a curva de Castelhanos, o "coração" do símbolo da marca, desenhada
   com os mesmos pontos do símbolo e inclinada como nas peças da marca (o lado esquerdo mais alto, o direito mais baixo).
   O off-white sobe por cima da fachada do Cubs, que fica parada, e o texto da Cubs vem dentro dele, sempre logo abaixo do bico
   da curva, como o título dentro do arco da Era: nada aparece vazio e nenhuma letra é cortada. Quando o off-white cobre a tela,
   o texto está no lugar */
/* a curva do símbolo: o lado de cima do traço em V, do bico até a ponta de um dos braços (unidades do desenho; y para cima é
   negativo). O símbolo é simétrico: o outro braço é o espelho deste */
const CURVA_CORACAO = [[0,0],[11,-13.28],[34.71,-38.31],[73.52,-54.69],[110.42,-70.27],[143.06,-70.54],[160.13,-69.49]];
function bracoCoracao(lado, giro){          /* lado: -1 o braço esquerdo, 1 o direito */
  const pts = [], c = Math.cos(giro), s = Math.sin(giro);
  for (let k = 0; k < 2; k++){
    const [a, b, d, e] = CURVA_CORACAO.slice(k * 3, k * 3 + 4);
    for (let i = k ? 1 : 0; i <= 28; i++){
      const t = i / 28, u = 1 - t;
      const x = (u*u*u*a[0] + 3*u*u*t*b[0] + 3*u*t*t*d[0] + t*t*t*e[0]) * lado;
      const y = u*u*u*a[1] + 3*u*u*t*b[1] + 3*u*t*t*d[1] + t*t*t*e[1];
      pts.push([x * c - y * s, x * s + y * c]);      /* girada no sentido horário da tela */
    }
  }
  return pts;                                         /* do bico até a ponta */
}
/* a borda inteira, de ponta a ponta da tela, com o bico em (xc, 0): o braço esquerdo até a margem esquerda (seguindo a direção
   da ponta, se ela acabar antes) e o direito até o ponto mais alto, depois reto até a margem direita */
function bordaCoracao(W, H){
  const retrato = W < 901, giro = 18 * Math.PI / 180, xc = W * (retrato ? .4 : .42);
  const esq = bracoCoracao(-1, giro), dir = bracoCoracao(1, giro), ponta = esq[esq.length - 1];
  const esc = retrato ? Math.max(xc / -ponta[0], H * .34 / -ponta[1]) : xc / -ponta[0];
  const L = esq.map(([x, y]) => [xc + x * esc, y * esc]).reverse();
  const pts = [];
  if (L[0][0] > 0){
    const [x0, y0] = L[0], [x1, y1] = L[1], t = -x0 / (x0 - x1);
    pts.push([0, y0 + t * (y0 - y1)], ...L);
  } else {
    const i = Math.max(1, L.findIndex(q => q[0] >= 0)), [xa, ya] = L[i - 1], [xb, yb] = L[i];
    pts.push([0, ya + (yb - ya) * (0 - xa) / (xb - xa)], ...L.slice(i));
  }
  /* o braço direito tem escala própria: o ponto mais alto dele cai na margem direita, e a curva chega lá deitada, sem um trecho reto */
  const iPico = dir.reduce((m, q, i) => q[1] < dir[m][1] ? i : m, 0);
  const escD = Math.min(esc * 2.2, Math.max(esc * .8, (W - xc) / dir[iPico][0]));
  const R = dir.map(([x, y]) => [xc + x * escD, y * escD]);
  const pico = iPico;
  let fim = false;
  for (let i = 1; i <= pico && !fim; i++){
    if (R[i][0] >= W){ const [xa, ya] = R[i - 1], [xb, yb] = R[i]; pts.push([W, ya + (yb - ya) * (W - xa) / (xb - xa)]); fim = true; }
    else pts.push(R[i]);
  }
  if (!fim) pts.push([W, R[pico][1]]);
  return { pts, alto: -Math.min(...pts.map(q => q[1])) };
}
function abreCoracao(capa, antes){
  if (!capa || !capa.offsetParent) return null;
  const sol = $('.capa-sol', capa), txt = $('.capa-txt', capa), est = { p:0 }, sai = antes ? $(antes) : null;
  let borda = { pts:[], alto:0 }, medida = '';
  const desenha = () => {
    const W = sol.offsetWidth, H = innerHeight, Hs = sol.offsetHeight;
    if (medida !== W + 'x' + H){ medida = W + 'x' + H; borda = bordaCoracao(W, H); }
    /* na tela, o topo da capa vai de baixo (H) até o alto (0); o bico vai de H + a altura da curva até 0, um pouco mais rápido:
       no começo a curva inteira está abaixo da tela, no fim ela inteira está acima */
    const p = est.p, desce = borda.alto * (1 - p), yb = -sol.offsetTop + desce;
    const lista = borda.pts.map(([x, y]) => `${x.toFixed(1)}px ${(yb + y).toFixed(1)}px`);
    sol.style.clipPath = `polygon(0px ${Hs + 4}px, ${lista.join(', ')}, ${W}px ${Hs + 4}px)`;
    txt.style.transform = desce > .5 ? `translate3d(0,${desce.toFixed(1)}px,0)` : '';
  };
  const tl = gsap.timeline({ defaults:{ ease:'none' }, scrollTrigger:{ trigger:capa, start:'top bottom', end:'top top', scrub:true,
    invalidateOnRefresh:true, onRefresh: desenha } });
  tl.to(est, { p:1, duration:1, onUpdate: () => { desenha(); marcaTopo(); } }, 0);
  /* o texto que estava na fachada sai antes de a curva chegar nele: o off-white sobe sobre a fachada limpa */
  if (sai) tl.fromTo(sai, { opacity:1 }, { opacity:0, duration:.13 }, 0);
  /* com o teclado: o foco no link da Cubs antes de o coração terminar de subir leva a página até o fim da subida (antes disso o
     texto ainda está deslocado para baixo e o link ficaria fora da tela) */
  const foco = () => { const st = tl.scrollTrigger; if (st && st.progress < 1) irPara(Math.round(st.end)); };
  capa.addEventListener('focusin', foco);
  desenha();
  return () => capa.removeEventListener('focusin', foco);
}

/* Linha do horizonte (passagem para o fechamento): o fechamento encaixa por cima do fim da Construção, com o topo logo abaixo do
   texto da Cubs (medido pelo próprio texto; a Construção ganha uma margem negativa embaixo). Quando o off-white termina de cobrir a tela,
   uma linha azul de 2 px se desenha da esquerda para a direita nesse ponto; depois o azul abre só para baixo, sem passar por cima
   do texto, e a primeira palavra do símbolo, que está no alto do fechamento, aparece logo embaixo da linha */
function abreLinha(fim, antes){
  if (!fim || !antes) return null;
  const est = { p:0 }, ease = gsap.parseEase('power2.inOut'), desce = gsap.parseEase('power2.out'), LIN = .36;
  let y0 = innerHeight * .78;
  const encaixa = () => {
    const ct = $('.capa-txt', antes), pecas = $$('.capa-tit, .capa-lado', ct);
    const fundo = Math.max(...pecas.map(e => e.offsetTop + e.offsetHeight));
    const folga = Math.max(40, innerHeight * .08);
    const sobe = Math.max(0, Math.round(antes.offsetHeight - fundo - folga));
    antes.style.marginBottom = -sobe + 'px';
    y0 = antes.offsetHeight - sobe;
  };
  const desenha = () => {
    const p = est.p, W = fim.offsetWidth, H = fim.offsetHeight;
    let r = 0, b = 0;
    if (p < LIN){ r = W * (1 - ease(p / LIN)); b = H - 2; }
    else b = (H - 2) * (1 - desce((p - LIN) / (1 - LIN)));
    if (p <= 0) r = W;
    fim.style.clipPath = `inset(0px ${r.toFixed(1)}px ${b.toFixed(1)}px 0px)`;
    fim._p = p;
  };
  encaixa();
  ScrollTrigger.addEventListener('refreshInit', encaixa);
  const tl = gsap.timeline({ defaults:{ ease:'none' }, scrollTrigger:{ trigger:fim, start: () => 'top ' + Math.round(y0) + 'px', end:'top 22%', scrub:true,
    invalidateOnRefresh:true, onRefresh: desenha } });
  tl.to(est, { p:1, duration:1, onUpdate: () => { desenha(); marcaTopo(); atualizaBarra(); } }, 0);
  desenha();
  return () => {
    ScrollTrigger.removeEventListener('refreshInit', encaixa);
    antes.style.marginBottom = ''; fim.style.clipPath = ''; delete fim._p;
  };
}

/* Avaliações no computador: o palco fica preso na tela (sticky) e o trilho anda para a esquerda com a rolagem.
   Ele começa fora, à direita, quando a última unidade está na tela: o off-white entra por cima dela, que fica
   parada embaixo. Depois passam os depoimentos e, no fim, a fachada do Cubs fica um instante parada antes do coração subir.
   As fotos e as frases andam num ritmo um pouco diferente do trilho, e cada depoimento aparece quando chega na tela */
const PV_RITMO = 1.35;      /* quanto o trilho anda para o lado a cada tela rolada, em larguras de tela */
const PV_PAUSA = .3;       /* a fachada do Cubs parada, antes do coração, em telas */
function avaliacoesTrilho(){
  const sec = $('#avaliacoes'), trilho = $('#pvTrilho');
  if (!sec || !trilho) return null;
  const largura = () => trilho.scrollWidth;
  const viagem = () => largura() / PV_RITMO * innerHeight / innerWidth;
  const ajusta = () => { sec.style.height = Math.round(innerHeight * (2 + PV_PAUSA) + viagem()) + 'px'; };
  ajusta();
  ScrollTrigger.addEventListener('refreshInit', ajusta);
  const paineis = $$('.pv-abre, .pv, .pv-fim', trilho);
  const baseX = el => { let x = 0, e = el; while (e && e !== trilho){ x += e.offsetLeft; e = e.offsetParent; } return x; };
  /* o que anda num ritmo próprio: as fotos (para um lado) e as frases (para o outro) */
  const moveis = [...$$('.pv .pv-foto img', trilho).map(el => ({ el, f:-.06 })), ...$$('.pv .pv-frase', trilho).map(el => ({ el, f:.035 })),
    { el: $('.pv-fim .pv-foto img', trilho), f:-.08 }].filter(m => m.el);
  let medidas = [];
  const mede = () => {
    medidas = moveis.map(m => { const box = m.el.parentElement; return { ...m, c: baseX(box) + box.offsetWidth / 2, w: box.offsetWidth }; });
    paineis.forEach(p => { p._x = baseX(p); });
  };
  const anima = () => {
    const W = innerWidth, x = +gsap.getProperty(trilho, 'x') || 0;
    /* as frases andam pela largura da tela; as fotos andam dentro da própria moldura, no máximo o que sobra do zoom de 12%:
       a borda da foto nunca aparece */
    medidas.forEach(m => {
      const d = (x + m.c - W / 2) / W;
      if (m.el.tagName === 'IMG'){
        const k = Math.max(-1, Math.min(1, d / 1.2)), lim = m.w * .055;
        m.el.style.transform = `translate3d(${(k * Math.sign(m.f) * lim).toFixed(1)}px,0,0) scale(1.12)`;
      } else m.el.style.transform = `translate3d(${(d * m.f * W).toFixed(1)}px,0,0)`;
    });
    /* o depoimento começa a aparecer quando ainda está um pouco fora, à direita: chega na tela já visível */
    paineis.forEach(p => { if (!p.classList.contains('on') && x + p._x < W * 1.12) p.classList.add('on'); });
    marcaTopo();
  };
  const tw = gsap.fromTo(trilho, { x: () => innerWidth }, { x: () => -(largura() - innerWidth), ease:'none',
    scrollTrigger:{ trigger:sec, start:'top top', end: () => '+=' + viagem(), scrub:true, invalidateOnRefresh:true,
      onRefresh(){ mede(); anima(); }, onUpdate: anima } });
  mede(); anima();
  /* as fotos carregam antes de o trilho chegar */
  const carrega = ScrollTrigger.create({ trigger:sec, start:'top 300%', once:true,
    onEnter(){ $$('img', trilho).forEach(im => { im.loading = 'eager'; if (im.decode) im.decode().catch(() => {}); }); } });
  /* pelo menu: para com o off-white já cobrindo a tela */
  irAvaliacoes = () => irPara(Math.round(tw.scrollTrigger.start + innerHeight / PV_RITMO + 2));
  return () => {
    ScrollTrigger.removeEventListener('refreshInit', ajusta);
    carrega.kill();
    if (tw.scrollTrigger) tw.scrollTrigger.kill();
    tw.kill();
    gsap.set(trilho, { clearProps:'transform' });
    moveis.forEach(m => { m.el.style.transform = ''; });
    sec.style.height = '';
    irAvaliacoes = () => irPara('#avaliacoes');
  };
}
/* Avaliações no celular: as duas linhas do título entram pelos lados enquanto a seção sobe; os depoimentos aparecem na faixa */
function avaliacoesCelular(){
  const [l1, l2] = $$('.pv-tit > span');
  if (l1 && l2){
    /* as duas linhas entram pelos lados uma vez, quando o título chega: parada no meio da rolagem, a tela nunca mostra o título cortado */
    const st = { trigger:'.pv-abre', start:'top 80%', once:true };
    gsap.fromTo(l1, { xPercent:-14, opacity:0 }, { xPercent:0, opacity:1, duration:1.2, ease:'expo.out', scrollTrigger:st });
    gsap.fromTo(l2, { xPercent:14, opacity:0 }, { xPercent:0, opacity:1, duration:1.2, ease:'expo.out', delay:.08, scrollTrigger:{ ...st } });
  }
  entra('.pv-abre-txt', { y:20, opacity:0, duration:1, ease:'power3.out' }, '.pv-abre-txt', 'top 92%');
  const cards = $$('.pv');
  gsap.from(cards, { y:26, opacity:0, duration:1, ease:'power3.out', stagger:.08,
    scrollTrigger:{ trigger:'#provasGrade', start:'top 88%', once:true, onEnter(){ cards.forEach(c => c.classList.add('on')); } } });
  entra([...$$('.pv-fim .pv-frase .ln'), $('.pv-fim .pv-corpo')], { y:30, opacity:0, duration:1.1, ease:'expo.out', stagger:.08 }, '.pv-fim', 'top 55%');
  return null;
}

/* O símbolo se desenha: curva (Castelhanos) → horizonte → sol → âncora → assinatura */
let tintaF = null;
function fechamento(desk){
  const palco = $('#fimPalco'), simb = $('#fimSimb'), legs = $$('.fim-leg');
  const pena = $('#fimPena'), sol = $('#fimSol'), hor = $('#fimHor'), fant = $('#fimFant');
  if (!palco || !simb || !pena) return null;
  if (!tintaF){
    const svgA = $('#fimAssin svg');
    if (svgA){
      const g = document.createElementNS('http://www.w3.org/2000/svg','g');
      while (svgA.firstChild) g.appendChild(svgA.firstChild);
      svgA.appendChild(g);
      tintaF = preparaEscrita(svgA, g);
    }
  }
  const Lp = Math.ceil(pena.getTotalLength()) + 2;
  pena.setAttribute('stroke-dasharray', Lp);
  /* onde o símbolo grande fica: centrado no espaço livre abaixo das legendas */
  const geo = () => {
    const W = palco.clientWidth, H = palco.clientHeight;
    let x = 0, y = 0, el = simb;
    while (el && el !== palco){ x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; }
    const w = simb.offsetWidth, h = simb.offsetHeight;
    const caixa = $('#fimLegs'), base = caixa.offsetTop + caixa.offsetHeight + (desk ? 28 : 22);
    const livre = Math.max(H - base, H * .45);
    const bh = Math.min(livre * (desk ? .76 : .8), W * (desk ? .5 : .72) * .9461, 600);
    return { s: bh / h, dx: W / 2 - (x + w / 2), dy: base + livre * .4 - (y + h / 2) };
  };
  const tl = gsap.timeline({ defaults:{ ease:'none' }, scrollTrigger:{ trigger:'#fim', start:'top top', end: () => '+=' + innerHeight * (desk ? 1.9 : 1.75),
    pin:true, scrub:1, anticipatePin:1, invalidateOnRefresh:true,
    onUpdate(s){ fimCTA = s.progress > .01; atualizaBarra(); } } });
  fimCTA = false;
  const leg = (i, a, b) => {
    tl.fromTo(legs[i], { opacity:0, y:18 }, { opacity:1, y:0, duration:.45, ease:'power2.out', immediateRender:true }, a)
      .to(legs[i], { opacity:0, y:-14, duration:.35, ease:'power2.in' }, b);
  };
  tl.fromTo(simb, { x: () => geo().dx, y: () => geo().dy, scale: () => geo().s }, { x:0, y:0, scale:1, duration:1.4, ease:'power2.inOut', immediateRender:true }, 8.2)
    .fromTo(pena, { attr:{ 'stroke-dashoffset': Lp } }, { attr:{ 'stroke-dashoffset': 0 }, duration:1.6, ease:'power1.inOut', immediateRender:true }, .9)
    .fromTo(hor, { scaleX:0, transformOrigin:'50% 50%' }, { scaleX:1, duration:1.2, ease:'power2.inOut', immediateRender:true }, 2.9)
    .fromTo(sol, { y:150 }, { y:0, duration:1.4, ease:'power2.out', immediateRender:true }, 4.6)
    .to(fant, { opacity:0, duration:.8 }, 6.5)
    .fromTo('.fim-word', { clipPath:'inset(0% 100% 0% 0%)', y:10 }, { clipPath:'inset(0% 0% 0% 0%)', y:0, duration:.9, ease:'power2.out', immediateRender:true }, 9.0)
    .fromTo('#fimBtn', { opacity:0, y:14 }, { opacity:1, y:0, duration:.6, ease:'power2.out', immediateRender:true }, 10.0)
    .to({}, { duration:.6 }, 10.9);
  /* uma palavra a cada traço: a primeira (Afeto) já está lá quando o azul abre e fica enquanto a curva se desenha */
  tl.to(legs[0], { opacity:0, y:-14, duration:.35, ease:'power2.in' }, 2.6);
  leg(1, 2.95, 4.4);
  leg(2, 4.8, 6.3);
  leg(3, 6.6, 8.1);
  if (tintaF) tl.fromTo(tintaF.el, { attr:{ x: tintaF.ini } }, { attr:{ x: tintaF.fim }, duration:1.2, ease:'power1.inOut', immediateRender:true }, 9.3);
  return () => { fimCTA = null; };
}

/* Escrita: uma máscara com borda suave corre da esquerda para a direita sobre a assinatura */
let nTinta = 0;
function preparaEscrita(svg, alvo){
  if (!svg || !alvo) return null;
  /* retângulo 1,25× a largura da assinatura: 88% opaco e uma borda suave curta, como a ponta da caneta */
  const bb = alvo.getBBox(), w = bb.width * 1.25, folga = bb.height * .5, id = 'tinta' + (++nTinta);
  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML = `<linearGradient id="g-${id}" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#fff"/><stop offset=".88" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>
    <mask id="m-${id}" maskUnits="userSpaceOnUse" x="${bb.x - w}" y="${bb.y - folga}" width="${bb.width + 2 * w}" height="${bb.height + 2 * folga}"><rect x="${bb.x - w}" y="${bb.y - folga / 2}" width="${w}" height="${bb.height + folga}" fill="url(#g-${id})"/></mask>`;
  svg.prepend(defs);
  alvo.setAttribute('mask', `url(#m-${id})`);
  return { el: defs.querySelector('rect'), ini: bb.x - w, fim: bb.x - bb.width * .04 };
}

/* um endereço com # (#u-3, #avaliacoes...): a página vai até a unidade ou a seção depois de montada (antes disso, as posições não
   valem: a chegada e as unidades ficam presas na rolagem) */
function vaiParaHash(){
  let id = '';
  try { id = decodeURIComponent(location.hash.slice(1)); } catch(e){ return; }
  if (!id || id === 'inicio') return;
  const u = /^u-(\d+)$/.exec(id);
  if (u){ const i = +u[1] - 1; if (i >= 0 && i < UNIDADES.length) irUnidade(i); return; }
  /* as mesmas idas do menu */
  if (id === 'unidades') irAbertura(); else if (id === 'marca') irMarca(); else if (id === 'avaliacoes') irAvaliacoes();
  else { const el = document.getElementById(id); if (el && !el.closest('#menu')) irPara(el); }
}
/* só depois que a página carregou e as posições da rolagem assentaram */
const vaiParaHashDepois = () => {
  if (!location.hash) return;
  const vai = () => setTimeout(vaiParaHash, 450);
  if (document.readyState === 'complete') vai(); else addEventListener('load', vai, { once:true });
};

/* ── Início ── */
if (temGSAP && !reduz){
  /* a página vira a versão animada quando as fontes chegam (as linhas da frase da marca são cortadas com a fonte certa), no mesmo
     quadro em que a coreografia monta tudo: numa conexão lenta, até lá vale a versão sem animação, e nenhum pedaço de outra seção
     aparece por cima da chegada. Se as fontes demorarem mais de 3 s, a animação começa assim mesmo */
  let comecou = false;
  const comeca = () => {
    if (comecou) return;
    comecou = true;
    document.documentElement.classList.add('anima');
    if (matchMedia('(min-width: 901px)').matches) document.documentElement.classList.add('h');
    coreografia(); entradaHeroi();
    vaiParaHashDepois();
  };
  const pronto = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  pronto.then(comeca);
  setTimeout(comeca, 3000);
} else {
  document.documentElement.classList.remove('entrando');
  vaiParaHashDepois();
}
}
(() => {
  let foi = false;
  const vai = () => { if (foi) return; foi = true; requestAnimationFrame(() => setTimeout(site, 0)); };
  const foto = $('.ilha img');
  if (foto && foto.decode) foto.decode().then(vai, vai); else vai();
  setTimeout(vai, 1500);
})();
