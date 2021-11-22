 # React Native - Orgs

 Neste projeto, um app chamado Orgs foi desenvolvido para entender como o React Native funciona. 
 Esse é um projeto da Alura da trilha mobile e se chama React Native: Começando do zero.

## Como utilizar o projeto?

### instalar as bibliotecas
  `npm install`

### rodar o app no expo
  `expo start`   
## Expo e outras explicações

 O expo foi utilizado para auxiliar no desenvolvimento, ele é um recurso muito prático para quem desenvolve 
 com React Native pois traz algumas vantagens, como por exemplo, os aplicativos ocupam menos espaço no 
 celular do que aplicativos criados da forma tradicional, e com o expo é possível rodar o aplicativo no 
 proprio celular através do app da Expo, ou através de um emulador Android ou IOS.

## Alguns aprendizados com o React Native

  Aqui são alguns pontos que aprendi durante esse curso de ReactNative:

- o AppJs retorna uma função, contem uma View que é o componente de visualização. São componentes do react-native.

- as classes precisam do import do React

- o safe area view delimita um pequeno espaço acima da tela onde geralmente fica a data. Pode parecer meio estranho no inicio, mas ele garante que a aplicação fique mais legal com essa delimitação. Isso é 
uma atenção para aparelhos com sistema IOS. 

- o Dimensions do react native ele ajuda a arrumar as coisas na tela, e isso pode ser obtido capturando o width atraves do Dimension e calculando: 
	
     heigth: altura / largura * width

- components sao utilizados para ser reutilizados em toda a aplicação quando não for dessa maneira, nao se deve usar componentes
