import { Product } from "./types/Product.interface";

export default function ProductsList() {
    let products = [
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
        {
          name: "Smartwatch X1",
          image: "https://via.placeholder.com/150",
          description: "Smartwatch com monitoramento de saúde, notificações e GPS integrado.",
          category: "Tecnologia"
        },
        {
          name: "Fone de Ouvido Wireless",
          image: "https://via.placeholder.com/150",
          description: "Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
          category: "Tecnologia"
        },
        {
          name: "Cadeira Gamer Pro",
          image: "https://via.placeholder.com/150",
          description: "Cadeira ergonômica para gamers com apoio para os braços e ajustes de altura.",
          category: "Mobiliário"
        },
        {
          name: "Mixer de Mão",
          image: "https://via.placeholder.com/150",
          description: "Mixer de mão potente para facilitar o preparo de alimentos.",
          category: "Eletrodomésticos"
        },
        {
          name: "Mochila de Viagem",
          image: "https://via.placeholder.com/150",
          description: "Mochila resistente, ideal para viagens longas e para carregar equipamentos.",
          category: "Moda"
        },
        {
          name: "Smartphone Z7",
          image: "https://via.placeholder.com/150",
          description: "Smartphone com câmera de 108MP e tela OLED.",
          category: "Tecnologia"
        },
        {
          name: "Relógio de Pulso Luxo",
          image: "https://via.placeholder.com/150",
          description: "Relógio elegante com pulseira de couro e design sofisticado.",
          category: "Acessórios"
        },
        {
          name: "Óculos de Sol UV",
          image: "https://via.placeholder.com/150",
          description: "Óculos de sol com proteção UV e estilo moderno.",
          category: "Moda"
        },
        {
          name: "Cafeteira Automática",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira automática com timer e controle de intensidade do café.",
          category: "Eletrodomésticos"
        },
        {
          name: "Livro 'A Jornada'",
          image: "https://via.placeholder.com/150",
          description: "Romance de aventura e autodescoberta, com uma história emocionante.",
          category: "Livros"
        },
        {
          name: "Tênis de Corrida Speed",
          image: "https://via.placeholder.com/150",
          description: "Tênis leve e confortável, ideal para corridas e exercícios físicos.",
          category: "Esportes"
        },
        {
          name: "Garrafa Térmica de Inox",
          image: "https://via.placeholder.com/150",
          description: "Garrafa de inox que mantém sua bebida quente ou fria por horas.",
          category: "Casa"
        },
        {
          name: "Console de Videogame Nova Geração",
          image: "https://via.placeholder.com/150",
          description: "Console de última geração com gráficos 4K e jogos exclusivos.",
          category: "Tecnologia"
        },
        {
          name: "Camiseta Esportiva Fit",
          image: "https://via.placeholder.com/150",
          description: "Camiseta confortável e respirável, ideal para atividades físicas.",
          category: "Moda"
        },
        {
          name: "Fritadeira Sem Óleo",
          image: "https://via.placeholder.com/150",
          description: "Fritadeira sem óleo que permite preparar alimentos mais saudáveis.",
          category: "Eletrodomésticos"
        },
        {
          name: "Camiseta Personalizada",
          image: "https://via.placeholder.com/150",
          description: "Camiseta com estampa personalizada, perfeita para presentear.",
          category: "Moda"
        },
        {
          name: "Manta de Sofá",
          image: "https://via.placeholder.com/150",
          description: "Manta aconchegante para deixar o seu sofá mais confortável.",
          category: "Casa"
        },
        {
          name: "Cafeteira Espresso",
          image: "https://via.placeholder.com/150",
          description: "Cafeteira espresso para preparar cafés de qualidade em casa.",
          category: "Eletrodomésticos"
        },
        {
          name: "Aspirador de Pó Robô",
          image: "https://via.placeholder.com/150",
          description: "Aspirador de pó robô inteligente, ideal para limpeza automática.",
          category: "Tecnologia"
        },
        {
          name: "Sofá Reclinável",
          image: "https://via.placeholder.com/150",
          description: "Sofá confortável e reclinável, ideal para relaxar após um longo dia.",
          category: "Mobiliário"
        },
      ];

      return products

}