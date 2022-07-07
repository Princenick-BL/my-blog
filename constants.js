export const SECTION_TYPE = {
    TEXT_BLOCK : "TEXT_BLOCK",
    IMAGE : "IMAGE_BLOCK",
}

export const config ={
    API_ENDPOINT : process.env.NEXT_PUBLIC_APP_API_ENDPOINT|| "https://api-nickscorp-app.herokuapp.com"
    //API_ENDPOINT : "/api"
}

export const categories = [
    {
        id: 1,
        color : "red",
        name : "Cars"
    },
    {
        id: 2,
        color : "green",
        name : "Jewelry"
    },
    {
        id: 3,
        color : "orange",
        name : "Houses"
    }
]