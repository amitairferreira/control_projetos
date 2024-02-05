# Propriedades de bons projeto

## Integridade conceitual;
Um sistema não pode ser um amontoado de funcionalidades, sem coerência e coesão entre elas. Integridade conceitual é importante porque facilita o uso e entendimento de um sistema por parte de seus usuários. A integridade conceitual representa a coerência e padronização de funcionalidades, projeto e implementação.

## Ocultamento de informação; 
A modularização é apresentada como sendo um mecanismo capaz de tornar sistemas de software mais flexíveis e fáceis de entender e, ao mesmo tempo, reduzir o tempo de desenvolvimento deles. A efetividade de uma determinada modularização depende do critério usado para dividir um sistema em módulos. As classe devem ocultar detalhes internos de sua implementação, principalmente aqueles suhejeitos a mudanças.

Ocultamento de informação traz as seguintes vantagens para um sistema:

- Desenvolvimento em paralelo. Suponha que um sistema X foi implementado por meio de classes C1, C2, …, Cn. Quando essas classes ocultam suas principais informações, fica mais fácil implementá-las em paralelo, por desenvolvedores diferentes. Consequentemente, teremos uma redução no tempo total de implementação do sistema.

- Flexibilidade a mudanças. Por exemplo, suponha que descobrimos que a classe Ci é responsável pelos problemas de desempenho do sistema. Quando detalhes de implementação de Ci são ocultados do resto do sistema, fica mais fácil trocar sua implementação por uma classe Ci', que use estruturas de dados e algoritmos mais eficientes. Essa troca também é mais segura, pois como as classes são independentes, diminui-se o risco de a mudança introduzir bugs em outras classes.

- Facilidade de entendimento. Por exemplo, um novo desenvolvedor contratado pela empresa pode ser alocado para trabalhar em algumas classes apenas. Portanto, ele não precisará entender toda a complexidade do sistema, mas apenas a implementação das classes pelas quais ficou responsável.

## Coesão;
A implementação de qualquer classe deve ser coesa, isto é, toda classe deve implementar uma única funcionalidade ou serviço. Especificamente, todos os métodos e atributos de uma classe devem estar voltados para a implementação do mesmo serviço. Uma outra forma de explicar coesão é afirmando que toda classe deve ter uma única responsabilidade no sistema. Ou, ainda, afirmando que deve existir um único motivo para modificar uma classe.

Coesão tem as seguintes vantagens:

- Facilita a implementação de uma classe, bem como o seu entendimento e manutenção.

- Facilita a alocação de um único responsável por manter uma classe.

- Facilita o reúso e teste de uma classe, pois é mais simples reusar e testar uma classe coesa do que uma classe com várias responsabilidades.

## Acoplamento;
Acoplamento é a força da conexão entre duas classes. São dois tipos de acoplamento entre classes: acoplamento aceitável e acoplamento ruim.
Dizemos que existe um acoplamento aceitável de uma classe A para uma classe B quando:
- A classe A usa apenas métodos públicos da classe B.

- A interface provida por B é estável do ponto de vista sintático e semântico. Isto é, as assinaturas dos métodos públicos de B não mudam com frequência; e o mesmo acontece como o comportamento externo de tais métodos. Por isso, são raras as mudanças em B que terão impacto na classe A.

Por outro lado, existe um acoplamento ruim de uma classe A para uma classe B quando mudanças em B podem facilmente impactar A. Isso ocorre principalmente nas seguintes situações:

- Quando a classe A realiza um acesso direto a um arquivo ou banco de dados da classe B.

- Quando as classes A e B compartilham uma variável ou estrutura de dados global. Por exemplo, a classe B altera o valor de uma variável global que a classe A usa no seu código.

- Quando a interface da classe B não é estável. Por exemplo, os métodos públicos de B são renomeados com frequência

Acoplamento pode ser de grande utilidade, principalmente quando ocorre com a interface de uma classe estável que presta um serviço relevante para a classe de origem. Já o acoplamento ruim deve ser evitado, pois é um acoplamento não mediado por interfaces. Mudanças na classe de destino do acoplamento podem facilmente se propagar para a classe de origem.

# Princípios de bons projetos - SOLID

## Responsabilidade única;
Esse princípio é uma aplicação direta da ideia de coesão. Ele propõe o seguinte: toda classe deve ter uma única responsabilidade. Mais ainda, responsabilidade, no contexto do princípio, significa motivo para modificar uma classe. Ou seja, deve existir um único motivo para modificar qualquer classe em um sistema. Um corolário desse princípio recomenda separar apresentação de regras de negócio. Portanto, um sistema deve possuir classes de apresentação, que vão tratar de aspectos de sua interface com os usuários, formato das mensagens, meio no qual as mensagens serão exibidas, etc. E classes responsáveis por regras de negócio, isto é, que vão realizar as computações, processamento, análises, etc. São interesses e responsabilidades diferentes. E que podem evoluir e sofrer modificações por razões distintas. Portanto, elas devem ser implementadas em classes diferentes.

## Aberto/Fechado;
Esse princípio, originalmente proposto por Bertrand Meyer ainda na década de 80, defende algo que pode parecer paradoxal: uma classe deve estar fechada para modificações e aberta para extensões.No entanto, o aparente paradoxo se esclarece quando o projeto da classe prevê a possibilidade de extensões e customizações. Para isso, o projetista pode se valer de recursos como herança, funções de mais alta ordem (ou funções lambda) e padrões de projeto, como Abstract Factory, Template Method e Strategy. Especificamente, no próximo capítulo, iremos tratar de padrões de projeto que permitem customizar uma classe sem modificar o seu código. Em resumo, o Princípio Aberto/Fechado tem como objetivo a construção de classes flexíveis e extensíveis, capazes de se adaptarem a diversos cenários de uso, sem modificações no seu código fonte.

## Substituição de Liskov;
 Hoje, o emprego de herança é mais restrito e raro. No entanto, alguns casos de uso ainda são justificados. Herança define uma relação é-um entre objetos de uma classe base e objetos de subclasses. A vantagem é que comportamentos (isto é, métodos) comuns a essas classes podem ser implementados uma única vez, na classe base. Feito isso, eles são herdados em todas as subclasses.
 De forma mais concreta, o Princípio de Substituição de Liskov define o seguinte: suponha que um cliente chame um método getPrimo(n) de um objeto p da classe NumeroPrimo. Suponha agora que o objeto p seja substituído por um objeto de uma subclasse de NumeroPrimo. Nesse caso, o cliente vai passar a executar o método getPrimo(n) dessa subclasse. Porém, essa substituição de métodos não deve ter impacto no comportamento do cliente. Para tanto, todos os métodos getPrimo(n) das subclasses de NumeroPrimo devem realizar as mesmas tarefas que o método original, possivelmente de modo mais eficiente.



## Segregação de Interfaces;
O princípio define que interfaces têm que ser pequenas, coesas e, mais importante ainda, específicas para cada tipo de cliente. O objetivo é evitar que clientes dependam de interfaces com métodos que eles não vão usar. Para evitar isso, duas ou mais interfaces específicas podem, por exemplo, substituir uma interface de propósito geral.
Uma violação do princípio ocorre, por exemplo, quando uma interface possui dois conjuntos de métodos Mx e My. O primeiro conjunto é usado por clientes Cx (que então não usam os métodos My). De forma inversa, os métodos My são usados apenas por clientes Cy (que não usam os métodos Mx). Consequentemente, essa interface deveria ser quebrada em duas interfaces menores e específicas: uma interface contendo apenas os métodos Mx e a segunda interface contendo apenas os métodos My.

## Inversão de dependências;
Esse princípio recomenda que uma classe cliente deve estabelecer dependências prioritariamente com abstrações e não com implementações concretas, pois abstrações (isto é, interfaces) são mais estáveis do que implementações concretas (isto é, classes). A ideia é então trocar (ou inverter) as dependências: em vez de depender de classes concretas, clientes devem depender de interfaces. Portanto, um nome mais intuitivo para o princípio seria Prefira Interfaces a Classes.
Para detalhar a ideia do princípio, suponha que exista uma interface I e uma classe C1 que a implementa. Se puder escolher, um cliente deve se acoplar a I e não a C1. O motivo é que quando um cliente se acopla a uma interface I ele fica imune a mudanças na implementação dessa interface. Por exemplo, em vez de C1, pode-se mudar a implementação para C2, que isso não terá impacto no cliente em questão.



## Prefira Interfaces a classes;
## Demeter;
