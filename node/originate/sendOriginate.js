var ami = new require('asterisk-manager')(
                '5038',
                '127.0.0.1',
                'user',
                '123',
                true);



ami.action({
        'action':'originate',
        'channel':'SIP/101@101',
        'Callerid':'101',
        'Context': 'node',
        'Exten': '100',
        'Priority': '1',
        'variable':{
          'var1': 'abcd',
          'var2': 'efg'

                    
          }
        
    }, function(err, res) {
        ami.disconnect();
    });



