$('#google-button').on('click', function () {
    OAuth.popup('google').then(google => {
        console.log('google:', google);
    })
})