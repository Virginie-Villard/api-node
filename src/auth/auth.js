

export async function authMiddleware(req, res, next)
{
    let authenticated = true;
    if (authenticated) next()
    else res.status(403).send("Not allowed")
}