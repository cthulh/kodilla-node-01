process.stdout.write('----------------------------------\n\n\n\n');
process.stdout.write('System language: ');
process.stdout.write(process.env.lang + '\n');
process.stdout.write('Node version: ');
process.stdout.write(process.versions.node + '\n');
process.stdout.write('\n');
process.stdout.write('Enter instruction: \n');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {


    var input = process.stdin.read();
    if (input!==null) {
      var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }

});
