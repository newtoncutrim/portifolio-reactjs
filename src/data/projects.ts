const projects = [
  /* {
    id: 1,
    url: 'turtle-movie',
    img: '/projects/turtlemovie/turtle.png',
    title: 'Turtle Movie',
    type: 'Website',
    icon: '/projects/turtlemovie/icon.png',
    github: 'https://github.com/EvanderInacio/Turtle-Movie',
    web: 'https://turtle-movie.vercel.app/',
    description:
      'Explore uma plataforma incrível que utiliza a poderosa API da TMDB para proporcionar a você uma experiência completa de descoberta de filmes e séries. Descubra as obras mais bem avaliadas da semana ou do dia, e mergulhe em uma seleção das obras mais populares da plataforma. Além disso, explore as obras com as maiores notas, para ter certeza de que está assistindo o melhor conteúdo disponível.',
    tags: [
      {
        name: 'React Js',
        icon: '/skills/react.svg',
        color: '#61DAFB',
        rgb: '97, 218, 251'
      },
      {
        name: 'React Router',
        icon: '/skills/react-router.svg',
        color: '#F44250',
        rgb: '244, 66, 80'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Styled Components',
        icon: '/skills/styled-components.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      }
    ],
    print: [
      {
        name: 'Home',
        description:
          'Homepage do site, onde são exibidos os filmes e series mais populares da semana.',
        img: '/projects/turtlemovie/turtle-movie.png'
      },
      {
        name: 'Filmes Populares',
        description:
          'Pagina que tem os filmes mais populares, assim como aqueles com a maior nota de todos os tempos.',
        img: '/projects/turtlemovie/movie-popular.png'
      },
      {
        name: 'Séries Populares',
        description:
          'Pagina que contem as séries mais populares, assim como aqueles com a maior nota de todos os tempos.',
        img: '/projects/turtlemovie/series-popular.png'
      },
      {
        name: 'Pagina Detalhes',
        description:
          'Pagina que contem os detalhes de um filme/serie especifico. Como a data de lançamento, a duração (no caso de filmes), a produção, o idioma e o país de origem. ',
        img: '/projects/turtlemovie/detail-home.png'
      },
      {
        name: 'Detalhes Atores',
        description:
          'Pagina que contem os detalhes dos personagens assim como a opção de ver a ficha técnica de cada pessoa específica.',
        img: '/projects/turtlemovie/detail-elenco.png'
      },
      {
        name: 'Detalhes Video',
        description: 'Pagina que contem o trailer do filme/serie especifico',
        img: '/projects/turtlemovie/detail-video.png'
      },
      {
        name: 'Atores Populares',
        description:
          'Explore também a lista de atores populares e descubra quais filmes e séries eles já participaram.',
        img: '/projects/turtlemovie/peoples.png'
      },
      {
        name: 'Atores Detalhes',
        description:
          'Pagina que contem os detalhes dos personagens assim como a ficha técnica de cada pessoa específica. Você poderá acompanhar a carreira de seus atores favoritos e encontrar novas obras para assistir.',
        img: '/projects/turtlemovie/detail-people.png'
      }
    ],
    status: 'Completo',
    year: '2022',
    gif: '/projects/turtlemovie/turtle_movie.mp4',
    backgroundImage: '/projects/turtlemovie/detail-home.png',
    video:
      'https://www.youtube.com/watch?v=wt2g4q2md9g&ab_channel=EvanderIn%C3%A1cio'
  },
 */
  /* {
    id: 2,
    url: 'whatsapp',
    img: '/projects/whatsapp/login.png',
    title: 'WhatsApp',
    type: 'Website',
    icon: '/projects/whatsapp/icon.svg',
    github: 'https://github.com/EvanderInacio/WhatsApp',
    web: 'https://whatsapp-green.vercel.app/',
    description:
      'Clone do WhatsApp web, usando ReactJs e Styled Components para fazer a estilização e o firebase e suas funcionalidades como o AUTH para autenticação de usuários e FIRESTORE para armazenar as conversas de cada pessoa cadastrada.  Com a opção de dark mode para alterar o tema e assim ficar com uma interface agradável.',
    tags: [
      {
        name: 'React Js',
        icon: '/skills/react.svg',
        color: '#61DAFB',
        rgb: '97, 218, 251'
      },
      {
        name: 'JavaScript',
        icon: '/skills/javascript.svg',
        color: '#F7DF1E',
        rgb: '247, 223, 30'
      },
      {
        name: 'Styled Components',
        icon: '/skills/styled-components.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      {
        name: 'Firebase',
        icon: '/skills/firebase.svg',
        color: '#FFCA28',
        rgb: '255, 202, 40'
      }
    ],
    print: [
      {
        name: 'Login',
        description:
          'Pagina de login com a opção de logar pelo google ou pelo github.',
        img: '/projects/whatsapp/login.png'
      },
      {
        name: 'Home Light',
        description:
          'Pagina de inicio apos o usuário se autenticar, onde exibe uma mensagem de boas vindas, e no canto esquerdo uma lista de contatos.',
        img: '/projects/whatsapp/home-light.png'
      },
      {
        name: 'Home Dark',
        description: 'Pagina de inicio na versão dark mode.',
        img: '/projects/whatsapp/home-dark.png'
      },
      {
        name: 'Chat',
        description:
          'Pagina de chat exibe a informações de um chat especifico mostrando as mensagens enviadas por você e aquelas respondidas pelo outro contato.',
        img: '/projects/whatsapp/chat.png'
      },
      {
        name: 'Chat Emoji',
        description: 'Opção de escolher um emoji.',
        img: '/projects/whatsapp/chat-emoji.png'
      },
      {
        name: 'Novo Chat',
        description: 'Aba com uma lista contendo a opção de escolha de um novo chat.',
        img: '/projects/whatsapp/new-chat.png'
      }
    ],
    status: 'Completo',
    year: '2022',
    gif: '/projects/whatsapp/whatsapp.mp4',
    backgroundImage: '/projects/whatsapp/home-dark.png',
    video:
      'https://www.youtube.com/watch?v=PZpp2sCm0zY&t=11s&ab_channel=EvanderIn%C3%A1cio'
  }, */

  {
    id: 3,
    url: 'playstation',
    img: '/projects/playstation/playstation.webp',
    title: 'PlayStation',
    type: 'Website',
    icon: '/projects/playstation/icon.svg',
    github: 'https://github.com/newtoncutrim/playstatiom',
    web: 'https://spiffy-salamander-1c275f.netlify.app/',
    description: 'Explore a plataforma de comércio eletrônico da PlayStation, dedicada à venda dos mais incríveis controles de videogame da marca. O website apresenta uma extensa lista de diferentes tipos e modelos de controles, tudo isso com uma estética dark mode envolvente e uma interface intuitiva que cativará você, repleta de animações sutis e atraentes.',
    tags: [
      {
        name: 'Html',
        icon: '/skills/html.svg',
        color: '#E34F26',
        rgb: '227, 79, 38'
      },
      {
        name: 'Css',
        icon: '/skills/css.svg',
        color: '#1572B6',
        rgb: '21, 114, 182'
      },
      {
        name: 'JavaScript',
        icon: '/skills/javascript.svg',
        color: '#F7DF1E',
        rgb: '247, 223, 30'
      }
    ],
    print: [
      {
        name: 'Home',
        description:
          'Pagina inicial do site com uma animação no controle do playstation, assim como a possibilidade de ver sobre e também explorar outros controles.',
        img: '/projects/playstation/playstation-home.png'
      },
      {
        name: 'Home Card',
        description:
          'Segunda parte da pagina inicial do site que mostra 3 opção de compra de controles.',
        img: '/projects/playstation/playstation-home-2.png'
      },
      {
        name: 'Sobre',
        description:
          'Pagina que mostra uma geral dos controles disponíveis no site.',
        img: '/projects/playstation/playstation-about.png'
      },
      {
        name: 'Produtos',
        description:
          'Pagina de produtos que mostra uma lista com mais detalhes sobre a diferença de cada controle.',
        img: '/projects/playstation/playstation-product.png'
      },
      {
        name: 'Produto Detalhes',
        description:
          'Segunda parte da pagina de produtos mostra a lista com mais detalhes sobre a diferença de cada controle.',
        img: '/projects/playstation/playstation-product-2.png'
      },
      {
        name: 'Venda',
        description:
          'Pagina de compra onde existe um formulário com a opção escolhida e o cadastro de compra.',
        img: '/projects/playstation/playstation-buy.png'
      },
      {
        name: 'Contato',
        description: 'Pagina de contato com formulário de contato.',
        img: '/projects/playstation/playstation-contact.png'
      }
    ],
    status: 'Completo',
    year: '2022',
    gif: '/projects/playstation/playstation.mp4',
    backgroundImage: '/projects/playstation/playstation-home.png',
    video:
      'https://www.youtube.com'
  },

  /* {
    id: 4,
    url: 'podcastr',
    img: '/projects/podcastr/podcastr-home.png',
    title: 'Podcastr',
    type: 'Website',
    icon: '/projects/podcastr/icon.svg',
    github: 'https://github.com/EvanderInacio/Podcastr',
    web: 'https://podcastr-evander.vercel.app/',
    description:
      'Podcastr é uma plataforma construída para transmissão de podcast. Com opção de escolha de um determinado podcast e ainda podendo ver os detalhes de um podcast como a data de sua publicação, o assunto dele assim como uma breve descrição e seus participates.',
    tags: [
      {
        name: 'Next JS',
        icon: '/skills/next-js.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Sass',
        icon: '/skills/sass.svg',
        color: '#CC6699',
        rgb: '204, 102, 153'
      }
    ],
    print: [
      {
        name: 'Home',
        description:
          'Pagina inicial que mostra os podcast em destaque e ao lado o player onde pode selecionar e escutar um determinado podcast.',
        img: '/projects/podcastr/podcastr-home.png'
      },
      {
        name: 'Lista de Podcast',
        description:
          'Segunda parte da pagina inicial que mostra todos os podcasts.',
        img: '/projects/podcastr/podcastr-home-2.png'
      },
      {
        name: 'Detalhes',
        description:
          'Pagina de detalhes onde mostra os detalhes de um determinado podcast como a data que foi publicado, seus participates e um breve descrição dos temas abordados.',
        img: '/projects/podcastr/podcastr-detail.png'
      }
    ],
    status: 'Completo',
    year: '2022',
    gif: '/projects/podcastr/podcastr.mp4',
    backgroundImage: '/projects/podcastr/podcastr-home.png',
    video:
      'https://www.youtube.com/watch?v=a_OoBSceC80&ab_channel=EvanderIn%C3%A1cio'
  },

  {
    id: 5,
    url: 'github-blog',
    img: '/projects/github-blog/github-blog-home.png',
    title: 'Github Blog',
    type: 'Website',
    icon: '/projects/github-blog/logo.svg',
    github: 'https://github.com/EvanderInacio/Github-Blog',
    web: 'https://github-blog-evander.vercel.app/',
    description:
      'Github Blog é um website que simula um blog, pegando os dados da api do Github atravez de issues do proprio repositorio onde o projeto foi construido e assim ele exibe em forma de lista podendo pesquisar pelo o nome e ver os detalhes de cada publicação.',
    tags: [
      {
        name: 'Next JS',
        icon: '/skills/next-js.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Stitches',
        icon: '/skills/stitches.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      }
    ],
    print: [
      {
        name: 'Home',
        description:
          'Pagina inicial mostra dados do usuário a quem ela está atrelado usando a api do github, ela trás dados como o nome e a foto do usuário do github, assim o numero de seguidores e a descrição.',
        img: '/projects/github-blog/github-blog-home.png'
      },
      {
        name: 'Blog Lista',
        description:
          'Segunda parte da pagina inicial lista as postagens publicadas através de issues do repositório github onde ela está atrelado, utilizando a própria api do github para buscar esses dados.',
        img: '/projects/github-blog/github-blog-home-2.png'
      },
      {
        name: 'Detalhes',
        description:
          'Pagina de detalhes atrás a informação completa postada em uma determinada issues, mostrando como se fosse um blog.',
        img: '/projects/github-blog/github-blog-detail.png'
      },
      {
        name: 'Detalhes Images',
        description:
          'Segunda parte da pagina de detalhes mostrando a possibilidade de exibir imagens.',
        img: '/projects/github-blog/github-blog-detail-2.png'
      }
    ],
    status: 'Completo',
    year: '2022',
    gif: '/projects/github-blog/github-blog.mp4',
    backgroundImage: '/projects/github-blog/github-blog-home.png',
    video:
      'https://www.youtube.com/watch?v=RcKQNz0n6Ts&ab_channel=EvanderIn%C3%A1cio'
  },

  {
    id: 6,
    url: 'pomodoro',
    img: '/projects/pomodoro/pomodoro-home.png',
    title: 'Pomodoro Timer',
    type: 'App',
    icon: '/projects/pomodoro/timer.png',
    github: 'https://github.com/EvanderInacio/Pomodoro-Timer',
    web: 'https://pomodoro-timer-evander.vercel.app/',
    description:
      'Pomodoro, o objetivo deste aplicativo é ajudá-lo a se concentrar em qualquer tarefa em que esteja trabalhando, como estudar, escrever ou codificar. Este aplicativo é inspirado na Técnica Pomodoro, que é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo.',
    tags: [
      {
        name: 'React Js',
        icon: '/skills/react.svg',
        color: '#61DAFB',
        rgb: '97, 218, 251'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Styled Components',
        icon: '/skills/styled-components.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      {
        name: 'React-hook-form',
        icon: '/skills/react-hook-form.svg',
        color: '#EC5990',
        rgb: '236, 89, 144'
      }
    ],
    print: [
      {
        name: 'Home',
        description:
          'Pagina de inicio onde você pode definir uma tarefa especifica e o tempo que ela deve durar.',
        img: '/projects/pomodoro/pomodoro-home.png'
      },
      {
        name: 'Tarefa Ativa',
        description:
          'Tarefa ja em execução com a opção de interromper essa tarefa.',
        img: '/projects/pomodoro/pomodoro-home-action.png'
      },
      {
        name: 'Histórico',
        description:
          'Pagina de lista onde são exibidas as tarefas ja realiza, as que estão em andamento e as interrompidas.',
        img: '/projects/pomodoro/pomodoro-history.png'
      },
      {
        name: 'Lista de Tarefas',
        description: 'Pagina mostrando a lista de tarefas.',
        img: '/projects/pomodoro/pomodoro-history-2.png'
      }
    ],
    status: 'Completo',
    year: '2023',
    gif: '/projects/pomodoro/pomodoro.mp4',
    backgroundImage: '/projects/pomodoro/pomodoro-home.png',
    video:
      'https://www.youtube.com/watch?v=c6fEo2CYj0k&ab_channel=EvanderIn%C3%A1cio'
  },

  {
    id: 7,
    url: 'pokedex',
    img: '/projects/pokedex/pokedex-home.png',
    title: 'Pokedex',
    type: 'Website',
    icon: '/projects/pokedex/logo.svg',
    github: 'https://github.com/EvanderInacio/Pokedex',
    web: 'https://pokedex-evander.vercel.app/',
    description:
      'O Pokedex é um projeto que consiste em uma plataforma web que tem como funcionalidade listar todos os Pokémons. Todos os dados sobre os pokémons foram obtidos através da PokéApi. A lista conta com a possibilidade de pesquisar um determinado pokémon, assim como cada pokémon recebe uma cor de card dependendo de seu atributo fornecido da api. Pegando esse dado determino uma cor para cara pokémon e assim fica com uma interface agradável e intuitiva para navegação.',
    tags: [
      {
        name: 'Next JS',
        icon: '/skills/next-js.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'TypeScript',
        icon: '/skills/typescript.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Styled Components',
        icon: '/skills/styled-components.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      }
    ],
    print: [
      {
        name: 'Home',
        description:
          'Pagina inicial de pokémons onde mostra um carrousel de imagens de alguns pokémons.',
        img: '/projects/pokedex/pokedex-index.png'
      },
      {
        name: 'Pokedex Lista',
        description:
          'Pagina mostrando uma lista de pokémons separados por tipo e dependendo do seu tipo uma cor de card é atribuído a ele facilitando assim a escolha de um tipo, com opção de busca.',
        img: '/projects/pokedex/pokedex-home.png'
      },
      {
        name: 'Detalhes',
        description:
          'Pagina de detalhes de um pokémon, mostrando uma imagem dele, junto com o fundo da cor que foi atribuída pelo seu tipo e o rank que ele pertence dentro da PokeAPI.',
        img: '/projects/pokedex/pokedex-detail.png'
      },
      {
        name: 'Sobre Detalhes',
        description:
          'Segunda parte da pagina de detalhes onde mostra mais detalhes desse pokémon como o tipo dele, peso, altura, formas e atributos.',
        img: '/projects/pokedex/pokedex-detail-about.png'
      },
      {
        name: 'Detalhes Status',
        description:
          'Terceira parte da pagina de detalhes onde mostra os status de ataque, defesa, vida, ataque especial, etc...',
        img: '/projects/pokedex/pokedex-detail-stats.png'
      }
    ],
    status: 'Completo',
    year: '2023',
    gif: '/projects/pokedex/pokedex.mp4',
    backgroundImage: '/projects/pokedex/pokedex-index.png',
    video:
      'https://www.youtube.com/watch?v=gWCbt85ltto&ab_channel=EvanderIn%C3%A1cio'
  } */
]

export default projects
