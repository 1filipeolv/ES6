    let front = ['react', 'vue', 'angular'];
    let back = ['python', 'ruby', 'nodejs'];

    // let fullStack = [];
    // fullStack = fullStack.concat(front);
    // fullStack.push('RxJS');
    // fullStack = fullStack.concat(back);
    // 
    let fullStack = [...front, 'RxJS', ...back];

    console.log(fullStack);

    // console.log([...'will']);
    // console.log(...front);