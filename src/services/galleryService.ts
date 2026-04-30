const getGalleryData = async () => {
    // TODO: add setLoading
    // TODO: add setError
    fetch(`https://${import.meta.env.API_TOKEN}.mockapi.io/api/v1/products`, {
        method: "GET",
        headers: {'content-type':'application/json'},
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(items => {
            // TODO: add logic
            items.map((item) => {
            })
        })
        .catch(error => {
            console.log(`ERROR: ${error}`)
        })
}

export default getGalleryData();