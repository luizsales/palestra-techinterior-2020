var ami = new require('asterisk-manager')(
                '5038',
                '127.0.0.1',
                'manager',
                'senha',
                true);



ami.action({
        'action':'originate',
        'channel':'SIP/101@101',
        'Callerid':'101',
        'Context': 'discador',
        'Exten': '100',
        'Priority': '1',
        'variable':{
          'chamada_id': 'abcd',
          'filename': 'teste'

                    
          }
        
    }, function(err, res) {
        ami.disconnect();
    });



