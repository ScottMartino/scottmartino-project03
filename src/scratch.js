// query the API
const fetchData = async () => {
    const url = new URL('https://rebrickable.com/api/v3/lego/minifigs/')
    url.search = new URLSearchParams({
        key: 'a4a279c7f86d60b0557cbc70201686e9',
        search: 'pirate',
        page_size: 10,
    })

    try {
        const data = await fetch(url)
        const response = await data.json()

        const photos = response.results

        const photoUrl = photos.map((photo) => {
            console.log(photo.set_img_url)

        })


    } catch (error) {

    }
}