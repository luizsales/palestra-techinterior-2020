Asterisk + Node
===============

Sobre esse repositório
----------------------

Apresentei uma palestra sobre como é interessante utilizar o [Nodejs](www.nodejs.orj) com [asterisk](www.asterisk.org) em um dos eventos do pessoal do Nodebr. Se quiser ver os slides sobre esse tema estão disponiveis [aqui](http://www.slideshare.net/LuizSales3/asterisk-node).



Pastas
------
Asterisk:

    asterisk/sip.conf                 Configurações do protocolo SIP.
    asterisk/extension.conf           Planos de discagem.
    asterisk/manager.conf             Permissões de acesso na porta 5038.
    asterisk/cdr_custom.conf          Responsavel pelo conteudo em /var/log/asterisk/cdr-custom/.
    asterisk/users.conf               Configuração dos nossos ramais de teste
    asterisk/*                        Os demais arquivos são configurações adicionais para nosso teste.

Nodejs:

    node/cdr/cdr.js                           Conecta na porta 5038 e ao final de uma chamada recebe o bilhete da                                                    chamada.
    node/keen.io/read_cdr_file_save_keeio.js  Nesse exemplo o node aguarda a inserção de um novo bilhete no arquivo                                                  configurado em cdr_custom e o envia para keen.io para mais informações                                                 sobre o keen acesse www.keen.io.
    node/originate/sendOriginate.js           Exemplo que gera uma chamada entre o ramal 101 e 100.



