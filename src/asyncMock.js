import 'bootstrap/dist/css/bootstrap.css';
const products =[
    {
        id: '1',
        name: 'Disco Kingston 120GB',
        price: 24.999,
        category: 'Discos SSD',
        img:'https://media.kingston.com/kingston/product-card/ktc-product-ssd-kc600-skc600-1-tn.png',
        stock: 20,
        description: 'La unidad de estado sólido A400 de Kingston mejora dramáticamente la capacidad de respuesta de su sistema existente con velocidades increíbles de inicio, carga y transferencia, comparadas con los discos duros mecánicos. Usando un controlador de última generación para leer y escribir a velocidades de hasta 500MB/seg y 450MB/seg, este SSD es 10 veces más rápido que un disco duro tradicional1 para un mejor rendimiento, mayor capacidad de respuesta y multi-tarea, y en general un sistema más rápido. Además de ser más confiable y duradero, el A400 está disponible en múltiples capacidades, desde 120GB a 960GB2.'
    },

    {
        id: '2',
        name: 'Memoria Kingston ',
        price: 44.999,
        category: 'Memorias',
        img:'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-rgb-single-1-tn.png',
        stock: 10,
        description: 'Kingston FURY™ Beast DDR5 RGB1 te permite hacer overclocking en plataformas de juegos de ultima generación con tecnología de vanguardia. Experimenta los avances de velocidad superiores de DDR5 con el doble de bancos y doble longitud de ráfaga.'
    },

    {
        id: '3',
        name: 'Audifonos',
        price: 14.999,
        category: 'Audifonos',
        img:'https://casaroyal.cl/media/catalog/product/1/1/111625_7_1_.jpg?width=300&height=&canvas=300,&optimize=high&bg-color=255,255,255&fit=bounds',
        stock: 15,
        description: 'Gana conectividad y comodidad con los Audífonos inalámbricos WH-CH520 de Sony. Modelo con conexión BT 5.2 y una respuesta de frecuencia de 20 Hz - 20.000 Hz. Tu mejor alternativa para escuchar tus canciones preferidas y audios.'
    },

]
export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 500);
    });
  };