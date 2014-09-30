var ami = new require('asterisk-manager')(
                '5038',
                '127.0.0.1',
                'user',
                '123',
                true);



 ami.action({
        'action':'events',
       'eventmask':'cdr'
    }, function(err, res) {
        console.log(res);
    });


ami.on('managerevent', function(evt) { 


console.log(evt);


});



