// Callback

function successCallback(result) {
    console.log('Sound file is successfully created' + result)
}

function failCallback(error) {
    console.log('Creat sound file fail' + error)
}

function createAudioFileAsync(settings, success,fail) {
    setTimeout(()=> {
        if (settings=='ok') {
            success('This is success result')
        } else {
            fail('This is fail')
        }
    },1000)
}

const audioSettings = 'ok'
createAudioFileAsync(audioSettings, successCallback, failCallback)
