import { rest } from "msw";

export const handlers = [
    rest.get(`${import.meta.env.VITE_API_URL}api/categories`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    name: 'jackets',
                    picture: "https://images.pexels.com/photos/14565976/pexels-photo-14565976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                    id: 2,
                    name: 'pants',
                    picture: "https://images.pexels.com/photos/15778292/pexels-photo-15778292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
            ])
        )
    })
]