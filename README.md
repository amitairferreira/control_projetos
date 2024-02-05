Propriedades de bons projeto

Integridade conceitual;
Um sistema não pode ser um amontoado de funcionalidades, sem coerência e coesão entre elas. Integridade conceitual é importante porque facilita o uso e entendimento de um sistema por parte de seus usuários. A integridade conceitual representa a coerência e padronização de funcionalidades, projeto e implementação.

Ocultamento de informação; 
A modularização é apresentada como sendo um mecanismo capaz de tornar sistemas de software mais flexíveis e fáceis de entender e, ao mesmo tempo, reduzir o tempo de desenvolvimento deles. A efetividade de uma determinada modularização depende do critério usado para dividir um sistema em módulos. As classe devem ocultar detalhes internos de sua implementação, principalmente aqueles suhejeitos a mudanças.
Ocultamento de informação traz as seguintes vantagens para um sistema:

Desenvolvimento em paralelo. Suponha que um sistema X foi implementado por meio de classes C1, C2, …, Cn. Quando essas classes ocultam suas principais informações, fica mais fácil implementá-las em paralelo, por desenvolvedores diferentes. Consequentemente, teremos uma redução no tempo total de implementação do sistema.

Flexibilidade a mudanças. Por exemplo, suponha que descobrimos que a classe Ci é responsável pelos problemas de desempenho do sistema. Quando detalhes de implementação de Ci são ocultados do resto do sistema, fica mais fácil trocar sua implementação por uma classe Ci', que use estruturas de dados e algoritmos mais eficientes. Essa troca também é mais segura, pois como as classes são independentes, diminui-se o risco de a mudança introduzir bugs em outras classes.

Facilidade de entendimento. Por exemplo, um novo desenvolvedor contratado pela empresa pode ser alocado para trabalhar em algumas classes apenas. Portanto, ele não precisará entender toda a complexidade do sistema, mas apenas a implementação das classes pelas quais ficou responsável.

Coesão;
A implementação de qualquer classe deve ser coesa, isto é, toda classe deve implementar uma única funcionalidade ou serviço. Especificamente, todos os métodos e atributos de uma classe devem estar voltados para a implementação do mesmo serviço. Uma outra forma de explicar coesão é afirmando que toda classe deve ter uma única responsabilidade no sistema. Ou, ainda, afirmando que deve existir um único motivo para modificar uma classe.

Coesão tem as seguintes vantagens:

Facilita a implementação de uma classe, bem como o seu entendimento e manutenção.

Facilita a alocação de um único responsável por manter uma classe.

Facilita o reúso e teste de uma classe, pois é mais simples reusar e testar uma classe coesa do que uma classe com várias responsabilidades.

Acoplamento;
Acoplamento é a força da conexão entre duas classes. São dois tipos de acoplamento entre classes: acoplamento aceitável e acoplamento ruim.
Dizemos que existe um acoplamento aceitável de uma classe A para uma classe B quando:
A classe A usa apenas métodos públicos da classe B.

A interface provida por B é estável do ponto de vista sintático e semântico. Isto é, as assinaturas dos métodos públicos de B não mudam com frequência; e o mesmo acontece como o comportamento externo de tais métodos. Por isso, são raras as mudanças em B que terão impacto na classe A.

Por outro lado, existe um acoplamento ruim de uma classe A para uma classe B quando mudanças em B podem facilmente impactar A. Isso ocorre principalmente nas seguintes situações:

Quando a classe A realiza um acesso direto a um arquivo ou banco de dados da classe B.

Quando as classes A e B compartilham uma variável ou estrutura de dados global. Por exemplo, a classe B altera o valor de uma variável global que a classe A usa no seu código.

Quando a interface da classe B não é estável. Por exemplo, os métodos públicos de B são renomeados com frequência

Acoplamento pode ser de grande utilidade, principalmente quando ocorre com a interface de uma classe estável que presta um serviço relevante para a classe de origem. Já o acoplamento ruim deve ser evitado, pois é um acoplamento não mediado por interfaces. Mudanças na classe de destino do acoplamento podem facilmente se propagar para a classe de origem.





















Pricipios de bons projetos

Responsabilidade única;
Aberto/Fechado;
Substituição de Liskov;
Segregação de Interfaces;
Inversão de dependências;
Prefira Interfaces a calsses;
Demeter;