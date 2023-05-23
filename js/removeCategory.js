var categoryToDelete = undefined;

function removeCategory() {
    console.log(categoryToDelete);
    if(categoryToDelete == undefined || categoryToDelete == null) {
        return;
    }

    const axios = window.axios;
    console.log(axios);

    axios.post('categories/remove.php', {
        id: categoryToDelete
    }, {
        headers : {
            'Content-Type': 'multipart/form-data'
        }
    }).then(function (r) {
        console.log(r);
        location.reload();
    }).catch(function (e) {
        console.error(e);
    });


}